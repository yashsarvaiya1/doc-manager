import Navbar from "./components/Navbar"

export default function VivekLayout({children}: { children: React.ReactNode}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto py-8 px-4">{children}</main>
    </div>
  )
}