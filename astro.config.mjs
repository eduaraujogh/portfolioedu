import { defineConfig } from 'astro/config';

// Publicado no GitHub Pages: https://eduaraujogh.github.io/portfolioedu/
// Ao migrar para domínio próprio, trocar `site` e remover `base`.
export default defineConfig({
  site: 'https://eduaraujogh.github.io',
  base: '/portfolioedu',
  devToolbar: { enabled: false },
});
