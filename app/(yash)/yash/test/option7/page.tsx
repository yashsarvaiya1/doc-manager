'use client';

import { useState } from 'react';

const features = [
  { id: 'f1', title: 'Auth UI', content: 'Login / Signup Page' },
  { id: 'f2', title: 'Dashboard', content: 'User stats + settings' },
  { id: 'f3', title: 'Chat', content: 'Live messaging component' },
];

type Feature = {
  id: string;
  title: string;
  content: string;
};

export default function Home() {
  const [selected, setSelected] = useState<Feature | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ecf0f3] to-[#d1c4e9] flex">
      {/* Canvas */}
      <div className="w-2/3 p-10 relative flex flex-wrap gap-10">
        {features.map((f, i) => (
          <div
            key={f.id}
            onClick={() => setSelected(f)}
            className={`absolute p-5 rounded-full text-center cursor-pointer bg-white border-4 shadow-md hover:scale-105 transition-all duration-300 text-sm font-bold`}
            style={{
              top: `${100 + i * 100}px`,
              left: `${50 + (i % 2) * 200}px`,
            }}
          >
            {f.title}
          </div>
        ))}
        <div className="absolute top-4 left-4 text-xl font-bold text-gray-700">🧠 Feature Flow</div>
      </div>

      {/* Preview */}
      <div className="w-1/3 p-8 bg-white shadow-inner rounded-l-3xl">
        {selected ? (
          <>
            <h2 className="text-2xl font-bold text-purple-800 mb-2">{selected.title}</h2>
            <p className="text-gray-600">{selected.content}</p>
          </>
        ) : (
          <p className="text-gray-500">Select a node to view its component</p>
        )}
      </div>
    </main>
  );
}
