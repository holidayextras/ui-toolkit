SRCFOLDER=src/components
DISTFOLDER=dist/components
for tool in $( ls -1 $SRCFOLDER ); do
  [ -e "$SRCFOLDER/$tool/$tool.jsx" ] || continue
  mkdir -p $DISTFOLDER/$tool
  babel $SRCFOLDER/$tool/$tool.jsx -o $DISTFOLDER/$tool/index.js
done

# the countdown component has a slightly different structure
mkdir -p $DISTFOLDER/countdown/lib
babel $SRCFOLDER/countdown/lib/countdown.js -o $DISTFOLDER/countdown/lib/countdown.js
babel $SRCFOLDER/countdown/lib/countdownManager.js -o $DISTFOLDER/countdown/lib/countdownManager.js
