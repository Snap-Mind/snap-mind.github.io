import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Header() {
  return (
    <Navbar isBordered isBlurred={false} maxWidth="full" position="sticky">
      <NavbarBrand>
        <span className="text-2xl font-bold text-gray-800">SnapMind</span>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            href="https://github.com/Snap-Mind/snap-mind"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <Icon
              icon="octicon:mark-github-24"
              className="text-4xl dark:text-gray-300"
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
