---
name: videos-cursos-inema
description: Gera os vídeos de um curso INEMA (tipo FEP / inematds.github.io) a partir do site do curso, em 3 partes selecionáveis — (1) LANDING: vídeo geral da landing + trilhas; (2) TRILHAS: um vídeo por trilha com seus módulos e tópicos (explicativo/índice); (3) CONTEÚDO COMPLETO: um vídeo PROFUNDO por MÓDULO (aula completa do módulo cobrindo seus tópicos), ilustrado com SVG, a partir do conteúdo completo do módulo. Saída HTML→MP4 (HyperFrames), dark premium âmbar, CTA INEMA.CLUB. Voz, provedor e formato são configuráveis (default: voz clonada local inemavox bella, 16:9; opcional kokoro grátis ou ElevenLabs; 9:16 disponível). Use SEMPRE que o usuário pedir "vídeos do curso", "vídeo do FEP", "vídeo das trilhas", "vídeo de cada módulo", "conteúdo completo em vídeo", "vídeo da landing do curso", ou der o link de um curso INEMA e quiser os vídeos. Aceita pedidos parciais: só a landing, só as trilhas, só o conteúdo completo, ou combinações.
---

# Vídeos de Cursos INEMA

Transforma um curso INEMA (site estático, ex.: FEP — https://inematds.github.io/FEP) numa série de
vídeos narrados e animados, no padrão dark premium do INEMA. Projeto de referência completo e funcionando:
`/home/nmaldaner/projetos/videos-explicativos/fep-videos/`.

## As 3 partes (o usuário escolhe quais fazer)

Pergunte (ou infira do pedido) **qual(is) parte(s)** o usuário quer. Ele pode pedir uma, duas ou as três.

1. **LANDING (visão geral)** — 1 vídeo. A landing do curso + as trilhas (o que é, números, as N trilhas).
   Curto (~45–60s). Voz **rachel**.
2. **TRILHAS (explicativo / índice)** — por trilha: 1 vídeo da trilha (mostra os módulos e os tópicos de
   cada um) + opcionalmente 1 vídeo de **intro por módulo** (índice dos tópicos, explicando o que vai ver).
   Curtos (~30–90s). Voz **rachel**. É o nível "trailer/roadmap".
3. **CONTEÚDO COMPLETO (profundo)** — **1 vídeo por MÓDULO** (uma aula completa do módulo, que percorre
   os ~6 tópicos dele), com o conteúdo completo da aula, **bem ilustrado com SVG** (definição, fluxo,
   antes/depois, exemplos, erros→solução, casos de uso). ~3–4 min cada. Voz **bella**. É o nível "aula de verdade".

> ⚠️ A aula profunda é **por MÓDULO, NÃO por tópico**. Um curso com 6 trilhas × 6 módulos = **36 vídeos**
> profundos (não 216). Cada vídeo cobre o módulo inteiro percorrendo seus tópicos.

> Regra de ouro: a profundidade do vídeo segue a profundidade da FONTE. Pra Parte 3, sempre puxe o
> **conteúdo completo** (não o resumo do menu) — ver `references/extracao-conteudo.md`.

## Configuração (voz, provedor, formato) — com defaults

O usuário pode especificar; se **não disser nada, use os defaults**.

| Opção | Default | Alternativas |
|---|---|---|
| **Provedor de voz** | **`inemavox`** (vozes clonadas locais — não gasta nada) | `kokoro` (local, grátis, `pf_dora`/`pm_alex`) · `elevenlabs` (cloud, precisa key) |
| **Voz** | inemavox **`bella`** (PT-BR fem.) | inemavox `rachel` · kokoro `pf_dora`/`pm_alex` · elevenlabs voice_id. Pode usar vozes diferentes p/ intro e profundo. |
| **Formato** | `16:9` (1920×1080) | `9:16` (1080×1920) · ou **ambos** |

> ⚠️ O default é **inemavox `bella`** (local, vozes clonadas, não gasta nada). É a voz padrão tanto pra
> intro/índice quanto pro conteúdo profundo, salvo o usuário pedir outra. Alternativa comum: usar `rachel`
> pra intro/índice (Partes 1–2) e `bella` pro profundo (Parte 3) — isso é escolha de projeto, não obrigatório.

- Provedor define qual script de TTS roda (mesma saída: `assets/audio/<id>-sN.wav`):
  `inemavox` → `node tts-inemavox.mjs <id> <voz>` · `kokoro` → `npx hyperframes tts <txt> --voice <voz> --lang pt-br`
  · `elevenlabs` → `tts-eleven.mjs` (ver `references/vozes.md`).
- Formato é flag do `build.mjs`: 16:9 = `node build.mjs <id>` · 9:16 = `node build.mjs <id> --vertical`.
  Pra **ambos**, gere os dois e renderize cada um pra um arquivo (`renders/<id>-16x9.mp4` / `renders/<id>-9x16.mp4`).
- **Onde tudo mora — default: `~/projetos/output/<curso>-videos/`.** O projeto INTEIRO do curso
  (specs, `assets/`, `frames/`, `index.html` e os MP4 em `renders/`) fica nessa pasta única dentro de
  `output/`, **salvo o usuário definir outro lugar**. Assim cada curso fica todo num lugar só, fácil de achar.
- Pergunte só se for ambíguo; caso contrário siga os defaults e **diga ao usuário quais defaults usou**.

## Fluxo de trabalho

### 1. Setup do projeto
Crie uma pasta do curso e copie o motor + fontes:
```bash
mkdir -p ~/projetos/output    # tudo do curso vive dentro de output/
cd ~/projetos/output
npx hyperframes init <curso>-videos --example blank --non-interactive
# copie os scripts do motor pra raiz do projeto (ao lado de specs.mjs):
cp <skill>/{engine,build,write-txt,tts-inemavox,fetch-fonts,voice-sample}.mjs <curso>-videos/
# fontes locais (Sora/Inter/JetBrains) — NÃO usar CDN:
cd <curso>-videos && node fetch-fonts.mjs   # gera assets/fonts/fonts.css
mkdir -p assets/txt assets/audio renders frames
```
Verifique o HyperFrames: `npx hyperframes doctor`.

### 2. Extrair o conteúdo do site
Leia `references/extracao-conteudo.md`. Em resumo:
- Estrutura módulo→tópicos: páginas `nivel-*.html` (`module-card` / `topic-button`). **A página é a verdade.**
- Conteúdo profundo: `topicos-data.js` (`eval(js + "; topicosData;")`) com os campos `conteudoCompleto`,
  `exemplos`, `casosDeUso`, `dicasPraticas`, `errosComuns`; e os `.md` em `conteudo/modulo{N}-{id}.md`.
- ⚠️ `curl` é bloqueado — use `ctx_execute` (fetch em JS) ou `fetch` dentro dos scripts Node.

### 3. Escrever os specs
Cada vídeo é uma entrada em `VIDEOS`. Use **dois arquivos** (o motor faz merge):
- `specs.mjs` — Partes 1 e 2 (landing, trilhas, intros de módulo).
- `specs-deep.mjs` — Parte 3 (aula profunda **por módulo**).

Copie `assets/spec-template.mjs` como base. Tipos de cena (em `engine.mjs`):
`title · topic · lead · bullets · cards · steps · term · compare · illus(SVG) · cta`.
A **última cena é sempre `cta`** (INEMA.CLUB). Para a Parte 3, invista nas cenas `illus` (SVG) —
ver `references/ilustracoes-svg.md`. Mapeamento conteúdo→cena:
`errosComuns → compare (erro→solução)` · `exemplos ❌/✅ → illus` · `casosDeUso → cards` ·
`dicasPraticas → bullets` · seções do `.md` → `illus`/`steps`/`bullets`.

Convenção de id: **TODO id começa pelo slug do curso** `<curso>-…` (ex.: `piramide-ia-…`, `fep-…`) — assim
os arquivos em `renders/` e os títulos no YouTube já saem identificados e nunca colidem entre cursos.
- Parte 1: `<curso>-00-overview`
- Parte 2: `<curso>-01-<trilha>` (vídeo da trilha), `<curso>-02-<trilha>-mN` (intro de módulo, opcional)
- Parte 3: `<curso>-deep-<trilha>-mN` (aula profunda do módulo — **um por módulo**, não por tópico)

O `<curso>` é um slug curto em kebab-case do nome do curso (ex.: "Pirâmide da IA" → `piramide-ia`).
Defina-o uma vez e prefixe todos os ids. Saída (default): `~/projetos/output/<curso>-videos/renders/<curso>-deep-t4-m1.mp4`.

### 4. Gerar (pipeline por id)
Para cada vídeo: `write-txt` → `tts-inemavox` (voz!) → `build` → `render`.
```bash
node write-txt.mjs <id>                 # escreve assets/txt/<id>-sN.txt das narrações
node tts-inemavox.mjs <id> bella        # voz default = bella (todas as partes)
node build.mjs <id>                      # lê durações reais dos WAVs e gera index.html (16:9)
npx hyperframes lint                      # 0 erros
npx hyperframes render --quality high --output renders/<id>.mp4   # fica em ~/projetos/output/<curso>-videos/renders/
```
Confira sempre `npx hyperframes lint` (0 erros) e, em vídeo novo, extraia 1 frame por cena com ffmpeg
e **mostre ao usuário** antes do render final (você não ouve o áudio — peça pra ele validar a locução).
Renders são longos — rode em **background** e em lotes (trilha por trilha).

### 5. Vozes (inemavox / Chatterbox-VC)
Daemon local `POST http://127.0.0.1:7860/tts/vc {text, voice, lang:"pt", bitrate:"128k"}` → mp3 → wav.
- **Default = `bella`** (todas as partes). Opcional: `rachel` pra intro/índice (Partes 1–2) e `bella` pro profundo (Parte 3).
- `tts-inemavox.mjs <id> <voz>` (tem retry por cena; daemon falha ~1/20). Health: `curl …/health` (ou ctx).
- Com bella/rachel pode escrever termos em inglês (LLM, RAG, few-shot) normalmente — não soletre.
- Detalhes e alternativas (Kokoro, ElevenLabs) em `references/vozes.md`.

## Estilo (house style INEMA)
Dark premium: bg `#0D1321`, painel `#1D2D44`, borda `#3E5C76`, texto `#F0EBD8`, secundário `#748CAB`,
**accent âmbar `#FFC300`**, código `#2EC4B6`. Fontes locais: **Sora** (títulos), **Inter** (corpo),
**JetBrains Mono** (código/URLs). Fundo persistente (glow âmbar, ghost text gigante, grid, grão),
barra de progresso âmbar, captions no rodapé. Tudo já está em `engine.mjs` — em geral só se mexe nos specs.

## CTA (sempre a última cena)
`CONTINUA EM` + **INEMA.CLUB** (INEMA creme, .CLUB âmbar, glow) + `🌐 inema.club`.
Narração padrão: "Isso é conteúdo do INEMA ponto CLUB. Acesse: inema ponto club."

## Regras de ouro
- **Animar `.scene-inner`/`.anim`**, nunca o wrapper `.clip`. Cenas/captions em tracks alternados (o motor já faz).
- **Timing é fonte única:** o `build.mjs` tira a duração real de cada WAV → áudio e animação sempre batidos.
- **Fontes locais** (`@font-face`), nunca CDN (somem no render).
- **SVG** é a alma da Parte 3 — viewBox 1480 de largura, paleta do tema, classes `ttl`/`mono`.
- Confirmar frames com o usuário antes do render final.

## Futuras versões (TODO)
- **Marca d'água de autoria.** Adicionar uma marca d'água discreta nos vídeos sinalizando que foram
  gerados por esta ferramenta — ex.: selo fixo num canto, baixa opacidade, "feito com videos-cursos-inema ·
  INEMA.CLUB". Hoje só existe o `ghost` (texto gigante de fundo) e a cena de CTA final; falta o selo de
  autoria persistente. Implementar no `engine.mjs` (camada fixa no `#root`, fora das cenas, com `data-layout-ignore`).

## Arquivos da skill
Layout flat (tudo na raiz desta pasta — é também um projeto HyperFrames rodável):
- Motor: `engine.mjs` (motor + tipos de cena), `build.mjs`, `write-txt.mjs`, `tts-inemavox.mjs`,
  `fetch-fonts.mjs`, `voice-sample.mjs` (amostra de voz A/B).
- Specs de exemplo (curso FEP): `specs.mjs`, `specs-deep.mjs`, `assets/deep-t*.mjs`. `render-all.sh` (lote).
- Config HyperFrames: `package.json`, `hyperframes.json`, `meta.json`, `index.html` (composição gerada).
- `assets/spec-template.mjs` — esqueleto com 1 exemplo de cada tipo de cena (incl. SVG).
- `references/extracao-conteudo.md` — como puxar conteúdo do site do curso.
- `references/ilustracoes-svg.md` — padrões de SVG pros vídeos profundos.
- `references/vozes.md` — inemavox/Chatterbox-VC, rachel/bella, alternativas.
- `references/formato.md` — decisões de formato (base de referência).
