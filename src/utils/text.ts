// Cuidados tipográficos para parágrafos.
// 1. Sem viúva: as últimas palavras descem juntas, então a última linha nunca fica com
//    uma palavra sozinha ("à entrega."). Junta 3 palavras, ou 2 se as 3 forem longas demais.
// 2. Palavras de uma letra ("à", "e", "a", "o") não ficam soltas no fim da linha:
//    vão junto com a palavra seguinte.
const NBSP = ' ';

export const noWidow = (text: string) => {
  const bound = text.trim().replace(/(^|\s)(\S) (?=\S)/g, `$1$2${NBSP}`);
  const words = bound.split(' ');
  if (words.length < 4) return bound;
  const n = words.slice(-3).join(' ').length <= 28 ? 3 : 2;
  return [...words.slice(0, -n), words.slice(-n).join(NBSP)].join(' ');
};
