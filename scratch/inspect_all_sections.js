const fs = require('fs');
const js = fs.readFileSync('c:/vibe-lab/sandboxes/26-09-15-clonev2/target-bundle.js', 'utf8');

function dumpAround(str, before, after) {
  const idx = js.indexOf(str);
  if (idx === -1) return 'NOT FOUND: ' + str;
  return js.slice(Math.max(0, idx - before), idx + after);
}

console.log('=== TECH MARQUEE ===');
console.log(dumpAround('marquee-right-left', 200, 1200));

console.log('=== ABOUT SECTION ===');
console.log(dumpAround('id:"about"', 200, 2000));

console.log('=== SERVICES SECTION ===');
console.log(dumpAround('id:"services"', 200, 2000));
