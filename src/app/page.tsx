export const dynamic = 'error';

export default function RootRedirect() {
  return (
    <head>
  {/* Use relative redirect so it works whether or not a basePath is applied (GitHub Pages). */}
  <meta httpEquiv="refresh" content="0; url=./en/" />
      <title>Redirecting...</title>
    </head>
  );
}
