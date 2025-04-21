'use client';

import { useState, use } from 'react';
import { Download, Mail, Share2, ZoomIn, ZoomOut, Copy, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';


export default function DocumentPage({ params }: { params: Promise<{ document_id: string }> }) {
    const { document_id } = use(params);
    const [zoom, setZoom] = useState(1);
    const router = useRouter();
    const [copiedField, setCopiedField] = useState('');
    const [viewIndex, setViewIndex] = useState(0);

    const views: Array<'pdf' | 'image' | 'jpeg'> = ['pdf', 'image', 'jpeg'];
    const currentView = views[viewIndex];

    const fileInfo = {
        name: 'contract_2025.pdf',
        size: '2.4 MB',
        created: 'Jan 15, 2025',
    };
    const handleLogout = () => {
        Cookies.remove('access_token');
        toast.success('Logged out successfully!');
        router.push('/');
    };

    const attachedFiles = [
        { name: 'specifications.pdf', size: '1.2 MB', type: 'pdf' },
        { name: 'signature.jpg', size: '450 KB', type: 'image' },
    ];

    const customFields = {
        contractId: 'CTR-2025-001',
        clientRef: 'REF-89271',
    };

    const handleZoomIn = () => setZoom((z) => Math.min(z + 0.1, 2));
    const handleZoomOut = () => setZoom((z) => Math.max(z - 0.1, 0.5));

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(''), 1500);
    };

    const handleNext = () => setViewIndex((prev) => (prev + 1) % views.length);
    const handlePrev = () => setViewIndex((prev) => (prev - 1 + views.length) % views.length);

    return (
        <div className="h-screen bg-gray-50 text-sm text-gray-800 flex flex-col">
            <div>
                <div className="w-full h-15 px-40 bg-white mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center justify-center ">
                        {/* <div className="text-blue-600 mr-2">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" />
                                <path d="M7 18V6C7 5.45 7.196 4.979 7.588 4.587C7.98 4.195 8.45067 4 9 4H15C15.55 4 16.021 4.195 16.413 4.587C16.805 4.979 17 5.45 17 6V18L12 15.5L7 18Z" fill="currentColor" />
                            </svg>
                        </div> */}
                        <a href="/dashboard" className="link"><div className=""><Image src={'/Navbar_Logo.png'} className='object-cover' width={150} height={150} alt='DocSyncX' /></div></a>

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
            <hr />
            <div className="flex-shirink px-40 flex items-center justify-between p-4 border-b bg-white">
                <div className="flex items-center gap-2">
                    <button className="text-black">
                        <ArrowLeft className="w-5 h-5" onClick={() => window.location.href = '/dashboard'} />
                    </button>
                    <h1 className="text-lg font-semibold">Project Contract Document : {document_id}</h1>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-1 px-3 py-1.5 text-sm border rounded hover:bg-gray-100">
                        <Mail size={16} /> Send Email
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-white bg-[#068190] rounded hover:bg-[#068190]">
                        <Share2 size={16} /> Share Link
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-50 flex-grow flex p-6 gap-6">
                {/* Left: Document Preview */}
                <div className="flex-2 bg-white rounded-lg shadow p-4 flex flex-col justify-between relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white  p-2 rounded-r hover:bg-gray-100 z-10"
                    >
                        <ChevronLeft size={30} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-l hover:bg-gray-100 z-10"
                    >
                        <ChevronRight size={30} />
                    </button>

                    {/* Document Content */}
                    <div className='w-full h-full flex items-center justify-center'>
                        <div className="w-[50%] h-[90%] flex items-center justify-center overflow-hidden">
                            <div style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }} className="w-full h-full flex items-center justify-center">
                                {currentView === 'image' && (
                                    <Image
                                        src="/image.png"
                                        alt="Image Preview"
                                        width={600}
                                        height={800}
                                        className="object-contain rounded w-full h-full"
                                    />
                                )}
                                {currentView === 'jpeg' && (
                                    <Image
                                        src="/jatin.jpeg"
                                        alt="JPEG Preview"
                                        width={600}
                                        height={800}
                                        className="object-contain rounded w-full h-full"
                                    />
                                )}
                                {currentView === 'pdf' && (
                                    <iframe
                                        src="/temp.pdf"
                                        width="100%"
                                        height="100%"
                                        className="rounded border"
                                    ></iframe>
                                )}
                            </div>
                        </div>
                    </div>


                    {/* Footer Controls */}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-4">
                            <button onClick={handleZoomOut} className="p-2 hover:bg-gray-100 rounded">
                                <ZoomOut size={18} />
                            </button>
                            <span>{Math.round(zoom * 100)}%</span>
                            <button onClick={handleZoomIn} className="p-2 hover:bg-gray-100 rounded">
                                <ZoomIn size={18} />
                            </button>
                        </div>
                        <button className="flex items-center gap-1 px-3 py-1.5 text-sm border rounded hover:bg-gray-100">
                            <Download size={16} /> Download
                        </button>
                    </div>
                </div>

                {/* Right: Info Panel */}
                <div className="flex-1 flex flex-col gap-4">
                    {/* File Info */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="text-sm font-semibold mb-2">File Information</h2>
                        <div className="space-y-1">
                            <div className="flex justify-between">
                                <span>File Name</span>
                                <span className="font-medium">{fileInfo.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Size</span>
                                <span>{fileInfo.size}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Created</span>
                                <span>{fileInfo.created}</span>
                            </div>
                        </div>
                    </div>

                    {/* Attached Files */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="text-sm font-semibold mb-2">Attached Files</h2>
                        <ul className="space-y-2">
                            {attachedFiles.map((file, index) => (
                                <li key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                    <div className="flex gap-2 items-center">
                                        {file.type === 'pdf' ? (
                                            <span className="text-red-500">📄</span>
                                        ) : (
                                            <span className="text-[#068190]">🖼️</span>
                                        )}
                                        <span>{file.name}</span>
                                    </div>
                                    <span className="text-gray-500">{file.size}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Custom Fields */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="text-sm font-semibold mb-2">Custom Fields</h2>
                        <div className="space-y-3">
                            {[
                                { label: 'Contract ID', value: customFields.contractId, field: 'contractId' },
                                { label: 'Client Reference', value: customFields.clientRef, field: 'clientRef' },
                            ].map(({ label, value, field }) => (
                                <div key={field}>
                                    <div className="text-xs text-gray-500 mb-1">{label}</div>
                                    <div className="flex items-center bg-gray-50 px-3 py-2 rounded border justify-between">
                                        <span className="font-medium">{value}</span>
                                        <button
                                            onClick={() => copyToClipboard(value, field)}
                                            className="text-gray-400 hover:text-black"
                                        >
                                            <Copy size={16} />
                                        </button>
                                    </div>
                                    {copiedField === field && (
                                        <span className="text-xs text-green-500 ml-1">Copied!</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
