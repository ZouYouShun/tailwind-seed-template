const fs = require('fs');
const path = require('path');

const { spawnSync } = require('child_process');

spawnSync('npx tailwindcss -i ./src/styles.css -o ./dist/styles.css');

const indexContent = fs.readFileSync('./src/index.html', 'utf8');

fs.writeFileSync(
  path.join(__dirname, '../dist/index.html'),
  indexContent.replace(
    `<link href="/dist/styles.css" rel="stylesheet" />`,
    '<link href="./styles.css" rel="stylesheet" />',
  ),
);
