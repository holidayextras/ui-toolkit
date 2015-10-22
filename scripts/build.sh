SRCFOLDER=src/components
DISTFOLDER=dist/components
for tool in $( ls -1 $SRCFOLDER ); do
  [ -e "$SRCFOLDER/$tool/$tool.jsx" ] || continue
  mkdir -p $DISTFOLDER/$tool
  babel $SRCFOLDER/$tool/$tool.jsx -o $DISTFOLDER/$tool/index.js
done
