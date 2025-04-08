"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Dashboard", path: "/vivek/dashboard" },
  { name: "Add Document", path: "/vivek/document/add" }
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">📁 Document Manager</h1>
        <div className="space-x-6">
          {navLinks.map(link => {
            const isActive = pathname === link.path
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600 underline"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
