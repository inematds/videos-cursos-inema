# Extração de conteúdo dos cursos INEMA (sites tipo FEP)

Os cursos do INEMA (ex.: FEP — https://inematds.github.io/FEP) seguem um padrão de site estático
no GitHub Pages. O conteúdo está disponível em três visões; use a que servir.

> ⚠️ O fetch direto via `curl`/`wget` é bloqueado pelo hook do context-mode. Use `ctx_execute`
> (JS com `fetch`) ou `ctx_fetch_and_index`. Em scripts Node, `fetch` funciona normal.

## 1. Estrutura de trilhas e módulos (a VERDADE)

A página de cada nível (`nivel-iniciante.html`, `nivel-tecnico.html`, `nivel-avancado.html`,
`nivel-masterclass.html`) define quais módulos existem e quais tópicos há em cada módulo.

```js
// dentro de ctx_execute (language: javascript)
const t = await (await fetch("https://inematds.github.io/FEP/nivel-iniciante.html")).text();
const cards = t.split('class="module-card').slice(1);     // cada module-card = 1 módulo
for (const c of cards) {
  const mod = (c.match(/Módulo\s+\d+:\s*([^<]+)/) || [])[1]?.trim();
  const items = c.split('class="topic-item"').slice(1);   // cada topic-item = 1 tópico
  for (const it of items) {
    const title = (it.match(/class="topic-button[^"]*"[^>]*>([\s\S]*?)<span/) || [])[1]
      ?.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    const body = (it.split('</button>')[1] || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    // body traz "O que é / Por que / Conceitos" (resumo do acordeão)
  }
}
```

> O agrupamento `nivel`/`modulo` dentro do `topicos-data.js` **NÃO bate** com a página em alguns
> níveis. Sempre use a PÁGINA pra montar a lista módulo→tópicos.
> Algumas páginas (ex.: masterclass) são overview e não têm `topic-button` — aí use os títulos h3 dos
> módulos + os tópicos técnicos do `topicos-data.js`.

## 2. Conteúdo PROFUNDO por tópico (pros vídeos deep)

### a) `topicos-data.js` — campos estruturados (ouro pra SVG)

```js
const js = await (await fetch("https://inematds.github.io/FEP/topicos-data.js")).text();
const data = eval(js + "\n; topicosData;");   // é `const topicosData = {...}` — capture no MESMO eval
const d = data["llm-basics"];
// campos: titulo, nivel, modulo, icon, introducao, conteudoArquivo, conteudoCompleto (markdown),
//         exemplos[], casosDeUso[], dicasPraticas[], errosComuns[], recursosAdicionais[]
```

Campos mais úteis pra montar cenas profundas/SVG:
- **`conteudoCompleto`** — markdown da aula (seções ##/###, listas). Nem todo tópico tem (alguns vazios).
- **`exemplos[]`** — `{titulo, contexto, semDecomposicao (❌), comDecomposicao (✅), resultado}` → vira SVG ❌×✅.
- **`casosDeUso[]`** — `{area, aplicacao, detalhes}` → vira `cards`.
- **`dicasPraticas[]`** — strings → vira `bullets`.
- **`errosComuns[]`** — `{erro, exemplo, solucao}` → vira `compare` (erro → solução).
- **`recursosAdicionais[]`** — strings.

### b) Arquivos markdown completos (quando `conteudoCompleto` vier vazio)

`conteudoArquivo` aponta pro `.md`: `https://inematds.github.io/FEP/conteudo/modulo{N}-{id}.md`
(ex.: `conteudo/modulo5-rag.md` ≈ 7,4 KB de aula real). É a fonte mais densa pros níveis avançados.

### c) Página "ver completo" por módulo

`https://inematds.github.io/FEP/conteudo/{nivel}/modulo{N}-completo.html` — junta todos os tópicos do
módulo, formatado. Mesmo conteúdo das visões acima, só agrupado por módulo.

## 3. Receita pra montar 1 vídeo PROFUNDO de tópico

1. Puxe `conteudoCompleto` (ou o `.md`) + `exemplos`/`casosDeUso`/`dicasPraticas`/`errosComuns`.
2. Mapeie para cenas:
   - abertura `title` (com a `introducao`)
   - `illus` (SVG) pros conceitos centrais (definição, fluxo, antes/depois) — **invista aqui**
   - `compare` pros `errosComuns` (erro → solução) e exemplos ❌×✅
   - `cards` pros `casosDeUso` e modelos/ferramentas
   - `bullets` pras `dicasPraticas` e características
   - `lead` pros takeaways
   - `cta` no fim
3. ~10–16 cenas dão ~3–4 min de aula profunda.
