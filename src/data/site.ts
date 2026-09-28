// Conteúdo editável do site. A estrutura visual vive nos componentes;
// para mudar textos, links e projetos, edite apenas este arquivo.

// Ano em que comecei a trabalhar com design; os anos de experiência se atualizam sozinhos.
const startYear = 2015;
const years = new Date().getFullYear() - startYear;

export const site = {
  name: 'Eduardo Araújo',
  role: 'Diretor de Arte Sênior',
  location: 'Curitiba, BR',
  email: 'edujunior254@gmail.com',

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Works', href: '/works' },
  ],

  // TODO: preencher as URLs reais
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Behance', href: '#' },
    { label: 'Instagram', href: '#' },
  ],

  hero: {
    // Primeira parte: quem é (tom principal). Segunda: o que diferencia (tom secundário).
    lead: 'Eduardo Araújo — Designer Digital e Diretor de Arte Sênior',
    rest: 'que transforma assuntos complexos em marcas, telas e campanhas claras.',
    // Apresentação ao lado do título: quem sou, não onde trabalhei (isso vai para Experiência).
    about:
      `Designer apaixonado por marcas, interfaces e campanhas bem resolvidas. Há ${years} anos ajudo empresas a tirar ideias do papel, seja uma identidade visual, um site ou uma campanha inteira.`,
  },

  about: {
    label: 'Sobre',
    // Frase em dois tons, como no hero: primeira parte forte, resto em tom secundário.
    lead: 'Oi, eu sou o Eduardo.',
    rest: 'Desde 2015 crio marcas, sites e campanhas para empresas de diferentes segmentos, cuidando de cada projeto do conceito à entrega. Já trabalhei em agência, coordenei times de design e hoje atuo como Diretor de Arte no mercado financeiro.',
    // Números: só entram os que tiverem valor real. TODO: projetos entregues, marcas atendidas.
    stats: [
      { value: String(years), suffix: '+', label: 'anos de experiência' },
    ],
    brandsLabel: 'Marcas com quem trabalhei',
    brands: ['Artta', 'SB Crédito', 'Gedisa', 'Gaslog', 'Grupo Exati', 'Agência Allano'],
  },

  // Projetos (mesmos da Slowexe). Capa: src/assets/works/<slug>.webp
  // featured: aparece na home. O primeiro em destaque ocupa a largura toda.
  works: [
    { slug: 'sabores', name: 'Sabores de Curitiba', sector: 'Gastronomia', discipline: 'Identidade Visual', featured: true },
    // focus: ponto da imagem que fica visível quando a capa é recortada (object-position)
    { slug: 'gedisa', name: 'Gedisa', sector: 'Energia', discipline: 'Web Design', featured: true, focus: 'left center' },
    { slug: 'fense', name: 'Fense Seguradora', sector: 'Seguros', discipline: 'Identidade Visual', featured: true },
    { slug: 'duo', name: 'Duo Garage', sector: 'Automotivo', discipline: 'Identidade Visual', featured: true },
    { slug: 'golden-vibes', name: 'Golden Vibes', sector: 'Semijoias', discipline: 'Branding', featured: true },
    { slug: 'bioerde', name: 'Bioerde', sector: 'Agronegócio', discipline: 'Branding', featured: false },
    { slug: 'riverside', name: 'Riverside', sector: 'Outdoor', discipline: 'Identidade Visual', featured: false },
    { slug: 'thalles', name: 'Thalles Consultoria', sector: 'Consultoria', discipline: 'Identidade Visual', featured: false },
  ],
} as const;

export type Work = (typeof site.works)[number];

const covers = import.meta.glob<{ default: ImageMetadata }>('../assets/works/*.webp', { eager: true });

export const coverOf = (slug: string) => {
  const img = covers[`../assets/works/${slug}.webp`];
  if (!img) throw new Error(`Capa não encontrada: src/assets/works/${slug}.webp`);
  return img.default;
};
