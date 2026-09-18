const fs = require('fs');
const js = fs.readFileSync('c:/vibe-lab/sandboxes/26-09-15-clonev2/target-bundle.js', 'utf8');

// Find occurrences of hero, about, services, projects, skills, education, career, contact
const sections = ['hero', 'about', 'services', 'projects', 'skills', 'education', 'career', 'testimonials', 'contact'];

for (const sec of sections) {
  let idx = 0;
  while ((idx = js.indexOf(`id:"${sec}"`, idx)) !== -1) {
    console.log(`=== Section id:"${sec}" at ${idx} ===`);
    console.log(js.slice(Math.max(0, idx - 150), Math.min(js.length, idx + 400)));
    idx += sec.length + 5;
    break;
  }
}
