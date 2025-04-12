'use client'

import { useState } from "react";
import Task1 from "../../(components)/task1";
import Welcome from "../../(components)/welcome";
import Task2 from "../../(components)/task2";
import Task3 from "../../(components)/task3";

export default function PractisePage() {
    const [task, setTask] = useState<string>();

    const renderComponent = () => {
        switch (task) {
            case "task1":
                return <Task1 />

            case "task2":
                return <Task2/>

            case "task3":
                return <Task3/>

            default:
                return <Welcome />
        }
    }
    return (
        <>
            {/* main screen */}
            <div className="h-screen w-full flex flex-col p-5 space-y-5 font-mono">
                {/* header */}
                <div className="flex-1 w-full border-1 flex justify-center items-center">
                    <h1 className="text-6xl font-black ">Task Practice</h1>
                </div >
                {/* main content */}
                <div className="flex-7 flex space-x-5 overflow-hidden">
                    {/* side bar */}
                    <div className="flex-1 w-full border-1 flex flex-col">
                        {/* title */}
                        <div className="flex-1  flex items-center justify-center">
                            <h1 className="text-4xl">Select Task</h1>
                        </div>
                        <hr />
                        {/* menu */}
                        <div className="flex-7  flex flex-col p-5 space-y-3 overflow-y-auto scrollbar-hide">
                                <li>
                                    <button onClick={() => setTask("welcome")}><h1 className="text-2xl">Welcome</h1></button>
                                </li>
                                <li>
                                    <button onClick={() => setTask("task1")}><h1 className="text-2xl">Task 1 [Counter]</h1></button>
                                </li> 
                                <li>
                                    <button onClick={() => setTask("task2")}><h1 className="text-2xl">Task 2 [Simple Form]</h1></button>
                                </li> 
                                <li>
                                    <button onClick={() => setTask("task3")}><h1 className="text-2xl">Task 3 [Comment]</h1></button>
                                </li>                  
                        </div>
                    </div>
                    {/* output */}
                    <div className="flex-5 w-full border-1 flex flex-col">
                        {/* title */}
                        <div className="flex-1 flex items-center justify-center">
                            <h1 className="text-4xl">:: OUTPUT ::</h1>
                        </div>
                        {/* menu */}
                        <div className="flex-9 m-5 ">
                            <div className="border-1 h-full w-full rounded-4xl">
                                {renderComponent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}