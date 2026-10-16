# Akilesh M — Engineering Portfolio

Responsive, static portfolio designed to support two goals:
1. **Primary career priority:** Digital VLSI and ASIC design roles.
2. **Secondary career priority:** Embedded Systems and IoT roles.
3. **Freelance work:** scoped engineering services across Digital VLSI/RTL, verification support, embedded firmware, IoT, PCB design, FPGA and related technical tasks where capability and scope fit.

The site is built with plain HTML, CSS and JavaScript. No paid service, build system, framework, or backend is required.

## Files
- `index.html` — website structure
- `styles.css` — design, responsive layout and link styling
- `data.js` — project cards, services, education/experience, skills, training and changelog content
- `script.js` — renders content from `data.js`
- `assets/favicon.svg` — site icon

## Preview locally
Open `index.html` in a browser. For local testing, a simple static server is optional; the site has no build step.

## Update a project after a LinkedIn post or implementation milestone
1. Open `data.js`.
2. Find the project in `vlsiProjects`, `embeddedProjects`, or `pcbProjects`.
3. Update `status`, `summary`, `technologies` and `nextStep` to match the real state.
4. Add `evidenceLink` only when you have a shareable repository, report, waveform, screenshot or other evidence.
5. Add `postLink` only after the LinkedIn post exists.
6. Add an entry to `updates` and update `profile.lastUpdated`.
7. Commit the change to the `main` branch. GitHub Pages will redeploy.

Supported statuses: `Planned`, `In Progress`, `Tested`, `Completed`. Use `Completed` only when implementation is actually finished and the claim is defensible.

Example changelog entry (use only if true):
```js
{date:"2026-11-02",title:"First SPI RTL simulation",description:"Ran simulation with documented test cases and captured a waveform for review.",link:"https://github.com/Akilesh-10/your-repository"}
```

## Publish/update on GitHub Pages
Repository: `https://github.com/Akilesh-10/Akilesh-10.github.io`
Website: `https://akilesh-10.github.io/`

To update the published site:
1. Open the repository.
2. Choose **Add file → Upload files** or edit files directly.
3. Upload/replace the files from this package at the repository root: `index.html`, `styles.css`, `data.js`, `script.js`, and the `assets` folder.
4. Commit directly to `main`.
5. Wait for the Pages deployment to finish, then refresh the live site.

Do not upload the outer ZIP file instead of its contents.

## Accuracy and privacy
- The project list is a roadmap. Verify each project's implementation status before changing it to Completed.
- A course certificate proves course completion, not mastery of every tool or completion of an end-to-end ASIC flow.
- Service cards describe categories of work to discuss, not an unconditional promise to accept every task. Confirm scope, access to tools/hardware, timeline and deliverables before agreeing.
- Never publish employer/client confidential data, proprietary code, passwords, access tokens, Wi-Fi credentials, or licensed tool content without permission.
- Add a résumé PDF only when you have a version intended for public sharing.
