'use client';

import { useState } from 'react';

const steps = [
  { id: '1', label: 'Feature 1', content: '🛠️ Working on Component 1' },
  { id: '2', label: 'Feature 2', content: '🎯 Developing Component 2' },
  { id: '3', label: 'Feature 3', content: '🚀 Finalizing Component 3' },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState('1');

  return (
    <main className="min-h-screen bg-gradient-to-r from-sky-100 to-lime-100 p-10">
      <h1 className="text-3xl font-bold mb-10 text-center">📅 Feature Timeline</h1>
      <div className="flex justify-center gap-6 mb-8">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`px-4 py-2 rounded-full border-2 font-semibold transition ${
              activeStep === step.id
                ? 'bg-black text-white border-black'
                : 'border-gray-600 hover:bg-black hover:text-white'
            }`}
          >
            {step.label}
          </button>
        ))}
      </div>

      <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-2xl text-center border border-gray-300">
        <p className="text-xl font-medium text-gray-700">
          {steps.find((s) => s.id === activeStep)?.content}
        </p>
      </div>
    </main>
  );
}
