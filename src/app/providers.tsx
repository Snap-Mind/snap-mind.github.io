/* eslint-disable @typescript-eslint/no-explicit-any */
import { HeroUIProvider } from '@heroui/react';
import { NextIntlClientProvider } from 'next-intl';

// Messages shape is json-like; using unknown for flexibility in static export bundle size.
type Messages = Record<string, any>;

interface ProvidersProps {
  children: React.ReactNode;
  locale?: string;
  messages?: Messages;
}

export function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </NextIntlClientProvider>
  );
}
