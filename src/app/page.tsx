export const dynamic = 'error';

export default function RootRedirect() {
  return (
    <head>
      <meta httpEquiv="refresh" content="0; url=/en" />
      <title>Redirecting...</title>
    </head>
  );
}
