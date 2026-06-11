// node write-txt.mjs <id>  -> escreve assets/txt/<id>-sN.txt a partir das narrações do spec
import { writeFileSync } from "node:fs";
import { VIDEOS as V1 } from "./specs.mjs";
import { VIDEOS as V2 } from "./specs-deep.mjs";
const VIDEOS = { ...V1, ...V2 };
const id = process.argv[2];
const v = VIDEOS[id];
if (!v) { console.error("id desconhecido:", id, "| validos:", Object.keys(VIDEOS).join(", ")); process.exit(1); }
v.scenes.forEach((s, i) => {
  writeFileSync(new URL(`./assets/txt/${id}-s${i + 1}.txt`, import.meta.url), (s.narration || "").trim() + "\n");
});
console.log(`${id}: ${v.scenes.length} txt gerados`);
