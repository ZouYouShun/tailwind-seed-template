const fs = require('fs');

const { spawnSync } = require('child_process');

spawnSync('npx tailwindcss -i ./src/styles.css -o ./dist/styles.css');

const indexContent = fs.readFileSync('./src/index.html', 'utf8');

fs.writeFileSync(
  './dist/index.html',
  indexContent.replace(
    `<link href="/dist/styles.css" rel="stylesheet" />`,
    '<link href="./styles.css" rel="stylesheet" />',
  ),
);
