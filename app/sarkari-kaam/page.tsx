// File location: app/sarkari-kaam/page.tsx
// Government Services / सरकारी काम section with state-wise filter
// Shows 15 important documents (Aadhaar, PAN, DL, Voter, Domicile, etc.)
// Each card → modal → official govt URL after lead capture

'use client'
import { useState } from 'react'
import UserInfoModal, { hasUserInfo } from '../../components/UserInfoModal'

interface GovService {
  id: string
  emoji: string
  name: string
  nameHindi: string
  category: 'central' | 'state'
  shortDesc: string
  documents: string[]
  centralUrl?: string  // For central documents (same URL all states)
  stateUrls?: Record<string, string>  // For state-specific documents
}

const STATES = [
  { code: 'UP', name: 'उत्तर प्रदेश', english: 'Uttar Pradesh' },
  { code: 'BR', name: 'बिहार', english: 'Bihar' },
  { code: 'MP', name: 'मध्य प्रदेश', english: 'Madhya Pradesh' },
  { code: 'RJ', name: 'राजस्थान', english: 'Rajasthan' },
  { code: 'JH', name: 'झारखंड', english: 'Jharkhand' },
  { code: 'HR', name: 'हरियाणा', english: 'Haryana' },
  { code: 'CG', name: 'छत्तीसगढ़', english: 'Chhattisgarh' },
  { code: 'UK', name: 'उत्तराखंड', english: 'Uttarakhand' },
]

const SERVICES: GovService[] = [
  // Central documents (same URL for all states)
  {
    id: 'aadhaar',
    emoji: '🆔',
    name: 'Aadhaar Card',
    nameHindi: 'आधार कार्ड',
    category: 'central',
    shortDesc: '12-अंकों का यूनिक पहचान नंबर',
    documents: [
      'पहचान प्रमाण (Voter ID/Passport/राशन कार्ड)',
      'पता प्रमाण (बिजली बिल/बैंक स्टेटमेंट)',
      'जन्म तिथि प्रमाण',
      'मोबाइल नंबर',
      'पासपोर्ट साइज़ फोटो',
    ],
    centralUrl: 'https://uidai.gov.in/',
  },
  {
    id: 'pan',
    emoji: '💳',
    name: 'PAN Card',
    nameHindi: 'पैन कार्ड',
    category: 'central',
    shortDesc: 'इनकम टैक्स के लिए जरूरी 10-अंकों का नंबर',
    documents: [
      'आधार कार्ड',
      'पहचान प्रमाण',
      'पता प्रमाण',
      'जन्म तिथि प्रमाण',
      'पासपोर्ट साइज़ फोटो (50KB)',
    ],
    centralUrl: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
  },
  {
    id: 'passport',
    emoji: '🛂',
    name: 'Passport',
    nameHindi: 'पासपोर्ट',
    category: 'central',
    shortDesc: 'विदेश यात्रा के लिए जरूरी दस्तावेज',
    documents: [
      'आधार कार्ड',
      'PAN कार्ड',
      'जन्म प्रमाण पत्र',
      'पता प्रमाण (3 दस्तावेज)',
      'पुराना पासपोर्ट (renewal के लिए)',
      'पासपोर्ट साइज़ फोटो',
    ],
    centralUrl: 'https://www.passportindia.gov.in/',
  },
  {
    id: 'voter',
    emoji: '🗳️',
    name: 'Voter ID',
    nameHindi: 'वोटर कार्ड',
    category: 'central',
    shortDesc: 'मतदान के लिए जरूरी पहचान पत्र',
    documents: [
      'आधार कार्ड',
      'पता प्रमाण',
      'जन्म तिथि प्रमाण',
      'पासपोर्ट साइज़ फोटो (50KB)',
    ],
    centralUrl: 'https://voters.eci.gov.in/',
  },
  {
    id: 'ration',
    emoji: '🍚',
    name: 'Ration Card',
    nameHindi: 'राशन कार्ड',
    category: 'state',
    shortDesc: 'सस्ता राशन पाने के लिए जरूरी',
    documents: [
      'आधार कार्ड (सभी सदस्यों का)',
      'पता प्रमाण',
      'आय प्रमाण पत्र',
      'पासपोर्ट साइज़ फोटो',
      'मुखिया का बैंक पासबुक',
    ],
    stateUrls: {
      UP: 'https://fcs.up.gov.in/FoodPortal.aspx',
      BR: 'https://epds.bihar.gov.in/',
      MP: 'https://nfsa.mp.gov.in/',
      RJ: 'https://food.rajasthan.gov.in/',
      JH: 'https://aahar.jharkhand.gov.in/',
      HR: 'https://haryanafood.gov.in/',
      CG: 'https://khadya.cg.nic.in/',
      UK: 'https://fcs.uk.gov.in/',
    },
  },
  {
    id: 'eshram',
    emoji: '👷',
    name: 'E-Shram Card',
    nameHindi: 'ई-श्रम कार्ड',
    category: 'central',
    shortDesc: 'असंगठित मजदूरों के लिए — ₹2 लाख बीमा',
    documents: [
      'आधार कार्ड',
      'आधार से लिंक मोबाइल नंबर',
      'बैंक खाता विवरण',
      'व्यवसाय की जानकारी',
    ],
    centralUrl: 'https://eshram.gov.in/',
  },
  {
    id: 'ayushman',
    emoji: '🏥',
    name: 'Ayushman Card',
    nameHindi: 'आयुष्मान कार्ड',
    category: 'central',
    shortDesc: '₹5 लाख तक मुफ्त इलाज (BPL परिवारों के लिए)',
    documents: [
      'आधार कार्ड',
      'राशन कार्ड',
      'मोबाइल नंबर',
      'SECC-2011 सूची में नाम',
    ],
    centralUrl: 'https://beneficiary.nha.gov.in/',
  },
  // State-specific documents
  {
    id: 'dl',
    emoji: '🚗',
    name: 'Driving License',
    nameHindi: 'ड्राइविंग लाइसेंस',
    category: 'state',
    shortDesc: 'गाड़ी चलाने के लिए कानूनी लाइसेंस',
    documents: [
      'आधार कार्ड',
      'पता प्रमाण',
      'जन्म तिथि प्रमाण',
      'मेडिकल प्रमाण पत्र (Form 1-A)',
      'पासपोर्ट साइज़ फोटो (30KB)',
      'लर्निंग लाइसेंस (LL)',
    ],
    stateUrls: {
      UP: 'https://parivahan.gov.in/parivahan/',
      BR: 'https://parivahan.gov.in/parivahan/',
      MP: 'https://parivahan.gov.in/parivahan/',
      RJ: 'https://parivahan.gov.in/parivahan/',
      JH: 'https://parivahan.gov.in/parivahan/',
      HR: 'https://parivahan.gov.in/parivahan/',
      CG: 'https://parivahan.gov.in/parivahan/',
      UK: 'https://parivahan.gov.in/parivahan/',
    },
  },
  {
    id: 'll',
    emoji: '📜',
    name: 'Learning License',
    nameHindi: 'लर्निंग लाइसेंस',
    category: 'state',
    shortDesc: 'DL से पहले लर्निंग लाइसेंस जरूरी',
    documents: [
      'आधार कार्ड',
      'पता प्रमाण',
      'जन्म तिथि प्रमाण (18+ आयु)',
      'पासपोर्ट साइज़ फोटो',
      'मेडिकल प्रमाण पत्र',
    ],
    stateUrls: {
      UP: 'https://parivahan.gov.in/parivahan/',
      BR: 'https://parivahan.gov.in/parivahan/',
      MP: 'https://parivahan.gov.in/parivahan/',
      RJ: 'https://parivahan.gov.in/parivahan/',
      JH: 'https://parivahan.gov.in/parivahan/',
      HR: 'https://parivahan.gov.in/parivahan/',
      CG: 'https://parivahan.gov.in/parivahan/',
      UK: 'https://parivahan.gov.in/parivahan/',
    },
  },
  {
    id: 'rc',
    emoji: '🚙',
    name: 'Vehicle RC',
    nameHindi: 'वाहन RC',
    category: 'state',
    shortDesc: 'वाहन रजिस्ट्रेशन सर्टिफिकेट',
    documents: [
      'गाड़ी की रसीद (Invoice)',
      'बीमा कागज़',
      'PUC सर्टिफिकेट',
      'पता प्रमाण',
      'आधार कार्ड',
      'पासपोर्ट साइज़ फोटो',
    ],
    stateUrls: {
      UP: 'https://parivahan.gov.in/parivahan/',
      BR: 'https://parivahan.gov.in/parivahan/',
      MP: 'https://parivahan.gov.in/parivahan/',
      RJ: 'https://parivahan.gov.in/parivahan/',
      JH: 'https://parivahan.gov.in/parivahan/',
      HR: 'https://parivahan.gov.in/parivahan/',
      CG: 'https://parivahan.gov.in/parivahan/',
      UK: 'https://parivahan.gov.in/parivahan/',
    },
  },
  {
    id: 'caste',
    emoji: '📜',
    name: 'Caste Certificate',
    nameHindi: 'जाति प्रमाण पत्र',
    category: 'state',
    shortDesc: 'SC/ST/OBC आरक्षण के लिए जरूरी',
    documents: [
      'आधार कार्ड',
      'पता प्रमाण',
      'माता-पिता का जाति प्रमाण पत्र',
      'स्कूल/कॉलेज सर्टिफिकेट',
      'राशन कार्ड',
      'पासपोर्ट साइज़ फोटो',
    ],
    stateUrls: {
      UP: 'https://edistrict.up.gov.in/',
      BR: 'https://serviceonline.bihar.gov.in/',
      MP: 'https://mpedistrict.gov.in/',
      RJ: 'https://emitra.rajasthan.gov.in/',
      JH: 'https://jharsewa.jharkhand.gov.in/',
      HR: 'https://saralharyana.gov.in/',
      CG: 'https://edistrict.cgstate.gov.in/',
      UK: 'https://eservices.uk.gov.in/',
    },
  },
  {
    id: 'income',
    emoji: '💰',
    name: 'Income Certificate',
    nameHindi: 'आय प्रमाण पत्र',
    category: 'state',
    shortDesc: 'छात्रवृत्ति और आरक्षण के लिए जरूरी',
    documents: [
      'आधार कार्ड',
      'पता प्रमाण',
      'राशन कार्ड',
      'आय का प्रमाण (Salary slip/ITR)',
      'बैंक स्टेटमेंट',
      'पासपोर्ट साइज़ फोटो',
    ],
    stateUrls: {
      UP: 'https://edistrict.up.gov.in/',
      BR: 'https://serviceonline.bihar.gov.in/',
      MP: 'https://mpedistrict.gov.in/',
      RJ: 'https://emitra.rajasthan.gov.in/',
      JH: 'https://jharsewa.jharkhand.gov.in/',
      HR: 'https://saralharyana.gov.in/',
      CG: 'https://edistrict.cgstate.gov.in/',
      UK: 'https://eservices.uk.gov.in/',
    },
  },
  {
    id: 'domicile',
    emoji: '🏠',
    name: 'Domicile Certificate',
    nameHindi: 'निवास प्रमाण पत्र',
    category: 'state',
    shortDesc: 'राज्य का स्थायी निवासी होने का प्रमाण',
    documents: [
      'आधार कार्ड',
      'जन्म प्रमाण पत्र',
      'स्कूल छोड़ने का सर्टिफिकेट',
      '15+ साल के पता प्रमाण',
      'राशन कार्ड',
      'पासपोर्ट साइज़ फोटो',
    ],
    stateUrls: {
      UP: 'https://edistrict.up.gov.in/',
      BR: 'https://serviceonline.bihar.gov.in/',
      MP: 'https://mpedistrict.gov.in/',
      RJ: 'https://emitra.rajasthan.gov.in/',
      JH: 'https://jharsewa.jharkhand.gov.in/',
      HR: 'https://saralharyana.gov.in/',
      CG: 'https://edistrict.cgstate.gov.in/',
      UK: 'https://eservices.uk.gov.in/',
    },
  },
  {
    id: 'birth',
    emoji: '👶',
    name: 'Birth Certificate',
    nameHindi: 'जन्म प्रमाण पत्र',
    category: 'state',
    shortDesc: 'सभी सरकारी आवेदनों के लिए जरूरी',
    documents: [
      'अस्पताल का डिस्चार्ज प्रमाण पत्र',
      'माता-पिता का आधार कार्ड',
      'विवाह प्रमाण पत्र (अगर है)',
      'पता प्रमाण',
    ],
    stateUrls: {
      UP: 'https://e-nagarsewaup.gov.in/',
      BR: 'https://serviceonline.bihar.gov.in/',
      MP: 'https://mpedistrict.gov.in/',
      RJ: 'https://emitra.rajasthan.gov.in/',
      JH: 'https://jharsewa.jharkhand.gov.in/',
      HR: 'https://saralharyana.gov.in/',
      CG: 'https://edistrict.cgstate.gov.in/',
      UK: 'https://eservices.uk.gov.in/',
    },
  },
  {
    id: 'bhulekh',
    emoji: '🌾',
    name: 'Land Records',
    nameHindi: 'भूलेख / जमीन रिकॉर्ड',
    category: 'state',
    shortDesc: 'जमीन का खसरा-खतौनी रिकॉर्ड',
    documents: [
      'जमीन की पुरानी रसीद',
      'आधार कार्ड',
      'खाता नंबर / खसरा नंबर',
      'पता प्रमाण',
    ],
    stateUrls: {
      UP: 'https://upbhulekh.gov.in/',
      BR: 'https://bhumijankari.bihar.gov.in/',
      MP: 'https://mpbhulekh.gov.in/',
      RJ: 'https://apnakhata.rajasthan.gov.in/',
      JH: 'https://jharbhoomi.jharkhand.gov.in/',
      HR: 'https://jamabandi.nic.in/',
      CG: 'https://bhuiyan.cg.nic.in/',
      UK: 'https://bhulekh.uk.gov.in/',
    },
  },
]

export default function SarkariKaamPage() {
  const [selectedState, setSelectedState] = useState<string>('UP')
  const [modalOpen, setModalOpen] = useState(false)
  const [pendingService, setPendingService] = useState<GovService | null>(null)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  function handleApply(service: GovService) {
    setPendingService(service)
    
    if (hasUserInfo()) {
      // User has already given info this session, go directly
      redirectToOfficial(service)
    } else {
      setModalOpen(true)
    }
  }

  function redirectToOfficial(service: GovService) {
    const url = service.category === 'central'
      ? service.centralUrl
      : service.stateUrls?.[selectedState]
    
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  function handleModalSuccess() {
    setModalOpen(false)
    if (pendingService) {
      setTimeout(() => {
        redirectToOfficial(pendingService)
        setPendingService(null)
      }, 300)
    }
  }

  function toggleCard(id: string) {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const selectedStateName = STATES.find(s => s.code === selectedState)?.name || ''

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-3">
          📋 सरकारी काम
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
          सरकारी दस्तावेज़ बनवाएं
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          आधार, PAN, DL, राशन कार्ड और सभी जरूरी सरकारी दस्तावेज़ों के लिए जानकारी और आवेदन लिंक
        </p>
      </div>

      {/* State Filter */}
      <div className="bg-white border-2 border-blue-200 rounded-2xl p-5 mb-8 shadow-sm">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          📍 अपना राज्य चुनें (राज्य-विशिष्ट दस्तावेज़ों के लिए)
        </label>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-base font-medium text-gray-800 bg-white"
        >
          {STATES.map(state => (
            <option key={state.code} value={state.code}>
              {state.name} ({state.english})
            </option>
          ))}
        </select>
        <p className="text-xs text-gray-500 mt-2">
          💡 आधार, PAN, पासपोर्ट जैसे केंद्रीय दस्तावेज़ सभी राज्यों के लिए समान हैं
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {SERVICES.map((service) => {
          const isExpanded = expandedCard === service.id
          const isAvailable = service.category === 'central' || (service.stateUrls && service.stateUrls[selectedState])
          
          return (
            <div
              key={service.id}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all"
            >
              {/* Card Header */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-4xl shrink-0">{service.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                      {service.nameHindi}
                    </h3>
                    <p className="text-xs text-gray-500">{service.name}</p>
                  </div>
                  {service.category === 'central' ? (
                    <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">
                      केंद्रीय
                    </span>
                  ) : (
                    <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">
                      राज्य
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 mb-3 leading-snug">
                  {service.shortDesc}
                </p>

                {/* Documents Toggle */}
                <button
                  onClick={() => toggleCard(service.id)}
                  className="w-full text-left bg-gray-50 hover:bg-gray-100 rounded-xl px-3 py-2 transition flex items-center justify-between mb-3"
                >
                  <span className="text-sm font-semibold text-gray-700">
                    📄 जरूरी दस्तावेज़ ({service.documents.length})
                  </span>
                  <span className="text-blue-600 text-lg">
                    {isExpanded ? '−' : '+'}
                  </span>
                </button>

                {/* Documents List - Collapsible */}
                {isExpanded && (
                  <ul className="bg-blue-50 border-2 border-blue-100 rounded-xl p-3 mb-3 space-y-1.5 animate-in fade-in duration-200">
                    {service.documents.map((doc, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-blue-600 font-bold shrink-0">{idx + 1}.</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Apply Button */}
                <button
                  onClick={() => handleApply(service)}
                  disabled={!isAvailable}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-2.5 rounded-xl text-sm transition flex items-center justify-center gap-2"
                >
                  {isAvailable ? (
                    <>आवेदन करें →</>
                  ) : (
                    <>जल्द उपलब्ध</>
                  )}
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Info Box */}
      <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-5 text-center mb-8">
        <p className="text-sm text-yellow-900">
          ⚠️ <strong>नोट:</strong> ये सभी आवेदन लिंक आधिकारिक सरकारी वेबसाइटों पर खुलते हैं। 
          सहायता मित्र केवल जानकारी देता है — कोई शुल्क नहीं लेता।
        </p>
      </div>

      {/* WhatsApp Help */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 text-center">
        <div className="text-3xl mb-2">💬</div>
        <h3 className="font-bold text-lg mb-2">मदद चाहिए?</h3>
        <p className="text-sm text-white/90 mb-4">
          आवेदन करने में परेशानी हो तो WhatsApp पर हमसे जुड़ें
        </p>
        <a
          href="https://wa.me/917903742317?text=Hello,%20मुझे%20सरकारी%20दस्तावेज़%20बनवाने%20में%20मदद%20चाहिए"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-green-600 font-bold px-6 py-2.5 rounded-xl hover:bg-gray-100 transition"
        >
          📱 WhatsApp पर मदद लें
        </a>
      </div>

      {/* Modal */}
      <UserInfoModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false)
          setPendingService(null)
        }}
        onSuccess={handleModalSuccess}
        productName={pendingService ? `${pendingService.nameHindi} (${selectedStateName})` : ''}
      />
    </div>
  )
}
