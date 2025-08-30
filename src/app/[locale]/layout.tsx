import '../styles/globals.css';
import { notFound } from 'next/navigation';
import { Providers } from '../providers';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getMessages } from 'next-intl/server';
import React from 'react';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

const supportedLocales = ['en', 'zh'];

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // In Next.js 15 params is a Promise in async layouts
}

export default async function LocaleLayout(props: LocaleLayoutProps) {
  const { children } = props;
  const { locale } = await props.params; // await the params
  if (!supportedLocales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages({ locale });
  return (
    <>
      <Header />
      <Providers messages={messages} locale={locale}>
        {children}
      </Providers>
      <Footer />
    </>
  );
}
