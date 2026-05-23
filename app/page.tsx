import Link from 'next/link'
import { getAllSchemes } from '../lib/schemes'

export default function HomePage() {
  const schemes = getAllSchemes()
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-12 px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
          सरकारी योजनाओं की पूरी जानकारी
          <span className="text-yellow-300"> आसान भाषा में</span>
        </h1>
        <p className="text-blue-200 mb-8 text-sm">
          PM Kisan · Ayushman · E-Shram · पेंशन · छात्रवृत्ति
        </p>
        <Link
          href="/patrata-janch"
          className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-2xl hover:bg-yellow-300 transition shadow-lg"
        >
          🎯 जानें — आप किन योजनाओं के पात्र हैं?
        </Link>
      </section>

      {/* Schemes Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-blue-900 mb-5">🏛️ लोकप्रिय सरकारी योजनाएं</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {schemes.map(s => (
            <Link
              key={s.id}
              href={`/yojana/${s.slug}`}
              className="bg-white border-2 border-gray-200 hover:border-blue-400 rounded-2xl p-4 hover:shadow-lg transition group"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-3xl">{s.icon}</span>
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">{s.tag}</span>
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
      </section>

      {/* Disclaimer */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 text-xs text-gray-600 text-center">
          ⚠️ <strong>अस्वीकरण:</strong> यह वेबसाइट सरकारी नहीं है। हम केवल शैक्षिक उद्देश्य से जानकारी देते हैं।
        </div>
      </div>
    </div>
  )
}