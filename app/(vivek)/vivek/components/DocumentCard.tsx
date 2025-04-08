'use client'

import Link from 'next/link'
import { CalendarClock, FileText, Eye, Edit2, Trash2, Share2 } from 'lucide-react'
import { Document } from '../lib/types/document'

interface Props {
  document: Document
}

export default function DocumentCard({ document }: Props) {
  const isExpiringSoon = () => {
    const today = new Date()
    const expiryDate = new Date(document.expiresOn)
    const timeDiff = expiryDate.getTime() - today.getTime()
    const daysDiff = timeDiff / (1000 * 3600 * 24)
    return daysDiff <= 30
  }

  return (
    <div className="bg-white shadow-md rounded-xl border hover:shadow-lg transition relative group">
      <img
        src={document.thumbnailUrl || 'https://placehold.co/300x200?text=Document'}
        alt={document.title}
        className="w-full h-40 object-cover rounded-t-xl"
      />

      <div className="p-4 flex flex-col gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{document.title}</h3>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FileText className="w-4 h-4" /> {document.description}
          </p>
        </div>

        <div
          className={`flex items-center text-sm gap-1 ${isExpiringSoon() ? 'text-red-600' : 'text-gray-600'}`}
        >
          <CalendarClock className={`w-4 h-4 ${isExpiringSoon() ? 'text-red-600' : 'text-blue-500'}`} />
          Expires on: <span className="font-medium">{document.expiresOn}</span>
        </div>

        {document.tags && document.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {document.tags.map(tag => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover action buttons */}
      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
        <Link href="#" className="bg-white border rounded-md p-1 hover:bg-gray-100 shadow">
          <Eye className="w-4 h-4 text-blue-500" />
        </Link>
        <Link href="#" className="bg-white border rounded-md p-1 hover:bg-gray-100 shadow">
          <Edit2 className="w-4 h-4 text-green-600" />
        </Link>
        <button className="bg-white border rounded-md p-1 hover:bg-gray-100 shadow">
          <Share2 className="w-4 h-4 text-purple-500" />
        </button>
        <button className="bg-white border rounded-md p-1 hover:bg-gray-100 shadow">
          <Trash2 className="w-4 h-4 text-red-500" />
        </button>
      </div>
    </div>
  )
}