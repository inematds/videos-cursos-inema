# 🎬 videos-cursos-inema

Motor reutilizável que transforma um **curso INEMA** (site estático, ex.: [FEP](https://inematds.github.io/FEP)) numa **série de vídeos narrados e animados** — HTML → MP4 via [HyperFrames](https://hyperframes.heygen.com), no padrão visual **dark premium âmbar** do INEMA, com narração por voz clonada local e CTA pra **[INEMA.CLUB](https://inema.club)**.

> **Página / guia de uso:** https://inematds.github.io/videos-cursos-inema/

---

## O que ele faz

Você aponta pra um curso INEMA e ele gera vídeos em **3 níveis selecionáveis**:

| Parte | O que é | Duração | Voz |
|-------|---------|---------|-----|
| **1 · Landing** | 1 vídeo de visão geral (a landing + as trilhas: o que é, números, as N trilhas) | ~45–60s | `rachel` |
| **2 · Trilhas** | 1 vídeo por trilha (módulos + tópicos de cada um); opcional 1 intro por módulo | ~30–90s | `rachel` |
| **3 · Conteúdo completo** | **1 vídeo profundo por MÓDULO** — aula completa que percorre os ~6 tópicos, bem ilustrada com SVG | ~3–4 min | `bella` |

> ⚠️ A aula profunda é **por módulo, não por tópico**. Um curso com 6 trilhas × 6 módulos = **36 vídeos** profundos (não 216).

O motor (`engine.mjs`) já traz o estilo, as animações e os tipos de cena prontos — **no dia a dia você só escreve os specs** de cada vídeo.

## Por que assim

- **Timing é fonte única.** O `build.mjs` lê a duração **real** de cada WAV de narração → áudio, animação e legenda saem sempre sincronizados. Você nunca acerta tempo na mão.
- **Trocar a voz = trocar só o TTS.** Build, render, captions e CTA ficam idênticos (ver `references/vozes.md`).
- **Determinístico e local.** Fontes locais (`@font-face`, sem CDN), narração local (inemavox), sem `Date.now()`/`Math.random()`/rede no render.

---

## Pré-requisitos

- **Node.js 18+** (usa `fetch` nativo e ESM).
- **FFmpeg** (`ffmpeg` + `ffprobe`) no PATH — usado pra ler durações e converter áudio.
- **HyperFrames CLI** — roda via `npx hyperframes@0.6.91 …` (já fixado no `package.json`).
- **Daemon de voz inemavox / Chatterbox-VC** no ar em `http://127.0.0.1:7860` (vozes `bella` / `rachel`).
  Healthcheck: `GET /health`. Override com `INEMAVOX_TTS_URL`. Alternativas (Kokoro grátis, ElevenLabs) em `references/vozes.md`.
- **Fontes locais** geradas uma vez: `node fetch-fonts.mjs` (cria `assets/fonts/fonts.css`).

---

## Estrutura

```
engine.mjs            # motor: tipos de cena + renderHTML(spec, durations, vertical) -> HTML
build.mjs             # lê durações dos WAVs e escreve index.html (16:9 ou --vertical 9:16)
write-txt.mjs         # extrai as narrações dos specs -> assets/txt/<id>-sN.txt
tts-inemavox.mjs      # txt -> daemon inemavox -> assets/audio/<id>-sN.wav
voice-sample.mjs      # amostra A/B de voz (rachel vs bella)
fetch-fonts.mjs       # baixa Sora/Inter/JetBrains -> assets/fonts/fonts.css
specs.mjs             # Partes 1 e 2 (landing, trilhas, intros) — você cria por curso
specs-deep.mjs        # Parte 3 (aula profunda por módulo) — você cria por curso
assets/spec-template.mjs  # esqueleto com 1 exemplo de cada tipo de cena
references/           # extração de conteúdo, ilustrações SVG, vozes, formato
renders/              # MP4 finais
```

> O `index.html` na raiz é a **composição HyperFrames** gerada pelo `build.mjs` (reescrita a cada vídeo) — não é a landing. A landing/guia mora em `docs/`.

---

## Como usar (pipeline por vídeo)

Cada vídeo é uma entrada no objeto `VIDEOS` (em `specs.mjs` ou `specs-deep.mjs`). O id **começa sempre pelo slug do curso** (ex.: `fep-00-overview`, `piramide-ia-deep-t1-m1`).

```bash
# 0. uma vez por projeto: fontes locais
node fetch-fonts.mjs

# por vídeo, na ordem:
node write-txt.mjs <id>            # narrações do spec -> assets/txt/<id>-sN.txt
node tts-inemavox.mjs <id> bella   # gera os WAVs (voz bella; use rachel p/ Partes 1-2)
node build.mjs <id>                # lê durações reais e escreve index.html (16:9)
#   9:16 (Shorts/Reels):  node build.mjs <id> --vertical
npx hyperframes lint               # tem que dar 0 erros
npx hyperframes render --quality high --output renders/<id>.mp4
```

Antes do render final, extraia 1 frame por cena com ffmpeg e **valide a locução** (você não ouve o áudio no agente). Renders são longos — rode em **background**, trilha por trilha.

### Tipos de cena (em `engine.mjs`)

`title` · `topic` · `lead` · `bullets` · `cards` · `steps` · `term` · `compare` · `illus` (SVG) · `cta`

A **última cena é sempre `cta`** (INEMA.CLUB). Na Parte 3, invista nas cenas `illus` (SVG) — é a alma da aula profunda (ver `references/ilustracoes-svg.md`). Copie `assets/spec-template.mjs` como base.

---

## Estilo (house style INEMA)

Dark premium: fundo `#0D1321`, painel `#1D2D44`, borda `#3E5C76`, texto `#F0EBD8`, secundário `#748CAB`, **accent âmbar `#FFC300`**, código `#2EC4B6`. Fontes locais **Sora** (títulos), **Inter** (corpo), **JetBrains Mono** (código). Fundo persistente (glow âmbar, ghost text gigante, grid, grão), barra de progresso âmbar e captions no rodapé — tudo já no `engine.mjs`.

**CTA** (sempre a última cena): `CONTINUA EM` + **INEMA.CLUB** + `🌐 inema.club`.

---

## Comandos HyperFrames

```bash
npm run dev      # preview server (long-running — rode em background)
npm run check    # lint + validate + inspect
npm run render   # render para MP4
npm run publish  # publica e gera link
```

---

Feito para o ecossistema **[INEMA.CLUB](https://inema.club)**.
