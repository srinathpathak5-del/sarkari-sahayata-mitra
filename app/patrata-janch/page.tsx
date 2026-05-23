'use client'
import { useState } from 'react'
import Link from 'next/link'
import schemesData from '../../data/schemes.json'

const QUESTIONS = [
  { key: 'age',      label: '👤 आपकी आयु क्या है?',        opts: ['18 से कम','18–30','31–45','46–60','60+'] },
  { key: 'gender',   label: '🙋 आप कौन हैं?',               opts: ['पुरुष','महिला','अन्य'] },
  { key: 'type',     label: '💼 आप क्या करते हैं?',         opts: ['किसान','मजदूर/ठेला','छात्र','गृहिणी','सरकारी नौकरी','अन्य'] },
  { key: 'income',   label: '💰 वार्षिक पारिवारिक आय?',     opts: ['₹1 लाख से कम','₹1–2.5 लाख','₹2.5–5 लाख','₹5 लाख से अधिक'] },
  { key: 'bpl',      label: '🪪 BPL / राशन कार्ड है?',      opts: ['हाँ, है','नहीं है','पता नहीं'] },
  { key: 'caste',    label: '📜 आप किस वर्ग से हैं?',       opts: ['सामान्य','OBC','SC','ST','अन्य'] },
  { key: 'land',     label: '🌾 खेती की जमीन है?',          opts: ['हाँ, 2 हेक्टेयर तक','हाँ, 2 से अधिक','नहीं'] },
  { key: 'disabled', label: '♿ क्या आप दिव्यांग हैं?',     opts: ['हाँ','नहीं'] },
]

function computeEligibility(a: Record<string, string>) {
  const schemes = schemesData.schemes
  const lowIncome = a.income === '₹1 लाख से कम' || a.income === '₹1–2.5 लाख'
  const hasBPL = a.bpl === 'हाँ, है'
  const results: Array<typeof schemes[0] & { reason: string }> = []

  const add = (id: string, reason: string) => {
    const s = schemes.find(x => x.id === id)
    if (s && !results.find(r => r.id === id)) results.push({ ...s, reason })
  }

  if (a.type === 'किसान' && a.land !== 'नहीं') add('pm-kisan', 'आप किसान हैं और जमीन है')
  if (hasBPL || lowIncome) add('ayushman-bharat', 'BPL / कम आय परिवार')
  if (a.type === 'मजदूर/ठेला') add('e-shram', 'असंगठित मजदूर हैं')

  return results
}

export default function EligibilityPage() {
  const [step, setStep]     = useState(0)
  const [ans, setAns]       = useState<Record<string, string>>({})
  const [result, setResult] = useState<ReturnType<typeof computeEligibility> | null>(null)

  function handleOption(val: string) {
    const newAns = { ...ans, [QUESTIONS[step].key]: val }
    setAns(newAns)
    if (step < QUESTIONS.length - 1) setStep(step + 1)
    else setResult(computeEligibility(newAns))
  }

  function reset() { setStep(0); setAns({}); setResult(null) }

  const pct = Math.round((step / QUESTIONS.length) * 100)

  if (result) return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-5 mb-6 text-center">
        <div className="text-4xl mb-2">🎉</div>
        <h1 className="text-xl font-bold text-green-800">आप इन योजनाओं के पात्र हो सकते हैं</h1>
        <p className="text-xs text-gray-500 mt-1">पुष्टि के लिए CSC केंद्र से संपर्क करें।</p>
      </div>
      {result.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <div className="text-5xl mb-3">😔</div>
          <p>कोई मिलान नहीं मिला। नजदीकी CSC केंद्र से संपर्क करें।</p>
        </div>
      ) : (
        <div className="space-y-4 mb-6">
          {result.map(s => (
            <Link key={s.id} href={`/yojana/${s.slug}`}
              className="flex items-center gap-4 bg-white border-2 border-blue-200 rounded-2xl p-4 hover:border-blue-500 hover:shadow-md transition group">
              <span className="text-4xl">{s.icon}</span>
              <div className="flex-1">
                <div className="font-bold text-gray-800">{s.name}</div>
                <div className="text-xs text-gray-500">✅ {s.reason}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-green-700 font-bold">{s.benefit}</div>
                <div className="text-blue-600 text-xs group-hover:underline">जानकारी →</div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <button onClick={reset}
        className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3.5 rounded-2xl font-bold transition">
        🔄 फिर से जांचें
      </button>
    </div>
  )

  const q = QUESTIONS[step]
  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-1">✅ पात्रता जांच</h1>
      <p className="text-sm text-gray-500 mb-6">कुछ सवालों के जवाब दें — जानें कौन सी योजनाएं आपके लिए हैं</p>
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-500 mb-1.5">
          <span>प्रश्न {step + 1} / {QUESTIONS.length}</span>
          <span>{pct}% पूरा</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-700 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }} />
        </div>
      </div>
      <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 shadow-sm mb-4">
        <h2 className="text-lg font-bold text-gray-800 mb-5">{q.label}</h2>
        <div className="grid grid-cols-2 gap-3">
          {q.opts.map(opt => (
            <button key={opt} onClick={() => handleOption(opt)}
              className="bg-blue-50 hover:bg-blue-700 hover:text-white border-2 border-blue-200 hover:border-blue-700 text-gray-800 py-3 px-3 rounded-xl text-sm font-medium transition-all active:scale-95">
              {opt}
            </button>
          ))}
        </div>
      </div>
      {step > 0 && (
        <button onClick={() => {
          const p = { ...ans }
          delete p[QUESTIONS[step - 1].key]
          setAns(p)
          setStep(step - 1)
        }} className="text-sm text-blue-600 hover:underline">
          ← पिछला सवाल
        </button>
      )}
    </div>
  )
}