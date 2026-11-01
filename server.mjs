/* ============ MERIDIAN CORPORATE — BACKEND ============
   Zero-dependency Node server: static files + JSON API.
   Data:  data.json   (orders, articles, messages, users, custom services, settings)
   Files: uploads/    (customer document uploads)
   Run:   node server.mjs   (PORT env var supported, default 4802)
========================================================= */
import http from "node:http";
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { scryptSync, randomBytes, timingSafeEqual, randomUUID } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(ROOT, "data.json");
const UPLOAD_DIR = path.join(ROOT, "uploads");
const PORT = +(process.env.PORT || 4802);
export const DEFAULT_ADMIN_PASSWORD = "Mrdn-4Kq9xWvTz8";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD;
const SESSION_TTL = 1000 * 60 * 60 * 12; // 12 h
const MAX_BODY = 1024 * 1024; // 1 MB JSON bodies
const MAX_FILE = 10 * 1024 * 1024; // 10 MB per upload (matches frontend)
const ALLOWED_EXT = new Set([".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx"]);

mkdirSync(UPLOAD_DIR, { recursive: true });

/* ---------------- data layer ---------------- */
const SEED = {
  orders: [
    { id: "MC-2025-00123", customer: "John Smith", service: "Company Establishment", status: "progress", amount: 980, date: "2025-01-10" },
    { id: "MC-2025-00124", customer: "Sara Ahmed", service: "Brand Registration", status: "new", amount: 190, date: "2025-01-11" },
    { id: "MC-2025-00125", customer: "Omar Khalid", service: "Commercial Card Acquisition", status: "completed", amount: 350, date: "2025-01-08" },
    { id: "MC-2025-00126", customer: "Lina Haddad", service: "Tax Return Filing", status: "progress", amount: 220, date: "2025-01-12" },
    { id: "MC-2025-00127", customer: "Ali Reza", service: "Company Dissolution", status: "cancelled", amount: 480, date: "2025-01-05" },
  ],
  articles: [
    { id: 1, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod", cat: "Registration", date: "2025-01-12" },
    { id: 2, title: "Duis aute irure dolor in reprehenderit in voluptate velit", cat: "Brand", date: "2025-01-05" },
    { id: 3, title: "Excepteur sint occaecat cupidatat non proident sunt in culpa", cat: "Trade", date: "2024-12-28" },
    { id: 4, title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem", cat: "Licensing", date: "2024-12-15" },
  ],
  messages: [
    { id: 1, kind: "contact", name: "John Smith", email: "john@example.com", phone: "+1 555 000 1111", service: "Company Registration", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", read: false, date: "2025-01-12" },
    { id: 2, kind: "consultation", name: "Sara Ahmed", email: "sara@example.com", phone: "+1 555 000 2222", service: "Brand & Industrial Design", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", read: false, date: "2025-01-11" },
    { id: 3, kind: "quick", name: "Omar Khalid", email: "", phone: "+1 555 000 3333", service: "Commercial Card", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.", read: true, date: "2025-01-09" },
  ],
  users: [
    { id: 1, name: "John Smith", email: "john@example.com", phone: "+1 555 000 1111", joined: "2024-11-02" },
    { id: 2, name: "Sara Ahmed", email: "sara@example.com", phone: "+1 555 000 2222", joined: "2024-12-14" },
    { id: 3, name: "Omar Khalid", email: "omar@example.com", phone: "+1 555 000 3333", joined: "2025-01-03" },
  ],
  customServices: [],
  settings: {
    siteName: "Meridian Corporate",
    phone: "+1 (555) 010-2030",
    email: "hello@meridiancorp.example",
    hours: "Mon–Fri: 9:00 – 17:00 · Sat: 9:00 – 14:00",
  },
};

function load() {
  try {
    const d = JSON.parse(readFileSync(DATA_FILE, "utf8"));
    for (const k of Object.keys(SEED)) if (!(k in d)) d[k] = SEED[k];
    if (!d.sessions) d.sessions = {};
    return d;
  } catch {
    const d = structuredClone(SEED);
    d.sessions = {};
    return d;
  }
}
function save(d) {
  writeFileSync(DATA_FILE, JSON.stringify(d, null, 1));
}

const nextId = (arr) => arr.reduce((m, x) => Math.max(m, +x.id || 0), 0) + 1;
const today = () => new Date().toISOString().split("T")[0];
const newOrderId = (d) => {
  const y = new Date().getFullYear();
  const n = d.orders.filter((o) => o.id.startsWith(`MC-${y}-`)).length + 128;
  return `MC-${y}-${String(n).padStart(5, "0")}`;
};

/* ---------------- helpers ---------------- */
const hashPw = (pw, salt) => scryptSync(pw, salt, 32).toString("hex");
function checkPw(u, pw) {
  const h = Buffer.from(hashPw(pw, u.salt), "hex");
  return h.length === Buffer.from(u.hash, "hex").length && timingSafeEqual(h, Buffer.from(u.hash, "hex"));
}
const pubUser = (u) => ({ id: u.id, name: u.name, email: u.email, phone: u.phone, joined: u.joined });

function readBody(req) {
  return new Promise((res, rej) => {
    let b = "";
    req.on("data", (c) => {
      b += c;
      if (b.length > MAX_BODY) { rej(new Error("body too large")); req.destroy(); }
    });
    req.on("end", () => {
      if (!b) return res({});
      try { res(JSON.parse(b)); } catch { rej(new Error("invalid JSON")); }
    });
    req.on("error", rej);
  });
}

function sendJson(res, code, obj, extra = {}) {
  const body = JSON.stringify(obj);
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...extra });
  res.end(body);
}

function getSession(req, d) {
  const c = (req.headers.cookie || "").split("; ").find((x) => x.startsWith("mctok="));
  if (!c) return null;
  const s = d.sessions[c.slice(6)];
  if (!s || s.exp < Date.now()) return null;
  return s;
}

/* ---------------- order tracking timeline ---------------- */
const TIMELINE = [
  { en: "Order received", fa: "سفارش دریافت شد", ku: "داواکاری وەرگیرا" },
  { en: "Documents under review", fa: "بررسی مدارک", ku: "پشکنینی بەڵگەنامەکان" },
  { en: "Administrative steps in progress", fa: "انجام مراحل اداری", ku: "قۆناغە ئیدارییەکان لە جێبەجێکردن" },
  { en: "Final delivery & support", fa: "تحویل نهایی و پشتیبانی", ku: "گەیاندنی کۆتایی و پشتگیری" },
];
const STEP_FOR = { new: 2, progress: 3, completed: 4, cancelled: 1 };

function trackPayload(o) {
  const step = STEP_FOR[o.status] ?? 1;
  const steps = TIMELINE.map((t, i) => {
    const n = i + 1;
    let state = "pending";
    if (o.status === "cancelled") state = n === 1 ? "done" : "pending";
    else if (n < step) state = "done";
    else if (n === step) state = o.status === "completed" ? "done" : "active";
    return { ...t, state };
  });
  return {
    id: o.id, customer: o.customer, service: o.service, status: o.status,
    amount: o.amount, date: o.date,
    steps: steps.map((s) => ({ en: s.en, fa: s.fa, ku: s.ku, state: s.state })),
  };
}

/* ---------------- multipart parser (files only) ---------------- */
function parseMultipart(req) {
  return new Promise((resolve, reject) => {
    const ct = req.headers["content-type"] || "";
    const m = /boundary=(?:"([^"]+)"|([^;]+))/i.exec(ct);
    if (!m) return reject(new Error("missing multipart boundary"));
    const boundary = "--" + (m[1] || m[2]);
    const chunks = [];
    let size = 0;
    req.on("data", (c) => {
      size += c.length;
      if (size > MAX_FILE * 8 + 1024 * 1024) { reject(new Error("upload too large")); req.destroy(); return; }
      chunks.push(c);
    });
    req.on("end", () => {
      try {
        const buf = Buffer.concat(chunks);
        const files = [];
        let start = buf.indexOf(boundary) + boundary.length;
        while (start !== -1 && start < buf.length) {
          // skip CRLF after boundary
          if (buf[start] === 13 && buf[start + 1] === 10) start += 2;
          const end = buf.indexOf(boundary, start);
          if (end === -1) break;
          let part = buf.slice(start, end);
          // strip trailing CRLF before boundary
          if (part[part.length - 2] === 13 && part[part.length - 1] === 10) part = part.slice(0, -2);
          const headerEnd = part.indexOf("\r\n\r\n");
          if (headerEnd !== -1) {
            const headers = part.slice(0, headerEnd).toString("utf8");
            const nameM = /name="([^"]*)"/i.exec(headers);
            const fileM = /filename="([^"]*)"/i.exec(headers);
            if (nameM && fileM && fileM[1]) {
              files.push({ field: nameM[1], filename: fileM[1], data: part.slice(headerEnd + 4) });
            }
          }
          start = end + boundary.length;
        }
        resolve(files);
      } catch (e) { reject(e); }
    });
    req.on("error", reject);
  });
}

/* ---------------- static files ---------------- */
const MIME = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".mjs": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".ico": "image/x-icon", ".woff2": "font/woff2", ".txt": "text/plain", ".pdf": "application/pdf",
};

function serveStatic(req, res, pathname) {
  let rel = decodeURIComponent(pathname);
  if (rel === "/") rel = "/index.html";
  const file = path.normalize(path.join(ROOT, rel));
  if (!file.startsWith(ROOT) || !existsSync(file) || !statSync(file).isFile()) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("Not found");
  }
  res.writeHead(200, { "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream" });
  res.end(readFileSync(file));
}

/* ---------------- API ---------------- */
const STATUSES = new Set(["new", "progress", "completed", "cancelled"]);

async function handleApi(req, res, u, d) {
  const p = u.pathname;
  const method = req.method;

  /* ---- public ---- */

  if (p === "/api/health" && method === "GET")
    return sendJson(res, 200, { ok: true, time: new Date().toISOString() });

  if (p === "/api/settings" && method === "GET")
    return sendJson(res, 200, d.settings);

  if (p === "/api/messages" && method === "POST") {
    const b = await readBody(req);
    const name = String(b.name || "").trim();
    const phone = String(b.phone || "").trim();
    const kind = ["quick", "consultation", "contact"].includes(b.kind) ? b.kind : "contact";
    if (name.length < 2) return sendJson(res, 400, { error: "name is required" });
    if (kind !== "contact" && !/^[+\d][\d\s\-()]{6,}$/.test(phone))
      return sendJson(res, 400, { error: "a valid phone is required" });
    if (kind === "contact" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(b.email || "").trim()))
      return sendJson(res, 400, { error: "a valid email is required" });
    const msg = {
      id: nextId(d.messages), kind,
      name,
      email: String(b.email || "").trim(),
      phone,
      service: String(b.service || "").trim(),
      text: String(b.message || b.text || "").trim(),
      extra: kind === "consultation" ? { preferredDate: b.preferredDate || "", preferredTime: b.preferredTime || "" } : undefined,
      read: false, date: today(),
    };
    d.messages.push(msg);
    // quick & consultation requests create a trackable order
    let orderId = null;
    if (kind !== "contact") {
      orderId = newOrderId(d);
      d.orders.push({ id: orderId, customer: name, service: msg.service || "General Consultation", status: "new", amount: 0, date: today() });
    }
    save(d);
    return sendJson(res, 201, { ok: true, id: msg.id, orderId });
  }

  if (p === "/api/upload" && method === "POST") {
    const ctype = req.headers["content-type"] || "";
    // JSON confirm (files already uploaded individually)
    if (ctype.includes("application/json")) {
      const b = await readBody(req);
      return sendJson(res, 200, { ok: true, confirmed: (b.files || []).length });
    }
    const files = await parseMultipart(req);
    if (!files.length) return sendJson(res, 400, { error: "no files received" });
    const orderId = String((req.headers["x-order-id"] || "").trim()).toUpperCase();
    const saved = [];
    for (const f of files) {
      const ext = path.extname(f.filename).toLowerCase();
      if (!ALLOWED_EXT.has(ext)) return sendJson(res, 400, { error: `file type not allowed: ${ext}` });
      if (f.data.length > MAX_FILE) return sendJson(res, 400, { error: `file too large: ${f.filename}` });
      const storeName = `${Date.now()}-${randomUUID()}${ext}`;
      writeFileSync(path.join(UPLOAD_DIR, storeName), f.data);
      saved.push({ name: f.filename, size: f.data.length, orderId: orderId || null });
    }
    return sendJson(res, 201, { ok: true, files: saved });
  }

  if (p.startsWith("/api/track/") && method === "GET") {
    const id = decodeURIComponent(p.slice("/api/track/".length)).trim().toUpperCase();
    const o = d.orders.find((x) => x.id.toUpperCase() === id);
    if (!o) return sendJson(res, 404, { error: "order not found" });
    return sendJson(res, 200, trackPayload(o));
  }

  if (p === "/api/auth/login" && method === "POST") {
    const b = await readBody(req);
    const email = String(b.email || "").trim().toLowerCase();
    const u = d.users.find((x) => x.email.toLowerCase() === email && x.hash);
    if (!u || !checkPw(u, String(b.password || "")))
      return sendJson(res, 401, { error: "invalid email or password" });
    const token = randomBytes(24).toString("hex");
    d.sessions[token] = { user: u.id, exp: Date.now() + SESSION_TTL };
    save(d);
    return sendJson(res, 200, { ok: true, user: pubUser(u) }, {
      "Set-Cookie": `mctok=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_TTL / 1000}`,
    });
  }

  if (p === "/api/auth/register" && method === "POST") {
    const b = await readBody(req);
    const name = String(b.name || "").trim();
    const email = String(b.email || "").trim().toLowerCase();
    const phone = String(b.phone || "").trim();
    if (name.length < 2) return sendJson(res, 400, { error: "name is required" });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return sendJson(res, 400, { error: "valid email is required" });
    if (d.users.some((x) => x.email.toLowerCase() === email)) return sendJson(res, 409, { error: "email already registered" });
    const salt = randomBytes(16).toString("hex");
    const user = { id: nextId(d.users), name, email, phone, joined: today(), salt, hash: hashPw(String(b.password || ""), salt) };
    d.users.push(user);
    save(d);
    const token = randomBytes(24).toString("hex");
    d.sessions[token] = { user: user.id, exp: Date.now() + SESSION_TTL };
    save(d);
    return sendJson(res, 201, { ok: true, user: pubUser(user) }, {
      "Set-Cookie": `mctok=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_TTL / 1000}`,
    });
  }

  if (p === "/api/auth/me" && method === "GET") {
    const s = getSession(req, d);
    const u = s && d.users.find((x) => x.id === s.user);
    if (!u) return sendJson(res, 401, { error: "not logged in" });
    return sendJson(res, 200, { user: pubUser(u) });
  }

  if (p === "/api/auth/logout" && method === "POST") {
    const c = (req.headers.cookie || "").split("; ").find((x) => x.startsWith("mctok="));
    if (c) { delete d.sessions[c.slice(6)]; save(d); }
    return sendJson(res, 200, { ok: true }, { "Set-Cookie": "mctok=; Path=/; HttpOnly; Max-Age=0" });
  }

  /* ---- admin (session-protected) ---- */
  const admin = p.startsWith("/api/admin/");
  if (admin) {
    if (p === "/api/admin/login" && method === "POST") {
      const b = await readBody(req);
      const given = Buffer.from(String(b.password || ""));
      const want = Buffer.from(ADMIN_PASSWORD);
      const ok = given.length === want.length && timingSafeEqual(given, want);
      if (!ok) return sendJson(res, 401, { error: "wrong password" });
      const token = randomBytes(24).toString("hex");
      d.sessions[token] = { admin: true, exp: Date.now() + SESSION_TTL };
      save(d);
      return sendJson(res, 200, { ok: true }, {
        "Set-Cookie": `mctok=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_TTL / 1000}`,
      });
    }
    const s = getSession(req, d);
    if (!s || !s.admin) return sendJson(res, 401, { error: "admin login required" });
  }

  if (p === "/api/admin/data" && method === "GET")
    return sendJson(res, 200, {
      orders: d.orders, articles: d.articles,
      messages: d.messages.map(({ salt, hash, ...m }) => m),
      users: d.users.map(pubUser),
      customServices: d.customServices, settings: d.settings,
    });

  if (p === "/api/admin/orders" && method === "POST") {
    const b = await readBody(req);
    if (!STATUSES.has(b.status)) return sendJson(res, 400, { error: "invalid status" });
    const o = {
      id: String(b.id || newOrderId(d)), customer: String(b.customer || "").trim(),
      service: String(b.service || "").trim(), status: b.status,
      amount: +b.amount || 0, date: String(b.date || today()),
    };
    if (!o.customer) return sendJson(res, 400, { error: "customer is required" });
    d.orders.unshift(o);
    save(d);
    return sendJson(res, 201, { ok: true, order: o });
  }

  if (p.startsWith("/api/admin/orders/") && method === "PUT") {
    const id = decodeURIComponent(p.slice("/api/admin/orders/".length));
    const o = d.orders.find((x) => x.id === id);
    if (!o) return sendJson(res, 404, { error: "order not found" });
    const b = await readBody(req);
    if (b.status !== undefined) {
      if (!STATUSES.has(b.status)) return sendJson(res, 400, { error: "invalid status" });
      o.status = b.status;
    }
    for (const k of ["customer", "service", "date"]) if (b[k] !== undefined) o[k] = String(b[k]).trim();
    if (b.amount !== undefined) o.amount = +b.amount || 0;
    save(d);
    return sendJson(res, 200, { ok: true, order: o });
  }

  if (p.startsWith("/api/admin/orders/") && method === "DELETE") {
    const id = decodeURIComponent(p.slice("/api/admin/orders/".length));
    const before = d.orders.length;
    d.orders = d.orders.filter((x) => x.id !== id);
    if (d.orders.length === before) return sendJson(res, 404, { error: "order not found" });
    save(d);
    return sendJson(res, 200, { ok: true });
  }

  if (p === "/api/admin/articles" && method === "POST") {
    const b = await readBody(req);
    const title = String(b.title || "").trim();
    if (!title) return sendJson(res, 400, { error: "title is required" });
    const a = { id: nextId(d.articles), title, cat: String(b.cat || "General").trim(), date: String(b.date || today()) };
    d.articles.unshift(a);
    save(d);
    return sendJson(res, 201, { ok: true, article: a });
  }

  if (p.startsWith("/api/admin/articles/") && method === "DELETE") {
    const id = +p.slice("/api/admin/articles/".length);
    const before = d.articles.length;
    d.articles = d.articles.filter((a) => a.id !== id);
    if (d.articles.length === before) return sendJson(res, 404, { error: "article not found" });
    save(d);
    return sendJson(res, 200, { ok: true });
  }

  if (p === "/api/admin/services" && method === "POST") {
    const b = await readBody(req);
    const en = String(b.en || "").trim();
    if (!en) return sendJson(res, 400, { error: "en title is required" });
    const s = { id: "custom-" + Date.now(), en, fa: String(b.fa || "").trim(), ku: String(b.ku || "").trim() };
    d.customServices.push(s);
    save(d);
    return sendJson(res, 201, { ok: true, service: s });
  }

  if (p.startsWith("/api/admin/services/") && method === "DELETE") {
    const id = decodeURIComponent(p.slice("/api/admin/services/".length));
    const before = d.customServices.length;
    d.customServices = d.customServices.filter((s) => s.id !== id);
    if (d.customServices.length === before) return sendJson(res, 404, { error: "service not found" });
    save(d);
    return sendJson(res, 200, { ok: true });
  }

  if (p.startsWith("/api/admin/messages/") && method === "PUT") {
    const id = +p.slice("/api/admin/messages/".length);
    const m = d.messages.find((x) => x.id === id);
    if (!m) return sendJson(res, 404, { error: "message not found" });
    const b = await readBody(req);
    if (b.read !== undefined) m.read = !!b.read;
    save(d);
    return sendJson(res, 200, { ok: true, message: m });
  }

  if (p.startsWith("/api/admin/messages/") && method === "DELETE") {
    const id = +p.slice("/api/admin/messages/".length);
    const before = d.messages.length;
    d.messages = d.messages.filter((x) => x.id !== id);
    if (d.messages.length === before) return sendJson(res, 404, { error: "message not found" });
    save(d);
    return sendJson(res, 200, { ok: true });
  }

  if (p.startsWith("/api/admin/users/") && method === "DELETE") {
    const id = +p.slice("/api/admin/users/".length);
    const before = d.users.length;
    d.users = d.users.filter((x) => x.id !== id);
    if (d.users.length === before) return sendJson(res, 404, { error: "user not found" });
    save(d);
    return sendJson(res, 200, { ok: true });
  }

  if (p === "/api/admin/settings" && method === "PUT") {
    const b = await readBody(req);
    d.settings = {
      siteName: String(b.siteName || d.settings.siteName).trim(),
      phone: String(b.phone || d.settings.phone).trim(),
      email: String(b.email || d.settings.email).trim(),
      hours: String(b.hours || d.settings.hours).trim(),
    };
    save(d);
    return sendJson(res, 200, { ok: true, settings: d.settings });
  }

  return sendJson(res, 404, { error: "unknown endpoint" });
}

/* ---------------- server ---------------- */
export function createServer() {
  return http.createServer(async (req, res) => {
    const u = new URL(req.url, "http://localhost");
    try {
      if (u.pathname.startsWith("/api/")) {
        const d = load();
        return await handleApi(req, res, u, d);
      }
      return serveStatic(req, res, u.pathname);
    } catch (e) {
      return sendJson(res, e.message === "body too large" ? 413 : 500, { error: e.message || "server error" });
    }
  });
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  createServer().listen(PORT, () => {
    console.log(`Meridian Corporate backend → http://localhost:${PORT}`);
  });
}
