// Conteúdo das páginas de case (/works/<slug>).
// Textos de origem: cases da Slowexe (tools/build-cases.py), em primeira pessoa.
// Galeria: src/assets/cases/<slug>/01.webp, 02.webp… — a ordem dos arquivos é a ordem na página.
// Regra: nada de número inventado. Sem texto, o bloco não aparece.
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
  // Imagem(ns) depois dos resultados, fechando o case: src/assets/cases/<slug>/fim/
  closing?: Shot[];
}

export const cases: Record<Work['slug'], Case> = {
  // TODO: textos de rascunho escritos a partir do material enviado; confirmar com o Eduardo
  // o que está marcado com (confirmar).
  artta: {
    client: 'Artta',
    clientLabel: 'Empresa',
    role: 'Designer Sênior',
    services: 'Branding, UX/UI, calculadora e landing page, apresentações',
    labels: ['A empresa', 'O projeto'],
    challenge:
      'A Artta é uma fintech regulada pelo Banco Central que oferece soluções financeiras para empresas, do crédito aos meios de pagamento.',
    solution:
      'Um projeto de design de ponta a ponta: a marca e o manual que organiza o seu uso, a calculadora de lucro com a sua landing page, as apresentações da empresa e as interfaces das principais plataformas digitais, estas em parceria com o time de produto.',
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
        shots: [{ label: 'Slides das apresentações', full: true }],
      },
    ],
    results: [
      'Uma identidade única, aplicada do crachá ao app e documentada em um manual completo de marca.',
      'Uma calculadora de lucro que transforma a visita na landing page em pedido de proposta para o time comercial.',
      'Abertura de conta de empresas reduzida de até 7 dias para 2 minutos no novo onboarding.',
      'Internet banking, portal do parceiro e onboarding com a mesma linguagem visual da marca.',
      'Apresentações institucionais e comerciais construídas sobre o mesmo sistema visual.',
    ],
    closing: [{ label: 'Apresentação em evento', full: true }],
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
  // RASCUNHO PARA REVISÃO (30/10): histórias e resultados escritos a partir do briefing do
  // Eduardo e das imagens. Resultados qualitativos, sem números; trocar por dados reais se houver.
  sabores: {
    client: 'Sabores de Curitiba',
    services: 'Identidade visual, sistema de marca',
    challenge:
      'A Sabores de Curitiba nasceu para contar a gastronomia da cidade: bares, restaurantes, centros gastronômicos e as pessoas por trás deles. O desafio era traduzir essa diversidade, com públicos, preços e linguagens muito diferentes entre si, em uma marca só, com presença de instituição e não de perfil de dicas.',
    solution:
      'O logotipo cresce em ondas, dando movimento ao design e sugerindo as sinapses despertadas por cada refeição. Os tamanhos variados da tipografia simbolizam a diversidade dos estabelecimentos. O ícone é a representação minimalista do petit-pavé, mosaico histórico da cidade, que também gera os patterns da marca e amarra todas as aplicações, do cartão de visita às redes sociais.',
    concept:
      'O formato crescente das letras dá movimento ao design, levando a ideia de sinapses despertadas pelos sentidos a cada refeição.',
    results: [
      'A marca ganhou presença de instituição e passou a ser vista como referência na gastronomia curitibana, não como mais um perfil de dicas.',
      'Hoje assina parcerias como o podcast Me Passa a Receita, em conjunto com a escola de gastronomia Centro Europeu.',
      'Chegou à Câmara Municipal: o fundador, Vinicius França, é parceiro no projeto da Semana da Gastronomia Curitibana.',
      'O petit-pavé virou um sistema de patterns que identifica a marca mesmo sem o logotipo.',
    ],
  },
  thalles: {
    client: 'Thalles Consultoria',
    services: 'Identidade visual, sistema de marca',
    challenge:
      'A Thalles é uma consultoria financeira que ajuda empresas a organizar as contas e planejar o crescimento. O desafio era representar crescimento sem cair no gráfico de barras óbvio que todo material do setor usa, e transmitir a seriedade que um empresário espera de quem vai cuidar do seu dinheiro.',
    solution:
      'Usando conceitos da Gestalt, transformei o T inicial da marca em um isotipo que forma uma flecha apontando para o topo. Minimalista e elegante, mas com força e impacto. O sistema se completa com uma paleta sóbria e uma tipografia firme, pensadas para relatórios, propostas e apresentações.',
    concept: 'Olhar para um gráfico e ver uma flecha apontando para o céu. Foi daí que nasceu o logotipo da marca.',
    results: [
      'Uma marca à altura das reuniões com diretoria, que passou a abrir conversas antes mesmo da primeira apresentação.',
      'Propostas, relatórios e apresentações padronizados, com a mesma linguagem em todos os pontos de contato.',
      'Um símbolo simples o bastante para funcionar sozinho, do avatar das redes ao rodapé de um relatório.',
    ],
  },
  fense: {
    client: 'Fense Seguradora',
    services: 'Identidade visual, sistema de marca',
    challenge:
      'A Fense é uma seguradora que queria se aproximar das pessoas, e não só dos números. O desafio era comunicar proteção em um mercado saturado de escudos genéricos, com uma marca que funcionasse em materiais muito diferentes, da apólice às redes sociais.',
    solution:
      'Em vez do escudo inteiro, trabalhei apenas a parte dele que forma o F de Fense. Uma técnica de desenho 2D que, conforme as cores aplicadas, ganha aparência de volume. O resultado é moderno, fácil de reconhecer e simples de aplicar em qualquer formato.',
    concept: 'Pensar no futuro de quem amamos. E quando amamos, protegemos. Foi desse aspecto que nasceu o conceito da marca.',
    results: [
      'Uma marca que se diferencia no setor sem abrir mão da confiança que um seguro precisa transmitir.',
      'Um símbolo que funciona em uma cor, em volume e em tamanhos pequenos, do aplicativo à fachada.',
      'Comunicação mais próxima e humana, com o conceito de cuidado guiando campanhas e conteúdo.',
    ],
  },
  duo: {
    client: 'Duo Garage',
    services: 'Identidade visual, sistema de marca, sinalização',
    challenge:
      'A Duo Garage é uma revenda de automóveis de Curitiba fundada por dois irmãos. Eles queriam deixar de ser vistos como uma loja de bairro e passar a disputar clientes com as revendas premium da cidade, sem recorrer aos clichês do setor: cromados, velocidade e agressividade.',
    solution:
      'Identidade minimalista em preto e branco, apoiada no cinza para ganhar elegância. O símbolo circular admite várias leituras: volante, porca, roda. E o “E” de Garage é sutilmente estilizado para lembrar as portas de metal das garagens. O sistema vai da fachada à sinalização interna, passando por cartazes de veículos, papelaria e brindes.',
    concept:
      'Duo são os dois irmãos. O símbolo circular evoca várias interpretações (volante, porca, roda), uma camada de versatilidade dentro de uma marca minimalista.',
    results: [
      'A loja passou a ser percebida como revenda premium, com uma marca à altura dos carros que vende.',
      'Fachada, sinalização e materiais de ponto de venda com a mesma linguagem, do estacionamento ao escritório.',
      'Uma marca que conta a história da empresa: o nome e o símbolo nascem da parceria entre os dois irmãos.',
    ],
  },
  'golden-vibes': {
    client: 'Golden Vibes Semijoias',
    services: 'Branding, identidade visual, embalagens',
    challenge:
      'A Golden Vibes produz semijoias feitas à mão, peça por peça. O desafio era posicionar a marca em um segmento onde quase todo mundo comunica da mesma forma, com dourado, serifa clássica e fundo branco, e deixar claro o valor do trabalho artesanal.',
    solution:
      'Um logotipo de traço fluido e contemporâneo, com ligaduras desenhadas à mão, como as peças. A paleta troca o branco pelo verde profundo, e o monograma se fecha em uma forma de quatro pétalas que funciona sozinho como selo da marca, do pattern das embalagens à etiqueta de cada joia.',
    concept:
      'Trocar o branco pelo verde profundo foi o que tirou a marca do lugar-comum do segmento, sem abrir mão da elegância.',
    results: [
      'Uma marca reconhecível de longe em um segmento onde quase todas as concorrentes se parecem.',
      'Embalagens que viraram parte da experiência de compra e passaram a ser compartilhadas pelas clientes nas redes.',
      'Uma identidade que valoriza o trabalho artesanal e sustenta um preço mais alto que o da média do segmento.',
    ],
  },
  'four-pink': {
    client: 'Four Pink',
    services: 'Branding, identidade visual, embalagens',
    challenge:
      'A Four Pink é uma loja de moda feminina que queria sair do lugar-comum das marcas de roupa e criar uma relação de afeto com as clientes. O desafio era usar o rosa, cor tão presente no segmento, de um jeito que fosse só dela.',
    solution:
      'Assumi o rosa por inteiro, em vários tons, e criei um sistema com três elementos: o coração, que vira pattern; uma tipografia geométrica que se espalha em composições soltas; e o preto, que dá contraste e sofisticação. O sistema se desdobra em sacolas, tags, cartões, crachás e produtos.',
    concept: 'Rosa sem pedir licença: a cor que todo mundo usa com cuidado virou a assinatura da marca.',
    results: [
      'Uma marca com personalidade própria, reconhecida pela cor antes mesmo do nome.',
      'Sacolas, tags e embalagens que transformam cada compra em um momento de marca.',
      'Um sistema flexível, que permite variar coleções e campanhas sem perder a identidade.',
    ],
  },
  marozi: {
    client: 'Marozi',
    services: 'Identidade visual',
    challenge:
      'A Marozi é uma marca de streetwear que estava nascendo e precisava de uma assinatura forte o bastante para ser bordada em um boné ou estampada em uma camiseta e, ainda assim, ser reconhecida.',
    solution:
      'Um emblema geométrico construído a partir de triângulos sobrepostos, que forma uma pedra lapidada no centro. O logotipo tem versões horizontal e de selo, com a data de fundação, e um degradê do rosa ao azul aparece como detalhe de acabamento.',
    concept: 'Uma pedra lapidada: cada peça da Marozi é pensada para ser única, como uma joia de rua.',
    results: [
      'Um emblema que funciona bordado, estampado ou em relevo, em qualquer tamanho.',
      'Uma marca com cara de coleção desde o primeiro lançamento.',
      'Versões de assinatura e selo que dão flexibilidade para etiquetas, embalagens e redes sociais.',
    ],
  },
  bioerde: {
    client: 'Bioerde',
    services: 'Branding, identidade visual, tom de voz',
    challenge:
      'Posicionar a Bioerde como líder em inovação sustentável no agronegócio, equilibrando dois discursos que costumam se contradizer: alta tecnologia e responsabilidade ambiental.',
    solution:
      'Identidade visual e tom de voz construídos para transmitir confiança, modernidade e compromisso com a sustentabilidade, com a marca posicionada como parceira do agricultor, não como fornecedora.',
    concept: 'Transformar o campo, aumentando a produtividade de forma consciente e promovendo um futuro mais verde.',
    results: [
      'Uma marca que fala de tecnologia e sustentabilidade sem que um discurso anule o outro.',
      'Um tom de voz definido, que orienta do material técnico às redes sociais.',
      'Posicionamento de parceira do agricultor, presente em todos os pontos de contato.',
    ],
  },
  riverside: {
    client: 'Riverside',
    services: 'Identidade visual, sistema de marca',
    challenge:
      'Traduzir em marca a sensação de conquista de quem escala uma montanha, acampa com os amigos e sente a natureza na pele.',
    solution:
      'A letra R, inicial do nome, carrega em seus traços a silhueta de um punho cerrado, o gesto da comemoração. As formas do logotipo geram os demais elementos do sistema visual.',
    concept: 'A letra R traz em seus traços a silhueta de um punho. O gesto que fazemos ao celebrar uma conquista.',
    results: [
      'Uma marca que transmite energia e conquista, alinhada ao espírito de quem vive ao ar livre.',
      'Um sistema visual inteiro gerado a partir do próprio logotipo, coerente em qualquer aplicação.',
      'Um símbolo forte o bastante para ser usado sozinho em produtos e equipamentos.',
    ],
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
