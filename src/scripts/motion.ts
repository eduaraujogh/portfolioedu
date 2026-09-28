import Lenis from 'lenis';

const root = document.documentElement;
const motionOk = root.classList.contains('motion');

// Scroll suave: resposta imediata ao gesto e desaceleração longa no final (ease-out expo).
let lenis: Lenis | null = null;
if (motionOk) {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    autoRaf: true,
    anchors: true,
  });
}
// Exposto para outros scripts (ex.: a gaveta de contato pausa a rolagem da página)
(window as unknown as { lenis: Lenis | null }).lenis = lenis;

// Revela cada elemento [data-reveal] uma vez, quando entra na tela.
let revealRest = () => {};
if (motionOk) {
  root.classList.add('js-reveal');
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px' },
  );
  const els = [...document.querySelectorAll('[data-reveal]')];
  els.forEach((el) => io.observe(el));

  // Elementos colados no fim da página nunca passam da margem de 12%:
  // ao chegar no fim da rolagem, revela o que estiver visível.
  revealRest = () => {
    if (innerHeight + scrollY < root.scrollHeight - 4) return;
    els.forEach((el) => {
      if (el.classList.contains('is-in')) return;
      if (el.getBoundingClientRect().top < innerHeight) {
        el.classList.add('is-in');
        io.unobserve(el);
      }
    });
  };
}

// Estado do header: fora do topo e direção do scroll (recolhe ao descer, volta ao subir).
let lastY = scrollY;
const onScroll = (y: number) => {
  revealRest();
  root.classList.toggle('is-scrolled', y > 40);
  if (Math.abs(y - lastY) > 4) {
    root.classList.toggle('is-going-down', y > lastY);
    lastY = y;
  }
};
if (lenis) lenis.on('scroll', ({ scroll }) => onScroll(scroll));
else addEventListener('scroll', () => onScroll(scrollY), { passive: true });
onScroll(scrollY);
