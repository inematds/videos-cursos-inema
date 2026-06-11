const C = { bg2:"#1D2D44", bg3:"#3E5C76", fg:"#F0EBD8", mut:"#748CAB", acc:"#FFC300", code:"#2EC4B6", red:"#e07a7a" };
const COR = "#2dd4bf"; // Trilha 5 (teal)
const CIANO = "#38bdf8"; // seta de retorno (loop)

// ─── SVG 1 · M1 — Loop Pensar→Agir→Avaliar→Ajustar (seta de retorno ciano) ───
const svgLoopM1 = `
<svg viewBox="0 0 1480 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="${COR}"/>
    </marker>
    <marker id="arrb" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="${CIANO}"/>
    </marker>
  </defs>
  <!-- boxes -->
  ${[["PENSAR","Contexto\n+ objetivo",80],["AGIR","IA gera\na saída",400],["AVALIAR","Critério\natendido?",720],["AJUSTAR","Revisa e\naprimora",1040]].map(([t,d,x])=>`
  <rect x="${x}" y="120" width="240" height="110" rx="14" fill="#22364f" stroke="${COR}" stroke-width="2.5"/>
  <text x="${x+120}" y="162" text-anchor="middle" font-family="ttl,sans-serif" font-size="22" font-weight="700" fill="${COR}">${t}</text>
  ${d.split("\n").map((l,i)=>`<text x="${x+120}" y="${190+i*24}" text-anchor="middle" font-family="ttl,sans-serif" font-size="16" fill="${C.fg}">${l}</text>`).join("")}
  `).join("")}
  <!-- setas forward -->
  <line x1="322" y1="175" x2="396" y2="175" stroke="${COR}" stroke-width="2.5" marker-end="url(#arr)"/>
  <line x1="642" y1="175" x2="716" y2="175" stroke="${COR}" stroke-width="2.5" marker-end="url(#arr)"/>
  <line x1="962" y1="175" x2="1036" y2="175" stroke="${COR}" stroke-width="2.5" marker-end="url(#arr)"/>
  <!-- seta de retorno ciano: AJUSTAR → AGIR (por baixo) -->
  <path d="M1160,232 Q1160,320 800,320 Q440,320 440,232" fill="none" stroke="${CIANO}" stroke-width="2.5" stroke-dasharray="8,5" marker-end="url(#arrb)"/>
  <text x="800" y="350" text-anchor="middle" font-family="ttl,sans-serif" font-size="15" fill="${CIANO}">volta pra gerar novamente</text>
  <!-- entrega (ok) -->
  <line x1="1282" y1="175" x2="1380" y2="175" stroke="${C.acc}" stroke-width="2.5" marker-end="url(#arr)"/>
  <rect x="1382" y="148" width="80" height="52" rx="10" fill="#22364f" stroke="${C.acc}" stroke-width="2"/>
  <text x="1422" y="179" text-anchor="middle" font-family="ttl,sans-serif" font-size="15" fill="${C.acc}">OK</text>
  <text x="800" y="60" text-anchor="middle" font-family="ttl,sans-serif" font-size="26" font-weight="700" fill="${C.fg}">Loop do Sistema: Pensar → Agir → Avaliar → Ajustar → Agir</text>
</svg>`;

// ─── SVG 2 · M1 — Comando isolado × Fluxo conectado ───
const svgComandoVsFluxo = `
<svg viewBox="0 0 1480 340" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="${COR}"/>
    </marker>
  </defs>
  <!-- lado esquerdo: comando isolado -->
  <text x="360" y="50" text-anchor="middle" font-family="ttl,sans-serif" font-size="22" font-weight="700" fill="${C.red}">✗ Comando isolado</text>
  ${["Prompt A","Prompt B","Prompt C"].map((l,i)=>`
  <rect x="${60+i*220}" y="80" width="180" height="70" rx="10" fill="#22364f" stroke="${C.red}" stroke-width="2"/>
  <text x="${150+i*220}" y="121" text-anchor="middle" font-family="ttl,sans-serif" font-size="17" fill="${C.fg}">${l}</text>
  `).join("")}
  <text x="360" y="185" text-anchor="middle" font-family="ttl,sans-serif" font-size="14" fill="${C.mut}">sem conexão · você lembra o que vem depois</text>
  <!-- divisor -->
  <line x1="740" y1="40" x2="740" y2="300" stroke="${C.mut}" stroke-width="1.5" stroke-dasharray="6,4"/>
  <!-- lado direito: fluxo conectado -->
  <text x="1120" y="50" text-anchor="middle" font-family="ttl,sans-serif" font-size="22" font-weight="700" fill="${COR}">✓ Fluxo conectado</text>
  ${["Entrada","Gera","Avalia","Entrega"].map((l,i)=>`
  <rect x="${780+i*175}" y="80" width="150" height="70" rx="10" fill="#22364f" stroke="${COR}" stroke-width="2"/>
  <text x="${855+i*175}" y="121" text-anchor="middle" font-family="ttl,sans-serif" font-size="17" fill="${C.fg}">${l}</text>
  ${i<3?`<line x1="${932+i*175}" y1="115" x2="${778+(i+1)*175}" y2="115" stroke="${COR}" stroke-width="2" marker-end="url(#arr2)"/>`:""}`).join("")}
  <text x="1120" y="185" text-anchor="middle" font-family="ttl,sans-serif" font-size="14" fill="${C.mut}">saída de um vira entrada do próximo · processo decide</text>
  <text x="740" y="280" text-anchor="middle" font-family="ttl,sans-serif" font-size="26" font-weight="700" fill="${C.fg}">A diferença que muda o resultado</text>
</svg>`;

// ─── SVG 3 · M2 — Sistema mínimo de 3 caixas com loop ciano ───
const svgSistema3Caixas = `
<svg viewBox="0 0 1480 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="${COR}"/>
    </marker>
    <marker id="arrb3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="${CIANO}"/>
    </marker>
  </defs>
  <!-- 3 caixas centrais -->
  ${[["C1","ENTRADA","Contexto +\nobjetivo + base",220],["C2","GERA","IA produz\nrascunho",580],["C3","AVALIA","Critérios → ok\nou ajusta",940]].map(([n,t,d,x])=>`
  <rect x="${x}" y="110" width="260" height="140" rx="16" fill="#22364f" stroke="${COR}" stroke-width="3"/>
  <text x="${x+130}" y="148" text-anchor="middle" font-family="mono,monospace" font-size="14" fill="${C.mut}">${n}</text>
  <text x="${x+130}" y="175" text-anchor="middle" font-family="ttl,sans-serif" font-size="24" font-weight="700" fill="${COR}">${t}</text>
  ${d.split("\n").map((l,i)=>`<text x="${x+130}" y="${203+i*23}" text-anchor="middle" font-family="ttl,sans-serif" font-size="15" fill="${C.fg}">${l}</text>`).join("")}
  `).join("")}
  <!-- setas forward -->
  <line x1="482" y1="180" x2="577" y2="180" stroke="${COR}" stroke-width="2.5" marker-end="url(#arr3)"/>
  <line x1="842" y1="180" x2="937" y2="180" stroke="${COR}" stroke-width="2.5" marker-end="url(#arr3)"/>
  <!-- seta ok → entrega -->
  <line x1="1202" y1="180" x2="1340" y2="180" stroke="${C.acc}" stroke-width="2.5" marker-end="url(#arr3)"/>
  <rect x="1342" y="154" width="120" height="52" rx="10" fill="#22364f" stroke="${C.acc}" stroke-width="2"/>
  <text x="1402" y="185" text-anchor="middle" font-family="ttl,sans-serif" font-size="18" fill="${C.acc}">ENTREGA</text>
  <!-- seta loop ciano: AVALIA → GERA -->
  <path d="M1070,252 Q1070,320 710,320 Q350,320 350,252" fill="none" stroke="${CIANO}" stroke-width="2.5" stroke-dasharray="8,5" marker-end="url(#arrb3)"/>
  <text x="710" y="348" text-anchor="middle" font-family="ttl,sans-serif" font-size="15" fill="${CIANO}">ajusta e gera novamente (loop)</text>
  <!-- rótulo entrada -->
  <line x1="80" y1="180" x2="217" y2="180" stroke="${C.mut}" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#arr3)"/>
  <text x="42" y="185" text-anchor="middle" font-family="ttl,sans-serif" font-size="14" fill="${C.mut}">você</text>
  <text x="740" y="55" text-anchor="middle" font-family="ttl,sans-serif" font-size="26" font-weight="700" fill="${C.fg}">Sistema Mínimo de 3 Caixas — Kit T5</text>
</svg>`;

// ─── SVG 4 · M2 — Encadeamento de 4 etapas ───
const svgEncadeamento4 = `
<svg viewBox="0 0 1480 320" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr4" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="${C.acc}"/>
    </marker>
  </defs>
  ${[["E1","BRIEFING","tema + público\n+ tom",60],["E2","ESTRUTURA","IA organiza\nos blocos",390],["E3","RASCUNHO","IA escreve\ncada bloco",720],["E4","REVISÃO","avalia e\nentrega",1050]].map(([n,t,d,x])=>`
  <rect x="${x}" y="100" width="270" height="120" rx="14" fill="#22364f" stroke="${C.acc}" stroke-width="2.5"/>
  <text x="${x+135}" y="133" text-anchor="middle" font-family="mono,monospace" font-size="13" fill="${C.mut}">${n}</text>
  <text x="${x+135}" y="158" text-anchor="middle" font-family="ttl,sans-serif" font-size="22" font-weight="700" fill="${C.acc}">${t}</text>
  ${d.split("\n").map((l,i)=>`<text x="${x+135}" y="${180+i*22}" text-anchor="middle" font-family="ttl,sans-serif" font-size="14" fill="${C.fg}">${l}</text>`).join("")}
  ${x<1050?`<line x1="${x+272}" y1="160" x2="${x+387}" y2="160" stroke="${C.acc}" stroke-width="2.5" marker-end="url(#arr4)"/>`:""}`).join("")}
  <!-- label saída→entrada -->
  ${[390,720,1050].map(x=>`<text x="${x-15}" y="232" text-anchor="middle" font-family="ttl,sans-serif" font-size="11" fill="${C.mut}">saída→entrada</text>`).join("")}
  <text x="740" y="58" text-anchor="middle" font-family="ttl,sans-serif" font-size="24" font-weight="700" fill="${C.fg}">Encadeamento de 4 Etapas — saída de cada vira entrada da próxima</text>
</svg>`;

export const V = {
  // ══════════════════════════════════════════════════════════════════════
  // M1 — Pensar em sistemas, não em comandos
  // ══════════════════════════════════════════════════════════════════════
  "piramide-ia-deep-t5-m1": {
    ghost: "5.1",
    scenes: [
      // 1 · title
      {
        type: "title",
        eyebrow: "TRILHA 5 · MÓDULO 5.1 · SISTEMAS",
        lines: ["Pensar em sistemas,", "não em comandos"],
        accentLine: 2,
        sub: "O gargalo invisível: dez prompts bons, processo quebrado.",
        caption: "Módulo 5.1 — Pensar em sistemas",
        narration: "Bem-vindo ao Módulo cinco ponto um. Você vai entender por que dez prompts excelentes ainda podem travar o trabalho — e o que muda quando você começa a pensar em sistemas em vez de comandos isolados."
      },

      // 2 · lead — gargalo invisível
      {
        type: "lead",
        text: "Você tem <span class=\"accent\">prompts excelentes.</span><br/>O processo ainda trava.<br/><b>Isso é o gargalo invisível.</b>",
        caption: "O gargalo invisível",
        narration: "Imagine alguém com dez prompts bem escritos, uma biblioteca organizada, mas o trabalho ainda emperra toda semana. Por quê? Porque os prompts não se conversam. Cada etapa depende de você lembrar o que vem depois. O gargalo não está no prompt — está no processo. Isso é o gargalo invisível."
      },

      // 3 · topic — o que a IA faz num sistema
      {
        type: "topic",
        n: 1,
        name: "O que a IA faz num sistema",
        caption: "Tópico 1 — Papéis da IA no sistema",
        narration: "Tópico um: o que a inteligência artificial faz dentro de um sistema."
      },

      // 4 · cards — papéis da IA
      {
        type: "cards",
        kicker: "PAPÉIS DA IA",
        heading: "A IA pode ser mais de um desses ao mesmo tempo",
        cards: [
          { emoji: "🔍", name: "Interpretar", desc: "Lê contexto e identifica o que é pedido" },
          { emoji: "✍️", name: "Gerar", desc: "Produz texto, estrutura, código ou análise" },
          { emoji: "🔎", name: "Avaliar", desc: "Confere o resultado contra critérios definidos" },
          { emoji: "↔️", name: "Comparar", desc: "Pesa opções antes de recomendar um caminho" },
        ],
        caption: "Papéis: interpretar · gerar · avaliar · comparar",
        narration: "Num sistema, a inteligência artificial pode ocupar quatro papéis: interpretar o contexto, gerar a saída, avaliar se ela atende aos critérios, e comparar opções para recomendar a melhor. A decisão final sempre fica com o humano."
      },

      // 5 · steps — como desenhar um fluxo
      {
        type: "steps",
        kicker: "DESENHANDO O FLUXO",
        steps: [
          { name: "Listar as etapas", desc: "Escreva em papel cada passo do processo, do início à entrega" },
          { name: "Nomear as caixas", desc: "Cada etapa vira uma caixa: ação + responsável (IA ou humano)" },
          { name: "Traçar as setas", desc: "Conecte as caixas: o que sai de A entra em B" },
          { name: "Marcar pontos de decisão", desc: "Losango onde há bifurcação: ok → avança / não → ajusta" },
          { name: "Adicionar a seta de loop", desc: "Onde o fluxo pode voltar atrás para se corrigir" },
        ],
        caption: "5 passos para desenhar qualquer fluxo",
        narration: "Para desenhar um fluxo em papel, siga cinco passos: liste as etapas do processo; transforme cada uma em uma caixa com o responsável; conecte as caixas com setas; marque os pontos de decisão onde o resultado pode bifurcar; e adicione ao menos uma seta de retorno, onde o sistema pode corrigir a própria saída."
      },

      // 6 · compare — comando isolado × sistema conectado
      {
        type: "compare",
        kicker: "COMANDO × SISTEMA",
        bad: { label: "Comando isolado", text: "Você lembra o que vem depois. Cada prompt existe sozinho. O processo para quando você para." },
        good: { label: "Sistema conectado", text: "O processo decide o que vem depois. A saída de cada etapa alimenta a próxima. O fluxo continua sem depender da sua memória." },
        caption: "Comando isolado × sistema conectado",
        narration: "Veja a diferença: no comando isolado você é a memória do processo — lembra o que vem depois, cola resultado a resultado manualmente. No sistema conectado, o fluxo decide sozinho o que vem depois. A saída de cada etapa já é a entrada da próxima. O processo não depende de você estar no meio gerenciando cada transição."
      },

      // 7 · illus SVG — loop Pensar→Agir→Avaliar→Ajustar (seta de retorno ciano)
      {
        type: "illus",
        kicker: "LOOP DO SISTEMA",
        heading: "Pensar → Agir → Avaliar → Ajustar → Agir",
        svg: svgLoopM1,
        note: "Seta ciano = retorno ao passo Agir quando o critério não é atingido",
        caption: "Loop: Pensar → Agir → Avaliar → Ajustar → Agir",
        narration: "Este é o loop que transforma uma sequência linear num sistema que se corrige. Primeiro você pensa: define contexto e objetivo. Depois a inteligência artificial age e gera a saída. O sistema avalia: o critério foi atendido? Se sim, entrega. Se não, ajusta e volta para gerar novamente. A seta ciano representa esse retorno — o sistema aprende e se corrige sem você precisar reiniciar tudo do zero."
      },

      // 8 · illus SVG — comando isolado × fluxo conectado (visual)
      {
        type: "illus",
        kicker: "VISUALIZANDO A DIFERENÇA",
        heading: "Comando isolado × Fluxo conectado",
        svg: svgComandoVsFluxo,
        note: "Fluxo conectado: cada caixa entrega pro próximo sem intervenção manual",
        caption: "Antes e depois: comando isolado vs. fluxo",
        narration: "Olhando lado a lado: à esquerda, três prompts sem conexão — você é o elo entre eles. À direita, quatro caixas encadeadas — a saída de Entrada alimenta Gera, que alimenta Avalia, que alimenta Entrega. O processo funciona sem você estar no meio gerenciando cada passagem."
      },

      // 9 · bullets — onde o humano entra
      {
        type: "bullets",
        kicker: "HANDOFF IA × HUMANO",
        heading: "Marque cada caixa: IA ou H",
        items: [
          "🤖 IA: interpreta briefing, gera rascunho, avalia contra rubrica",
          "🧑 H: fornece contexto inicial, decide pontos de bifurcação alta",
          "🧑 H: aprova ou rejeita a entrega final",
          "⚠️ Três caixas IA seguidas sem H? Verifique se seu julgamento deveria estar ali",
        ],
        caption: "Handoffs: quem faz o quê em cada caixa",
        narration: "Cada caixa do fluxo precisa de um dono: a inteligência artificial ou o humano. A inteligência artificial interpreta, gera e avalia. O humano fornece o contexto inicial, decide nos pontos de bifurcação de alto impacto e aprova a entrega final. Regra prática: se você tiver três caixas de inteligência artificial seguidas sem nenhum humano no meio, pergunte se o seu julgamento deveria estar ali."
      },

      // 10 · cta
      {
        type: "cta",
        caption: "Continue em inema.club",
        narration: "Isso é conteúdo do INEMA ponto CLUB. Acesse: inema ponto club."
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // M2 — Montando um mini-sistema
  // ══════════════════════════════════════════════════════════════════════
  "piramide-ia-deep-t5-m2": {
    ghost: "5.2",
    scenes: [
      // 1 · title
      {
        type: "title",
        eyebrow: "TRILHA 5 · MÓDULO 5.2 · MINI-SISTEMA",
        lines: ["Montando um", "mini-sistema"],
        accentLine: 2,
        sub: "Do fluxo no papel ao executável num chat — sem instalar nada.",
        caption: "Módulo 5.2 — Montando um mini-sistema",
        narration: "Bem-vindo ao Módulo cinco ponto dois. Aqui você vai pegar o fluxo que desenhou no módulo anterior e transformá-lo em um sistema executável — diretamente num chat, sem ferramenta extra, sem código."
      },

      // 2 · lead — do papel ao chat
      {
        type: "lead",
        text: "Cada caixa do fluxo<br/>vira <span class=\"accent\">um prompt.</span><br/><b>A sequência é o sistema.</b>",
        caption: "Do fluxo no papel ao fluxo executável",
        narration: "A tradução é direta: cada caixa do fluxo vira um prompt. Você executa os prompts em sequência numa sessão de chat. A saída de cada mensagem alimenta a próxima. Você não precisa instalar nada, configurar nada. O chat já é o motor do sistema."
      },

      // 3 · topic — encadeamento de prompts
      {
        type: "topic",
        n: 1,
        name: "Encadeando prompts — saída → entrada",
        caption: "Tópico 1 — Encadeamento de prompts",
        narration: "Tópico um: encadeamento de prompts, onde a saída de cada etapa se torna a entrada da próxima."
      },

      // 4 · illus SVG — encadeamento de 4 etapas
      {
        type: "illus",
        kicker: "ENCADEAMENTO DE 4 ETAPAS",
        heading: "Briefing → Estrutura → Rascunho → Revisão",
        svg: svgEncadeamento4,
        note: "Cada seta dourada representa uma passagem: saída de uma etapa vira entrada da próxima",
        caption: "4 etapas encadeadas: saída→entrada",
        narration: "Veja as quatro etapas em cadeia. Etapa um: briefing — você fornece tema, público e tom. Etapa dois: a inteligência artificial organiza os blocos e entrega a estrutura. Etapa três: com a estrutura aprovada, a inteligência artificial escreve cada bloco. Etapa quatro: revisão — a inteligência artificial avalia o resultado contra seus critérios e entrega ou sinaliza o que ajustar. A saída de cada etapa é literalmente colada como entrada da próxima mensagem no chat."
      },

      // 5 · term — base de conhecimento
      {
        type: "term",
        kicker: "CONCEITO-CHAVE",
        term: "Base de conhecimento injetada",
        def: "Conjunto de referências que você cola no início do sistema: seus melhores prompts da Trilha 1, seu perfil de voz da Trilha 3, seus critérios de qualidade da Trilha 4. Em vez de refazer tudo a cada uso, você injeta o contexto acumulado como entrada da Caixa 1.",
        caption: "Base de conhecimento: o contexto acumulado vira entrada do sistema",
        narration: "Base de conhecimento injetada é o que transforma o chat num sistema que usa tudo que você já construiu. Em vez de explicar do zero toda vez, você cola no início do chat o seu melhor prompt da Trilha um, seu perfil de voz da Trilha três e seus critérios da Trilha quatro. A Caixa um recebe esse contexto rico e o sistema já começa no ponto certo."
      },

      // 6 · topic — loop de revisão
      {
        type: "topic",
        n: 2,
        name: "Loop de revisão com critérios objetivos",
        caption: "Tópico 2 — Loop de revisão",
        narration: "Tópico dois: o loop de revisão com critérios objetivos."
      },

      // 7 · steps — montando o loop de revisão
      {
        type: "steps",
        kicker: "LOOP DE REVISÃO",
        steps: [
          { name: "Defina os critérios antes", desc: "Liste três a cinco perguntas objetivas que a saída precisa responder com 'sim'" },
          { name: "Cole os critérios na Caixa 3", desc: "A avaliação usa exatamente essa rubrica, sem interpretação livre" },
          { name: "Peça um veredicto binário", desc: "ok ou ajusta — e peça a lista do que ajustar se for 'ajusta'" },
          { name: "Ajuste cirurgicamente", desc: "Não reescreva tudo: corrija só o que a avaliação apontou" },
          { name: "Repita até o critério ser atingido", desc: "O loop converge porque os critérios são objetivos e estáveis" },
        ],
        caption: "5 passos do loop de revisão",
        narration: "Para o loop de revisão funcionar: primeiro defina os critérios antes de rodar — três a cinco perguntas objetivas. Segundo, cole esses critérios na Caixa três para que a avaliação seja precisa. Terceiro, peça um veredicto binário: ok ou ajusta. Quarto, ajuste só o que foi apontado, sem reescrever tudo. Quinto, repita. O loop converge porque os critérios não mudam a cada rodada."
      },

      // 8 · illus SVG — sistema mínimo de 3 caixas com loop ciano
      {
        type: "illus",
        kicker: "SISTEMA MÍNIMO — KIT T5",
        heading: "Entrada → Gera → Avalia/Entrega",
        svg: svgSistema3Caixas,
        note: "Seta ciano = loop de ajuste: Avalia detecta problema, volta para Gera",
        caption: "Sistema mínimo de 3 caixas — executável hoje",
        narration: "Este é o sistema mínimo de três caixas — o Kit da Trilha cinco. Caixa um: Entrada — você fornece contexto completo, objetivo e base de conhecimento. Quanto mais rico, melhor a geração. Caixa dois: Gera — a inteligência artificial produz sem avaliar. Separar geração de avaliação melhora os dois. Caixa três: Avalia — usa critérios objetivos e decide: entrega ou loop. A seta ciano mostra o retorno: quando a avaliação detecta um problema, volta para Gera com a instrução de ajuste. Esse sistema é executável hoje, num chat, sem nenhuma ferramenta extra."
      },

      // 9 · cards — 5 perfis profissionais
      {
        type: "cards",
        kicker: "NA SUA PROFISSÃO",
        heading: "O sistema mínimo funciona em qualquer área",
        cards: [
          { emoji: "✍️", name: "Criador de conteúdo", desc: "C1: tema + público + tom · C2: gancho + desenvolvimento + CTA · C3: gancho para no scroll? CTA claro? tom correto?" },
          { emoji: "⚖️", name: "Advogado", desc: "C1: caso + normas + perfil cliente · C2: parecer com risco e recomendação · C3: cobriu os 3 riscos prioritários? linguagem adequada?" },
          { emoji: "💼", name: "Vendedor", desc: "C1: perfil lead + dor declarada · C2: proposta personalizada com CTA · C3: aborda a dor? CTA claro? tom correto?" },
          { emoji: "📊", name: "Gestor", desc: "C1: métricas semana + metas · C2: diagnóstico + decisões prioritárias · C3: cobre os bloqueios críticos?" },
        ],
        caption: "5 perfis: criador · advogado · vendedor · gestor · analista",
        narration: "O sistema mínimo de três caixas se adapta a qualquer profissão. Para o criador de conteúdo: entrada com tema e tom, geração do gancho e desenvolvimento, avaliação se o gancho prende e o chamado à ação está claro. Para o advogado: entrada com o caso e as normas, geração do parecer, avaliação dos três riscos prioritários. Para o vendedor: entrada com o perfil do lead, geração da proposta personalizada, avaliação se a dor foi abordada. Para o gestor: entrada com métricas da semana, geração do diagnóstico, avaliação dos bloqueios críticos. Escolha o mais próximo da sua realidade e adapte."
      },

      // 10 · compare — fluxo no papel × fluxo executável
      {
        type: "compare",
        kicker: "PAPEL × CHAT",
        bad: { label: "Fluxo no papel", text: "Documenta o processo mas não executa. Você ainda precisa traduzir cada caixa manualmente toda vez que rodar." },
        good: { label: "Fluxo executável no chat", text: "Cada caixa já é um prompt pronto. Você cola e executa. O sistema roda na sequência sem overhead de tradução." },
        caption: "Fluxo no papel × fluxo executável no chat",
        narration: "A diferença final: o fluxo no papel documenta o processo, mas você ainda traduz cada caixa manualmente toda vez. O fluxo executável no chat tem cada caixa já escrita como prompt — você cola, executa, e o sistema avança na sequência. O primeiro sistema que funciona vale mais do que o sistema perfeito que nunca saiu do papel."
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
