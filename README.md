# Akilesh M — Engineering Portfolio (Version 3)

A responsive, static engineering portfolio built with HTML, CSS and JavaScript for:

1. **Primary career priority:** Digital VLSI and ASIC design.
2. **Secondary career priority:** Embedded Systems and IoT.
3. **Freelance portfolio:** clearly scoped work across digital RTL, verification support, embedded firmware, IoT, PCB/electronics and technical debugging where scope and capability fit.

There is no build step, backend, paid service or framework required.

## All files are in the repository root

This package intentionally has **no `assets/` folder**. Upload the files directly to the root of `Akilesh-10.github.io`:

- `index.html` — main portfolio page
- `project.html` — reusable dedicated project case-study page
- `styles.css` — design, responsive layout and dark/light themes
- `data.js` — projects, services, education/experience, skills, training, changelog and contact email
- `script.js` — homepage rendering, project search/status filters, status summary, theme toggle and Back to Top
- `project-details.js` — renders the correct project case study from a project card's query-string link
- `favicon.svg` — site icon, stored directly at root
- `README.md` — this guide

Any project screenshot/image that you add later can also sit directly beside these files in the repository root. Use its filename in the project's `screenshots` array in `data.js`; do not create a media folder unless you decide to change the link paths yourself.

## Four interface features

1. **Dark/light mode:** switch in the header. Preference is saved in the visitor's browser.
2. **Email me directly:** mail buttons are present. To activate them, set `profile.email` in `data.js` to the public email address you choose to display, then republish. It is blank by default so the site does not invent or expose an address.
3. **Project search and filters:** search by project name/technology and filter by domain or status.
4. **Project progress summary and Back to Top:** counts show project statuses, and a floating arrow returns visitors to the page top.

## Dedicated project pages

Each project card links to `project.html?slug=project-name`. The reusable template shows project objective, architecture, implementation, testing, results, screenshots, demo video, lessons, status, GitHub and LinkedIn links. It is safe to publish a page before the project is finished because the page labels the current status and does not claim that missing evidence exists.

### Add evidence to a project

Edit `data.js`, find the relevant object in `vlsiProjects`, `embeddedProjects` or `pcbProjects`, and add fields as materials become available:

```js
{
  repoLink: "https://github.com/Akilesh-10/your-project-repository",
  postLink: "https://www.linkedin.com/posts/your-real-project-post",
  demoLink: "https://youtu.be/your-real-demo-id",
  objective: "The tested objective of the project.",
  architecture: "Describe the actual architecture and interface boundaries.",
  implementation: "Describe what has really been implemented.",
  tests: "List the tests run, the setup, and the observed outcomes.",
  results: "Record measured results with units and supporting evidence.",
  lessons: "Summarize debugging lessons, limitations and next steps.",
  screenshots: [
    { file: "spi-waveform.png", caption: "SPI transfer waveform", alt: "Simulation waveform for an SPI transfer" }
  ]
}
```

These example strings and the example filename are **illustrations only**. Replace them with genuine URLs, file names and verified project information. Screenshot files such as `spi-waveform.png` must be uploaded to the same repository root as `project.html` and `data.js`.

Use `repoLink` for the repository. The legacy `evidenceLink` property is also supported. A `demoLink` can be a YouTube or Vimeo URL; other video links open externally. `screenshots` only renders filenames that contain no directory paths, in line with the flat root-file structure.

### Statuses

Use only these statuses consistently:

- `Planned` — not implemented yet.
- `In Progress` — currently implementing.
- `Tested` — testing has been run on a clearly described scope.
- `Completed` — the intended scope is finished and the statement is defensible.

Do not claim results, test coverage, expertise or project completion without evidence. A training certificate proves course completion; it is not on its own proof of advanced tool mastery.

## Configure the public email address

Open `data.js` and find:

```js
email: "", // Add the public email address you want visitors to use.
```

Replace the empty string with the email address you want public, for example `email: "your-real-address@example.com"`. Do not use the example address; enter your own address only when you are comfortable publishing it. The email button will then create a pre-addressed mailto draft.

## Publish to GitHub Pages

Repository: https://github.com/Akilesh-10/Akilesh-10.github.io
Website: https://akilesh-10.github.io/

1. Download and extract this ZIP.
2. Open the repository and select **Add file → Upload files**.
3. Select the *contents* of this extracted folder and upload the files to the repository root. Do not upload the ZIP itself.
4. Replace matching files, keep the new `project.html` and `project-details.js`, and ensure `favicon.svg` is at root.
5. Commit to the `main` branch and wait for the GitHub Pages deployment to finish.
6. Test the home page, dark/light switch, search/filter controls, project details links and mobile view.

For local preview, open `index.html` directly in a browser. No installation is required.

## Workflow for new projects

1. Implement and test a real milestone.
2. Publish the code, README and safe evidence to GitHub.
3. Publish a LinkedIn post describing the objective, work, result and lessons.
4. Share the GitHub URL, LinkedIn URL, screenshots and optional public demo link.
5. Update that project's entry in `data.js`, changing its status and adding only verifiable details.
6. Commit the updated files. The existing project card automatically links to its case-study page using the project's title-based slug.

Never publish employer/client confidential data, private credentials, tokens, Wi-Fi passwords, proprietary code or restricted licensed tool content.
