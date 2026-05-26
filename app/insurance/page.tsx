// File location: app/insurance/page.tsx
// Shows ONLY 8 insurance items (filtered by type === "insurance")

import Link from 'next/link'
import { getAllSchemes } from '../../lib/schemes'

export default function InsurancePage() {
  const insurances = getAllSchemes().filter(s => s.type === 'insurance')
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-2">🛡️ सरकारी बीमा योजनाएं</h1>
      <p className="text-sm text-gray-500 mb-6">कम प्रीमियम पर पूरी सुरक्षा — कुल {insurances.length} बीमा विकल्प</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {insurances.map(s => (
          <Link
            key={s.id}
            href={`/yojana/${s.slug}`}
            className="bg-white border-2 border-gray-200 hover:border-green-400 rounded-2xl p-4 hover:shadow-lg transition group"
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-3xl">{s.icon}</span>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                {s.tag}
              </span>
            </div>
            <h3 className="font-bold text-gray-800 text-sm mb-1">{s.name}</h3>
            <p className="text-xs text-gray-500 mb-3 line-clamp-2">{s.shortDesc}</p>
            <div className="flex items-center justify-between">
              <span className="text-green-700 font-bold text-sm">{s.benefit}</span>
              <span className="text-green-600 text-xs group-hover:underline">जानकारी →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}