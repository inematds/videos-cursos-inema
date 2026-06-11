# 🎬 videos-cursos-inema

Skill + motor que transforma um **curso INEMA** (site estático, ex.: [FEP](https://inematds.github.io/FEP)) numa **série de vídeos narrados e animados** — HTML → MP4 via [HyperFrames](https://hyperframes.heygen.com), no padrão visual **dark premium âmbar** do INEMA, com narração por voz clonada local e CTA pra **[INEMA.CLUB](https://inema.club)**.

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

## Por que assim

- **Timing é fonte única.** O `build.mjs` lê a duração **real** de cada WAV de narração → áudio, animação e legenda saem sempre sincronizados.
- **Trocar a voz = trocar só o TTS.** Build, render, captions e CTA ficam idênticos.
- **Determinístico e local.** Fontes locais (`@font-face`, sem CDN), narração local (inemavox), sem `Date.now()`/`Math.random()`/rede no render.

---

## Estrutura do repo

Este repo guarda **a skill completa** e a **página-guia** — nada mais:

```
README.md                       # este arquivo
docs/index.html                 # landing + guia de uso (GitHub Pages)
skills/videos-cursos-inema/     # A SKILL COMPLETA (instalável) + projeto rodável
  ├─ SKILL.md                   # instruções da skill (Claude Code)
  ├─ engine.mjs                 # motor: tipos de cena + renderHTML()
  ├─ build.mjs · write-txt.mjs · tts-inemavox.mjs · fetch-fonts.mjs · voice-sample.mjs
  ├─ specs.mjs · specs-deep.mjs · render-all.sh   # specs de exemplo (curso FEP)
  ├─ package.json · hyperframes.json · meta.json · index.html   # config HyperFrames
  ├─ assets/   (spec-template.mjs, fonts/, deep-t*.mjs, txt/, audio/)
  └─ references/   (extração de conteúdo, ilustrações SVG, vozes, formato)
```

---

## Instalar a skill (Claude Code)

```bash
cp -r skills/videos-cursos-inema ~/.claude/skills/
# reinicie a sessão do agente; depois invoque com /videos-cursos-inema
```

A skill ensina o agente a extrair o conteúdo do curso, escrever os specs e rodar o pipeline. Detalhes em
[`skills/videos-cursos-inema/SKILL.md`](skills/videos-cursos-inema/SKILL.md).

---

## Como usar (pipeline por vídeo)

Tudo roda **dentro de `skills/videos-cursos-inema/`**. Cada vídeo é uma entrada no objeto `VIDEOS`
(em `specs.mjs` para as Partes 1–2, `specs-deep.mjs` para a Parte 3). O id começa sempre pelo slug do
curso (ex.: `fep-00-overview`, `fep-deep-t1-m1`).

```bash
cd skills/videos-cursos-inema

# uma vez por projeto: fontes locais
node fetch-fonts.mjs

# por vídeo, na ordem:
node write-txt.mjs <id>            # narrações do spec -> assets/txt/<id>-sN.txt
node tts-inemavox.mjs <id> bella   # gera os WAVs (voz bella; use rachel p/ Partes 1-2)
node build.mjs <id>                # lê durações reais e escreve index.html (16:9)
#   9:16 (Shorts/Reels):  node build.mjs <id> --vertical
npx hyperframes lint               # tem que dar 0 erros
npx hyperframes render --quality high --output renders/<id>.mp4
```

### Pré-requisitos

- **Node.js 18+** (fetch nativo, ESM) e **FFmpeg** (`ffmpeg` + `ffprobe`) no PATH.
- **HyperFrames CLI** via `npx hyperframes@0.6.91 …` (fixado no `package.json`).
- **Daemon de voz inemavox / Chatterbox-VC** em `http://127.0.0.1:7860` (vozes `bella` / `rachel`).
  Override com `INEMAVOX_TTS_URL`. Alternativas (Kokoro grátis, ElevenLabs) em `references/vozes.md`.

### Tipos de cena (em `engine.mjs`)

`title` · `topic` · `lead` · `bullets` · `cards` · `steps` · `term` · `compare` · `illus` (SVG) · `cta`

A **última cena é sempre `cta`** (INEMA.CLUB). Na Parte 3, invista nas cenas `illus` (SVG) — é a alma da
aula profunda (ver `references/ilustracoes-svg.md`). Copie `assets/spec-template.mjs` como base.

---

## Estilo (house style INEMA)

Dark premium: fundo `#0D1321`, painel `#1D2D44`, borda `#3E5C76`, texto `#F0EBD8`, secundário `#748CAB`, **accent âmbar `#FFC300`**, código `#2EC4B6`. Fontes locais **Sora** (títulos), **Inter** (corpo), **JetBrains Mono** (código). **CTA** (sempre a última cena): `CONTINUA EM` + **INEMA.CLUB** + `🌐 inema.club`.

---

Feito para o ecossistema **[INEMA.CLUB](https://inema.club)**.
