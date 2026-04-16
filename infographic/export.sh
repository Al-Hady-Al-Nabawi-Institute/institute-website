#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PY="/Users/alisafaya/.local/share/mamba/envs/torch27/bin/python"

render() {
  local src="$1" out_pdf="$2" dir="$3"
  local tmp="_tmp_$$.pdf"

  "$CHROME" --headless=new --disable-gpu \
    --no-pdf-header-footer \
    --virtual-time-budget=15000 \
    --run-all-compositor-stages-before-draw \
    --print-to-pdf="$tmp" \
    "file://$PWD/$src" 2>&1 | tail -1

  mkdir -p "$dir"
  rm -f "$dir"/*.png
  pdftoppm -png -r 150 "$tmp" "$dir/slide" 2>/dev/null

  local imgs=("$dir"/slide-*.png)
  "$PY" -c "import img2pdf,sys; open('$out_pdf','wb').write(img2pdf.convert(sys.argv[1:]))" "${imgs[@]}"

  rm -f "$tmp"
  echo "→ $out_pdf (${#imgs[@]} slides) + $dir/"
}

# render presentation-draft.html           presentation.pdf            slides-landscape
# render presentation-draft-instagram.html presentation-instagram.pdf  slides-instagram
render infographic-draft-4x5.html        infographic.pdf             slides-infographic
