# Eduardo Araújo — Design

Marcas e produtos digitais: identidade visual, UX/UI, sites, campanhas e motion.

## Acesso rápido

| Versão | Para quem | Link |
|---|---|---|
| **Estúdio** | Clientes (versão comercial) | **[eduaraujogh.github.io/portfolioedu/estudio](https://eduaraujogh.github.io/portfolioedu/estudio/)** |
| Portfólio | Recrutadores (com experiência e formação) | [eduaraujogh.github.io/portfolioedu](https://eduaraujogh.github.io/portfolioedu/) |
| Currículo | PDF de 1 página | [curriculo-eduardo-araujo.pdf](https://eduaraujogh.github.io/portfolioedu/curriculo-eduardo-araujo.pdf) |

Páginas do estúdio: [Início](https://eduaraujogh.github.io/portfolioedu/estudio/) · [Projetos](https://eduaraujogh.github.io/portfolioedu/estudio/works/) · [Sobre](https://eduaraujogh.github.io/portfolioedu/estudio/sobre/)

---

## Onde editar

| O quê | Arquivo |
|---|---|
| Textos do **estúdio** (abertura, processo, sobre, perguntas) | `src/data/studio.ts` |
| Textos do **portfólio**, links, redes e lista de projetos | `src/data/site.ts` |
| Textos de cada **case** (desafio, solução, resultados) | `src/data/cases.ts` |
| Vídeos das capas (quais projetos têm) | `src/data/videos.ts` |
| Cores, tipografia, espaçamentos e movimento | `src/styles/tokens.css` |

### Imagens e vídeos

| O quê | Onde fica |
|---|---|
| Capa de um projeto | `src/assets/works/<projeto>.webp` (+ `-card` e `-sq` quando há versão para card) |
| Galeria de um case | `src/assets/cases/<projeto>/01.webp, 02.webp…` (a ordem do nome é a ordem na página) |
| Vídeos das capas | `public/videos/<projeto>.mp4`, `-card.mp4`, `-sq.mp4` e `-poster.webp` |
| Foto e avatar | `src/assets/me/` |
| Prévia ao compartilhar o link | `public/og.jpg` (1200×630) |

## Estrutura

```
src/
  pages/
    index.astro, about.astro, works.astro   → portfólio
    works/[slug].astro                       → case (portfólio)
    estudio/                                 → versão estúdio (início, projetos, sobre, cases)
    curriculo.astro                          → currículo para imprimir
  components/                                → seções reaproveitadas pelas duas versões
  components/studio/                         → seções só do estúdio
  data/                                      → todo o conteúdo editável
```

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:4321/portfolioedu/ (estúdio em `/portfolioedu/estudio/`).

Gerar o PDF do currículo: `npm run curriculo`.

## Publicação

Cada push na branch `main` publica o site automaticamente (GitHub Actions → GitHub Pages), em 1 a 2 minutos.

Feito com [Astro](https://astro.build) e [Lenis](https://lenis.darkroom.engineering).
