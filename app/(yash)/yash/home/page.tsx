'use client';

import { useState } from 'react';

const tasks = [
  {
    key: 'welcome',
    title: 'Welcome Page',
    description:
      'This task displays a default welcome message. As you interact with the sidebar, this section will update to reflect the selected component’s purpose and instructions.',
    component: (
      <div className="text-center text-gray-600">
        This is the main output area. It will display the selected component dynamically based on state.
      </div>
    ),
  },
  {
    key: 'interaction',
    title: 'Simple Interaction',
    description: 'This task involves toggling visibility and handling button clicks using basic React state.',
    component: (
      <div className="text-center text-gray-600 space-y-4">
        <ToggleComponent />
      </div>
    ),
  },
  {
    key: 'visibility',
    title: 'Dynamic Visibility',
    description: 'This task demonstrates how to show/hide UI parts based on conditions or triggers.',
    component: (
      <div className="text-center text-gray-600 space-y-4">
        <VisibilityComponent />
      </div>
    ),
  },
];

function ToggleComponent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>You clicked {count} times</p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </>
  );
}

function VisibilityComponent() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
        onClick={() => setVisible(!visible)}
      >
        Toggle Box
      </button>
      {visible && <div className="p-4 bg-green-200 rounded-md">Now you see me!</div>}
    </>
  );
}

export default function HomePage() {
  const [activeTaskKey, setActiveTaskKey] = useState('welcome');

  const activeTask = tasks.find((task) => task.key === activeTaskKey)!;

  return (
    <div className="h-screen w-full bg-[#f9fafb] text-[#111827] font-sans flex flex-col p-4 space-y-4">
      {/* Navbar */}
      <div className="bg-white border border-[#e5e7eb] rounded-xl px-6 py-4 text-2xl font-bold shadow-sm">
        🚀 Next.js Playground
      </div>

      {/* Main layout: Sidebar + Content */}
      <div className="flex flex-1 space-x-4 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white border border-[#e5e7eb] rounded-xl p-4 shadow-sm">
          <div className="text-lg font-semibold mb-2">🧪 Task List</div>
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.key}
                onClick={() => setActiveTaskKey(task.key)}
                className={`px-3 py-2 rounded-lg transition cursor-pointer ${
                  activeTaskKey === task.key ? 'bg-blue-100 font-semibold' : 'hover:bg-[#f3f4f6]'
                }`}
              >
                {task.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col space-y-4 overflow-hidden">
          {/* Task Header */}
          <div className="bg-white border border-[#e5e7eb] rounded-xl p-4 shadow-sm text-lg font-semibold">
            📝 Task: {activeTask.title}
          </div>

          {/* Task Content */}
          <div className="flex flex-1 space-x-4 overflow-hidden">
            {/* Description Panel */}
            <section className="w-1/4 bg-white border border-[#e5e7eb] rounded-xl p-4 shadow-sm overflow-y-auto">
              <h2 className="text-md font-semibold mb-2">📋 Description:</h2>
              <p>{activeTask.description}</p>
            </section>

            {/* Preview Panel */}
            <section className="flex-1 bg-white border border-[#e5e7eb] rounded-xl p-4 shadow-sm flex flex-col">
              {/* Output Header */}
              <div className="h-10 bg-gray-800 text-gray-100 rounded-t-xl flex items-center justify-center relative px-4">
                <div className="absolute left-3 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm font-medium tracking-wide">Output</span>
              </div>

              {/* Output Display Area */}
              <div className="flex-1 bg-[#fefce8] rounded-b-none px-4 py-6 overflow-auto">
                {activeTask.component}
              </div>

              {/* Footer */}
              <div className="h-10 bg-gray-100 border-t border-[#e5e7eb] rounded-b-xl px-4 flex items-center justify-between text-sm text-gray-600">
                <span>Next.js 🙈</span>
                <span>Logs 🪵</span>
                <span className="text-green-600">~ ONLINE ❤️</span>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}