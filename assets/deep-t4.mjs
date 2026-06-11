// Trilha 4 — Aproveitamento · Módulos 4.1 e 4.2
// IDs: piramide-ia-deep-t4-m1 · piramide-ia-deep-t4-m2
// ~3–4 min por vídeo · PT-BR · TTS-friendly

const C = { bg2:"#1D2D44", bg3:"#3E5C76", fg:"#F0EBD8", mut:"#748CAB", acc:"#FFC300", code:"#2EC4B6", red:"#e07a7a" };
const COR = "#fbbf24"; // Trilha 4 (amber)

// ── SVG M1-A: Escada Improviso → Template → Playbook → Biblioteca ──────────
const svgEscada = `<svg viewBox="0 0 1480 360" xmlns="http://www.w3.org/2000/svg">
  <rect width="1480" height="360" fill="#22364f"/>
  <!-- degraus -->
  ${[
    { x: 60,  y: 240, w: 280, label: "Improviso",  sub: "só na cabeça",       clr: C.mut  },
    { x: 400, y: 180, w: 280, label: "Template",   sub: "estrutura capturada", clr: COR    },
    { x: 740, y: 120, w: 280, label: "Playbook",   sub: "processo de 1 página",clr: C.acc  },
    { x:1080, y:  60, w: 280, label: "Biblioteca", sub: "sistema vivo curado", clr: C.code },
  ].map(d => `
    <rect x="${d.x}" y="${d.y}" width="${d.w}" height="76" rx="16" fill="#1D2D44" stroke="${d.clr}" stroke-width="3"/>
    <text x="${d.x + d.w/2}" y="${d.y + 34}" text-anchor="middle" fill="${d.clr}" font-size="28" font-family="'Inter',sans-serif" font-weight="700">${d.label}</text>
    <text x="${d.x + d.w/2}" y="${d.y + 60}" text-anchor="middle" fill="${C.mut}" font-size="20" font-family="'Inter',sans-serif">${d.sub}</text>`).join("")}
  <!-- setas entre degraus -->
  ${[[340,278],[680,218],[1020,158]].map(([x,y]) =>
    `<g transform="translate(${x},${y})" stroke="${COR}" stroke-width="5" fill="none" stroke-linecap="round">
      <line x1="0" y1="0" x2="50" y2="-40"/>
      <path d="M36,-52 L54,-40 L44,-24"/>
    </g>`).join("")}
  <!-- rótulo -->
  <text x="740" y="344" text-anchor="middle" fill="${C.mut}" font-size="22" font-family="'Inter',sans-serif">Cada degrau transforma conhecimento tácito em explícito</text>
</svg>`;

// ── SVG M1-B: Fluxo DEEBC ──────────────────────────────────────────────────
const svgDeebc = `<svg viewBox="0 0 1480 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="1480" height="320" fill="#22364f"/>
  ${[
    { x:  40, label:"Dor",         sub:"qual problema seu leitor sente?",  clr:C.red  },
    { x: 320, label:"Explicação",  sub:"por que isso acontece?",           clr:C.acc  },
    { x: 600, label:"Exemplo",     sub:"mostre na prática",                clr:COR    },
    { x: 880, label:"Benefício",   sub:"o que muda depois?",               clr:C.code },
    { x:1160, label:"CTA",         sub:"próximo passo claro",              clr:C.fg   },
  ].map(d => `
    <rect x="${d.x}" y="60" width="260" height="180" rx="18" fill="#1D2D44" stroke="${d.clr}" stroke-width="3"/>
    <text x="${d.x+130}" y="140" text-anchor="middle" fill="${d.clr}" font-size="34" font-family="'Inter',sans-serif" font-weight="800">${d.label}</text>
    <text x="${d.x+130}" y="172" text-anchor="middle" fill="${C.mut}" font-size="19" font-family="'Inter',sans-serif">${d.sub}</text>`).join("")}
  <!-- setas -->
  ${[280,560,840,1120].map(x =>
    `<g transform="translate(${x},146)" stroke="${COR}" stroke-width="5" fill="none" stroke-linecap="round">
      <line x1="0" y1="0" x2="32" y2="0"/>
      <path d="M20,-10 L34,0 L20,10"/>
    </g>`).join("")}
  <text x="740" y="292" text-anchor="middle" fill="${C.mut}" font-size="22" font-family="'Inter',sans-serif">Anatomia D → E → E → B → CTA — estrutura de qualquer conteúdo que performa</text>
</svg>`;

// ── SVG M2-A: Três Pastas + Índice + Curadoria ─────────────────────────────
const svgBiblioteca = `<svg viewBox="0 0 1480 360" xmlns="http://www.w3.org/2000/svg">
  <rect width="1480" height="360" fill="#22364f"/>
  <!-- pastas -->
  ${[
    { y: 50,  label:"/prompts",   sub:"inputs testados"        },
    { y:150,  label:"/playbooks", sub:"processos de 1 página"  },
    { y:250,  label:"/briefings", sub:"contextos reutilizáveis"},
  ].map(d => `
    <rect x="40" y="${d.y}" width="220" height="80" rx="14" fill="#1D2D44" stroke="${COR}" stroke-width="2.5"/>
    <text x="150" y="${d.y+40}" text-anchor="middle" fill="${COR}" font-size="26" font-family="'Inter',sans-serif" font-weight="700">${d.label}</text>
    <text x="150" y="${d.y+64}" text-anchor="middle" fill="${C.mut}" font-size="18" font-family="'Inter',sans-serif">${d.sub}</text>`).join("")}
  <!-- setas das pastas para índice -->
  ${[[260,90],[260,190],[260,290]].map(([x,y]) =>
    `<line x1="${x}" y1="${y}" x2="440" y2="200" stroke="${COR}" stroke-width="2" opacity="0.7" marker-end="url(#arw)"/>`).join("")}
  <defs>
    <marker id="arw" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L7,4 L0,8 L2,4 Z" fill="${COR}"/>
    </marker>
    <marker id="arwc" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L7,4 L0,8 L2,4 Z" fill="${C.code}"/>
    </marker>
  </defs>
  <!-- índice central -->
  <rect x="440" y="130" width="280" height="140" rx="18" fill="#1D2D44" stroke="${C.acc}" stroke-width="3"/>
  <text x="580" y="185" text-anchor="middle" fill="${C.acc}" font-size="28" font-family="'Inter',sans-serif" font-weight="800">Índice Central</text>
  <text x="580" y="215" text-anchor="middle" fill="${C.fg}" font-size="19" font-family="'Inter',sans-serif">nome · versão · status</text>
  <text x="580" y="240" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="'Inter',sans-serif">ativo / aposentado</text>
  <!-- seta índice → curadoria -->
  <line x1="720" y1="200" x2="840" y2="200" stroke="${C.code}" stroke-width="2.5" marker-end="url(#arwc)"/>
  <!-- curadoria -->
  <rect x="840" y="130" width="240" height="140" rx="18" fill="#1D2D44" stroke="${C.code}" stroke-width="2.5"/>
  <text x="960" y="185" text-anchor="middle" fill="${C.code}" font-size="26" font-family="'Inter',sans-serif" font-weight="700">Curadoria</text>
  <text x="960" y="212" text-anchor="middle" fill="${C.fg}" font-size="18" font-family="'Inter',sans-serif">trimestral · 15 min</text>
  <text x="960" y="236" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="'Inter',sans-serif">aposenta, não deleta</text>
  <!-- seta curadoria → compartilhar -->
  <line x1="1080" y1="200" x2="1200" y2="200" stroke="${C.code}" stroke-width="2.5" marker-end="url(#arwc)"/>
  <!-- compartilhar -->
  <rect x="1200" y="130" width="240" height="140" rx="18" fill="#1D2D44" stroke="${C.mut}" stroke-width="2.5"/>
  <text x="1320" y="185" text-anchor="middle" fill="${C.fg}" font-size="24" font-family="'Inter',sans-serif" font-weight="700">Compartilhar</text>
  <text x="1320" y="212" text-anchor="middle" fill="${C.mut}" font-size="18" font-family="'Inter',sans-serif">ativo de autoridade</text>
  <text x="1320" y="236" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="'Inter',sans-serif">onboarding · marca</text>
  <!-- legenda -->
  <text x="740" y="344" text-anchor="middle" fill="${C.mut}" font-size="22" font-family="'Inter',sans-serif">3 pastas → índice → curadoria trimestral → biblioteca compartilhável</text>
</svg>`;

// ── SVG M2-B: Os 3 Que Mais Usa × 5 Perfis Profissionais ──────────────────
const svgPerfis = `<svg viewBox="0 0 1480 360" xmlns="http://www.w3.org/2000/svg">
  <rect width="1480" height="360" fill="#22364f"/>
  <!-- título esquerda -->
  <text x="240" y="48" text-anchor="middle" fill="${COR}" font-size="26" font-family="'Inter',sans-serif" font-weight="700">Atalho do retardatário</text>
  <text x="240" y="76" text-anchor="middle" fill="${C.mut}" font-size="19" font-family="'Inter',sans-serif">comece com 3 itens</text>
  ${[
    ["Prompt campeão",   "o que mais usa hoje"  ],
    ["Playbook base",    "seu processo principal"],
    ["Briefing padrão",  "contexto recorrente"  ],
  ].map(([n,d],i) => `
    <rect x="40" y="${90 + i*82}" width="380" height="68" rx="13" fill="#1D2D44" stroke="${COR}" stroke-width="2.5"/>
    <text x="60" y="${90 + i*82 + 32}" fill="${COR}" font-size="24" font-family="'Inter',sans-serif" font-weight="700">${i+1}. ${n}</text>
    <text x="60" y="${90 + i*82 + 56}" fill="${C.mut}" font-size="18" font-family="'Inter',sans-serif">${d}</text>`).join("")}
  <!-- separador -->
  <line x1="480" y1="40" x2="480" y2="330" stroke="${C.bg3}" stroke-width="2" stroke-dasharray="6,4"/>
  <!-- título direita -->
  <text x="980" y="48" text-anchor="middle" fill="${C.code}" font-size="26" font-family="'Inter',sans-serif" font-weight="700">5 perfis profissionais · mesma biblioteca</text>
  ${[
    ["Criador de conteúdo", "posts, roteiros, captions"       ],
    ["Gestor",              "atas, e-mails, relatórios"       ],
    ["Consultor",           "propostas, diagnósticos, mapas"  ],
    ["Dev / técnico",       "specs, PRDs, revisões de código" ],
    ["Professor / coach",   "planos de aula, feedbacks, provas"],
  ].map(([n,d],i) => `
    <rect x="500" y="${56 + i*56}" width="920" height="46" rx="10" fill="#1D2D44" stroke="${C.code}" stroke-width="1.8"/>
    <text x="520" y="${56 + i*56 + 26}" fill="${C.fg}" font-size="21" font-family="'Inter',sans-serif" font-weight="600">${n}</text>
    <text x="520" y="${56 + i*56 + 44}" fill="${C.mut}" font-size="17" font-family="'Inter',sans-serif">${d}</text>`).join("")}
  <text x="740" y="348" text-anchor="middle" fill="${C.mut}" font-size="21" font-family="'Inter',sans-serif">O método é o mesmo. O conteúdo é específico da profissão.</text>
</svg>`;

export const V = {

  // ════════════════════════════════════════════════════════════════════════
  // MÓDULO 4.1 — Da Tentativa ao Padrão
  // ════════════════════════════════════════════════════════════════════════
  "piramide-ia-deep-t4-m1": {
    ghost: "4.1",
    scenes: [

      // 1 · title
      {
        type: "title",
        eyebrow: "PIRÂMIDE DA IA · TRILHA 4 · MÓDULO 1",
        lines: ["Da Tentativa", "ao Padrão"],
        accentLine: 2,
        sub: "Engenharia reversa do acerto",
        caption: "T4 · M1 — Da Tentativa ao Padrão",
        narration: "Módulo quatro ponto um da Trilha quatro — Aproveitamento. Aqui você vai aprender a não desperdiçar o que funciona: como transformar um acerto isolado num padrão repetível."
      },

      // 2 · lead — o acerto que se perdeu
      {
        type: "lead",
        text: "Performou <span class=\"accent\">dez vezes</span> mais.<br/>Ninguém anotou nada.",
        caption: "O conhecimento existiu 24 horas — e evaporou",
        narration: "Você já viveu isso: um post explodiu, uma resposta da IA ficou perfeita, um e-mail teve abertura altíssima. E no dia seguinte ninguém sabia exatamente o que tinha funcionado. O prompt estava certo, a intenção estava clara, o contexto foi bem configurado. Mas nada foi registrado. O conhecimento existiu durante vinte e quatro horas — e evaporou. Isso não é falha de memória. É falha de sistema."
      },

      // 3 · bullets — o que registrar
      {
        type: "bullets",
        kicker: "O QUE VALE REGISTRAR",
        heading: "Critério simples antes de anotar",
        items: [
          "🔁 Três ou mais execuções similares = padrão emergindo",
          "📈 Resultado fora da curva = estrutura que merece análise",
          "😤 Erro que custou tempo = ajuste que precisa de nome",
          "💡 Abaixo de três usos ainda é só observação, não playbook",
        ],
        caption: "Regra das 3 execuções — padrão ou ainda observação",
        narration: "Nem tudo precisa ser documentado. A regra é simples: se você executou algo de forma parecida três ou mais vezes e deu certo, já é um padrão emergindo e merece um registro. Um resultado fora da curva — um acerto — merece engenharia reversa. Um erro que custou tempo merece um nome, para não se repetir. Abaixo de três usos, ainda é só observação."
      },

      // 4 · topic — engenharia reversa
      {
        type: "topic",
        n: 1,
        name: "Engenharia Reversa em 5 Passos",
        caption: "Tópico 1 — Os 5 passos",
        narration: "Tópico um: a engenharia reversa de um conteúdo campeão em cinco passos."
      },

      // 5 · steps — os 5 passos
      {
        type: "steps",
        kicker: "ENGENHARIA REVERSA DO ACERTO",
        steps: [
          { name: "Identifique o campeão",    desc: "qual peça performou mais? post, e-mail, resposta, script" },
          { name: "Pergunte: qual era a dor?", desc: "que problema do leitor aquela peça tocou diretamente" },
          { name: "Isole a estrutura",         desc: "como a informação foi ordenada? qual sequência?" },
          { name: "Nomeie o padrão",           desc: "dê um nome curto: 'abertura-choque', 'virada-DEEBC'" },
          { name: "Escreva em uma página",     desc: "playbook mínimo: quando usar, prompt padrão, exemplo" },
        ],
        caption: "5 passos — do acerto ao template",
        narration: "Passo um: identifique o campeão — a peça que performou mais. Passo dois: pergunte qual era a dor que ela tocou. Passo três: isole a estrutura — como a informação foi ordenada. Passo quatro: nomeie o padrão com um nome curto e memorável. Passo cinco: escreva tudo em uma página — quando usar, o prompt padrão, e um exemplo de resultado esperado. Isso é engenharia reversa aplicada ao conteúdo."
      },

      // 6 · illus — SVG Escada
      {
        type: "illus",
        kicker: "O CICLO DE MATURIDADE",
        heading: "De Improviso a Biblioteca",
        svg: svgEscada,
        note: "Cada degrau transforma conhecimento tácito em explícito",
        caption: "Improviso → Template → Playbook → Biblioteca",
        narration: "O ciclo começa no improviso — quando o conhecimento ainda está só na sua cabeça. O primeiro degrau é capturar a estrutura: isso vira template. O segundo degrau é documentar o processo completo: isso vira playbook. O terceiro é organizar playbooks de forma curada e acessível: isso vira a biblioteca viva. Cada degrau é uma transformação de conhecimento tácito em explícito — algo que sai da sua cabeça e entra no sistema."
      },

      // 7 · illus — SVG DEEBC
      {
        type: "illus",
        kicker: "ANATOMIA DO CONTEÚDO CAMPEÃO",
        heading: "Estrutura D → E → E → B → CTA",
        svg: svgDeebc,
        note: "Dor · Explicação · Exemplo · Benefício · CTA",
        caption: "DEEBC — a estrutura que performa",
        narration: "Por trás de quase todo conteúdo que performa existe essa sequência: Dor — você toca o problema real do leitor. Explicação — por que aquilo acontece. Exemplo — mostra na prática, não só na teoria. Benefício — o que muda depois que a pessoa aplica. E CTA — o próximo passo claro. Quando você faz engenharia reversa de um acerto e encontra essa sequência, parabéns: você descobriu o template. Da próxima vez você começa aqui, não do zero."
      },

      // 8 · term — template de playbook
      {
        type: "term",
        kicker: "NA PRÁTICA",
        text:
`PLAYBOOK: [nome-da-situação-v1]
─────────────────────────────────
Quando usar: [descreva o gatilho]
Passo a passo:
  1. [primeiro passo]
  2. [segundo passo]
  3. [terceiro passo]
Prompt padrão: [cole o prompt]
Exemplo de resultado esperado: [cole um trecho]
Métricas de sucesso: [o que indica que funcionou]
Quando não está funcionando: [sinal de alerta]
─────────────────────────────────
Versão: v1 · Criado: [data] · Campeão atual: sim`,
        note: "7 campos — o playbook de uma página que realmente vive",
        caption: "Template de playbook — 7 campos, uma página",
        narration: "Esse é o template mínimo de um playbook. Nome com versão, gatilho de quando usar, os passos, o prompt padrão, um exemplo de resultado esperado, as métricas de sucesso e o sinal de alerta quando não está funcionando. Sete campos. Uma página. A restrição de tamanho é o que garante que o playbook vai ser lido e mantido — não virar um documento de quarenta páginas que ninguém abre."
      },

      // 9 · compare — se perde vs vira método
      {
        type: "compare",
        kicker: "O QUE MUDA COM O REGISTRO",
        bad: {
          label: "sem registro",
          text: "Acertou hoje. Não sabe o que funcionou. Recomeça do zero amanhã. Depende da sorte."
        },
        good: {
          label: "com playbook",
          text: "Acertou hoje. Anotou a estrutura. Amanhã replica em 5 minutos. O acerto vira método."
        },
        caption: "Sem registro: sorte. Com playbook: método.",
        narration: "Sem registro: você acertou hoje, mas amanhã começa do zero porque não sabe exatamente o que funcionou. Com playbook: o acerto de hoje vira o ponto de partida de amanhã. A diferença não é talento. É sistema. E o sistema começa com cinco minutos de captura no fim do dia — enquanto o contexto ainda está fresco."
      },

      // 10 · bullets — rotina diária de captura
      {
        type: "bullets",
        kicker: "ROTINA DE CAPTURA — 5 MINUTOS",
        heading: "No fim de cada dia de produção",
        items: [
          "📝 O que funcionou melhor hoje? (1 frase)",
          "🔍 Por que funcionou? (hipótese rápida)",
          "📦 Tem padrão? Se sim, já tem nome?",
          "📅 Semanalmente: eleve o melhor para playbook",
          "🗓️ Mensalmente: revise e arquive o irrelevante",
        ],
        caption: "5 min no fim do dia — única janela confiável de captura",
        narration: "O contexto começa a se degradar em horas. O que parece óbvio agora — claro que funcionou porque usei aquele ângulo — some até amanhã. Os cinco minutos do fim do dia são a única janela confiável. Três perguntas simples: o que funcionou, por que funcionou, tem padrão. Semanalmente você eleva o melhor para playbook. Mensalmente revisa e arquiva o que não serve mais. Esse é o primeiro processo."
      },

      // 11 · cta
      {
        type: "cta",
        caption: "Continue em inema.club",
        narration: "Isso é conteúdo do INEMA ponto CLUB. Acesse: inema ponto club."
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // MÓDULO 4.2 — Biblioteca Viva
  // ════════════════════════════════════════════════════════════════════════
  "piramide-ia-deep-t4-m2": {
    ghost: "4.2",
    scenes: [

      // 1 · title
      {
        type: "title",
        eyebrow: "PIRÂMIDE DA IA · TRILHA 4 · MÓDULO 2",
        lines: ["Biblioteca", "Viva"],
        accentLine: 1,
        sub: "Do caos à coleção curada que cresce com você",
        caption: "T4 · M2 — Biblioteca Viva",
        narration: "Módulo quatro ponto dois. Você já sabe criar um playbook. Agora vamos organizar todos eles — e os seus prompts e briefings — numa biblioteca que não vira arquivo morto."
      },

      // 2 · lead — o problema da coleção bagunçada
      {
        type: "lead",
        text: "Coleção bagunçada<br/>não é <span class=\"accent\">biblioteca</span>.",
        caption: "A diferença entre acumular e organizar",
        narration: "Guardar coisas não é o mesmo que ter um sistema. Muita gente tem dezenas de prompts salvos em notas, chats do WhatsApp, pastas com nomes vagos. Quando precisam encontrar algo, gastam mais tempo procurando do que executando. Uma biblioteca viva é diferente: plana, encontrável, curada. Três pastas, um índice, curadoria trimestral."
      },

      // 3 · cards — as 3 pastas
      {
        type: "cards",
        kicker: "ESTRUTURA DA BIBLIOTECA",
        heading: "Três pastas — plana e encontrável",
        cards: [
          { emoji: "📥", name: "/prompts",   desc: "inputs testados e aprovados — os que você já sabe que funcionam" },
          { emoji: "📄", name: "/playbooks", desc: "processos de uma página — quando usar, passos, prompt, exemplo" },
          { emoji: "📋", name: "/briefings", desc: "contextos reutilizáveis — perfis, tons, regras do projeto" },
        ],
        caption: "3 pastas — hierarquia rasa = adoção real",
        narration: "A biblioteca tem três pastas. Barra prompts: os inputs testados que você sabe que funcionam. Barra playbooks: os processos documentados de uma página. Barra briefings: os contextos reutilizáveis — perfis de cliente, tom de voz, regras do projeto. Só isso. Hierarquia profunda demais mata a adoção — ninguém lembra em qual subpasta de subpasta guardou a coisa."
      },

      // 4 · topic — nomeação e versionamento
      {
        type: "topic",
        n: 1,
        name: "Nomear, Versionar e Aposentar",
        caption: "Tópico 1 — Convenção de nomes",
        narration: "Tópico um: como nomear, versionar e aposentar itens da biblioteca."
      },

      // 5 · steps — convenção de nomes + versionamento
      {
        type: "steps",
        kicker: "CONVENÇÃO DE NOMEAÇÃO",
        steps: [
          { name: "Formato base",       desc: "nome-da-situação-vN · ex.: post-linkedin-gancho-v2" },
          { name: "Marque o campeão",   desc: "adicione '-campeao' no nome do que está em uso ativo" },
          { name: "Versione ao editar", desc: "nunca sobrescreva — crie v2, v3. Histórico tem valor." },
          { name: "Aposente, não delete", desc: "mova para /aposentados — pode voltar com novo contexto" },
          { name: "Índice central",     desc: "lista plana com nome · tipo · status · última atualização" },
        ],
        caption: "Convenção: nome-situação-vN · campeão · aposentado",
        narration: "A convenção é simples: nome da situação, hífen, versão. Por exemplo: post-linkedin-gancho-v dois. Quando um item está em uso ativo e funcionando bem, você adiciona campeão ao nome. Quando editar, nunca sobrescreva — crie a versão dois, versão três. O histórico tem valor. Quando um item não serve mais, mova para a pasta aposentados, não delete — ele pode voltar com novo contexto. E mantenha um índice central: uma lista com nome, tipo, status e data."
      },

      // 6 · bullets — checklists nascem da repetição
      {
        type: "bullets",
        kicker: "CHECKLISTS — QUANDO CRIAR",
        heading: "Regra das 3 execuções iguais",
        items: [
          "🔁 Executou 3 vezes e sempre esquece um passo? Vira checklist.",
          "✅ Checklist é uma camada do playbook, não documento separado",
          "📏 Máximo 7 itens — acima disso, quebre em dois processos",
          "🚫 Não crie checklist para processo que nunca repetiu",
        ],
        caption: "Checklists nascem da repetição — regra das 3 execuções",
        narration: "Checklists não se inventam. Eles emergem. Se você executou um processo três vezes e sempre esqueceu o mesmo passo, isso virou um checklist. É uma camada do playbook, não um documento separado. Máximo de sete itens — se ficar maior, quebre em dois processos. E nunca crie checklist para algo que você nunca repetiu. Burocracia sem uso é lixo com nome bonito."
      },

      // 7 · illus — SVG Biblioteca: 3 pastas → índice → curadoria → compartilhar
      {
        type: "illus",
        kicker: "ANATOMIA DA BIBLIOTECA VIVA",
        heading: "Três pastas → Índice → Curadoria → Compartilhar",
        svg: svgBiblioteca,
        note: "Fluxo completo: captura → organização → curadoria → ativo de autoridade",
        caption: "Da pasta ao ativo de método compartilhável",
        narration: "Aqui está o fluxo completo da biblioteca viva. As três pastas alimentam um índice central — onde você consegue ver tudo de uma vez, com nome, versão e status. O índice passa por curadoria trimestral de quinze minutos: o que está ativo continua, o que não serve vai para aposentados. E a biblioteca curada pode ser compartilhada — com equipe, alunos, clientes — e aí deixa de ser só um arquivo pessoal e vira um ativo de autoridade."
      },

      // 8 · term — ficha de curadoria trimestral
      {
        type: "term",
        kicker: "CURADORIA TRIMESTRAL",
        text:
`CURADORIA DA BIBLIOTECA — [trimestre/ano]
─────────────────────────────────────────
/prompts — ativos:
  ✓ post-linkedin-gancho-v2-campeao
  ✓ email-followup-v1
  ✗ tweet-storm-v1  → aposentado (não usa mais)

/playbooks — ativos:
  ✓ playbook-conteudo-semanal-v3-campeao
  ✓ playbook-reuniao-ata-v1

/aposentados:
  tweet-storm-v1, post-facebook-v1

─────────────────────────────────────────
Última curadoria: [data]
Próxima curadoria: [data + 3 meses]`,
        note: "15 minutos a cada 3 meses — biblioteca viva, não arquivo morto",
        caption: "Curadoria trimestral — 15 min mantém a biblioteca viva",
        narration: "Essa é a ficha de curadoria trimestral. Uma vez por trimestre, quinze minutos: você abre o índice e percorre cada item. Ativo e em uso: permanece. Não usou uma vez no trimestre: vai para aposentados. O critério é simples e binário. Isso impede que a biblioteca vire o cemitério de arquivos que todo profissional de tecnologia conhece — a pasta com duzentos itens onde ninguém encontra nada."
      },

      // 9 · illus — SVG Perfis: atalho do retardatário + 5 profissões
      {
        type: "illus",
        kicker: "ATALHO DO RETARDATÁRIO E 5 PERFIS",
        heading: "Comece com 3 · Cada profissão tem sua biblioteca",
        svg: svgPerfis,
        note: "O método é o mesmo — o conteúdo é específico da sua profissão",
        caption: "Atalho: comece com 3. Perfis: o método escala para qualquer área.",
        narration: "O atalho do retardatário: se você está começando do zero, não tente montar uma biblioteca completa. Comece com três itens — o prompt que mais usa hoje, o playbook do seu processo principal, e o briefing de contexto mais recorrente. Isso já é uma biblioteca funcional. A complexidade vem depois do valor comprovado. E esse método funciona para qualquer profissão: criador de conteúdo, gestor, consultor, desenvolvedor, professor. O método é o mesmo — o que muda é o conteúdo específico de cada área."
      },

      // 10 · compare — biblioteca morta vs biblioteca viva
      {
        type: "compare",
        kicker: "BIBLIOTECA MORTA × BIBLIOTECA VIVA",
        bad: {
          label: "arquivo morto",
          text: "Muitos itens salvos. Nomes vagos. Nunca abre. Procura por minutos. Recria o que já tinha."
        },
        good: {
          label: "biblioteca viva",
          text: "Três pastas. Nomes com versão. Curadoria trimestral. Abre, encontra, usa em segundos."
        },
        caption: "A diferença não é quantidade — é convenção + curadoria",
        narration: "A diferença entre uma biblioteca morta e uma viva não está na quantidade de itens. Está na convenção de nomes e na curadoria regular. Uma biblioteca morta tem muito conteúdo e nenhum acesso fácil. Uma biblioteca viva tem menos itens, todos nomeados, todos curados, todos encontráveis. E porque é encontrável, é usada. E porque é usada, cresce de forma sustentada."
      },

      // 11 · cta
      {
        type: "cta",
        caption: "Continue em inema.club",
        narration: "Isso é conteúdo do INEMA ponto CLUB. Acesse: inema ponto club."
      },
    ],
  },
};
