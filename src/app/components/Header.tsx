import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Header');
  return (
    <Navbar isBordered isBlurred={false} maxWidth="full" position="sticky">
      <NavbarBrand>
        <span className="text-2xl font-bold text-gray-800">{t('brand')}</span>
      </NavbarBrand>
      <NavbarContent justify="end">
        <LanguageSwitcher />
        <NavbarItem>
          <Link
            href="https://github.com/Snap-Mind/snap-mind"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('githubRepo')}
          >
            <Icon icon="octicon:mark-github-24" className="text-4xl dark:text-gray-300" />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
