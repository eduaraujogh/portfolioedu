// Conteúdo editável do site. A estrutura visual vive nos componentes;
// para mudar textos, links e projetos, edite apenas este arquivo.

// Ano em que comecei a trabalhar com design; os anos de experiência se atualizam sozinhos.
export const startYear = 2015;
const years = new Date().getFullYear() - startYear;

export const site = {
  name: 'Eduardo Araújo',
  role: 'Designer Sênior', // header, aba do navegador e descrição
  location: 'Curitiba, BR',
  email: 'edujunior254@gmail.com',

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Works', href: '/works' },
  ],

  // TODO: preencher as URLs reais
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eduardo-ara%C3%BAjo-95a349165/' },
    // Perfis do Hascunho Studio
    { label: 'Behance', href: 'https://www.behance.net/edu_ardoara85a' },
    { label: 'Instagram', href: 'https://www.instagram.com/hascunho/' },
  ],

  hero: {
    // Primeira parte: quem é (tom principal). Segunda: o que diferencia (tom secundário).
    lead: 'Designer Sênior multidisciplinar:',
    rest: 'identidade visual, UX/UI, campanhas, sites e motion design.',
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
    // Exibidas em ordem alfabética (ordenadas automaticamente abaixo)
    brands: [
      'Artta', 'Bioerde', 'Duo Garage', 'Fense Seguradora', 'Four Pink', 'Gaslog', 'Gedisa', 'Golden Vibes', 'Grupo Exati',
      'Leque', 'Lepistache', 'Lomarco', 'Marozi', 'MKA Transportes', 'Sabores de Curitiba', 'SB Crédito', 'Thalles Consultoria',
    ].sort((a, b) => a.localeCompare(b, 'pt-BR')),
    brandsMore: '+100', // aparece logo abaixo da lista, em tom secundário
  },

  // Página About (ref. max-pratt.webflow.io/about)
  aboutPage: {
    intro: {
      lead: 'Oi, eu sou o Eduardo.',
      rest: `Designer Sênior em Curitiba, à frente de todas as áreas de design de uma marca. Há ${years} anos transformo ideias em marcas, interfaces e campanhas.`,
    },
    // Coluna lateral. TODO: confirmar ferramentas, competências e idiomas.
    side: [
      { label: 'Ferramentas', items: ['Figma', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'Cinema 4D', 'Blender'] },
      { label: 'Inteligência Artificial', items: ['Direção Criativa', 'Manipulação Visual', 'IA para Motion', 'Vibe Coding', 'Automação'] },
      { label: 'Competências', items: ['Direção de arte', 'Liderança de equipe', 'Metodologias ágeis', 'Comunicação com clientes', 'Atenção aos detalhes', 'Resolução de problemas'] },
      { label: 'Idiomas', items: ['Português, nativo', 'Inglês, intermediário (em desenvolvimento)'] },
    ],
    // Subtítulo: palavras em `pills` aparecem em pílulas com contorno
    heading: { before: 'Do rascunho à entrega:', pills: ['marcas', 'interfaces', 'campanhas'], after: 'que fazem sentido.' },
    paragraphs: [
      'Sou formado em Publicidade e Propaganda pela Universidade Positivo e me especializei em Design Gráfico e UX/UI na EBAC. Trabalho com design desde 2015 e, ao longo desse caminho, passei por estúdio próprio e por diferentes grupos empresariais.',
      'Na Hascunho, meu estúdio, desenvolvi identidades visuais e ilustrações para marcas de diferentes segmentos. Com o tempo, assumi frentes cada vez mais amplas: coordenei designers, criei sites, landing pages, estandes e vídeos, e passei a responder por todas as áreas de design das empresas em que atuo.',
      'Trabalho com foco no detalhe, mas sem complicar as coisas. Meu objetivo é criar marcas que façam sentido, se conectem com as pessoas e causem aquele “é isso!”.',
    ],
    // Rascunho do processo. TODO: revisar com o Eduardo.
    approachLabel: 'Como eu trabalho',
    approach: [
      { title: 'Imersão', text: 'Entendo o negócio, o público e o problema antes de abrir qualquer ferramenta. Boas soluções começam por boas perguntas.' },
      { title: 'Conceito', text: 'Transformo o que foi aprendido em uma ideia central que guia todas as decisões visuais, da marca à última peça.' },
      { title: 'Design', text: 'Desenvolvo o sistema visual e as peças com atenção aos detalhes, testando e refinando até cada elemento ter um motivo para estar ali.' },
      { title: 'Entrega', text: 'Organizo arquivos, diretrizes e componentes para que o time consiga aplicar e evoluir o trabalho com autonomia.' },
    ],
  },

  // Serviços (ref. Rafa). Imagem: src/assets/services/<slug>.webp
  // TODO: motion.webp é provisória (still da Fense); trocar por um frame/vídeo de motion.
  services: {
    label: 'Serviços',
    intro: 'Design de ponta a ponta para marcas que precisam se comunicar com clareza em todos os pontos de contato.',
    items: [
      {
        slug: 'identidade-visual',
        title: 'Identidade Visual',
        description:
          'Criação e evolução de marcas, do conceito ao sistema visual completo, com diretrizes que garantem consistência em qualquer aplicação.',
        tags: ['Logotipo e símbolo', 'Sistema visual', 'Manual de marca', 'Rebranding', 'Papelaria e aplicações'],
      },
      {
        slug: 'ux-ui',
        title: 'UX/UI Design',
        description:
          'Interfaces para sites, landing pages e aplicativos, da arquitetura de informação ao layout final, pensadas para serem claras, acessíveis e fáceis de usar.',
        tags: ['Arquitetura de informação', 'Wireframes e fluxos', 'UI para web e mobile', 'Design responsivo', 'Handoff para desenvolvimento'],
      },
      {
        slug: 'campanhas',
        title: 'Campanhas',
        description:
          'Campanhas completas para lançamentos e ações de marca, com peças para redes sociais, mídia digital, eventos e materiais impressos.',
        tags: ['Conceito criativo', 'Social media', 'Mídia digital', 'Estandes e eventos', 'Materiais impressos'],
      },
      {
        slug: 'no-code',
        title: 'No-code',
        description:
          'Sites e landing pages publicados sem depender de desenvolvimento, prontos para o time editar o conteúdo com autonomia.',
        tags: ['Sites institucionais', 'Landing pages', 'CMS editável', 'Animações e interações', 'Publicação'],
      },
      {
        slug: 'motion',
        title: 'Motion Design',
        description:
          'Animações para marcas, interfaces e redes sociais, além de captação e edição de vídeo, para dar movimento e ritmo à comunicação.',
        tags: ['Animação de logotipo', 'Motion para social media', 'Microinterações', 'Edição de vídeo', 'Audiovisual'],
      },
    ],
  },

  // Experiência, da mais recente para a mais antiga. period vazio = não exibe.
  // TODO: confirmar ano de início no Grupo SBA.
  experience: {
    label: 'Experiência',
    items: [
      {
        company: 'Grupo SBA',
        role: 'Designer Sênior multidisciplinar',
        period: 'Atual',
        description:
          'Responsável por todas as frentes de design de duas marcas do mercado financeiro. Conduzo identidade visual, UX/UI, campanhas, social media, motion e audiovisual, garantindo uma comunicação consistente em todos os pontos de contato.',
      },
      {
        company: 'Grupo Ergon',
        role: 'Designer multidisciplinar',
        period: '2025 — 2026',
        description:
          'Responsável por todas as frentes de design das empresas do grupo. Atuei de ponta a ponta, da identidade visual e das campanhas à presença digital, com landing pages e interfaces responsivas.',
      },
      {
        company: 'Grupo Exati',
        role: 'Designer Gráfico Pleno',
        period: '2021 — 2024',
        description:
          'Criação de sites e landing pages (UX/UI), infográficos, e-books, estandes, vídeos e conteúdo para social media, além de peças para comunicação interna. Também coordenei outros designers da equipe.',
      },
      {
        company: 'Hascunho',
        role: 'Designer Gráfico e Ilustrador',
        period: '2018 — 2025',
        description:
          'Estúdio próprio de identidade visual e ilustração. Desenvolvi marcas para empresas de diferentes segmentos, do conceito ao sistema visual, com foco em comunicação autêntica e atenção aos detalhes.',
      },
    ],
  },

  // Formação, da mais recente para a mais antiga (do currículo).
  // TODO: confirmar os anos de "Profissão UX/UI" e "Design de Logos" (no CV aparecem 2019 e 2020).
  education: {
    label: 'Formação',
    items: [
      { title: 'Publicidade e Propaganda', subtitle: 'Universidade Positivo · Curitiba', period: '2020 — 2024' },
      { title: 'Design Gráfico', subtitle: 'EBAC', period: '2020 — 2022' },
      { title: 'Profissão UX/UI', subtitle: 'EBAC', period: '2020' },
      { title: 'Design de Logos', subtitle: 'Domestika', period: '2019' },
    ],
  },

  // Rodapé (ref. Max Pratt)
  footer: {
    kicker: 'Pronto para começar?',
    title: 'Fale comigo',
    coords: '25.4284° S, 49.2733° W', // Curitiba
  },

  // Gaveta de contato: formulário em forma de frase. Envio abre o e-mail com a mensagem pronta.
  // TODO: se quiser receber sem abrir o app de e-mail, ligar a um serviço (Formspree, Web3Forms).
  contact: {
    intro: 'Conte um pouco sobre o seu projeto',
    submit: 'Enviar',
  },

  // Chamada antes do rodapé (ref. Norwalk): pergunta + avatar com nome e cargo
  cta: {
    role: 'Designer Sênior', // cargo curto só no avatar
    lead: 'Tem um projeto em mente?',
    rest: 'Vamos conversar.',
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
    // Hascunho Studio (Behance)
    { slug: 'four-pink', name: 'Four Pink', sector: 'Moda', discipline: 'Branding', featured: false },
    { slug: 'marozi', name: 'Marozi', sector: 'Moda', discipline: 'Identidade Visual', featured: false },
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
