'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaTasks, FaCode, FaTerminal, FaHeartbeat } from 'react-icons/fa';

const tasks = [
  {
    key: 'welcome',
    title: 'Welcome Page',
    description:
      'This task displays a default welcome message. As you interact with the sidebar, this section will update to reflect the selected component’s purpose and instructions.',
    component: (
      <div className="text-center text-slate-300">
        This is the main output area. It will display the selected component dynamically based on state.
      </div>
    ),
  },
  {
    key: 'interaction',
    title: 'Simple Interaction',
    description: 'This task involves toggling visibility and handling button clicks using basic React state.',
    component: <ToggleComponent />,
  },
  {
    key: 'visibility',
    title: 'Dynamic Visibility',
    description: 'This task demonstrates how to show/hide UI parts based on conditions or triggers.',
    component: <VisibilityComponent />,
  },
];

function ToggleComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center space-y-4 text-white">
      <p className="text-xl">You clicked <span className="font-bold text-cyan-400">{count}</span> times</p>
      <button
        className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-full transition shadow-lg font-semibold"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}

function VisibilityComponent() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="text-center space-y-4 text-white">
      <button
        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full transition shadow-lg font-semibold"
        onClick={() => setVisible(!visible)}
      >
        Toggle Box
      </button>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="p-4 bg-green-400 rounded-xl shadow-lg text-black"
          >
            Now you see me!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HomePage() {
  const [activeTaskKey, setActiveTaskKey] = useState('welcome');
  const activeTask = tasks.find((task) => task.key === activeTaskKey)!;

  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white font-sans flex flex-col p-4 space-y-4 backdrop-blur-lg">
      {/* Navbar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="bg-slate-800/80 border border-slate-600 rounded-xl px-6 py-4 text-3xl font-extrabold shadow-xl flex items-center space-x-4"
      >
        <FaRocket className="text-cyan-400 animate-pulse" />
        <span>Next.js Playground</span>
      </motion.div>

      {/* Main layout: Sidebar + Content */}
      <div className="flex flex-1 space-x-4 overflow-hidden">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-72 bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-xl flex flex-col space-y-6"
        >
          <div className="text-xl font-semibold flex items-center space-x-2 text-cyan-400">
            <FaTasks />
            <span>Tasks</span>
          </div>
          <ul className="space-y-3">
            {tasks.map((task) => (
              <li
                key={task.key}
                onClick={() => setActiveTaskKey(task.key)}
                className={`px-4 py-2 rounded-xl transition font-medium cursor-pointer text-sm tracking-wide ${
                  activeTaskKey === task.key
                    ? 'bg-cyan-600 text-white shadow-md scale-[1.02]'
                    : 'hover:bg-[#334155] text-cyan-100'
                }`}
              >
                {task.title}
              </li>
            ))}
          </ul>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col space-y-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 shadow-md text-xl font-semibold text-cyan-300 flex items-center space-x-3"
          >
            <FaCode />
            <span>Task: {activeTask.title}</span>
          </motion.div>

          {/* Content */}
          <div className="flex flex-1 space-x-4 overflow-hidden">
            {/* Description Panel */}
            <section className="w-1/3 bg-slate-800/80 border border-slate-700 rounded-xl p-6 shadow-inner space-y-2 overflow-y-auto">
              <h2 className="text-md font-semibold text-cyan-400 flex items-center space-x-2">
                <FaTerminal />
                <span>Description</span>
              </h2>
              <p className="text-slate-300 text-sm">{activeTask.description}</p>
            </section>

            {/* Preview Panel */}
            <section className="flex-1 bg-slate-900/70 border border-slate-700 rounded-xl p-0 shadow-xl flex flex-col">
              {/* Output Header */}
              <div className="h-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-t-xl flex items-center justify-between px-4 text-sm font-bold tracking-wider">
                <span>Output</span>
                <span className="text-xs bg-black/40 px-2 py-0.5 rounded">Preview Mode</span>
              </div>

              {/* Output Display */}
              <div className="flex-1 p-6 overflow-auto bg-slate-950 rounded-b-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTask.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTask.component}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="h-10 bg-slate-800/80 border-t border-slate-700 rounded-b-xl px-4 flex items-center justify-between text-sm text-slate-400">
                <span>Next.js Playground</span>
                <span>Logs 🪵</span>
                <span className="text-green-400 flex items-center space-x-1"><FaHeartbeat /> <span>ONLINE</span></span>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
