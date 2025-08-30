'use client';

import { Select, SelectItem } from '@heroui/react';
import { useEffect, useState } from 'react';
import { usePathname, useRouter, useParams } from 'next/navigation';

interface Languages {
  key: string;
  label: string;
}

const languages: Languages[] = [
  { key: 'en', label: 'English' },
  { key: 'zh', label: '中文' },
];

function LanguageSwitcher() {
  const [selectedLanguage, setSelectedLanguage] = useState<Languages | null>(null);

  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const currentLocale = (params?.locale as string) || 'en';
    const newSelectedLanguage = languages.find((l) => l.key === currentLocale) || languages[0];
    setSelectedLanguage(newSelectedLanguage);
  }, [params]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    // Replace the first segment (locale)
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) {
      router.push(`/${newLocale}`);
      return;
    }
    segments[0] = newLocale;
    router.push('/' + segments.join('/'));
  };

  return (
    <Select
      className="w-[8rem]"
      size="sm"
      label="Language"
      placeholder="Languages"
      onChange={(e) => handleChange(e)}
      selectedKeys={[selectedLanguage?.key ? selectedLanguage.key : '']}
    >
      {languages.map((language) => (
        <SelectItem key={language.key}>{language.label}</SelectItem>
      ))}
    </Select>
  );
}

export default LanguageSwitcher;
