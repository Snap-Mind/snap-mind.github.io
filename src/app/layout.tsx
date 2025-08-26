import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';

import { Providers } from './providers';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Snap Mind - Instant Recall with a Keystroke',
  description:
    'Snap Mind is the fastest way to capture your thoughts. Summon a prompt with a simple hotkey, speak your mind, and let us handle the rest.',
};

import { cookies } from 'next/headers';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = await cookies();
  const locale = store.get('locale')?.value || 'en';
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
