import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-6 mt-12 bg-white dark:bg-gray-900 text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <span>
          © {new Date().getFullYear()} Louis-7 (GitHub). All rights reserved.
        </span>
        <div className="mt-2 sm:mt-0 flex gap-4">
          <a href="https://github.com/Louis-7" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
