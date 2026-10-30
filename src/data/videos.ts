// Capas animadas (logo motion) dos cases. Arquivos em public/videos/<slug>.mp4 e
// public/videos/<slug>-poster.webp (último quadro: o logo completo, usado antes do vídeo
// carregar e para quem prefere menos movimento). Tocam uma vez e param no logo.
export const coverVideos: Record<string, { alt: string }> = {
  duo: { alt: 'Logo da Duo Garage em movimento: uma porta de garagem sobe e revela a marca' },
  fense: { alt: 'Logo da Fense em movimento: o F ganha volume e o nome entra ao lado' },
};
