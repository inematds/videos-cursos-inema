# FEP em vídeo — formato acordado (base de referência)

> Documento da estrutura que combinamos. Vai sendo complementado conforme avançamos.

## 1. Dois níveis de vídeo por módulo

- **INTRO do módulo** (voz **rachel**): índice resumido — passa pelos tópicos explicando *o que a pessoa vai ver*. Funciona como trailer/roadmap. **Já produzido** (ver §5).
- **PROFUNDO — 1 vídeo por TÓPICO** (voz **bella**): a **aula completa** de cada tópico, vinda do conteúdo "ver completo". **Bem ilustrado com SVG** + texto. **A produzir.**

A trilha (overview) continua sendo só índice — está ok.

## 2. Fonte do conteúdo (mesma fonte, duas visões)

- **Por módulo (página "ver completo"):** `https://inematds.github.io/FEP/conteudo/{nivel}/modulo{N}-completo.html`
  (ex.: `conteudo/iniciante/modulo1-completo.html` — junta os 4 tópicos do M1).
- **Por tópico (markdown):** `https://inematds.github.io/FEP/conteudo/modulo{N}-{id}.md`
  (ex.: `conteudo/modulo1-llm-basics.md`; `conteudo/modulo5-rag.md` ≈ 7,4 KB de aula real).
- **Campos estruturados ricos** em `topicos-data.js` (capturar via `eval(js + "; topicosData;")`):
  `introducao`, `conteudoCompleto` (markdown), **`exemplos`** (com `semDecomposicao` ❌ / `comDecomposicao` ✅ / `resultado`), **`casosDeUso`** (`area`/`aplicacao`/`detalhes`), **`dicasPraticas`**, **`errosComuns`** (`erro`/`exemplo`/`solucao`), `recursosAdicionais`.

> Esses campos estruturados são ideais pra SVG (ex.: ❌ vs ✅, erro→solução).
> ⚠️ O agrupamento `nivel`/`modulo` do `topicos-data.js` NÃO bate com a página — a **página** (`nivel-*.html`, module-cards / `topic-button`) é a verdade pra saber quais tópicos há em cada módulo.

## 3. Vozes (inemavox / Chatterbox-VC)

Daemon local `POST http://127.0.0.1:7860/tts/vc` `{text, voice, lang:"pt", bitrate:"128k"}`.
- **Intro = `rachel`** · **Conteúdo profundo = `bella`**.
- Script: `tts-inemavox.mjs <id> <voz>` (tem retry por cena). Detalhes em `../NARRACAO-VOZES.md`.

## 4. Visual

- Estilo dark premium INEMA (`engine.mjs`). Ilustrar com **SVG** (diagramas/ilustrações próprios de cada conceito) + texto. Tipos de cena: title · topic · lead · bullets · cards · steps · term · compare · cta · **(novo) svg/illus**.

## 5. Granularidade e status

- **1 vídeo profundo por tópico.** Trilha Iniciante = **19 tópicos**: M1(4) llm-basics·tokens·anatomia·clareza · M2(5) zero-shot·few-shot·cot·role·humanizacao · M3(4) escrita·emails·resumo·brainstorming · M4(3) markdown·tabelas·templates · M5(3) erros·limitacoes·dicas.
- **Intros (índice) prontas:** 28 vídeos `00-overview` … `27-mc-m6` (voz rachel) em `renders/`.
- **Profundos por tópico:** A FAZER — começando pela **Trilha Iniciante**.

## 6. Pipeline

`write-txt → tts-inemavox <id> <voz> → build → render`. Convenção de id dos profundos: `ini-m1-llm-basics`, `ini-m1-tokens`, … (1 spec por tópico).
