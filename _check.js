const fs = require("fs");
const path = "C:/company-site/";
const js = fs.readFileSync(path + "lang.js", "utf8");
const keys = new Set();
for (const m of js.matchAll(/"((?:[^"\\]|\\.)+)"\s*:\s*"/g))
  keys.add(m[1].replace(/\\"/g, '"'));
console.log("total dict keys:", keys.size);

const files = fs.readdirSync(path).filter((f) => f.endsWith(".html") && f !== "handover.html");
const missing = new Set();
for (const f of files) {
  let html = fs.readFileSync(path + f, "utf8");
  html = html.replace(/<script[\s\S]*?<\/script>/g, "");
  html = html.replace(/<!--[\s\S]*?-->/g, "");
  html = html.replace(/<br\s*\/?>/gi, "\n");
  html = html.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  const runs = html.split(/<[^>]+>/).map((s) => s.trim()).filter(Boolean);
  for (const r of runs) {
    if (!/[a-zA-Z]{3,}/.test(r)) continue;
    if (!keys.has(r)) missing.add(f + " :: " + r);
  }
}
console.log("\n--- text runs NOT in dictionary (review list) ---");
[...missing].sort().forEach((s) => console.log(s));
