# Shadowstripe Consulting Website

This is a Next.js 15+ (App Router) project built for Shadowstripe Consulting, following a minimalist, high-contrast design system.

## 🚀 Getting Started

To run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Content Management

The site uses a simple file-based system for managing content:

1. **Global Content & Services**: Edit `src/content.json` to update the hero text, services list, company bio, values, and qualifications.
2. **Articles & Insights**: Create new `.md` files inside the `src/content/articles/` directory. Use the following frontmatter at the top of the file:
   ```yaml
   ---
   title: "Your Article Title"
   date: "YYYY-MM-DD"
   category: "Risk Management"
   excerpt: "A brief summary of the article."
   ---
   ```
   The rest of the file can be written in standard Markdown.

## 🛠️ Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Icons:** Lucide React
- **Markdown:** `gray-matter`, `remark`, and `remark-html`

## 📦 Deployment (Vercel or GitHub Pages)

This project is configured for **Static HTML Export**. When you build the project, Next.js will generate static HTML/CSS/JS files in the `out` directory.

### Deploying to Vercel
1. Push this repository to your GitHub account.
2. Import the repository into [Vercel](https://vercel.com).
3. Vercel will automatically detect Next.js.
4. Go to **Settings > General** in your Vercel project and set the **Output Directory** to `out`.
5. Click **Deploy**.

### Deploying to GitHub Pages
1. Push this repository to your GitHub account.
2. Go to your repository settings > **Pages**.
3. Select **GitHub Actions** as the source.
4. Next.js provides an official GitHub Actions workflow for static export. You can find the template [here](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#deploying-to-github-pages) or simply use Vercel for a zero-config setup.

*Note: Since `output: 'export'` is defined in `next.config.ts`, standard Node.js server features like Image Optimization (unoptimized is set to true) and API Routes are disabled in favor of static delivery.*
