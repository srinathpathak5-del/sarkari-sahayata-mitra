'use client'
import { useEffect, useState } from 'react'

const UPDATES = [
  '🔔 PM Kisan 19वीं किस्त जुलाई 2026 में आएगी',
  '📢 Ayushman Card अब 70+ बुजुर्गों के लिए भी',
  '🌟 E-Shram Card धारकों को ₹1000 मिले',
  '📋 Scholarship 2026 Last Date: 30 जून 2026',
  '🏠 PM Awas Yojana 2.0 शुरू — जल्दी आवेदन करें',
]

export default function Ticker() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % UPDATES.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="bg-red-600 text-white py-2 px-4 flex items-center gap-3 text-sm">
      <span className="bg-white text-red-600 px-2 py-0.5 rounded text-xs font-bold shrink-0">
        LIVE
      </span>
      <span>{UPDATES[idx]}</span>
    </div>
  )
}