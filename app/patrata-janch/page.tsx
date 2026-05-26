// File location: app/patrata-janch/page.tsx
// CHANGE: Added UserInfoModal popup BEFORE the eligibility quiz starts

'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import UserInfoModal, { hasUserInfo } from '../../components/UserInfoModal'

interface Scheme {
  id: string
  slug: string
  name: string
  icon: string
  benefit: string
  shortDesc: string
  tag: string
  category: string[]
  eligibility: string[]
  notEligible: string[]
  active: boolean
}

interface SchemeWithReason extends Scheme {
  reason: string
}

const SCHEMES: Scheme[] = [
  {
    id: 'pm-kisan',
    slug: 'pm-kisan-yojana',
    name: 'PM Kisan Samman Nidhi',
    icon: '🌾',
    benefit: '₹6,000/वर्ष',
    shortDesc: 'छोटे किसानों को सालाना ₹6000 की सहायता।',
    tag: 'किसान',
    category: ['farmer'],
    eligibility: ['भारतीय नागरिक किसान', 'जमीन 2 हेक्टेयर तक'],
    notEligible: ['आयकर दाता'],
    active: true,
  },
  {
    id: 'ayushman-bharat',
    slug: 'ayushman-card-kaise-banaye',
    name: 'Ayushman Bharat Card',
    icon: '🏥',
    benefit: '₹5 लाख/वर्ष',
    shortDesc: 'गरीब परिवारों को ₹5 लाख तक मुफ्त इलाज।',
    tag: 'स्वास्थ्य',
    category: ['health', 'bpl'],
    eligibility: ['BPL परिवार', 'SECC-2011 सूची में नाम'],
    notEligible: ['CGHS लाभार्थी'],
    active: true,
  },
  {
    id: 'e-shram',
    slug: 'e-shram-card-benefits',
    name: 'E-Shram Card',
    icon: '👷',
    benefit: '₹2 लाख बीमा',
    shortDesc: 'असंगठित मजदूरों को ₹2 लाख बीमा।',
    tag: 'मजदूर',
    category: ['labour', 'bpl'],
    eligibility: ['16-59 वर्ष आयु', 'असंगठित मजदूर'],
    notEligible: ['EPF/ESIC सदस्य'],
    active: true,
  },
]

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

function computeEligibility(a: Record<string, string>): SchemeWithReason[] {
  const lowIncome = a.income === '₹1 लाख से कम' || a.income === '₹1–2.5 लाख'
  const hasBPL = a.bpl === 'हाँ, है'
  const results: SchemeWithReason[] = []

  const add = (id: string, reason: string) => {
    const s = SCHEMES.find((x: Scheme) => x.id === id)
    if (s && !results.find((r: SchemeWithReason) => r.id === id)) {
      results.push({ ...s, reason })
    }
  }

  if (a.type === 'किसान' && a.land !== 'नहीं') add('pm-kisan', 'आप किसान हैं और जमीन है')
  if (hasBPL || lowIncome) add('ayushman-bharat', 'BPL / कम आय परिवार')
  if (a.type === 'मजदूर/ठेला') add('e-shram', 'असंगठित मजदूर हैं')

  return results
}

export default function EligibilityPage() {
  const [step, setStep]     = useState(0)
  const [ans, setAns]       = useState<Record<string, string>>({})
  const [result, setResult] = useState<SchemeWithReason[] | null>(null)
  
  // Modal state — show on page load if user hasn't submitted info yet
  const [modalOpen, setModalOpen] = useState(false)
  const [quizUnlocked, setQuizUnlocked] = useState(false)

  useEffect(() => {
    // On page load, check if user already submitted info this session
    if (hasUserInfo()) {
      setQuizUnlocked(true)
    } else {
      setModalOpen(true)
    }
  }, [])

  function handleModalSuccess() {
    setModalOpen(false)
    setQuizUnlocked(true)
  }

  function handleOption(val: string) {
    const newAns = { ...ans, [QUESTIONS[step].key]: val }
    setAns(newAns)
    if (step < QUESTIONS.length - 1) setStep(step + 1)
    else setResult(computeEligibility(newAns))
  }

  function reset() { setStep(0); setAns({}); setResult(null) }

  const pct = Math.round((step / QUESTIONS.length) * 100)

  // If quiz is locked (user hasn't submitted info), show waiting screen + modal
  if (!quizUnlocked) {
    return (
      <>
        <div className="max-w-xl mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4">🎯</div>
          <h1 className="text-2xl font-bold text-blue-900 mb-2">पात्रता जांच</h1>
          <p className="text-gray-600 mb-6">कुछ सवालों के जवाब दें — जानें कौन सी योजनाएं आपके लिए हैं</p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl font-bold transition"
          >
            शुरू करें →
          </button>
        </div>
        <UserInfoModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSuccess={handleModalSuccess}
          productName="पात्रता जाँच"
        />
      </>
    )
  }

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
          {result.map((s: SchemeWithReason) => (
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
          {q.opts.map((opt: string) => (
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