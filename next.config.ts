import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// When deploying to GitHub Pages for a project site, assets live under /<repo-name>.
// We detect this via the conventional env var we set in the workflow: GITHUB_PAGES=true.
// If you later deploy to a user/org root site ( <org>.github.io ), simply omit that env var.
const isProd = process.env.NODE_ENV === 'production';
const isGithubPages = process.env.GITHUB_PAGES === 'true';
// Try to infer repository name automatically from GitHub Actions env (e.g. Org/Repo).
// Falls back to hardcoded value for local builds.
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'snap-mind';

// Determine if this is a user/organization site: repo name matches owner (cannot be derived reliably
// without extra API call). Allow manual override via ORG_REPO_ROOT=true to force root mode.
const isRootSite = process.env.ORG_REPO_ROOT === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  // Only set basePath/assetPrefix for project (non-root) sites.
  basePath: isProd && isGithubPages && !isRootSite ? `/${repoName}` : undefined,
  assetPrefix: isProd && isGithubPages && !isRootSite ? `/${repoName}/` : undefined,
  // Static export cannot use the default image optimization loader on GitHub Pages.
  images: { unoptimized: true },
  // Trailing slash makes relative meta refresh + static file links simpler (produces folder index.html structure).
  trailingSlash: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
