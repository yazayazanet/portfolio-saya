const fs = require('fs');
const js = fs.readFileSync('c:/vibe-lab/sandboxes/26-09-15-clonev2/target-bundle.js', 'utf8');

const idx = js.indexOf('function Ci(');
// The component is right around BA
const baIdx = js.indexOf('const BA=');
console.log(js.slice(baIdx, baIdx + 3500));
