// Conteúdo das páginas de case (/works/<slug>).
// Textos de origem: cases da Slowexe (tools/build-cases.py), em primeira pessoa.
// Galeria: src/assets/cases/<slug>/01.webp, 02.webp… — a ordem dos arquivos é a ordem na página.
// Regra: nada de número, depoimento ou cliente inventado. Sem texto real, o bloco não aparece.
import { site, type Work } from './site';

export interface Case {
  client: string;
  services: string;
  challenge?: string;
  solution?: string;
  // Frase de conceito da marca, em destaque no fim do case
  concept?: string;
}

export const cases: Record<Work['slug'], Case> = {
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

const gallery = import.meta.glob<{ default: ImageMetadata }>('../assets/cases/*/*.webp', { eager: true });

// Imagens da galeria de um case, em ordem de nome de arquivo
export const galleryOf = (slug: string) =>
  Object.entries(gallery)
    .filter(([path]) => path.startsWith(`../assets/cases/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);

// Próximo projeto (circular), na ordem de site.works
export const nextOf = (slug: string) => {
  const i = site.works.findIndex((w) => w.slug === slug);
  return site.works[(i + 1) % site.works.length];
};
