const fs = require('fs');

const { execSync } = require('child_process');

execSync('npx tailwindcss -i ./src/styles.css -o ./dist/styles.css');

const indexContent = fs.readFileSync('./src/index.html', 'utf8');

fs.writeFileSync(
  './dist/index.html',
  indexContent.replace(
    `<link href="/dist/styles.css" rel="stylesheet" />`,
    '<link href="./styles.css" rel="stylesheet" />',
  ),
);
