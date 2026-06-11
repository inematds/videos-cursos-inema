// Specs de vídeo profundo — Trilha 2 · Módulos 2.1 e 2.2
// Pirâmide da IA — INEMA.CLUB
// IDs: piramide-ia-deep-t2-m1 · piramide-ia-deep-t2-m2

const C = { bg2:"#1D2D44", bg3:"#3E5C76", fg:"#F0EBD8", mut:"#748CAB", acc:"#FFC300", code:"#2EC4B6", red:"#e07a7a" };
const COR = "#60a5fa"; // Trilha 2 — blue

// ─── SVGs ────────────────────────────────────────────────────────────────────

const svgTarefaDestinos = `<svg viewBox="0 0 1480 380" xmlns="http://www.w3.org/2000/svg">
  <rect width="1480" height="380" fill="#111827"/>
  <defs>
    <marker id="ah1" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto">
      <path d="M0,0 L9,5 L0,10 L2.5,5 Z" fill="${COR}"/>
    </marker>
    <marker id="ah2" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto">
      <path d="M0,0 L9,5 L0,10 L2.5,5 Z" fill="${C.acc}"/>
    </marker>
    <marker id="ah3" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto">
      <path d="M0,0 L9,5 L0,10 L2.5,5 Z" fill="${C.red}"/>
    </marker>
  </defs>

  <!-- Você -->
  <rect x="60" y="160" width="220" height="70" rx="14" fill="#22364f" stroke="${COR}" stroke-width="2.5"/>
  <text x="170" y="192" text-anchor="middle" fill="${C.fg}" font-size="26" class="ttl" font-family="Inter,sans-serif" font-weight="700">Você</text>
  <text x="170" y="218" text-anchor="middle" fill="${C.mut}" font-size="20" font-family="Inter,sans-serif">pede a tarefa</text>

  <!-- Seta Você→IA -->
  <line x1="282" y1="195" x2="410" y2="195" stroke="${COR}" stroke-width="2.5" marker-end="url(#ah1)"/>
  <text x="346" y="183" text-anchor="middle" fill="${C.mut}" font-size="18" font-family="Inter,sans-serif">prompt</text>

  <!-- IA -->
  <rect x="420" y="160" width="220" height="70" rx="14" fill="#22364f" stroke="${COR}" stroke-width="2.5"/>
  <text x="530" y="192" text-anchor="middle" fill="${C.fg}" font-size="26" class="ttl" font-family="Inter,sans-serif" font-weight="700">IA</text>
  <text x="530" y="218" text-anchor="middle" fill="${C.mut}" font-size="20" font-family="Inter,sans-serif">executa a tarefa</text>

  <!-- Seta IA → bifurcação -->
  <line x1="642" y1="195" x2="740" y2="195" stroke="${COR}" stroke-width="2.5"/>

  <!-- Ramo CIMA — intenção declarada -->
  <line x1="740" y1="195" x2="840" y2="100" stroke="${COR}" stroke-width="2.5" marker-end="url(#ah1)"/>
  <text x="765" y="130" fill="${COR}" font-size="18" font-family="Inter,sans-serif" font-weight="600">intenção declarada</text>

  <!-- Ramo BAIXO — intenção ausente -->
  <line x1="740" y1="195" x2="840" y2="290" stroke="${C.red}" stroke-width="2.5" marker-end="url(#ah3)"/>
  <text x="755" y="275" fill="${C.red}" font-size="18" font-family="Inter,sans-serif" font-weight="600">intenção ausente</text>

  <!-- Destino CIMA — atingido -->
  <rect x="850" y="60" width="310" height="80" rx="16" fill="#22364f" stroke="${C.acc}" stroke-width="3"/>
  <text x="1005" y="95" text-anchor="middle" fill="${C.acc}" font-size="26" class="ttl" font-family="Inter,sans-serif" font-weight="700">✓ Destino atingido</text>
  <text x="1005" y="124" text-anchor="middle" fill="${C.fg}" font-size="19" font-family="Inter,sans-serif">objetivo real alcançado</text>

  <!-- Destino BAIXO — tarefa cumprida, destino errado -->
  <rect x="850" y="250" width="310" height="80" rx="16" fill="#22364f" stroke="${C.red}" stroke-width="2.5"/>
  <text x="1005" y="285" text-anchor="middle" fill="${C.red}" font-size="26" class="ttl" font-family="Inter,sans-serif" font-weight="700">✗ Tarefa cumprida</text>
  <text x="1005" y="314" text-anchor="middle" fill="${C.mut}" font-size="19" font-family="Inter,sans-serif">destino errado — zero vendas</text>

  <!-- Labels rodapé -->
  <text x="170" y="360" text-anchor="middle" fill="${C.mut}" font-size="20" font-family="Inter,sans-serif" font-weight="600">TAREFA = meio</text>
  <text x="1005" y="360" text-anchor="middle" fill="${COR}" font-size="20" font-family="Inter,sans-serif" font-weight="600">INTENÇÃO = destino</text>
</svg>`;

const svgKitT2Bloco = `<svg viewBox="0 0 1480 400" xmlns="http://www.w3.org/2000/svg">
  <rect width="1480" height="400" fill="#111827"/>
  <defs>
    <marker id="ahk" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto">
      <path d="M0,0 L9,5 L0,10 L2.5,5 Z" fill="${C.acc}"/>
    </marker>
  </defs>

  <!-- Label topo -->
  <text x="740" y="44" text-anchor="middle" fill="${C.mut}" font-size="22" font-family="Inter,sans-serif" font-weight="600" class="ttl">KIT T2 — cola ANTES do prompt</text>

  <!-- Bloco Kit T2 -->
  <rect x="60" y="60" width="620" height="300" rx="18" fill="#22364f" stroke="${COR}" stroke-width="2.5"/>
  <text x="90" y="100" fill="${COR}" font-size="20" font-family="monospace" class="mono">Objetivo final: [efeito real no mundo].</text>
  <text x="90" y="134" fill="${COR}" font-size="20" font-family="monospace" class="mono">Público: [quem + estado atual].</text>
  <text x="90" y="168" fill="${COR}" font-size="20" font-family="monospace" class="mono">Efeito/decisão: [ação ou transformação].</text>
  <text x="90" y="202" fill="${COR}" font-size="20" font-family="monospace" class="mono">Se conflito, priorize: [persuasão].</text>
  <line x1="90" y1="220" x2="650" y2="220" stroke="${C.bg3}" stroke-width="1.5" stroke-dasharray="8,5"/>
  <text x="90" y="250" fill="${C.mut}" font-size="20" font-family="monospace" class="mono">--- Kit T1 normalmente ---</text>
  <text x="90" y="284" fill="${C.fg}" font-size="20" font-family="monospace" class="mono">Você é [PAPEL].</text>
  <text x="90" y="318" fill="${C.fg}" font-size="20" font-family="monospace" class="mono">Sua tarefa é [TAREFA]...</text>

  <!-- Seta central -->
  <line x1="700" y1="210" x2="800" y2="210" stroke="${C.acc}" stroke-width="3" marker-end="url(#ahk)"/>

  <!-- Bloco resultado -->
  <rect x="810" y="60" width="610" height="300" rx="18" fill="#22364f" stroke="${C.acc}" stroke-width="2.5"/>
  <text x="1115" y="100" text-anchor="middle" fill="${C.acc}" font-size="24" font-family="Inter,sans-serif" font-weight="700" class="ttl">Resultado direcionado</text>
  <text x="840" y="142" fill="${C.fg}" font-size="20" font-family="Inter,sans-serif">✓  Tom calibrado à intenção</text>
  <text x="840" y="180" fill="${C.fg}" font-size="20" font-family="Inter,sans-serif">✓  Estrutura que converte</text>
  <text x="840" y="218" fill="${C.fg}" font-size="20" font-family="Inter,sans-serif">✓  CTA alinhado ao objetivo</text>
  <text x="840" y="256" fill="${C.fg}" font-size="20" font-family="Inter,sans-serif">✓  Sem retrabalho de destino</text>
  <text x="840" y="330" fill="${C.mut}" font-size="18" font-family="Inter,sans-serif">A IA tem tarefa E destino.</text>
</svg>`;

// ─── SVGs M2 ─────────────────────────────────────────────────────────────────

const svgIntencoesPorArea = `<svg viewBox="0 0 1480 380" xmlns="http://www.w3.org/2000/svg">
  <rect width="1480" height="380" fill="#111827"/>
  <defs>
    <marker id="aha" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto">
      <path d="M0,0 L9,5 L0,10 L2.5,5 Z" fill="${COR}"/>
    </marker>
  </defs>

  <!-- 4 áreas — boxes esquerdos -->
  <rect x="40" y="40" width="240" height="64" rx="13" fill="#22364f" stroke="${COR}" stroke-width="2"/>
  <text x="160" y="68" text-anchor="middle" fill="${C.fg}" font-size="22" font-family="Inter,sans-serif" font-weight="700" class="ttl">Conteúdo</text>
  <text x="160" y="92" text-anchor="middle" fill="${C.mut}" font-size="18" font-family="Inter,sans-serif">engajar / vender / ensinar</text>

  <rect x="40" y="130" width="240" height="64" rx="13" fill="#22364f" stroke="${COR}" stroke-width="2"/>
  <text x="160" y="158" text-anchor="middle" fill="${C.fg}" font-size="22" font-family="Inter,sans-serif" font-weight="700" class="ttl">Vendas</text>
  <text x="160" y="182" text-anchor="middle" fill="${C.mut}" font-size="18" font-family="Inter,sans-serif">descoberta → decisão</text>

  <rect x="40" y="220" width="240" height="64" rx="13" fill="#22364f" stroke="${COR}" stroke-width="2"/>
  <text x="160" y="248" text-anchor="middle" fill="${C.fg}" font-size="22" font-family="Inter,sans-serif" font-weight="700" class="ttl">Gestão</text>
  <text x="160" y="272" text-anchor="middle" fill="${C.mut}" font-size="18" font-family="Inter,sans-serif">habilitar decisão</text>

  <rect x="40" y="310" width="240" height="64" rx="13" fill="#22364f" stroke="${COR}" stroke-width="2"/>
  <text x="160" y="338" text-anchor="middle" fill="${C.fg}" font-size="22" font-family="Inter,sans-serif" font-weight="700" class="ttl">Atendimento</text>
  <text x="160" y="362" text-anchor="middle" fill="${C.mut}" font-size="18" font-family="Inter,sans-serif">resolver + fidelizar</text>

  <!-- Setas para centro -->
  <line x1="282" y1="72" x2="560" y2="195" stroke="${COR}" stroke-width="1.8" marker-end="url(#aha)"/>
  <line x1="282" y1="162" x2="560" y2="195" stroke="${COR}" stroke-width="1.8" marker-end="url(#aha)"/>
  <line x1="282" y1="252" x2="560" y2="205" stroke="${COR}" stroke-width="1.8" marker-end="url(#aha)"/>
  <line x1="282" y1="342" x2="560" y2="215" stroke="${COR}" stroke-width="1.8" marker-end="url(#aha)"/>

  <!-- Centro — intenção -->
  <rect x="560" y="148" width="300" height="100" rx="18" fill="#22364f" stroke="${C.acc}" stroke-width="3"/>
  <text x="710" y="185" text-anchor="middle" fill="${C.acc}" font-size="26" font-family="Inter,sans-serif" font-weight="700" class="ttl">Intenção</text>
  <text x="710" y="215" text-anchor="middle" fill="${C.fg}" font-size="20" font-family="Inter,sans-serif">declarada no prompt</text>
  <text x="710" y="238" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">"Meu objetivo real aqui é ___"</text>

  <!-- Setas do centro para resultados -->
  <line x1="862" y1="185" x2="980" y2="80" stroke="${C.acc}" stroke-width="1.8" marker-end="url(#aha)"/>
  <line x1="862" y1="198" x2="980" y2="198" stroke="${C.acc}" stroke-width="1.8" marker-end="url(#aha)"/>
  <line x1="862" y1="212" x2="980" y2="310" stroke="${C.acc}" stroke-width="1.8" marker-end="url(#aha)"/>

  <!-- Resultados direita -->
  <rect x="990" y="42" width="440" height="76" rx="14" fill="#22364f" stroke="${C.acc}" stroke-width="2"/>
  <text x="1210" y="76" text-anchor="middle" fill="${C.acc}" font-size="22" font-family="Inter,sans-serif" font-weight="700" class="ttl">Tom calibrado</text>
  <text x="1210" y="102" text-anchor="middle" fill="${C.fg}" font-size="18" font-family="Inter,sans-serif">linguagem certa para cada contexto</text>

  <rect x="990" y="160" width="440" height="76" rx="14" fill="#22364f" stroke="${C.acc}" stroke-width="2"/>
  <text x="1210" y="194" text-anchor="middle" fill="${C.acc}" font-size="22" font-family="Inter,sans-serif" font-weight="700" class="ttl">Resultado útil</text>
  <text x="1210" y="220" text-anchor="middle" fill="${C.fg}" font-size="18" font-family="Inter,sans-serif">não apenas correto — direcionado</text>

  <rect x="990" y="280" width="440" height="76" rx="14" fill="#22364f" stroke="${C.acc}" stroke-width="2"/>
  <text x="1210" y="314" text-anchor="middle" fill="${C.acc}" font-size="22" font-family="Inter,sans-serif" font-weight="700" class="ttl">Ação gerada</text>
  <text x="1210" y="340" text-anchor="middle" fill="${C.fg}" font-size="18" font-family="Inter,sans-serif">clique, assinatura, decisão, fidelidade</text>
</svg>`;

const svgAtalhoProfissoes = `<svg viewBox="0 0 1480 380" xmlns="http://www.w3.org/2000/svg">
  <rect width="1480" height="380" fill="#111827"/>

  <!-- Label topo -->
  <text x="740" y="40" text-anchor="middle" fill="${C.mut}" font-size="22" font-family="Inter,sans-serif" font-weight="600" class="ttl">ATALHO DO RETARDATÁRIO — 5 profissões · 1 frase</text>

  <!-- Frase central destaque -->
  <rect x="400" y="52" width="680" height="64" rx="16" fill="#22364f" stroke="${C.acc}" stroke-width="3"/>
  <text x="740" y="80" text-anchor="middle" fill="${C.acc}" font-size="26" font-family="monospace" font-weight="700" class="mono">"Meu objetivo real aqui é ___."</text>
  <text x="740" y="106" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">Cole ao fim de qualquer prompt. 10 segundos.</text>

  <!-- 5 perfis -->
  <rect x="40" y="144" width="256" height="210" rx="14" fill="#22364f" stroke="${COR}" stroke-width="2"/>
  <text x="168" y="176" text-anchor="middle" fill="${COR}" font-size="22" font-family="Inter,sans-serif" font-weight="700" class="ttl">Professor</text>
  <text x="168" y="206" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">que o aluno</text>
  <text x="168" y="228" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">consiga fazer [X]</text>
  <text x="168" y="252" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">sem minha ajuda</text>
  <text x="168" y="330" text-anchor="middle" fill="${C.fg}" font-size="15" font-family="Inter,sans-serif">aula → tarefa concreta</text>

  <rect x="314" y="144" width="256" height="210" rx="14" fill="#22364f" stroke="${COR}" stroke-width="2"/>
  <text x="442" y="176" text-anchor="middle" fill="${COR}" font-size="22" font-family="Inter,sans-serif" font-weight="700" class="ttl">Advogado</text>
  <text x="442" y="206" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">que o cliente saia</text>
  <text x="442" y="228" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">com recomendação</text>
  <text x="442" y="252" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">clara, não dúvida</text>
  <text x="442" y="330" text-anchor="middle" fill="${C.fg}" font-size="15" font-family="Inter,sans-serif">parecer → decisão</text>

  <rect x="588" y="144" width="256" height="210" rx="14" fill="#22364f" stroke="${C.acc}" stroke-width="2.5"/>
  <text x="716" y="176" text-anchor="middle" fill="${C.acc}" font-size="22" font-family="Inter,sans-serif" font-weight="700" class="ttl">Vendedor</text>
  <text x="716" y="206" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">um sim para</text>
  <text x="716" y="228" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">conversa — não</text>
  <text x="716" y="252" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">para compra agora</text>
  <text x="716" y="330" text-anchor="middle" fill="${C.fg}" font-size="15" font-family="Inter,sans-serif">follow-up → reunião</text>

  <rect x="862" y="144" width="256" height="210" rx="14" fill="#22364f" stroke="${COR}" stroke-width="2"/>
  <text x="990" y="176" text-anchor="middle" fill="${COR}" font-size="22" font-family="Inter,sans-serif" font-weight="700" class="ttl">Gestor</text>
  <text x="990" y="206" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">lista de ações</text>
  <text x="990" y="228" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">por pessoa —</text>
  <text x="990" y="252" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">não relatório</text>
  <text x="990" y="330" text-anchor="middle" fill="${C.fg}" font-size="15" font-family="Inter,sans-serif">análise → decisão</text>

  <rect x="1136" y="144" width="256" height="210" rx="14" fill="#22364f" stroke="${COR}" stroke-width="2"/>
  <text x="1264" y="176" text-anchor="middle" fill="${COR}" font-size="22" font-family="Inter,sans-serif" font-weight="700" class="ttl">Criador</text>
  <text x="1264" y="206" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">espectador FAÇA</text>
  <text x="1264" y="228" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">algo durante</text>
  <text x="1264" y="252" text-anchor="middle" fill="${C.mut}" font-size="17" font-family="Inter,sans-serif">o play</text>
  <text x="1264" y="330" text-anchor="middle" fill="${C.fg}" font-size="15" font-family="Inter,sans-serif">conteúdo → ação</text>
</svg>`;

// ─── VÍDEO M1 ────────────────────────────────────────────────────────────────

export const V = {
  "piramide-ia-deep-t2-m1": {
    ghost: "2.1",
    scenes: [
      {
        type: "title",
        eyebrow: "PIRÂMIDE DA IA · TRILHA 2 · MÓDULO 2.1",
        lines: ["Tarefa", "× Intenção"],
        accentLine: 2,
        sub: "O post que vendeu zero — e o que estava faltando",
        caption: "Módulo 2.1 — Tarefa × Intenção",
        narration: "Módulo dois ponto um: Tarefa versus Intenção. Você vai entender por que um prompt impecável pode gerar zero resultado — e como declarar a intenção que muda tudo.",
      },
      {
        type: "lead",
        text: "O post estava <span class=\"accent\">perfeitamente escrito</span>.<br/>E não gerou <b>nenhuma venda</b>.",
        caption: "O caso do post que vendeu zero",
        narration: "O prompt pedia um texto sobre o produto. A IA entregou exatamente isso: texto bonito, bem estruturado, correto. E o resultado? Zero vendas. O problema não estava no prompt. A intenção real nunca foi declarada.",
      },
      {
        type: "illus",
        kicker: "TAREFA É O MEIO · INTENÇÃO É O DESTINO",
        heading: "A mesma tarefa — dois destinos possíveis",
        svg: svgTarefaDestinos,
        note: "Sem intenção declarada, a IA escolhe o destino por conta própria — e quase sempre escolhe o padrão mais seguro: informar.",
        caption: "Tarefa → destino atingido ou destino errado",
        narration: "Olha esse diagrama. Você pede a tarefa, a IA executa. Mas com intenção declarada, o resultado chega no destino certo. Sem ela, a IA acerta a tarefa e erra o destino. É isso que aconteceu com o post que vendeu zero.",
      },
      {
        type: "compare",
        kicker: "TAREFA × INTENÇÃO",
        bad: {
          label: "Tarefa sem intenção",
          text: "Escreva um texto sobre o curso de fotografia.\n\n→ IA escolhe informar (padrão mais seguro)\n→ Texto bonito, didático, zero CTA de venda\n→ Leitor aprende e vai embora",
        },
        good: {
          label: "Tarefa + intenção declarada",
          text: "Objetivo final: leitor clica no link da bio e se inscreve.\nPúblico: seguidores que me acompanham há 3+ meses, ainda indecisos.\nEfeito: urgência para a decisão acontecer hoje.\n\n→ Post com história pessoal, prova social, CTA direto\n→ \"Turma fecha sexta. Link na bio.\"",
        },
        caption: "Mesma tarefa — resultados completamente diferentes",
        narration: "À esquerda: tarefa sem intenção. A IA entrega o que foi pedido — e só isso. À direita: intenção declarada. Agora a IA sabe onde o resultado precisa chegar. O texto muda completamente.",
      },
      {
        type: "topic",
        n: 1,
        name: "As 6 perguntas da intenção",
        caption: "Tópico 1 — 6 perguntas que revelam o que estava vazio",
        narration: "Tópico um: as seis perguntas da intenção. Duas minutos aqui poupam vinte de retrabalho depois.",
      },
      {
        type: "steps",
        kicker: "AS 6 PERGUNTAS — RODE ANTES DE QUALQUER PEDIDO IMPORTANTE",
        steps: [
          { name: "Qual é o objetivo final?", desc: "Não a tarefa — o resultado no mundo real. '200 cliques no link' é objetivo. 'Um post escrito' é tarefa." },
          { name: "Qual transformação quero causar?", desc: "Leitor começa em A (desconhece/desconfia) e precisa chegar em B (sabe/decide). Qual distância o texto cobre?" },
          { name: "Qual decisão isso vai habilitar?", desc: "Comprar, aprovar, agendar, compartilhar. Se não há decisão, por que o texto existe?" },
          { name: "Quem vai ler — e em que estado?", desc: "Não apenas 'meu público' — está convencido? Comparando preços? Cada estado pede um texto diferente." },
          { name: "Qual efeito emocional e prático?", desc: "Emocional: confiança, urgência, curiosidade. Prático: clicar, salvar, preencher. Declare os dois." },
          { name: "Por que isso importa agora?", desc: "'É época de matrículas', 'o produto acaba amanhã' — contexto temporal muda o tom e a estrutura." },
        ],
        caption: "6 perguntas que revelam a intenção que ainda não foi articulada",
        narration: "Seis perguntas. Você não precisa responder todas toda vez — responda as que você ainda não sabe. Essas são exatamente as que estavam vazias no seu prompt. Uma pergunta respondida a mais já muda a resposta.",
      },
      {
        type: "cards",
        kicker: "O MESMO POST — 3 INTENÇÕES — 3 TEXTOS COMPLETAMENTE DISTINTOS",
        heading: "Produto: curso de fotografia para iniciantes. Tarefa: escreva um post.",
        cards: [
          { emoji: "📚", name: "Intenção: informar", desc: "Dica concreta, linguagem acessível. Sem preço, sem CTA de compra. 'Salva esse post pra usar na próxima saída.'" },
          { emoji: "💰", name: "Intenção: vender ← real", desc: "História pessoal, prova social, urgência. 'Turma fecha sexta. Link na bio.' Só essa intenção gera inscrições." },
          { emoji: "🏆", name: "Intenção: autoridade", desc: "Posicionamento, dados, lista de erros comuns. Sem CTA de venda. 'Se conhece alguém que quer aprender, encaminha.'" },
        ],
        caption: "Mesma tarefa — 3 intenções — 3 textos que nem parecem falar do mesmo produto",
        narration: "O criador do post que vendeu zero pediu um texto sem declarar intenção. A IA escolheu informar — o padrão mais seguro. O resultado foi o texto do tipo um: bonito, educativo, com zero vendas. Porque a intenção real era vender. Prompt melhor não resolveria isso. Só intenção declarada resolve.",
      },
      {
        type: "bullets",
        kicker: "O CUSTO DE RESPONDER BEM PRO ALVO ERRADO",
        heading: "Qualidade técnica com intenção errada é ativo negativo",
        items: [
          "Post recebeu curtidas e elogios — criador ficou satisfeito (métrica errada)",
          "Leitor aprendeu algo útil, agradeceu e foi embora sem clicar no link",
          "Texto educativo treinou o leitor a esperar dicas gratuitas — CTA de compra virou surpresa estranha",
          "Muitos elogios + zero resultado = ciclo de retrabalho sem entender o porquê",
        ],
        caption: "Texto bonito = falsa sensação de sucesso quando a intenção estava errada",
        narration: "Esse é o mecanismo do dano. Texto bonito cria uma falsa sensação de sucesso. Você avalia pela aparência — curtidas, elogios — e não pelo efeito real. A métrica certa era cliques no link, não curtidas. Defina a métrica antes de pedir o texto.",
      },
      {
        type: "term",
        kicker: "KIT T2 — BLOCO DE INTENÇÃO — COLA ANTES DO PROMPT",
        text: `Objetivo final: [o efeito real que quero no mundo].
Público: [quem vai ler/usar + estado atual].
Efeito/decisão que quero gerar: [ação ou transformação].
Se precisar escolher, priorize: [clareza | persuasão | precisão | velocidade].

--- (agora o Kit T1 normalmente) ---
Você é [PAPEL]. Sua tarefa é [TAREFA]...`,
        note: "O campo 'priorize' é para quando intenção e clareza entram em conflito. Declare — a IA resolve o conflito por você.",
        caption: "Kit T2 — o bloco que vai antes do prompt e declara o destino",
        narration: "Esse é o Kit T2: o bloco de intenção que vai antes do prompt. Com ele, a IA tem tarefa e destino. Copie, preencha, cole antes do próximo pedido importante. Dois minutos que evitam vinte de retrabalho.",
      },
      {
        type: "illus",
        kicker: "COMO OS DOIS KITS SE ENCAIXAM",
        heading: "Kit T2 (intenção) + Kit T1 (prompt) = resultado direcionado",
        svg: svgKitT2Bloco,
        note: "Kit T2 declara o destino. Kit T1 descreve a tarefa. Juntos, a IA tem tudo para calibrar cada palavra.",
        caption: "Kit T2 antes do Kit T1 — destino + tarefa = sem retrabalho",
        narration: "Olha como os dois blocos se encaixam. O Kit T2 fica antes: objetivo, público, efeito, prioridade. Depois vem o Kit T1 com papel, tarefa, contexto e formato. A IA processa os dois — e o resultado já nasce no destino certo.",
      },
      {
        type: "steps",
        kicker: "CHECKLIST DE INTENÇÃO — 30 SEGUNDOS ANTES DE APERTAR ENTER",
        steps: [
          { name: "Eu sei qual é o efeito real que quero?", desc: "Não a tarefa — o que muda no mundo quando esse resultado existir." },
          { name: "Eu declarei esse efeito no prompt?", desc: "Se não, a intenção está na sua cabeça — onde a IA não acessa." },
          { name: "O público está definido (com estado atual)?", desc: "Não só 'meu público' — está convencido? Indeciso? Comparando preços?" },
          { name: "A intenção está em conflito com a tarefa?", desc: "Se há conflito entre informar e vender, declare a prioridade." },
          { name: "⭐ Se a IA acertar o que pedi, eu fico feliz?", desc: "Se a resposta é 'depende' — a intenção não está clara. Volte e declare antes de apertar enter." },
        ],
        caption: "Checklist de 5 itens · 30 segundos · previne o ciclo de retrabalho",
        narration: "Cinco itens, trinta segundos. O item cinco é o mais poderoso: simule mentalmente a resposta antes de pedir. Se você pensa 'depende de como ela escrever' — a intenção não está clara. Volte e declare.",
      },
      {
        type: "cta",
        caption: "Continue em inema.club",
        narration: "Isso é conteúdo do INEMA ponto CLUB. Acesse: inema ponto club.",
      },
    ],
  },

  // ─── VÍDEO M2 ───────────────────────────────────────────────────────────────

  "piramide-ia-deep-t2-m2": {
    ghost: "2.2",
    scenes: [
      {
        type: "title",
        eyebrow: "PIRÂMIDE DA IA · TRILHA 2 · MÓDULO 2.2",
        lines: ["Intenção", "Aplicada"],
        accentLine: 2,
        sub: "Conteúdo, vendas, gestão, atendimento — e o Atalho do Retardatário",
        caption: "Módulo 2.2 — Intenção Aplicada a Resultado",
        narration: "Módulo dois ponto dois: Intenção Aplicada a Resultado. Você entendeu o princípio — agora é hora de aplicar no seu trabalho real. Conteúdo, vendas, gestão, atendimento e cinco perfis profissionais.",
      },
      {
        type: "lead",
        text: "A IA executa <span class=\"accent\">com igual competência</span><br/>'fechar o ticket' e 'transformar um cliente frustrado<br/>em defensor da marca'.<br/><b>Você declara qual.</b>",
        caption: "A intenção que você declara é o destino que a IA persegue",
        narration: "A IA não escolhe o nível de ambição da resposta — você declara. O mesmo pedido com intenção de 'fechar o ticket' gera uma resposta completamente diferente de um pedido com intenção de 'transformar esse cliente em defensor da marca'.",
      },
      {
        type: "illus",
        kicker: "INTENÇÃO EM 4 ÁREAS — UM PRINCÍPIO, QUATRO CONTEXTOS",
        heading: "Conteúdo · Vendas · Gestão · Atendimento",
        svg: svgIntencoesPorArea,
        note: "Em cada área, a intenção declarada filtra o que é relevante do que é apenas completo — e calibra tom, estrutura e CTA.",
        caption: "Um princípio · quatro contextos · mesma mecânica",
        narration: "Olha o mapa. Quatro áreas à esquerda — conteúdo, vendas, gestão, atendimento. Todas convergem para um ponto central: a intenção declarada. E dessa intenção saem os três resultados que importam: tom calibrado, resultado útil e ação gerada.",
      },
      {
        type: "cards",
        kicker: "INTENÇÃO EM CONTEÚDO — O QUE O PÚBLICO FAZ DEPOIS?",
        heading: "5 intenções de conteúdo — cada uma pede uma pergunta diferente",
        cards: [
          { emoji: "💬", name: "Engajar", desc: "O que quero que o leitor sinta ou faça nos primeiros 30 segundos? → comentário, salvamento" },
          { emoji: "💰", name: "Vender", desc: "Qual é o único passo que preciso que ele tome após ler? → clique no link, inscrição" },
          { emoji: "📚", name: "Ensinar", desc: "O que ele vai conseguir fazer depois de consumir? → seguir, recomendar" },
          { emoji: "🏆", name: "Posicionar / Viralizar", desc: "Como ele me percebe depois? / Por que encaminharia isso? → compartilhamento, indicação" },
        ],
        caption: "Um post, uma intenção dominante — misturar dilui tudo",
        narration: "Em conteúdo, a regra é simples: um post, uma intenção dominante. Se você mistura vender e ensinar no mesmo texto, o leitor não sabe o que fazer. Curtidas não contam como intenção declarada.",
      },
      {
        type: "steps",
        kicker: "INTENÇÃO EM VENDAS — ONDE O LEITOR ESTÁ NO PROCESSO?",
        steps: [
          { name: "Descoberta — despertar curiosidade", desc: "Objetivo: quem nunca ouviu falar percebe que tem um problema que você resolve. Zero menção a preço. CTA: 'você passa por isso também?'" },
          { name: "Consideração — remover objeções", desc: "Objetivo: quem está comparando opções escolhe a sua. Diferencial + prova social + garantia. CTA: 'veja os resultados de quem usou'." },
          { name: "Decisão — gerar ação agora", desc: "Objetivo: quem já quer comprar aperta o botão hoje. Texto curto, urgência real, garantia em destaque. CTA único: 'clique aqui e garanta hoje'." },
        ],
        caption: "Mesma IA · mesmo produto · três intenções de etapa → três textos radicalmente diferentes",
        narration: "Em vendas, a intenção muda conforme a etapa do cliente. Descoberta, consideração ou decisão — cada uma pede um texto diferente. A pergunta que salva qualquer copy: qual é a única coisa que quero que o leitor faça ao terminar? Se a resposta tem 'e' — a intenção está errada.",
      },
      {
        type: "compare",
        kicker: "INTENÇÃO EM GESTÃO — ANÁLISE COMPLETA × ANÁLISE ÚTIL",
        bad: {
          label: "Sem intenção de decisão",
          text: "'Analise os dados de vendas do trimestre.'\n\n→ Relatório com 100 dados: 40 relevantes + 60 irrelevantes\n→ 20 minutos filtrando o que importa\n→ Só descrição, sem recomendação",
        },
        good: {
          label: "Com intenção de decisão",
          text: "'Analise os dados do trimestre para que eu possa decidir se mantenho, expando ou descontinuo o produto X. Destaque apenas o que afeta essa decisão. Classifique: continua / ajusta / descontinua.'\n\n→ Apenas dados relevantes para a decisão\n→ Recomendação clara em 5 minutos",
        },
        caption: "'para que eu possa decidir [X]' — a frase que transforma análise em decisão",
        narration: "A frase que transforma qualquer análise em decisão é: 'para que eu possa decidir X'. Ela reorienta a IA do que é completo para o que é relevante. Decisão tomada em cinco minutos — não em duas horas.",
      },
      {
        type: "cards",
        kicker: "ALINHAR TOM À INTENÇÃO — O CONFLITO MAIS SILENCIOSO",
        heading: "Tom é a embalagem da intenção — conflito entre os dois sabota o resultado",
        cards: [
          { emoji: "🎯", name: "Venda → tom urgente e direto", desc: "Frases curtas, segunda pessoa, benefício antes de feature. Tom acadêmico aqui sabota: explica tudo corretamente e não gera ação." },
          { emoji: "📖", name: "Autoridade → tom confiante", desc: "Dados, perspectiva própria, posição clara. Tom neutro demais não é memorável — e sem evidência vira arrogância." },
          { emoji: "🤝", name: "Atendimento → tom humano", desc: "Reconhece o sentimento, ação concreta, responsabilidade assumida. Tom corporativo formal transforma pessoa em ticket." },
        ],
        caption: "Declare 3 adjetivos de tom no Kit T2 — a IA calibra cada palavra por eles",
        narration: "O conflito mais comum e mais silencioso: intenção de venda com tom acadêmico. O texto explica tudo corretamente e não gera nenhuma ação. No Kit T2, declare três adjetivos de tom — a IA usa os três para calibrar a resposta.",
      },
      {
        type: "term",
        kicker: "ATALHO DO RETARDATÁRIO — 10 SEGUNDOS, FUNCIONA AGORA",
        text: `"Meu objetivo real aqui é ___."

Cole ao fim de qualquer prompt. Exemplos:

[CRIADOR]  Escreva um post sobre meu produto.
           Meu objetivo real aqui é fazer leitores clicarem no link da bio.

[PROFESSOR] Crie uma aula sobre ciclo hidrológico.
            Meu objetivo real aqui é que os alunos consigam explicar para os pais em casa.

[VENDEDOR]  Escreva um follow-up para o lead frio.
            Meu objetivo real aqui é conseguir uma reunião de 15 minutos — não fechar venda agora.

[GESTOR]    Resuma as reclamações do mês.
            Meu objetivo real aqui é identificar as 3 causas-raiz que eliminam 80% dos problemas.`,
        note: "A IA processa o pedido inteiro — essa frase no final reorienta a resposta retroativamente. É uma instrução de meta-nível que supera as instruções de detalhe.",
        caption: "Atalho do Retardatário — copie, preencha, cole. Funciona em qualquer prompt.",
        narration: "Quem entra tarde não tem tempo para refazer todos os hábitos de uma vez. O Atalho do Retardatário funciona em dez segundos: ao fim de qualquer prompt, escreva 'meu objetivo real aqui é' e complete com o efeito real. A IA reorienta a resposta inteira por essa frase.",
      },
      {
        type: "illus",
        kicker: "NA SUA PROFISSÃO — 5 PERFIS · 1 PRINCÍPIO",
        heading: "Professor · Advogado · Vendedor · Gestor · Criador",
        svg: svgAtalhoProfissoes,
        note: "Leia o seu perfil. A intenção dominante da sua profissão é diferente — mas a mecânica é a mesma para todos.",
        caption: "5 profissões · a frase de 10 segundos · o mesmo princípio",
        narration: "Cinco perfis, um princípio. Professor: a aula deve fazer o aluno conseguir fazer algo sem a sua ajuda. Advogado: o parecer deve gerar uma recomendação clara, não mais dúvidas. Vendedor: o follow-up deve gerar uma reunião, não uma venda agora. Gestor: a análise deve gerar uma lista de ações, não um relatório para arquivar. Criador: o conteúdo deve fazer o espectador agir durante o play.",
      },
      {
        type: "bullets",
        kicker: "RESUMO DO MÓDULO 2.2",
        heading: "Intenção aplicada — os 7 pontos que ficam",
        items: [
          "Em conteúdo: defina qual ação o público toma ao terminar — curtida não conta",
          "Em vendas: um texto, uma decisão. Se tem 'e' na intenção, a intenção está errada",
          "Em gestão: 'para que eu possa decidir [X]' transforma análise completa em análise útil",
          "Em atendimento: declare o estado emocional que o cliente deve ter ao terminar de ler",
          "Tom e intenção devem estar alinhados — conflito entre os dois é causa de textos que não funcionam",
          "Atalho do Retardatário: 'Meu objetivo real aqui é ___.' — 10 segundos, qualquer prompt",
          "Próxima trilha: Contexto — intenção declara o destino, contexto entrega o mapa",
        ],
        caption: "7 pontos · Módulo 2.2 · Pirâmide da IA",
        narration: "Sete pontos para levar. Intenção em conteúdo, vendas, gestão e atendimento — mesma mecânica, contextos diferentes. Tom alinhado à intenção. O atalho que funciona em dez segundos. E na próxima trilha: contexto, o mapa que a IA ainda não tem.",
      },
      {
        type: "cta",
        caption: "Continue em inema.club",
        narration: "Isso é conteúdo do INEMA ponto CLUB. Acesse: inema ponto club.",
      },
    ],
  },
};
