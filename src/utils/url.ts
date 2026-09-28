// Prefixa rotas internas com o `base` do site (necessário no GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (href: string) => (href.startsWith('/') ? `${base}${href}` : href);

export const stripBase = (pathname: string) =>
  (pathname.startsWith(base) ? pathname.slice(base.length) : pathname).replace(/\/$/, '') || '/';
