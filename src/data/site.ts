// Conteúdo editável do site. A estrutura visual vive nos componentes;
// para mudar textos, links e projetos, edite apenas este arquivo.

// Ano em que comecei a trabalhar com design; os anos de experiência se atualizam sozinhos.
const startYear = 2015;
const years = new Date().getFullYear() - startYear;

export const site = {
  name: 'Eduardo Araújo',
  role: 'Diretor de arte sênior',
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
    lead: 'Eduardo Araújo — designer digital e diretor de arte sênior',
    rest: 'que transforma assuntos complexos em marcas, telas e campanhas claras.',
    // Apresentação ao lado do título: quem sou, não onde trabalhei (isso vai para Experiência).
    about:
      `Designer apaixonado por marcas, interfaces e campanhas bem resolvidas. Há ${years} anos ajudo empresas a tirar ideias do papel, seja uma identidade visual, um site ou uma campanha inteira.`,
  },

  // Placeholders até recebermos os projetos reais.
  // TODO: anos de Ergon e SBA
  works: [
    { client: 'Grupo SBA', brands: 'Artta · SB Crédito', year: '', tone: '#d9d6cf' },
    { client: 'Grupo Ergon', brands: 'Gedisa · Gaslog', year: '', tone: '#cfd3d1' },
    { client: 'Grupo Exati', brands: 'Site, LPs, estandes, vídeo', year: '2021—24', tone: '#d6d2d8' },
  ],
} as const;
