'use client';

import { useState } from 'react';

const FeatureCard = ({ title, content }: { title: string; content: string }) => (
  <div className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] p-5 bg-white border border-gray-300 rounded-2xl shadow-xl transition hover:shadow-2xl hover:scale-105 cursor-pointer">
    <h2 className="text-xl font-bold mb-3">{title}</h2>
    <p className="text-gray-600">{content}</p>
  </div>
);

export default function Home() {
  const [features] = useState([
    { id: 'f1', title: 'Component 1', content: 'Page 1 Content' },
    { id: 'f2', title: 'Component 2', content: 'Page 2 Content' },
    { id: 'f3', title: 'Component 3', content: 'Page 3 Content' },
  ]);

  return (
    <main className="min-h-screen p-10 bg-gradient-to-br from-indigo-100 to-pink-100">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">🧩 Modular Features Dashboard</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {features.map((f) => (
          <FeatureCard key={f.id} title={f.title} content={f.content} />
        ))}
      </div>
    </main>
  );
}
