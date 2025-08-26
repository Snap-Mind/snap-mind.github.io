'use client';

import { Select, SelectItem } from '@heroui/react';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    const cookieLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('locale='))
      ?.split('=')[1];

    const newSelectedLanguage = languages.find((l) => l.key === cookieLocale);

    if (newSelectedLanguage) {
      setSelectedLanguage(newSelectedLanguage);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    document.cookie = `locale=${newLocale}; path=/`;

    window.location.reload();
  };

  return (
    <Select
      className="w-[8rem]"
      size="sm"
      label="Language"
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
