import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { Button, Link } from '@heroui/react';
import { Icon } from '@iconify/react';

const downloadFiles = {
  win64: 'SnapMind-0.1.4-x64-setup.exe',
  macIntel: 'SnapMind-0.1.4.dmg',
  macArm: 'SnapMind-0.1.4-arm64.dmg',
};

const BASE_URL = 'https://github.com/Snap-Mind/snap-mind/releases/latest/download/';

const downloadLinks = Object.fromEntries(
  Object.entries(downloadFiles).map(([key, file]) => [key, `${BASE_URL}${file}`])
);

async function detectPlatform() {
  if (navigator.userAgentData) {
    try {
      const uaData = await navigator.userAgentData.getHighEntropyValues([
        'platform',
        'architecture',
      ]);

      const os = uaData.platform || 'Unknown';
      const architecture = uaData.architecture || 'Unknown';

      if (os === 'Windows') {
        return 'win64';
      }

      if (os === 'macOS') {
        if (architecture === 'arm') {
          return 'macArm';
        }

        return 'macIntel';
      }

      return { os, architecture };
    } catch (e) {
      console.error('Failed to get high-entropy values:', e);
      return null;
    }
  }
}

type PlatformType = 'win64' | 'macIntel' | 'macArm' | null;

export default function DownloadButton() {
  const t = useTranslations('Download');
  const [platform, setPlatform] = useState<PlatformType>(null);
  const [disabled, setDisabled] = useState(false);
  const [warning, setWarning] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      const detected = (await detectPlatform()) as PlatformType;
      setPlatform(detected);
      if (!detected) {
        setWarning(t('unsupportedDeviceWarn'));
        setDisabled(true);
      }
    };
    init();
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
