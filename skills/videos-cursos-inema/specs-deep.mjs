// specs-deep.mjs — Parte 3 (aula profunda por módulo). Voz: bella.
// Merge dos 6 fragmentos (1 por trilha) escritos em assets/deep-tN.mjs.
import { V as T1 } from "./assets/deep-t1.mjs";
import { V as T2 } from "./assets/deep-t2.mjs";
import { V as T3 } from "./assets/deep-t3.mjs";
import { V as T4 } from "./assets/deep-t4.mjs";
import { V as T5 } from "./assets/deep-t5.mjs";
import { V as T6 } from "./assets/deep-t6.mjs";

export const VIDEOS = { ...T1, ...T2, ...T3, ...T4, ...T5, ...T6 };
