# Bill's Cocktail Book

A heartfelt gift from the MS/MBA Biotech Class of 2026 to Professor Bill.

## About

This website features a collection of cocktail recipes chosen by 19 students, each with a personal note of gratitude for Professor Bill's mentorship and guidance throughout the program.

## Deployment to GitHub Pages

### Option 1: Automatic Deployment with GitHub Actions

1. Push this code to your GitHub repository
2. Go to your repository Settings → Pages
3. Under "Build and deployment", set:
   - Source: **GitHub Actions**
4. The site will automatically deploy when you push to the `main` branch

### Option 2: Manual Deployment

1. Build the project locally:
   ```bash
   pnpm install
   pnpm run build
   ```

2. The built files will be in the `dist/` folder

3. Copy the `dist/index.html` to `dist/404.html`:
   ```bash
   cp dist/index.html dist/404.html
   ```

4. Deploy the `dist/` folder contents to GitHub Pages using your preferred method

## Local Development

```bash
# Install dependencies
pnpm install

# Run dev server (Note: This won't work in the Figma Make environment, 
# but will work in a standard setup)
pnpm run dev

# Build for production
pnpm run build
```

## Tech Stack

- React 18
- TypeScript
- React Router 7
- Tailwind CSS v4
- Vite
- Playfair Display & Inter fonts

## Notes

- The 404.html file is required for React Router to work properly on GitHub Pages
- All cocktail images are sourced from Unsplash
