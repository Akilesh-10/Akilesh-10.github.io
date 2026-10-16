(function () {
  "use strict";
  const data = window.portfolioData;
  const page = document.getElementById("projectPage");
  if (!data || !page) return;
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
  const slugify = (value) => String(value || "project").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const safeExternal = (value) => {
    if (!value || typeof value !== "string") return "";
    try { const url = new URL(value, window.location.href); return ["http:", "https:"].includes(url.protocol) ? value : ""; }
    catch (_) { return ""; }
  };
  const safeRootFile = (value) => /^[A-Za-z0-9][A-Za-z0-9_.-]*$/.test(String(value || "")) ? String(value) : "";
  const projects = [
    ...data.vlsiProjects.map((project) => ({ ...project, category: "Digital VLSI & ASIC", group: "vlsi" })),
    ...data.embeddedProjects.map((project) => ({ ...project, category: "Embedded Systems & IoT", group: "embedded" })),
    ...data.pcbProjects.map((project) => ({ ...project, category: "PCB & Electronics", group: "pcb" }))
  ];
  const slug = new URLSearchParams(window.location.search).get("slug");
  const project = projects.find((item) => (item.slug || slugify(item.title)) === slug);
  const email = String(data.profile.email || "").trim();
  const statusClass = (status) => status === "Completed" ? "status-complete" : status === "Tested" ? "status-tested" : status === "In Progress" ? "status-progress" : "";
  const makeButton = (url, label, primary = false) => url ? `<a class="btn ${primary ? "primary" : "secondary"}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${label}</a>` : "";
  const bulletList = (items) => Array.isArray(items) && items.length ? `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>` : "";
  const videoBlock = (url) => {
    const safe = safeExternal(url);
    if (!safe) return `<div class="empty-evidence">No demo video has been added yet. Add a public YouTube/Vimeo link in this project's data when a real demo is available.</div>`;
    let embed = "";
    try {
      const u = new URL(safe);
      if (u.hostname.includes("youtube.com")) {
        const id = u.searchParams.get("v");
        if (id && /^[\w-]{6,}$/.test(id)) embed = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`;
      } else if (u.hostname === "youtu.be") {
        const id = u.pathname.replace(/^\//, "");
        if (/^[\w-]{6,}$/.test(id)) embed = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`;
      } else if (u.hostname.includes("vimeo.com")) {
        const id = u.pathname.split("/").filter(Boolean).pop();
        if (/^\d+$/.test(id || "")) embed = `https://player.vimeo.com/video/${id}`;
      }
    } catch (_) {}
    return embed ? `<div class="video-frame"><iframe src="${esc(embed)}" title="${esc(project.title)} demonstration video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><p><a href="${esc(safe)}" target="_blank" rel="noopener noreferrer">Open demo video in a new tab ↗</a></p>` : `<p><a class="btn secondary" href="${esc(safe)}" target="_blank" rel="noopener noreferrer">Watch demo ↗</a></p>`;
  };
  if (!project) {
    page.innerHTML = `<div class="not-found"><p class="eyebrow">PROJECT NOT FOUND</p><h1>This project page isn't available.</h1><p>Use the project explorer to choose a listed project.</p><a class="btn primary" href="index.html#projectExplorer">Browse all projects ↗</a></div>`;
    document.title = "Project Not Found | Akilesh M";
    return;
  }
  const status = project.status || "Planned";
  const repo = safeExternal(project.repoLink || project.evidenceLink);
  const post = safeExternal(project.postLink);
  const demo = safeExternal(project.demoLink);
  const statusMessage = status === "Planned"
    ? "This is currently a roadmap item. The implementation, screenshots, testing results and links will be added only after the corresponding work exists."
    : status === "In Progress"
      ? "This project is in progress. The page should describe only the modules implemented so far and clearly identify what remains."
      : status === "Tested"
        ? "Testing has been performed on the stated scope. Test setup, observed results and limitations should accompany this status."
        : "The listed project is marked completed. Review the linked repository, evidence and stated limitations to understand the exact delivered scope.";
  const screenshots = Array.isArray(project.screenshots) ? project.screenshots.map((item) => {
    const file = safeRootFile(item.file);
    if (!file) return "";
    return `<figure><img class="evidence-image" src="${esc(file)}" alt="${esc(item.alt || item.caption || project.title + ' screenshot')}" loading="lazy"><figcaption class="evidence-caption">${esc(item.caption || file)}</figcaption></figure>`;
  }).join("") : "";
  const objective = project.objective || project.summary;
  const architecture = project.architecture || "The architecture will be documented here as the design is defined. Include a block diagram, interface boundaries, data flow and design decisions once verified.";
  const implementation = project.implementation || project.nextStep || "Implementation steps will be added as the project progresses. Each listed step should reflect the actual code or hardware work completed.";
  const tests = project.tests || "Test cases, simulation or hardware setup, expected behaviour and observed results will be recorded when tests are run.";
  const results = project.results || "Measured outputs, waveforms, logs, screenshots or other reproducible evidence will be added after validation. No results are claimed here until supporting evidence exists.";
  const lessons = project.lessons || "Lessons learned, limitations, debugging notes and possible next improvements will be documented after implementation and testing.";
  page.innerHTML = `
    <section class="detail-hero">
      <p class="eyebrow">PROJECT CASE STUDY · ${esc(project.number)}</p>
      <p class="detail-domain">${esc(project.category)}</p>
      <h1>${esc(project.title)}</h1>
      <p class="detail-summary">${esc(project.summary)}</p>
      <div class="detail-meta"><span class="status ${statusClass(status)}">${esc(status)}</span><div class="tags">${(project.technologies || []).map((technology) => `<span>${esc(technology)}</span>`).join("")}</div></div>
      <div class="detail-link-row">
        ${makeButton(repo, "GitHub repository / evidence ↗", true)}
        ${makeButton(post, "LinkedIn project post ↗")}
        ${makeButton(demo, "Video demo ↗")}
        <a class="btn secondary" href="index.html#projectExplorer">Back to all projects</a>
      </div>
    </section>
    <div class="detail-grid">
      <div class="detail-content">
        <section class="detail-section"><h2>Objective and scope</h2><p>${esc(objective)}</p>${bulletList(project.scopeItems)}</section>
        <section class="detail-section"><h2>Architecture and design</h2><p>${esc(architecture)}</p>${bulletList(project.architectureItems)}</section>
        <section class="detail-section"><h2>Implementation notes</h2><p>${esc(implementation)}</p>${bulletList(project.implementationItems)}</section>
        <section class="detail-section"><h2>Testing and validation</h2><p>${esc(tests)}</p>${bulletList(project.testCases)}</section>
        <section class="detail-section"><h2>Results and evidence</h2><p>${esc(results)}</p>${screenshots ? `<div class="detail-evidence-grid">${screenshots}</div>` : `<div class="empty-evidence">No screenshots have been added yet. When you share real screenshots or waveforms, keep the image files beside the HTML/CSS/JS files in the repository root and list their filenames in this project's <code>screenshots</code> array in <code>data.js</code>.</div>`}</section>
        <section class="detail-section"><h2>Demo video</h2>${videoBlock(project.demoLink || "")}</section>
        <section class="detail-section"><h2>Lessons learned and next steps</h2><p>${esc(lessons)}</p><p><strong>Next step:</strong> ${esc(project.nextStep || "Update this after the next real milestone.")}</p></section>
      </div>
      <aside class="detail-aside">
        <section class="detail-section"><h2>Project status</h2><p><strong>${esc(status)}</strong></p><p>${esc(statusMessage)}</p></section>
        <section class="detail-section"><h2>Project links</h2><div class="detail-link-row">${makeButton(repo, "GitHub ↗", true)}${makeButton(post, "LinkedIn ↗")}${makeButton(demo, "Video demo ↗")}</div>${!repo && !post && !demo ? `<div class="empty-evidence">Repository, LinkedIn and demo links will appear here when the project is published and you share the URLs.</div>` : ""}</section>
        <section class="detail-section"><h2>About this page</h2><p>This page is designed to evolve with the real project. Add verified design decisions, screenshots, demo video, repository, LinkedIn post, test evidence and limitations as those materials become available.</p><a href="index.html#projectExplorer">Explore other projects ↗</a></section>
      </aside>
    </div>`;
  document.title = `${project.title} | Akilesh M`;
  const toggle = document.getElementById("themeToggle");
  let theme = "dark";
  try { theme = localStorage.getItem("akilesh-portfolio-theme") || "dark"; } catch (_) {}
  function applyTheme(value) {
    const light = value === "light";
    document.documentElement.dataset.theme = light ? "light" : "dark";
    if (toggle) {
      toggle.textContent = light ? "☾ Dark mode" : "☀ Light mode";
      toggle.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
    }
    try { localStorage.setItem("akilesh-portfolio-theme", light ? "light" : "dark"); } catch (_) {}
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = light ? "#f5f8fc" : "#080d18";
  }
  applyTheme(theme);
  if (toggle) toggle.addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light"));
  const back = document.querySelector('.detail-footer a[href="#top"]');
  if (back) back.addEventListener("click", (event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    const contact = document.createElement("a");
    contact.className = "btn secondary";
    contact.href = `mailto:${email}?subject=${encodeURIComponent("Engineering project enquiry")}`;
    contact.textContent = "Email me directly";
    const row = page.querySelector(".detail-link-row");
    if (row) row.prepend(contact);
  }
})();
