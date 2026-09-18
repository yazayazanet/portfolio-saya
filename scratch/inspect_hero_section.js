const fs = require('fs');
const js = fs.readFileSync('c:/vibe-lab/sandboxes/26-09-15-clonev2/target-bundle.js', 'utf8');
const heroIdx = js.indexOf('id:"hero"');
console.log(js.slice(heroIdx, heroIdx + 4500));
