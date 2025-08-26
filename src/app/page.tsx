export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Snap Mind</h1>
        <nav>
          <a href="#features" className="text-gray-600 hover:text-gray-800">Features</a>
          <a href="#use-cases" className="ml-4 text-gray-600 hover:text-gray-800">Use Cases</a>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-extrabold mb-4">AI at the Speed of Thought</h2>
        <p className="text-xl text-gray-600 mb-8">
          No more copy-paste. No more app switching. Just select text, hit a hotkey, and get instant translations, rewrites, or answers—right where you work.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
        >
          👉 Supercharge Your Workflow
        </a>
      </main>

      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Why This App</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">Blazing Fast</h4>
              <p className="text-gray-600">Trigger AI with a single keystroke.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">Seamless</h4>
              <p className="text-gray-600">Works inside any app, without breaking your flow.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">Customizable</h4>
              <p className="text-gray-600">Set your own prompts for the tasks you repeat most.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Translate</h4>
              <p className="text-gray-600">Translate text instantly in any app.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Rewrite & Polish</h4>
              <p className="text-gray-600">Rewrite and polish writing with zero friction.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Summarize</h4>
              <p className="text-gray-600">Summarize articles or research on the fly.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Explain</h4>
              <p className="text-gray-600">Explain complex terms in plain English.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Draft</h4>
              <p className="text-gray-600">Draft emails, responses, or code snippets in seconds.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">“Don’t adapt to AI. Let AI adapt to you.”</h3>
          <a
            href="#"
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300"
          >
            ⚡ Download now and make AI your fastest shortcut.
          </a>
        </div>
      </section>

      <footer className="bg-white py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>&copy; 2025 Snap Mind. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
