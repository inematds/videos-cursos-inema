# Narração / Vozes — opções de TTS para os vídeos explicativos

O pipeline (`fep-videos/` e os projetos de vídeo) só depende de **arquivos WAV** nomeados
`<id>-sN.wav` (ou `sN.wav`) em `assets/audio/`. O `build.mjs` lê a **duração real** de cada WAV
e sincroniza animação + legenda automaticamente. Logo, **trocar a voz = trocar só a etapa de TTS**;
build, render, captions e CTA ficam idênticos.

Etapas do pipeline: `write-txt → [TTS] → build → render`. Só `[TTS]` muda entre as opções abaixo.

---

## Opção 1 — Kokoro (atual, local, grátis)

`npx hyperframes tts <txt> --voice pf_dora --speed 0.98 --output <wav>`

- Local (modelo Kokoro-82M), sem API key.
- Vozes PT-BR: `pf_dora` (fem., atual), `pm_alex` (masc.), `pm_santa` (masc. grave). `--lang pt-br`.
- **Limitação conhecida:** pronuncia mal **termos em inglês** (LLM, few-shot, chain of thought, RAG).
  Por isso os specs hoje "soletram" siglas (`"L L M"`, `"I A"`). Gambiarra.

## Opção 2 — inemavox / Chatterbox-VC (local, voz clonada) ✅ escolhido

Daemon FastAPI local (pm2 `timesmkt3-tts-daemon`), pipeline Edge TTS (prosódia PT-BR nativa) →
ChatterboxVC (transferência de timbre pra voz clonada). Pronuncia **inglês no meio do PT-BR bem**.

- **Endpoint:** `POST http://127.0.0.1:7860/tts/vc`
- **Body:** `{ "text": "...", "voice": "rachel"|"bella", "lang": "pt", "bitrate": "128k" }` → devolve **mp3**
- **Vozes (voice-refs):** `rachel` (default) e `bella` — ambas femininas, ~24 kHz.
- **Saúde:** `GET /health` · **Vozes:** `GET /voices` · refs em `timesmkt3/media/voice-refs/`.
- **No nosso pipeline:** `fep-videos/tts-inemavox.mjs <id> [voice]` → chama o daemon, salva mp3,
  converte pra WAV com ffmpeg em `assets/audio/<id>-sN.wav`.
- **Cuidados (de `timesmkt3/doc/tts-daemon-notas.md`):** daemon precisa estar no ar (`pm2 status`);
  Edge TTS depende de rede Microsoft (sem key, sem SLA); ~1 em 20 clipes pode ter artefato
  (estalo/final comido) — vale um check de duração/loudness e regerar; não sobrescrever `voice-refs/*.wav`.
- **Com inemavox dá pra parar de soletrar** siglas nos specs (escrever `LLM`, `RAG`, `IA`, `few-shot`
  normalmente).

## Opção 3 — ElevenLabs (cloud, voz mais natural / clonável) — futuro, precisa de key

- O que muda: 1 script novo `tts-eleven.mjs` no lugar do TTS; resto idêntico.
- **Precisa:** `ELEVENLABS_API_KEY` (env, nunca no chat) + um `voice_id` da conta.
- **Modelo:** `eleven_multilingual_v2` (lida bem com PT-BR + termos em inglês).
- **Formato:** `POST https://api.elevenlabs.io/v1/text-to-speech/{voice_id}?output_format=mp3_44100_128`
  body `{ text, model_id, voice_settings:{ stability:0.5, similarity_boost:0.8 } }` → mp3 →
  `ffmpeg -i s.mp3 <id>-sN.wav`.
- Também permite **parar de soletrar** siglas.
- Status: **documentado, não implementado** (aguardando conta/key).

---

### Resumo
Pra trocar a voz da série, muda só a etapa de TTS. **Decisão atual: usar inemavox (Chatterbox-VC)**,
voz a definir entre `rachel` e `bella`. ElevenLabs fica documentado como opção futura (precisa key).
