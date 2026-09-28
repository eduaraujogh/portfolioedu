// Conteúdo editável do site. A estrutura visual vive nos componentes;
// para mudar textos, links e projetos, edite apenas este arquivo.

export const site = {
  name: 'Eduardo Araújo',
  role: 'Designer gráfico',
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
    lead: 'Eduardo Araújo — designer gráfico',
    rest: 'que transforma assuntos complexos em marcas, telas e campanhas claras.',
    now: 'Hoje no Grupo SBA, criando para Artta e SB Crédito.',
    before: 'Antes: Grupo Ergon (Gedisa e Gaslog), Grupo Exati e Agência Allano.',
  },

  // Placeholders até recebermos os projetos reais.
  // TODO: anos de Ergon e SBA
  works: [
    { client: 'Grupo SBA', brands: 'Artta · SB Crédito', year: '', tone: '#d9d6cf' },
    { client: 'Grupo Ergon', brands: 'Gedisa · Gaslog', year: '', tone: '#cfd3d1' },
    { client: 'Grupo Exati', brands: 'Site, LPs, estandes, vídeo', year: '2021—24', tone: '#d6d2d8' },
  ],
} as const;
