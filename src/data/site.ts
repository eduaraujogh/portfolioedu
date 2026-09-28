// Conteúdo editável do site. A estrutura visual vive nos componentes;
// para mudar textos, links e projetos, edite apenas este arquivo.

// Ano em que comecei a trabalhar com design; os anos de experiência se atualizam sozinhos.
const startYear = 2015;
const years = new Date().getFullYear() - startYear;

export const site = {
  name: 'Eduardo Araújo',
  role: 'Designer Sênior multidisciplinar',
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
    lead: 'Designer Sênior multidisciplinar,',
    rest: 'à frente de todas as áreas de design de uma marca: identidade visual, UX/UI, campanhas, low-code e motion design.',
    // Apresentação ao lado do título: quem sou, não onde trabalhei (isso vai para Experiência).
    about:
      `Apaixonado por marcas, interfaces e campanhas bem resolvidas. Há ${years} anos ajudo empresas a tirar ideias do papel, seja uma identidade visual, um aplicativo ou uma campanha inteira.`,
  },

  about: {
    label: 'Sobre',
    // Frase em dois tons, como no hero: primeira parte forte, resto em tom secundário.
    lead: 'Oi, eu sou o Eduardo.',
    // Discurso centrado em mim e no meu jeito de trabalhar, nunca em um empregador específico.
    rest: 'Desde 2015 ajudo empresas de diferentes segmentos a construir marcas consistentes em todos os pontos de contato, da identidade visual ao site, das campanhas ao motion. Já passei por agência, coordenei times de design e cuido de cada projeto do conceito à entrega.',
    // Números: só entram os que tiverem valor real. TODO: projetos entregues, marcas atendidas.
    stats: [
      { value: String(years), suffix: '+', label: 'anos de experiência' },
    ],
    brandsLabel: 'Marcas com quem trabalhei',
    // Mistura empresas e clientes de projetos para não concentrar a lista em um só lugar.
    brands: ['Fense Seguradora', 'Artta', 'Sabores de Curitiba', 'SB Crédito', 'Thalles Consultoria', 'Gedisa', 'Duo Garage', 'Gaslog', 'Golden Vibes', 'Grupo Exati'],
  },

  // Texto sobre a foto em tela cheia (canto superior esquerdo)
  portrait: {
    // Adaptado do "Sobre" do currículo ("criar identidades que façam sentido, que se conectem
    // e que causem aquele impacto de 'é isso!'").
    title: 'Marcas que fazem sentido, se conectam e causam aquele “é isso!”.',
    cta: 'Entrar em contato',
  },

  // Projetos (mesmos da Slowexe). Capa: src/assets/works/<slug>.webp
  // featured: aparece na home. O primeiro em destaque ocupa a largura toda.
  works: [
    { slug: 'sabores', name: 'Sabores de Curitiba', sector: 'Gastronomia', discipline: 'Identidade Visual', featured: true },
    // Opcional: focus: 'left center' — ponto da imagem que fica visível quando a capa é recortada.
    // Gedisa fica fora até ter uma capa boa (a atual é print de site).
    { slug: 'thalles', name: 'Thalles Consultoria', sector: 'Consultoria', discipline: 'Identidade Visual', featured: true },
    { slug: 'fense', name: 'Fense Seguradora', sector: 'Seguros', discipline: 'Identidade Visual', featured: true },
    { slug: 'duo', name: 'Duo Garage', sector: 'Automotivo', discipline: 'Identidade Visual', featured: true },
    { slug: 'golden-vibes', name: 'Golden Vibes', sector: 'Semijoias', discipline: 'Branding', featured: true },
    { slug: 'bioerde', name: 'Bioerde', sector: 'Agronegócio', discipline: 'Branding', featured: false },
    { slug: 'riverside', name: 'Riverside', sector: 'Outdoor', discipline: 'Identidade Visual', featured: false },
  ],
} as const;

export type Work = (typeof site.works)[number];

const covers = import.meta.glob<{ default: ImageMetadata }>('../assets/works/*.webp', { eager: true });

export const coverOf = (slug: string) => {
  const img = covers[`../assets/works/${slug}.webp`];
  if (!img) throw new Error(`Capa não encontrada: src/assets/works/${slug}.webp`);
  return img.default;
};
