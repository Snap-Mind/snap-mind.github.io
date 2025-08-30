import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';

// Root layout: wraps only the root redirect page; real content lives under /[locale]
const DEFAULT_LOCALE = 'en';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Snap Mind - Instant Recall with a Keystroke',
  description:
    'Snap Mind is the fastest way to capture your thoughts. Summon a prompt with a simple hotkey, speak your mind, and let us handle the rest.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={DEFAULT_LOCALE}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
