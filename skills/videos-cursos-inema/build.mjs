// node build.mjs <id> [--vertical]  -> lê durações dos WAVs <id>-sN.wav e escreve index.html
//   sem flag = 16:9 (1920x1080) · --vertical = 9:16 (1080x1920). Renderize logo após cada build.
import { writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { VIDEOS as V1 } from "./specs.mjs";
import { VIDEOS as V2 } from "./specs-deep.mjs";
import { renderHTML } from "./engine.mjs";
const VIDEOS = { ...V1, ...V2 };

const id = process.argv[2];
const v = VIDEOS[id];
if (!v) { console.error("id desconhecido:", id); process.exit(1); }

const durations = v.scenes.map((_, i) => {
  const p = new URL(`./assets/audio/${id}-s${i + 1}.wav`, import.meta.url).pathname;
  const out = execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", p]).toString().trim();
  return parseFloat(out);
});

const vertical = process.argv.includes("--vertical");
const html = renderHTML({ ...v, id }, durations, vertical);
writeFileSync(new URL("./index.html", import.meta.url), html);
const total = durations.reduce((a, b) => a + b + 1.4, 0);
console.log(`${id}: index.html · ${vertical ? "9:16" : "16:9"} · ${v.scenes.length} cenas · ~${Math.round(total)}s`);
