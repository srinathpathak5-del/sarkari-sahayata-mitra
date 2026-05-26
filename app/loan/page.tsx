// File location: app/loan/page.tsx
// CHANGE: Added UserInfoModal popup before showing loan details

'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import schemesData from '../../data/schemes.json'
import UserInfoModal, { hasUserInfo } from '../../components/UserInfoModal'

export default function LoanPage() {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<{ slug: string; name: string } | null>(null)
  
  const loans = schemesData.schemes.filter((s: any) => s.type === 'loan')

  const handleJankariClick = (item: any) => {
    if (hasUserInfo()) {
      router.push(`/yojana/${item.slug}`)
    } else {
      setSelectedItem({ slug: item.slug, name: item.name })
      setModalOpen(true)
    }
  }

  const handleModalSuccess = () => {
    setModalOpen(false)
    if (selectedItem) {
      router.push(`/yojana/${selectedItem.slug}`)
    }
  }
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-2">🏦 सरकारी लोन योजनाएं</h1>
      <p className="text-sm text-gray-500 mb-6">कम ब्याज दर पर सरकारी लोन — कुल {loans.length} विकल्प</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loans.map((s: any) => (
          <button
            key={s.id}
            onClick={() => handleJankariClick(s)}
            className="bg-white border-2 border-gray-200 hover:border-blue-400 rounded-2xl p-4 hover:shadow-lg transition group text-left"
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
          </button>
        ))}
      </div>

      <UserInfoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={handleModalSuccess}
        productName={selectedItem?.name || ''}
      />
    </div>
  )
}