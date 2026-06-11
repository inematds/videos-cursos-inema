// node tts-inemavox.mjs <id> [voice]
// Gera assets/audio/<id>-sN.wav usando o daemon inemavox/Chatterbox-VC (timesmkt3).
//   POST http://127.0.0.1:7860/tts/vc  { text, voice, lang:"pt", bitrate:"128k" } -> mp3
// Depois converte mp3 -> wav com ffmpeg. Lê os textos de assets/txt/<id>-sN.txt.
import { readFileSync, writeFileSync, existsSync, mkdtempSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { VIDEOS as V1 } from "./specs.mjs";
import { VIDEOS as V2 } from "./specs-deep.mjs";
const VIDEOS = { ...V1, ...V2 };

const DAEMON = process.env.INEMAVOX_TTS_URL || "http://127.0.0.1:7860";
const id = process.argv[2];
const voice = process.argv[3] || "rachel";
const v = VIDEOS[id];
if (!v) { console.error("id desconhecido:", id, "| validos:", Object.keys(VIDEOS).join(", ")); process.exit(1); }

const tmp = mkdtempSync(join(tmpdir(), "ivox-"));

async function gen(i) {
  const txtPath = new URL(`./assets/txt/${id}-s${i}.txt`, import.meta.url).pathname;
  const text = readFileSync(txtPath, "utf8").trim();
  const res = await fetch(`${DAEMON}/tts/vc`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, voice, lang: "pt", bitrate: "128k" }),
  });
  if (!res.ok) throw new Error(`s${i}: HTTP ${res.status} ${(await res.text()).slice(0, 120)}`);
  const mp3 = Buffer.from(await res.arrayBuffer());
  const mp3Path = join(tmp, `${id}-s${i}.mp3`);
  writeFileSync(mp3Path, mp3);
  const wavPath = new URL(`./assets/audio/${id}-s${i}.wav`, import.meta.url).pathname;
  execFileSync("ffmpeg", ["-nostdin", "-y", "-v", "error", "-i", mp3Path, "-ar", "44100", "-ac", "1", wavPath]);
  return wavPath;
}

const n = v.scenes.length;
for (let i = 1; i <= n; i++) {
  let ok = false;
  for (let attempt = 1; attempt <= 3 && !ok; attempt++) {
    try { await gen(i); ok = true; }
    catch (e) { process.stdout.write(`  s${i} retry(${attempt})`); await new Promise(r => setTimeout(r, 1500)); }
  }
  if (!ok) throw new Error(`s${i} falhou após 3 tentativas`);
  process.stdout.write(`  s${i} ✓`);
}
console.log(`\n${id}: ${n} WAVs gerados (voz ${voice}, inemavox)`);
