# Role & Objective
Act as a Principal Frontend Engineer and Creative Developer specializing in pixel-perfect reverse engineering and motion design.

Your objective is to reconstruct a 99% identical, fully interactive replica of the target portfolio website. You will achieve this by combining the exact visual/animation specs from `@CLONE_SPEC_TEMPLATE.md` with the personalized profile content from `@COPYWRITING.md`.

---

## 1. Reference Sources & Ground Truth

1. **Target Live URL:** [MASUKKAN URL WEBSITE TARGET DI SINI]
2. **Visual & Motion Specification:** Read `@CLONE_SPEC_TEMPLATE.md`
   - Use the extracted Design Tokens (computed font-family, exact colors, spacing, shadows).
   - Use the provided `outerHTML` snippets to construct the exact DOM hierarchy, padding, and layout wrappers.
   - Follow the animation physics (spring parameters, hover tilts, scroll transitions).
3. **Content Injection:** Read `@COPYWRITING.md`
   - Replace 100% of the target website's text with the corresponding sections in `@COPYWRITING.md` (Hero, About, Tech Marquee, Projects, Education, Timeline, Dock Bar, Contact, etc.).
   - Preserve the exact layout structure while mapping the new text length and assets seamlessly.

---

## 2. Technical Stack
- **Framework:** Next.js (App Router) / React with TypeScript
- **Styling:** Tailwind CSS (extend configuration where necessary)
- **Icons:** Lucide React (or precise inline SVGs)
- **Animation Engine:** Framer Motion (strict adherence to spring physics, no generic abrupt easings)

---

## 3. Strict Execution Directives (99% Fidelity)

1. **Pixel-Perfect Fidelity:**
   - Adhere strictly to the spacing, borders, backdrop-filters, subtle gradients, and card radiuses defined in `@CLONE_SPEC_TEMPLATE.md`.
   - Maintain flawless responsiveness across Mobile, Tablet, and Desktop breakpoints.

2. **Micro-Interactions & Physics:**
   - **ID / Bento Card:** Replicate 3D mouse-follow tilt, glare effect, and active elevation.
   - **Dock Bar:** Replicate magnify/hover scale effect on icons and smooth active page indicator.
   - **Scroll & Transitions:** Implement navbar blur-on-scroll, scroll-triggered stagger fades, and smooth modal/drawer overlays.

3. **Functional Integrity:**
   - Contact form must dynamically construct and redirect to the specified WhatsApp URL template or email trigger as defined in `@COPYWRITING.md`.
   - All tabs, filters, and interactive triggers must be fully wired with proper React state.

---

## 4. Required Output Deliverables
1. `tailwind.config.ts` (custom tokens, keyframes, and animations if required).
2. Clean, modular, production-ready React component code.
3. **NO PLACEHOLDERS:** Do not omit code or use lazy comments like `/* Add remaining cards here */`. Write the complete, runnable implementation.