'use client';

import { useState } from 'react';

export default function Home() {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState<string | null>(null);

  const handleExecute = () => {
    switch (command.toLowerCase()) {
      case 'feature1':
        setResponse('🧠 Feature 1 loaded: Page 1 Content');
        break;
      case 'feature2':
        setResponse('📦 Feature 2 loaded: Page 2 Content');
        break;
      case 'feature3':
        setResponse('🎨 Feature 3 loaded: Page 3 Content');
        break;
      default:
        setResponse('❌ Unknown command');
    }
    setCommand('');
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-10">
      <h1 className="text-2xl mb-6">💻 DevShell Interface</h1>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
        <p className="mb-4">Type <span className="text-yellow-300">'feature1'</span>, <span className="text-yellow-300">'feature2'</span>, or <span className="text-yellow-300">'feature3'</span> to load:</p>
        <div className="flex gap-2">
          <input
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleExecute()}
            className="flex-1 p-2 bg-black border border-green-400 rounded outline-none"
          />
          <button onClick={handleExecute} className="px-4 py-2 border border-green-500 hover:bg-green-700 hover:text-black transition">
            Run
          </button>
        </div>
        {response && <p className="mt-4 text-green-300">{response}</p>}
      </div>
    </div>
  );
}
