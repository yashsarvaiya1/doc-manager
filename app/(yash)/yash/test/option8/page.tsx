'use client';

import { useState } from 'react';

const dockApps = [
  { id: '1', label: '💬 Chat', content: 'Chat UI Components' },
  { id: '2', label: '📈 Analytics', content: 'Stats + Graphs' },
  { id: '3', label: '⚙️ Settings', content: 'Theme + Preferences' },
];

type DockApp = {
  id: string;
  label: string;
  content: string;
};

export default function Home() {
  const [active, setActive] = useState<DockApp | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-t from-gray-900 to-gray-700 relative text-white">
      {/* Active Panel */}
      {active && (
        <div className="absolute top-0 left-0 w-full h-[calc(100%-5rem)] bg-white text-black p-10 rounded-b-3xl shadow-inner z-10">
          <h2 className="text-3xl font-bold mb-4">{active.label}</h2>
          <p>{active.content}</p>
        </div>
      )}

      {/* Dock */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 px-6 py-3 rounded-full shadow-2xl flex gap-6 z-20">
        {dockApps.map((app) => (
          <button
            key={app.id}
            onClick={() => setActive(app)}
            className="text-xl hover:scale-125 transition-transform"
          >
            {app.label}
          </button>
        ))}
      </div>
    </main>
  );
}
