// Gera amostras de voz (rachel vs bella) com termos em inglês, pra comparação.
import { writeFileSync, mkdtempSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";

const DAEMON = process.env.INEMAVOX_TTS_URL || "http://127.0.0.1:7860";
const TEXT = "No módulo dois você aprende o que é um LLM, o zero-shot e o few-shot prompting, o chain of thought, e o role prompting. Tudo no INEMA ponto CLUB.";
const tmp = mkdtempSync(join(tmpdir(), "vs-"));
const outDir = new URL("./voice-samples/", import.meta.url).pathname;
mkdirSync(outDir, { recursive: true });

for (const voice of ["rachel", "bella"]) {
  const res = await fetch(`${DAEMON}/tts/vc`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: TEXT, voice, lang: "pt", bitrate: "128k" }),
  });
  if (!res.ok) { console.error(voice, "HTTP", res.status, (await res.text()).slice(0, 120)); continue; }
  const mp3 = join(tmp, `${voice}.mp3`);
  writeFileSync(mp3, Buffer.from(await res.arrayBuffer()));
  const wav = join(outDir, `amostra-${voice}.wav`);
  execFileSync("ffmpeg", ["-nostdin", "-y", "-v", "error", "-i", mp3, "-ar", "44100", "-ac", "1", wav]);
  console.log(`${voice} -> voice-samples/amostra-${voice}.wav`);
}
