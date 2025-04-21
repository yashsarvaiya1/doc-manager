'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { FiSearch, FiPlus, FiShare2, FiEdit2, FiTrash2, FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import toast from 'react-hot-toast';


const toastHandle = () => {
    toast.success('You did it!');

    toast.custom(<>
        <div className='p-5 border-2 border-[#068190] text-md text-[#068190] '>
            my custome toast
        </div>
    </>);

};

export default function Dashboard() {
    const [previewDoc, setPreviewDoc] = useState(null);
    const [activeCard, setActiveCard] = useState(null);
    const router = useRouter();


    useEffect(() => {
        const token = Cookies.get('access_token');
        if (!token) {
            toast.error('Access token not found. Redirecting to login...');
            router.push('/');
        }
    }, []);

    const handleLogout = () => {
        Cookies.remove('access_token');
        toast.success('Logged out successfully!');
        router.push('/');
    };

    const clearToken = () => {
        Cookies.remove('access_token');
        toast('Access token cleared! Refresh to test redirect.');
    };

    const documents = [
        {
            title: "Project Proposal",
            id: "DOC-2025-001",
            expiry: "Mar 15, 2025",
            type: "pdf"
        },
        {
            title: "Financial Report",
            id: "DOC-2025-002",
            expiry: "Apr 30, 2025",
            type: "excel"
        },
        {
            title: "Legal Contract",
            id: "DOC-2025-003",
            expiry: "Dec 31, 2025",
            type: "word"
        }
    ];

    const getFileIcon = (type: string) => {
        switch (type) {
            case 'pdf':
                return (
                    <div className="bg-red-100 rounded-lg p-2 w-12 h-16 flex items-center justify-center">
                        <div className="text-red-500 font-bold">PDF</div>
                    </div>
                );
            case 'excel':
                return (
                    <div className="bg-green-100 rounded-lg p-2 w-12 h-16 flex items-center justify-center">
                        <div className="text-green-500 font-bold">X</div>
                    </div>
                );
            case 'word':
                return (
                    <div className="bg-[#068190] rounded-lg p-2 w-12 h-16 flex items-center justify-center">
                        <div className="text-[#068190] font-bold">W</div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header - Exactly matching the screenshot */}
            <div className="bg-white border-b border-gray-200 px-4 py-2">
                <div className="w-full h-10 px-40 mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center justify-center ">
                        {/* <div className="text-blue-600 mr-2">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
                                <path d="M7 18V6C7 5.45 7.196 4.979 7.588 4.587C7.98 4.195 8.45067 4 9 4H15C15.55 4 16.021 4.195 16.413 4.587C16.805 4.979 17 5.45 17 6V18L12 15.5L7 18Z" fill="currentColor" />
                            </svg>
                        </div> */}
                        <a href="/dashboard" className="link"><div className=""><Image src={'/Navbar_Logo.png'} className='object-cover'  width={150} height={150} alt='DocSyncX' /></div></a>

                    </div>

                    {/* Navigation */}
                    <div className="flex items-center space-x-6 text-md">

                        <button onClick={handleLogout} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill="currentColor" />
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="py-6 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Documents</h2>
                        <div className="flex space-x-4">
                            <div className="relative">
                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search documents..."
                                    className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none"
                                />
                            </div>
                            <button className="bg-[#068190] text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor" />
                                </svg>
                                <Link href="/document/add"><span>New Document</span></Link>
                            </button>
                        </div>
                    </div>

                    {/* Document Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {documents.map((doc) => (
                            <div
                                key={doc.id}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 relative"
                                onMouseEnter={() => setActiveCard(doc.id as any)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-semibold text-lg text-gray-800">{doc.title}</h3>
                                        <div className={`flex space-x-2 transition-opacity ${activeCard === doc.id ? "opacity-100" : "opacity-0"}`}>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="currentColor" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <Link href="/document/1">
                                        <div
                                            className="bg-gray-50 rounded-lg py-8 flex justify-center items-center relative"
                                            onMouseEnter={() => setPreviewDoc(doc.id as any)}
                                            onMouseLeave={() => setPreviewDoc(null)}
                                        >
                                            <Image src={"/Login_Register_Logo.png"} height={100} width={100} alt='image' />

                                            {/* Document Preview on Hover - Only shows when hovering over the document area */}
                                            {previewDoc === doc.id && (
                                                <div className="absolute z-10 top-15 left-12 ml-2 w-[400] h-[300] bg-white rounded-lg shadow-lg border border-gray-200 p-2">
                                                    <div className="w-full h-full relative">
                                                        <Image
                                                            src="/Login_Register_Logo.png"
                                                            alt="Document preview"
                                                            fill
                                                            className="object-contain"
                                                            priority
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </Link>

                                    <div className="mt-4 space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-500">Document ID</span>
                                            <span className="text-sm font-medium text-[#068190]">{doc.id}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-500">Expiry Date</span>
                                            <span className={`text-sm font-medium ${doc.expiry === "Mar 15, 2025" ? "text-red-500" :
                                                doc.expiry === "Apr 30, 2025" ? "text-orange-500" :
                                                    "text-gray-700"
                                                }`}>
                                                {doc.expiry}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button className='flex border p-4 border-[#068190] justify-center items-center text-[#068190]' onClick={toastHandle}>Make Toast</button>
                        <button className='flex border p-4 border-[#068190] justify-center items-center text-[#068190]' onClick={clearToken}>Clear Token</button>
                    </div>
                </div>
            </main>
        </div>
    );
}