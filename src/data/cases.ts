// Conteúdo das páginas de case (/works/<slug>).
// Textos de origem: cases da Slowexe (tools/build-cases.py), em primeira pessoa.
// Galeria: src/assets/cases/<slug>/01.webp, 02.webp… — a ordem dos arquivos é a ordem na página.
// Regra: nada de número, depoimento ou cliente inventado. Sem texto real, o bloco não aparece.
import { site, type Work } from './site';

// Imagem prevista para o case. Enquanto o arquivo não existe, a página mostra um espaço
// reservado com este rótulo e esta proporção (largura / altura) — serve de lista do que exportar.
export interface Shot {
  label: string;
  ratio?: number; // padrão 16:9
  full?: boolean; // força a imagem a ocupar a largura toda
}

// Capítulo de um case com várias entregas (ex.: Artta). Imagens em
// src/assets/cases/<slug>/<id>/01.webp, 02.webp…
export interface Chapter {
  id: string; // âncora e pasta das imagens
  title: string;
  kicker: string; // o que é a entrega, em poucas palavras
  text: string;
  // Número de destaque (só com valor real, informado pelo Eduardo)
  result?: { from: string; to: string; label: string };
  // Decisões de UX: título curto + por quê
  decisions?: { title: string; text: string }[];
  shots?: Shot[];
}

export interface Case {
  client: string;
  clientLabel?: string; // padrão "Cliente"; "Empresa" quando é onde trabalho
  role?: string; // meu papel no projeto
  services: string;
  challenge?: string;
  solution?: string;
  // Rótulos de desafio/solução, quando o case não é um projeto único (ex.: "A empresa", "Meu papel")
  labels?: [string, string];
  // Frase de conceito da marca, em destaque no fim do case
  concept?: string;
  shots?: Shot[]; // galeria prevista do case (sem capítulos)
  chapters?: Chapter[];
  // Fechamento do case: o que o projeto entregou. Só fatos, sem número inventado.
  results?: string[];
}

export const cases: Record<Work['slug'], Case> = {
  // TODO: textos de rascunho escritos a partir do material enviado; confirmar com o Eduardo
  // o que está marcado com (confirmar).
  artta: {
    client: 'Artta',
    clientLabel: 'Empresa',
    role: 'Designer Sênior',
    services: 'Branding, UX/UI, calculadora e landing page, apresentações',
    labels: ['A empresa', 'Meu papel'],
    challenge:
      'A Artta é uma fintech regulada pelo Banco Central que oferece soluções financeiras para empresas, do crédito aos meios de pagamento.',
    solution:
      'Cuido do design da Artta de ponta a ponta: da marca e do manual que organiza o seu uso às telas dos produtos digitais, passando pelo site e pelas apresentações da empresa. Nos produtos, trabalho em parceria com o time de produto.',
    chapters: [
      {
        id: 'marca',
        title: 'Marca',
        kicker: 'Manual e aplicações',
        // (confirmar) ângulo de 70° como origem do elemento gráfico
        text: 'Organizei a marca em um manual completo, do tom de voz às aplicações, e levei a marca a todos os pontos de contato: crachás, cartões, papelaria, brindes, eventos e app. O elemento gráfico nasce de um ângulo de 70°, a inclinação do crescimento, e acompanha a assinatura “Para negócios que não param”.',
        shots: [
          { label: 'Crachás' },
          { label: 'Cartões' },
          { label: 'Ecobag e caneca' },
          { label: 'Papelaria' },
          { label: 'Banners de evento' },
          { label: 'Cartazes' },
          { label: 'App e notificação' },
          { label: 'Manual de marca', full: true },
        ],
      },
      {
        id: 'calculadora',
        title: 'Calculadora de lucro e landing page',
        kicker: 'Aquisição de parceiros',
        // Sem detalhar regras ou números da calculadora (ferramenta comercial).
        text: 'Uma calculadora de lucro e a landing page em volta dela, feitas para atrair empresas que querem oferecer serviços financeiros com a própria marca. Em quatro etapas curtas, a empresa informa como opera, vê quanto pode ganhar e já pede uma proposta ao time comercial. Dividir a conta em etapas fez uma simulação financeira parecer uma conversa, não um formulário.',
        shots: [
          { label: 'Landing page no computador' },
          { label: 'Calculadora: etapas e resultado', full: true },
          { label: 'Landing page no celular' },
        ],
      },
      {
        id: 'plataformas',
        title: 'Plataformas digitais',
        kicker: 'UX/UI · Em parceria com o time de produto',
        // Visão geral, sem entrar a fundo em cada projeto (uma tela de cada).
        text: 'Junto com o time de produto, desenhei as interfaces das principais plataformas da Artta: o internet banking, o portal do parceiro e o onboarding de novos clientes. No onboarding, a abertura de conta de uma empresa, que levava até 7 dias, passou a ser concluída em 2 minutos.',
        result: { from: '7 dias', to: '2 min', label: 'para uma empresa abrir conta no onboarding' },
        shots: [
          { label: 'Internet banking', ratio: 16 / 10 },
          { label: 'Portal do parceiro', ratio: 16 / 10 },
          { label: 'Onboarding', ratio: 16 / 10 },
        ],
      },
      {
        id: 'apresentacoes',
        title: 'Apresentações',
        kicker: 'Institucional e comercial',
        text: 'Apresentações institucionais e comerciais da empresa, construídas sobre o sistema visual do manual, para apresentar a Artta e cada um dos seus produtos com a mesma linguagem.',
        shots: [{ label: 'Apresentação institucional', full: true }],
      },
    ],
    results: [
      'Uma identidade única, aplicada do crachá ao app e documentada em um manual completo de marca.',
      'Uma calculadora de lucro que transforma a visita na landing page em pedido de proposta para o time comercial.',
      'Abertura de conta de empresas reduzida de até 7 dias para 2 minutos no novo onboarding.',
      'Internet banking, portal do parceiro e onboarding com a mesma linguagem visual da marca.',
      'Apresentações institucionais e comerciais construídas sobre o mesmo sistema visual.',
    ],
  },
  // TODO: (confirmar) leitura do símbolo e foco no público interno.
  sba: {
    client: 'Grupo SBA',
    services: 'Identidade visual, endomarketing',
    challenge:
      'Criar a marca do grupo que reúne duas empresas do mercado financeiro, a Artta e a SBcrédito, sem competir com nenhuma delas. A marca precisava unir as duas e ganhar vida principalmente no dia a dia de quem trabalha no grupo.',
    solution:
      'Um símbolo de anéis que se encaixam, num degradê do azul ao verde-água, com a tipografia Figtree. O sistema vai da assinatura ao lado das duas marcas até o kit de boas-vindas: carta, crachá, caneca, garrafa, ecobag e camiseta.',
    concept: 'Uma estrutura. Duas marcas. Um propósito.',
    shots: [
      { label: 'Assinatura do grupo com as duas marcas' },
      { label: 'Variações de capa', ratio: 4 / 3 },
      { label: 'Carta de boas-vindas', ratio: 4 / 3 },
      { label: 'Crachás', ratio: 4 / 3 },
      { label: 'Caneca e garrafa', ratio: 4 / 3 },
      { label: 'Camiseta “Mais fortes juntos”' },
      { label: 'Ecobag', ratio: 4 / 3 },
      { label: 'Cordão e mousepad', ratio: 4 / 3 },
    ],
  },
  sabores: {
    client: 'Sabores de Curitiba',
    services: 'Identidade visual, sistema de marca',
    challenge:
      'Traduzir em uma só identidade a diversidade gastronômica de Curitiba: bares, restaurantes e centros gastronômicos com públicos, preços e linguagens muito diferentes entre si.',
    solution:
      'O logotipo cresce em ondas, dando movimento ao design e sugerindo as sinapses despertadas por cada refeição. Os tamanhos variados da tipografia simbolizam a diversidade dos estabelecimentos. O ícone é a representação minimalista do Petit-Pavé, mosaico histórico da cidade, que também gera os patterns da marca.',
    concept:
      'O formato crescente das letras dá movimento ao design, levando a ideia de sinapses despertadas pelos sentidos a cada refeição.',
  },
  thalles: {
    client: 'Thalles Consultoria',
    services: 'Identidade visual, sistema de marca',
    challenge:
      'Representar crescimento, o que toda empresa busca em todas as fases, sem cair no gráfico de barras óbvio que todo material de consultoria usa.',
    solution:
      'Usando conceitos da Gestalt, transformei o T inicial da marca em um isotipo que forma uma flecha apontando para o topo. Minimalista e elegante, mas com força e impacto.',
    concept: 'Olhar para um gráfico e ver uma flecha apontando para o céu. Foi daí que nasceu o logotipo da marca.',
  },
  fense: {
    client: 'Fense Seguradora',
    services: 'Identidade visual, sistema de marca',
    challenge:
      'Comunicar proteção em um mercado saturado de escudos genéricos, com uma marca que funcionasse em materiais muito diferentes.',
    solution:
      'Em vez do escudo inteiro, trabalhei apenas a parte dele que forma o F de Fense. Uma técnica de desenho 2D que, conforme as cores aplicadas, ganha aparência de volume. Resultado moderno e de aplicação simples.',
    concept: 'Pensar no futuro de quem amamos. E quando amamos, protegemos. Foi desse aspecto que nasceu o conceito da marca.',
  },
  duo: {
    client: 'Duo Garage',
    services: 'Identidade visual, sistema de marca',
    challenge:
      'Construir uma marca de garagem com força e presença, sem recorrer aos clichês do setor: cromados, velocidade e agressividade.',
    solution:
      'Identidade minimalista em preto e branco, apoiada no cinza para ganhar elegância. O símbolo circular admite várias leituras: volante, porca, roda. E o “E” de Garage é sutilmente estilizado para lembrar as portas de metal das garagens.',
    concept:
      'O símbolo circular evoca várias interpretações (volante, porca, roda), uma camada de versatilidade dentro de uma marca minimalista.',
  },
  'golden-vibes': {
    client: 'Golden Vibes Semijoias',
    services: 'Branding, identidade visual',
    challenge:
      'Posicionar uma marca de semijoias em um segmento onde quase todo mundo comunica da mesma forma: dourado, serifa clássica e fundo branco.',
    solution:
      'Um logotipo de traço fluido e contemporâneo, com ligaduras desenhadas à mão, sobre uma paleta que troca o branco pelo verde profundo. O monograma se fecha em uma forma de quatro pétalas, que funciona sozinha como selo da marca.',
    concept:
      'Trocar o branco pelo verde profundo foi o que tirou a marca do lugar-comum do segmento, sem abrir mão da elegância.',
  },
  // TODO: Four Pink e Marozi ainda sem texto (só imagens do Behance). Preencher desafio/solução quando houver.
  'four-pink': {
    client: 'Four Pink',
    services: 'Branding, identidade visual',
  },
  marozi: {
    client: 'Marozi',
    services: 'Identidade visual',
  },
  bioerde: {
    client: 'Bioerde',
    services: 'Branding, identidade visual, tom de voz',
    challenge:
      'Posicionar a Bioerde como líder em inovação sustentável no agronegócio, equilibrando dois discursos que costumam se contradizer: alta tecnologia e responsabilidade ambiental.',
    solution:
      'Identidade visual e tom de voz construídos para transmitir confiança, modernidade e compromisso com a sustentabilidade, com a marca posicionada como parceira do agricultor, não como fornecedora.',
    concept: 'Transformar o campo, aumentando a produtividade de forma consciente e promovendo um futuro mais verde.',
  },
  riverside: {
    client: 'Riverside',
    services: 'Identidade visual, sistema de marca',
    challenge:
      'Traduzir em marca a sensação de conquista de quem escala uma montanha, acampa com os amigos e sente a natureza na pele.',
    solution:
      'A letra R, inicial do nome, carrega em seus traços a silhueta de um punho cerrado, o gesto da comemoração. As formas do logotipo geram os demais elementos do sistema visual.',
    concept: 'A letra R traz em seus traços a silhueta de um punho. O gesto que fazemos ao celebrar uma conquista.',
  },
};

const gallery = import.meta.glob<{ default: ImageMetadata }>('../assets/cases/**/*.webp', { eager: true });

// Imagens de uma pasta (sem subpastas), em ordem de nome de arquivo
const imagesIn = (dir: string) =>
  Object.entries(gallery)
    .filter(([path]) => path.startsWith(`../assets/cases/${dir}/`) && !path.slice(`../assets/cases/${dir}/`.length).includes('/'))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);

// Galeria de um case: src/assets/cases/<slug>/01.webp…
export const galleryOf = (slug: string) => imagesIn(slug);

export type GalleryItem = { full?: boolean } & (
  | { img: ImageMetadata; label?: string }
  | { img?: undefined; label: string; ratio: number }
);

// Imagens existentes + espaços reservados para as que ainda faltam (na ordem prevista)
export const itemsOf = (dir: string, planned: Shot[] = []): GalleryItem[] => {
  const imgs = imagesIn(dir);
  return Array.from({ length: Math.max(imgs.length, planned.length) }, (_, i) =>
    imgs[i]
      ? { img: imgs[i], label: planned[i]?.label, full: planned[i]?.full }
      : { label: planned[i].label, ratio: planned[i].ratio ?? 16 / 9, full: planned[i].full },
  );
};

// Próximo projeto (circular), na ordem de site.works
export const nextOf = (slug: string) => {
  const i = site.works.findIndex((w) => w.slug === slug);
  return site.works[(i + 1) % site.works.length];
};
