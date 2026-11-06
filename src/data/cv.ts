// Textos do currículo em PDF (/curriculo). Separados do site de propósito: o currículo
// tem um tom mais formal e descrições mais longas que as da página Sobre.
export const cv = {
  title: { lead: 'Designer Sênior', rest: 'Brand, Digital & Product Design' },
  intro:
    'Transformo desafios de negócio em soluções de design que conectam marcas, produtos e pessoas. Desde 2015, trabalho na construção de identidades visuais, experiências digitais e comunicação para empresas de diferentes segmentos. Tenho uma atuação multidisciplinar, que vai da direção criativa à execução, passando por estratégia, UX/UI, desenvolvimento de interfaces e motion design.',

  experience: [
    {
      company: 'Grupo SBA',
      role: 'Designer Sênior',
      period: '2025 — 2026',
      description:
        'Responsável pela direção e execução de projetos de design para duas marcas do mercado financeiro e a marca institucional do grupo. Atuação em identidade visual, UX/UI, campanhas e comunicação interna. Em parceria com o time de produto, redesenhei o cadastro de parceiros, reduzindo o tempo de preenchimento de até 7 dias para aproximadamente 2 minutos.',
    },
    {
      company: 'Grupo Ergon',
      role: 'Designer Sênior',
      period: '2025 — 2026',
      description:
        'Atuação transversal nas empresas do grupo, conduzindo projetos de identidade visual, campanhas, comunicação digital e interfaces. Responsável por transformar demandas de diferentes áreas em soluções visuais consistentes, da concepção à implementação.',
    },
    {
      company: 'Grupo Exati',
      role: 'Designer Gráfico Pleno',
      period: '2021 — 2024',
      description:
        'Desenvolvimento de sites, landing pages, interfaces UX/UI, infográficos, e-books, estandes, vídeos e materiais para redes sociais. Participação na construção da comunicação visual e coordenação de outros designers da equipe.',
    },
    {
      company: 'Hascunho',
      role: 'Fundador e Designer',
      period: '2018 — 2025',
      description:
        'Criação e condução de um estúdio independente de design, em paralelo à atuação profissional. Desenvolvimento de projetos de branding, sistemas de identidade visual, sites institucionais e campanhas para empresas de diferentes segmentos.',
    },
    {
      company: 'Agência Allano',
      role: 'Designer e Ilustrador',
      period: '2015 — 2018',
      description:
        'Criação de identidades visuais e materiais de comunicação para clientes de diferentes segmentos. Desenvolvimento de projetos que iam do conceito de marca à aplicação em peças digitais, impressas e ilustrações.',
    },
  ],

  skills: {
    label: 'Competências',
    items: [
      'Direção de arte e direção criativa',
      'Estratégia e identidade de marca',
      'UX/UI e design de interfaces',
      'Liderança e colaboração multidisciplinar',
      'Comunicação visual e campanhas',
      'Gestão de projetos criativos',
      'Resolução de problemas',
    ],
  },
  tools: {
    label: 'Ferramentas',
    items: ['Figma', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'Cinema 4D', 'Blender'],
  },
  ai: {
    label: 'Inteligência artificial',
    items: [
      'Direção criativa assistida por IA',
      'Geração e manipulação visual',
      'Motion design com IA',
      'Vibe coding e prototipação',
      'Automação de processos criativos',
    ],
  },
  languages: { label: 'Idiomas', items: ['Português: nativo', 'Inglês: intermediário'] },

  education: [
    // Curso livre, sem certificado (Coursera, modo gratuito). Trocar para o ano ao concluir.
    { title: 'Criatividade e IA', subtitle: 'Parsons School of Design · Coursera', period: 'Em andamento' },
    { title: 'Publicidade e Propaganda', subtitle: 'Universidade Positivo', period: '2020 — 2024' },
    { title: 'Design Gráfico', subtitle: 'EBAC', period: '2020 — 2022' },
    { title: 'Profissão UX/UI', subtitle: 'EBAC', period: '2020' },
    { title: 'Design de Logos', subtitle: 'Domestika', period: '2019' },
  ],

  footer: { lead: 'Da estratégia à experiência.', rest: 'Design que transforma ideias em soluções.' },
};
