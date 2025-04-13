'use client'

import { useState, useRef } from 'react'
import { Trash, Plus, Upload } from 'lucide-react'
import clsx from 'clsx'

export default function AddDocumentPage() {
  const [tags, setTags] = useState<string[]>([])
  const [inputTag, setInputTag] = useState('')
  const [customFields, setCustomFields] = useState([{ name: '', value: '' }])
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const addTag = () => {
    const newTag = inputTag.trim()
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag])
      setInputTag('')
    }
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag))
  }

  const addCustomField = () => {
    setCustomFields([...customFields, { name: '', value: '' }])
  }

  const removeCustomField = (index: number) => {
    setCustomFields(customFields.filter((_, i) => i !== index))
  }

  const handleFieldChange = (index: number, key: 'name' | 'value', value: string) => {
    const updated = [...customFields]
    updated[index][key] = value
    setCustomFields(updated)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true)
    else if (e.type === 'dragleave') setDragActive(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      inputRef.current!.files = e.dataTransfer.files
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Document</h2>

        <form className="space-y-6 text-gray-700" onSubmit={(e) => e.preventDefault()}>
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              placeholder="e.g., Driving License"
              className="w-full rounded-md border px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* File Upload (drag and drop) */}
          <div>
            <label className="block text-sm font-medium mb-1">Upload File</label>
            <div
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              className={clsx(
                "w-full border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center cursor-pointer transition-all",
                dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300 bg-white"
              )}
              onClick={() => inputRef.current?.click()}
            >
              <Upload className="w-6 h-6 text-blue-500 mb-2" />
              <p className="text-gray-600 text-sm">Drag & drop your file here or click to browse</p>
              <input
                ref={inputRef}
                type="file"
                accept=".pdf,image/*"
                hidden
              />
            </div>
          </div>

          {/* Expiration Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Expires On</label>
            <input
              type="date"
              className="w-full rounded-md border px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Custom Fields */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium">Custom Fields</label>
              <button
                type="button"
                onClick={addCustomField}
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md p-2 transition-all"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              {customFields.map((field, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                  <input
                    type="text"
                    placeholder="Field name"
                    value={field.name}
                    onChange={(e) => handleFieldChange(idx, 'name', e.target.value)}
                    className="flex-1 rounded-md border px-3 py-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Field value"
                    value={field.value}
                    onChange={(e) => handleFieldChange(idx, 'value', e.target.value)}
                    className="flex-1 rounded-md border px-3 py-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeCustomField(idx)}
                    className="border border-red-500 text-red-500 hover:bg-red-50 rounded-md p-2 transition-all"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium mb-1">Tags</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputTag}
                onChange={(e) => setInputTag(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                placeholder="Add tag and press Enter"
                className="flex-grow rounded-md border px-4 py-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={addTag}
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md p-2"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full flex items-center gap-1"
                >
                  {tag}
                  <button
                    onClick={() => removeTag(tag)}
                    type="button"
                    className="text-blue-500 hover:text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Note */}
          <div>
            <label className="block text-sm font-medium mb-1">Note</label>
            <textarea
              rows={3}
              placeholder="Short note about the document..."
              className="w-full rounded-md border px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 font-medium"
            >
              Save Document
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
