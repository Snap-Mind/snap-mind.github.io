import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { Button, Link } from '@heroui/react';
import { Icon } from '@iconify/react';

type PlatformType = {
  os: OS;
  architecture: Architecture;
} | null;

type OS = 'Windows' | 'macOS' | null;

type Architecture = 'win64' | 'macIntel' | 'macArm' | null;

const downloadFiles = {
  win64: 'SnapMind-0.1.5-x64-setup.exe',
  macIntel: 'SnapMind-0.1.5.dmg',
  macArm: 'SnapMind-0.1.5-arm64.dmg',
};

const BASE_URL = 'https://github.com/Snap-Mind/snap-mind/releases/latest/download/';

const downloadLinks = Object.fromEntries(
  Object.entries(downloadFiles).map(([key, file]) => [key, `${BASE_URL}${file}`])
);

async function detectPlatform(): Promise<PlatformType> {
  if (navigator.userAgentData) {
    try {
      const uaData = await navigator.userAgentData.getHighEntropyValues([
        'platform',
        'architecture',
      ]);

      const userOS = uaData.platform || 'Unknown';
      const userArch = uaData.architecture || 'Unknown';

      let os: OS = null;
      let arch: Architecture = null;

      if (userOS === 'Windows') {
        os = 'Windows'
        arch = 'win64';
      }

      if (userOS === 'macOS') {
        os = 'macOS';
        if (userArch === 'arm') {
          arch = 'macArm';
        } else {
          arch = 'macIntel';
        }
      }

      return { os, architecture: arch };
    } catch (e) {
      console.error('Failed to get high-entropy values:', e);
      return { os: null, architecture: null };
    }
  } else {
    return { os: null, architecture: null };
  }
}



export default function DownloadButton() {
  const t = useTranslations('Download');
  const [platform, setPlatform] = useState<PlatformType>(null);
  const [disabled, setDisabled] = useState(false);
  const [warning, setWarning] = useState<string | null>(null);
  const [detecting, setDetecting] = useState(true);

  useEffect(() => {
    (async () => {
      const detected = await detectPlatform();
      setPlatform(detected);
      if (!detected) {
        setWarning(t('unsupportedDeviceWarn'));
        setDisabled(true);
      }
      setDetecting(false);
    })();
  }, [t]);

  let label = '';
  if (platform?.architecture === 'win64') label = t('win64');
  if (platform?.architecture === 'macIntel') label = t('macIntel');
  if (platform?.architecture === 'macArm') label = t('macArm');
  if (!platform) label = t('unsupportedDeviceWarn');

  const link = platform?.architecture ? downloadLinks[platform.architecture] : '#';

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

  // Hide entirely while detecting to avoid flashing unsupported state
  if (detecting) return null;

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
