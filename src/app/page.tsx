
export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Snap Mind</h1>
        <nav>
          <a href="#features" className="text-gray-600 hover:text-gray-800">Features</a>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-extrabold mb-4">Instant Recall with a Keystroke</h2>
        <p className="text-xl text-gray-600 mb-8">
          Snap Mind is the fastest way to capture your thoughts. Summon a prompt with a simple hotkey, speak your mind, and let us handle the rest.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Download Now
        </a>
      </main>

      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">Hotkey Access</h4>
              <p className="text-gray-600">Bring up Snap Mind from anywhere on your desktop with a single hotkey press.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">Voice to Text</h4>
              <p className="text-gray-600">Simply speak your thoughts and we&apos;ll transcribe them for you instantly.</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">Effortless Organization</h4>
              <p className="text-gray-600">Your notes are automatically saved and organized for easy retrieval.</p>
            </div>
          </div>
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
