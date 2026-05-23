'use client'
import { useState } from 'react'

const INSURANCE_SCHEMES = [
  {
    id: 'pmjjby',
    name: 'PM Jeevan Jyoti Bima (PMJJBY)',
    icon: '🛡️',
    tag: 'जीवन बीमा',
    tagColor: 'bg-blue-600',
    premium: '₹436/वर्ष',
    cover: '₹2 लाख',
    age: '18-50 वर्ष',
    type: 'जीवन बीमा',
    who: 'सभी बैंक खाताधारक',
    desc: 'मृत्यु होने पर परिवार को ₹2 लाख मिलते हैं। सिर्फ ₹436 सालाना प्रीमियम।',
    claim: 'मृत्यु पर परिवार को ₹2 लाख',
    steps: ['बैंक जाएं या नेट बैंकिंग खोलें', 'PMJJBY के लिए आवेदन करें', 'नॉमिनी का नाम दें', '₹436 जून में ऑटो डेबिट होगा'],
    docs: ['आधार कार्ड', 'बैंक पासबुक', 'मोबाइल नंबर', 'नॉमिनी की जानकारी'],
    url: 'https://jansuraksha.gov.in',
    helpline: '1800-180-1111',
  },
  {
    id: 'pmsby',
    name: 'PM Suraksha Bima (PMSBY)',
    icon: '⚕️',
    tag: 'दुर्घटना बीमा',
    tagColor: 'bg-red-600',
    premium: '₹20/वर्ष',
    cover: '₹2 लाख',
    age: '18-70 वर्ष',
    type: 'दुर्घटना बीमा',
    who: 'सभी बैंक खाताधारक',
    desc: 'सिर्फ ₹20/वर्ष में दुर्घटना में मृत्यु पर ₹2 लाख। आंशिक विकलांगता पर ₹1 लाख।',
    claim: 'दुर्घटना मृत्यु/विकलांगता पर ₹1-2 लाख',
    steps: ['बैंक जाएं', 'PMSBY के लिए आवेदन करें', 'सहमति फॉर्म भरें', '₹20 ऑटो डेबिट होगा'],
    docs: ['आधार कार्ड', 'बैंक पासबुक', 'मोबाइल नंबर'],
    url: 'https://jansuraksha.gov.in',
    helpline: '1800-180-1111',
  },
  {
    id: 'combo',
    name: 'PMJJBY + PMSBY कॉम्बो',
    icon: '💎',
    tag: 'कॉम्बो बीमा',
    tagColor: 'bg-indigo-600',
    premium: '₹456/वर्ष',
    cover: '₹4 लाख',
    age: '18-50 वर्ष',
    type: 'दुर्घटना बीमा',
    who: 'सभी बैंक खाताधारक',
    desc: 'दोनों बीमा साथ लें। सिर्फ ₹456/वर्ष में ₹4 लाख का कवर। सबसे किफायती।',
    claim: 'मृत्यु पर ₹4 लाख, दुर्घटना पर ₹2 लाख',
    steps: ['बैंक जाएं', 'दोनों योजनाओं के लिए एक साथ आवेदन करें', 'दोनों फॉर्म भरें', '₹456 ऑटो डेबिट होगा'],
    docs: ['आधार कार्ड', 'बैंक पासबुक', 'मोबाइल नंबर', 'नॉमिनी की जानकारी'],
    url: 'https://jansuraksha.gov.in',
    helpline: '1800-180-1111',
  },
  {
    id: 'pmfby',
    name: 'PM Fasal Bima Yojana (PMFBY)',
    icon: '🌱',
    tag: 'फसल बीमा',
    tagColor: 'bg-green-600',
    premium: '2% (खरीफ), 1.5% (रबी)',
    cover: 'फसल नुकसान पर पूरा मुआवजा',
    age: 'सभी किसान',
    type: 'फसल बीमा',
    who: 'सभी किसान — ऋणी और गैर-ऋणी',
    desc: 'बाढ़, सूखा, ओलावृष्टि से फसल खराब होने पर पूरा मुआवजा। बहुत कम प्रीमियम।',
    claim: 'फसल नुकसान पर बीमित राशि',
    steps: ['बैंक या CSC केंद्र जाएं', 'फसल बीमा फॉर्म भरें', 'फसल और जमीन की जानकारी दें', 'प्रीमियम जमा करें'],
    docs: ['आधार कार्ड', 'खसरा/खतौनी', 'बैंक पासबुक', 'बुवाई प्रमाण'],
    url: 'https://pmfby.gov.in',
    helpline: '1800-200-7710',
  },
  {
    id: 'ayushman',
    name: 'Ayushman Bharat (PMJAY)',
    icon: '🏥',
    tag: 'स्वास्थ्य बीमा',
    tagColor: 'bg-teal-600',
    premium: 'मुफ्त',
    cover: '₹5 लाख/वर्ष',
    age: 'सभी परिवार सदस्य',
    type: 'स्वास्थ्य बीमा',
    who: 'BPL और SECC-2011 में शामिल परिवार',
    desc: '₹5 लाख तक का मुफ्त इलाज। 1500+ बीमारियाँ कवर। सरकारी और निजी अस्पताल में।',
    claim: 'अस्पताल में ₹5 लाख तक मुफ्त इलाज',
    steps: ['pmjay.gov.in पर पात्रता जांचें', 'नजदीकी CSC केंद्र जाएं', 'आधार और राशन कार्ड दें', 'Ayushman Card लें'],
    docs: ['आधार कार्ड', 'राशन कार्ड', 'मोबाइल नंबर'],
    url: 'https://pmjay.gov.in',
    helpline: '14555',
  },
  {
    id: 'eshram-bima',
    name: 'E-Shram Card बीमा',
    icon: '👷',
    tag: 'मजदूर बीमा',
    tagColor: 'bg-orange-600',
    premium: 'मुफ्त',
    cover: '₹2 लाख',
    age: '16-59 वर्ष',
    type: 'दुर्घटना बीमा',
    who: 'असंगठित मजदूर — दिहाड़ी, ठेला, घरेलू कामगार',
    desc: 'E-Shram Card बनाते ही ₹2 लाख का मुफ्त दुर्घटना बीमा। कोई प्रीमियम नहीं।',
    claim: 'दुर्घटना मृत्यु/विकलांगता पर ₹1-2 लाख',
    steps: ['eshram.gov.in पर जाएं', 'Register on e-Shram क्लिक करें', 'आधार OTP से वेरिफाई करें', 'Card डाउनलोड करें — बीमा शुरू'],
    docs: ['आधार कार्ड', 'मोबाइल नंबर (आधार से जुड़ा)', 'बैंक पासबुक'],
    url: 'https://eshram.gov.in',
    helpline: '14434',
  },
  {
    id: 'pmvvy',
    name: 'PM Vaya Vandana Yojana (PMVVY)',
    icon: '🧓',
    tag: 'वरिष्ठ पेंशन',
    tagColor: 'bg-purple-600',
    premium: '₹1.5 लाख - ₹15 लाख निवेश',
    cover: '₹1000 - ₹9250/माह पेंशन',
    age: '60+ वर्ष',
    type: 'स्वास्थ्य बीमा',
    who: '60 वर्ष से अधिक बुजुर्ग नागरिक',
    desc: '60+ वरिष्ठ नागरिकों के लिए पेंशन योजना। एकमुश्त निवेश पर हर महीने गारंटीड पेंशन।',
    claim: 'हर महीने गारंटीड पेंशन 10 साल तक',
    steps: ['LIC की नजदीकी शाखा जाएं', 'PMVVY फॉर्म भरें', 'एकमुश्त राशि जमा करें', 'पेंशन हर महीने बैंक में आएगी'],
    docs: ['आधार कार्ड', 'आयु प्रमाण पत्र', 'बैंक पासबुक', 'पैन कार्ड'],
    url: 'https://licindia.in',
    helpline: '1800-227-717',
  },
  {
    id: 'cattle',
    name: 'Livestock Insurance Scheme',
    icon: '🐄',
    tag: 'पशु बीमा',
    tagColor: 'bg-amber-600',
    premium: '1.5% (सब्सिडी के बाद)',
    cover: 'पशु के बाजार मूल्य तक',
    age: 'सभी पशुपालक',
    type: 'फसल बीमा',
    who: 'गाय, भैंस, बकरी पालने वाले किसान',
    desc: 'दुधारू पशुओं का बीमा। बीमार होने या मरने पर पशु के बाजार मूल्य तक मुआवजा।',
    claim: 'पशु मृत्यु पर बाजार मूल्य तक',
    steps: ['नजदीकी पशु चिकित्सालय जाएं', 'पशु का स्वास्थ्य प्रमाण पत्र बनवाएं', 'बैंक/बीमा कंपनी में आवेदन करें', 'पशु की टैगिंग होगी'],
    docs: ['आधार कार्ड', 'पशु स्वास्थ्य प्रमाण पत्र', 'बैंक पासबुक', 'पशु की फोटो'],
    url: 'https://dahd.nic.in',
    helpline: '1800-180-1551',
  },
]

const FILTER_TAGS = ['all', 'जीवन बीमा', 'दुर्घटना बीमा', 'स्वास्थ्य बीमा', 'फसल बीमा', 'मजदूर बीमा', 'पशु बीमा']

export default function InsurancePage() {
  const [selected, setSelected] = useState<typeof INSURANCE_SCHEMES[0] | null>(null)
  const [filter, setFilter]     = useState('all')

  const filtered = filter === 'all'
    ? INSURANCE_SCHEMES
    : INSURANCE_SCHEMES.filter(s => s.tag === filter)

  if (selected) return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <button onClick={() => setSelected(null)} className="text-green-700 text-sm mb-4">← वापस जाएं</button>

      <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-5 mb-4">
        <div className="flex items-start gap-4 mb-3">
          <span className="text-5xl">{selected.icon}</span>
          <div>
            <span className={`${selected.tagColor} text-white text-xs px-2 py-0.5 rounded-full`}>{selected.tag}</span>
            <h1 className="text-xl font-bold text-gray-900 mt-1">{selected.name}</h1>
            <p className="text-sm text-gray-600 mt-1">{selected.desc}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[['💰 प्रीमियम', selected.premium],['🛡️ कवर', selected.cover],['👥 आयु', selected.age],['✅ क्लेम', selected.claim]].map(([k,v]) => (
            <div key={k} className="bg-white rounded-xl p-3 text-center">
              <div className="text-xs text-gray-500">{k}</div>
              <div className="font-bold text-green-800 text-xs mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-4">
        <h2 className="font-bold text-blue-900 mb-2">👥 कौन ले सकता है?</h2>
        <p className="text-sm text-gray-700">{selected.who}</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-4">
        <h2 className="font-bold text-blue-900 mb-3">📄 जरूरी दस्तावेज</h2>
        {selected.docs.map((d,i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-gray-700 mb-2">
            <span className="text-green-500 shrink-0">✓</span>{d}
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-4">
        <h2 className="font-bold text-blue-900 mb-3">👣 आवेदन कैसे करें</h2>
        {selected.steps.map((s,i) => (
          <div key={i} className="flex gap-3 items-start mb-3">
            <div className="bg-green-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0">{i+1}</div>
            <p className="text-sm text-gray-700 pt-0.5">{s}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <a href={selected.url} target="_blank" rel="noopener noreferrer"
          className="flex-1 bg-green-700 hover:bg-green-800 text-white text-center py-3 rounded-2xl font-bold text-sm transition">
          🌐 आवेदन करें →
        </a>
        <a href={`tel:${selected.helpline}`}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-2xl font-bold text-sm transition">
          📞 {selected.helpline}
        </a>
      </div>
    </div>
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-green-700 to-green-900 text-white rounded-2xl p-5 mb-6 text-center">
        <div className="text-4xl mb-2">🛡️</div>
        <h1 className="text-2xl font-bold mb-1">सरकारी बीमा योजनाएं</h1>
        <p className="text-green-200 text-sm">मुफ्त या बहुत कम प्रीमियम पर सरकारी बीमा</p>
      </div>

      <div className="flex gap-2 flex-wrap mb-6">
        {FILTER_TAGS.map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter===f ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-green-100'
            }`}>
            {f === 'all' ? 'सभी बीमा' : f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(s => (
          <div key={s.id} onClick={() => setSelected(s)}
            className="bg-white border-2 border-gray-200 hover:border-green-400 rounded-2xl p-4 cursor-pointer hover:shadow-lg transition group">
            <div className="flex items-start justify-between mb-2">
              <span className="text-3xl">{s.icon}</span>
              <span className={`${s.tagColor} text-white text-xs px-2 py-0.5 rounded-full`}>{s.tag}</span>
            </div>
            <h3 className="font-bold text-gray-800 text-sm mb-1">{s.name}</h3>
            <p className="text-xs text-gray-500 mb-3 line-clamp-2">{s.desc}</p>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-green-50 rounded-lg p-2 text-center">
                <div className="text-xs text-gray-400">प्रीमियम</div>
                <div className="text-green-700 font-bold text-xs">{s.premium}</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-2 text-center">
                <div className="text-xs text-gray-400">कवर</div>
                <div className="text-blue-700 font-bold text-xs">{s.cover}</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">👥 {s.age}</span>
              <span className="text-green-600 text-xs group-hover:underline">जानकारी →</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6 text-xs text-gray-600 text-center">
        ⚠️ बीमा की शर्तें बदल सकती हैं। आवेदन से पहले बैंक या बीमा कंपनी से पुष्टि करें।
      </div>
    </div>
  )
}