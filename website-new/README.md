# Portfolio Website

A modern portfolio website built with Next.js, TypeScript, and TailwindCSS.

## Features

- Responsive design
- Dark mode support
- Dynamic game pages
- Contact form
- Optimized images
- SEO friendly
- Static site generation for GitHub Pages

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

1. Build the site:
   ```bash
   npm run build
   ```
2. The static files will be generated in the `out` directory

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process is handled by GitHub Actions.

### Manual Deployment

1. Push your changes to the main branch
2. The GitHub Actions workflow will automatically:
   - Build the site
   - Deploy to GitHub Pages

## Project Structure

- `/src/app` - Next.js app directory with pages and layouts
- `/src/components` - Reusable React components
- `/src/data` - Static data files
- `/public` - Static assets like images

## Technologies Used

- Next.js 14
- TypeScript
- TailwindCSS
- GitHub Actions
- GitHub Pages
