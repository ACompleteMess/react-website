# Erik Stuble Resume Website

A modern, best-practices React + TypeScript + Vite website for showcasing your resume, skills, and experience. Built with Material-UI, fully responsive, print/PDF ready, and covered by dynamic tests.

## Features
- **Single-page resume** with sections for summary, education, skills, experience, and involvement
- **Material-UI** for a professional, accessible, and responsive design
- **Dark/Light mode** toggle
- **Print/Download as PDF** button (optimized print layout)
- **Dynamic, robust tests** for all sections (auto-adapts to new data)
- **Easy to extend**: add new sections or data in `src/data/resumeData.ts`

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)
- (No need to install React globally; it will be installed automatically as a dependency)

### Installation
```sh
cd resume-website
npm install
```

### Development
Start the local dev server:
```sh
npm run dev
```
Visit [http://localhost:5173/](http://localhost:5173/) in your browser.

### Testing
Run all dynamic tests (no hardcoded data):
```sh
npm run test
```
Or watch for changes:
```sh
npm run test:watch
```

- Tests will automatically check for all companies, organizations, and skill categories in your data.
- If you add new experience or involvement entries, tests will adapt—no need to update test code.

### Linting
```sh
npm run lint
```

## Customization
- **Edit your resume data:**
  - Update `src/data/resumeData.ts` with your info.
- **Add new sections:**
  - Create a new component in `src/components/` and import it in `App.tsx`.
- **Styling:**
  - Use Material-UI’s theme or add custom styles in `src/index.css`.

## Deployment
You can deploy to Vercel, Netlify, GitHub Pages, or any static host:
```sh
npm run build
```
The output will be in the `dist/` folder.

### Deploying to GitHub Pages
1. Make sure the `base` in `vite.config.ts` is set to `/react-website/`.
2. Run:
   ```sh
   npm run deploy
   ```
3. In your GitHub repo, go to Settings → Pages, and set the source to the `gh-pages` branch and `/ (root)`.
4. Your site will be live at `https://acompletemess.github.io/react-website/`.

### Redeploying to GitHub Pages
If you make changes and want them to appear on your live site:
1. Commit and push your changes to GitHub.
2. Run:
   ```sh
   npm run deploy
   ```
3. Wait a minute, then refresh your site at `https://acompletemess.github.io/react-website/`.

## Contributing
Pull requests and issues are welcome! Please add or update tests for any new features.

---
MIT License
