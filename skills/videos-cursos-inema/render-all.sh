#!/usr/bin/env bash
# render-all.sh — gera TODOS os vídeos do curso Pirâmide da IA (20 vídeos),
# move os MP4 pra yt-pub-lives2/imports/videos/ e avisa no openpcbot ao final.
# Pipeline por id: write-txt -> tts <voz> -> build (16:9) -> render.
# Pula ids que já tenham MP4 em renders/ (idempotente — reentrante).
set -uo pipefail
cd "$(dirname "$0")"

NOTIFY="/home/nmaldaner/projetos/openpcbot/scripts/notify.sh"
DEST="/home/nmaldaner/projetos/yt-pub-lives2/imports/videos"
LOG="render-all.log"
: > "$LOG"

# Partes 1 e 2 (voz rachel)
SHORT=(
  piramide-ia-00-overview
  piramide-ia-01-t1-prompt
  piramide-ia-01-t2-intencao
  piramide-ia-01-t3-contexto
  piramide-ia-01-t4-aproveitamento
  piramide-ia-01-t5-arquitetura
  piramide-ia-01-t6-evolucao
)
# Parte 3 (voz bella)
DEEP=(
  piramide-ia-deep-t1-m0 piramide-ia-deep-t1-m1 piramide-ia-deep-t1-m2
  piramide-ia-deep-t2-m1 piramide-ia-deep-t2-m2
  piramide-ia-deep-t3-m1 piramide-ia-deep-t3-m2
  piramide-ia-deep-t4-m1 piramide-ia-deep-t4-m2
  piramide-ia-deep-t5-m1 piramide-ia-deep-t5-m2
  piramide-ia-deep-t6-m1 piramide-ia-deep-t6-m2
)

OK=0; FAIL=0; SKIP=0; FAILED_IDS=""

one() {
  local id="$1" voz="$2"
  if [ -f "renders/$id.mp4" ]; then echo "[skip] $id (mp4 existe)" | tee -a "$LOG"; SKIP=$((SKIP+1)); return 0; fi
  echo "==== $id (voz $voz) ====" | tee -a "$LOG"
  node write-txt.mjs "$id"        >>"$LOG" 2>&1 || { echo "[FAIL write-txt] $id" | tee -a "$LOG"; FAIL=$((FAIL+1)); FAILED_IDS="$FAILED_IDS $id"; return 1; }
  node tts-inemavox.mjs "$id" "$voz" >>"$LOG" 2>&1 || { echo "[FAIL tts] $id" | tee -a "$LOG"; FAIL=$((FAIL+1)); FAILED_IDS="$FAILED_IDS $id"; return 1; }
  node build.mjs "$id"            >>"$LOG" 2>&1 || { echo "[FAIL build] $id" | tee -a "$LOG"; FAIL=$((FAIL+1)); FAILED_IDS="$FAILED_IDS $id"; return 1; }
  npx hyperframes render --quality high --output "renders/$id.mp4" >>"$LOG" 2>&1 || { echo "[FAIL render] $id" | tee -a "$LOG"; FAIL=$((FAIL+1)); FAILED_IDS="$FAILED_IDS $id"; return 1; }
  if [ -f "renders/$id.mp4" ]; then echo "[ok] $id" | tee -a "$LOG"; OK=$((OK+1)); else echo "[FAIL no-mp4] $id" | tee -a "$LOG"; FAIL=$((FAIL+1)); FAILED_IDS="$FAILED_IDS $id"; fi
}

for id in "${SHORT[@]}"; do one "$id" rachel; done
for id in "${DEEP[@]}";  do one "$id" bella;  done

# mover MP4 pro destino
mkdir -p "$DEST"
MOVED=0
for f in renders/piramide-ia-*.mp4; do
  [ -f "$f" ] || continue
  cp -f "$f" "$DEST/" && MOVED=$((MOVED+1))
done

MSG="🎬 *Pirâmide da IA — vídeos do curso*
OK: $OK · pulados: $SKIP · falhas: $FAIL
MP4 copiados p/ imports/videos: $MOVED"
[ -n "$FAILED_IDS" ] && MSG="$MSG
⚠️ falhas:$FAILED_IDS"

echo "$MSG" | tee -a "$LOG"
if [ -x "$NOTIFY" ]; then "$NOTIFY" "$MSG" >>"$LOG" 2>&1 || echo "[notify falhou]" | tee -a "$LOG"; fi
echo "FIM render-all" | tee -a "$LOG"
