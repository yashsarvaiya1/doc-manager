
'use client'

import DocumentCard from '../components/DocumentCard'
import { Document } from '../lib/types/document'

const dummyDocuments: Document[] = [
  {
    id: 1,
    title: 'Aadhar Card',
    description: 'Personal identity document',
    thumbnailUrl: 'https://placehold.co/300x200?text=Aadhar',
    expiresOn: '2025-12-31',
    tags: ['identity', 'gov']
  },
  {
    id: 2,
    title: 'PAN Card',
    description: 'Tax identity',
    thumbnailUrl: 'https://placehold.co/300x200?text=PAN',
    expiresOn: '2027-05-01',
    tags: ['finance', 'gov']
  }
]

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Documents</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dummyDocuments.map(doc => (
          <DocumentCard key={doc.id} document={doc} />
        ))}
      </div>
    </div>
  )
}
