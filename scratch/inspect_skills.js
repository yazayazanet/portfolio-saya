const fs = require('fs');
const js = fs.readFileSync('c:/vibe-lab/sandboxes/26-09-15-clonev2/target-bundle.js', 'utf8');

const idx = js.indexOf('id:"skills"');
console.log('idx skills:', idx);
if (idx !== -1) {
  console.log(js.slice(idx, idx + 4500));
}
