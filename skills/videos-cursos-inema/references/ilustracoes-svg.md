# Ilustrações SVG (cena `illus`) — o coração do vídeo profundo

O vídeo profundo se diferencia da intro por **ilustrar o conceito**, não só listar. Cada tópico
ganha 2–4 SVGs próprios. SVG renderiza perfeito no HyperFrames (é HTML/Chrome).

## Regras

- `viewBox="0 0 1480 H"` — largura 1480 casa com `.illus` (que tem `width:1480px`). Altura ~320–480.
- Paleta (mesma do tema): bg `#0D1321`, painel `#1D2D44`/`#22364f`/`#24395a`, borda `#3E5C76`,
  texto `#F0EBD8`, secundário `#748CAB`, **accent âmbar `#FFC300`**, código `#2EC4B6`, vermelho `#e07a7a` (lado "errado").
- Fontes via classe no `<text>`: `class="ttl"` (Sora bold, títulos), `class="mono"` (JetBrains, código/tokens),
  sem classe = Inter. Tamanhos generosos (26–44px) — é vídeo, não web.
- Um accent dominante (âmbar). Use o vermelho só pra "❌/não faz/erro".
- Gere repetição com `.map().join("")` dentro do template literal (ex.: passos, tokens, nós de rede).

## Padrões que funcionam (reaproveite)

- **Fluxo de N passos:** retângulos arredondados + círculo numerado âmbar + seta âmbar entre eles.
- **Antes/Depois ❌×✅:** dois painéis lado a lado — esquerdo borda vermelha (`#7a3b3b`, fundo `#2a1c1c`),
  direito borda âmbar. Itens com ❌/✅.
- **Rede neural / "aprende padrões":** 3 colunas de `<circle>` ligadas por `<line>` cinza; saídas em âmbar.
- **Tokenização / geração token-a-token:** "chips" (`<rect>`+`<text class="mono">`) por token; destaque o
  último em âmbar; caixa lateral com "98%" pra ilustrar probabilidade.
- **Comparação/tabela:** grade de `<rect>` com cabeçalho âmbar.
- **Pilha de documentos / corpus:** 3 `<rect>` levemente deslocados + linhas (`<rect>` finos) simulando texto.

## Animação

A engine já dá fade/stagger nos elementos `.anim` da cena (o wrapper do SVG é um deles). Pra MVP, o SVG
entra como um todo — já fica ótimo. Se quiser animar partes internas, é possível via GSAP marcando grupos,
mas não é necessário pra um bom resultado.

## Dica de processo

Esboce o SVG como função/constante no topo do spec (ex.: `const svgRede = \`<svg ...>\``) e referencie em
`{ type: "illus", svg: svgRede, ... }`. Veja exemplos reais em `fep-videos/specs-deep.mjs`
(svgTrain, svgSteps, svgVs, svgTokens do tópico llm-basics).
