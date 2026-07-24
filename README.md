# antoninomariarizzo.github.io

Personal portfolio site, built with [React](https://react.dev/) and [Vite](https://vitejs.dev/).

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build locally
```

Site content (bio, experience, education, projects, publications, awards) lives in `src/data/`.

Deployment to GitHub Pages happens automatically via `.github/workflows/deploy.yml` on every push to `main` (requires the repo's Pages source to be set to "GitHub Actions" under Settings → Pages).