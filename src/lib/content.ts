import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Section {
  id: string;
  title: string;
  content: string;
}

export function getHomeContent() {
  const filePath = path.join(process.cwd(), 'content', 'home.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  const sections: Section[] = [];
  const rawSections = content.split('### Section: ');
  
  rawSections.forEach(raw => {
    if (!raw.trim()) return;
    const lines = raw.split('\n');
    const id = lines[0].trim();
    const content = lines.slice(1).join('\n').trim();
    
    // Simple title extraction
    const titleMatch = content.match(/^#+\s*(.*)/);
    const title = titleMatch ? titleMatch[1] : id;

    sections.push({ id, title, content });
  });

  return { meta: data, sections };
}
