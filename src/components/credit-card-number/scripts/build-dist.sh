#!/bin/bash
if [ -z "$VARIANT" ]; then VARIANT=''; fi
if [ -z "$TEMPLATE_LANG" ]; then TEMPLATE_LANG='en'; fi

echo "Building package for demo. Variant: '$VARIANT', language: '$TEMPLATE_LANG'."

browserify -t [ redirectify --dir "$VARIANT" ] -t reactify index.js --standalone ui-component-credit-card-number > dist/ui-component-credit-card-number-standalone.js
