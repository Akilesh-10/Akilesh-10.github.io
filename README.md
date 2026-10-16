# Engineering Portfolio — starter website

A responsive static portfolio with Digital VLSI as the primary career focus and Embedded Systems / IoT as the secondary focus.

## Files
- `index.html`: page structure and profile content
- `styles.css`: responsive layout and design
- `data.js`: edit this file to update project cards, profile links and the changelog
- `script.js`: renders the projects and updates

## Preview
Open `index.html` in a browser. No build step is required.

## Personalise before publishing
1. Edit `data.js` and replace the placeholder GitHub and LinkedIn URLs with your actual profile URLs.
2. Set `profile.resume` to a public résumé path if you want to include it, e.g. `assets/resume.pdf`. Put the file in an `assets` folder first.
3. Add an email only if you want it public.
4. Review the skill list in `index.html`; remove anything you cannot yet explain confidently.
5. Keep statuses accurate: `Planned`, `In Progress`, `Tested`, or `Completed`.

## Update after a LinkedIn post
Find the matching project in `data.js`. Update its status and summary based on real work, then add:
- `evidenceLink`: repository, waveform, report or other evidence
- `postLink`: the LinkedIn post URL
- `nextStep`: the next actual task

Add a new object to the `updates` list to record the milestone. For example (use only if true):
```js
{date:"2026-11-02",title:"First SPI simulation",description:"Ran the first simulation with documented test cases and recorded a follow-up issue.",link:"https://github.com/YOUR-USERNAME/YOUR-REPO"}
```
Update `profile.lastUpdated` too.

## Publish free with GitHub Pages
1. Open your GitHub account: https://github.com/Akilesh-10.
2. Create a public repository named `Akilesh-10.github.io`.
3. Upload the contents of this folder (the files themselves, not an outer folder).
4. In repository Settings → Pages, choose deploy from a branch, `main`, folder `/ (root)`, and save.
5. After deployment, the site address is `https://YOUR-USERNAME.github.io`.
6. Each future edit committed to the repository will update the published website.

## Privacy and accuracy
Do not publish private contact details, access tokens, Wi-Fi credentials, confidential employer/project information or proprietary code without permission. Planned projects are clearly roadmap items, not completed work.
