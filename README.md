# QuickRide — Web Demo

Small, professional-feeling ride booking demo.

Getting started

1. Install dependencies

```powershell
npm install
```

2. Run development watcher (esbuild)

```powershell
npm run dev
```

3. Build production bundle

```powershell
npm run build
# Serve locally (optional)
npx serve .
```

Notes

- The app uses `esbuild` to bundle `js/app.js` into `dist/app.js` for production. `index.html` attempts to load `dist/app.js` first and falls back to `js/app.js` if the bundle isn't present.
- Use `npm run lint` and `npm run format` to run ESLint and Prettier.

Service Worker

- The app includes a simple service worker (`sw.js`) that precaches core assets and provides a basic offline fallback. The service worker registers automatically when served from a secure context (HTTPS or localhost).

Image optimization

- Optimize source images (put images in `images/`) with:

```powershell
npm run optimize-images
```

Image optimization demo

- A small demo page compares originals in `images/` with optimized outputs in `dist/images/` (after running the optimizer):

	- Open `images/demo.html` in a browser to view originals side-by-side with `dist/images` counterparts (build/optimize first).

Automatic SVG optimization (watch)

- To automatically optimize SVG/PNG/JPEG files when you add or change them in `images/`, run the watcher:

```powershell
npm run optimize-images:watch
```

This uses `chokidar-cli` to watch the `images/` folder and runs the same optimizer that writes results to `dist/images/`.


Testing

- Run unit tests with:

```powershell
npm run test
```

Deployment

- CI builds and deploys `dist/` to GitHub Pages via `.github/workflows/deploy-pages.yml` on push to `main`.
# 🚗 QuickRide – Ride Booking Web App

QuickRide is a production-ready, minimalist ride booking application built with **Vanilla JavaScript**. It allows users to book, view, and manage ride requests in real-time with persistent storage.

## ✨ Features
- **Real-time CRUD:** Create, Read, and Delete bookings instantly.
- **Persistence:** Data is stored in the browser's LocalStorage.
- **Responsive UI:** Fully optimized for mobile, tablet, and desktop.
- **Modular Architecture:** Clean separation of concerns (Storage, UI, Logic).

## 🛠️ Tech Stack
- **HTML5** & **CSS3** (Flexbox/Grid)
- **Vanilla JavaScript** (ES6+ Modules)
- **LocalStorage API**

## 📂 Structure
- `/js`: Modular logic files.
- `/css`: Scoped styling with CSS variables.
- `/assets`: UI icons and branding.

## 🚀 Live Demo
https://sampreethbm.github.io/Quickride-web-app/

