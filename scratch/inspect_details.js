const fs = require('fs');
const js = fs.readFileSync('c:/vibe-lab/sandboxes/26-09-15-clonev2/target-bundle.js', 'utf8');

// Let's inspect Lanyard and ID Card implementation
const lanyardPos = js.indexOf('metalDark');
console.log('=== LANYARD SNIPPET ===');
console.log(js.slice(Math.max(0, lanyardPos - 400), lanyardPos + 1200));

// Let's inspect Dock bar implementation
const dockPos = js.indexOf('rounded-[20px] sm:rounded-[24px]');
console.log('\n=== DOCK BAR SNIPPET ===');
console.log(js.slice(Math.max(0, dockPos - 400), dockPos + 1200));

// Let's inspect Dot Grid (qA)
const heroPos = js.indexOf('id:"hero"');
console.log('\n=== HERO COMPONENT ===');
console.log(js.slice(heroPos - 500, heroPos + 1200));
