const fs = require('fs');
const js = fs.readFileSync('c:/vibe-lab/sandboxes/26-09-15-clonev2/target-bundle.js', 'utf8');

const idx = js.indexOf('function HA(');
console.log(js.slice(idx, idx + 1500));
