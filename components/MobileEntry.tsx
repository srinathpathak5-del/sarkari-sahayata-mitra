'use client'
import { useState, useEffect } from 'react'

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxFMhSM4d2gD83-7CjksaV8NaFCuUK_F_9wOZj2HSrxC4BTxuLEnEDjgEuSOz0jTGHWEQ/exec'

export default function MobileEntry({ children }: { children: React.ReactNode }) {
  const [mobile, setMobile]   = useState('')
  const [agreed, setAgreed]   = useState(false)
  const [error, setError]     = useState('')
  const [entered, setEntered] = useState(false)
  const [saving, setSaving]   = useState(false)
  const [ready, setReady]     = useState(false)

  useEffect(() => {
    // Check localStorage and set ready in one effect
    try {
      const saved = localStorage.getItem('ssm_mobile')
      if (saved) setEntered(true)
    } catch {}
    setReady(true)
  }, [])

  async function saveToSheet(mobileNum: string) {
    try {
      const url = `${SHEET_URL}?mobile=${mobileNum}&date=${encodeURIComponent(new Date().toLocaleDateString('en-IN'))}`
      await fetch(url, { method: 'GET', mode: 'no-cors' })
    } catch {}
  }

  async function handleSubmit() {
    if (mobile.trim().length !== 10 || isNaN(Number(mobile))) {
      setError('कृपया सही 10 अंकों का मोबाइल नंबर डालें।')
      return
    }
    if (!agreed) {
      setError('आगे बढ़ने के लिए नियम और शर्तें स्वीकार करें।')
      return
    }

    setSaving(true)
    saveToSheet(mobile)

    try {
      localStorage.setItem('ssm_mobile', mobile)
      localStorage.setItem('ssm_joined', new Date().toISOString())
    } catch {}

    setTimeout(() => {
      setSaving(false)
      setEntered(true)
    }, 800)
  }

  // Show nothing until ready (avoids flash)
  if (!ready) return (
    <div className="min-h-screen bg-blue-800 flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-3">🇮🇳</div>
        <div className="text-white text-lg font-bold">सरकारी सहायता मित्र</div>
      </div>
    </div>
  )

  // Already entered — show full website
  if (entered) return <>{children}</>

  // Mobile entry screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">

        <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 h-2" />

        <div className="bg-blue-800 text-white text-center py-6 px-4">
          <div className="text-5xl mb-2">🇮🇳</div>
          <h1 className="text-xl font-bold">सरकारी सहायता मित्र</h1>
          <p className="text-blue-200 text-sm mt-1">Sarkari Sahayata Mitra</p>
        </div>

        <div className="px-6 py-7">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-1">
            स्वागत है! 🙏
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            सरकारी योजनाओं की जानकारी पाने के लिए<br />
            अपना मोबाइल नंबर डालें
          </p>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              📱 मोबाइल नंबर
            </label>
            <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-500 transition">
              <span className="bg-gray-50 px-3 py-3 text-gray-500 text-sm border-r border-gray-200 font-medium">
                🇮🇳 +91
              </span>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={mobile}
                onChange={e => {
                  setMobile(e.target.value.replace(/\D/g, ''))
                  setError('')
                }}
                placeholder="10 अंकों का नंबर"
                className="flex-1 px-3 py-3 text-gray-800 text-base focus:outline-none bg-white"
              />
              {mobile.length === 10 && (
                <span className="px-3 text-green-500 text-xl">✓</span>
              )}
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-3 py-2 mb-4">
              ⚠️ {error}
            </div>
          )}

          <label className="flex items-start gap-3 mb-5 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={e => { setAgreed(e.target.checked); setError('') }}
              className="w-5 h-5 accent-blue-700 mt-0.5 shrink-0"
            />
            <span className="text-xs text-gray-600 leading-relaxed">
              मैं{' '}
              <a href="/privacy-policy" target="_blank"
                className="text-blue-600 underline font-medium">
                गोपनीयता नीति
              </a>{' '}
              और{' '}
              <a href="/terms" target="_blank"
                className="text-blue-600 underline font-medium">
                नियम एवं शर्तें
              </a>{' '}
              से सहमत हूँ। मेरा मोबाइल नंबर मार्केटिंग
              उद्देश्यों के लिए उपयोग किया जा सकता है।
            </span>
          </label>

          <button
            onClick={handleSubmit}
            disabled={saving}
            className="w-full bg-blue-700 hover:bg-blue-800 active:scale-95 text-white font-bold py-4 rounded-2xl transition-all shadow-lg text-base disabled:opacity-70"
          >
            {saving ? '⏳ जमा हो रहा है...' : 'आगे बढ़ें →'}
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            🔒 आपका नंबर सुरक्षित है। कोई OTP नहीं।
          </p>
        </div>

        <div className="bg-gray-50 border-t border-gray-100 px-6 py-3 text-center">
          <p className="text-xs text-gray-500">
            PM Kisan · Ayushman · E-Shram · Scholarship · और भी योजनाएं
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 h-2" />
      </div>
    </div>
  )
}