const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');
content = content.replace('OPENROUTER_API_KEY_PLACEHOLDER', process.env.OPENROUTER_API_KEY);
fs.writeFileSync(filePath, content);
