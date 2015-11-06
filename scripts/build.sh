SCRIPTFOLDER=$( dirname "${BASH_SOURCE[0]}" )
CASESCRIPT=${SCRIPTFOLDER}/toPascalCase.js
SRCFOLDER=src/components
DISTFOLDER=dist/components
DISTINDEX=dist/index.js
echo 'var UIToolkit = module.exports = {};' > ${DISTINDEX}
echo '// Custom Components' >> ${DISTINDEX}
for tool in $( ls -1 $SRCFOLDER ); do
  [ -e "$SRCFOLDER/$tool/$tool.jsx" ] || continue
  mkdir -p $DISTFOLDER/$tool
  babel $SRCFOLDER/$tool/$tool.jsx -o $DISTFOLDER/$tool/index.js
  echo "UIToolkit.$( ${CASESCRIPT} ${tool}) = require('./components/${tool}');" >> ${DISTINDEX}
done
ulimit -n 9999
grunt build
