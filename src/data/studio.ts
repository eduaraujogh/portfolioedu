// Versão "estúdio" do site (/estudio): mesma pessoa e mesmos projetos, mas falando com quem
// contrata, não com recrutador. Sem empresas, cargos nem formação. Textos editáveis aqui.
import { site, startYear } from './site';

const years = new Date().getFullYear() - startYear;

export const studio = {
  base: '/estudio',
  detail: 'Estúdio de design · Curitiba, BR', // ao lado do nome, no topo
  role: 'Estúdio de design', // avatar do convite final
  nav: [
    { label: 'Início', href: '/estudio', exact: true },
    { label: 'Projetos', href: '/estudio/works' },
    { label: 'Sobre', href: '/estudio/sobre' },
  ],
  footerLabel: `Estúdio de design · desde ${startYear}`,

  hero: {
    lead: 'Marcas e produtos digitais',
    rest: 'para empresas que querem ser lembradas.',
    about: `Sou o Eduardo, designer há ${years} anos. Conduzo o seu projeto de ponta a ponta, da identidade visual ao site e às campanhas, com uma rede de parceiros quando o projeto pede.`,
    primary: 'Começar um projeto',
    secondary: 'Ver projetos',
  },

  clients: {
    label: 'Marcas que já passaram por aqui',
    list: site.about.brands,
    more: site.about.brandsMore,
  },

  audiences: {
    label: 'Para quem',
    intro: 'Projetos sob medida para três tipos de cliente.',
    items: [
      {
        title: 'Pequenas e médias empresas',
        text: 'Que precisam de uma marca profissional e de presença digital à altura do que entregam, sem montar um time de design.',
      },
      {
        title: 'Startups e fintechs',
        text: 'Que precisam de marca e produto falando a mesma língua: identidade, landing page e interfaces prontas para crescer.',
      },
      {
        title: 'Agências e estúdios',
        text: 'Que precisam de um parceiro sênior para reforçar o time em projetos de branding, UX/UI e motion, com entrega no prazo.',
      },
    ],
  },

  process: {
    label: 'Processo',
    intro: 'Um caminho claro do primeiro contato à entrega, com você acompanhando cada etapa.',
    steps: site.aboutPage.approach,
  },

  about: {
    label: 'Quem cuida do seu projeto',
    lead: 'Oi, eu sou o Eduardo.',
    rest: `Designer há ${years} anos, apaixonado por marcas, interfaces e campanhas bem resolvidas.`,
    text: [
      'Eu conduzo cada projeto de perto e, quando ele pede, trago parceiros de confiança para somar. Você conversa sempre com quem entende o seu negócio, e isso deixa o processo mais rápido, mais honesto e muito mais próximo.',
      'Trabalho com foco no detalhe, mas sem complicar as coisas. Meu objetivo é criar marcas que façam sentido, se conectem com as pessoas e causem aquele “é isso!”.',
    ],
    stats: [
      { value: `${years}+`, label: 'anos de design' },
      { value: site.about.brandsMore, label: 'marcas atendidas' },
      { value: '5', label: 'frentes: marca, UX/UI, sites, campanhas e motion' },
    ],
  },

  faq: {
    label: 'Perguntas frequentes',
    items: [
      {
        q: 'Quanto custa um projeto?',
        a: 'Depende do escopo. Depois de uma conversa rápida sobre o que você precisa, envio uma proposta com escopo, prazo e investimento fechados, sem surpresas no caminho.',
      },
      {
        q: 'Quanto tempo leva?',
        a: 'Uma identidade visual leva em média de 3 a 6 semanas; um site ou landing page, de 2 a 5 semanas. O cronograma de cada etapa vai na proposta.',
      },
      {
        q: 'Você atende fora de Curitiba?',
        a: 'Sim. Atendo empresas de todo o Brasil e do exterior. As reuniões são online e você acompanha tudo em tempo real.',
      },
      {
        q: 'O que eu recebo no final?',
        a: 'Todos os arquivos abertos e finais, organizados, com as diretrizes de uso. No caso de sites e interfaces, os layouts prontos para desenvolvimento ou o site publicado.',
      },
      {
        q: 'Como começamos?',
        a: 'Você me conta sobre o projeto pelo formulário. Eu respondo em até um dia útil para marcarmos uma conversa.',
      },
    ],
  },

  // Página Sobre do estúdio (ref. Halo Lab /about, traduzida para um estúdio de uma pessoa)
  aboutPage: {
    eyebrow: 'Eduardo Araújo',
    title: 'Acredito que design é o maior diferencial de uma marca.',
    // Feito por humanos, acelerado por IA
    ai: {
      label: 'Como o trabalho acontece',
      lead: 'Feito por humanos.',
      rest: 'Acelerado por IA.',
      human: {
        title: 'O que é feito por pessoas',
        items: ['Estratégia e posicionamento', 'Conceito e ideia central', 'Direção de arte', 'Critério e decisões finais', 'A conversa com você'],
      },
      machine: {
        title: 'O que a IA acelera',
        items: ['Pesquisa e referências', 'Variações e testes', 'Mockups e aplicações', 'Motion e vídeo', 'Protótipos e sites'],
      },
      note: 'Menos tempo em tarefa repetitiva, mais tempo pensando no que importa. Você recebe mais rápido, sem abrir mão do critério de quem desenha.',
    },
    philosophy: {
      label: 'Minha filosofia',
      sub: 'Os princípios por trás de cada projeto.',
      // {marca} e {produto} viram pílulas no texto
      statement: 'Design deixa claro o seu valor no jeito como as pessoas reconhecem a sua {marca} e usam o seu {produto}. Juntos, eles dão aos clientes um motivo para escolher você e para voltar.',
      principles: [
        { icon: 'eye', title: 'Personalidade', text: 'Todo negócio tem suas forças. Eu as transformo em uma linguagem visual que as pessoas reconhecem como sua, de longe.' },
        { icon: 'clarity', title: 'Clareza', text: 'As pessoas precisam entender o que você oferece e como usar. Deixo produtos complexos fáceis de navegar e decisões importantes simples de tomar.' },
        { icon: 'rings', title: 'Continuidade', text: 'A promessa do site precisa se cumprir dentro do produto. Conecto marca, site e interface para a experiência ser a mesma do primeiro clique ao uso diário.' },
      ],
    },
    // O que o cliente pode esperar (compromissos, não autoelogio). Depoimentos reais entram aqui depois.
    expectLabel: 'O que você pode esperar',
    beliefs: [
      { title: 'Conversa direta', text: 'Você fala direto com quem conduz o projeto, do briefing à entrega. Sem camadas no meio, as decisões ficam conectadas e o projeto anda com menos idas e vindas.' },
      { title: 'Uma marca com cara própria', text: 'O objetivo é você ser reconhecido de longe. Cada proposta parte do seu negócio, não de tendência ou modelo pronto.' },
      { title: 'Tudo pronto para usar', text: 'Você recebe diretrizes, arquivos organizados e componentes para o seu time aplicar e evoluir a marca com autonomia.' },
    ],
    collage: 'Uma direção. Muitas mãos.',
    fronts: {
      title: ['Um estúdio.', 'Duas frentes.'],
      items: [
        { tag: 'Marca', title: 'Um motivo para escolherem você', text: 'Identidade visual, sites, campanhas e motion, juntos, para a sua marca se destacar e crescer.' },
        { tag: 'Produto', title: 'Fazer o complexo parecer simples', text: 'Interfaces para web e mobile, de landing pages a plataformas, da descoberta ao lançamento.' },
      ],
      practice: 'Na prática',
      cases: [
        { slug: 'artta', text: 'Marca, landing page e plataformas digitais de uma fintech', tags: ['Branding', 'UX/UI', 'Landing page'] },
        { slug: 'sabores', text: 'Identidade e campanhas para a gastronomia de Curitiba', tags: ['Identidade visual', 'Campanhas'] },
      ],
    },
    stats: {
      label: 'Resultado de uma década de trabalho',
      items: [
        { value: `${years} anos`, label: 'desenhando marcas e produtos' },
        { value: '+100', label: 'marcas atendidas' },
        { value: '5 frentes', label: 'marca, UX/UI, sites, campanhas e motion' },
      ],
    },
    cta: {
      title: 'Vamos conversar sobre o seu projeto?',
      text: 'Me conte o que você precisa. Respondo em até um dia útil.',
      button: 'Começar um projeto',
    },
  },
};
