/* ============ SHARED: MOBILE NAV ============ */
(function () {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
})();

/* ============ LOREM HELPERS ============ */
const LOREM = {
  p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  p2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  p3: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  p4: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
};

/* ============ SERVICE DATA (all service pages) ============ */
const SERVICES = {
  "establishment":        { icon: "🏢", t: { en: "Company Establishment", fa: "تاسیس شرکت", ku: "دامەزراندنی کۆمپانیا" } },
  "dissolution":          { icon: "📉", t: { en: "Company Dissolution", fa: "انحلال شرکت", ku: "داڕووخسڕانی کۆمپانیا" } },
  "liquidation":          { icon: "🧾", t: { en: "Liquidation Termination", fa: "ختم تصفیه شرکت", ku: "تەواوکردنی تصفییە" } },
  "board-renewal":        { icon: "👥", t: { en: "Board of Directors Renewal", fa: "تمدید هیئت مدیره", ku: "نوێکردنەوەی ئەندامانی بەڕێوەبەرایەتی" } },
  "auditor-renewal":      { icon: "🔍", t: { en: "Auditor Renewal", fa: "تمدید بازرس شرکت", ku: "نوێکردنەوەی پشکنەری کۆمپانیا" } },
  "address-change":       { icon: "📍", t: { en: "Address Change / Postal Code", fa: "تغییر نشانی / کدپستی", ku: "گۆڕینی ناونیشان / کۆدی پۆست" } },
  "pl-balance":           { icon: "⚖️", t: { en: "P&L Balance Approval", fa: "تصویب تراز سود و زیان", ku: "پەسەندکردنی تەوازی قازانج و زیان" } },
  "brand":                { icon: "🏷️", t: { en: "Brand Registration", fa: "ثبت برند", ku: "تۆمارکردنی براند" } },
  "industrial-design":    { icon: "🎨", t: { en: "Industrial Design Registration", fa: "ثبت طرح صنعتی", ku: "تۆمارکردنی دیزاینی پیشەسازی" } },
  "brand-renewal":        { icon: "🔄", t: { en: "Brand Renewal", fa: "تمدید برند", ku: "نوێکردنەوەی براند" } },
  "design-renewal":       { icon: "🖌️", t: { en: "Industrial Design Renewal", fa: "تمدید طرح صنعتی", ku: "نوێکردنەوەی دیزاینی پیشەسازی" } },
  "official-gazette":     { icon: "📰", t: { en: "Official Gazette", fa: "روزنامه رسمی", ku: "ڕۆژنامەی فەرمی" } },
  "circulating-newspaper":{ icon: "🗞️", t: { en: "Widely-Circulated Newspaper", fa: "روزنامه پراثر", ku: "ڕۆژنامەی فراوانپاڵاو" } },
  "office-seal":          { icon: "🔏", t: { en: "Office Seal Acquisition", fa: "اخذ مهر شرکت", ku: "بەردەستکردنی مۆری دامەزراوە" } },
  "tax-return":           { icon: "🧮", t: { en: "Tax Return Filing", fa: "ارائه اظهارنامه مالیاتی", ku: "پێشکەشکردنی ئایتمەنتی باج" } },
  "tax-registration":     { icon: "📋", t: { en: "Tax Registration", fa: "ثبت مالیاتی", ku: "تۆمارکردنی باج" } },
  "commercial-card":      { icon: "🛃", t: { en: "Commercial Card Acquisition", fa: "اخذ کارت بازرگانی", ku: "بەردەستکردنی کارتی بازرگانی" } },
  "commercial-card-renewal": { icon: "🔁", t: { en: "Commercial Card Renewal", fa: "تمدید کارت بازرگانی", ku: "نوێکردنەوەی کارتی بازرگانی" } },
  "license":              { icon: "📜", t: { en: "Business License Acquisition", fa: "اخذ جواز کسب", ku: "بەردەستکردنی مۆڵەت" } },
  "rank":                 { icon: "🏅", t: { en: "Company Rank / Rating", fa: "رتبه / درجه شرکت", ku: "پلە / زنجیرەی کۆمپانیا" } },
  "intl-oman":            { icon: "🌍", t: { en: "Company Registration — Oman", fa: "ثبت شرکت — عمان", ku: "تۆمارکردنی کۆمپانیا — عومران" } },
  "intl-uae":             { icon: "🌐", t: { en: "Company Registration — UAE", fa: "ثبت شرکت — امارات", ku: "تۆمارکردنی کۆمپانیا — ئیمارات" } },
};
window.MC_SERVICES = SERVICES;

function svcTitle(svc) {
  const lang = (window.MC_I18N && MC_I18N.lang) || "en";
  return (svc.t && svc.t[lang]) || svc.t.en;
}

const DEFAULT_STEPS = {
  en: [
    "Submit your request online and receive an order number.",
    "A dedicated consultant contacts you to confirm the details.",
    "Documents are collected, reviewed, and prepared for filing.",
    "All administrative and governmental steps are completed on your behalf.",
    "Final documents are delivered with ongoing support.",
  ],
  fa: [
    "درخواست خود را به صورت آنلاین ثبت کنید و شماره سفارش دریافت کنید.",
    "کارشناس ویژه‌ای با شما تماس می‌گیرد تا جزئیات را تایید کند.",
    "مدارک جمع‌آوری، بررسی و آماده‌سازی برای ثبت می‌شوند.",
    "تمام مراحل اداری و دولتی به جای شما انجام می‌شود.",
    "مدارک نهایی همراه با پشتیبانی مستمر تحویل داده می‌شود.",
  ],
  ku: [
    "داواکارییەکەت بە شێوەی ئۆنلاین تۆمار بکە و ژمارەی داواکاری وەربگرە.",
    "تایبەتمەندێکی تایبەت پەیوەندیت پێوە دەکات بۆ دڵنیابوونەوەی وردەکارییەکان.",
    "بەڵگەنامەکان کۆدەکرێنەوە و پشکنین و ئامادەکارییان بۆ تۆمارکردن دەکرێت.",
    "هەموو قۆناغە ئیداری و حکومەتییەکان لە ناوی تۆ جێبەجێ دەکرێن.",
    "بەڵگەنامە کۆتایییەکان لەگەڵ پشتگیرییە بەردەوامدا دەگەنە دەستت.",
  ],
};

const DEFAULT_DOCS = {
  en: [
    "National ID / passport copy of all shareholders and the manager",
    "Passport-size photographs",
    "Proposed names (three alternatives)",
    "Proof of address / recent utility bill",
    "Residency permit or visa copy (if applicable)",
    "Description of the business activity",
  ],
  fa: [
    "کپی کارت ملی / گذرنامه تمام سهامداران و مدیر",
    "عکس پرسنلی",
    "نام‌های پیشنهادی (سه گزینه)",
    "گواهی نشانی / قبض خدمات اخیر",
    "کپی اقامت یا ویزا (در صورت لزوم)",
    "شرح فعالیت تجاری",
  ],
  ku: [
    "لەکۆڵی کارتی نەتەوەیی / پاسپۆرتی هەموو هاوبەش و بەڕێوەبەرەکە",
    "وێنەی قەبارەی پاسپۆرت",
    "ناونیشانە پێشنیارکراوەکان (سێ هەڵبژاردە)",
    "بەڵگەی ناونیشان / فاکتۆری خزمەتگوزارییە دوایینەکان",
    "لەکۆڵی مۆڵەتی نیشتەجێبوون یان ڤیزا (ئەگەر گونجاوبێت)",
    "وەسفکردنی چالاکییە بازرگانییەکە",
  ],
};

const DEFAULT_FAQ = [
  { q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", a: LOREM.p2 },
  { q: "Sed do eiusmod tempor incididunt ut labore et dolore magna?", a: LOREM.p3 },
  { q: "Ut enim ad minim veniam, quis nostrud exercitation ullamco?", a: LOREM.p4 },
];

function renderService() {
  const main = document.getElementById("serviceMain");
  if (!main) return;

  const params = new URLSearchParams(location.search);
  const id = params.get("id") || "establishment";
  const svc = SERVICES[id] || SERVICES.establishment;
  const lang = (window.MC_I18N && MC_I18N.lang) || "en";
  const title = svcTitle(svc);
  const steps = DEFAULT_STEPS[lang] || DEFAULT_STEPS.en;
  const docs = DEFAULT_DOCS[lang] || DEFAULT_DOCS.en;

  document.title = title + " — Meridian Corporate";
  document.getElementById("breadcrumbCurrent").textContent = title;
  document.getElementById("serviceIcon").textContent = svc.icon;
  document.getElementById("serviceTitle").textContent = title;

  main.innerHTML = `
    <p><strong>${title}</strong> — ${LOREM.p1}</p>
    <p>${LOREM.p2}</p>

    <h2>How the process works</h2>
    <ol class="ordered-steps">
      ${steps.map((s) => `<li>${s}</li>`).join("")}
    </ol>

    <h2>Required documents</h2>
    <ul class="doc-list">
      ${docs.map((d) => `<li>${d}</li>`).join("")}
    </ul>
    <p style="margin-top:14px;">${LOREM.p3}</p>

    <h2>Frequently asked questions</h2>
    <div id="faqList">
      ${DEFAULT_FAQ.map((f) => `
        <div class="faq-item">
          <button class="faq-q" type="button">${f.q}<span class="faq-caret">▼</span></button>
          <div class="faq-a"><p>${f.a}</p></div>
        </div>`).join("")}
    </div>
  `;

  // Related services in sidebar
  const related = Object.entries(SERVICES)
    .filter(([key]) => key !== id)
    .slice(0, 6)
    .map(([key, s]) => `<div class="side-link"><a href="service.html?id=${key}">${svcTitle(s)}</a><span class="arrow">←</span></div>`);
  document.getElementById("relatedServices").innerHTML = related.join("");

  bindFaq();
  if (window.MC_I18N) { MC_I18N.resnapshot(); MC_I18N.apply(); } // refresh + translate rendered content
}

function bindFaq() {
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const wasOpen = item.classList.contains("open");
      item.parentElement.querySelectorAll(".faq-item.open").forEach((i) => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

document.addEventListener("DOMContentLoaded", renderService);
document.addEventListener("mc:langchange", () => {
  if (document.getElementById("serviceMain")) renderService();
});

/* ============ QUICK CONSULT FORM (home band) ============ */
(function () {
  const form = document.getElementById("quickConsultForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    const name = form.elements["name"];
    const phone = form.elements["phone"];
    const subject = form.elements["subject"];

    const checks = [
      [name, name.value.trim().length >= 2],
      [phone, /^[+\d][\d\s\-()]{6,}$/.test(phone.value.trim())],
      [subject, subject.value !== ""],
    ];
    checks.forEach(([input, ok]) => {
      const group = input.closest(".form-group");
      group.classList.toggle("invalid", !ok);
      if (!ok) valid = false;
    });
    if (!valid) return;

    submitJson(form, "/api/messages", {
      kind: "quick",
      name: name.value.trim(),
      phone: phone.value.trim(),
      service: subject.value,
    }, () => {
      const banner = document.getElementById("quickConsultSuccess");
      banner.classList.add("show");
      form.reset();
      banner.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  form.addEventListener("input", (e) => {
    const group = e.target.closest(".form-group");
    if (group) group.classList.remove("invalid");
  });
})();

/* ============ UPLOAD PAGE ============ */
(function () {
  const dropzone = document.getElementById("dropzone");
  if (!dropzone) return;

  const fileInput = document.getElementById("fileInput");
  const fileList = document.getElementById("fileList");
  const submitBtn = document.getElementById("submitUpload");
  const clearBtn = document.getElementById("clearAll");
  const successBanner = document.getElementById("uploadSuccess");

  const MAX_SIZE = 10 * 1024 * 1024;
  const files = [];

  const fileIcon = (name) => {
    const ext = (name.split(".").pop() || "").toLowerCase();
    if (ext === "pdf") return "📕";
    if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) return "🖼️";
    if (["doc", "docx"].includes(ext)) return "📘";
    return "📄";
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  dropzone.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", () => { addFiles(fileInput.files); fileInput.value = ""; });

  ["dragenter", "dragover"].forEach((evt) =>
    dropzone.addEventListener(evt, (e) => { e.preventDefault(); dropzone.classList.add("dragover"); })
  );
  ["dragleave", "drop"].forEach((evt) =>
    dropzone.addEventListener(evt, (e) => { e.preventDefault(); dropzone.classList.remove("dragover"); })
  );
  dropzone.addEventListener("drop", (e) => addFiles(e.dataTransfer.files));

  function addFiles(list) {
    for (const file of list) {
      if (file.size > MAX_SIZE) {
        alert(MC_I18N.t("fileTooBig").replace("{name}", file.name));
        continue;
      }
      const item = { id: Date.now() + Math.random(), file, progress: 0, done: false };
      files.push(item);
      renderFile(item);
      simulateUpload(item);
    }
    updateSubmit();
  }

  function renderFile(item) {
    const el = document.createElement("div");
    el.className = "file-item";
    el.dataset.id = item.id;

    const isImage = /^image\//.test(item.file.type);
    const thumb = isImage
      ? `<img src="${URL.createObjectURL(item.file)}" alt="" />`
      : fileIcon(item.file.name);

    el.innerHTML = `
      <div class="file-thumb">${thumb}</div>
      <div class="file-info">
        <div class="file-name">${escapeHtml(item.file.name)}</div>
        <div class="file-meta">${formatSize(item.file.size)}</div>
        <div class="file-progress"><div class="file-progress-bar"></div></div>
      </div>
      <span class="file-status uploading">${MC_I18N.t("Uploading…")}</span>
      <button class="file-remove" title="Remove" aria-label="Remove file">✕</button>
    `;

    el.querySelector(".file-remove").addEventListener("click", () => {
      const idx = files.findIndex((f) => f.id === item.id);
      if (idx > -1) files.splice(idx, 1);
      el.remove();
      updateSubmit();
    });

    fileList.appendChild(el);
  }

  function realUpload(item) {
    const el = fileList.querySelector(`[data-id="${item.id}"]`);
    const bar = el.querySelector(".file-progress-bar");
    const status = el.querySelector(".file-status");

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/upload");
    xhr.upload.addEventListener("progress", (e) => {
      if (!e.total) return;
      item.progress = (e.loaded / e.total) * 100;
      bar.style.width = item.progress + "%";
    });
    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        item.progress = 100;
        bar.style.width = "100%";
        bar.classList.add("done");
        item.done = true;
        status.textContent = MC_I18N.t("Uploaded ✓");
        status.className = "file-status done";
        updateSubmit();
      } else {
        status.textContent = MC_I18N.t("Failed");
        status.className = "file-status";
        status.style.color = "#c0392b";
      }
    });
    xhr.addEventListener("error", () => {
      status.textContent = MC_I18N.t("Failed");
      status.style.color = "#c0392b";
    });

    const fd = new FormData();
    fd.append("documents", item.file);
    xhr.send(fd);
  }

  function updateSubmit() {
    submitBtn.disabled = files.length === 0 || !files.every((f) => f.done);
  }

  clearBtn.addEventListener("click", () => {
    files.length = 0;
    fileList.innerHTML = "";
    successBanner.classList.remove("show");
    updateSubmit();
  });

  submitBtn.addEventListener("click", () => {
    submitBtn.disabled = true;
    // files were already uploaded individually; this confirms the batch
    fetch("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ confirm: true, files: files.map((f) => f.file.name) }),
    })
      .then((r) => r.json().then((j) => ({ ok: r.ok, j })))
      .then(({ ok }) => {
        if (!ok) return;
        successBanner.classList.add("show");
        successBanner.scrollIntoView({ behavior: "smooth", block: "center" });
      })
      .catch(() => {})
      .finally(() => updateSubmit());
  });

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
})();

/* ============ CONSULTATION PAGE FORM ============ */
(function () {
  const form = document.getElementById("consultForm");
  if (!form) return;

  const successBanner = document.getElementById("formSuccess");
  const dateInput = document.getElementById("preferredDate");
  if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];

  const validators = {
    fullName: (v) => v.trim().length >= 2,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    phone: (v) => /^[+\d][\d\s\-()]{6,}$/.test(v.trim()),
    service: (v) => v !== "",
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    for (const [name, test] of Object.entries(validators)) {
      const input = form.elements[name];
      const group = input.closest(".form-group");
      const ok = test(input.value);
      group.classList.toggle("invalid", !ok);
      if (!ok) valid = false;
    }
    if (!valid) {
      form.querySelector(".form-group.invalid input, .form-group.invalid select")?.focus();
      return;
    }

    submitJson(form, "/api/messages", {
      kind: "consultation",
      fullName: form.elements["fullName"].value.trim(),
      email: form.elements["email"].value.trim(),
      phone: form.elements["phone"].value.trim(),
      service: form.elements["service"].value,
      preferredDate: form.elements["preferredDate"].value,
      preferredTime: form.elements["preferredTime"].value,
      message: form.elements["message"].value.trim(),
    }, () => {
      successBanner.classList.add("show");
      successBanner.scrollIntoView({ behavior: "smooth", block: "center" });
      form.reset();
    });
  });

  form.addEventListener("input", (e) => {
    const group = e.target.closest(".form-group");
    if (group) group.classList.remove("invalid");
  });
})();

/* ============ CONTACT PAGE FORM ============ */
(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    const checks = {
      name: form.elements["name"].value.trim().length >= 2,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.elements["email"].value.trim()),
      message: form.elements["message"].value.trim().length >= 5,
    };
    for (const [name, ok] of Object.entries(checks)) {
      const group = form.elements[name].closest(".form-group");
      group.classList.toggle("invalid", !ok);
      if (!ok) valid = false;
    }
    if (!valid) return;

    submitJson(form, "/api/messages", {
      kind: "contact",
      name: form.elements["name"].value.trim(),
      email: form.elements["email"].value.trim(),
      message: form.elements["message"].value.trim(),
    }, () => {
      document.getElementById("contactSuccess").classList.add("show");
      form.reset();
    });
  });

  form.addEventListener("input", (e) => {
    const group = e.target.closest(".form-group");
    if (group) group.classList.remove("invalid");
  });
})();

/* ============ TRACK ORDER PAGE ============ */
(function () {
  const form = document.getElementById("trackForm");
  if (!form) return;

  const lang = () => (window.MC_I18N && MC_I18N.lang) || "en";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const orderId = form.elements["orderId"].value.trim();
    if (orderId.length < 4) {
      form.elements["orderId"].closest(".form-group").classList.add("invalid");
      return;
    }
    form.elements["orderId"].closest(".form-group").classList.remove("invalid");

    const result = document.getElementById("trackResult");
    fetch("/api/track/" + encodeURIComponent(orderId))
      .then((r) => r.json().then((j) => ({ ok: r.ok, j })))
      .then(({ ok, j }) => {
        if (!ok) {
          alert(MC_I18N.t("Order not found. Please check the number and try again."));
          return;
        }
        const L = lang();
        document.getElementById("trackOrderId").textContent = j.id;
        const timeline = result.querySelector(".track-timeline");
        if (timeline) {
          timeline.innerHTML = j.steps
            .map((s, i) => {
              const dot = s.state === "done" ? "✓" : s.state === "active" ? "•" : i + 1;
              const note = s.state === "done" ? (L === "en" ? "completed" : L === "fa" ? "انجام شد" : "تەواو بوو")
                : s.state === "active" ? (L === "en" ? "in progress" : L === "fa" ? "در حال انجام" : "لە جێبەجێکردن")
                : (L === "en" ? "pending" : L === "fa" ? "در انتظار" : "چاوەڕوان");
              return `<div class="track-step ${s.state}">
                <div class="track-dot">${dot}</div>
                <div><h4>${s[L] || s.en}</h4><p>${note}</p></div>
              </div>`;
            })
            .join("");
        }
        result.classList.add("show");
        result.scrollIntoView({ behavior: "smooth", block: "center" });
      })
      .catch(() => alert(MC_I18N.t("Something went wrong. Please try again.")));
  });
})();

/* ============ AUTH PAGE TABS ============ */
(function () {
  const tabs = document.querySelectorAll(".auth-tab");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      document.querySelectorAll(".auth-panel").forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.panel).classList.add("active");
    });
  });

  document.querySelectorAll(".auth-panel form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const isLogin = form.closest(".auth-panel").id === "loginPanel";
      const inputs = [...form.querySelectorAll("input")];
      const payload = isLogin
        ? { email: inputs[0].value.trim(), password: inputs[1].value }
        : { name: inputs[0].value.trim(), email: inputs[1].value.trim(), phone: inputs[2].value.trim(), password: inputs[3].value };
      submitJson(form, isLogin ? "/api/auth/login" : "/api/auth/register", payload, () => {
        const banner = form.parentElement.querySelector(".success-banner");
        if (banner) {
          banner.classList.add("show");
          banner.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        form.reset();
      });
    });
  });
})();

/* ============ SHARED: JSON FORM SUBMIT ============ */
function submitJson(form, url, payload, onOk) {
  const btn = form.querySelector('button[type="submit"], .btn');
  if (btn) { btn.disabled = true; }
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((r) => r.json().then((j) => ({ ok: r.ok, j })))
    .then(({ ok, j }) => {
      if (!ok) alert((window.MC_I18N ? MC_I18N.t(j.error) : j.error) || "Error");
      else onOk(j);
    })
    .catch(() => alert(window.MC_I18N ? MC_I18N.t("Network error. Please try again.") : "Network error."))
    .finally(() => { if (btn) btn.disabled = false; });
}
