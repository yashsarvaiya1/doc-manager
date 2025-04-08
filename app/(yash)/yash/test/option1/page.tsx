'use client';

import { useState } from 'react';

const Page1Component = () => (
  <div className="border border-teal-400 p-6 text-center text-lg font-bold bg-teal-900/20 text-teal-200 rounded-lg">
    ⚡ Feature 1 Content
  </div>
);
const Page2Component = () => (
  <div className="border border-blue-400 p-6 text-center text-lg font-bold bg-blue-900/20 text-blue-200 rounded-lg">
    🧠 Feature 2 Content
  </div>
);
const Page3Component = () => (
  <div className="border border-purple-400 p-6 text-center text-lg font-bold bg-purple-900/20 text-purple-200 rounded-lg">
    🔮 Feature 3 Content
  </div>
);

const DefaultGrid = () => (
  <div className="grid grid-cols-4 gap-4">
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        className="bg-gray-800 border border-gray-700 shadow-md p-6 font-bold text-center text-white rounded-lg"
      >
        yash
      </div>
    ))}
  </div>
);

export default function Home() {
  const [activePage, setActivePage] = useState('');

  const renderComponent = () => {
    switch (activePage) {
      case 'page1':
        return <Page1Component />;
      case 'page2':
        return <Page2Component />;
      case 'page3':
        return <Page3Component />;
      default:
        return <DefaultGrid />;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10">
      <div className="flex flex-col gap-6">
        <div className="text-5xl font-extrabold text-cyan-400">🚀 Next.js Tech UI</div>
        <p className="text-gray-300">Select a dynamic component below to explore features.</p>

        {/* Feature Selection Bar */}
        <div className="flex gap-4">
          <button
            onClick={() => setActivePage('page1')}
            className="px-6 py-3 bg-teal-600 hover:bg-teal-400 rounded-md transition font-semibold"
          >
            Feature 1
          </button>
          <button
            onClick={() => setActivePage('page2')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-400 rounded-md transition font-semibold"
          >
            Feature 2
          </button>
          <button
            onClick={() => setActivePage('page3')}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-400 rounded-md transition font-semibold"
          >
            Feature 3
          </button>
        </div>

        {/* Main Component View */}
        <div className="mt-8">{renderComponent()}</div>
      </div>
    </main>
  );
}
