// specs.mjs — Partes 1 e 2 (landing + trilhas). Voz: rachel. Curso: Pirâmide da IA.
// Convenção de id: piramide-ia-00-overview, piramide-ia-01-tX-<slug>.
const C = { bg2: "#1D2D44", bg3: "#3E5C76", fg: "#F0EBD8", mut: "#748CAB", acc: "#FFC300", code: "#2EC4B6", red: "#e07a7a" };

// Cores das 6 camadas (para os SVGs)
const CAM = [
  { n: 6, nome: "Evolução",       cor: "#fb7185", frase: "o aprendizado acumulado" },
  { n: 5, nome: "Arquitetura",    cor: "#2dd4bf", frase: "o sistema" },
  { n: 4, nome: "Aproveitamento", cor: "#fbbf24", frase: "o método" },
  { n: 3, nome: "Contexto",       cor: "#c084fc", frase: "o mapa" },
  { n: 2, nome: "Intenção",       cor: "#60a5fa", frase: "o destino" },
  { n: 1, nome: "Prompt",         cor: "#34d399", frase: "a pergunta" },
];

// SVG da pirâmide de 6 camadas (largura ~1480)
const svgPiramide = `
<svg viewBox="0 0 1480 760" xmlns="http://www.w3.org/2000/svg">
  ${CAM.map((c, i) => {
    const topW = 360 + i * 170, botW = 360 + (i + 1) * 170;
    const cx = 740, y = 60 + i * 110, h = 96;
    const xtl = cx - topW / 2, xtr = cx + topW / 2, xbl = cx - botW / 2, xbr = cx + botW / 2;
    return `<polygon points="${xtl},${y} ${xtr},${y} ${xbr},${y + h} ${xbl},${y + h}" fill="#22364f" stroke="${c.cor}" stroke-width="3"/>
      <text x="${cx}" y="${y + 44}" text-anchor="middle" fill="${c.cor}" font-size="34" class="ttl">${c.n} · ${c.nome}</text>
      <text x="${cx}" y="${y + 76}" text-anchor="middle" fill="${C.mut}" font-size="22">${c.frase}</text>`;
  }).join("")}
</svg>`;

// SVG genérico "trilha → módulos" (lista de módulos como cartões)
const svgTrilha = (cor, mods) => `
<svg viewBox="0 0 1480 ${120 + mods.length * 150}" xmlns="http://www.w3.org/2000/svg">
  ${mods.map((m, i) => {
    const y = 40 + i * 150;
    return `<g transform="translate(120,${y})">
      <rect x="0" y="0" width="1240" height="120" rx="20" fill="#22364f" stroke="${cor}" stroke-width="3"/>
      <circle cx="74" cy="60" r="40" fill="${cor}"/><text x="74" y="74" text-anchor="middle" fill="#0D1321" font-size="34" class="ttl">${m.id}</text>
      <text x="150" y="54" fill="${C.fg}" font-size="36" class="ttl">${m.nome}</text>
      <text x="150" y="92" fill="${C.mut}" font-size="24">${m.sub}</text>
    </g>`;
  }).join("")}
</svg>`;

export const VIDEOS = {

  // ===================== PARTE 1 — LANDING =====================
  "piramide-ia-00-overview": {
    ghost: "IA",
    scenes: [
      { type: "title", eyebrow: "ENGENHARIA DE CONHECIMENTO DA IA", lines: ["A Pirâmide", "da IA"], accentLine: 2,
        sub: "6 camadas, do prompt à evolução", caption: "Pirâmide da IA — visão geral",
        narration: "Bem-vindo à Pirâmide da IA: a Engenharia de Conhecimento da Inteligência Artificial." },
      { type: "lead", text: "Você não precisa de cem prompts.<br/>Precisa de <span class=\"accent\">seis camadas</span>.",
        caption: "Seis camadas, não cem prompts",
        narration: "A maioria coleciona prompts soltos. Aqui você aprende a construir inteligência, camada por camada." },
      { type: "illus", kicker: "A PIRÂMIDE", heading: "Da base ao topo", svg: svgPiramide,
        note: "Cada camada sustenta a próxima",
        narration: "Na base, o Prompt. Acima dele, Intenção, Contexto, Aproveitamento, Arquitetura e, no topo, Evolução. Cada camada prepara a próxima." },
      { type: "bullets", kicker: "AS SEIS FRASES", heading: "O curso em uma linha por camada",
        items: ["✍️ Prompt é a pergunta", "🎯 Intenção é o destino", "🗺️ Contexto é o mapa", "📒 Aproveitamento é o método", "🧩 Arquitetura é o sistema", "🔄 Evolução é o aprendizado acumulado"],
        caption: "As seis frases-âncora",
        narration: "Prompt é a pergunta. Intenção é o destino. Contexto é o mapa. Aproveitamento é o método. Arquitetura é o sistema. E evolução é o aprendizado acumulado." },
      { type: "lead", text: "Entrou tarde na IA?<br/><span class=\"accent\">Ótimo.</span>",
        caption: "Quem começa na base entende evolução",
        narration: "Quem entra no topo vê complexidade. Quem começa na base entende evolução. Se você está começando agora, está começando pelo lugar certo." },
      { type: "cards", kicker: "O QUE VOCÊ LEVA", heading: "Seis artefatos prontos",
        cards: [ { emoji: "📚", name: "Biblioteca de prompts", desc: "templates nomeados" }, { emoji: "🗺️", name: "Briefing-base", desc: "o contexto do projeto" }, { emoji: "🧩", name: "Mini-sistema", desc: "fluxo executável" }, { emoji: "🏆", name: "Mapa do sistema", desc: "seu portfólio de IA" } ],
        caption: "Seis artefatos reais",
        narration: "Ao final, você sai com seis artefatos reais — uma biblioteca de prompts, um briefing, um playbook, um fluxo, um mini-sistema e o mapa do seu próprio sistema de conhecimento de IA." },
      { type: "cta", caption: "Continue em inema.club",
        narration: "Isso é conteúdo do INEMA ponto CLUB. Acesse: inema ponto club." },
    ],
  },

  // ===================== PARTE 2 — TRILHAS =====================
  "piramide-ia-01-t1-prompt": {
    ghost: "T1",
    scenes: [
      { type: "title", eyebrow: "TRILHA 1 · BASE DA PIRÂMIDE", lines: ["Engenharia", "de Prompt"], accentLine: 2,
        sub: "Prompt é a pergunta", caption: "Trilha 1 — Prompt",
        narration: "Trilha um: Engenharia de Prompt. A base da pirâmide — onde você aprende a pedir." },
      { type: "lead", text: "A qualidade da resposta<br/>depende da <span class=\"accent\">qualidade do pedido</span>.",
        caption: "O caso do e-mail difícil",
        narration: "O caso desta trilha é o e-mail difícil: o mesmo pedido, em quatro versões, gera quatro respostas completamente diferentes." },
      { type: "cards", kicker: "OS MÓDULOS", heading: "Três módulos",
        cards: [ { emoji: "🌱", name: "1.0 Base Zero", desc: "pra quem entra agora" }, { emoji: "🧬", name: "1.1 Anatomia", desc: "as 5 partes do prompt" }, { emoji: "📚", name: "1.2 Reutilizáveis", desc: "10 templates prontos" } ],
        caption: "3 módulos da Trilha 1",
        narration: "São três módulos: Base Zero, para quem nunca usou IA; a Anatomia de um bom prompt; e os prompts reutilizáveis." },
      { type: "bullets", kicker: "O QUE VOCÊ APRENDE", heading: "Da primeira conversa à biblioteca",
        items: ["🤖 o que a IA é — e o que ela não faz", "🛡️ verificar: usar sem se queimar", "🧬 papel, tarefa, contexto, formato, exemplo", "📐 pedir o formato certo da resposta", "📚 transformar prompts em templates"],
        caption: "Tópicos da Trilha 1",
        narration: "Você aprende o vocabulário mínimo, a verificar respostas, as cinco partes de um prompt forte, e a transformar o que funciona em templates reutilizáveis." },
      { type: "cta", caption: "Continue em inema.club",
        narration: "Comece pela base, na Trilha um. Conteúdo do INEMA ponto CLUB. Acesse: inema ponto club." },
    ],
  },

  "piramide-ia-01-t2-intencao": {
    ghost: "T2",
    scenes: [
      { type: "title", eyebrow: "TRILHA 2", lines: ["Engenharia", "de Intenção"], accentLine: 2,
        sub: "Intenção é o destino", caption: "Trilha 2 — Intenção",
        narration: "Trilha dois: Engenharia de Intenção. Onde a pergunta ganha um destino." },
      { type: "lead", text: "O prompt acertou a tarefa.<br/>E errou o <span class=\"accent\">alvo</span>.",
        caption: "O post que vendeu zero",
        narration: "O caso desta trilha é o post que vendeu zero. Texto impecável, nenhuma venda — porque faltou declarar a intenção." },
      { type: "cards", kicker: "OS MÓDULOS", heading: "Dois módulos",
        cards: [ { emoji: "🎯", name: "2.1 Tarefa × Intenção", desc: "o que peço vs. o que quero" }, { emoji: "🚀", name: "2.2 Intenção aplicada", desc: "ao resultado real" } ],
        caption: "2 módulos da Trilha 2",
        narration: "Dois módulos: a diferença entre tarefa e intenção, e a intenção aplicada ao resultado." },
      { type: "bullets", kicker: "O QUE VOCÊ APRENDE", heading: "Declarar o destino",
        items: ["🎯 objetivo, público e efeito desejado", "🤔 a decisão que a resposta deve provocar", "📝 o bloco de intenção que cola antes do prompt", "💼 intenção em conteúdo, vendas e gestão"],
        caption: "Tópicos da Trilha 2",
        narration: "Você aprende a declarar objetivo, público e efeito; a pensar na decisão que a resposta deve provocar; e a colar um bloco de intenção antes de cada pedido." },
      { type: "cta", caption: "Continue em inema.club",
        narration: "Conteúdo do INEMA ponto CLUB. Acesse: inema ponto club." },
    ],
  },

  "piramide-ia-01-t3-contexto": {
    ghost: "T3",
    scenes: [
      { type: "title", eyebrow: "TRILHA 3", lines: ["Engenharia", "de Contexto"], accentLine: 2,
        sub: "Contexto é o mapa", caption: "Trilha 3 — Contexto",
        narration: "Trilha três: Engenharia de Contexto. O mapa que a IA precisa pra entender o seu mundo." },
      { type: "lead", text: "A IA não era fraca.<br/>Estava <span class=\"accent\">cega</span>.",
        caption: "A campanha genérica",
        narration: "O caso desta trilha é a campanha genérica. A IA não era fraca: estava cega, sem público, sem marca, sem exemplos." },
      { type: "cards", kicker: "OS MÓDULOS", heading: "Dois módulos",
        cards: [ { emoji: "🗺️", name: "3.1 O que é contexto", desc: "além do prompt" }, { emoji: "🗂️", name: "3.2 Na prática", desc: "briefing e privacidade" } ],
        caption: "2 módulos da Trilha 3",
        narration: "Dois módulos: o que é contexto além do prompt, e a engenharia de contexto na prática." },
      { type: "bullets", kicker: "O QUE VOCÊ APRENDE", heading: "Dar chão à IA",
        items: ["📎 arquivos, exemplos, marca e regras", "🗺️ o briefing-base que você reanexa sempre", "🔒 privacidade: o que nunca colar na IA", "🧪 a mesma resposta com e sem contexto"],
        caption: "Tópicos da Trilha 3",
        narration: "Você aprende a fornecer arquivos, exemplos e regras; a montar um briefing permanente; e a regra de ouro da privacidade: o que nunca colar na IA." },
      { type: "cta", caption: "Continue em inema.club",
        narration: "Conteúdo do INEMA ponto CLUB. Acesse: inema ponto club." },
    ],
  },

  "piramide-ia-01-t4-aproveitamento": {
    ghost: "T4",
    scenes: [
      { type: "title", eyebrow: "TRILHA 4", lines: ["Engenharia de", "Aproveitamento"], accentLine: 2,
        sub: "Aproveitamento é o método", caption: "Trilha 4 — Aproveitamento",
        narration: "Trilha quatro: Engenharia de Aproveitamento. Transformar o que deu certo em método." },
      { type: "lead", text: "O acerto existiu.<br/>E <span class=\"accent\">evaporou</span>.",
        caption: "O acerto que se perdeu",
        narration: "O caso desta trilha é o acerto que se perdeu. Um post performou dez vezes a média — e três meses depois ninguém sabia repetir." },
      { type: "cards", kicker: "OS MÓDULOS", heading: "Dois módulos",
        cards: [ { emoji: "📒", name: "4.1 Da tentativa ao padrão", desc: "registrar e reusar" }, { emoji: "🗃️", name: "4.2 Biblioteca viva", desc: "playbooks e curadoria" } ],
        caption: "2 módulos da Trilha 4",
        narration: "Dois módulos: da tentativa ao padrão, e a biblioteca viva." },
      { type: "bullets", kicker: "O QUE VOCÊ APRENDE", heading: "O que funciona vira método",
        items: ["🔍 engenharia reversa de um acerto", "📋 montar o seu primeiro playbook", "🏷️ nomear e versionar o que funciona", "⏱️ a rotina de captura de 5 minutos"],
        caption: "Tópicos da Trilha 4",
        narration: "Você aprende a fazer engenharia reversa de um acerto, a montar playbooks, a versionar o que funciona e a capturar conhecimento em cinco minutos por dia." },
      { type: "cta", caption: "Continue em inema.club",
        narration: "Conteúdo do INEMA ponto CLUB. Acesse: inema ponto club." },
    ],
  },

  "piramide-ia-01-t5-arquitetura": {
    ghost: "T5",
    scenes: [
      { type: "title", eyebrow: "TRILHA 5", lines: ["Engenharia", "de Arquitetura"], accentLine: 2,
        sub: "Arquitetura é o sistema", caption: "Trilha 5 — Arquitetura",
        narration: "Trilha cinco: Engenharia de Arquitetura. Parar de pensar em comandos e começar a pensar em sistemas." },
      { type: "lead", text: "Dez prompts bons.<br/>Um processo <span class=\"accent\">quebrado</span>.",
        caption: "O gargalo invisível",
        narration: "O caso desta trilha é o gargalo invisível. Dez prompts excelentes, e o trabalho ainda trava — porque nada conecta as peças." },
      { type: "cards", kicker: "OS MÓDULOS", heading: "Dois módulos",
        cards: [ { emoji: "🧩", name: "5.1 Pensar em sistemas", desc: "fluxos e loops" }, { emoji: "⚙️", name: "5.2 Mini-sistema", desc: "executável em qualquer chat" } ],
        caption: "2 módulos da Trilha 5",
        narration: "Dois módulos: pensar em sistemas em vez de comandos, e montar um mini-sistema." },
      { type: "bullets", kicker: "O QUE VOCÊ APRENDE", heading: "Conectar as peças — sem código",
        items: ["🔀 desenhar um fluxo de etapas", "🔁 a lógica do loop: pensar, agir, avaliar, ajustar", "🔗 encadear prompts: saída vira entrada", "🧱 o sistema mínimo de 3 caixas"],
        caption: "Tópicos da Trilha 5",
        narration: "Tudo sem código: você aprende a desenhar fluxos, a usar loops, a encadear prompts e a montar um sistema mínimo de três caixas que já entrega valor." },
      { type: "cta", caption: "Continue em inema.club",
        narration: "Conteúdo do INEMA ponto CLUB. Acesse: inema ponto club." },
    ],
  },

  "piramide-ia-01-t6-evolucao": {
    ghost: "T6",
    scenes: [
      { type: "title", eyebrow: "TRILHA 6 · TOPO DA PIRÂMIDE", lines: ["Engenharia", "de Evolução"], accentLine: 2,
        sub: "Evolução é o aprendizado acumulado", caption: "Trilha 6 — Evolução",
        narration: "Trilha seis: Engenharia de Evolução. O topo da pirâmide, onde cada ciclo melhora o próximo." },
      { type: "lead", text: "Bombou.<br/>E o canal <span class=\"accent\">não aprendeu nada</span>.",
        caption: "O vídeo que bombou",
        narration: "O caso desta trilha é o vídeo que bombou. Cinquenta vezes a média — e o canal seguiu igual, sem extrair nada do sucesso." },
      { type: "cards", kicker: "OS MÓDULOS", heading: "Dois módulos",
        cards: [ { emoji: "🔄", name: "6.1 O ciclo que aprende", desc: "as 8 perguntas" }, { emoji: "🏆", name: "6.2 Capstone", desc: "seu sistema como portfólio" } ],
        caption: "2 módulos da Trilha 6",
        narration: "Dois módulos: o ciclo que aprende, e o capstone — onde você monta o mapa do seu sistema." },
      { type: "bullets", kicker: "O QUE VOCÊ APRENDE", heading: "Fechar o ciclo",
        items: ["❓ as 8 perguntas pós-resultado", "🔁 transformar resultado em aprendizado", "📈 a vantagem composta de quem entrou tarde", "🏆 seu sistema vira peça de portfólio"],
        caption: "Tópicos da Trilha 6",
        narration: "Você aprende as oito perguntas pós-resultado, a fechar o ciclo de aprendizado, e a apresentar o seu sistema como portfólio. No fim: eu não uso IA, eu opero um sistema de IA." },
      { type: "cta", caption: "Continue em inema.club",
        narration: "Conteúdo do INEMA ponto CLUB. Acesse: inema ponto club." },
    ],
  },

};
