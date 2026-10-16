(function () {
  "use strict";
  const data = window.portfolioData;
  if (!data) return;

  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
  const safeUrl = (value) => {
    if (!value || typeof value !== "string") return "";
    try {
      const url = new URL(value, window.location.href);
      return ["http:", "https:"].includes(url.protocol) ? value : "";
    } catch (_) { return ""; }
  };
  const slugify = (value) => String(value || "project").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const tagList = (items) => (items || []).map((item) => `<span>${esc(item)}</span>`).join("");
  const allProjects = [
    ...data.vlsiProjects.map((project) => ({ ...project, category: "vlsi", categoryLabel: "Digital VLSI & ASIC" })),
    ...data.embeddedProjects.map((project) => ({ ...project, category: "embedded", categoryLabel: "Embedded Systems & IoT" })),
    ...data.pcbProjects.map((project) => ({ ...project, category: "pcb", categoryLabel: "PCB & Electronics" }))
  ];
  window.allPortfolioProjects = allProjects;

  function renderProject(project) {
    const status = project.status || "Planned";
    const statusClass = status === "Completed" ? "status-complete" : status === "Tested" ? "status-tested" : status === "In Progress" ? "status-progress" : "";
    const repo = safeUrl(project.repoLink || project.evidenceLink);
    const post = safeUrl(project.postLink);
    const slug = project.slug || slugify(project.title);
    const searchText = [project.number, project.title, project.summary, project.nextStep, ...(project.technologies || [])].join(" ").toLowerCase();
    const externalLinks = [];
    if (repo) externalLinks.push(`<a href="${esc(repo)}" target="_blank" rel="noopener noreferrer">GitHub / Evidence ↗</a>`);
    if (post) externalLinks.push(`<a href="${esc(post)}" target="_blank" rel="noopener noreferrer">LinkedIn post ↗</a>`);
    return `<article class="project" data-project-card data-project-slug="${esc(slug)}" data-category="${esc(project.category)}" data-status="${esc(status)}" data-search="${esc(searchText)}">
      <div class="project-top"><span class="project-no">${esc(project.number)}</span><span class="status ${statusClass}">${esc(status)}</span></div>
      <p class="project-category">${esc(project.categoryLabel)}</p>
      <h3>${esc(project.title)}</h3><p>${esc(project.summary)}</p>
      <div class="tags">${tagList(project.technologies)}</div>
      <div class="project-foot">${esc(project.nextStep || "Update after the next milestone.")}</div>
      <div class="project-foot project-links"><a class="project-detail-link" href="project.html?slug=${encodeURIComponent(slug)}">Project details ↗</a>${externalLinks.join("")}</div>
    </article>`;
  }
  function renderSimpleCard(item) {
    return `<article class="panel"><span class="tagline">${esc(item.kind)}</span><h3>${esc(item.title)}</h3><p class="role">${esc(item.role)}</p><p>${esc(item.description)}</p><div class="tags">${tagList(item.tags)}</div></article>`;
  }
  function renderService(service) {
    return `<article class="panel service-card"><div class="service-icon">${esc(service.icon)}</div><h3>${esc(service.title)}</h3><p>${esc(service.summary)}</p><ul>${(service.items || []).map((item) => `<li>${esc(item)}</li>`).join("")}</ul><span class="scope-label">${esc(service.scope)}</span></article>`;
  }
  function renderSkill(skill) {
    return `<article class="panel skill-card"><h3>${esc(skill.title)}</h3><div class="tags">${tagList(skill.items)}</div></article>`;
  }
  function renderTimeline(update) {
    const link = safeUrl(update.link);
    return `<article class="timeline-item"><span class="timeline-date">${esc(update.date)}</span><h3>${esc(update.title)}</h3><p>${esc(update.description)} ${link ? `<a href="${esc(link)}" target="_blank" rel="noopener noreferrer">Related link ↗</a>` : ""}</p></article>`;
  }

  document.getElementById("vlsiProjects").innerHTML = data.vlsiProjects.map((p) => renderProject({ ...p, category: "vlsi", categoryLabel: "Digital VLSI & ASIC" })).join("");
  document.getElementById("embeddedProjects").innerHTML = data.embeddedProjects.map((p) => renderProject({ ...p, category: "embedded", categoryLabel: "Embedded Systems & IoT" })).join("");
  document.getElementById("pcbProjects").innerHTML = data.pcbProjects.map((p) => renderProject({ ...p, category: "pcb", categoryLabel: "PCB & Electronics" })).join("");
  document.getElementById("servicesGrid").innerHTML = data.services.map(renderService).join("");
  document.getElementById("experienceCards").innerHTML = data.experience.map(renderSimpleCard).join("");
  document.getElementById("skillsGrid").innerHTML = data.skills.map(renderSkill).join("");
  document.getElementById("learningGrid").innerHTML = `<article class="panel"><span class="status-line">COMPLETED COURSES · AS LISTED</span><h3>Completed training</h3><ul>${data.completedCourses.map((item) => `<li>${esc(item)}</li>`).join("")}</ul></article><article class="panel"><span class="status-line">IN PROGRESS</span><h3>Current learning areas</h3><ul>${data.learningAreas.map((item) => `<li>${esc(item)}</li>`).join("")}</ul><p>Course completion and hands-on project implementation are tracked separately.</p></article>`;
  document.getElementById("timeline").innerHTML = data.updates.slice().reverse().map(renderTimeline).join("");
  document.getElementById("lastUpdated").textContent = data.profile.lastUpdated || "Update in data.js";

  // Direct email contact: configure profile.email in data.js before publishing.
  const email = String(data.profile.email || "").trim();
  document.querySelectorAll("[data-email-link]").forEach((link) => {
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      link.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent("Engineering project enquiry")}`;
      link.title = `Email ${email}`;
    } else {
      link.href = "#contact";
      link.title = "Add your public email address in data.js to activate this link";
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const note = document.getElementById("emailNote");
        if (note) note.textContent = "To activate this button, add your public email address to profile.email in data.js and republish.";
        if (note) note.classList.add("notice-active");
      });
    }
  });

  // Dark / light theme, persisted in the visitor's browser.
  const themeToggle = document.getElementById("themeToggle");
  let savedTheme = "dark";
  try { savedTheme = localStorage.getItem("akilesh-portfolio-theme") || "dark"; } catch (_) {}
  function applyTheme(theme) {
    const isLight = theme === "light";
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
    if (themeToggle) {
      themeToggle.textContent = isLight ? "☾ Dark mode" : "☀ Light mode";
      themeToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
      themeToggle.setAttribute("aria-pressed", String(isLight));
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.content = isLight ? "#f5f8fc" : "#080d18";
    try { localStorage.setItem("akilesh-portfolio-theme", isLight ? "light" : "dark"); } catch (_) {}
  }
  applyTheme(savedTheme);
  if (themeToggle) themeToggle.addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light"));

  // Project search, domain and status filters.
  const searchInput = document.getElementById("projectSearch");
  const categorySelect = document.getElementById("categoryFilter");
  const statusSelect = document.getElementById("statusFilter");
  const clearFilters = document.getElementById("clearFilters");
  const cards = Array.from(document.querySelectorAll("[data-project-card]"));
  const filterResult = document.getElementById("filterResult");
  const lower = (value) => String(value || "").trim().toLowerCase();
  const initialCounts = { total: cards.length, planned: 0, progress: 0, tested: 0, completed: 0 };
  cards.forEach((card) => {
    const status = lower(card.dataset.status);
    if (status === "planned") initialCounts.planned++;
    else if (status === "in progress") initialCounts.progress++;
    else if (status === "tested") initialCounts.tested++;
    else if (status === "completed") initialCounts.completed++;
  });
  const countEls = { total: "countTotal", planned: "countPlanned", progress: "countProgress", tested: "countTested", completed: "countCompleted" };
  Object.entries(countEls).forEach(([key, id]) => { const el = document.getElementById(id); if (el) el.textContent = initialCounts[key]; });
  function filterProjects() {
    const query = lower(searchInput && searchInput.value);
    const category = categorySelect ? categorySelect.value : "all";
    const status = statusSelect ? lower(statusSelect.value) : "all";
    let visible = 0;
    cards.forEach((card) => {
      const matches = (!query || lower(card.dataset.search).includes(query))
        && (category === "all" || card.dataset.category === category)
        && (status === "all" || lower(card.dataset.status) === status);
      card.hidden = !matches;
      if (matches) visible++;
    });
    if (filterResult) filterResult.textContent = `Showing ${visible} of ${cards.length} projects${query ? ` for “${searchInput.value.trim()}”` : ""}.`;
  }
  [searchInput, categorySelect, statusSelect].forEach((control) => control && control.addEventListener("input", filterProjects));
  if (clearFilters) clearFilters.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    if (categorySelect) categorySelect.value = "all";
    if (statusSelect) statusSelect.value = "all";
    filterProjects();
    if (searchInput) searchInput.focus();
  });

  // Mobile navigation.
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }));
  }

  // Floating Back to Top control.
  const backToTop = document.getElementById("backToTop");
  function updateBackToTop() {
    if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 500);
  }
  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();
  if (backToTop) backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();
