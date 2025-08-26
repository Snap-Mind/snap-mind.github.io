import React from 'react';
import { Button, Card } from '@heroui/react';
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-background-500 leading-relaxed py-2">
            AI at the Speed of Thought
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            No more copy-paste. No more app switching. Just select text, hit a hotkey, and get
            instant translations, rewrites, or answers—right where you work.
          </p>
          <Button
            className="bg-foreground text-default"
            size="lg"
            variant="shadow"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            👉 Supercharge Your Workflow
          </Button>
        </section>

        {/* Why This App Section */}
        <section className="mb-20">
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
        <section className="text-center">
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
