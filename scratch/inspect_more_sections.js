const fs = require('fs');
const js = fs.readFileSync('c:/vibe-lab/sandboxes/26-09-15-clonev2/target-bundle.js', 'utf8');

function dumpAround(str, before, after) {
  const idx = js.indexOf(str);
  if (idx === -1) return 'NOT FOUND: ' + str;
  return js.slice(Math.max(0, idx - before), idx + after);
}

console.log('=== PROJECTS ===');
console.log(dumpAround('id:"projects"', 200, 2000));

console.log('=== SKILLS ===');
console.log(dumpAround('id:"skills"', 200, 2000));

console.log('=== CONTACT ===');
console.log(dumpAround('id:"contact"', 200, 2000));
