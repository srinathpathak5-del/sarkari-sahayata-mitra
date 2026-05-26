// File location: app/insurance/page.tsx
// CHANGE: Added UserInfoModal popup before showing insurance details

'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import schemesData from '../../data/schemes.json'
import UserInfoModal, { hasUserInfo } from '../../components/UserInfoModal'

export default function InsurancePage() {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<{ slug: string; name: string } | null>(null)
  
  const insurances = schemesData.schemes.filter((s: any) => s.type === 'insurance')

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
      <h1 className="text-2xl font-bold text-blue-900 mb-2">🛡️ सरकारी बीमा योजनाएं</h1>
      <p className="text-sm text-gray-500 mb-6">कम प्रीमियम पर पूरी सुरक्षा — कुल {insurances.length} बीमा विकल्प</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {insurances.map((s: any) => (
          <button
            key={s.id}
            onClick={() => handleJankariClick(s)}
            className="bg-white border-2 border-gray-200 hover:border-green-400 rounded-2xl p-4 hover:shadow-lg transition group text-left"
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