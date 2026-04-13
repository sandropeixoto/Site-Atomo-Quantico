const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const TurndownService = require('turndown');
const { gfm } = require('turndown-plugin-gfm');

const TARGET_URL = 'https://atomoquantico.com.br';
const ASSETS_DIR = path.join(__dirname, 'assets');
const CONTENT_DIR = path.join(__dirname, 'content');

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});
turndownService.use(gfm);

async function downloadFile(url, dest) {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    return new Promise((resolve, reject) => {
      const writer = fs.createWriteStream(dest);
      response.data.pipe(writer);
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Failed to download ${url}: ${error.message}`);
  }
}

async function capture() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log(`🚀 Navegando para ${TARGET_URL}...`);
  await page.goto(TARGET_URL, { waitUntil: 'networkidle' });

  // Scroll to trigger lazy-load
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      let distance = 100;
      let timer = setInterval(() => {
        let scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });

  console.log('📦 Extraindo estrutura e mídias...');

  // SEO & Meta
  const meta = await page.evaluate(() => {
    return {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content || '',
      keywords: document.querySelector('meta[name="keywords"]')?.content || '',
      ogTitle: document.querySelector('meta[property="og:title"]')?.content || '',
      ogDescription: document.querySelector('meta[property="og:description"]')?.content || '',
    };
  });

  // Extract Next.js Data if available
  const nextData = await page.evaluate(() => {
    const script = document.getElementById('__NEXT_DATA__');
    if (script) {
      try {
        return JSON.parse(script.textContent);
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  if (nextData) {
    fs.writeFileSync(path.join(CONTENT_DIR, 'next-data.json'), JSON.stringify(nextData, null, 2));
    console.log('💎 Dados do Next.js (__NEXT_DATA__) capturados!');
  }

  // Sections/Content - More aggressive search
  const sections = await page.evaluate(() => {
    // Try to find elements that look like cards or major blocks
    let elements = Array.from(document.querySelectorAll('section, main > div, article, .gamma-card, [data-testid="card"]'));
    
    // If none found, look for top-level divs with significant content
    if (elements.length < 3) {
      elements = Array.from(document.querySelectorAll('#__next > div > div > div'));
    }

    return elements.map((el, i) => ({
      index: i,
      id: el.id || `section-${i}`,
      className: el.className,
      html: el.innerHTML,
      text: el.innerText
    })).filter(s => s.text.trim().length > 20); // Filter out empty/small ones
  });

  // Images
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt,
      class: img.className
    })).filter(img => img.src && !img.src.startsWith('data:'));
  });

  // Embeds
  const embeds = await page.evaluate(() => {
    const youtube = Array.from(document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="youtu.be"]')).map(f => ({
      type: 'YouTube',
      url: f.src,
      containerClass: f.parentElement.className
    }));
    const instagram = Array.from(document.querySelectorAll('blockquote.instagram-media, iframe[src*="instagram.com"]')).map(f => ({
      type: 'Instagram',
      url: f.getAttribute('data-instgrm-permalink') || f.src,
      containerClass: f.parentElement.className
    }));
    return [...youtube, ...instagram];
  });

  // Download images including external CDN
  for (const img of images) {
    const isLocal = img.src.startsWith(TARGET_URL) || img.src.startsWith('/');
    const isGamma = img.src.includes('cdn.gamma.app');
    
    if (isLocal || isGamma) {
      const urlObj = new URL(img.src.startsWith('/') ? TARGET_URL + img.src : img.src);
      const fileName = path.basename(urlObj.pathname);
      const isIcon = urlObj.pathname.includes('/icons/');
      const subDir = isIcon ? 'icons' : 'images';
      const dest = path.join(ASSETS_DIR, subDir, fileName);
      
      console.log(`Downloading ${subDir}: ${fileName}`);
      await downloadFile(urlObj.href, dest);
    }
  }

  // Also check nextData for any other assets
  if (nextData) {
    const dataStr = JSON.stringify(nextData);
    const assetUrls = dataStr.match(/https:\/\/cdn\.gamma\.app\/[^"]*\.(png|jpg|jpeg|webp|svg)/g) || [];
    for (const url of [...new Set(assetUrls)]) {
      const urlObj = new URL(url);
      const fileName = path.basename(urlObj.pathname);
      const isIcon = urlObj.pathname.includes('/icons/');
      const subDir = isIcon ? 'icons' : 'images';
      const dest = path.join(ASSETS_DIR, subDir, fileName);
      
      if (!fs.existsSync(dest)) {
        console.log(`Downloading extra ${subDir}: ${fileName}`);
        await downloadFile(url, dest);
      }
    }
  }

  // Create Markdown
  let markdown = `---\ntitle: "${meta.title}"\ndescription: "${meta.description}"\nkeywords: "${meta.keywords}"\n---\n\n`;
  
  for (const section of sections) {
    const md = turndownService.turndown(section.html);
    markdown += `### Section: ${section.id}\n\n${md}\n\n`;
  }

  if (embeds.length > 0) {
    markdown += `## External Embeds\n\n`;
    embeds.forEach(e => {
      markdown += `[EMBED_EXTERNAL]\nType: ${e.type}\nURL: ${e.url}\nOriginal_Container_Class: ${e.containerClass}\n\n`;
    });
  }

  if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.writeFileSync(path.join(CONTENT_DIR, 'home.md'), markdown);

  // Sitemap (Simplified)
  const links = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a'))
      .map(a => a.href)
      .filter(href => href.startsWith(window.location.origin))
      .filter((v, i, a) => a.indexOf(v) === i);
  });
  
  fs.writeFileSync(path.join(CONTENT_DIR, 'site-map.json'), JSON.stringify({ meta, links, embeds }, null, 2));

  console.log('✅ Captura finalizada com sucesso!');
  await browser.close();
}

capture().catch(console.error);
