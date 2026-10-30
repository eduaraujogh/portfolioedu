// Capas animadas (motion) dos cases, em loop. Arquivos em public/videos/:
// <slug>.mp4/.webm (capa do case), <slug>-card.mp4/.webm (card da grade, com a arte menor
// para caber no recorte quadrado) e <slug>-poster.webp (quadro com a arte completa, usado
// antes do vídeo carregar e para quem prefere menos movimento).
export const coverVideos: Record<string, { alt: string }> = {
  artta: { alt: 'Três peças da marca Artta subindo uma depois da outra sobre o fundo azul' },
  duo: { alt: 'Logo da Duo Garage em movimento: uma porta de garagem sobe e revela a marca' },
  thalles: { alt: 'Cards da Thalles em movimento: o logo se monta, o texto entra e a flecha sobe' },
  fense: { alt: 'Logo da Fense em movimento: o F ganha volume e o nome entra ao lado' },
};
