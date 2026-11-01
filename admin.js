/* ============ ADMIN PANEL LOGIC (API-backed) ============ */
(function () {
  const DB = {
    orders: [],
    articles: [],
    messages: [],
    users: [],
    customServices: [],
    settings: { siteName: "", phone: "", email: "", hours: "" },
  };

  const t = (s) => (window.MC_I18N ? MC_I18N.t(s) : s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---- API helpers ---- */
  async function api(path, opts = {}) {
    const res = await fetch(path, {
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      ...opts,
      body: opts.body ? JSON.stringify(opts.body) : undefined,
    });
    const j = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(j.error || "request failed");
    return j;
  }
  const apiGet = (p) => api(p);
  const apiPost = (p, body) => api(p, { method: "POST", body });
  const apiPut = (p, body) => api(p, { method: "PUT", body });
  const apiDel = (p) => api(p, { method: "DELETE" });

  async function refresh() {
    const d = await apiGet("/api/admin/data");
    Object.assign(DB, d);
  }

  /* ---- Auth ---- */
  const loginScreen = document.getElementById("adminLogin");
  const app = document.getElementById("adminApp");

  async function showApp() {
    try {
      await refresh();
    } catch (e) {
      // not authenticated (or server issue) — stay on login
      showLogin();
      return;
    }
    loginScreen.style.display = "none";
    app.hidden = false;
    renderAll();
  }
  function showLogin() {
    app.hidden = true;
    loginScreen.style.display = "flex";
  }

  document.getElementById("adminLoginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const pass = document.getElementById("adminPass");
    const group = pass.closest(".form-group");
    group.classList.remove("invalid");
    try {
      await apiPost("/api/admin/login", { password: pass.value });
      await showApp();
    } catch {
      group.classList.add("invalid");
    }
  });

  document.getElementById("adminLogout").addEventListener("click", async () => {
    try { await apiPost("/api/auth/logout", {}); } catch {}
    showLogin();
  });

  /* ---- Navigation ---- */
  const nav = document.getElementById("adminNav");
  nav.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-view]");
    if (!btn) return;
    nav.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".admin-view").forEach((v) => (v.hidden = true));
    document.getElementById("view-" + btn.dataset.view).hidden = false;
  });

  /* ---- Renderers ---- */
  const STATUS = {
    new: { label: "New", cls: "status-new" },
    progress: { label: "In Progress", cls: "status-progress" },
    completed: { label: "Completed", cls: "status-completed" },
    cancelled: { label: "Cancelled", cls: "status-cancelled" },
  };
  const statusLabel = (k) => t(STATUS[k].label);
  const statusBadge = (k) => `<span class="status-badge ${STATUS[k].cls}">${statusLabel(k)}</span>`;

  function ordersTable(rows, editable) {
    const head = `<tr><th>${t("Order Number")}</th><th>${t("Customer")}</th><th>${t("Service")}</th><th>${t("Status")}</th><th>$</th><th>${t("Date")}</th>${editable ? `<th>${t("Actions")}</th>` : ""}</tr>`;
    const body = rows
      .map((o) => {
        const sel = editable
          ? `<select data-id="${esc(o.id)}">${Object.keys(STATUS).map((k) => `<option value="${k}" ${k === o.status ? "selected" : ""}>${statusLabel(k)}</option>`).join("")}</select>`
          : statusBadge(o.status);
        const del = editable ? `<button class="row-del" data-del="${esc(o.id)}" title="${t("Delete")}">✕</button>` : "";
        return `<tr><td><strong>${esc(o.id)}</strong></td><td>${esc(o.customer)}</td><td>${esc(o.service)}</td><td>${sel}</td><td>${o.amount}</td><td>${esc(o.date)}</td>${editable ? `<td>${del}</td>` : ""}</tr>`;
      })
      .join("");
    return `<table class="admin-table"><thead>${head}</thead><tbody>${body}</tbody></table>`;
  }

  function renderDashboard() {
    const total = DB.orders.length;
    const pending = DB.orders.filter((o) => o.status === "new" || o.status === "progress").length;
    const revenue = DB.orders.filter((o) => o.status === "completed").reduce((s, o) => s + o.amount, 0);
    const unread = DB.messages.filter((m) => !m.read).length;
    document.getElementById("adminStats").innerHTML = `
      <div class="admin-stat"><strong>${total}</strong><span>${t("Total Orders")}</span></div>
      <div class="admin-stat"><strong>${pending}</strong><span>${t("Pending")}</span></div>
      <div class="admin-stat"><strong>$${revenue.toLocaleString()}</strong><span>${t("Revenue")}</span></div>
      <div class="admin-stat"><strong>${unread}</strong><span>${t("New Messages")}</span></div>`;
    document.getElementById("adminRecent").innerHTML = ordersTable(DB.orders.slice(0, 5), false);
  }

  function renderOrders() {
    document.getElementById("adminOrdersTable").innerHTML = ordersTable(DB.orders, true);
    document.querySelectorAll("#adminOrdersTable select").forEach((sel) =>
      sel.addEventListener("change", async () => {
        try {
          await apiPut("/api/admin/orders/" + encodeURIComponent(sel.dataset.id), { status: sel.value });
          await refresh();
          renderDashboard();
        } catch (e) { alert(e.message); }
      })
    );
    document.querySelectorAll("#adminOrdersTable .row-del").forEach((btn) =>
      btn.addEventListener("click", async () => {
        try {
          await apiDel("/api/admin/orders/" + encodeURIComponent(btn.dataset.del));
          await refresh();
          renderOrders(); renderDashboard();
        } catch (e) { alert(e.message); }
      })
    );
  }

  function allServices() {
    const base = Object.entries(window.MC_SERVICES || {}).map(([id, s]) => ({ id, en: s.t.en, fa: s.t.fa, ku: s.t.ku, custom: false }));
    const custom = DB.customServices.map((s) => ({ ...s, custom: true }));
    return base.concat(custom);
  }

  function renderServices() {
    const rows = allServices()
      .map(
        (s) => `<tr><td><strong>${esc(s.en)}</strong></td><td dir="rtl">${esc(s.fa || "—")}</td><td dir="rtl">${esc(s.ku || "—")}</td>${
          s.custom ? `<td><button class="row-del" data-del="${esc(s.id)}" title="${t("Delete")}">✕</button></td>` : "<td></td>"
        }</tr>`
      )
      .join("");
    document.getElementById("adminServicesTable").innerHTML = `<table class="admin-table"><thead><tr><th>${t("Title (EN)")}</th><th>${t("Title (FA)")}</th><th>${t("Title (KU)")}</th><th>${t("Actions")}</th></tr></thead><tbody>${rows}</tbody></table>`;
    document.querySelectorAll("#adminServicesTable .row-del").forEach((btn) =>
      btn.addEventListener("click", async () => {
        try {
          await apiDel("/api/admin/services/" + encodeURIComponent(btn.dataset.del));
          await refresh();
          renderServices();
        } catch (e) { alert(e.message); }
      })
    );
  }

  document.getElementById("serviceForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const en = document.getElementById("svcEn").value.trim();
    if (!en) return;
    try {
      await apiPost("/api/admin/services", {
        en,
        fa: document.getElementById("svcFa").value.trim(),
        ku: document.getElementById("svcKu").value.trim(),
      });
      await refresh();
      e.target.reset();
      renderServices();
    } catch (err) { alert(err.message); }
  });

  function renderArticles() {
    const rows = DB.articles
      .map(
        (a) => `<tr><td>${esc(a.title)}</td><td>${esc(a.cat)}</td><td>${esc(a.date)}</td><td><button class="row-del" data-del="${a.id}" title="${t("Delete")}">✕</button></td></tr>`
      )
      .join("");
    document.getElementById("adminArticlesTable").innerHTML = `<table class="admin-table"><thead><tr><th>${t("Articles")}</th><th>${t("Categories")}</th><th>${t("Date")}</th><th>${t("Actions")}</th></tr></thead><tbody>${rows}</tbody></table>`;
    document.querySelectorAll("#adminArticlesTable .row-del").forEach((btn) =>
      btn.addEventListener("click", async () => {
        try {
          await apiDel("/api/admin/articles/" + btn.dataset.del);
          await refresh();
          renderArticles();
        } catch (e) { alert(e.message); }
      })
    );
  }

  document.getElementById("articleForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("artTitle").value.trim();
    if (!title) return;
    try {
      await apiPost("/api/admin/articles", {
        title,
        cat: document.getElementById("artCat").value.trim() || "General",
        date: document.getElementById("artDate").value || new Date().toISOString().split("T")[0],
      });
      await refresh();
      e.target.reset();
      renderArticles();
    } catch (err) { alert(err.message); }
  });

  function renderMessages() {
    document.getElementById("adminMessagesList").innerHTML = DB.messages
      .map(
        (m) => `<div class="msg-card ${m.read ? "" : "unread"}">
          <div class="msg-head"><strong>${esc(m.name)}</strong><span>${esc(m.email)} · ${esc(m.phone)} · ${esc(m.date)}</span></div>
          <p><strong>${esc(m.service)}:</strong> ${esc(m.text)}</p>
          <div class="msg-actions">
            ${m.read ? "" : `<button data-read="${m.id}">${t("Mark read")}</button>`}
            <button data-mdel="${m.id}">${t("Delete")}</button>
          </div>
        </div>`
      )
      .join("") || `<p style="color: var(--gray-500);">—</p>`;
    document.querySelectorAll("[data-read]").forEach((b) =>
      b.addEventListener("click", async () => {
        try {
          await apiPut("/api/admin/messages/" + b.dataset.read, { read: true });
          await refresh();
          renderMessages(); renderDashboard();
        } catch (e) { alert(e.message); }
      })
    );
    document.querySelectorAll("[data-mdel]").forEach((b) =>
      b.addEventListener("click", async () => {
        try {
          await apiDel("/api/admin/messages/" + b.dataset.mdel);
          await refresh();
          renderMessages(); renderDashboard();
        } catch (e) { alert(e.message); }
      })
    );
  }

  function renderUsers() {
    const rows = DB.users
      .map(
        (u) => `<tr><td>${esc(u.name)}</td><td>${esc(u.email)}</td><td>${esc(u.phone)}</td><td>${esc(u.joined)}</td><td><button class="row-del" data-del="${u.id}" title="${t("Delete")}">✕</button></td></tr>`
      )
      .join("");
    document.getElementById("adminUsersTable").innerHTML = `<table class="admin-table"><thead><tr><th>${t("Users")}</th><th>${t("Email")}</th><th>${t("Phone")}</th><th>${t("Date")}</th><th>${t("Actions")}</th></tr></thead><tbody>${rows}</tbody></table>`;
    document.querySelectorAll("#adminUsersTable .row-del").forEach((btn) =>
      btn.addEventListener("click", async () => {
        try {
          await apiDel("/api/admin/users/" + btn.dataset.del);
          await refresh();
          renderUsers();
        } catch (e) { alert(e.message); }
      })
    );
  }

  /* ---- Settings ---- */
  function renderSettings() {
    const s = DB.settings;
    document.getElementById("setSiteName").value = s.siteName;
    document.getElementById("setPhone").value = s.phone;
    document.getElementById("setEmail").value = s.email;
    document.getElementById("setHours").value = s.hours;
  }

  document.getElementById("settingsForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      await apiPut("/api/admin/settings", {
        siteName: document.getElementById("setSiteName").value,
        phone: document.getElementById("setPhone").value,
        email: document.getElementById("setEmail").value,
        hours: document.getElementById("setHours").value,
      });
      await refresh();
      const banner = document.getElementById("settingsSaved");
      banner.classList.add("show");
      setTimeout(() => banner.classList.remove("show"), 2500);
    } catch (err) { alert(err.message); }
  });

  function renderAll() {
    renderDashboard();
    renderOrders();
    renderServices();
    renderArticles();
    renderMessages();
    renderUsers();
    renderSettings();
  }

  /* ---- Init: check existing admin session ---- */
  showApp();
})();
