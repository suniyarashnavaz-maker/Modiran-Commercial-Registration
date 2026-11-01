/* ============ SMOKE TEST — Meridian Corporate backend ============
   Boots the server on an ephemeral port and exercises every endpoint.
   Run: node smoke.mjs   (uses a temp data file, cleans up after)
============================================================= */
import { createServer, DEFAULT_ADMIN_PASSWORD } from "./server.mjs";
import { readFileSync, writeFileSync, unlinkSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(ROOT, "data.json");
const UPLOAD_DIR = path.join(ROOT, "uploads");

// start from a clean slate so the test is repeatable
const backup = existsSync(DATA_FILE) ? readFileSync(DATA_FILE) : null;
if (existsSync(DATA_FILE)) unlinkSync(DATA_FILE);

let passed = 0, failed = 0;
function check(name, cond, extra = "") {
  if (cond) { passed++; console.log(`  ✓ ${name}`); }
  else { failed++; console.log(`  ✗ ${name} ${extra}`); }
}

const srv = createServer();
await new Promise((r) => srv.listen(0, r));
const base = `http://localhost:${srv.address().port}`;
const j = (r) => r.json();
const cookie = (r) => (r.headers.getSetCookie ? r.headers.getSetCookie().join("; ") : r.headers.get("set-cookie") || "");

console.log("— public —");
let r = await fetch(`${base}/api/health`);
check("GET /api/health", r.status === 200 && (await j(r)).ok);

r = await fetch(`${base}/api/settings`);
check("GET /api/settings", r.status === 200 && (await j(r)).siteName === "Meridian Corporate");

r = await fetch(`${base}/`);
check("GET / serves index.html", r.status === 200 && (await r.text()).includes("Meridian"));

r = await fetch(`${base}/api/messages`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind: "quick", name: "Test User", phone: "+1 555 123 4567", service: "Company Establishment" }) });
const quick = await j(r);
check("POST /api/messages (quick) creates order", r.status === 201 && quick.orderId, JSON.stringify(quick));

r = await fetch(`${base}/api/messages`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind: "contact", name: "Contact Person", email: "cp@test.com", message: "Hello there, testing." }) });
check("POST /api/messages (contact) no order", (await j(r)).orderId === null);

r = await fetch(`${base}/api/messages`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind: "quick", name: "X", phone: "bad" }) });
check("POST /api/messages validates phone", r.status === 400);

r = await fetch(`${base}/api/track/${quick.orderId}`);
const track = await j(r);
check("GET /api/track/:id", r.status === 200 && track.steps.length === 4 && track.steps[0].state === "done" && track.steps[1].state === "active", JSON.stringify(track));

r = await fetch(`${base}/api/track/MC-1999-00001`);
check("GET /api/track unknown → 404", r.status === 404);

// multipart upload
const boundary = "----smoke" + Date.now();
const fileBytes = Buffer.from("%PDF-1.4 smoke test file");
const body = Buffer.concat([
  Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="documents"; filename="test.pdf"\r\nContent-Type: application/pdf\r\n\r\n`),
  fileBytes,
  Buffer.from(`\r\n--${boundary}--\r\n`),
]);
r = await fetch(`${base}/api/upload`, { method: "POST", headers: { "Content-Type": `multipart/form-data; boundary=${boundary}` }, body });
const up = await j(r);
check("POST /api/upload (multipart)", r.status === 201 && up.files.length === 1 && up.files[0].name === "test.pdf", JSON.stringify(up));

r = await fetch(`${base}/api/upload`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ confirm: true, files: ["test.pdf"] }) });
check("POST /api/upload (json confirm)", r.status === 200 && (await j(r)).confirmed === 1);

// auth
r = await fetch(`${base}/api/auth/register`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: "Smoke Tester", email: "smoke@test.com", phone: "+1 555 000 9999", password: "secret123" }) });
const reg = await j(r);
const userCookie = cookie(r);
check("POST /api/auth/register", r.status === 201 && reg.user.email === "smoke@test.com" && /mctok=/.test(userCookie));

r = await fetch(`${base}/api/auth/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: "smoke@test.com", password: "wrong" }) });
check("POST /api/auth/login wrong pw → 401", r.status === 401);

r = await fetch(`${base}/api/auth/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: "smoke@test.com", password: "secret123" }) });
check("POST /api/auth/login", r.status === 200);

r = await fetch(`${base}/api/auth/me`, { headers: { Cookie: userCookie } });
check("GET /api/auth/me with session", r.status === 200 && (await j(r)).user.name === "Smoke Tester");

r = await fetch(`${base}/api/auth/me`);
check("GET /api/auth/me without session → 401", r.status === 401);

console.log("— admin —");
r = await fetch(`${base}/api/admin/data`);
check("GET /api/admin/data unauth → 401", r.status === 401);

r = await fetch(`${base}/api/admin/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: "nope" }) });
check("POST /api/admin/login wrong pw → 401", r.status === 401);

r = await fetch(`${base}/api/admin/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: DEFAULT_ADMIN_PASSWORD }) });
const adminCookie = cookie(r);
check("POST /api/admin/login", r.status === 200 && /mctok=/.test(adminCookie));
const A = { Cookie: adminCookie, "Content-Type": "application/json" };

r = await fetch(`${base}/api/admin/data`, { headers: A });
const data = await j(r);
check("GET /api/admin/data", r.status === 200 && data.orders.length >= 5 && data.users.length >= 3 && !data.users[0].hash, `status=${r.status}`);

r = await fetch(`${base}/api/admin/orders`, { method: "POST", headers: A, body: JSON.stringify({ customer: "New Client", service: "Brand Registration", status: "new", amount: 150 }) });
const newOrder = await j(r);
check("POST /api/admin/orders", r.status === 201 && newOrder.order.id.startsWith("MC-"), JSON.stringify(newOrder));

r = await fetch(`${base}/api/admin/orders/${newOrder.order.id}`, { method: "PUT", headers: A, body: JSON.stringify({ status: "completed" }) });
check("PUT /api/admin/orders/:id", r.status === 200 && (await j(r)).order.status === "completed");

r = await fetch(`${base}/api/admin/orders/${newOrder.order.id}`, { method: "DELETE", headers: A });
check("DELETE /api/admin/orders/:id", r.status === 200);

r = await fetch(`${base}/api/admin/articles`, { method: "POST", headers: A, body: JSON.stringify({ title: "Smoke article", cat: "Test" }) });
const art = await j(r);
check("POST /api/admin/articles", r.status === 201 && art.article.id > 0);
r = await fetch(`${base}/api/admin/articles/${art.article.id}`, { method: "DELETE", headers: A });
check("DELETE /api/admin/articles/:id", r.status === 200);

r = await fetch(`${base}/api/admin/services`, { method: "POST", headers: A, body: JSON.stringify({ en: "Smoke Service", fa: "test", ku: "test" }) });
const svc = await j(r);
check("POST /api/admin/services", r.status === 201 && svc.service.id.startsWith("custom-"));
r = await fetch(`${base}/api/admin/services/${svc.service.id}`, { method: "DELETE", headers: A });
check("DELETE /api/admin/services/:id", r.status === 200);

r = await fetch(`${base}/api/admin/messages/1`, { method: "PUT", headers: A, body: JSON.stringify({ read: true }) });
check("PUT /api/admin/messages/:id", r.status === 200 && (await j(r)).message.read === true);

r = await fetch(`${base}/api/admin/settings`, { method: "PUT", headers: A, body: JSON.stringify({ siteName: "Meridian Corporate", phone: "+1 (555) 010-2030", email: "hello@meridiancorp.example", hours: "Mon-Fri: 9:00 - 17:00" }) });
check("PUT /api/admin/settings", r.status === 200 && (await j(r)).settings.siteName === "Meridian Corporate");

r = await fetch(`${base}/api/auth/logout`, { method: "POST", headers: { Cookie: adminCookie } });
check("POST /api/auth/logout", r.status === 200);
r = await fetch(`${base}/api/admin/data`, { headers: A });
check("admin session invalid after logout", r.status === 401);

srv.close();

// restore original data file
if (backup) writeFileSync(DATA_FILE, backup);
else if (existsSync(DATA_FILE)) unlinkSync(DATA_FILE);
// clean test uploads
if (existsSync(UPLOAD_DIR)) {
  for (const f of readdirSync(UPLOAD_DIR)) {
    try { unlinkSync(path.join(UPLOAD_DIR, f)); } catch {}
  }
}

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
