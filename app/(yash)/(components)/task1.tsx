'use client'

import { useState } from "react";

export default function Task1() {
    const [count, setCount] = useState(0);
    // function increment() {
    //     setCount(prevCount => prevCount + 1);
    //     setCount(prevCount => prevCount + 1);
    // }
    return (
        <>
            <div className="h-full w-full flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-6xl font-bold">
                        Count : {count}
                    </h1>
                </div>
                <br />
                <br />
                <div className="flex gap-20">
                    <button className="text-4xl font-black border rounded-full p-5" onClick={() => count < 1 ? null : setCount(prevCount => prevCount - 1)}>- </button>
                    <button className="text-4xl font-black border rounded-full p-5" onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                </div>

            </div>
        </>
    );
} 