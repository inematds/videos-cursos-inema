// deep-t6.mjs — Specs de vídeo (aula profunda) para os módulos 6.1 e 6.2 da Trilha 6
// Pirâmide da IA — Topo da pirâmide / Capstone
// IDs: piramide-ia-deep-t6-m1 · piramide-ia-deep-t6-m2

const C = { bg2:"#1D2D44", bg3:"#3E5C76", fg:"#F0EBD8", mut:"#748CAB", acc:"#FFC300", code:"#2EC4B6", red:"#e07a7a" };
const COR = "#fb7185"; // Trilha 6 (rose)

// ─── SVG 1 — Ciclo Fechado (m1) ────────────────────────────────────────────
// Resultado → Análise → Aprendizado → Próximo Ciclo; seta ciano fechando o loop
const svgCicloFechado = `<svg viewBox="0 0 1480 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr-acc" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="${C.acc}"/>
    </marker>
    <marker id="arr-cyan" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8"/>
    </marker>
  </defs>
  <!-- Nó 1: Resultado -->
  <g transform="translate(60,80)">
    <rect x="0" y="0" width="280" height="190" rx="20" fill="#22364f" stroke="${COR}" stroke-width="3"/>
    <circle cx="60" cy="56" r="32" fill="${COR}"/>
    <text x="60" y="68" text-anchor="middle" fill="#0D1321" font-size="34" class="ttl">R</text>
    <text x="100" y="64" fill="${C.fg}" font-size="36" class="ttl">Resultado</text>
    <text x="24" y="120" fill="${C.mut}" font-size="24">vídeo, post, entrega</text>
    <text x="24" y="152" fill="${C.mut}" font-size="24">resultado gerado</text>
  </g>
  <!-- Seta 1→2 -->
  <line x1="342" y1="175" x2="418" y2="175" stroke="${C.acc}" stroke-width="5" marker-end="url(#arr-acc)"/>
  <!-- Nó 2: Análise -->
  <g transform="translate(420,80)">
    <rect x="0" y="0" width="280" height="190" rx="20" fill="#22364f" stroke="${C.acc}" stroke-width="3"/>
    <circle cx="60" cy="56" r="32" fill="${C.acc}"/>
    <text x="60" y="68" text-anchor="middle" fill="#0D1321" font-size="34" class="ttl">A</text>
    <text x="100" y="64" fill="${C.fg}" font-size="36" class="ttl">Análise</text>
    <text x="24" y="120" fill="${C.mut}" font-size="24">8 perguntas</text>
    <text x="24" y="152" fill="${C.mut}" font-size="24">pós-resultado</text>
  </g>
  <!-- Seta 2→3 -->
  <line x1="702" y1="175" x2="778" y2="175" stroke="${C.acc}" stroke-width="5" marker-end="url(#arr-acc)"/>
  <!-- Nó 3: Aprendizado -->
  <g transform="translate(780,80)">
    <rect x="0" y="0" width="280" height="190" rx="20" fill="#22364f" stroke="${C.code}" stroke-width="3"/>
    <circle cx="60" cy="56" r="32" fill="${C.code}"/>
    <text x="60" y="68" text-anchor="middle" fill="#0D1321" font-size="34" class="ttl">L</text>
    <text x="100" y="64" fill="${C.fg}" font-size="36" class="ttl">Aprendizado</text>
    <text x="24" y="120" fill="${C.mut}" font-size="24">vira artefato</text>
    <text x="24" y="152" fill="${C.mut}" font-size="24">arquivo atualizado</text>
  </g>
  <!-- Seta 3→4 -->
  <line x1="1062" y1="175" x2="1138" y2="175" stroke="${C.acc}" stroke-width="5" marker-end="url(#arr-acc)"/>
  <!-- Nó 4: Próximo Ciclo -->
  <g transform="translate(1140,80)">
    <rect x="0" y="0" width="290" height="190" rx="20" fill="#22364f" stroke="${C.acc}" stroke-width="3.5"/>
    <circle cx="62" cy="56" r="32" fill="${C.acc}"/>
    <text x="62" y="68" text-anchor="middle" fill="#0D1321" font-size="34" class="ttl">↑</text>
    <text x="104" y="64" fill="${C.fg}" font-size="36" class="ttl">Próximo</text>
    <text x="24" y="108" fill="${C.fg}" font-size="32" class="ttl">Ciclo</text>
    <text x="24" y="148" fill="${C.mut}" font-size="24">começa mais alto</text>
    <text x="24" y="176" fill="${C.mut}" font-size="22">v2.0 → v3.0 → v4.0</text>
  </g>
  <!-- Seta de loop ciano: Próximo Ciclo volta para Resultado (arco inferior) -->
  <path d="M 1285,272 C 1285,340 740,360 200,300 C 130,290 60,265 60,272" stroke="#38bdf8" stroke-width="5" fill="none" marker-end="url(#arr-cyan)" stroke-dasharray="12,6"/>
  <text x="680" y="380" text-anchor="middle" fill="#38bdf8" font-size="26" class="ttl">loop fechado — cada ciclo começa mais forte</text>
</svg>`;

// ─── SVG 2 — Pirâmide das 6 Camadas (m2) ──────────────────────────────────
// Recap visual das 6 trilhas: base → topo
const svgPiramide6 = `<svg viewBox="0 0 1480 420" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr-p" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="${C.mut}"/>
    </marker>
  </defs>
  <!-- 6 camadas em blocos horizontais, base embaixo, topo em rose -->
  ${[
    { n:1, label:"T1 · Linguagem",   sub:"Prompt preciso",              color:"#3E5C76" },
    { n:2, label:"T2 · Intenção",    sub:"Objetivo antes do prompt",    color:"#4a6080" },
    { n:3, label:"T3 · Contexto",    sub:"Briefing como ativo",         color:"#56688a" },
    { n:4, label:"T4 · Aproveitamento", sub:"Output → insumo",          color:"#747caa" },
    { n:5, label:"T5 · Arquitetura", sub:"Sistema de artefatos",        color:"#9a6a8a" },
    { n:6, label:"T6 · Evolução",    sub:"Ciclo fechado — TOPO",        color:COR       },
  ].map((l, i) => {
    const y = 330 - i * 52;
    const indent = i * 50;
    const w = 1380 - indent * 2;
    const x = 50 + indent;
    return `<g>
      <rect x="${x}" y="${y}" width="${w}" height="44" rx="8" fill="#22364f" stroke="${l.color}" stroke-width="${i===5?3:2}"/>
      <rect x="${x}" y="${y}" width="6" height="44" rx="3" fill="${l.color}"/>
      <text x="${x+24}" y="${y+28}" fill="${l.color}" font-size="24" class="ttl">${l.n}.</text>
      <text x="${x+52}" y="${y+28}" fill="${C.fg}" font-size="24" class="ttl">${l.label}</text>
      <text x="${x+w-20}" y="${y+28}" text-anchor="end" fill="${C.mut}" font-size="20" class="ttl">${l.sub}</text>
    </g>`;
  }).join("")}
  <!-- Seta vertical indicando progressão -->
  <line x1="28" y1="370" x2="28" y2="60" stroke="${COR}" stroke-width="4" marker-end="url(#arr-p)"/>
  <text x="14" y="220" fill="${COR}" font-size="22" class="ttl" transform="rotate(-90,14,220)">EVOLUÇÃO</text>
  <!-- Label topo -->
  <text x="740" y="30" text-anchor="middle" fill="${C.fg}" font-size="30" class="ttl">Pirâmide da Inteligência Aplicada — as 6 camadas</text>
</svg>`;

export const V = {

  // ═══════════════════════════════════════════════════════════════════
  // MÓDULO 6.1 — O ciclo que aprende
  // ═══════════════════════════════════════════════════════════════════
  "piramide-ia-deep-t6-m1": {
    ghost: "6.1",
    scenes: [

      // 1 — title
      {
        type: "title",
        eyebrow: "PIRÂMIDE DA IA · TRILHA 6 · MÓDULO 6.1",
        lines: ["O Ciclo", "Que Aprende"],
        accentLine: 2,
        sub: "Por que comemorar sem extrair é sorte desperdiçada",
        caption: "Módulo 6.1 — O Ciclo Que Aprende",
        narration: "Módulo seis ponto um: O Ciclo Que Aprende. Você vai descobrir por que a maioria das pessoas comemora o resultado e segue em frente — e por que isso é a pior decisão que um operador de IA pode tomar.",
      },

      // 2 — lead: o vídeo que bombou
      {
        type: "lead",
        text: "O vídeo <span class=\"accent\">bombou</span>.<br/>E o canal não aprendeu <b>nada</b>.",
        caption: "O caso clássico: resultado sem extração",
        narration: "Um criador publica um vídeo. Ele explode. Quinhentos por cento acima da média. O criador comemora, passa para o próximo vídeo — e em três meses está de volta à média de antes. O resultado aconteceu. O aprendizado não. Esse é o ciclo aberto.",
      },

      // 3 — compare: sistema só rodando × sistema evoluindo
      {
        type: "compare",
        kicker: "CICLO ABERTO × CICLO FECHADO",
        bad: {
          label: "Sistema só rodando",
          text: "Celebra o resultado, segue em frente. Não anota o que foi diferente. Atribui o sucesso à sorte. Próximo ciclo começa do zero. Em seis meses: mesma média de antes.",
        },
        good: {
          label: "Sistema evoluindo",
          text: "Celebra cinco minutos, analisa trinta. Documenta as variáveis que diferiram. Identifica o fator replicável. Atualiza o playbook antes do próximo ciclo. Em seis meses: nova média três a cinco vezes acima.",
        },
        caption: "Rodar ≠ Evoluir",
        narration: "À esquerda: um sistema que roda. À direita: um sistema que evolui. A diferença não está no esforço — está no que acontece depois do resultado. Quem só roda repetirá a sorte do acaso. Quem evolui transforma acidente em método.",
      },

      // 4 — topic: As 8 perguntas
      {
        type: "topic",
        n: 1,
        name: "As 8 Perguntas Pós-Resultado",
        caption: "Tópico 1 — O protocolo de extração",
        narration: "Tópico um: As oito perguntas pós-resultado. O protocolo que transforma qualquer resultado em dado acionável.",
      },

      // 5 — bullets: as 8 perguntas
      {
        type: "bullets",
        kicker: "PROTOCOLO · APLIQUE EM 30 MINUTOS",
        heading: "As 8 perguntas pós-resultado",
        items: [
          "1. O que diferiu desta vez em relação ao ciclo anterior?",
          "2. Qual variável específica explica o resultado acima ou abaixo?",
          "3. Esse fator é replicável ou foi circunstancial?",
          "4. O que o cliente ou o dado disse que eu ainda não sabia?",
          "5. Qual hipótese foi confirmada? Qual foi refutada?",
          "6. Que erro aconteceu — e o que ele me ensina sobre minha hipótese?",
          "7. Que artefato precisa ser atualizado com esse aprendizado?",
          "8. Qual é a próxima versão a testar no próximo ciclo?",
        ],
        caption: "30 minutos que valem mais do que o próximo projeto inteiro",
        narration: "Oito perguntas. Trinta minutos. Aplique após qualquer resultado relevante — positivo ou negativo. A pergunta sete é a mais crítica: ela obriga o aprendizado a sair da sua cabeça e entrar num artefato. Sem artefato atualizado, o loop continua aberto.",
      },

      // 6 — cards: 3 fontes de feedback
      {
        type: "cards",
        kicker: "FEEDBACK COMO COMBUSTÍVEL",
        heading: "As 3 fontes que alimentam o ciclo",
        cards: [
          { emoji: "👤", name: "Cliente", desc: "Sinal externo direto. O que a pessoa disse, pediu, reclamou ou elogiou. O mais imediato e mais fácil de ignorar." },
          { emoji: "📊", name: "Dados", desc: "Sinal quantitativo. Métricas, taxas, números. Elimina o viés de confirmação — o dado não tem opinião." },
          { emoji: "🔍", name: "Erro", desc: "O sinal mais honesto. Aponta exatamente onde a hipótese estava errada. Hipótese errada corrigida vale mais do que hipótese certa confirmada." },
        ],
        caption: "Cobertura completa: cliente + dados + erro",
        narration: "Três fontes, cobertura completa. A maioria das pessoas processa só o feedback positivo. Mas o erro é o sinal mais valioso — ele aponta com precisão onde sua hipótese falhou. Um sistema que aprende com o erro evolui muito mais rápido do que um sistema que só coleta elogios.",
      },

      // 7 — steps: Fechar o loop
      {
        type: "steps",
        kicker: "FECHAR O LOOP",
        steps: [
          { name: "Resultado acontece", desc: "vídeo, entrega, campanha, post — qualquer output relevante" },
          { name: "Aplica as 8 perguntas", desc: "30 minutos de extração deliberada pós-resultado" },
          { name: "Identifica o artefato", desc: "qual prompt, playbook ou template deve ser atualizado?" },
          { name: "Atualiza o artefato", desc: "\"vou fazer diferente\" não fecha o loop — o arquivo atualizado fecha" },
          { name: "Registra no log", desc: "data | artefato | mudança | motivo — o histórico é o ativo" },
          { name: "Próximo ciclo começa v2.0", desc: "não do zero — do ponto onde você parou, mais alto" },
        ],
        caption: "Aprendizado que não vira artefato não existe no próximo ciclo",
        narration: "Seis passos para fechar o loop. O passo quatro é onde a maioria para: a intenção de mudar existe, mas o arquivo não foi atualizado. Sem a mudança no artefato, o aprendizado some na próxima semana ocupada. O loop só fecha quando o arquivo muda.",
      },

      // 8 — illus SVG: Ciclo Fechado
      {
        type: "illus",
        kicker: "O CICLO FECHADO",
        heading: "Resultado → Análise → Aprendizado → Próximo Ciclo",
        svg: svgCicloFechado,
        note: "Seta ciano = o loop que fecha. Cada volta começa mais alto.",
        caption: "Loop fechado — cada ciclo começa mais forte",
        narration: "Visualize o ciclo. Resultado gera análise. Análise gera aprendizado. Aprendizado fecha no artefato. O artefato alimenta o próximo ciclo — que começa mais alto que o anterior. A seta ciano é o diferencial: ela fecha o loop. Sem ela, você roda em círculo. Com ela, você sobe em espiral.",
      },

      // 9 — term: Ritual de Evolução
      {
        type: "term",
        kicker: "NA PRÁTICA — RITUAL DE EVOLUÇÃO",
        text: `## Ritual mensal (15 min)\n\nAuditoria de artefatos:\n  [ ] Quantos prompts foram usados este mês?\n  [ ] Quais geraram resultados acima da média?\n  [ ] Quais artefatos foram atualizados?\n  [ ] Qual é o índice de evolução: arquivos v2+ / total?\n\nIndicadores objetivos, não subjetivos.\nArquivo que mudou = sistema que evoluiu.`,
        note: "Se nenhum arquivo mudou no mês, o sistema não evoluiu — só rodou.",
        caption: "Ritual de Evolução — auditoria mensal de 15 minutos",
        narration: "O Ritual de Evolução é uma auditoria mensal de quinze minutos. Você responde uma pergunta objetiva: quantos artefatos subiram de versão este mês? Se a resposta for zero, o sistema rodou — mas não evoluiu. Evolução real tem evidência concreta: o arquivo mudou.",
      },

      // 10 — bullets: sinais de que evolui de verdade
      {
        type: "bullets",
        kicker: "SINAIS DE EVOLUÇÃO REAL",
        heading: "Como saber se o sistema está evoluindo?",
        items: [
          "📁 Artefatos têm versão: prompt v2.0, playbook v3.0, briefing v4.0",
          "📝 Log de decisões existe: cada mudança tem data, motivo e resultado",
          "📉 O erro não se repete: mesma falha duas vezes = loop ainda aberto",
          "📈 A média sobe: resultados de hoje são o piso de amanhã, não o teto",
          "⏱️ Próximo ciclo começa mais rápido: o artefato já carrega o aprendizado anterior",
        ],
        caption: "Evolução tem evidência: o arquivo mudou",
        narration: "Cinco sinais de que o sistema está evoluindo de verdade. O mais importante: os artefatos têm versão. Um prompt que nunca mudou é um sistema que nunca aprendeu. Quando você vê v dois ponto zero, v três ponto zero, v quatro ponto zero — você está vendo o ciclo funcionando.",
      },

      // 11 — cta
      {
        type: "cta",
        caption: "Continue em inema.club",
        narration: "Isso é conteúdo do INEMA ponto CLUB. Acesse: inema ponto club.",
      },

    ],
  },

  // ═══════════════════════════════════════════════════════════════════
  // MÓDULO 6.2 — Inteligência operacional acumulada (CAPSTONE)
  // ═══════════════════════════════════════════════════════════════════
  "piramide-ia-deep-t6-m2": {
    ghost: "6.2",
    scenes: [

      // 1 — title
      {
        type: "title",
        eyebrow: "PIRÂMIDE DA IA · TRILHA 6 · CAPSTONE",
        lines: ["Inteligência", "Operacional"],
        accentLine: 2,
        sub: "As 6 camadas unidas em um sistema operado — não apenas usado",
        caption: "Módulo 6.2 — Capstone: Inteligência Operacional Acumulada",
        narration: "Módulo seis ponto dois — o Capstone. Chegamos ao topo da pirâmide. Neste módulo você vai juntar as seis camadas que aprendeu ao longo do curso, entender a vantagem composta de quem começa estruturado, e construir o Mapa do seu Sistema de Conhecimento de IA — sua peça de portfólio.",
      },

      // 2 — illus SVG: Pirâmide das 6 camadas
      {
        type: "illus",
        kicker: "AS 6 CAMADAS — RECAP VISUAL",
        heading: "Pirâmide da Inteligência Aplicada",
        svg: svgPiramide6,
        note: "Base: linguagem precisa. Topo: ciclo que aprende. Cada camada amplifica a anterior.",
        caption: "Trilha 1 a 6 — do prompt ao sistema que evolui",
        narration: "Seis camadas. Cada uma construída sobre a anterior. Trilha um: linguagem precisa. Trilha dois: intenção antes do prompt. Trilha três: contexto como ativo. Trilha quatro: output que vira insumo. Trilha cinco: arquitetura de artefatos. Trilha seis: o ciclo que aprende. Isso é a pirâmide completa.",
      },

      // 3 — topic
      {
        type: "topic",
        n: 1,
        name: "A Vantagem Composta de Quem Começou Tarde",
        caption: "Tópico 1 — Retardatário estruturado × pioneiro caótico",
        narration: "Tópico um: a vantagem composta de quem entrou tarde. Parece um paradoxo — mas quem começa seis meses depois, com o framework certo, pode ultrapassar quem começou antes sem estrutura.",
      },

      // 4 — compare: Perfil A × Perfil B
      {
        type: "compare",
        kicker: "DOIS PERFIS · SEIS MESES · RESULTADO DIVERGENTE",
        bad: {
          label: "Perfil A — entrou 6 meses antes",
          text: "Mês 1: prompts novos, entusiasmo. Mês 3: coleção de 200 prompts soltos. Mês 6: ainda procura o prompt certo. Resultado: plateau.",
        },
        good: {
          label: "Perfil B — entrou 6 meses depois",
          text: "Mês 1: aprende as 6 camadas. Mês 3: prompts v2.0, primeiro playbook. Mês 6: sistema com ciclos fechados. Resultado: ultrapassa o Perfil A.",
        },
        caption: "Estrutura compensa o atraso — e gera vantagem composta",
        narration: "O Perfil A acumulou quantidade. O Perfil B acumulou estrutura. No mês seis, o Perfil B ultrapassa o Perfil A — não porque trabalhou mais, mas porque cada ciclo do Perfil B começou mais alto que o anterior. Isso é vantagem composta: o sistema que aprende cresce exponencialmente enquanto o sistema que só roda cresce linearmente.",
      },

      // 5 — cards: Mapa do Sistema de Conhecimento
      {
        type: "cards",
        kicker: "PORTFÓLIO — MAPA DO SISTEMA DE CONHECIMENTO DE IA",
        heading: "Os 4 componentes do seu Mapa",
        cards: [
          { emoji: "📦", name: "Biblioteca de Artefatos", desc: "Prompts versionados, playbooks, briefings, templates. Cada arquivo com histórico de versões." },
          { emoji: "📋", name: "Log de Decisões", desc: "Data | artefato | mudança | resultado. O manual do seu sistema que ninguém mais tem." },
          { emoji: "📊", name: "Métricas de Evolução", desc: "Índice de artefatos v2+. Taxa de loops fechados. Média de resultados por trimestre." },
          { emoji: "🗺️", name: "Mapa de Fluxos", desc: "Como cada tarefa passa pelas 6 camadas. Onde o sistema ainda tem gargalo. O diagnóstico do seu estado atual." },
        ],
        caption: "O Mapa é seu portfólio — e seu diferencial competitivo",
        narration: "Quatro componentes. Juntos eles formam o Mapa do seu Sistema de Conhecimento de IA. Não é uma pasta de prompts — é um sistema documentado, versionado e que aprende. Esse mapa é o que diferencia um usuário de IA de um operador de IA.",
      },

      // 6 — steps: construir e apresentar o Mapa
      {
        type: "steps",
        kicker: "CONSTRUINDO E APRESENTANDO O MAPA",
        steps: [
          { name: "Inventário", desc: "liste todos os artefatos que você já tem — prompts, templates, playbooks" },
          { name: "Versionamento", desc: "renomeie para v1.0; qualquer artefato sem versão ainda não entrou no sistema" },
          { name: "Log inicial", desc: "registre as últimas três mudanças que você se lembra — crie o histórico retroativo" },
          { name: "Mapa de fluxo", desc: "escolha uma tarefa recorrente e trace as 6 camadas que ela passa" },
          { name: "Post de LinkedIn", desc: "\"Eu não uso IA, eu opero um sistema de IA\" — publique o mapa como portfólio" },
          { name: "Próximo ciclo", desc: "auditoria mensal, loop fechado, média sobe — o sistema já está rodando" },
        ],
        caption: "Do inventário ao portfólio público — seis passos",
        narration: "Seis passos para sair do zero ao Mapa completo. O passo cinco é o mais poderoso: publicar no LinkedIn não é vaidade — é provar para o mercado que você opera um sistema, não só usa uma ferramenta. A frase que abre esse post: eu não uso IA, eu opero um sistema de IA.",
      },

      // 7 — term: post de LinkedIn
      {
        type: "term",
        kicker: "TEMPLATE — POST LINKEDIN",
        text: `"Eu não uso IA. Eu opero um sistema de IA.\n\nDepois de [N] semanas no curso Pirâmide da IA,\nconstruí um sistema com:\n\n→ [X] artefatos versionados (prompts v2.0+)\n→ Log de decisões com [Y] entradas\n→ Ciclos fechados em [Z] fluxos\n\nA diferença entre usar e operar:\nquem usa procura o prompt certo.\nQuem opera já sabe onde está.\n\nMeu próximo ciclo começa mais alto\nporque o anterior foi documentado.\n\n#IA #Produtividade #SistemaDeConhecimento"`,
        note: "Adapte os números reais do seu sistema. Publique com print do Mapa.",
        caption: "Post que posiciona você como operador, não usuário",
        narration: "Use este template como base. Preencha com os seus números reais — quantos artefatos, quantas versões, quantos ciclos fechados. A distinção entre usar e operar é o que o mercado vai notar. Quem usa procura o prompt certo. Quem opera já sabe onde ele está — e quando foi atualizado pela última vez.",
      },

      // 8 — bullets: o que você construiu nas 6 trilhas
      {
        type: "bullets",
        kicker: "RECAP DO CURSO — 6 CAMADAS CONSTRUÍDAS",
        heading: "O que você operacionaliza agora",
        items: [
          "🔤 T1 · Linguagem: prompt com papel, tarefa, formato e restrição",
          "🎯 T2 · Intenção: objetivo antes do prompt — o que muda quando a IA sabe o destino",
          "📋 T3 · Contexto: briefing como artefato — a IA performa o que recebe",
          "⚙️ T4 · Aproveitamento: output que vira insumo — cadeia de valor com IA",
          "🏗️ T5 · Arquitetura: sistema de artefatos versionados e biblioteca operacional",
          "🔄 T6 · Evolução: ciclo fechado — resultado → análise → aprendizado → próximo ciclo",
        ],
        caption: "Seis camadas. Um sistema. Operado por você.",
        narration: "Seis camadas. Cada uma adicionou uma dimensão ao seu sistema. Da linguagem à evolução — você passou de usuário a operador. Agora o sistema trabalha composto: cada camada amplifica a anterior, e o ciclo fechado garante que o sistema melhore a cada rodada.",
      },

      // 9 — lead: fechamento
      {
        type: "lead",
        text: "Quem começou na base<br/>entende a <span class=\"accent\">evolução</span>.<br/>Quem entrou tarde <b>certo</b><br/>ultrapassa quem chegou <b>primeiro</b>.",
        caption: "A vantagem de operar um sistema — não apenas usar uma ferramenta",
        narration: "Quem construiu a base entende por que o topo funciona. E quem entrou tarde — mas com a estrutura certa — ultrapassa quem chegou primeiro sem ela. Esse é o princípio que atravessa todo o curso: não é sobre o prompt mais novo, é sobre o sistema que aprende.",
      },

      // 10 — cta
      {
        type: "cta",
        caption: "Continue em inema.club",
        narration: "Isso é conteúdo do INEMA ponto CLUB. Acesse: inema ponto club.",
      },

    ],
  },

};
