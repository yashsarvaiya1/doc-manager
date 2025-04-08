export default function HomePage() {
    return (
        <div className="h-screen w-full bg-gradient-to-bl from-purple-300 to-red-400 p-5 flex space-x-3">
            {/* left */}
            <div className="flex-1 border-2 border-black  flex flex-col shadow-[6px_6px_0px_rgba(0,0,0,0.8)]">
                {/* title */}
                <div className=" space-y-2 text-3xl font-black flex justify-center p-5 text-black">
                    Nextjs Basics
                </div>
                {/* list of links */}
                <div className="text-black text-xl font-medium flex justify-center ">
                    <ul className="flex flex-col space-y-4">
                        <button>
                            <li className="border-2 border-black rounded-full w-50 flex justify-center text-2xl font-serif shadow-[3px_3px_0px_rgba(0,0,0,0.8)] ">
                                Page 1
                            </li>
                        </button>
                        <li className="border-2 border-black rounded-full w-50 flex justify-center text-2xl font-serif shadow-[3px_3px_0px_rgba(0,0,0,0.8)] ">
                            Page 2
                        </li>
                        <li className="border-2 border-black rounded-full w-50 flex justify-center text-2xl font-serif shadow-[3px_3px_0px_rgba(0,0,0,0.8)] ">
                            Page 3
                        </li>
                    </ul>

                </div>
            </div>
            {/* right */}
            <div className="flex-4 flex flex-col">
                {/* welcome message */}
                <div>
                    <div className="text-5xl bg-black font-black bg-clip-text text-transparent p-5">
                        Welcome to Nextjs Basics
                    </div>
                    <div className="text-xl text-gray-700 font-bold px-5">
                        a place where we can dive deep into the world of nextjs and we will learn
                        UI , Interaction , APIs and more
                    </div>
                </div>
                {/* boxes */}
                <div className="h-full w-full p-5 overflow-y-auto scrollbar-none">
                    <div className="grid grid-cols-4 gap-4 ">
                        <div className=" border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,0.8)] h-70 text-3xl flex items-center justify-center font-black text-black shadow-right-bottom">
                            yash
                        </div>
                        <div className=" border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,0.8)] h-70 text-3xl flex items-center justify-center font-black text-black shadow-right-bottom">
                            yash
                        </div>
                        <div className=" border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,0.8)] h-70 text-3xl flex items-center justify-center font-black text-black shadow-right-bottom">
                            yash
                        </div>
                        <div className=" border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,0.8)] h-70 text-3xl flex items-center justify-center font-black text-black shadow-right-bottom">
                            yash
                        </div>
                        <div className=" border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,0.8)] h-70 text-3xl flex items-center justify-center font-black text-black shadow-right-bottom">
                            yash
                        </div>
                        <div className=" border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,0.8)] h-70 text-3xl flex items-center justify-center font-black text-black shadow-right-bottom">
                            yash
                        </div>
                        <div className=" border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,0.8)] h-70 text-3xl flex items-center justify-center font-black text-black shadow-right-bottom">
                            yash
                        </div><div className=" border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,0.8)] h-70 text-3xl flex items-center justify-center font-black text-black shadow-right-bottom">
                            yash
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}