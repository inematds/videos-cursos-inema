// deep-t1.mjs — aulas profundas Trilha 1 (Prompt). Voz: bella.
const C = { bg2:"#1D2D44", bg3:"#3E5C76", fg:"#F0EBD8", mut:"#748CAB", acc:"#FFC300", code:"#2EC4B6", red:"#e07a7a" };
const COR = "#34d399"; // cor da Trilha 1 (emerald)

// ─── SVGs ──────────────────────────────────────────────────────────────────────

const svgIAGerativa = `<svg viewBox="0 0 1480 380" xmlns="http://www.w3.org/2000/svg">
  <rect width="1480" height="380" fill="${C.bg2}"/>
  <!-- Caixas do fluxo: Bilhões de textos → Treinamento → Modelo → Prompt → Resposta -->
  <g font-family="Inter,sans-serif">
    <!-- Caixa 1: Bilhões de textos -->
    <rect x="30" y="120" width="220" height="140" rx="18" fill="#22364f" stroke="${C.mut}" stroke-width="2"/>
    <text x="140" y="168" text-anchor="middle" fill="${C.fg}" font-size="15" font-weight="700">Bilhões de</text>
    <text x="140" y="190" text-anchor="middle" fill="${C.fg}" font-size="15" font-weight="700">textos</text>
    <text x="140" y="218" text-anchor="middle" fill="${C.mut}" font-size="12">livros, artigos, web</text>
    <!-- Seta 1 -->
    <line x1="250" y1="190" x2="298" y2="190" stroke="${C.mut}" stroke-width="3" stroke-linecap="round"/>
    <path d="M290,182 L302,190 L290,198" fill="none" stroke="${C.mut}" stroke-width="3" stroke-linecap="round"/>
    <!-- Caixa 2: Treinamento -->
    <rect x="305" y="120" width="220" height="140" rx="18" fill="#22364f" stroke="${C.mut}" stroke-width="2"/>
    <text x="415" y="183" text-anchor="middle" fill="${C.fg}" font-size="15" font-weight="700">Treinamento</text>
    <text x="415" y="210" text-anchor="middle" fill="${C.mut}" font-size="12">aprende padrões</text>
    <!-- Seta 2 -->
    <line x1="525" y1="190" x2="573" y2="190" stroke="${C.mut}" stroke-width="3" stroke-linecap="round"/>
    <path d="M565,182 L577,190 L565,198" fill="none" stroke="${C.mut}" stroke-width="3" stroke-linecap="round"/>
    <!-- Caixa 3: Modelo (destaque) -->
    <rect x="580" y="100" width="220" height="180" rx="18" fill="#0e2018" stroke="${COR}" stroke-width="3"/>
    <text x="690" y="175" text-anchor="middle" fill="${COR}" font-size="17" font-weight="700">Modelo</text>
    <text x="690" y="200" text-anchor="middle" fill="${C.fg}" font-size="12">prevê qual texto</text>
    <text x="690" y="218" text-anchor="middle" fill="${C.fg}" font-size="12">vem a seguir</text>
    <!-- Seta 3 -->
    <line x1="800" y1="190" x2="848" y2="190" stroke="${C.acc}" stroke-width="3" stroke-linecap="round"/>
    <path d="M840,182 L852,190 L840,198" fill="none" stroke="${C.acc}" stroke-width="3" stroke-linecap="round"/>
    <!-- Caixa 4: Prompt -->
    <rect x="855" y="120" width="220" height="140" rx="18" fill="#22364f" stroke="${C.acc}" stroke-width="2"/>
    <text x="965" y="183" text-anchor="middle" fill="${C.acc}" font-size="15" font-weight="700">Seu Prompt</text>
    <text x="965" y="210" text-anchor="middle" fill="${C.mut}" font-size="12">a instrução que entra</text>
    <!-- Seta 4 -->
    <line x1="1075" y1="190" x2="1123" y2="190" stroke="${COR}" stroke-width="3" stroke-linecap="round"/>
    <path d="M1115,182 L1127,190 L1115,198" fill="none" stroke="${COR}" stroke-width="3" stroke-linecap="round"/>
    <!-- Caixa 5: Resposta -->
    <rect x="1130" y="120" width="220" height="140" rx="18" fill="#22364f" stroke="${COR}" stroke-width="2"/>
    <text x="1240" y="183" text-anchor="middle" fill="${COR}" font-size="15" font-weight="700">Resposta</text>
    <text x="1240" y="210" text-anchor="middle" fill="${C.mut}" font-size="12">qualidade = instrução</text>
    <!-- Rótulo embaixo -->
    <text x="740" y="350" text-anchor="middle" fill="${C.mut}" font-size="14">A qualidade do que SAI depende da qualidade do que ENTRA</text>
  </g>
</svg>`;

const svgJanelaContexto = `<svg viewBox="0 0 1480 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="1480" height="400" fill="${C.bg2}"/>
  <g font-family="Inter,sans-serif">
    <!-- Janela principal -->
    <rect x="80" y="60" width="1320" height="240" rx="20" fill="#22364f" stroke="${COR}" stroke-width="3"/>
    <text x="740" y="40" text-anchor="middle" fill="${COR}" font-size="18" font-weight="700">JANELA DE CONTEXTO</text>
    <!-- Seção: Histórico -->
    <rect x="110" y="90" width="380" height="180" rx="12" fill="${C.bg3}" stroke="${C.mut}" stroke-width="1.5"/>
    <text x="300" y="118" text-anchor="middle" fill="${C.mut}" font-size="13" font-weight="600">HISTÓRICO DA CONVERSA</text>
    <text x="300" y="148" text-anchor="middle" fill="${C.fg}" font-size="12">Tudo que foi dito antes</text>
    <text x="300" y="170" text-anchor="middle" fill="${C.fg}" font-size="12">nesta sessão</text>
    <text x="300" y="200" text-anchor="middle" fill="${C.mut}" font-size="11">↑ quem tem mais contexto</text>
    <text x="300" y="218" text-anchor="middle" fill="${C.mut}" font-size="11">consegue respostas melhores</text>
    <!-- Seção: Instrução do sistema -->
    <rect x="550" y="90" width="380" height="180" rx="12" fill="${C.bg3}" stroke="${C.mut}" stroke-width="1.5"/>
    <text x="740" y="118" text-anchor="middle" fill="${C.mut}" font-size="13" font-weight="600">INSTRUÇÃO DO SISTEMA</text>
    <text x="740" y="148" text-anchor="middle" fill="${C.fg}" font-size="12">Papel, restrições,</text>
    <text x="740" y="170" text-anchor="middle" fill="${C.fg}" font-size="12">tom de voz</text>
    <!-- Seção: Seu prompt atual (destaque) -->
    <rect x="990" y="80" width="380" height="200" rx="12" fill="#0e2018" stroke="${C.acc}" stroke-width="2.5"/>
    <text x="1180" y="110" text-anchor="middle" fill="${C.acc}" font-size="13" font-weight="700">SEU PROMPT ATUAL</text>
    <text x="1180" y="148" text-anchor="middle" fill="${C.fg}" font-size="12">A tarefa de agora</text>
    <text x="1180" y="170" text-anchor="middle" fill="${C.fg}" font-size="12">O que a IA vai processar</text>
    <text x="1180" y="200" text-anchor="middle" fill="${COR}" font-size="11">← você controla isso</text>
    <!-- Legenda -->
    <text x="740" y="360" text-anchor="middle" fill="${C.mut}" font-size="13">Nova conversa = contexto zerado. Não assuma que a IA "lembra" de sessões anteriores.</text>
  </g>
</svg>`;

const svgCincoPartes = `<svg viewBox="0 0 1480 360" xmlns="http://www.w3.org/2000/svg">
  <rect width="1480" height="360" fill="${C.bg2}"/>
  <g font-family="Inter,sans-serif">
    <!-- 5 blocos + sinal = + resultado -->
    ${[
      ["Papel","quem a IA é","#38bdf8"],
      ["Tarefa","o que fazer","#38bdf8"],
      ["Contexto","o que saber","#38bdf8"],
      ["Formato","como entregar","#38bdf8"],
      ["Exemplo","modelo do bom","#38bdf8"]
    ].map((p, i) => {
      const x = 30 + i * 258;
      const plus = i < 4 ? `<text x="${x+228}" y="165" text-anchor="middle" fill="${COR}" font-size="32" font-weight="700">+</text>` : "";
      return `<rect x="${x}" y="110" width="200" height="100" rx="14" fill="#22364f" stroke="${p[2]}" stroke-width="2"/>
      <text x="${x+100}" y="152" text-anchor="middle" fill="${C.fg}" font-size="16" font-weight="700">${p[0]}</text>
      <text x="${x+100}" y="175" text-anchor="middle" fill="${C.mut}" font-size="12">${p[1]}</text>
      ${plus}`;
    }).join("")}
    <!-- Sinal = e resultado -->
    <text x="1340" y="165" text-anchor="middle" fill="${COR}" font-size="32" font-weight="700">=</text>
    <rect x="1370" y="95" width="90" height="130" rx="14" fill="#0e2018" stroke="${COR}" stroke-width="2.5"/>
    <text x="1415" y="148" text-anchor="middle" fill="${COR}" font-size="13" font-weight="700">Prompt</text>
    <text x="1415" y="168" text-anchor="middle" fill="${COR}" font-size="13" font-weight="700">Forte</text>
    <!-- Label inferior -->
    <text x="740" y="330" text-anchor="middle" fill="${C.mut}" font-size="13">Diagnóstico rápido: resposta ruim? Identifique qual das 5 partes faltou.</text>
  </g>
</svg>`;

const svgEmailProgressao = `<svg viewBox="0 0 1480 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="1480" height="400" fill="${C.bg2}"/>
  <g font-family="Inter,sans-serif">
    <!-- 4 versões do email prompt -->
    ${[
      ["V1 — Vaga", "Responde esse email\nde cliente bravo.", C.red, "resultado genérico"],
      ["V2 — Tarefa", "Redige resposta para\nemail de cliente\nque teve problema\nna entrega.", C.mut, "melhor, mas sem tom"],
      ["V3 — + Contexto", "Você é atendimento\nde e-commerce.\nCliente irritado com\natraso. Tom empático.", C.code, "resultado profissional"],
      ["V4 — Completa", "Papel+Tarefa+\nContexto+Formato+\nExemplo. As 5 partes.", COR, "resultado cirúrgico"]
    ].map((v, i) => {
      const x = 30 + i * 362;
      return `<rect x="${x}" y="60" width="330" height="280" rx="16" fill="#22364f" stroke="${v[2]}" stroke-width="${i===3?3:1.5}"/>
      <text x="${x+165}" y="100" text-anchor="middle" fill="${v[2]}" font-size="14" font-weight="700">${v[0]}</text>
      ${v[1].split("\n").map((l, li) => `<text x="${x+165}" y="${130+li*22}" text-anchor="middle" fill="${C.fg}" font-size="12">${l}</text>`).join("")}
      <text x="${x+165}" y="295" text-anchor="middle" fill="${C.mut}" font-size="11">${v[3]}</text>`;
    }).join("")}
    <!-- Seta de progressão -->
    <line x1="80" y1="370" x2="1400" y2="370" stroke="${COR}" stroke-width="2.5" stroke-dasharray="6,4"/>
    <path d="M1390,362 L1408,370 L1390,378" fill="none" stroke="${COR}" stroke-width="2.5"/>
    <text x="740" y="395" text-anchor="middle" fill="${C.mut}" font-size="12">progressão: cada parte adicionada melhora a resposta</text>
  </g>
</svg>`;

const svgEscadaTemplates = `<svg viewBox="0 0 1480 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="1480" height="400" fill="${C.bg2}"/>
  <g font-family="Inter,sans-serif">
    <!-- Degraus da escada (de baixo para cima, esquerda para direita) -->
    <!-- Degrau 1: Improviso -->
    <rect x="80" y="280" width="260" height="80" rx="14" fill="#22364f" stroke="${C.red}" stroke-width="2"/>
    <text x="210" y="313" text-anchor="middle" fill="${C.red}" font-size="15" font-weight="700">Improviso</text>
    <text x="210" y="335" text-anchor="middle" fill="${C.mut}" font-size="12">começa do zero</text>
    <text x="210" y="353" text-anchor="middle" fill="${C.mut}" font-size="11">toda vez</text>
    <!-- Degrau 2: Prompt forte -->
    <rect x="390" y="210" width="260" height="80" rx="14" fill="#22364f" stroke="${C.mut}" stroke-width="2"/>
    <text x="520" y="243" text-anchor="middle" fill="${C.fg}" font-size="15" font-weight="700">Prompt Forte</text>
    <text x="520" y="265" text-anchor="middle" fill="${C.mut}" font-size="12">5 partes</text>
    <text x="520" y="283" text-anchor="middle" fill="${C.mut}" font-size="11">módulo 1.1</text>
    <!-- Degrau 3: Template com variáveis -->
    <rect x="700" y="140" width="260" height="80" rx="14" fill="#22364f" stroke="${C.code}" stroke-width="2"/>
    <text x="830" y="173" text-anchor="middle" fill="${C.code}" font-size="15" font-weight="700">Template</text>
    <text x="830" y="195" text-anchor="middle" fill="${C.mut}" font-size="12">variáveis [ ]</text>
    <text x="830" y="213" text-anchor="middle" fill="${C.mut}" font-size="11">reutilizável</text>
    <!-- Degrau 4: Biblioteca (destaque) -->
    <rect x="1010" y="60" width="380" height="100" rx="14" fill="#0e2018" stroke="${COR}" stroke-width="3"/>
    <text x="1200" y="98" text-anchor="middle" fill="${COR}" font-size="17" font-weight="700">Biblioteca</text>
    <text x="1200" y="122" text-anchor="middle" fill="${C.fg}" font-size="12">nomeada, versionada, viva</text>
    <text x="1200" y="142" text-anchor="middle" fill="${C.mut}" font-size="11">cresce com você</text>
    <!-- Seta ascendente geral -->
    <line x1="80" y1="380" x2="80" y2="50" stroke="${C.mut}" stroke-width="1.5" stroke-dasharray="4,3"/>
    <path d="M72,58 L80,40 L88,58" fill="none" stroke="${C.mut}" stroke-width="1.5"/>
    <text x="50" y="215" text-anchor="middle" fill="${C.mut}" font-size="12" transform="rotate(-90,50,215)">maturidade</text>
    <!-- Label base -->
    <text x="740" y="395" text-anchor="middle" fill="${C.mut}" font-size="13">Cada degrau multiplica o valor do anterior — não substitui.</text>
  </g>
</svg>`;

const svgDezTemplates = `<svg viewBox="0 0 1480 420" xmlns="http://www.w3.org/2000/svg">
  <rect width="1480" height="420" fill="${C.bg2}"/>
  <g font-family="Inter,sans-serif">
    <text x="740" y="40" text-anchor="middle" fill="${COR}" font-size="18" font-weight="700">OS 10 TEMPLATES — seu kit de partida</text>
    ${[
      ["01","Resumo Executivo","[TEXTO] → bullets estratégicos"],
      ["02","E-mail Cliente Bravo","tom empático, solução clara"],
      ["03","Explica Simples","[CONCEITO] para [NÍVEL]"],
      ["04","Plano de Aula","[TEMA], [PÚBLICO], [DURAÇÃO]"],
      ["05","Post com Gancho","[PRODUTO/IDEIA], rede [X]"],
      ["06","Revisão de Texto","tom, clareza, erros"],
      ["07","Brainstorm Rápido","[DESAFIO] → dez ideias"],
      ["08","Roteiro de Reunião","[OBJETIVO], [PARTICIPANTES]"],
      ["09","Resposta Formal","[ASSUNTO], [REMETENTE]"],
      ["10","Analisa Documento","[DOCUMENTO] → riscos/oportunidades"]
    ].map((t, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = 60 + col * 720;
      const y = 65 + row * 70;
      const isTop3 = i < 3;
      return `<rect x="${x}" y="${y}" width="680" height="54" rx="10" fill="${isTop3 ? "#0e2018" : "#22364f"}" stroke="${isTop3 ? COR : C.bg3}" stroke-width="${isTop3 ? 2 : 1}"/>
      <text x="${x+30}" y="${y+22}" fill="${isTop3 ? COR : C.mut}" font-size="13" font-weight="700">${t[0]}</text>
      <text x="${x+70}" y="${y+22}" fill="${C.fg}" font-size="13" font-weight="600">${t[1]}</text>
      <text x="${x+70}" y="${y+42}" fill="${C.mut}" font-size="11">${t[2]}</text>`;
    }).join("")}
    <text x="740" y="405" text-anchor="middle" fill="${COR}" font-size="13">★ Resumo, E-mail e Explica-Simples cobrem 80% das tarefas do início</text>
  </g>
</svg>`;

// ─── VÍDEOS ────────────────────────────────────────────────────────────────────

export const V = {

  // ══════════════════════════════════════════════════════════════════════════════
  // MÓDULO 1.0 — Base Zero
  // ══════════════════════════════════════════════════════════════════════════════
  "piramide-ia-deep-t1-m0": {
    ghost: "1.0",
    scenes: [

      // 1. title
      {
        type: "title",
        eyebrow: "MÓDULO 1.0 · TRILHA 1 — PROMPT",
        lines: ["Base Zero", "Pra quem entra agora"],
        accentLine: 1,
        sub: "O que é IA generativa, vocabulário mínimo e sua primeira conversa",
        caption: "Módulo 1.0 — Base Zero",
        narration: "Nunca usou IA, ou usou uma vez e desistiu? Este módulo existe pra você. Sem jargão, sem pressa: em poucos minutos você entende o que é a ferramenta, derruba os três mitos que te seguram e faz sua primeira conversa que funciona."
      },

      // 2. lead — gancho
      {
        type: "lead",
        text: "IA generativa é um programa que<br/><span class=\"accent\">aprendeu padrões de bilhões de textos</span><br/>e usa esses padrões pra gerar respostas novas.",
        caption: "O que é — em uma frase honesta",
        narration: "Vamos começar sem hype e sem terror. IA generativa não é um robô consciente, não lê sua mente, não sabe as coisas como você sabe — ela prevê, com altíssima sofisticação, qual texto faz sentido vir a seguir. Só isso."
      },

      // 3. illus — fluxo IA generativa
      {
        type: "illus",
        kicker: "COMO FUNCIONA",
        heading: "Do treinamento ao prompt — o fluxo completo",
        svg: svgIAGerativa,
        note: "Lembre: a qualidade do que SAI depende da qualidade do que ENTRA.",
        caption: "Fluxo: textos → modelo → prompt → resposta",
        narration: "Pense num assistente brilhante que leu praticamente tudo que existe — mas não conhece sua empresa, seu cliente, seu tom. Se você der instruções vagas, ele entrega algo genérico. Se explicar direito, ele surpreende. Toda a Pirâmide da IA nasce dessa constatação."
      },

      // 4. cards — vocabulário mínimo (4 palavras)
      {
        type: "cards",
        kicker: "VOCABULÁRIO MÍNIMO",
        heading: "Quatro palavras bastam",
        cards: [
          { emoji: "🧠", name: "Modelo", desc: "O programa treinado — GPT, Claude, Gemini. A 'IA' em si." },
          { emoji: "📝", name: "Prompt", desc: "Sua instrução. A qualidade do prompt determina tudo." },
          { emoji: "💬", name: "Resposta", desc: "O que a IA gera a partir do seu prompt." },
          { emoji: "🪟", name: "Janela de Contexto", desc: "A memória da conversa — tudo que a IA vê nesta sessão." }
        ],
        caption: "Modelo · Prompt · Resposta · Janela de Contexto",
        narration: "Quatro conceitos e você já fala a língua da IA. Modelo é o programa. Prompt é sua instrução. Resposta é o que sai. E janela de contexto é a memória da conversa atual — tudo que a IA consegue ver nesta sessão."
      },

      // 5. illus — janela de contexto
      {
        type: "illus",
        kicker: "CONCEITO-CHAVE",
        heading: "A janela de contexto — o que a IA enxerga",
        svg: svgJanelaContexto,
        note: "Nova conversa = contexto zerado. A IA não lembra de sessões anteriores.",
        caption: "Janela de contexto: histórico + instrução + seu prompt",
        narration: "A janela de contexto é tudo que a IA consegue processar de uma vez — o histórico da conversa, as instruções do sistema e o seu prompt atual. Quando você abre uma conversa nova, ela começa do zero. Por isso contexto bem construído vale ouro."
      },

      // 6. bullets — os 3 mitos
      {
        type: "bullets",
        kicker: "OS 3 MITOS QUE TE SEGURAM",
        heading: "Derruba agora, avança mais rápido",
        items: [
          "❌ Mito 1: 'Já é tarde demais' — A adoção empresarial ainda está em 5 a 10%. Você não perdeu o bonde.",
          "❌ Mito 2: 'É só pra programador' — Se você escreve em português, você tem a habilidade central.",
          "❌ Mito 3: 'A IA vai me substituir' — Quem domina IA se torna mais valioso, não descartável."
        ],
        caption: "3 mitos: tarde demais · só pra programador · me substitui",
        narration: "Três mitos travam a maioria das pessoas. Primeiro: não é tarde demais — a adoção empresarial ainda está nos primeiros degraus. Segundo: não é só pra programador — se você escreve em português, você tem a habilidade central. Terceiro: dominar a ferramenta te torna mais valioso, não descartável."
      },

      // 7. steps — primeira conversa guiada
      {
        type: "steps",
        kicker: "PRIMEIRA CONVERSA GUIADA",
        heading: "Copie, cole, veja acontecer — 3 mensagens",
        steps: [
          { name: "Mensagem 1 — O pedido", desc: "Liste em ordem de prioridade os 3 maiores desafios de [sua área] hoje. Use bullet points." },
          { name: "Mensagem 2 — O refinamento", desc: "Foco no primeiro desafio: quais são as duas ações mais práticas que posso tomar esta semana?" },
          { name: "Mensagem 3 — O formato", desc: "Transforma isso numa tabela com colunas: Ação, Tempo estimado, Resultado esperado." }
        ],
        caption: "3 mensagens: pedido → refinamento → formato",
        narration: "Abra a ferramenta que você escolheu e copie as três mensagens uma de cada vez, na mesma conversa. Você vai ver na prática o que é um pedido claro, um refinamento e um pedido de formato. Dez minutos, uma tarefa real resolvida — a primeira vitória muda sua relação com a ferramenta."
      },

      // 8. compare — verificação: confiante × certo
      {
        type: "compare",
        kicker: "VERIFICAÇÃO — USE SEM SE QUEIMAR",
        bad: {
          label: "O perigo: alucinação",
          text: "A IA cita uma lei que não existe, um estudo que ninguém fez, uma estatística que parece perfeita — com total confiança e fluência."
        },
        good: {
          label: "Os 3 checks obrigatórios",
          text: "1. Fonte? A IA cita origem verificável?\n2. Data? A informação pode ter vencido?\n3. Faz sentido? Passou pelo seu bom senso?\nNada sai com seu nome sem passar por eles."
        },
        caption: "Alucinação: a IA erra com confiança — verifique sempre",
        narration: "Alucinação é o defeito conhecido da IA: ela inventa fatos com total fluência. O antídoto são três perguntas antes de publicar qualquer coisa: tem fonte verificável? A informação pode ter vencido? Faz sentido pro meu contexto? Esse reflexo protege sua reputação."
      },

      // 9. bullets — o que a IA não faz bem
      {
        type: "bullets",
        kicker: "LIMITES REAIS",
        heading: "O que a IA não faz bem — saiba antes",
        items: [
          "📅 Fatos recentes: modelos têm data de corte — para notícias de hoje, verifique fontes",
          "🔢 Cálculos complexos: boa pra lógica, ruim pra aritmética de precisão",
          "🎯 Sua realidade interna: não conhece seu cliente, seu processo, sua cultura",
          "✅ Julgamento final: toda decisão importante fica com você"
        ],
        caption: "Limites: fatos recentes · cálculos · contexto interno · julgamento",
        narration: "Conhecer os limites é tão importante quanto conhecer os poderes. A IA tem data de corte para fatos. É fraca em aritmética de precisão. Não conhece seu cliente nem sua empresa. E julgamento final é sempre seu. Saber isso evita decepção e uso errado."
      },

      // 10. cta
      {
        type: "cta",
        caption: "Continue em inema.club",
        narration: "Isso é conteúdo do INEMA ponto CLUB. Acesse: inema ponto club."
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // MÓDULO 1.1 — Anatomia do Prompt
  // ══════════════════════════════════════════════════════════════════════════════
  "piramide-ia-deep-t1-m1": {
    ghost: "1.1",
    scenes: [

      // 1. title
      {
        type: "title",
        eyebrow: "MÓDULO 1.1 · TRILHA 1 — PROMPT",
        lines: ["Anatomia", "de um Bom Prompt"],
        accentLine: 2,
        sub: "As 5 partes, o e-mail difícil em 4 versões e os erros que matam o prompt",
        caption: "Módulo 1.1 — Anatomia do Prompt",
        narration: "Um cliente insatisfeito espera resposta, e você tem a IA do lado. O mesmo pedido escrito de quatro formas diferentes gera quatro respostas completamente diferentes. Neste módulo você vê essa progressão acontecer — e aprende as cinco partes que constroem qualquer prompt profissional."
      },

      // 2. illus — as 5 partes como equação
      {
        type: "illus",
        kicker: "AS 5 PARTES DO PROMPT FORTE",
        heading: "Papel + Tarefa + Contexto + Formato + Exemplo",
        svg: svgCincoPartes,
        note: "Você não precisa usar as 5 sempre — mas precisa saber qual faltou quando a resposta vier ruim.",
        caption: "Papel · Tarefa · Contexto · Formato · Exemplo = Prompt Forte",
        narration: "Todo prompt profissional se constrói com as mesmas cinco peças. Papel: quem a IA deve ser. Tarefa: o que fazer — verbo claro mais objeto claro. Contexto: o que ela precisa saber sobre a situação. Formato: como a resposta deve chegar. E Exemplo: um modelo vale mil instruções."
      },

      // 3. term — o template universal do curso
      {
        type: "term",
        kicker: "TEMPLATE UNIVERSAL — COPIE E USE",
        text: "Você é [PAPEL].\nSua tarefa é [TAREFA].\nContexto: [O QUE ELA PRECISA SABER].\nFormato: [LISTA / TABELA / PASSOS].\nExemplo do que quero: [1 EXEMPLO].",
        note: "Diagnóstico rápido: resposta genérica? Faltou contexto. Tom errado? Faltou papel. Bagunçada? Faltou formato.",
        caption: "Template universal das 5 partes",
        narration: "Este é o template universal do curso. Cinco linhas que transformam qualquer pedido vago em instrução precisa. Guarde este modelo agora — ele é a base de tudo que vem depois na Trilha."
      },

      // 4. illus — o e-mail difícil em 4 versões
      {
        type: "illus",
        kicker: "O CASO DO E-MAIL DIFÍCIL",
        heading: "O mesmo pedido em 4 versões — veja a progressão",
        svg: svgEmailProgressao,
        note: "Cada parte adicionada melhora a resposta. A versão 4 é cirúrgica.",
        caption: "4 versões: vaga → tarefa → + contexto → completa",
        narration: "A situação: um cliente comprou seu produto, teve problema na entrega e mandou mensagem irritada. Você precisa responder hoje. A versão um é tão vaga que a IA entrega algo genérico. A versão dois adiciona tarefa clara. A versão três inclui papel e contexto — já é profissional. A versão quatro usa as cinco partes e o resultado é cirúrgico."
      },

      // 5. compare — pedido fraco × pedido forte (e-mail exemplo)
      {
        type: "compare",
        kicker: "PEDIDO FRACO × PEDIDO FORTE",
        bad: {
          label: "Versão fraca",
          text: "Responde esse email de cliente bravo."
        },
        good: {
          label: "Versão forte (5 partes)",
          text: "Você é especialista em atendimento de e-commerce.\nSua tarefa é redigir resposta empática para cliente que teve atraso na entrega.\nContexto: primeira compra, atraso de 3 dias, cliente visivelmente irritado.\nFormato: email curto, 3 parágrafos, tom humano.\nExemplo: comece com reconhecimento do problema, não com desculpa."
        },
        caption: "Fraco: 'responde esse email' × Forte: as 5 partes aplicadas",
        narration: "Veja o contraste. A versão fraca é uma instrução de seis palavras — o resultado vai variar muito. A versão forte aplica as cinco partes e entrega exatamente o que você precisa na primeira tentativa. O esforço de escrever bem o prompt se paga na hora."
      },

      // 6. bullets — formato de saída e nível de explicação
      {
        type: "bullets",
        kicker: "FORMATO + NÍVEL — CONTROLE TOTAL",
        heading: "Frases prontas pra colar no fim de qualquer prompt",
        items: [
          "📊 'Responda em tabela com colunas: X, Y, Z.'",
          "🔢 'Liste em passos numerados, máximo 8 passos.'",
          "📌 'Resuma em 5 bullets de no máximo 10 palavras cada.'",
          "📏 'Texto corrido, máximo 150 palavras, 2 parágrafos.'",
          "🎚️ 'Explique como se eu tivesse 12 anos.' / 'Nível especialista, sem simplificações.'"
        ],
        caption: "Frases de formato e nível pra adicionar em qualquer prompt",
        narration: "Formato é o campo mais negligenciado. Estas frases são plug-and-play — adicione qualquer uma no fim do seu prompt e a saída chega exatamente no molde que você precisa. E nível de explicação é igualmente poderoso: a mesma IA explica juros compostos pra criança ou pra CFO, desde que você especifique."
      },

      // 7. bullets — erros que matam o prompt
      {
        type: "bullets",
        kicker: "ERROS QUE MATAM O PROMPT",
        heading: "Os mais comuns — reconheça e evite",
        items: [
          "🚫 Pedido vago sem verbo de ação: 'fala sobre marketing' em vez de 'liste 5 estratégias de...'",
          "🚫 Sem contexto: a IA não conhece seu cliente, seu setor, seu tom",
          "🚫 Várias tarefas numa frase: separe em prompts distintos",
          "🚫 Sem formato: a IA escolhe um aleatório — geralmente texto corrido longo",
          "🚫 Desistir na primeira resposta ruim: refine, não recomece do zero"
        ],
        caption: "5 erros fatais no prompt — diagnostique e corrija",
        narration: "Cinco erros que repetem toda hora. Pedido vago sem verbo de ação. Falta de contexto. Misturar várias tarefas numa instrução. Não pedir formato. E desistir na primeira resposta ruim, quando a solução é um refinamento simples. Identifique qual erro cometeu e corrija só aquela parte."
      },

      // 8. steps — iteração: o ciclo de melhoria
      {
        type: "steps",
        kicker: "ITERAÇÃO — O CICLO QUE MULTIPLICA",
        steps: [
          { name: "Escreva o prompt", desc: "Use o template das 5 partes como ponto de partida" },
          { name: "Avalie a resposta", desc: "Qual das 5 partes faltou ou ficou vaga?" },
          { name: "Refine no mesmo chat", desc: "'Agora com tom mais formal' / 'Adicione exemplos' / 'Em tabela'" },
          { name: "Salve a versão boa", desc: "Ela vira o template reutilizável do próximo módulo" }
        ],
        caption: "Ciclo: escreve → avalia → refina → salva",
        narration: "Refinamento é mais rápido que recomeço. Quando a resposta vier ruim, continue no mesmo chat — a IA usa todo o histórico da conversa. Diagnostique qual parte faltou, peça o ajuste específico e em segundos você tem o resultado que queria. E quando chegar na versão boa: salve, ela vira template."
      },

      // 9. cta
      {
        type: "cta",
        caption: "Continue em inema.club",
        narration: "Isso é conteúdo do INEMA ponto CLUB. Acesse: inema ponto club."
      }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // MÓDULO 1.2 — Prompts Reutilizáveis
  // ══════════════════════════════════════════════════════════════════════════════
  "piramide-ia-deep-t1-m2": {
    ghost: "1.2",
    scenes: [

      // 1. title
      {
        type: "title",
        eyebrow: "MÓDULO 1.2 · TRILHA 1 — PROMPT",
        lines: ["Prompts", "Reutilizáveis"],
        accentLine: 1,
        sub: "Improviso é desperdício — templates com variáveis, biblioteca pessoal e os 10 que resolvem tudo",
        caption: "Módulo 1.2 — Prompts Reutilizáveis",
        narration: "Se você reescreve o mesmo prompt toda semana do zero, está pagando duas vezes — em tempo e em qualidade oscilante. Este módulo mostra como transformar seus melhores prompts em templates reutilizáveis, onde guardar e quais os dez que resolvem a maioria das tarefas do dia a dia."
      },

      // 2. lead — gancho: improviso é desperdício
      {
        type: "lead",
        text: "<span class=\"accent\">Improviso é desperdício.</span><br/>O mesmo esforço que você gastou<br/>ontem, você vai gastar amanhã.",
        caption: "Improviso é desperdício — o custo invisível",
        narration: "Pesquisas de uso mostram que profissionais que improvizam prompts perdem em média oitenta minutos por mês reescrevendo instruções que já funcionaram antes. Isso sem contar a variação de qualidade — o mesmo pedido mal escrito entrega resultados diferentes toda vez."
      },

      // 3. term — estrutura de um template com variáveis
      {
        type: "term",
        kicker: "ANATOMIA DO TEMPLATE",
        text: "Você é [PAPEL].\nSua tarefa é [TAREFA ESPECÍFICA].\nContexto: [SITUAÇÃO], público: [DESTINATÁRIO].\nFormato: [FORMATO], extensão: [LIMITE].\nExemplo de tom: [TRECHO DE REFERÊNCIA].",
        note: "Regra das variáveis: se mudou nos últimos 3 usos, é variável [ ]. Se não mudou, é esqueleto. Ideal: 2 a 4 colchetes.",
        caption: "Template = esqueleto fixo + variáveis [ ] — 2 a 4 colchetes",
        narration: "Um template é um esqueleto fixo com variáveis marcadas por colchetes. A regra pra decidir o que vira variável é simples: se mudou nos últimos três usos, é variável. Se não mudou, é parte do esqueleto. Não exagere — template com doze colchetes é formulário, não atalho."
      },

      // 4. illus — escada improviso → template → biblioteca
      {
        type: "illus",
        kicker: "A ESCADA DE MATURIDADE",
        heading: "Improviso → Prompt Forte → Template → Biblioteca",
        svg: svgEscadaTemplates,
        note: "Cada degrau multiplica o valor do anterior — não substitui.",
        caption: "Escada: improviso → prompt forte → template → biblioteca",
        narration: "Visualize quatro degraus de maturidade. No primeiro, improviso: começa do zero toda vez, resultado oscila. No segundo, prompt forte com as cinco partes do módulo um ponto um. No terceiro, template com variáveis: reutilizável, consistente. No topo, a biblioteca: todos os seus templates nomeados, versionados, crescendo com você."
      },

      // 5. illus — os 10 templates prontos
      {
        type: "illus",
        kicker: "OS 10 TEMPLATES DO CURSO",
        heading: "Seu kit de partida — copie hoje, use pra sempre",
        svg: svgDezTemplates,
        note: "Resumo Executivo, E-mail Cliente e Explica Simples cobrem 80% das tarefas do início.",
        caption: "10 templates: do resumo executivo à análise de documento",
        narration: "Aqui estão os dez templates prontos do curso, cada um com variáveis marcadas e os cinco campos do módulo anterior. Os três com destaque — Resumo Executivo, E-mail Cliente e Explica Simples — cobrem oitenta por cento das tarefas de quem está começando. Copie todos pro seu lugar de guardar, mesmo os que não parecem úteis hoje."
      },

      // 6. cards — onde guardar (3 opções)
      {
        type: "cards",
        kicker: "ONDE GUARDAR — O MELHOR LUGAR É O QUE VOCÊ JÁ ABRE",
        heading: "Biblioteca morta é biblioteca inútil",
        cards: [
          { emoji: "📄", name: "Doc único", desc: "Google Docs ou Word. Um doc, um título por template, busca com Ctrl+F. Comece aqui — simples, buscável, compartilhável." },
          { emoji: "📝", name: "App de notas", desc: "Notion, Obsidian ou Keep. Uma nota por template, tags por categoria. Use se já vive num app de notas." },
          { emoji: "📊", name: "Planilha", desc: "Colunas: nome, template, quando usar, versão. Ideal pra equipes — vira base compartilhada natural." }
        ],
        caption: "3 opções: Doc único · App de notas · Planilha",
        narration: "A escolha do lugar não é técnica, é comportamental. O melhor lugar é aquele que já faz parte do seu dia. A maioria começa com um doc único — um documento, busca com Control F, fácil de compartilhar. Se você já vive no Notion ou Obsidian, use lá. Se é de planilha, planilha. O que não funciona é criar um lugar novo só pra isso."
      },

      // 7. steps — nomear e versionar
      {
        type: "steps",
        kicker: "NOMEAR + VERSIONAR — CONVENÇÃO SIMPLES",
        steps: [
          { name: "Nome descritivo", desc: "resumo-executivo, email-cliente-bravo, explica-simples — kebab-case, sem espaço" },
          { name: "Versão curta", desc: "Adicione v1, v2 quando mudar substancialmente. Ex.: email-cliente-bravo-v2" },
          { name: "Tag de contexto", desc: "Opcional: área ou uso. Ex.: mkt-post-linkedin, rh-feedback-reuniao" },
          { name: "Estrela no favorito", desc: "Marque com ⭐ os três que usa toda semana — eles ficam no topo" }
        ],
        caption: "Convenção: nome-descritivo-v2 · tag de contexto · ⭐ favorito",
        narration: "Biblioteca sem convenção de nome vira caos em semanas. Use nomes descritivos em kebab-case, adicione versão quando o template mudar substancialmente, e marque com estrela os três que você usa toda semana. Com essa convenção você encontra qualquer template em menos de dez segundos."
      },

      // 8. bullets — os 3 que resolvem 80% + na sua profissão
      {
        type: "bullets",
        kicker: "OS 3 QUE RESOLVEM 80% + ADAPTAÇÃO POR PROFISSÃO",
        heading: "Comece aqui, expanda depois",
        items: [
          "⭐ Resumo Executivo — qualquer texto longo → bullets estratégicos prontos pra reunião",
          "⭐ E-mail Cliente — qualquer situação difícil → resposta empática, tom ajustado",
          "⭐ Explica Simples — qualquer conceito → versão para leigo, para especialista ou para equipe",
          "🏥 Saúde: Orienta Paciente / 🏛️ Jurídico: Resume Processo / 🏗️ Engenharia: Analisa Especificação",
          "📣 Marketing: Post com Gancho / 👩‍🏫 Educação: Plano de Aula / 💼 Gestão: Roteiro de Reunião"
        ],
        caption: "3 templates universais + variações por área profissional",
        narration: "Os três estrelados — Resumo, E-mail e Explica Simples — funcionam em qualquer profissão porque cobrem as três tarefas mais repetidas de qualquer trabalho: processar informação, comunicar e explicar. Depois que dominar esses três, adapte os demais para a sua área: saúde, direito, engenharia, educação, marketing — cada campo tem variações específicas dos mesmos padrões."
      },

      // 9. compare — biblioteca viva × biblioteca morta
      {
        type: "compare",
        kicker: "BIBLIOTECA VIVA × BIBLIOTECA MORTA",
        bad: {
          label: "Biblioteca morta",
          text: "Criada uma vez, nunca revisada. Templates com 12 colchetes. Lugar difícil de acessar no celular. Ninguém usa."
        },
        good: {
          label: "Biblioteca viva",
          text: "Atualizada toda vez que um prompt novo funciona bem. 2 a 4 variáveis por template. No lugar que você já abre todos os dias. Cresce nas próximas Trilhas do curso."
        },
        caption: "Biblioteca morta vs. viva — o que faz a diferença",
        narration: "A diferença entre uma biblioteca útil e uma que ninguém usa não é o tamanho — é o hábito de manutenção. Toda vez que um prompt novo funcionar bem no trabalho, reserve trinta segundos pra transformá-lo em template e adicionar ao doc. Em três meses você terá um ativo que multiplica sua produtividade automaticamente."
      },

      // 10. cta
      {
        type: "cta",
        caption: "Continue em inema.club",
        narration: "Isso é conteúdo do INEMA ponto CLUB. Acesse: inema ponto club."
      }
    ]
  }
};
