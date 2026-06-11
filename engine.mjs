// ============================================================================
// FEP video engine — motor reutilizável de cenas (dark premium INEMA).
// Tipos de cena: title · lead · cards · bullets · steps · term · cta
// renderHTML(spec, durations, vertical) -> string HTML
// ============================================================================
import { readFileSync } from "node:fs";

const FONT_CSS = readFileSync(new URL("./assets/fonts/fonts.css", import.meta.url), "utf8")
  .replace(/\.\/fonts\//g, "assets/fonts/");

const LEAD = 0.5, TAIL = 0.9, FADE = 0.45;
const r3 = (n) => Math.round(n * 1000) / 1000;
const esc = (s) => String(s);

// ---------- renderers por tipo (marca elementos animáveis com .anim) ----------
function rTitle(s) {
  const lines = s.lines.map((l, k) => `<span class="word anim${s.accentLine === k + 1 ? " accent" : ""}">${l}</span>`).join("");
  return `
    <div class="eyebrow anim"><span class="dot"></span>${s.eyebrow}</div>
    <h1 class="title">${lines}</h1>
    <div class="rule anim"></div>
    ${s.sub ? `<p class="subhead anim">${s.sub}<span class="cursor" id="cur"></span></p>` : ""}
    <div class="reg tl anim"></div><div class="reg br anim"></div>`;
}
function rLead(s) {
  return `
    ${s.kicker ? `<div class="kicker center anim">${s.kicker}</div>` : ""}
    <p class="bigstmt anim">${s.text}</p>`;
}
function rCards(s) {
  const cards = s.cards.map((c) => `
      <div class="card anim"><span class="cemoji">${c.emoji}</span><span class="cname">${c.name}</span><span class="cdesc">${c.desc}</span></div>`).join("");
  return `
    ${s.kicker ? `<div class="kicker center anim">${s.kicker}</div>` : ""}
    ${s.heading ? `<h2 class="h2 center anim">${s.heading}</h2>` : ""}
    <div class="cards cards-${s.cards.length}">${cards}</div>`;
}
function rBullets(s) {
  const items = s.items.map((it) => `<li class="anim"><span class="bdot"></span>${it}</li>`).join("");
  return `
    ${s.kicker ? `<div class="kicker center anim">${s.kicker}</div>` : ""}
    ${s.heading ? `<h2 class="h2 center anim">${s.heading}</h2>` : ""}
    <ul class="bullets">${items}</ul>`;
}
function rSteps(s) {
  const steps = s.steps.map((st, k) => `
      <div class="step anim"><span class="snum">${st.n || k + 1}</span><div class="stxt"><b>${st.name}</b>${st.desc ? `<span class="sdesc">${st.desc}</span>` : ""}</div></div>`).join("");
  return `
    ${s.kicker ? `<div class="kicker center anim">${s.kicker}</div>` : ""}
    ${s.heading ? `<h2 class="h2 center anim">${s.heading}</h2>` : ""}
    <div class="steps">${steps}</div>`;
}
function rTerm(s) {
  return `
    ${s.kicker ? `<div class="kicker center anim">${s.kicker}</div>` : ""}
    <div class="term anim mono"><span class="prompt">›</span><span class="cmd">${s.text}</span></div>
    ${s.note ? `<p class="lead center anim">${s.note}</p>` : ""}`;
}
function rTopic(s) {
  return `
    <div class="topic-eyebrow anim">TÓPICO ${s.n}</div>
    <h2 class="topic-name anim">${s.name}</h2>
    <div class="rule center anim"></div>
    ${s.sub ? `<p class="topic-sub anim">${s.sub}</p>` : ""}`;
}
function rCompare(s) {
  return `
    ${s.kicker ? `<div class="kicker center anim">${s.kicker}</div>` : ""}
    <div class="cmp">
      <div class="cmp-col bad anim"><div class="cmp-tag">✗ ${s.bad.label || "vago"}</div><div class="cmp-text">${s.bad.text}</div></div>
      <div class="cmp-col good anim"><div class="cmp-tag good">✓ ${s.good.label || "claro"}</div><div class="cmp-text">${s.good.text}</div></div>
    </div>`;
}
function rIllus(s) {
  return `
    ${s.kicker ? `<div class="kicker center anim">${s.kicker}</div>` : ""}
    ${s.heading ? `<h2 class="h2 center anim">${s.heading}</h2>` : ""}
    <div class="illus anim">${s.svg}</div>
    ${s.note ? `<p class="lead center anim">${s.note}</p>` : ""}`;
}
function rCta() {
  return `
    <div class="cta-eyebrow anim">CONTINUA EM</div>
    <div class="cta-brand" id="cta-brand"><span class="b1">INEMA</span><span class="bdotsep">.</span><span class="b2">CLUB</span></div>
    <div class="rule center anim"></div>
    <div class="cta-url mono anim"><span class="cta-globe">🌐</span>inema.club</div>
    <div class="reg tl anim"></div><div class="reg br anim"></div>`;
}
const RENDER = { title: rTitle, lead: rLead, cards: rCards, bullets: rBullets, steps: rSteps, term: rTerm, topic: rTopic, compare: rCompare, illus: rIllus, cta: rCta };

export function renderHTML(spec, durations, vertical = false) {
  const W = vertical ? 1080 : 1920, H = vertical ? 1920 : 1080;
  let t = 0;
  const S = durations.map((a, i) => {
    const dur = LEAD + a + TAIL;
    const o = { i: i + 1, start: r3(t), dur: r3(dur), audioStart: r3(t + LEAD), audioDur: r3(a), end: r3(t + dur) };
    t += dur; return o;
  });
  const TOTAL = r3(t);

  const scenesHTML = S.map((s, idx) => {
    const sc = spec.scenes[idx];
    const body = RENDER[sc.type](sc);
    return `
    <section id="s${s.i}" class="scene clip" data-start="${s.start}" data-duration="${s.dur}" data-track-index="${s.i % 2 === 1 ? 1 : 3}">
      <div class="scene-inner" id="scene-inner-${s.i}">${body}</div>
    </section>`;
  }).join("");

  const captionsHTML = S.map((s, idx) => `
    <div class="caption clip" id="cap-${s.i}" data-start="${s.start}" data-duration="${s.dur}" data-track-index="${s.i % 2 === 1 ? 2 : 4}">${esc(spec.scenes[idx].caption || "")}</div>`).join("");

  const audioHTML = S.map((s) => `
    <audio id="a${s.i}" data-start="${s.audioStart}" data-duration="${s.audioDur}" data-track-index="20" src="assets/audio/${spec.id}-s${s.i}.wav"></audio>`).join("");

  const animJS = S.map((s, idx) => {
    const i = s.i, st = s.start, sc = spec.scenes[idx];
    const at = (d) => r3(st + d);
    const L = [];
    L.push(`tl.fromTo("#scene-inner-${i}",{opacity:0},{opacity:1,duration:${FADE},ease:"power2.out"},${st});`);
    L.push(`tl.to("#scene-inner-${i}",{opacity:0,duration:${FADE},ease:"power2.in"},${r3(s.end - FADE)});`);
    L.push(`tl.set("#scene-inner-${i}",{opacity:0},${r3(s.end)});`);
    L.push(`tl.from("#scene-inner-${i} .anim",{y:26,opacity:0,duration:.55,stagger:.12,ease:"power3.out"},${at(0.35)});`);
    if (sc.type === "title") {
      L.push(`tl.fromTo("#scene-inner-${i} .rule",{scaleX:0},{scaleX:1,duration:.7,ease:"expo.out",transformOrigin:"left center"},${at(0.9)});`);
      L.push(`tl.fromTo("#cur",{opacity:1},{opacity:0,duration:.5,repeat:10,yoyo:true,ease:"none"},${at(1.4)});`);
    }
    if (sc.type === "topic") {
      L.push(`tl.fromTo("#scene-inner-${i} .rule",{scaleX:0},{scaleX:1,duration:.7,ease:"expo.out",transformOrigin:"center center"},${at(0.8)});`);
    }
    if (sc.type === "cta") {
      L.push(`tl.fromTo("#cta-brand",{filter:"drop-shadow(0 0 0px rgba(255,195,0,0))"},{filter:"drop-shadow(0 0 26px rgba(255,195,0,.55))",duration:1.0,repeat:3,yoyo:true,ease:"sine.inOut"},${at(1.0)});`);
    }
    L.push(`tl.fromTo("#cap-${i}",{opacity:0,y:14},{opacity:1,y:0,duration:.5,ease:"power2.out"},${at(0.35)});`);
    L.push(`tl.to("#cap-${i}",{opacity:0,duration:.4,ease:"power2.in"},${r3(s.end - 0.55)});`);
    return L.join("\n      ");
  }).join("\n      ");

  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=${W}, height=${H}" />
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
    <style>
      ${FONT_CSS}
      :root{--bg:#0D1321;--bg2:#1D2D44;--bg3:#3E5C76;--fg:#F0EBD8;--muted:#748CAB;--accent:#FFC300;--accent2:#FCA311;--code:#2EC4B6;}
      *{margin:0;padding:0;box-sizing:border-box}
      html,body{width:${W}px;height:${H}px;overflow:hidden;background:var(--bg);color:var(--fg);font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
      .mono{font-family:"JetBrains Mono",ui-monospace,monospace}
      #root{position:relative;width:${W}px;height:${H}px;overflow:hidden}
      .bg-layer{position:absolute;inset:0;z-index:0;pointer-events:none}
      #glow{position:absolute;top:-260px;left:-180px;width:1100px;height:1100px;border-radius:50%;background:radial-gradient(circle,rgba(255,195,0,.20),rgba(255,195,0,0) 62%);filter:blur(8px)}
      #glow2{position:absolute;bottom:-360px;right:-240px;width:1200px;height:1200px;border-radius:50%;background:radial-gradient(circle,rgba(46,196,182,.10),rgba(46,196,182,0) 62%)}
      #grid{position:absolute;inset:-2px;opacity:.5;background-image:linear-gradient(rgba(116,140,171,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(116,140,171,.07) 1px,transparent 1px);background-size:64px 64px}
      .ghost{position:absolute;font-family:Sora,sans-serif;font-weight:800;color:rgba(255,195,0,.045);font-size:440px;line-height:.8;letter-spacing:-.03em;top:280px;left:-30px;white-space:nowrap;user-select:none}
      #grain{position:absolute;inset:0;opacity:.05;mix-blend-mode:overlay;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
      #progress{position:absolute;left:0;bottom:0;height:6px;width:100%;transform:scaleX(0);transform-origin:left center;background:linear-gradient(90deg,var(--accent),var(--accent2));z-index:40;box-shadow:0 0 18px rgba(255,195,0,.5)}
      .scene{position:absolute;inset:0;z-index:10;display:flex;flex-direction:column;justify-content:center;padding:120px 150px 160px}
      .scene-inner{position:relative;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center}
      .kicker{font-family:"JetBrains Mono",monospace;font-size:24px;letter-spacing:.24em;color:var(--accent);text-transform:uppercase;margin-bottom:30px;font-weight:600}
      .kicker.center{text-align:center}
      .accent{color:var(--accent)}.dim{color:var(--muted)}
      .h2{font-family:Sora,sans-serif;font-weight:800;font-size:78px;line-height:1.04;letter-spacing:-.02em;margin-bottom:44px}
      .h2.center{text-align:center}
      /* title */
      .eyebrow{display:inline-flex;align-items:center;gap:14px;font-family:"JetBrains Mono",monospace;font-size:26px;letter-spacing:.3em;color:var(--muted);font-weight:600}
      .eyebrow .dot{width:14px;height:14px;border-radius:50%;background:var(--accent);box-shadow:0 0 16px var(--accent)}
      .title{font-family:Sora,sans-serif;font-weight:800;font-size:128px;line-height:.96;letter-spacing:-.03em;margin:22px 0}
      .title .word{display:block}
      .rule{height:7px;width:520px;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:6px;margin:10px 0 30px}
      .rule.center{margin:34px auto}
      .subhead{font-size:40px;color:var(--muted)}
      .cursor{display:inline-block;width:18px;height:38px;background:var(--accent);margin-left:10px;vertical-align:-4px;border-radius:2px}
      .reg{position:absolute;width:48px;height:48px;border:3px solid var(--bg3)}
      .reg.tl{top:0;left:0;border-right:none;border-bottom:none}.reg.br{bottom:0;right:0;border-left:none;border-top:none}
      /* lead / bigstmt */
      .bigstmt{text-align:center;font-family:Sora;font-weight:800;font-size:84px;line-height:1.08;letter-spacing:-.02em;color:var(--fg)}
      .bigstmt b{color:var(--accent)}.bigstmt .accent{color:var(--accent)}
      .lead{font-size:34px;color:var(--muted);margin-top:34px}.lead b{color:var(--fg)}.lead.center{text-align:center}
      /* cards */
      .cards{display:grid;gap:36px;width:1480px;margin:0 auto}
      .cards-2{grid-template-columns:repeat(2,1fr)}.cards-3{grid-template-columns:repeat(3,1fr)}.cards-4{grid-template-columns:repeat(4,1fr)}
      .card{background:linear-gradient(160deg,#22364f,var(--bg2));border:2px solid var(--bg3);border-radius:24px;padding:50px 28px;text-align:center;display:flex;flex-direction:column;align-items:center}
      .cemoji{font-size:70px;line-height:1;margin-bottom:18px}
      .cname{font-family:Sora;font-weight:800;font-size:46px;color:var(--fg)}
      .cdesc{font-size:28px;color:var(--muted);margin-top:10px}
      /* bullets */
      .bullets{list-style:none;width:1280px;margin:0 auto;display:flex;flex-direction:column;gap:30px}
      .bullets li{display:flex;align-items:center;gap:24px;font-size:46px;color:var(--fg);font-weight:500}
      .bdot{width:18px;height:18px;flex:none;border-radius:5px;background:var(--accent);box-shadow:0 0 12px var(--accent);transform:rotate(45deg)}
      /* steps */
      .steps{display:flex;flex-direction:column;gap:18px;width:1320px;margin:0 auto}
      .step{display:flex;align-items:center;gap:26px;background:linear-gradient(90deg,rgba(255,195,0,.05),rgba(29,45,68,.7));border:2px solid var(--bg3);border-radius:18px;padding:20px 34px}
      .snum{width:54px;height:54px;flex:none;border-radius:50%;background:var(--accent);color:var(--bg);font-family:Sora;font-weight:800;font-size:28px;display:flex;align-items:center;justify-content:center}
      .stxt{display:flex;flex-direction:column}
      .stxt b{font-family:Sora;font-weight:700;font-size:38px}
      .sdesc{font-size:25px;color:var(--muted);margin-top:3px}
      /* term */
      .term{width:1360px;margin:0 auto;background:#0a1626;border:2px solid var(--bg3);border-radius:16px;padding:38px 44px;font-size:44px;display:flex;align-items:center;box-shadow:0 30px 80px rgba(0,0,0,.5)}
      .term .prompt{color:var(--code);margin-right:18px}.term .cmd{color:var(--fg)}
      /* illus (SVG) */
      .illus{width:1480px;max-width:1480px;margin:0 auto;display:flex;align-items:center;justify-content:center}
      .illus svg{width:100%;height:auto;max-height:760px;overflow:visible;display:block}
      .illus svg text{font-family:Inter,system-ui,sans-serif}
      .illus svg .mono{font-family:"JetBrains Mono",monospace}
      .illus svg .ttl{font-family:Sora,sans-serif;font-weight:800}
      /* topic divider */
      .topic-eyebrow{text-align:center;font-family:"JetBrains Mono",monospace;font-size:30px;letter-spacing:.4em;color:var(--accent);font-weight:700;text-transform:uppercase}
      .topic-name{text-align:center;font-family:Sora;font-weight:800;font-size:104px;line-height:1.02;letter-spacing:-.02em;margin-top:24px}
      .topic-sub{text-align:center;font-size:36px;color:var(--muted);margin-top:24px;max-width:1300px;margin-left:auto;margin-right:auto}
      /* compare */
      .cmp{display:grid;grid-template-columns:1fr 1fr;gap:40px;width:1480px;margin:0 auto}
      .cmp-col{border:2px solid var(--bg3);border-radius:22px;padding:44px 40px;background:linear-gradient(160deg,#22364f,var(--bg2))}
      .cmp-col.bad{border-color:#7a3b3b}.cmp-col.good{border-color:var(--accent)}
      .cmp-tag{font-family:"JetBrains Mono";font-size:26px;font-weight:700;letter-spacing:.1em;color:#e88;margin-bottom:22px}
      .cmp-tag.good{color:var(--accent)}
      .cmp-text{font-size:40px;line-height:1.3;color:var(--fg);font-weight:500}
      /* cta */
      .cta-eyebrow{text-align:center;font-family:"JetBrains Mono",monospace;font-size:26px;letter-spacing:.36em;color:var(--muted);text-transform:uppercase;margin-bottom:30px}
      .cta-brand{text-align:center;font-family:Sora;font-weight:800;font-size:150px;line-height:.95;letter-spacing:-.02em}
      .cta-brand .b1{color:var(--fg)}.cta-brand .b2{color:var(--accent)}.cta-brand .bdotsep{color:var(--accent)}
      .cta-url{display:flex;align-items:center;justify-content:center;gap:16px;font-size:46px;color:var(--muted);margin-top:32px}
      .cta-globe{font-size:38px;filter:grayscale(.2)}
      /* caption */
      .caption{position:absolute;left:50%;transform:translateX(-50%);bottom:64px;z-index:30;max-width:1560px;text-align:center;font-size:36px;font-weight:600;color:var(--fg);background:rgba(10,18,30,.72);border:1px solid var(--bg3);border-radius:14px;padding:18px 40px;backdrop-filter:blur(6px);text-shadow:0 2px 10px rgba(0,0,0,.6)}
      /* =================== OVERRIDES 9:16 (Shorts/Reels) =================== */
      body.v .scene{padding:170px 64px 240px}
      body.v .kicker{margin-bottom:22px;font-size:20px;letter-spacing:.2em}
      body.v .h2{font-size:74px}
      body.v .lead{font-size:30px}body.v .lead.center{margin-top:30px}
      body.v .bigstmt{font-size:72px}
      body.v .eyebrow{font-size:22px}
      body.v .title{font-size:118px;margin:20px 0}
      body.v .rule{width:360px;margin-bottom:24px}
      body.v .subhead{font-size:34px}
      body.v .cards{grid-template-columns:1fr !important;gap:20px;width:920px}
      body.v .card{padding:34px 30px}
      body.v .bullets{width:920px;gap:24px}body.v .bullets li{font-size:38px}
      body.v .steps{width:920px}body.v .stxt b{font-size:34px}body.v .sdesc{font-size:23px}
      body.v .term{width:920px;font-size:34px}
      body.v .topic-name{font-size:84px}body.v .topic-sub{font-size:30px}
      body.v .cmp{grid-template-columns:1fr;gap:24px;width:920px}body.v .cmp-text{font-size:34px}
      body.v .illus{width:980px;max-width:980px}body.v .illus svg{max-height:1100px}
      body.v .cta-brand{font-size:116px}body.v .cta-url{font-size:42px}
      body.v .caption{bottom:150px;max-width:920px;font-size:32px;padding:16px 30px}
      body.v #glow{top:-200px;left:-160px;width:900px;height:900px}
      body.v #glow2{bottom:-300px;right:-200px;width:1000px;height:1000px}
      body.v .ghost{font-size:360px;top:560px}
    </style>
  </head>
  <body class="${vertical ? "v" : ""}">
    <div id="root" data-composition-id="main" data-start="0" data-duration="${TOTAL}" data-width="${W}" data-height="${H}">
      <div class="bg-layer" data-layout-ignore>
        <div id="glow"></div><div id="glow2"></div><div id="grid"></div>
        <div class="ghost" data-layout-ignore>${spec.ghost || "FEP"}</div><div id="grain"></div>
      </div>
${scenesHTML}
${captionsHTML}
      <div id="progress"></div>
${audioHTML}
      <script>
        window.__timelines = window.__timelines || {};
        const tl = gsap.timeline({ paused: true });
        const TOTAL = ${TOTAL};
        tl.to("#glow",{scale:1.22,opacity:.55,duration:4.5,yoyo:true,repeat:Math.ceil(TOTAL/4.5)+1,ease:"sine.inOut"},0);
        tl.to("#glow2",{scale:1.18,duration:6,yoyo:true,repeat:Math.ceil(TOTAL/6)+1,ease:"sine.inOut"},0);
        tl.to(".ghost",{x:90,duration:TOTAL,ease:"none"},0);
        tl.to("#grid",{backgroundPositionX:"+=128",backgroundPositionY:"+=128",duration:18,repeat:Math.ceil(TOTAL/18)+1,ease:"none"},0);
        tl.fromTo("#progress",{scaleX:0},{scaleX:1,duration:TOTAL,ease:"none"},0);
      ${animJS}
        tl.set({}, {}, TOTAL);
        window.__timelines["main"] = tl;
      </script>
    </div>
  </body>
</html>
`;
}
