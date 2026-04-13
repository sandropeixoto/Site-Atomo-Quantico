# Sugestões de Melhoria - Átomo Quântico

Com base na reconstrução e modernização do site, seguem sugestões técnicas e de UX:

## 🚀 Performance & Core Web Vitals
- **Imagens WebP/AVIF:** Implementar conversão automática de imagens legadas para formatos modernos usando `next/image`.
- **Lite YouTube Embeds:** Usar `react-lite-youtube-embed` para evitar carregamento pesado de JS do YouTube antes da interação do usuário.
- **Font-Display Swap:** Garantir que as fontes do Google carreguem sem bloquear a renderização.

## 🎨 UI/UX (Modernização)
- **Micro-interações:** Adicionar efeitos de "Magnetic Buttons" nos CTAs principais para uma sensação mais premium.
- **Scroll Progress Indicator:** Uma linha sutil no topo do header que indica o progresso da leitura.
- **Dark Mode Automático:** Sincronizar com a preferência do sistema do usuário, mas manter o tema cósmico escuro como padrão.

## ⚙️ Funcionalidades Extra
- **Busca via Algolia/InstantSearch:** Facilitar a navegação em conteúdos de blog/artigos.
- **Zodiac API integration:** Em vez de estático, buscar horóscopo do dia via API externa.
- **WhatsApp Chat Widget:** Integrar um chat flutuante de suporte via WhatsApp (já mapeado no site original).

## 🔍 SEO & Conteúdo
- **Gerador de Sitemap Dinâmico:** Usar `next-sitemap` para manter o Google atualizado sobre novas páginas de signos.
- **Schema.org JSON-LD:** Adicionar metadados estruturados para "LocalBusiness" ou "EducationalOrganization".
