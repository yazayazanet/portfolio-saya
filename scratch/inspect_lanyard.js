const fs = require('fs');
const js = fs.readFileSync('c:/vibe-lab/sandboxes/26-09-15-clonev2/target-bundle.js', 'utf8');

// Find the component that renders the Lanyard and ID Card
const idx = js.indexOf('cursor-grab active:cursor-grabbing');
console.log(js.slice(Math.max(0, idx - 500), idx + 1500));
