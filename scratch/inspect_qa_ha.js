const fs = require('fs');
const js = fs.readFileSync('c:/vibe-lab/sandboxes/26-09-15-clonev2/target-bundle.js', 'utf8');

// Find definition of qA
const qAPos = js.indexOf('width:16,height:16');
console.log('=== qA (Dot Pattern) ===');
// Find function qA or var qA
const qADef = js.match(/const qA=([^;]+)/) || js.match(/function qA\(/);
if (qADef) {
  const start = js.indexOf(qADef[0]);
  console.log(js.slice(start, start + 800));
} else {
  // search qA=
  const match = [...js.matchAll(/([a-zA-Z0-9_$]+)=.*?\{width:n=16/g)];
  console.log('Matches for dot pattern:', match);
}

// Find HA (Sparkles / Gradient Text)
const haPos = js.indexOf('fontSize:"clamp(2.2rem');
console.log('=== HA (Sparkles Text) ===');
console.log(js.slice(haPos - 400, haPos + 400));
