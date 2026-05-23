'use client'
import { useState } from 'react'

const SCHEMES = [
  {
    id: 'pm-kisan',
    name: 'PM Kisan Samman Nidhi',
    icon: '🌾',
    documents: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'खसरा / खतौनी', mandatory: true },
      { name: 'बैंक पासबुक', mandatory: true },
      { name: 'मोबाइल नंबर (आधार से जुड़ा)', mandatory: true },
      { name: 'पासपोर्ट साइज फोटो', mandatory: false },
    ],
  },
  {
    id: 'ayushman-bharat',
    name: 'Ayushman Bharat Card',
    icon: '🏥',
    documents: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'राशन कार्ड', mandatory: true },
      { name: 'मोबाइल नंबर', mandatory: true },
    ],
  },
  {
    id: 'e-shram',
    name: 'E-Shram Card',
    icon: '👷',
    documents: [
      { name: 'आधार कार्ड', mandatory: true },
      { name: 'आधार से जुड़ा मोबाइल नंबर', mandatory: true },
      { name: 'बैंक पासबुक', mandatory: true },
    ],
  },
]

export default function DastavejPage() {
  const [sel, setSel]       = useState(SCHEMES[0])
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const toggle = (name: string) =>
    setChecked(c => ({ ...c, [name]: !c[name] }))

  const done = sel.documents.filter(d => checked[d.name]).length
  const total = sel.documents.length
  const pct = Math.round((done / total) * 100)

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-2">📄 दस्तावेज चेकलिस्ट</h1>
      <p className="text-sm text-gray-500 mb-6">योजना चुनें और देखें कौन से दस्तावेज चाहिए</p>

      {/* Scheme selector */}
      <div className="flex gap-2 flex-wrap mb-6">
        {SCHEMES.map(s => (
          <button
            key={s.id}
            onClick={() => { setSel(s); setChecked({}) }}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition border-2 ${
              sel.id === s.id
                ? 'bg-blue-700 text-white border-blue-700'
                : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
            }`}
          >
            {s.icon} {s.name.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-5">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-blue-800">दस्तावेज तैयार</span>
          <span className="font-bold text-blue-700">{done}/{total}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Checklist */}
      <div className="space-y-3 mb-6">
        {sel.documents.map((doc, i) => (
          <label
            key={i}
            className={`flex items-center gap-4 rounded-2xl border-2 px-4 py-3 cursor-pointer transition ${
              checked[doc.name]
                ? 'bg-green-50 border-green-400'
                : 'bg-white border-gray-200 hover:border-blue-300'
            }`}
          >
            <input
              type="checkbox"
              checked={!!checked[doc.name]}
              onChange={() => toggle(doc.name)}
              className="w-5 h-5 accent-green-600 shrink-0"
            />
            <div className="flex-1">
              <span className={`text-sm font-medium ${checked[doc.name] ? 'text-green-700 line-through' : 'text-gray-800'}`}>
                {doc.name}
              </span>
              {doc.mandatory && (
                <span className="ml-2 text-xs text-red-600 font-medium">*जरूरी</span>
              )}
            </div>
            {checked[doc.name] && <span className="text-green-500 text-xl">✓</span>}
          </label>
        ))}
      </div>

      {done === total && (
        <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-4 text-center mb-4">
          <div className="text-3xl mb-1">🎉</div>
          <p className="font-bold text-green-800">बधाई! सभी दस्तावेज तैयार हैं</p>
        </div>
      )}

      <p className="text-xs text-gray-500 text-center">
        💡 आवेदन से पहले सभी दस्तावेजों की 2 फोटोकॉपी और मूल प्रति साथ रखें।
      </p>
    </div>
  )
}