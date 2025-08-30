'use client';
import React from 'react';
import { Card } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';
import Threads from '../../blocks/Backgrounds/Threads/Threads';
import DownloadButton from '../components/DownloadButton';

export default function HomePage() {
  const t = useTranslations('LandingPage');

  React.useEffect(() => {
    const handleScroll = () => {
      const arrow = document.getElementById('down-arrow');
      if (!arrow) return;
      if (window.scrollY > window.innerHeight * 0.7) {
        arrow.style.opacity = '0';
      } else {
        arrow.style.opacity = '1';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleArrowClick = () => {
    const nextSection = document.getElementById('why-this-app');
    if (nextSection) {
      window.scrollTo({ top: nextSection.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen relative"
      style={{ '--navbar-height': '4rem' } as React.CSSProperties}
    >
      <div className="absolute inset-0 w-full h-[600px] -z-10">
        <Threads amplitude={2.8} distance={0.2} enableMouseInteraction={true} />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section
          className="min-h-[calc(100vh-var(--navbar-height))] text-center mb-20 flex items-center justify-center relative"
          style={{ scrollSnapAlign: 'start' }}
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">{t('headline')}</h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('subHeadline')}
            </p>
            <div className="mb-6 flex justify-center">
              <DownloadButton />
            </div>
          </div>
          <button
            id="down-arrow"
            aria-label="Scroll down"
            onClick={handleArrowClick}
            className="absolute left-1/2 -translate-x-1/2 bottom-10 z-10 flex flex-col items-center focus:outline-none"
            style={{ transition: 'opacity 0.3s' }}
          >
            <Icon
              icon="lucide:chevron-down"
              className="text-4xl text-gray-500 dark:text-gray-300 animate-bounce"
            />
          </button>
        </section>
        <section id="why-this-app" className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-10">{t('whyThisApp')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'lucide:zap', title: t('reason1'), description: t('reason1Description') },
              { icon: 'lucide:layout', title: t('reason2'), description: t('reason2Description') },
              {
                icon: 'lucide:settings',
                title: t('reason3'),
                description: t('reason3Description'),
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <Icon icon={feature.icon} className="text-5xl mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <div className="text-gray-600 dark:text-gray-300">{feature.description}</div>
              </Card>
            ))}
          </div>
        </section>
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-10">Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              t('useCase1'),
              t('useCase2'),
              t('useCase3'),
              t('useCase4'),
              t('useCase5'),
              t('useCase6'),
              t('useCase7'),
            ].map((useCase, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start">
                  <Icon
                    icon="lucide:check-circle"
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>{useCase}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold italic mb-4">{t('finalCTA')}</h2>
        </section>
      </main>
    </div>
  );
}
