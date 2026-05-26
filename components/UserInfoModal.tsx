// File location: components/UserInfoModal.tsx
// Reusable modal that asks Name + Mobile + Pincode before user proceeds

'use client'
import { useState } from 'react'

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxFMhSM4d2gD83-7CjksaV8NaFCuUK_F_9wOZj2HSrxC4BTxuLEnEDjgEuSOz0jTGHWEQ/exec'

interface UserInfoModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  productName: string  // The scheme/loan/insurance name OR "पात्रता जाँच"
}

export default function UserInfoModal({ isOpen, onClose, onSuccess, productName }: UserInfoModalProps) {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [pincode, setPincode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate
    if (name.trim().length < 2) {
      setError('कृपया अपना नाम दर्ज करें')
      return
    }
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError('कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें')
      return
    }
    if (!/^\d{6}$/.test(pincode)) {
      setError('कृपया सही 6 अंकों का पिनकोड दर्ज करें')
      return
    }

    setLoading(true)

    try {
      // Build form data
      const formData = new FormData()
      formData.append('name', name.trim())
      formData.append('mobile', mobile)
      formData.append('pincode', pincode)
      formData.append('product', productName)
      formData.append('date', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }))

      // Send to Google Sheets
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',  // Required for Google Apps Script
      })

      // Save in session so we don't ask again
      sessionStorage.setItem('userInfo', JSON.stringify({
        name: name.trim(),
        mobile,
        pincode,
      }))

      // Success - proceed
      onSuccess()
    } catch (err) {
      setError('कुछ गलत हुआ। कृपया फिर से कोशिश करें।')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white/80 hover:text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition"
            aria-label="Close"
          >
            ✕
          </button>
          <div className="text-3xl mb-2">🙏</div>
          <h2 className="text-xl font-bold mb-1">जानकारी पाने के लिए</h2>
          <p className="text-sm text-white/90">कृपया अपनी जानकारी भरें — हम WhatsApp पर भी मदद करेंगे</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              आपका नाम *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="जैसे: रामलाल कुमार"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none text-base"
              disabled={loading}
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              मोबाइल नंबर *
            </label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
              placeholder="10 अंकों का मोबाइल"
              inputMode="numeric"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none text-base"
              disabled={loading}
            />
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              पिनकोड *
            </label>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="6 अंकों का पिनकोड"
              inputMode="numeric"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none text-base"
              disabled={loading}
            />
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-2 rounded-xl text-sm">
              ⚠️ {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300 text-white font-bold py-3 rounded-xl text-base transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="animate-spin">⏳</span> भेजा जा रहा है...
              </>
            ) : (
              <>आगे बढ़ें →</>
            )}
          </button>

          {/* Privacy note */}
          <p className="text-xs text-gray-500 text-center">
            🔒 आपकी जानकारी सुरक्षित है। हम केवल WhatsApp पर सहायता के लिए संपर्क करेंगे।
          </p>
        </form>
      </div>
    </div>
  )
}

// Helper to check if user already submitted in this session
export function hasUserInfo(): boolean {
  if (typeof window === 'undefined') return false
  return !!sessionStorage.getItem('userInfo')
}