// Gera public/curriculo-eduardo-araujo.pdf a partir da página /curriculo.
// Uso: npm run curriculo
// Faz o build, serve a pasta dist num servidor local mínimo e imprime com o Chrome/Edge headless.
import { execFileSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { dirname, extname, join, resolve } from 'node:path';

const BASE = '/portfolioedu';
const DIST = resolve('dist');
const OUT = resolve('public/curriculo-eduardo-araujo.pdf');

const browsers = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].filter(Boolean);
const browser = browsers.find((p) => existsSync(p));
if (!browser) throw new Error('Chrome/Edge não encontrado. Defina CHROME_PATH.');

execFileSync('npx', ['astro', 'build'], { stdio: 'inherit', shell: true });

// Servidor estático mínimo para a pasta dist (o site usa caminhos com /portfolioedu)
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = createServer((req, res) => {
  let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (path.startsWith(BASE)) path = path.slice(BASE.length);
  let file = join(DIST, path);
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file)) return res.writeHead(404).end();
  res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' }).end(readFileSync(file));
});
await new Promise((r) => server.listen(0, r));
const url = `http://localhost:${server.address().port}${BASE}/curriculo/`;

// Perfil separado: sem isso o Chrome repassa a tarefa para a janela já aberta e trava.
// Saída em pasta temporária: o Chrome falha com caminhos acentuados ("Araújo").
// Perfil novo a cada execução: um Chrome headless anterior ainda aberto "rouba" a tarefa.
const profile = mkdtempSync(join(tmpdir(), 'curriculo-chrome-'));
const tmpPdf = join(tmpdir(), 'curriculo.pdf');

try {
  // execFileSync bloquearia o servidor (mesmo processo); por isso roda assíncrono
  const { execFile } = await import('node:child_process');
  await new Promise((ok, fail) =>
    execFile(
      browser,
      [
        '--headless=new',
        '--disable-gpu',
        '--no-first-run',
        `--user-data-dir=${profile}`,
        '--no-pdf-header-footer',
        '--virtual-time-budget=15000', // tempo para a fonte carregar
        `--print-to-pdf=${tmpPdf}`,
        url,
      ],
      { timeout: 90_000 },
      (err, _out, stderr) => (err ? fail(err) : existsSync(tmpPdf) ? ok() : fail(new Error(stderr))),
    ),
  );
  mkdirSync(dirname(OUT), { recursive: true });
  copyFileSync(tmpPdf, OUT);
  rmSync(tmpPdf);
  console.log(`PDF gerado: ${OUT}`);
} finally {
  server.close();
  try {
    rmSync(profile, { recursive: true, force: true });
  } catch {}
}
