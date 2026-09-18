const fs = require('fs');
const js = fs.readFileSync('c:/vibe-lab/sandboxes/26-09-15-clonev2/target-bundle.js', 'utf8');

function dumpAround(str, before, after) {
  const idx = js.indexOf(str);
  if (idx === -1) return 'NOT FOUND: ' + str;
  return js.slice(Math.max(0, idx - before), idx + after);
}

console.log('=== FOOTER ===');
console.log(dumpAround('Turning Ideas into Practical Technology', 200, 2000));
if (js.indexOf('Turning Ideas into Practical Technology') === -1) {
  console.log('Searching footer...');
  const fIdx = js.indexOf('All rights reserved');
  console.log(js.slice(fIdx - 400, fIdx + 800));
}

console.log('=== DOCK BAR ===');
const dIdx = js.indexOf('aria-label:"Application dock"');
console.log(js.slice(dIdx - 600, dIdx + 800));
