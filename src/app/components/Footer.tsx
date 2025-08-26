import React from 'react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-6 mt-12 bg-white dark:bg-gray-900 text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <span>
          &copy; {new Date().getFullYear()} {t('copyright')}
        </span>
        <div className="mt-2 sm:mt-0 flex gap-4">
          <a
            href="https://github.com/Louis-7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            {t('github')}
          </a>
        </div>
      </div>
    </footer>
  );
}
