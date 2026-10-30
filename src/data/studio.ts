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
    { label: 'Processo', href: '/estudio#processo' },
  ],
  footerLabel: `Estúdio de design · desde ${startYear}`,

  hero: {
    lead: 'Marcas e produtos digitais',
    rest: 'para empresas que querem ser lembradas.',
    about: `Sou o Eduardo, designer há ${years} anos. Cuido do seu projeto de ponta a ponta, da identidade visual ao site e às campanhas, sem intermediários.`,
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
      'Aqui não tem atendimento intermediando a conversa: quem entende o seu negócio é quem desenha. Isso deixa o processo mais rápido, mais honesto e muito mais próximo.',
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
};
