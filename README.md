# Meridian Corporate — Website

Company registration & trading services website (English / فارسی / کوردی).

## What's inside

| File / folder            | Purpose                                              |
|--------------------------|------------------------------------------------------|
| `index.html` … `*.html`  | 14 website pages (static frontend)                   |
| `style.css`, `admin.css` | Styling                                              |
| `script.js`              | Frontend logic — forms, uploads, order tracking      |
| `lang.js`                | EN / FA / KU translations and language switcher      |
| `admin.html` + `admin.js`| Admin panel (orders, messages, articles, users, …)   |
| `server.mjs`             | **Backend** — Node.js server: serves the site + JSON API |
| `smoke.mjs`              | Automated test of every API endpoint                 |
| `package.json`           | `npm start` / `npm test`                             |
| `handover.html` / PDF    | Project handover document                            |

## Run locally

Requires [Node.js](https://nodejs.org) 18 or newer (no other dependencies).

```bash
node server.mjs
# → http://localhost:4802
```

- Admin panel: `http://localhost:4802/admin.html` — password **`Mrdn-4Kq9xWvTz8`**
  (change it with the `ADMIN_PASSWORD` environment variable)
- Test the API: `node smoke.mjs`

## How data is stored

- `data.json` — orders, messages, articles, users, settings (created automatically on first run)
- `uploads/` — customer document uploads (created automatically)

## Deploy (e.g. Render / Railway / any Node host)

| Setting       | Value             |
|---------------|-------------------|
| Runtime       | Node              |
| Build command | *(none needed)*   |
| Start command | `node server.mjs` |

The server uses the platform-provided `PORT` automatically.
**Note:** on free hosting plans the filesystem is temporary — `data.json`
and uploads reset on every redeploy/reboot. For permanent storage, point the
data at a managed database later; the API layer is isolated in `server.mjs`
so that swap is contained.
