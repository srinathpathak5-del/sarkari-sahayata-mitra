'use client'
import { useState } from 'react'

const LOAN_SCHEMES = [
  {
    id: 'mudra-shishu',
    name: 'PM Mudra Yojana — शिशु',
    icon: '🏪',
    tag: 'छोटा व्यवसाय',
    tagColor: 'bg-green-500',
    amount: '₹50,000 तक',
    interest: '8-12%/वर्ष',
    tenure: '5 साल तक',
    guarantee: 'कोई गारंटी नहीं',
    who: 'छोटे दुकानदार, फेरीवाले, घरेलू उद्योग',
    desc: 'नया छोटा व्यवसाय शुरू करने के लिए ₹50,000 तक का लोन। कोई गारंटी नहीं।',
    steps: ['नजदीकी बैंक/CSC जाएं', 'Mudra Loan फॉर्म भरें', 'आधार और व्यवसाय प्रमाण दें', 'लोन अप्रूवल के बाद खाते में पैसे'],
    docs: ['आधार कार्ड', 'पैन कार्ड', 'व्यवसाय का प्रमाण', 'पासपोर्ट फोटो'],
    url: 'https://mudra.org.in',
    helpline: '1800-180-1111',
  },
  {
    id: 'mudra-kishor',
    name: 'PM Mudra Yojana — किशोर',
    icon: '🏬',
    tag: 'मध्यम व्यवसाय',
    tagColor: 'bg-blue-500',
    amount: '₹50,000 - ₹5 लाख',
    interest: '8-12%/वर्ष',
    tenure: '5 साल तक',
    guarantee: 'कोई गारंटी नहीं',
    who: 'चल रहे व्यवसाय को बढ़ाने वाले',
    desc: 'पहले से चल रहे व्यवसाय को बढ़ाने के लिए ₹5 लाख तक का लोन।',
    steps: ['बैंक में Kishor Loan फॉर्म लें', '6 महीने का बैंक स्टेटमेंट दें', 'व्यवसाय की जानकारी दें', 'लोन अप्रूवल लें'],
    docs: ['आधार कार्ड', 'पैन कार्ड', 'बैंक स्टेटमेंट 6 माह', 'व्यवसाय रजिस्ट्रेशन'],
    url: 'https://mudra.org.in',
    helpline: '1800-180-1111',
  },
  {
    id: 'mudra-tarun',
    name: 'PM Mudra Yojana — तरुण',
    icon: '🏭',
    tag: 'बड़ा व्यवसाय',
    tagColor: 'bg-purple-500',
    amount: '₹5 लाख - ₹10 लाख',
    interest: '8-12%/वर्ष',
    tenure: '7 साल तक',
    guarantee: 'कम गारंटी',
    who: 'स्थापित व्यवसाय वाले उद्यमी',
    desc: 'स्थापित व्यवसाय को और बड़ा करने के लिए ₹10 लाख तक का लोन।',
    steps: ['बैंक में Tarun Loan के लिए आवेदन करें', 'व्यवसाय की बैलेंस शीट दें', 'ITR और GST दस्तावेज दें', 'मूल्यांकन के बाद लोन'],
    docs: ['आधार कार्ड', 'पैन कार्ड', 'ITR 2 साल', 'GST रजिस्ट्रेशन'],
    url: 'https://mudra.org.in',
    helpline: '1800-180-1111',
  },
  {
    id: 'kcc',
    name: 'Kisan Credit Card (KCC)',
    icon: '💳',
    tag: 'किसान',
    tagColor: 'bg-yellow-600',
    amount: '₹3 लाख तक',
    interest: '4%/वर्ष (सब्सिडी बाद)',
    tenure: '1 साल (नवीनीकरण)',
    guarantee: 'जमीन गारंटी',
    who: 'सभी किसान जिनके पास जमीन है',
    desc: 'खेती के खर्च के लिए ₹3 लाख तक का लोन। सिर्फ 4% ब्याज।',
    steps: ['नजदीकी बैंक जाएं', 'KCC फॉर्म भरें', 'खसरा/खतौनी दें', 'KCC कार्ड मिलेगा'],
    docs: ['आधार कार्ड', 'खसरा/खतौनी', 'बैंक पासबुक', 'पासपोर्ट फोटो'],
    url: 'https://pmkisan.gov.in',
    helpline: '1800-180-1551',
  },
  {
    id: 'svanidhi',
    name: 'PM SVANidhi — रेहड़ी लोन',
    icon: '🛺',
    tag: 'रेहड़ी-पटरी',
    tagColor: 'bg-orange-500',
    amount: '₹10,000 - ₹50,000',
    interest: '7% सब्सिडी',
    tenure: '1 साल',
    guarantee: 'कोई गारंटी नहीं',
    who: 'ठेला, रेहड़ी, सड़क किनारे दुकान वाले',
    desc: 'रेहड़ी वालों को ₹10,000 से शुरू। अच्छे व्यवहार पर ₹50,000 तक।',
    steps: ['pmsvanidhi.mohua.gov.in पर जाएं', 'Apply for Loan क्लिक करें', 'मोबाइल से लॉगिन करें', 'फॉर्म भरें और लोन पाएं'],
    docs: ['आधार कार्ड', 'वेंडिंग सर्टिफिकेट', 'बैंक पासबुक', 'मोबाइल नंबर'],
    url: 'https://pmsvanidhi.mohua.gov.in',
    helpline: '1800-11-1979',
  },
  {
    id: 'standup',
    name: 'Stand Up India Scheme',
    icon: '🚀',
    tag: 'SC/ST/महिला',
    tagColor: 'bg-red-500',
    amount: '₹10 लाख - ₹1 करोड़',
    interest: '7-9%/वर्ष',
    tenure: '7 साल तक',
    guarantee: 'संपत्ति गारंटी',
    who: 'SC/ST और महिला उद्यमी',
    desc: 'SC/ST और महिलाओं को नया व्यवसाय शुरू करने के लिए बड़ा लोन।',
    steps: ['standupmitra.in पर रजिस्टर करें', 'व्यवसाय योजना बनाएं', 'नजदीकी बैंक में आवेदन करें', 'लोन अप्रूवल लें'],
    docs: ['आधार कार्ड', 'जाति/महिला प्रमाण पत्र', 'व्यवसाय योजना', 'ITR'],
    url: 'https://standupmitra.in',
    helpline: '1800-180-1111',
  },
  {
    id: 'pmegp',
    name: 'PMEGP — रोजगार लोन',
    icon: '🏗️',
    tag: 'रोजगार',
    tagColor: 'bg-teal-500',
    amount: '₹25 लाख तक',
    interest: '15-35% सब्सिडी',
    tenure: '3-7 साल',
    guarantee: 'आंशिक गारंटी',
    who: 'नया उद्योग शुरू करने वाले',
    desc: 'नया उद्योग शुरू करें और 15-35% सब्सिडी पाएं।',
    steps: ['kviconline.gov.in पर आवेदन करें', 'KVIC कार्यालय जाएं', 'EDP ट्रेनिंग करें', 'बैंक से लोन लें'],
    docs: ['आधार कार्ड', 'शिक्षा प्रमाण', 'प्रोजेक्ट रिपोर्ट', 'जाति प्रमाण (अगर लागू)'],
    url: 'https://kviconline.gov.in',
    helpline: '1800-180-6763',
  },
  {
    id: 'dairy-loan',
    name: 'Dairy Entrepreneurship Scheme',
    icon: '🐄',
    tag: 'पशुपालन',
    tagColor: 'bg-amber-600',
    amount: '₹7 लाख तक',
    interest: '25% सब्सिडी',
    tenure: '5 साल',
    guarantee: 'पशु गारंटी',
    who: 'गाय-भैंस पालने वाले किसान',
    desc: 'डेयरी व्यवसाय के लिए ₹7 लाख तक का लोन और 25% सब्सिडी।',
    steps: ['नजदीकी बैंक या NABARD जाएं', 'डेयरी प्रोजेक्ट रिपोर्ट बनाएं', 'पशु चिकित्सक से प्रमाण लें', 'लोन अप्रूवल लें'],
    docs: ['आधार कार्ड', 'जमीन के कागज', 'पशुपालन अनुभव', 'बैंक पासबुक'],
    url: 'https://dahd.nic.in',
    helpline: '1800-180-1551',
  },
]

export default function LoanPage() {
  const [selected, setSelected] = useState<typeof LOAN_SCHEMES[0] | null>(null)
  const [filter, setFilter]     = useState('all')

  const filters = ['all', 'किसान', 'छोटा व्यवसाय', 'रेहड़ी-पटरी', 'SC/ST/महिला', 'पशुपालन', 'रोजगार']
  const filtered = filter === 'all' ? LOAN_SCHEMES : LOAN_SCHEMES.filter(s => s.tag === filter)

  if (selected) return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <button onClick={() => setSelected(null)} className="text-blue-600 text-sm mb-4">← वापस जाएं</button>
      <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-5 mb-4">
        <div className="flex items-start gap-4 mb-3">
          <span className="text-5xl">{selected.icon}</span>
          <div>
            <span className={`${selected.tagColor} text-white text-xs px-2 py-0.5 rounded-full`}>{selected.tag}</span>
            <h1 className="text-xl font-bold text-gray-900 mt-1">{selected.name}</h1>
            <p className="text-sm text-gray-600 mt-1">{selected.desc}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[['💰 राशि', selected.amount],['📊 ब्याज', selected.interest],['⏰ अवधि', selected.tenure],['🔒 गारंटी', selected.guarantee]].map(([k,v]) => (
            <div key={k} className="bg-white rounded-xl p-3 text-center">
              <div className="text-xs text-gray-500">{k}</div>
              <div className="font-bold text-blue-800 text-xs mt-1">{v}</div>
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
            <span className="text-blue-500 shrink-0">•</span>{d}
          </div>
        ))}
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-4">
        <h2 className="font-bold text-blue-900 mb-3">👣 आवेदन कैसे करें</h2>
        {selected.steps.map((s,i) => (
          <div key={i} className="flex gap-3 items-start mb-3">
            <div className="bg-blue-700 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0">{i+1}</div>
            <p className="text-sm text-gray-700 pt-0.5">{s}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <a href={selected.url} target="_blank" rel="noopener noreferrer"
          className="flex-1 bg-blue-700 hover:bg-blue-800 text-white text-center py-3 rounded-2xl font-bold text-sm transition">
          🌐 आवेदन करें →
        </a>
        <a href={`tel:${selected.helpline}`}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-2xl font-bold text-sm transition">
          📞 {selected.helpline}
        </a>
      </div>
    </div>
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-2xl p-5 mb-6 text-center">
        <div className="text-4xl mb-2">🏦</div>
        <h1 className="text-2xl font-bold mb-1">सरकारी लोन योजनाएं</h1>
        <p className="text-blue-200 text-sm">बिना गारंटी या कम गारंटी पर सरकारी लोन पाएं</p>
      </div>
      <div className="flex gap-2 flex-wrap mb-6">
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter===f ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
            }`}>
            {f === 'all' ? 'सभी लोन' : f}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(s => (
          <div key={s.id} onClick={() => setSelected(s)}
            className="bg-white border-2 border-gray-200 hover:border-blue-400 rounded-2xl p-4 cursor-pointer hover:shadow-lg transition group">
            <div className="flex items-start justify-between mb-2">
              <span className="text-3xl">{s.icon}</span>
              <span className={`${s.tagColor} text-white text-xs px-2 py-0.5 rounded-full`}>{s.tag}</span>
            </div>
            <h3 className="font-bold text-gray-800 text-sm mb-1">{s.name}</h3>
            <p className="text-xs text-gray-500 mb-3 line-clamp-2">{s.desc}</p>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-green-50 rounded-lg p-2 text-center">
                <div className="text-xs text-gray-400">राशि</div>
                <div className="text-green-700 font-bold text-xs">{s.amount}</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-2 text-center">
                <div className="text-xs text-gray-400">ब्याज</div>
                <div className="text-blue-700 font-bold text-xs">{s.interest}</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">🔒 {s.guarantee}</span>
              <span className="text-blue-600 text-xs group-hover:underline">जानकारी →</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6 text-xs text-gray-600 text-center">
        ⚠️ लोन की शर्तें बैंक के अनुसार बदल सकती हैं। आवेदन से पहले बैंक से पुष्टि करें।
      </div>
    </div>
  )
}