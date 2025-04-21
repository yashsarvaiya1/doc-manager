'use client'

import { useState, useRef, useEffect } from 'react'
import { Trash, Plus, Upload } from 'lucide-react'
import clsx from 'clsx'
import { GrView } from 'react-icons/gr'
import { useRouter } from 'next/navigation';

export default function AddDocumentPage() {
  const [tags, setTags] = useState<string[]>([])
  const [inputTag, setInputTag] = useState('')
  const [customFields, setCustomFields] = useState([{ name: '', value: '' }])
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter();

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

  const handleFiles = (files: FileList) => {
    const newFiles = Array.from(files)
    setUploadedFiles(prev => [...prev, ...newFiles])
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
    if (e.dataTransfer.files && e.dataTransfer.files.length) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files)
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 overflow-hidden">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Add New Document</h1>
        <p className="text-sm text-gray-500 mb-6">Upload and configure your document details below</p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Upload Box */}
          <div>
            <label className="block font-medium text-sm text-gray-700 mb-1">Document Files</label>
            <div
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              onClick={() => inputRef.current?.click()}
              className={clsx(
                "border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition",
                dragActive ? "border-[#068190] bg-[#068190]" : "border-gray-300 bg-white"
              )}
            >
              <Upload className="mx-auto mb-2 text-[#068190]" />
              <p className="text-gray-600 text-sm">
                <span className="text-[#068190] font-medium">Upload files</span> or drag and drop
              </p>
              <p className="text-xs text-gray-400">PDF, JPG, PNG up to 10MB each</p>
              <input
                ref={inputRef}
                type="file"
                accept=".pdf,image/jpeg,image/png"
                hidden
                multiple
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h2 className="text-sm font-semibold text-gray-700 mb-3">Uploaded Files</h2>
              <ul className="space-y-2">
                {uploadedFiles.map((file, idx) => {
                  const ext = file.name.split('.').pop()?.toLowerCase()
                  const isPDF = ext === 'pdf'
                  const isImage = ext === 'jpg' || ext === 'jpeg' || ext === 'png'
                  const icon = isPDF ? '📄' : isImage ? '🖼️' : '📁'

                  return (
                    <li
                      key={idx}
                      className="flex items-center justify-between bg-white rounded-md px-4 py-2 border text-sm text-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{icon}</span>
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {isPDF || isImage ? (
                          <button
                            type="button"
                            className="hover:text-[#068190] transition"
                            onClick={() => window.open(URL.createObjectURL(file), '_blank')}
                          >
                            <GrView className='w-4 h-4'/>
                          </button>
                        ) : null}
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700 transition"
                          onClick={() => removeFile(idx)}
                        >
                          <Trash className="w-4 h-4" />
                        </button>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* Custom Fields */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="font-medium text-sm text-gray-700">Custom Fields</label>
              <button
                type="button"
                onClick={addCustomField}
                className="text-sm px-3 py-1 bg-[#068190] border border-[#068190] text-white rounded-md hover:bg-[#068190]"
              >
                <Plus className="w-4 h-4 inline-block mr-1" />
                Add Field
              </button>
            </div>
            <div className="space-y-2">
              {customFields.map((field, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Field Name"
                    value={field.name}
                    onChange={(e) => handleFieldChange(idx, 'name', e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-md text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Field Value"
                    value={field.value}
                    onChange={(e) => handleFieldChange(idx, 'value', e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-md text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => removeCustomField(idx)}
                    className="text-red-500 hover:bg-red-100 rounded-md p-2 border border-red-400"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block font-medium text-sm text-gray-700 mb-1">Document Expiry Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-md text-sm text-gray-700"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block font-medium text-sm text-gray-700 mb-1">Tags</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputTag}
                onChange={(e) => setInputTag(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                placeholder="Enter tag and press Enter"
                className="flex-grow px-3 py-2 border rounded-md text-sm"
              />
              <button
                type="button"
                onClick={addTag}
                className="text-sm px-3 py-2 border border-[#068190] text-[#068190] rounded-md hover:bg-[#068190] hover:text-white "
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap mt-2 gap-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="flex items-center bg-[#068190] text-[#068190] px-3 py-1 rounded-full text-xs"
                >
                  {tag}
                  <button
                    onClick={() => removeTag(tag)}
                    className="ml-1 text-[#068190] hover:text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Note */}
          <div>
            <label className="block font-medium text-sm text-gray-700 mb-1">Note</label>
            <textarea
              rows={3}
              placeholder="Add a short note..."
              className="w-full px-4 py-2 border rounded-md text-sm text-gray-700"
            />
          </div>

          {/* Footer */}
          <div className="flex justify-end items-center gap-4 pt-4">
            <button
            onClick={()=>router.push("/dashboard")}
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#068190] text-white rounded-md hover:bg-[#068190]"
            >
              Save Document
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
