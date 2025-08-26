'use client';
import React from 'react';
import { Button, Card } from '@heroui/react';
import { Icon } from '@iconify/react';

import Threads from '../blocks/Backgrounds/Threads/Threads';

export default function Home() {
  // Down arrow scroll logic
  React.useEffect(() => {
    const handleScroll = () => {
      const arrow = document.getElementById('down-arrow');
      if (!arrow) return;
      // Fade out arrow when scrolled past hero
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
      // Damped scroll effect
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
  <div className="min-h-screen relative" style={{ '--navbar-height': '4rem' } as React.CSSProperties}>
      <div className="absolute inset-0 w-full h-[600px] -z-10">
        <Threads amplitude={2.8} distance={0.2} enableMouseInteraction={true} />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-var(--navbar-height))] text-center mb-20 flex items-center justify-center relative" style={{ scrollSnapAlign: 'start' }}>
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">AI at the Speed of Thought</h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              No more copy-paste. No more app switching. Just select text, hit a hotkey, and get
              instant translations, rewrites, or answers—right where you work.
            </p>
            <Button
              className="bg-foreground text-default"
              size="lg"
              variant="shadow"
              endContent={<Icon icon="lucide:arrow-right" />}
              onPress={() => {
                const ctaSection = document.querySelector('#final-cta');
                if (ctaSection) {
                  ctaSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              👉 Supercharge Your Workflow with SnapMind
            </Button>
          </div>
          {/* Down Arrow */}
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

        {/* Why This App Section */}
        <section id="why-this-app" className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-10">Why This App</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'lucide:zap',
                title: 'Blazing Fast',
                description: 'Trigger AI with a single keystroke.',
              },
              {
                icon: 'lucide:layout',
                title: 'Seamless',
                description: 'Works inside any app, without breaking your flow.',
              },
              {
                icon: 'lucide:settings',
                title: 'Customizable',
                description: 'Set your own prompts for the tasks you repeat most.',
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

        {/* Use Cases Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-10">Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Quickly translate selected text into any language, anywhere.',
              'Make your writing clearer, shorter, or more professional with one keystroke.',
              'Turn long paragraphs, articles, or reports into key takeaways instantly.',
              'Highlight any concept, code snippet, or sentence—and get a simple explanation.',
              'Generate replies, emails, or text snippets without switching apps.',
              'Check grammar, simplify complex content, or rephrase text to aid understanding.',
              'Turn notes or random thoughts into structured ideas, outlines, or action items.',
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

        {/* Tagline Section */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold italic mb-4">
            {'"Don\'t adapt to AI. Let AI adapt to you."'}
          </h2>
        </section>

        {/* Final CTA Section */}
        <section id="final-cta" className="text-center">
          <Button
            className="bg-foreground text-default"
            size="lg"
            variant="shadow"
            endContent={<Icon icon="lucide:download" />}
          >
            ⚡ Download now and make AI your fastest shortcut
          </Button>
        </section>
      </main>
    </div>
  );
}
