import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Providers } from './providers';
import Header from './Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Snap Mind - Instant Recall with a Keystroke',
  description:
    'Snap Mind is the fastest way to capture your thoughts. Summon a prompt with a simple hotkey, speak your mind, and let us handle the rest.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
