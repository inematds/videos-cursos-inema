// TEMPLATE de specs — copie como specs.mjs (intros) e/ou specs-deep.mjs (profundos) no projeto.
// Cada vídeo é uma entrada em VIDEOS, com um array de cenas. 1 narração = 1 cena.
// CONVENÇÃO DE ID: todo id começa pelo slug do curso em kebab-case (ex.: "piramide-ia-00-overview",
//   "piramide-ia-01-t1-prompt", "piramide-ia-deep-t1-m1"). Assim renders/ e títulos já saem identificados.
// Tipos de cena: title · topic · lead · bullets · cards · steps · term · compare · illus(SVG) · cta
// Regras: a ÚLTIMA cena é sempre `cta` (INEMA.CLUB). Narração TTS-friendly (escreva números por extenso
// se quiser controle; com bella/rachel pode escrever LLM, RAG, IA normalmente). Expanda só o que soar mal.

const C = { bg2: "#1D2D44", bg3: "#3E5C76", fg: "#F0EBD8", mut: "#748CAB", acc: "#FFC300", code: "#2EC4B6", red: "#e07a7a" };

// SVG de exemplo (illus): use o viewBox ~1480 de largura; cores da paleta; classes ttl/mono p/ fontes.
const svgExemplo = `
<svg viewBox="0 0 1480 360" xmlns="http://www.w3.org/2000/svg">
  ${[["1","Passo A","faz isso"],["2","Passo B","depois isso"],["3","Passo C","e fecha"]].map((s,i)=>{
    const x=40+i*490;
    return `<g transform="translate(${x},60)">
      <rect x="0" y="0" width="420" height="220" rx="22" fill="#22364f" stroke="${i===2?C.acc:C.bg3}" stroke-width="3"/>
      <circle cx="60" cy="64" r="36" fill="${C.acc}"/><text x="60" y="78" text-anchor="middle" fill="#0D1321" font-size="40" class="ttl">${s[0]}</text>
      <text x="120" y="76" fill="${C.fg}" font-size="40" class="ttl">${s[1]}</text>
      <text x="34" y="150" fill="${C.mut}" font-size="28">${s[2]}</text>
    </g>${i<2?`<g transform="translate(${x+430},170)" stroke="${C.acc}" stroke-width="6" fill="none" stroke-linecap="round"><line x1="0" y1="0" x2="48" y2="0"/><path d="M36,-12 L54,0 L36,12"/></g>`:""}`;
  }).join("")}
</svg>`;

export const VIDEOS = {
  "curso-slug-exemplo-id": {   // <- sempre prefixe pelo slug do curso, ex.: "piramide-ia-deep-t1-m1"
    ghost: "GHOST",            // marca d'água grande de fundo (ex.: "M1·T1")
    scenes: [
      // title — abertura
      { type: "title", eyebrow: "CURSO · MÓDULO · TÓPICO", lines: ["Primeira", "Linha"], accentLine: 2,
        sub: "subtítulo da cena", caption: "legenda na tela",
        narration: "Narração da abertura." },

      // topic — divisor de tópico (TÓPICO n)
      { type: "topic", n: 1, name: "Nome do Tópico", caption: "Tópico 1 — Nome",
        narration: "Tópico um: introdução." },

      // lead — frase grande de impacto (aceita <span class="accent"> e <b> e <br/>)
      { type: "lead", text: "Uma frase <span class=\"accent\">forte</span>.<br/>Com duas linhas.",
        caption: "legenda", narration: "Narração da frase de impacto." },

      // bullets — lista (emoji opcional no texto)
      { type: "bullets", kicker: "TÍTULO PEQUENO", heading: "Cabeçalho opcional",
        items: ["🤖 item um", "🔤 item dois", "📐 item três"],
        caption: "legenda", narration: "Narração explicando os itens." },

      // cards — 2 a 4 cartões (emoji/nome/desc)
      { type: "cards", kicker: "TÍTULO", heading: "opcional",
        cards: [ { emoji: "🟧", name: "Nome", desc: "descrição" }, { emoji: "🟢", name: "Outro", desc: "desc" } ],
        caption: "legenda", narration: "Narração dos cartões." },

      // steps — passos numerados (compacto, cabe 5-6)
      { type: "steps", kicker: "TÍTULO",
        steps: [ { name: "Passo 1", desc: "detalhe" }, { name: "Passo 2", desc: "detalhe" } ],
        caption: "legenda", narration: "Narração dos passos." },

      // term — bloco "terminal/exemplo" (mono)
      { type: "term", kicker: "NA PRÁTICA", text: "exemplo de prompt ou comando aqui",
        note: "nota opcional embaixo", caption: "legenda", narration: "Narração do exemplo." },

      // compare — duas colunas ✗/✓ (ótimo p/ vago×claro e erro→solução)
      { type: "compare", kicker: "TÍTULO",
        bad: { label: "errado", text: "texto do lado ruim" },
        good: { label: "certo", text: "texto do lado bom" },
        caption: "legenda", narration: "Narração da comparação." },

      // illus — ilustração SVG própria do conceito (o coração do vídeo PROFUNDO)
      { type: "illus", kicker: "ILUSTRAÇÃO", heading: "Título da ilustração", svg: svgExemplo,
        note: "nota opcional", caption: "legenda", narration: "Narração explicando o diagrama." },

      // cta — SEMPRE a última cena (INEMA.CLUB)
      { type: "cta", caption: "Continue em inema.club",
        narration: "Isso é conteúdo do INEMA ponto CLUB. Acesse: inema ponto club." },
    ],
  },
};
