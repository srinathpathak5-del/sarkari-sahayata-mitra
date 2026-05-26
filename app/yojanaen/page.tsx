// File location: app/yojanaen/page.tsx
// CHANGE: Now filters to show ONLY items with type === "yojana"

import Link from 'next/link'
import { getAllSchemes } from '../../lib/schemes'

export default function YojanaenPage() {
  // Filter to show only schemes (yojana type), not loans or insurance
  const schemes = getAllSchemes().filter(s => s.type === 'yojana')
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-2">📋 सभी सरकारी योजनाएं</h1>
      <p className="text-sm text-gray-500 mb-6">सभी योजनाओं की जानकारी एक जगह — कुल {schemes.length} योजनाएं</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {schemes.map(s => (
          <Link
            key={s.id}
            href={`/yojana/${s.slug}`}
            className="bg-white border-2 border-gray-200 hover:border-blue-400 rounded-2xl p-4 hover:shadow-lg transition group"
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-3xl">{s.icon}</span>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">
                {s.tag}
              </span>
            </div>
            <h3 className="font-bold text-gray-800 text-sm mb-1">{s.name}</h3>
            <p className="text-xs text-gray-500 mb-3 line-clamp-2">{s.shortDesc}</p>
            <div className="flex items-center justify-between">
              <span className="text-green-700 font-bold text-sm">{s.benefit}</span>
              <span className="text-blue-600 text-xs group-hover:underline">जानकारी →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}