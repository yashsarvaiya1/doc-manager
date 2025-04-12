'use client'

import { useState } from "react";

export default function Task2() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const isvalid = email.includes("@");

    return (
        <>
            <div className="w-full h-full p-5 flex items-center justify-center">
                <div className="h-100 w-200 border rounded-2xl p-5 flex flex-col items-center justify-center">
                    {/* heading */}
                    <div className="flex-1 w-full">
                        <div className="h-full flex items-center justify-center text-4xl font-bold">
                            Login
                        </div>
                    </div>
                    {/* input */}
                    <div className="flex-2 w-full ">
                        <div className="h-full flex flex-col items-center justify-center gap-4">
                            <input type="text"
                                className="border p-3 w-100 rounded-2xl text-xl"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input type="email"
                                className="border p-3 w-100 rounded-2xl text-xl"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* submit */}
                    <div className="flex-1 w-full">
                        <div className="flex items-center justify-center h-full">
                            <button
                                disabled={!isvalid}
                                onClick={() => alert("Success!")}
                                className={`text-xl border rounded-2xl p-5 px-15 
                                    ${!isvalid ? 'opacity-50 cursor-not-allowed' :
                                        'hover:bg-blue-500 hover:scale-110'}`}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}