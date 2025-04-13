'use client';

import { useState } from 'react';

export default function Task3() {
    const [heading, setHeading] = useState('');
    const [message, setMessage] = useState('');
    const charLimit = 150;

    const isValidHeading = /^\[(add|ref|imp)\]\s+[^:]+:$/.test(heading);
    const isValidMessage = message.length <= charLimit;
    const isValid = isValidHeading && isValidMessage;
    return (
        <div className="w-full h-full flex justify-center items-center bg-zinc-900 text-white">
            <div className="w-[700px] h-[500px] bg-zinc-800 border border-zinc-700 rounded-2xl flex flex-col p-5 shadow-2xl space-y-5">
                
                {/* Header */}
                <div className="flex justify-center items-center">
                    <p className="text-3xl font-bold">💬 Comment Box</p>
                </div>

                {/* Inputs */}
                <div className="flex flex-col items-center justify-center space-y-4 flex-1">
                    <input
                        type="text"
                        placeholder="[add] Feature : Title here"
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                        className="w-4/5 px-4 py-2 rounded-xl bg-zinc-700 text-white text-lg outline-none border border-zinc-600 placeholder-zinc-400"
                    />
                    <textarea
                        placeholder="Write your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-4/5 h-32 px-4 py-2 rounded-xl bg-zinc-700 text-white text-lg outline-none border border-zinc-600 placeholder-zinc-400 resize-none"
                    />
                    <p className="w-4/5 text-right text-sm text-zinc-400">
                        {message.length}/{charLimit}
                    </p>
                </div>

                {/* Submit */}
                <div className="flex justify-center">
                    <button
                        disabled={!isValid}
                        onClick={() => alert('✅ Submitted successfully!')}
                        className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-200 border 
                            ${isValid 
                                ? 'bg-blue-600 hover:bg-blue-700 border-blue-500 text-white' 
                                : 'bg-zinc-600 text-zinc-400 cursor-not-allowed border-zinc-500'
                            }`}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
