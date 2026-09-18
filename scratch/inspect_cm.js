const fs = require('fs');
const js = fs.readFileSync('c:/vibe-lab/sandboxes/26-09-15-clonev2/target-bundle.js', 'utf8');

const idx = js.indexOf('function cM(') !== -1 ? js.indexOf('function cM(') : js.indexOf('cM=');
console.log('cM idx:', idx);
if (idx !== -1) {
  console.log(js.slice(idx, idx + 2000));
}
