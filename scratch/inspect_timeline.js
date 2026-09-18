const fs = require('fs');
const js = fs.readFileSync('c:/vibe-lab/sandboxes/26-09-15-clonev2/target-bundle.js', 'utf8');

const idx = js.indexOf('events:n,title:');
console.log('idx:', idx);
if (idx !== -1) {
  // Find where cM is defined
  const cMDef = js.slice(idx - 3000, idx + 200);
  console.log(cMDef.slice(-1500));
}
