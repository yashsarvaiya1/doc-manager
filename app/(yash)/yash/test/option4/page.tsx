'use client';

import { useState } from 'react';

const Page1Component = () => (
  <div className="border border-black p-6 text-center text-lg font-bold">Page 1 Content</div>
);

const Page2Component = () => (
  <div className="border border-black p-6 text-center text-lg font-bold">Page 2 Content</div>
);

const Page3Component = () => (
  <div className="border border-black p-6 text-center text-lg font-bold">Page 3 Content</div>
);

const DefaultGrid = () => (
  <div className="grid grid-cols-4 gap-4">
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        className="bg-pink-300 border border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] p-6 font-bold text-center"
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
    <div className="min-h-screen flex bg-gradient-to-r from-pink-400 to-purple-400 p-4">
      {/* Sidebar */}
      <div className="w-64 border border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] p-6">
        <h1 className="text-2xl font-extrabold mb-6 text-center">Nextjs Basics</h1>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => setActivePage('page1')}
            className="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
          >
            Page 1
          </button>
          <button
            onClick={() => setActivePage('page2')}
            className="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
          >
            Page 2
          </button>
          <button
            onClick={() => setActivePage('page3')}
            className="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
          >
            Page 3
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-extrabold mb-2">Welcome to Nextjs Basics</h1>
        <p className="text-gray-800 font-semibold mb-6">
          a place where we can dive deep into the world of nextjs and we will learn UI, Interaction, APIs and more
        </p>
        {renderComponent()}
      </div>
    </div>
  );
}
