import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Root site configuration (snap-mind.github.io). No basePath/assetPrefix required.
const nextConfig: NextConfig = {
  output: 'export',
  // Serve static assets as-is; GitHub Pages doesn't support Next image optimization.
  images: { unoptimized: true },
  // Produce folder-based output (e.g. /en/index.html)
  trailingSlash: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
