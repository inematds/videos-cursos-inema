const C = { bg2:"#1D2D44", bg3:"#3E5C76", fg:"#F0EBD8", mut:"#748CAB", acc:"#FFC300", code:"#2EC4B6", red:"#e07a7a" };
const COR = "#c084fc"; // Trilha 3 (purple)

// ── ILUSTRAÇÕES SVG ──────────────────────────────────────────────────────────

const svgCegaVsMapa = `
<svg viewBox="0 0 1480 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-t3m1a" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <marker id="arr-t3m1a" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
      <path d="M0,0 L9,5 L0,10 L2,5 Z" fill="${C.acc}"/>
    </marker>
  </defs>
  <rect width="1480" height="380" fill="#22364f"/>

  <!-- LADO ESQUERDO: prompt cego -->
  <rect x="30" y="30" width="660" height="320" rx="20" fill="#1a2438" stroke="${C.red}" stroke-width="2.5"/>
  <text x="360" y="72" text-anchor="middle" fill="${C.red}" font-size="22" class="ttl" font-weight="700">PROMPT CEGO</text>

  <!-- IA como caixa preta sem olhos -->
  <rect x="240" y="100" width="240" height="130" rx="16" fill="#22364f" stroke="${C.red}" stroke-width="2"/>
  <text x="360" y="155" text-anchor="middle" fill="${C.fg}" font-size="32" class="ttl">IA</text>
  <!-- olhos fechados -->
  <line x1="310" y1="178" x2="330" y2="178" stroke="${C.red}" stroke-width="3" stroke-linecap="round"/>
  <line x1="390" y1="178" x2="410" y2="178" stroke="${C.red}" stroke-width="3" stroke-linecap="round"/>
  <text x="360" y="210" text-anchor="middle" fill="${C.mut}" font-size="14" class="mono">sem contexto</text>

  <!-- prompt genérico -->
  <rect x="80" y="120" width="140" height="56" rx="10" fill="#22364f" stroke="${C.mut}" stroke-width="1.5"/>
  <text x="150" y="143" text-anchor="middle" fill="${C.fg}" font-size="13" class="mono">"Crie uma</text>
  <text x="150" y="162" text-anchor="middle" fill="${C.fg}" font-size="13" class="mono">campanha"</text>
  <line x1="222" y1="148" x2="238" y2="160" stroke="${C.mut}" stroke-width="2" marker-end="url(#arr-t3m1a)"/>

  <!-- saída genérica -->
  <rect x="500" y="120" width="150" height="56" rx="10" fill="#22364f" stroke="${C.red}" stroke-width="1.5"/>
  <text x="575" y="143" text-anchor="middle" fill="${C.red}" font-size="13" class="mono">Campanha</text>
  <text x="575" y="162" text-anchor="middle" fill="${C.red}" font-size="13" class="mono">genérica</text>
  <line x1="482" y1="160" x2="498" y2="152" stroke="${C.red}" stroke-width="2" stroke-dasharray="5,3"/>

  <text x="360" y="280" text-anchor="middle" fill="${C.mut}" font-size="15">Serve pra qualquer empresa do planeta.</text>
  <text x="360" y="302" text-anchor="middle" fill="${C.red}" font-size="14" class="mono">A IA nao era fraca — estava CEGA.</text>

  <!-- DIVISOR -->
  <line x1="740" y1="40" x2="740" y2="340" stroke="${C.mut}" stroke-width="1.5" stroke-dasharray="8,5" opacity="0.5"/>

  <!-- LADO DIREITO: prompt com mapa -->
  <rect x="790" y="30" width="660" height="320" rx="20" fill="#1a2438" stroke="${COR}" stroke-width="2.5"/>
  <text x="1120" y="72" text-anchor="middle" fill="${COR}" font-size="22" class="ttl" font-weight="700">PROMPT + MAPA DE CONTEXTO</text>

  <!-- IA com contexto (olhos abertos) -->
  <rect x="940" y="100" width="240" height="130" rx="16" fill="#22364f" stroke="${COR}" stroke-width="2" filter="url(#glow-t3m1a)"/>
  <text x="1060" y="155" text-anchor="middle" fill="${C.fg}" font-size="32" class="ttl">IA</text>
  <circle cx="1010" cy="177" r="8" fill="none" stroke="${COR}" stroke-width="2"/>
  <circle cx="1010" cy="177" r="3" fill="${COR}"/>
  <circle cx="1110" cy="177" r="8" fill="none" stroke="${COR}" stroke-width="2"/>
  <circle cx="1110" cy="177" r="3" fill="${COR}"/>
  <text x="1060" y="210" text-anchor="middle" fill="${COR}" font-size="14" class="mono">contexto completo</text>

  <!-- entradas de contexto -->
  <rect x="820" y="88" width="100" height="28" rx="7" fill="#22364f" stroke="${C.acc}" stroke-width="1.2"/>
  <text x="870" y="107" text-anchor="middle" fill="${C.acc}" font-size="12" class="mono">publico.md</text>
  <rect x="820" y="124" width="100" height="28" rx="7" fill="#22364f" stroke="${C.acc}" stroke-width="1.2"/>
  <text x="870" y="143" text-anchor="middle" fill="${C.acc}" font-size="12" class="mono">exemplos</text>
  <rect x="820" y="160" width="100" height="28" rx="7" fill="#22364f" stroke="${C.acc}" stroke-width="1.2"/>
  <text x="870" y="179" text-anchor="middle" fill="${C.acc}" font-size="12" class="mono">restricoes</text>
  <rect x="820" y="196" width="100" height="28" rx="7" fill="#22364f" stroke="${C.acc}" stroke-width="1.2"/>
  <text x="870" y="215" text-anchor="middle" fill="${C.acc}" font-size="12" class="mono">tom de voz</text>
  <line x1="922" y1="155" x2="938" y2="160" stroke="${C.acc}" stroke-width="1.5" marker-end="url(#arr-t3m1a)"/>

  <!-- saída personalizada -->
  <rect x="1200" y="120" width="170" height="56" rx="10" fill="#22364f" stroke="${COR}" stroke-width="1.5"/>
  <text x="1285" y="143" text-anchor="middle" fill="${COR}" font-size="13" class="mono">Campanha</text>
  <text x="1285" y="162" text-anchor="middle" fill="${COR}" font-size="13" class="mono">personalizada</text>
  <line x1="1182" y1="160" x2="1198" y2="152" stroke="${COR}" stroke-width="2" marker-end="url(#arr-t3m1a)"/>

  <text x="1120" y="280" text-anchor="middle" fill="${C.fg}" font-size="15">Parece feita por quem trabalha la ha anos.</text>
  <text x="1120" y="302" text-anchor="middle" fill="${COR}" font-size="14" class="mono">Contexto = o mapa que guia a IA.</text>
</svg>`;

const svgPrivacidade = `
<svg viewBox="0 0 1480 340" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr-t3m1b" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
      <path d="M0,0 L9,5 L0,10 L2,5 Z" fill="${COR}"/>
    </marker>
  </defs>
  <rect width="1480" height="340" fill="#22364f"/>

  <!-- Titulo central -->
  <text x="740" y="44" text-anchor="middle" fill="${COR}" font-size="24" class="ttl" font-weight="700">REGRA DE OURO DA PRIVACIDADE</text>
  <text x="740" y="72" text-anchor="middle" fill="${C.mut}" font-size="17">"Colaria isso num grupo publico de WhatsApp?" — Se nao, nao cola na IA.</text>

  <!-- NUNCA cole (esquerda) -->
  <rect x="30" y="96" width="430" height="220" rx="16" fill="#2a1a1a" stroke="${C.red}" stroke-width="2.2"/>
  <text x="245" y="128" text-anchor="middle" fill="${C.red}" font-size="18" class="ttl" font-weight="700">NUNCA cole na IA</text>
  ${[
    "Nomes/CPF/e-mail de clientes",
    "Senhas e tokens de API",
    "Contratos sem anonimizar",
    "Dados de saude de pacientes",
    "Segredos industriais"
  ].map((t, i) => `
  <text x="68" y="${156 + i*34}" fill="${C.red}" font-size="17">✗</text>
  <text x="92" y="${156 + i*34}" fill="${C.fg}" font-size="15" class="mono">${t}</text>`).join("")}

  <!-- Como anonimizar (direita) -->
  <rect x="520" y="96" width="430" height="220" rx="16" fill="#1a2438" stroke="${COR}" stroke-width="2.2"/>
  <text x="735" y="128" text-anchor="middle" fill="${COR}" font-size="18" class="ttl" font-weight="700">Como anonimizar</text>
  ${[
    ["Nome real", "[NOME]"],
    ["Empresa real", "[EMPRESA]"],
    ["CPF/CNPJ", "[DOCUMENTO]"],
    ["Valor exato", "ordem de grandeza"],
    ["Paciente", "condicao sem ID"]
  ].map((p, i) => `
  <text x="544" y="${156 + i*34}" fill="${C.mut}" font-size="14" class="mono">${p[0]}</text>
  <text x="678" y="${156 + i*34}" fill="${C.mut}" font-size="14">→</text>
  <text x="700" y="${156 + i*34}" fill="${COR}" font-size="14" class="mono">${p[1]}</text>`).join("")}

  <!-- Regra de ouro (direita final) -->
  <rect x="1000" y="96" width="450" height="220" rx="16" fill="#1a2438" stroke="${C.acc}" stroke-width="2.2"/>
  <text x="1225" y="128" text-anchor="middle" fill="${C.acc}" font-size="18" class="ttl" font-weight="700">Checklist rapido</text>
  ${[
    "Sem nomes reais",
    "Sem CPF / senhas / tokens",
    "Contratos com [EMPRESA]",
    "Valores genericos",
    "Regra do grupo publico: ok?"
  ].map((t, i) => `
  <text x="1024" y="${156 + i*34}" fill="${C.acc}" font-size="16">[ ]</text>
  <text x="1060" y="${156 + i*34}" fill="${C.fg}" font-size="15">${t}</text>`).join("")}
</svg>`;

const svgBriefingBase = `
<svg viewBox="0 0 1480 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-t3m2a" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <marker id="arr-t3m2a" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
      <path d="M0,0 L9,5 L0,10 L2,5 Z" fill="${COR}"/>
    </marker>
  </defs>
  <rect width="1480" height="360" fill="#22364f"/>

  <text x="740" y="48" text-anchor="middle" fill="${COR}" font-size="24" class="ttl" font-weight="700">O BRIEFING-BASE: caixa que alimenta a IA</text>

  <!-- CAIXA BRIEFING-BASE (centro) -->
  <rect x="490" y="72" width="500" height="210" rx="22" fill="#1a2438" stroke="${COR}" stroke-width="3" filter="url(#glow-t3m2a)"/>
  <text x="740" y="108" text-anchor="middle" fill="${COR}" font-size="20" class="ttl" font-weight="700">Briefing-base</text>
  ${[
    "Projeto: quem somos / voz",
    "Publico: perfil e dores",
    "Exemplos bons (referencia)",
    "Restricoes / guarda-corpos",
    "Resultado desta sessao"
  ].map((t, i) => `
  <rect x="514" y="${122 + i*32}" width="452" height="26" rx="6" fill="#22364f" opacity="0.7"/>
  <text x="526" y="${140 + i*32}" fill="${C.fg}" font-size="14" class="mono">${t}</text>`).join("")}

  <!-- Entradas -->
  ${[
    [80, 90, "publico.md"],
    [80, 160, "exemplos/"],
    [80, 230, "restricoes.md"],
  ].map(([x, y, label]) => `
  <rect x="${x}" y="${y}" width="150" height="40" rx="10" fill="#22364f" stroke="${C.acc}" stroke-width="1.8"/>
  <text x="${x+75}" y="${y+26}" text-anchor="middle" fill="${C.acc}" font-size="13" class="mono">${label}</text>
  <line x1="${x+152}" y1="${y+20}" x2="488" y2="${y+20}" stroke="${C.acc}" stroke-width="1.5" marker-end="url(#arr-t3m2a)"/>`).join("")}

  <!-- Saidas -->
  ${[
    [1252, 90, "E-mail"],
    [1252, 160, "Post / texto"],
    [1252, 230, "Documento"],
  ].map(([x, y, label]) => `
  <line x1="992" y1="${y+20}" x2="${x-2}" y2="${y+20}" stroke="${COR}" stroke-width="1.5" marker-end="url(#arr-t3m2a)"/>
  <rect x="${x}" y="${y}" width="180" height="40" rx="10" fill="#22364f" stroke="${COR}" stroke-width="1.8"/>
  <text x="${x+90}" y="${y+26}" text-anchor="middle" fill="${COR}" font-size="14" class="mono">${label}</text>`).join("")}

  <!-- Label CONSISTENCIA -->
  <text x="740" y="318" text-anchor="middle" fill="${C.acc}" font-size="16" class="ttl">Mesma pasta → mesmo tom → toda sessao</text>
</svg>`;

const svgPastaVsSemPasta = `
<svg viewBox="0 0 1480 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr-t3m2b" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
      <path d="M0,0 L9,5 L0,10 L2,5 Z" fill="${C.acc}"/>
    </marker>
  </defs>
  <rect width="1480" height="380" fill="#22364f"/>

  <!-- ESQUERDA: Sem pasta -->
  <rect x="30" y="30" width="660" height="320" rx="20" fill="#1a2438" stroke="${C.red}" stroke-width="2.5"/>
  <text x="360" y="72" text-anchor="middle" fill="${C.red}" font-size="22" class="ttl" font-weight="700">SEM PASTA DE CONTEXTO</text>

  <!-- Sessoes isoladas -->
  ${[
    [60, 96, "Sessao 1", "tom A"],
    [60, 164, "Sessao 2", "tom B"],
    [60, 232, "Sessao 3", "tom C"],
  ].map(([x, y, s, t]) => `
  <rect x="${x}" y="${y}" width="240" height="54" rx="12" fill="#22364f" stroke="${C.mut}" stroke-width="1.5"/>
  <text x="${x+120}" y="${y+24}" text-anchor="middle" fill="${C.fg}" font-size="15" class="ttl">${s}</text>
  <text x="${x+120}" y="${y+44}" text-anchor="middle" fill="${C.mut}" font-size="13" class="mono">${t} (diferente)</text>`).join("")}

  <!-- resultados inconsistentes -->
  ${[
    [380, 96, "Resultado X"],
    [380, 164, "Resultado Y"],
    [380, 232, "Resultado Z"],
  ].map(([x, y, label]) => `
  <rect x="${x}" y="${y}" width="180" height="54" rx="12" fill="#22364f" stroke="${C.red}" stroke-width="1.5"/>
  <text x="${x+90}" y="${y+34}" text-anchor="middle" fill="${C.red}" font-size="14" class="mono">${label}</text>`).join("")}

  <text x="360" y="318" text-anchor="middle" fill="${C.red}" font-size="15">Cada sessao reinventa do zero. Inconsistente.</text>

  <!-- DIVISOR -->
  <line x1="740" y1="40" x2="740" y2="340" stroke="${C.mut}" stroke-width="1.5" stroke-dasharray="8,5" opacity="0.5"/>

  <!-- DIREITA: Com pasta -->
  <rect x="790" y="30" width="660" height="320" rx="20" fill="#1a2438" stroke="${COR}" stroke-width="2.5"/>
  <text x="1120" y="72" text-anchor="middle" fill="${COR}" font-size="22" class="ttl" font-weight="700">COM PASTA DE CONTEXTO</text>

  <!-- pasta compartilhada -->
  <rect x="810" y="96" width="160" height="190" rx="14" fill="#22364f" stroke="${C.acc}" stroke-width="2"/>
  <text x="890" y="128" text-anchor="middle" fill="${C.acc}" font-size="14" class="ttl">Pasta</text>
  <text x="890" y="148" text-anchor="middle" fill="${C.acc}" font-size="13" class="mono">briefing.md</text>
  <text x="890" y="168" text-anchor="middle" fill="${C.acc}" font-size="13" class="mono">publico.md</text>
  <text x="890" y="188" text-anchor="middle" fill="${C.acc}" font-size="13" class="mono">exemplos/</text>
  <text x="890" y="208" text-anchor="middle" fill="${C.acc}" font-size="13" class="mono">restricoes</text>
  <text x="890" y="228" text-anchor="middle" fill="${C.acc}" font-size="13" class="mono">privacidade</text>
  <text x="890" y="268" text-anchor="middle" fill="${C.mut}" font-size="11">reanexada em</text>
  <text x="890" y="284" text-anchor="middle" fill="${C.mut}" font-size="11">toda sessao</text>

  <!-- Sessoes que apontam para a pasta -->
  ${[
    [1020, 104, "Sessao 1"],
    [1020, 172, "Sessao 2"],
    [1020, 240, "Sessao 3"],
  ].map(([x, y, s]) => `
  <line x1="972" y1="${y+17}" x2="${x-2}" y2="${y+17}" stroke="${C.acc}" stroke-width="1.5" stroke-dasharray="5,3"/>
  <rect x="${x}" y="${y}" width="160" height="40" rx="10" fill="#22364f" stroke="${COR}" stroke-width="1.5"/>
  <text x="${x+80}" y="${y+26}" text-anchor="middle" fill="${C.fg}" font-size="14" class="ttl">${s}</text>`).join("")}

  <!-- Resultados consistentes -->
  ${[
    [1220, 104],
    [1220, 172],
    [1220, 240],
  ].map(([x, y]) => `
  <line x1="1182" y1="${y+20}" x2="${x-2}" y2="${y+20}" stroke="${COR}" stroke-width="1.5" marker-end="url(#arr-t3m2b)"/>
  <rect x="${x}" y="${y}" width="200" height="40" rx="10" fill="#22364f" stroke="${COR}" stroke-width="1.5"/>
  <text x="${x+100}" y="${y+26}" text-anchor="middle" fill="${COR}" font-size="13" class="mono">Tom consistente</text>`).join("")}

  <text x="1120" y="318" text-anchor="middle" fill="${COR}" font-size="15">Mesmo tom. Toda sessao. Automatico.</text>
</svg>`;

// ── SPECS ────────────────────────────────────────────────────────────────────

export const V = {

  // ══════════════════════════════════════════════════════════════════
  // MÓDULO 3.1 — O que é contexto além do prompt
  // ══════════════════════════════════════════════════════════════════
  "piramide-ia-deep-t3-m1": {
    ghost: "3.1",
    scenes: [

      // 1. TITLE
      {
        type: "title",
        eyebrow: "PIRÂMIDE DA IA · TRILHA 3 · MÓDULO 3.1",
        lines: ["Contexto:", "a IA não era fraca"],
        accentLine: 2,
        sub: "Estava cega — e você pode mudar isso agora",
        caption: "Módulo 3.1 — O que é contexto além do prompt",
        narration: "Trilha três, módulo um. A IA não era fraca — estava cega. Neste módulo você vai entender o que é contexto de verdade, por que respostas ruins quase sempre são contexto pobre, e o que nunca colar numa ferramenta de IA."
      },

      // 2. LEAD — o caso da campanha genérica
      {
        type: "lead",
        text: `A campanha saiu <span class="accent">genérica</span>.<br/>A IA não errou — ela não sabia quem era <b>você</b>.`,
        caption: "O caso da campanha genérica",
        narration: "Você pediu uma campanha. A IA entregou uma campanha — que serve pra qualquer empresa do planeta. Ela não errou. Ela fez exatamente o que foi pedido. O problema é que ela não sabia quem era você, quem era o seu público, qual era o seu tom. Contexto é o que transforma uma resposta genérica em uma resposta sua."
      },

      // 3. TOPIC 1 — Contexto = mapa
      {
        type: "topic",
        n: 1,
        name: "Contexto = mapa",
        caption: "Tópico 1 — Contexto é o mapa que orienta a IA",
        narration: "Tópico um: contexto é o mapa."
      },

      // 4. ILLUS — prompt cego vs prompt com mapa
      {
        type: "illus",
        kicker: "COMPARAÇÃO VISUAL",
        heading: "Prompt cego vs. Prompt com mapa de contexto",
        svg: svgCegaVsMapa,
        note: "Contexto = arquivos, público, tom, exemplos, restrições. Sem eles a IA está no escuro.",
        caption: "Lado esquerdo: IA cega. Lado direito: IA com mapa.",
        narration: "Olha esse diagrama. Do lado esquerdo, o prompt cego: você pede, a IA processa sem saber nada do seu mundo, e o resultado serve pra qualquer empresa. Do lado direito, o prompt com mapa: você entrega briefing, público, exemplos aprovados, restrições de tom — e a IA gera algo que parece feito por quem trabalha lá há anos. A diferença não é o modelo. É o contexto."
      },

      // 5. CARDS — tipos de contexto
      {
        type: "cards",
        kicker: "OS TIPOS DE CONTEXTO",
        heading: "O que você pode entregar à IA",
        cards: [
          { emoji: "📄", name: "Arquivos e docs", desc: "PDFs, planilhas, Word, markdown. Upload ou cola direta até dois mil palavras." },
          { emoji: "✅", name: "Exemplos ± (few-shot)", desc: "Textos que você aprova e textos a evitar. É o contexto com maior retorno por palavra." },
          { emoji: "🎨", name: "Identidade de marca", desc: "Tom em três adjetivos, o que nunca usar, um trecho-âncora de estilo real." },
          { emoji: "🚧", name: "Regras e limites", desc: "O que a IA nunca deve sugerir: concorrentes, promessas, jargões proibidos." },
        ],
        caption: "Quatro tipos de contexto que você pode fornecer",
        narration: "Existem pelo menos quatro grandes tipos de contexto que você pode entregar. Primeiro, arquivos e documentos — qualquer coisa que você sobe ou cola. Segundo, exemplos positivos e negativos — quando você mostra como quer o tom, a IA replica com precisão impressionante. Terceiro, identidade de marca — tom, voz, o que evitar. Quarto, regras e limites — o que nunca pode aparecer na resposta."
      },

      // 6. COMPARE — só instrução vs instrução + exemplos
      {
        type: "compare",
        kicker: "CONTEXTO NA PRÁTICA",
        bad: {
          label: "Só instrução (resultado fraco)",
          text: `"Escreva num tom informal mas não vulgar, com energia, sem clichês, adequado para jovens adultos de 25 a 35 anos que trabalham em tech..."\n\nResultado: a IA interpreta "informal" e "energia" do jeito dela.`
        },
        good: {
          label: "Instrução + exemplos (resultado forte)",
          text: `"Escreva assim: [exemplo bom]. Evite isso: [exemplo ruim]. Agora faça para o meu caso..."\n\nResultado: tom calibrado sem ambiguidade.`
        },
        caption: "Instrução longa vs. instrução + exemplos reais",
        narration: "Compare os dois lados. À esquerda, só instrução — você escreve três parágrafos descrevendo o tom e a IA interpreta do jeito dela. À direita, você cola um exemplo de texto que aprova e um que rejeita. Dois exemplos reais valem mais que uma página de descrição. Exemplos são padrões concretos — a IA os replica com precisão."
      },

      // 7. BULLETS — quando contexto demais atrapalha
      {
        type: "bullets",
        kicker: "ARMADILHA",
        heading: "Quando contexto demais atrapalha",
        items: [
          "Inclua: público, objetivo, exemplos de tom, restrições que afetam este resultado",
          "Corte: histórico de dez anos, projetos não relacionados, justificativas desnecessárias",
          "Teste: se eu tirar isso, a resposta piora de forma relevante? Se não — fora.",
          "Contexto tem custo: dilui atenção, aumenta tokens, pode confundir com contradições",
        ],
        caption: "Curadoria: sinal vs. ruído",
        narration: "Contexto demais também é problema. Quando você despeja tudo na ferramenta, ela dilui a atenção entre informação relevante e ruído. O teste é simples: se você tirar um pedaço de contexto e a resposta não piorar de forma relevante, tire. Contexto mínimo que entrega o máximo — esse é o objetivo."
      },

      // 8. TERM — checklist de privacidade
      {
        type: "term",
        kicker: "PRIVACIDADE",
        text: `[ ] Sem nomes reais de clientes / pacientes / funcionarios
[ ] Sem CPF, CNPJ, RG, passaporte
[ ] Sem senhas, tokens ou chaves de API
[ ] Contratos: anonimizados com [EMPRESA] e [PARTE]
[ ] Dados financeiros: valores genericos, nao reais
[ ] Saude: condicao descrita, paciente nao identificado
[ ] Segredos industriais: estrutura descrita, dados removidos
[ ] Regra de ouro: "passaria no grupo publico?" ✓`,
        note: "Ferramentas de IA têm políticas diferentes sobre uso de dados. Dados sensíveis colados acidentalmente podem violar a LGPD.",
        caption: "Checklist de privacidade antes de colar qualquer contexto",
        narration: "Antes de qualquer coisa: o que nunca colar na IA. Dados de clientes identificados — nome, CPF, e-mail, telefone. Senhas e tokens de API. Contratos sem anonimizar. Dados de saúde de pacientes. Segredos industriais. A regra de ouro é uma pergunta: colaria isso num grupo público de WhatsApp? Se não — não cola na IA também. Para usar dados reais, anonimize antes: troque nomes por colchetes com rótulo, como [NOME] ou [EMPRESA], e substitua valores exatos por ordens de grandeza."
      },

      // 9. ILLUS — privacidade: nunca vs como anonimizar
      {
        type: "illus",
        kicker: "PRIVACIDADE VISUAL",
        heading: "O que nunca colar — e como anonimizar",
        svg: svgPrivacidade,
        note: "LGPD: dados pessoais identificáveis têm proteção legal. Anonimizar antes de usar é obrigação profissional.",
        caption: "Esquerda: lista vermelha. Direita: como transformar dados reais em contexto seguro.",
        narration: "Veja o diagrama. À esquerda, os cinco tipos de dado que nunca devem ir pra IA sem tratamento: nomes e documentos de clientes, senhas e tokens, contratos, dados de saúde e segredos industriais. No centro, como anonimizar: substitua cada dado real por um rótulo entre colchetes. À direita, o checklist rápido — são sete itens mais a regra do grupo público. Dois minutos antes de colar qualquer coisa e você está coberto."
      },

      // 10. CTA
      {
        type: "cta",
        caption: "Continue em inema.club",
        narration: "Isso é conteúdo do INEMA ponto CLUB. Acesse: inema ponto club."
      },

    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // MÓDULO 3.2 — Contexto na prática
  // ══════════════════════════════════════════════════════════════════
  "piramide-ia-deep-t3-m2": {
    ghost: "3.2",
    scenes: [

      // 1. TITLE
      {
        type: "title",
        eyebrow: "PIRÂMIDE DA IA · TRILHA 3 · MÓDULO 3.2",
        lines: ["Contexto", "na prática"],
        accentLine: 2,
        sub: "Da teoria à pasta funcionando — briefing, pastas, público, guarda-corpos",
        caption: "Módulo 3.2 — Engenharia de contexto na prática",
        narration: "Trilha três, módulo dois. Da teoria à pasta funcionando. Aqui você vai montar o briefing-base permanente, organizar a estrutura de pastas que a IA entende, criar o dossiê de público-alvo, usar restrições como guarda-corpos e ter o mini-briefing de cinco linhas pra usar quando estiver com pressa."
      },

      // 2. LEAD — a IA sem briefing vs com pasta
      {
        type: "lead",
        text: `Sem pasta: cada sessão<br/>começa do <span class="accent">zero</span>.<br/>Com pasta: começa do<br/>nível <b>onde você parou</b>.`,
        caption: "A diferença entre recomeçar e continuar",
        narration: "Sem pasta de contexto, cada nova sessão com a IA começa do zero. Você reexplica quem você é, qual é o tom, quem é o público. Com a pasta montada, você cola ou reanexca em trinta segundos e a sessão começa do nível onde você parou na última vez. Isso é o que separa usuário casual de usuário profissional."
      },

      // 3. TOPIC 1 — Briefing permanente
      {
        type: "topic",
        n: 1,
        name: "O briefing permanente",
        caption: "Tópico 1 — O doc que você cola em toda sessão",
        narration: "Tópico um: o briefing permanente."
      },

      // 4. TERM — briefing-base copy-paste
      {
        type: "term",
        kicker: "KIT T3 — COPY-PASTE",
        text: `# Projeto: [nome do projeto ou empresa]

Quem somos / voz: [tom em 2-3 adjetivos + 1 frase exemplo no tom certo]

Publico: [quem vai ler — perfil, nivel, dores principais]

Exemplos bons: [1-2 trechos aprovados como referencia de tom]

Exemplos a evitar: [1 trecho ou descricao do que voce nao quer]

Regras / limites: [o que nunca pode aparecer]

Resultado esperado nesta sessao: [o que voce quer gerar agora]

Dados sensiveis: anonimizados (checklist ok)`,
        note: "Salve onde você já abre todo dia: Google Docs, Notion, Notes. Critério: zero fricção pra abrir e copiar.",
        caption: "Briefing-base: estrutura completa para colar em toda sessão",
        narration: "Esse é o briefing-base. Oito campos, nenhum opcional. Projeto e voz em duas ou três linhas. Público com perfil real. Dois exemplos que você aprova e um que você rejeita — isso só já muda muito o resultado. Regras e limites. O objetivo da sessão atual. E no final, a confirmação de que dados sensíveis foram anonimizados. Salve isso num arquivo onde você abre todo dia. A única regra de armazenamento é que a fricção pra abrir e copiar seja zero."
      },

      // 5. ILLUS — briefing-base como caixa que alimenta a IA
      {
        type: "illus",
        kicker: "DIAGRAMA DO SISTEMA",
        heading: "O briefing-base: a caixa que alimenta a IA",
        svg: svgBriefingBase,
        note: "Uma única pasta → múltiplas sessões → mesmo tom. Contexto é o ativo que cresce com o uso.",
        caption: "Entradas da pasta alimentam o briefing-base, que alimenta toda sessão",
        narration: "Veja o fluxo. À esquerda, os arquivos da sua pasta: público, exemplos, restrições. Eles alimentam o briefing-base no centro — que é a caixa. Da caixa saem todos os resultados: e-mail, post, documento. O segredo é que a caixa não muda entre sessões. Você atualiza ela incrementalmente. O público mudou? Atualiza só publico ponto m d. Novos exemplos aprovados? Vão para a pasta de exemplos. O briefing-base cresce com cada conversa boa."
      },

      // 6. STEPS — estrutura de pastas
      {
        type: "steps",
        kicker: "ESTRUTURA DE PASTAS",
        steps: [
          { name: "briefing.md", desc: "Quem somos, voz, objetivo geral do projeto" },
          { name: "publico.md", desc: "Perfil, dores, linguagem que ressoa, o que afasta" },
          { name: "restricoes.md", desc: "O que nunca pode aparecer — empresariais, legais, de tom" },
          { name: "exemplos-bons/", desc: "Textos aprovados como referência — um por arquivo" },
          { name: "exemplos-ruins/", desc: "Estilos a evitar, com nota explicando por quê" },
          { name: "checklist-privacidade.md", desc: "Confirmação que os dados são seguros para usar" },
        ],
        caption: "Estrutura modular: cada tipo de contexto em seu próprio arquivo",
        narration: "A estrutura de pastas segue o princípio da modularidade. Um arquivo por tipo de contexto. Quando o público muda, você atualiza só publico ponto m d — sem tocar em nada mais. Quando entra um exemplo novo, vai direto na pasta de exemplos bons. Isso evita o problema mais comum: o documento gigante único que ninguém consegue manter atualizado."
      },

      // 7. TOPIC 2 — Dossiê de público e restrições
      {
        type: "topic",
        n: 2,
        name: "Dossiê de público e guarda-corpos",
        caption: "Tópico 2 — Uma página que muda tudo",
        narration: "Tópico dois: dossiê de público e guarda-corpos."
      },

      // 8. COMPARE — sem dossiê vs com dossiê
      {
        type: "compare",
        kicker: "DOSSIÊ DE PÚBLICO",
        bad: {
          label: "Sem dossiê (público genérico assumido)",
          text: `"Caro profissional, é com satisfação que apresentamos nossa solução inovadora que certamente trará excelentes resultados para o seu negócio..."\n\nTom corporativo genérico. Ninguém se sente falado.`
        },
        good: {
          label: "Com dossiê (freelancer iniciante, 25 anos)",
          text: `"Se você passou as últimas duas semanas reescrevendo propostas e ainda ficou sem resposta, este template vai mudar isso..."\n\nFala diretamente com a dor real. Tom e profundidade calibrados.`
        },
        caption: "A IA escreve para quem você diz que é o leitor",
        narration: "Sem dossiê, a IA assume um leitor adulto educado genérico e entrega tom corporativo que não fala com ninguém. Com dossiê, você descreve o perfil real: faixa etária, dores específicas, linguagem que ressoa, o que afasta. O resultado muda completamente. O exemplo da direita fala com uma dor concreta de uma pessoa real — e isso só é possível porque o dossiê de público estava na pasta."
      },

      // 9. ILLUS — pasta com vs sem
      {
        type: "illus",
        kicker: "COMPARAÇÃO FINAL",
        heading: "Sem pasta vs. Com pasta de contexto",
        svg: svgPastaVsSemPasta,
        note: "Pasta de contexto não é arquivo morto — é ativo vivo que cresce a cada sessão boa.",
        caption: "Esquerda: três sessões com toms diferentes. Direita: três sessões com o mesmo tom.",
        narration: "Lado a lado, o antes e o depois. Sem pasta: cada sessão começa do zero, a IA improvisa o tom, e os resultados das três sessões parecem de empresas diferentes. Com pasta: as três sessões compartilham o mesmo briefing-base, o mesmo dossiê de público, os mesmos exemplos. O output tem o mesmo tom mesmo que você tenha aberto a ferramenta três semanas depois da última vez."
      },

      // 10. STEPS — mini-briefing de 5 linhas
      {
        type: "steps",
        kicker: "ATALHO — CONTEXTO MÍNIMO VIÁVEL",
        steps: [
          { name: "Linha 1 — Quem sou", desc: "Sua função e empresa em uma linha. Ex: sou consultor de marketing, atendo PMEs do varejo." },
          { name: "Linha 2 — Para quem", desc: "Perfil do leitor do resultado. Ex: dono de loja de roupas, quarenta e cinco anos, não técnico." },
          { name: "Linha 3 — Objetivo agora", desc: "O que você quer gerar nesta sessão. Ex: três opções de legenda de Instagram para o Dia das Mães." },
          { name: "Linha 4 — Tom", desc: "Três adjetivos ou uma frase. Ex: caloroso, sem gírias, para mulheres de trinta e cinco a cinquenta e cinco anos." },
          { name: "Linha 5 — Restrição crítica", desc: "O que não pode aparecer. Ex: não mencione promoção de preço — não temos desconto desta vez." },
        ],
        caption: "Mini-briefing: contexto mínimo que já multiplica a qualidade",
        narration: "O briefing completo é o ideal — mas o perfeito é inimigo do feito. O mini-briefing de cinco linhas é o contexto mínimo viável. Em dois minutos você multiplica a qualidade da resposta sem precisar montar a pasta completa. Quem sou, para quem, objetivo agora, tom e a restrição crítica. Cinco itens. Dois minutos. E o resultado já parece que você sabia o que estava fazendo."
      },

      // 11. CARDS — contexto por profissão
      {
        type: "cards",
        kicker: "NA SUA PROFISSÃO",
        heading: "Cinco perfis — o que colocar na pasta",
        cards: [
          { emoji: "👨‍🏫", name: "Professor", desc: "Perfil da turma, ementa, exemplos de aulas que funcionaram, dificuldades recorrentes dos alunos." },
          { emoji: "⚖️", name: "Advogado", desc: "Modelos de peças anonimizados, jurisprudência usual, tom da banca, legislação aplicável." },
          { emoji: "💼", name: "Vendedor", desc: "ICP — perfil do cliente ideal, objeções mais frequentes, proposta de valor, casos de sucesso anonimizados." },
          { emoji: "🎥", name: "Criador de Conteúdo", desc: "Nicho, três posts que performaram, perfil do público, voz, o que o público odeia — críticas reais." },
        ],
        caption: "O princípio é universal — o contexto é específico de cada profissão",
        narration: "O princípio é universal, mas o contexto é específico. Professor: perfil da turma, ementa, exemplos de aulas que funcionaram. Advogado: modelos de peças anonimizados, tom da banca, jurisprudência. Vendedor: ICP, objeções, casos de sucesso. Criador de conteúdo: posts que performaram, perfil do canal, críticas reais do público. Se você não está em nenhum desses perfis, use o framework das três perguntas: o que a IA precisaria saber pra não errar o tom, que exemplos bons você tem salvos, e o que nunca pode aparecer."
      },

      // 12. CTA
      {
        type: "cta",
        caption: "Continue em inema.club",
        narration: "Isso é conteúdo do INEMA ponto CLUB. Acesse: inema ponto club."
      },

    ],
  },

};
