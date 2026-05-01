const fs = require('fs');
const path = require('path');

const generatedDir = path.join(__dirname, '..', 'src', 'generated');

function addTsNoCheck(dirPath) {
  if (!fs.existsSync(dirPath)) return;

  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    const filePath = path.join(dirPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      addTsNoCheck(filePath);
    } else if (file.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');

      content = content.replace(/^\/\/ @ts-nocheck\n?/, '');

      content = '// @ts-nocheck\n' + content;
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
}

addTsNoCheck(generatedDir);
console.log('Added @ts-nocheck to generated files');
