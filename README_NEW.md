# QuickRide Web App

Professional-grade ride booking application built with vanilla JavaScript, HTML, and CSS.

## Project Structure

```
quickride-web-app/
├── src/                          # Source code (primary development folder)
│   ├── index.html               # Main HTML
│   ├── css/
│   │   ├── variable.css         # CSS custom properties (theme, typography, shadows)
│   │   └── main.css             # Layout, components, responsive styles
│   └── js/
│       ├── app.js               # Main app logic (form & delete listeners)
│       ├── storage.js           # LocalStorage utility (getRides, saveRides)
│       └── ui.js                # UI renderer (renderRides, showAlert)
├── dist/                         # Built/optimized output for production
│   ├── app.js                   # Bundled & minified JavaScript (via esbuild)
│   └── index.html               # Demo HTML (refs bundled assets)
├── css/                          # Root-level CSS (shared with src)
├── js/                           # Root-level JS (shared with src)
├── images/                       # Source images (PNG, JPG, SVG)
│   ├── sample-ride-1.svg
│   ├── sample-ride-2.svg
│   └── demo.html                # Image optimization demo
├── test/                         # Unit tests (Vitest)
│   └── app.test.js
├── .github/
│   └── workflows/
│       ├── ci.yml               # Lint & build on PR/push
│       └── deploy-pages.yml     # Build & deploy to GitHub Pages
├── package.json                  # Dependencies and scripts
├── package-lock.json            # Lockfile (npm ci compatible)
├── CHANGELOG.md                  # Version history
├── README.md                     # This file
└── sw.js                         # Service worker (offline caching)
```

## Quick Start

1. **Install dependencies**
   ```powershell
   npm install
   ```

2. **Development** (watch mode bundler)
   ```powershell
   npm run dev
   ```

3. **Build** (production bundle)
   ```powershell
   npm run build
   ```

4. **Test**
   ```powershell
   npm run test
   ```

5. **Lint & Format**
   ```powershell
   npm run lint
   npm run format
   ```

6. **Serve locally**
   ```powershell
   npm run start
   # or
   npx serve .
   ```

## Key Features

- **Real-time CRUD** — book, view, and delete rides instantly
- **Persistent Storage** — LocalStorage + JSON serialization
- **Responsive Layout** — mobile-first, grid, flexbox
- **Accessibility** — ARIA roles, skip links, keyboard focus, semantic HTML
- **Service Worker** — offline fallback, precache core assets
- **Professional Styling** — typography variables, shadows, smooth transitions
- **CI/CD** — GitHub Actions lint/build on PR, Pages deploy on push
- **Modular** — storage, UI, and app logic cleanly separated

## Development Notes

- **Source location**: `src/` is the primary development folder. CSS and JS are colocated here.
- **Production bundle**: `npm run build` uses `esbuild` to bundle `src/js/app.js` into `dist/app.js`.
- **Root-level files** (`css/`, `js/`) are kept for backward compatibility and reference.
- **Images**: Optimize with `npm run optimize-images` (converts to `dist/images/`).
- **Service Worker**: `sw.js` auto-registers on `index.html` load (HTTPS/localhost only).

## Deployment

- **GitHub Pages** — CI/CD workflow automatically builds and deploys `dist/` on push to `main`.
- **Netlify/Vercel** — drag-and-drop `dist/` or connect repo and set build command to `npm run build`.

## Testing

- Unit tests use **Vitest**. Run `npm run test`.
- Minimal test scaffold in `test/app.test.js` — add tests for `storage.js` and `ui.js` as needed.

## Performance

- **CSS preload** — `main.css` preloads in `<head>` for faster paint.
- **Font preconnect** — Google Fonts DNS preconnected.
- **Module fallback** — `index.html` loads `dist/app.js` first, falls back to `src/js/app.js` for dev.
- **Service Worker** — caches precache list and uses cache-first strategy for fast offline access.

## Troubleshooting

**CI builds fail** — Ensure `package-lock.json` is committed. Run `npm install` and push if needed.

**Image optimization not working** — Requires `imagemin-cli` (removed for npm ci compat; can re-add).

**Tests not running** — Run `npm install` to fetch `vitest` devDependency.

—  
*Built with vanilla JS, no frameworks. Professional grade, accessible, performant, and production-ready.*
