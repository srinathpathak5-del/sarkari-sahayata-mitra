'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getSchemeBySlug } from '../../../lib/schemes'
import type { Scheme } from '../../../types/scheme'

const TABS = [
  { id: 'overview', label: '📋 जानकारी' },
  { id: 'docs',     label: '📄 दस्तावेज' },
  { id: 'steps',    label: '👣 आवेदन' },
  { id: 'faq',      label: '❓ FAQ' },
]

export default function SchemeDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [scheme, setScheme] = useState<Scheme | null>(null)
  const [tab, setTab] = useState('overview')
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [donesteps, setDoneSteps] = useState<number[]>([])

  useEffect(() => {
    if (slug) {
      const s = getSchemeBySlug(slug)
      setScheme(s)
    }
  }, [slug])

  if (!scheme) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-4">😔</div>
        <h1 className="text-xl font-bold text-gray-800 mb-2">योजना नहीं मिली</h1>
        <Link href="/" className="text-blue-600 hover:underline">← होम पर जाएं</Link>
      </div>
    </div>
  )

  const toggle = (name: string) => setChecked(c => ({ ...c, [name]: !c[name] }))
  const toggleStep = (n: number) => setDoneSteps(d => d.includes(n) ? d.filter(x => x !== n) : [...d, n])
  const docsDone = scheme.documents.filter(d => checked[d.name]).length

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1">
        <Link href="/" className="hover:text-blue-700">होम</Link>
        <span>›</span>
        <Link href="/yojanaen" className="hover:text-blue-700">योजनाएं</Link>
        <span>›</span>
        <span className="text-gray-800 font-medium">{scheme.name}</span>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-5 mb-5">
        <div className="flex items-start gap-4">
          <span className="text-5xl">{scheme.icon}</span>
          <div className="flex-1">
            <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">{scheme.tag}</span>
            <h1 className="text-xl font-bold text-gray-900 mt-1">{scheme.name}</h1>
            <p className="text-sm text-gray-500">{scheme.ministry}</p>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-green-700 font-bold text-lg">{scheme.benefit}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-700 mt-3">{scheme.fullDesc}</p>
        <div className="mt-3 flex gap-2">
          <a href={scheme.officialUrl} target="_blank" rel="noopener noreferrer"
            className="bg-blue-700 text-white text-xs px-4 py-2 rounded-lg hover:bg-blue-800 transition font-medium">
            🌐 Official Website
          </a>
          <a href={`tel:${scheme.helplineNumber}`}
            className="bg-green-600 text-white text-xs px-4 py-2 rounded-lg hover:bg-green-700 transition font-medium">
            📞 {scheme.helplineNumber}
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1.5 mb-5 overflow-x-auto pb-1">
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
              tab === t.id ? 'bg-blue-700 text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {tab === 'overview' && (
        <div className="space-y-5">
          <div>
            <h2 className="font-bold text-blue-900 mb-3">🎁 फायदे</h2>
            {scheme.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 mb-2">
                <span className="text-green-600 shrink-0">✓</span><span>{b}</span>
              </div>
            ))}
          </div>
          <div>
            <h2 className="font-bold text-blue-900 mb-3">✅ पात्रता</h2>
            {scheme.eligibility.map((e, i) => (
              <div key={i} className="flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 mb-2">
                <span className="text-blue-600 shrink-0">•</span><span>{e}</span>
              </div>
            ))}
          </div>
          <div>
            <h2 className="font-bold text-red-800 mb-3">🚫 पात्र नहीं</h2>
            {scheme.notEligible.map((e, i) => (
              <div key={i} className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 mb-2">
                <span className="text-red-500 shrink-0">✗</span><span>{e}</span>
              </div>
            ))}
          </div>
          <div>
            <h2 className="font-bold text-orange-800 mb-3">⚠️ सामान्य गलतियाँ</h2>
            {scheme.commonMistakes.map((m, i) => (
              <div key={i} className="flex items-start gap-2 bg-orange-50 border border-orange-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 mb-2">
                <span className="text-orange-500 shrink-0">!</span><span>{m}</span>
              </div>
            ))}
          </div>
          <a href={scheme.officialUrl} target="_blank" rel="noopener noreferrer"
            className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3.5 rounded-2xl font-bold transition shadow-md">
            🚀 अभी आवेदन करें →
          </a>
        </div>
      )}

      {/* Docs Tab */}
      {tab === 'docs' && (
        <div>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-5">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium text-blue-800">दस्तावेज तैयार</span>
              <span className="font-bold text-blue-700">{docsDone}/{scheme.documents.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full transition-all"
                style={{ width: `${(docsDone / scheme.documents.length) * 100}%` }} />
            </div>
          </div>
          {scheme.documents.map((doc, i) => (
            <label key={i} className={`flex items-center gap-4 rounded-2xl border-2 px-4 py-3 cursor-pointer transition mb-3 ${
              checked[doc.name] ? 'bg-green-50 border-green-400' : 'bg-white border-gray-200 hover:border-blue-300'
            }`}>
              <input type="checkbox" checked={!!checked[doc.name]} onChange={() => toggle(doc.name)}
                className="w-5 h-5 accent-green-600 shrink-0" />
              <span className={`text-sm font-medium flex-1 ${checked[doc.name] ? 'text-green-700 line-through' : 'text-gray-800'}`}>
                {doc.name}
                {doc.mandatory && <span className="ml-2 text-xs text-red-600">*जरूरी</span>}
              </span>
              {checked[doc.name] && <span className="text-green-500 text-xl">✓</span>}
            </label>
          ))}
        </div>
      )}

      {/* Steps Tab */}
      {tab === 'steps' && (
        <div>
          <h2 className="font-bold text-blue-900 mb-4">👣 आवेदन कैसे करें</h2>
          {scheme.applicationSteps.map(s => (
            <div key={s.step} onClick={() => toggleStep(s.step)}
              className={`flex gap-4 items-start rounded-2xl border-2 p-4 cursor-pointer transition mb-3 ${
                donesteps.includes(s.step) ? 'bg-green-50 border-green-400' : 'bg-white border-gray-200 hover:border-blue-300'
              }`}>
              <div className={`rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0 ${
                donesteps.includes(s.step) ? 'bg-green-500 text-white' : 'bg-blue-700 text-white'
              }`}>
                {donesteps.includes(s.step) ? '✓' : s.step}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{s.title}</p>
                <p className="text-xs text-gray-600 mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
          <a href={scheme.officialUrl} target="_blank" rel="noopener noreferrer"
            className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3.5 rounded-2xl font-bold transition shadow-md mt-4">
            🌐 आधिकारिक वेबसाइट पर जाएं →
          </a>
        </div>
      )}

      {/* FAQ Tab */}
      {tab === 'faq' && (
        <div className="space-y-3">
          <h2 className="font-bold text-blue-900 mb-4">❓ अक्सर पूछे जाने वाले सवाल</h2>
          {scheme.faq.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      )}
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(o => !o)}
        className="w-full text-left px-4 py-3.5 flex items-center justify-between font-medium text-sm text-gray-800 hover:bg-gray-50">
        <span>{q}</span>
        <span className={`text-blue-600 ml-3 transition-transform ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {open && <div className="px-4 pb-4 pt-1 text-sm text-gray-700 bg-blue-50">{a}</div>}
    </div>
  )
}