// Web Techniques Lab — Vanilla JS + Bootstrap 5 Modal Controller

let activeDemo = null;
let activeFileIndex = 0;
let originalCode = "";
const fileCache = {};

// Page elements
const heroCount = document.getElementById("heroCount");
const statTotal = document.getElementById("statTotal");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const typeFilter = document.getElementById("typeFilter");
const resultsCount = document.getElementById("resultsCount");
const demoGrid = document.getElementById("demoGrid");

// Modal elements
const modalEl = document.getElementById("demoModal");
const demoModal = new bootstrap.Modal(modalEl);
const modalCategory = document.getElementById("modalCategory");
const modalTypeBadge = document.getElementById("modalTypeBadge");
const modalLevel = document.getElementById("modalLevel");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

const tabPreviewBtn = document.getElementById("tabPreviewBtn");
const tabCodeBtn = document.getElementById("tabCodeBtn");
const reloadPreviewBtn = document.getElementById("reloadPreviewBtn");
const openStandaloneLink = document.getElementById("openStandaloneLink");

const previewPane = document.getElementById("previewPane");
const previewFrame = document.getElementById("previewFrame");
const phpFallbackBox = document.getElementById("phpFallbackBox");
const phpFallbackDesc = document.getElementById("phpFallbackDesc");
const phpFallbackActions = document.getElementById("phpFallbackActions");

const codePane = document.getElementById("codePane");
const fileTabs = document.getElementById("fileTabs");
const runCodeBtn = document.getElementById("runCodeBtn");
const resetCodeBtn = document.getElementById("resetCodeBtn");
const copyCodeBtn = document.getElementById("copyCodeBtn");
const codeEditor = document.getElementById("codeEditor");

// --------------------------------------------------------------------------
// Helpers
// --------------------------------------------------------------------------

async function getFileCode(path) {
    if (fileCache[path] !== undefined) {
        return fileCache[path];
    }
    try {
        const url = (SAME_SERVER_PHP && path.toLowerCase().endsWith(".php"))
            ? "source.php?file=" + encodeURIComponent(path)
            : path;
        const res = await fetch(url);
        const text = await res.text();
        fileCache[path] = text;
        return text;
    } catch (err) {
        return "<!-- Could not load file. Run this project with a local server (e.g. Live Server or python -m http.server). -->";
    }
}

function showStaticPreview(htmlCode, basePath) {
    previewFrame.removeAttribute("src");
    const baseHref = new URL(basePath, window.location.href).href;
    const baseTag = `<base href="${baseHref}">`;
    if (/<head[^>]*>/i.test(htmlCode)) {
        previewFrame.srcdoc = htmlCode.replace(/<head[^>]*>/i, (m) => m + "\n" + baseTag);
    } else {
        previewFrame.srcdoc = baseTag + "\n" + htmlCode;
    }
}

function getPhpDemoUrl(demo) {
    const custom = (PHP_LINKS[demo.id] || "").trim();
    if (custom) return custom;

    const base = (PHP_HOST_URL || "").trim().replace(/\/+$/, "");
    if (!base) return "";
    return `${base}/${demo.files[0].path}`;
}

function setModalTab(tab) {
    const isPreview = tab === "preview";
    tabPreviewBtn.classList.toggle("active", isPreview);
    tabCodeBtn.classList.toggle("active", !isPreview);
    previewPane.classList.toggle("hidden", !isPreview);
    codePane.classList.toggle("hidden", isPreview);
}

// --------------------------------------------------------------------------
// Render Demo Catalog Cards
// --------------------------------------------------------------------------

function renderCatalog() {
    const query = searchInput.value.trim().toLowerCase();
    const cat = categoryFilter.value;
    const type = typeFilter.value;

    const filtered = DEMOS.filter((demo) => {
        if (cat !== "all" && demo.category !== cat) return false;
        if (type !== "all" && demo.type !== type) return false;
        if (!query) return true;

        const haystack = [
            demo.title,
            demo.category,
            demo.desc,
            demo.level,
            demo.tags.join(" ")
        ].join(" ").toLowerCase();

        return haystack.includes(query);
    });

    resultsCount.textContent = `${filtered.length} demo(s)`;
    demoGrid.innerHTML = "";

    if (filtered.length === 0) {
        demoGrid.innerHTML = `
            <div class="col-12">
                <div class="alert alert-secondary mb-0">No demos match your search. Try another keyword or reset the filters.</div>
            </div>`;
        return;
    }

    filtered.forEach((demo) => {
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4";

        const typeBadge = demo.type === "php"
            ? `<span class="badge bg-primary-subtle text-primary border border-primary-subtle">PHP / MySQL</span>`
            : "";

        const tagsHtml = demo.tags
            .map((t) => `<span class="tag-chip">${t}</span>`)
            .join(" ");

        col.innerHTML = `
            <div class="card demo-card h-100">
                <div class="card-body d-flex flex-column">
                    <div class="d-flex align-items-center justify-content-between gap-2 mb-2">
                        <span class="badge bg-secondary">${demo.category}</span>
                        ${typeBadge}
                    </div>
                    <h5 class="card-title fw-bold">${demo.title}</h5>
                    <p class="card-text text-muted small flex-grow-1">${demo.desc}</p>
                    <div class="d-flex flex-wrap gap-1 mb-3">${tagsHtml}</div>
                    <div class="d-flex align-items-center justify-content-between pt-2 border-top">
                        <span class="small text-muted">${demo.level}</span>
                        <button type="button" class="btn btn-primary btn-sm run-demo-btn">Run Demo</button>
                    </div>
                </div>
            </div>`;

        col.querySelector(".run-demo-btn").addEventListener("click", () => openDemo(demo.id));
        demoGrid.appendChild(col);
    });
}

// --------------------------------------------------------------------------
// Open Demo in Modal
// --------------------------------------------------------------------------

function renderFileTabs() {
    fileTabs.innerHTML = "";
    activeDemo.files.forEach((file, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "file-tab-btn" + (idx === activeFileIndex ? " active" : "");
        btn.textContent = file.name;
        btn.addEventListener("click", () => switchFile(idx));
        fileTabs.appendChild(btn);
    });
}

async function switchFile(idx) {
    activeFileIndex = idx;
    renderFileTabs();

    const file = activeDemo.files[idx];
    codeEditor.value = await getFileCode(file.path);

    const editable = activeDemo.type === "static" && !file.readOnly;
    codeEditor.readOnly = !editable;
    runCodeBtn.classList.toggle("hidden", !editable);
    resetCodeBtn.classList.toggle("hidden", !editable);
}

async function openDemo(demoId) {
    activeDemo = DEMOS.find((d) => d.id === demoId);
    if (!activeDemo) return;

    activeFileIndex = 0;

    // Header metadata
    modalCategory.textContent = activeDemo.category;
    modalLevel.textContent = activeDemo.level;
    modalTitle.textContent = activeDemo.title;
    modalDesc.textContent = activeDemo.desc;

    if (activeDemo.type === "php") {
        modalTypeBadge.className = "badge bg-primary";
        modalTypeBadge.textContent = "PHP / MySQL";
    } else {
        modalTypeBadge.className = "badge bg-success";
        modalTypeBadge.textContent = "Static";
    }

    setModalTab("preview");
    renderFileTabs();

    const mainFile = activeDemo.files[0];
    originalCode = await getFileCode(mainFile.path);
    codeEditor.value = originalCode;

    if (activeDemo.type === "static") {
        codeEditor.readOnly = false;
        runCodeBtn.classList.remove("hidden");
        resetCodeBtn.classList.remove("hidden");
        reloadPreviewBtn.classList.remove("hidden");
        openStandaloneLink.classList.remove("hidden");
        openStandaloneLink.href = mainFile.path;

        previewFrame.classList.remove("hidden");
        phpFallbackBox.classList.add("hidden");
        showStaticPreview(originalCode, activeDemo.basePath);
    } else {
        codeEditor.readOnly = true;
        runCodeBtn.classList.add("hidden");
        resetCodeBtn.classList.add("hidden");

        if (SAME_SERVER_PHP) {
            reloadPreviewBtn.classList.remove("hidden");
            openStandaloneLink.classList.remove("hidden");
            openStandaloneLink.href = mainFile.path;

            previewFrame.classList.remove("hidden");
            phpFallbackBox.classList.add("hidden");
            previewFrame.removeAttribute("srcdoc");
            previewFrame.src = mainFile.path;
        } else {
            reloadPreviewBtn.classList.add("hidden");
            previewFrame.classList.add("hidden");
            phpFallbackBox.classList.remove("hidden");
            phpFallbackDesc.textContent = activeDemo.desc + " You can inspect the HTML and PHP source code in the Source Code tab.";
            phpFallbackActions.innerHTML = "";

            const url = getPhpDemoUrl(activeDemo);
            if (url) {
                openStandaloneLink.classList.remove("hidden");
                openStandaloneLink.href = url;
                phpFallbackActions.innerHTML = `
                    <a class="btn btn-primary" href="${url}" target="_blank" rel="noopener noreferrer">Open Live PHP Demo &#8599;</a>
                    <button type="button" class="btn btn-outline-secondary" id="inspectCodeBtn">Inspect Source Code</button>`;
            } else {
                openStandaloneLink.classList.add("hidden");
                phpFallbackActions.innerHTML = `
                    <button type="button" class="btn btn-primary" id="inspectCodeBtn">Inspect HTML &amp; PHP Code</button>`;
            }

            const inspectBtn = document.getElementById("inspectCodeBtn");
            if (inspectBtn) {
                inspectBtn.addEventListener("click", () => setModalTab("code"));
            }
        }
    }

    demoModal.show();
}

// --------------------------------------------------------------------------
// Events
// --------------------------------------------------------------------------

searchInput.addEventListener("input", renderCatalog);
categoryFilter.addEventListener("change", renderCatalog);
typeFilter.addEventListener("change", renderCatalog);

tabPreviewBtn.addEventListener("click", () => setModalTab("preview"));
tabCodeBtn.addEventListener("click", () => setModalTab("code"));

reloadPreviewBtn.addEventListener("click", () => {
    if (!activeDemo) return;
    if (activeDemo.type === "static") {
        const html = activeFileIndex === 0 ? codeEditor.value : originalCode;
        showStaticPreview(html, activeDemo.basePath);
    } else if (SAME_SERVER_PHP) {
        previewFrame.src = activeDemo.files[0].path;
    }
});

runCodeBtn.addEventListener("click", () => {
    if (activeDemo && activeDemo.type === "static" && activeFileIndex === 0) {
        showStaticPreview(codeEditor.value, activeDemo.basePath);
        setModalTab("preview");
    }
});

resetCodeBtn.addEventListener("click", () => {
    if (activeDemo && activeDemo.type === "static" && activeFileIndex === 0) {
        codeEditor.value = originalCode;
        showStaticPreview(originalCode, activeDemo.basePath);
    }
});

copyCodeBtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(codeEditor.value);
        copyCodeBtn.textContent = "Copied!";
        setTimeout(() => (copyCodeBtn.textContent = "Copy"), 1200);
    } catch (e) {
        codeEditor.select();
        document.execCommand("copy");
    }
});

// Clear iframe when modal closes so timers/sounds stop running in the background
modalEl.addEventListener("hidden.bs.modal", () => {
    previewFrame.removeAttribute("srcdoc");
    previewFrame.src = "about:blank";
});

// Initialize
heroCount.textContent = DEMOS.length;
statTotal.textContent = DEMOS.length;
renderCatalog();
