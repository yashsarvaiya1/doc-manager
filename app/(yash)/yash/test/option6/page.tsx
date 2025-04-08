'use client';

import { useState } from 'react';

const tabs = [
  { id: '1', title: 'Feature 1', content: 'Building Nav System' },
  { id: '2', title: 'Feature 2', content: 'Creating Dashboard Widgets' },
  { id: '3', title: 'Feature 3', content: 'Hooking APIs' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('1');

  const current = tabs.find((t) => t.id === activeTab);

  return (
    <main className="min-h-screen bg-zinc-100">
      {/* Tab bar */}
      <div className="flex gap-6 px-10 py-4 border-b bg-white shadow-sm">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`font-semibold py-2 transition ${
              t.id === activeTab
                ? 'border-b-4 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-blue-400'
            }`}
          >
            {t.title}
          </button>
        ))}
      </div>

      {/* Split view */}
      <div className="flex">
        <aside className="w-1/4 p-6 border-r bg-white">
          <ul className="space-y-4 text-gray-700">
            <li>🔧 Setup</li>
            <li>🧪 Components</li>
            <li>📦 Data</li>
            <li>🎯 Deploy</li>
          </ul>
        </aside>
        <section className="flex-1 p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{current?.title}</h2>
          <p className="text-gray-600">{current?.content}</p>
        </section>
      </div>
    </main>
  );
}
