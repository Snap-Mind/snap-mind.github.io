import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { Button, Link } from '@heroui/react';
import { Icon } from '@iconify/react';

const downloadLinks = {
  win64: 'https://github.com/Snap-Mind/snap-mind/releases/latest/download/app-installer-x64.exe',
  macIntel:
    'https://github.com/Snap-Mind/snap-mind/releases/latest/download/app-installer-intel.dmg',
  macArm: 'https://github.com/Snap-Mind/snap-mind/releases/latest/download/app-installer-arm64.dmg',
};

function detectPlatform() {
  const ua = window.navigator.userAgent;
  if (/Windows/.test(ua)) {
    return 'win64';
  }
  if (/Macintosh/.test(ua)) {
    if (/arm64|Apple/.test(ua)) {
      return 'macArm';
    }

    return 'macIntel';
  }
  return null;
}

type PlatformType = 'win64' | 'macIntel' | 'macArm' | null;

export default function DownloadButton() {
  const t = useTranslations('Download');
  const [platform, setPlatform] = useState<PlatformType>(null);
  const [disabled, setDisabled] = useState(false);
  const [warning, setWarning] = useState<string | null>(null);

  useEffect(() => {
    const detected = detectPlatform() as PlatformType;
    setPlatform(detected);
    if (!detected) {
      setWarning(t('unsupportedDeviceWarn'));
      setDisabled(true);
    }
  }, [t]);

  let label = '';
  if (platform === 'win64') label = t('win64');
  if (platform === 'macIntel') label = t('macIntel');
  if (platform === 'macArm') label = t('macArm');
  if (!platform) label = t('unsupportedDeviceWarn');

  const link = platform ? downloadLinks[platform] : '#';

  const handleClick = () => {
    if (disabled) {
      return;
    }
    setDisabled(true);
    setTimeout(() => setDisabled(false), 2000);
  };

  const renderLabel = () => {
    if (!platform) return t('unsupported');
    if (disabled) return t('redirecting');
    return label;
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        className={`bg-foreground text-default${disabled ? ' cursor-not-allowed' : ''}`}
        size="lg"
        as={Link}
        href={link}
        variant="solid"
        isDisabled={disabled}
        endContent={<Icon icon="lucide:download"></Icon>}
        onPress={handleClick}
      >
        {renderLabel()}
      </Button>
      {warning && (
        <div className="text-gray-500 text-sm mb-2 italic" role="alert">
          * {warning}
        </div>
      )}
    </div>
  );
}
