import Link from 'next/link'
import { getAllSchemes } from '../lib/schemes'

export default function HomePage() {
  const schemes = getAllSchemes()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-12 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
            सरकारी योजनाओं की पूरी जानकारी
            <span className="text-yellow-300"> आसान भाषा में</span>
          </h1>
          <p className="text-blue-200 mb-8 text-sm md:text-base">
            योजनाएं · लोन · बीमा · पेंशन · छात्रवृत्ति
          </p>
          <Link href="/patrata-janch"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-2xl hover:bg-yellow-300 transition shadow-lg text-sm md:text-base">
            🎯 जानें — आप किन योजनाओं के पात्र हैं?
          </Link>
        </div>
      </section>

      {/* Beneficiary Stats */}
      <section className="bg-white py-8 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-lg font-bold text-gray-800 mb-6">
            🌟 अब तक इतने लोगों की मदद हो चुकी है
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '2,50,000+', label: 'किसानों को जानकारी', icon: '🌾', color: 'bg-green-50 border-green-200' },
              { num: '1,80,000+', label: 'मजदूरों को सहायता', icon: '👷', color: 'bg-orange-50 border-orange-200' },
              { num: '95,000+', label: 'महिलाओं को लाभ', icon: '👩', color: 'bg-pink-50 border-pink-200' },
              { num: '75,000+', label: 'छात्रों को छात्रवृत्ति', icon: '🎓', color: 'bg-blue-50 border-blue-200' },
            ].map((s, i) => (
              <div key={i} className={`${s.color} border-2 rounded-2xl p-4 text-center`}>
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-xl font-bold text-gray-800">{s.num}</div>
                <div className="text-xs text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            * ये आंकड़े हमारे पोर्टल पर जानकारी लेने वाले उपयोगकर्ताओं के हैं
          </p>
        </div>
      </section>

      {/* Rural People Photos */}
      <section className="bg-orange-50 py-8 px-4">
        <h2 className="text-xl font-bold text-center text-orange-800 mb-6">
          🤝 हम किनके लिए हैं?
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { img: 'https://images.unsplash.com/photo-1592982537447-7f2b47e84d81?w=400&auto=format&fit=crop', label: '👨‍🌾 किसान', desc: 'PM Kisan, KCC, फसल बीमा' },
            { img: 'https://images.unsplash.com/photo-1610034954432-5d2beb4c4c5e?w=400&auto=format&fit=crop', label: '👷 मजदूर', desc: 'E-Shram, Mudra लोन' },
            { img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&auto=format&fit=crop', label: '👩 महिला', desc: 'Ujjwala, विधवा पेंशन' },
            { img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop', label: '🎓 छात्र', desc: 'Scholarship, शिक्षा लोन' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
              <img src={item.img} alt={item.label} className="w-full h-36 object-cover" />
              <div className="p-3 text-center">
                <div className="font-bold text-gray-800 text-sm">{item.label}</div>
                <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 1 — Government Schemes (Blue Theme) */}
      <section className="bg-blue-800 py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3">
          <div className="text-white">
            <span className="text-lg font-bold">🏛️ सरकारी योजनाएं</span>
            <span className="text-blue-300 text-xs ml-3">PM Kisan · Ayushman · E-Shram · पेंशन</span>
          </div>
          <Link href="/yojanaen" className="bg-white text-blue-800 text-xs px-4 py-2 rounded-full font-bold hover:bg-blue-50 transition">
            सभी 18 योजनाएं →
          </Link>
        </div>
      </section>
      <section className="bg-white px-4 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {schemes.slice(0, 6).map(s => (
            <Link key={s.id} href={`/yojana/${s.slug}`}
              className="bg-blue-50 border-2 border-blue-200 hover:border-blue-500 rounded-2xl p-4 hover:shadow-lg transition group">
              <div className="flex items-start justify-between mb-2">
                <span className="text-3xl">{s.icon}</span>
                <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">{s.tag}</span>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">{s.name}</h3>
              <p className="text-xs text-gray-500 mb-3 line-clamp-2">{s.shortDesc}</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-700 font-bold text-sm">{s.benefit}</span>
                <span className="text-blue-600 text-xs group-hover:underline">जानकारी →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 2 — Loans (Orange Theme) */}
      <section className="bg-orange-600 py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3">
          <div className="text-white">
            <span className="text-lg font-bold">🏦 सरकारी लोन योजनाएं</span>
            <span className="text-orange-200 text-xs ml-3">बिना गारंटी · कम ब्याज · आसान किस्तें</span>
          </div>
          <Link href="/loan" className="bg-white text-orange-700 text-xs px-4 py-2 rounded-full font-bold hover:bg-orange-50 transition">
            सभी 8 लोन →
          </Link>
        </div>
      </section>
      <section className="bg-orange-50 px-4 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: '🏪', name: 'PM Mudra — शिशु', amount: '₹50,000 तक', interest: '8-12%', tag: 'छोटा व्यवसाय', desc: 'नया छोटा व्यवसाय शुरू करने के लिए बिना गारंटी लोन।' },
            { icon: '💳', name: 'Kisan Credit Card', amount: '₹3 लाख तक', interest: '4%', tag: 'किसान', desc: 'खेती के खर्च के लिए सिर्फ 4% ब्याज पर लोन।' },
            { icon: '🛺', name: 'PM SVANidhi', amount: '₹50,000 तक', interest: '7% सब्सिडी', tag: 'रेहड़ी-पटरी', desc: 'ठेला, रेहड़ी वालों के लिए बिना गारंटी लोन।' },
            { icon: '🚀', name: 'Stand Up India', amount: '₹1 करोड़ तक', interest: '7-9%', tag: 'SC/ST/महिला', desc: 'SC/ST और महिलाओं के लिए बड़ा व्यवसाय लोन।' },
            { icon: '🏗️', name: 'PMEGP लोन', amount: '₹25 लाख तक', interest: '35% सब्सिडी', tag: 'रोजगार', desc: 'नया उद्योग शुरू करें और सब्सिडी पाएं।' },
            { icon: '🐄', name: 'Dairy Loan', amount: '₹7 लाख तक', interest: '25% सब्सिडी', tag: 'पशुपालन', desc: 'डेयरी व्यवसाय के लिए लोन और सब्सिडी।' },
          ].map((s, i) => (
            <Link key={i} href="/loan"
              className="bg-white border-2 border-orange-200 hover:border-orange-500 rounded-2xl p-4 hover:shadow-lg transition group">
              <div className="flex items-start justify-between mb-2">
                <span className="text-3xl">{s.icon}</span>
                <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">{s.tag}</span>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">{s.name}</h3>
              <p className="text-xs text-gray-500 mb-3">{s.desc}</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-orange-50 rounded-lg p-2 text-center border border-orange-100">
                  <div className="text-xs text-gray-400">राशि</div>
                  <div className="text-orange-700 font-bold text-xs">{s.amount}</div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-2 text-center border border-yellow-100">
                  <div className="text-xs text-gray-400">ब्याज</div>
                  <div className="text-yellow-700 font-bold text-xs">{s.interest}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 3 — Insurance (Green Theme) */}
      <section className="bg-green-700 py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3">
          <div className="text-white">
            <span className="text-lg font-bold">🛡️ सरकारी बीमा योजनाएं</span>
            <span className="text-green-200 text-xs ml-3">मुफ्त · कम प्रीमियम · पूरा कवर</span>
          </div>
          <Link href="/insurance" className="bg-white text-green-700 text-xs px-4 py-2 rounded-full font-bold hover:bg-green-50 transition">
            सभी 8 बीमा →
          </Link>
        </div>
      </section>
      <section className="bg-green-50 px-4 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: '🛡️', name: 'PM Jeevan Jyoti Bima', premium: '₹436/वर्ष', cover: '₹2 लाख', tag: 'जीवन बीमा', desc: 'मृत्यु पर परिवार को ₹2 लाख। सबसे सस्ता जीवन बीमा।' },
            { icon: '⚕️', name: 'PM Suraksha Bima', premium: '₹20/वर्ष', cover: '₹2 लाख', tag: 'दुर्घटना बीमा', desc: 'सिर्फ ₹20 में दुर्घटना बीमा। सबसे किफायती।' },
            { icon: '🏥', name: 'Ayushman Bharat', premium: 'मुफ्त', cover: '₹5 लाख', tag: 'स्वास्थ्य बीमा', desc: 'BPL परिवारों को मुफ्त स्वास्थ्य बीमा।' },
            { icon: '🌱', name: 'PM Fasal Bima', premium: '2% प्रीमियम', cover: 'पूरा मुआवजा', tag: 'फसल बीमा', desc: 'बाढ़, सूखा से फसल खराब होने पर मुआवजा।' },
            { icon: '👷', name: 'E-Shram बीमा', premium: 'मुफ्त', cover: '₹2 लाख', tag: 'मजदूर बीमा', desc: 'E-Shram Card बनाते ही मुफ्त दुर्घटना बीमा।' },
            { icon: '💎', name: 'PMJJBY + PMSBY कॉम्बो', premium: '₹456/वर्ष', cover: '₹4 लाख', tag: 'कॉम्बो बीमा', desc: 'दोनों बीमा साथ लें। ₹4 लाख का कवर।' },
          ].map((s, i) => (
            <Link key={i} href="/insurance"
              className="bg-white border-2 border-green-200 hover:border-green-500 rounded-2xl p-4 hover:shadow-lg transition group">
              <div className="flex items-start justify-between mb-2">
                <span className="text-3xl">{s.icon}</span>
                <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">{s.tag}</span>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">{s.name}</h3>
              <p className="text-xs text-gray-500 mb-3">{s.desc}</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-50 rounded-lg p-2 text-center border border-green-100">
                  <div className="text-xs text-gray-400">प्रीमियम</div>
                  <div className="text-green-700 font-bold text-xs">{s.premium}</div>
                </div>
                <div className="bg-teal-50 rounded-lg p-2 text-center border border-teal-100">
                  <div className="text-xs text-gray-400">कवर</div>
                  <div className="text-teal-700 font-bold text-xs">{s.cover}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
            💬 लोग क्या कह रहे हैं?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'राम प्रसाद, उत्तर प्रदेश', text: 'इस वेबसाइट से PM Kisan की जानकारी मिली और मैंने सफलतापूर्वक आवेदन किया। बहुत आसान था।', icon: '🌾' },
              { name: 'सुनीता देवी, बिहार', text: 'Ayushman Card बनाने की पूरी जानकारी यहाँ मिली। अब मेरे परिवार का मुफ्त इलाज होता है।', icon: '🏥' },
              { name: 'मोहम्मद अली, राजस्थान', text: 'E-Shram Card बनाने में मदद मिली। अब ₹2 लाख का बीमा है मेरे पास।', icon: '👷' },
            ].map((t, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                <div className="text-3xl mb-3">{t.icon}</div>
                <p className="text-sm text-gray-600 italic mb-3">"{t.text}"</p>
                <div className="font-bold text-gray-800 text-xs">— {t.name}</div>
                <div className="flex text-yellow-400 mt-1 text-sm">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-8 px-4 text-center">
        <h2 className="text-xl font-bold mb-2">✅ जानें आप किन योजनाओं के पात्र हैं?</h2>
        <p className="text-sm mb-4 text-blue-200">कुछ सवालों के जवाब दें और तुरंत जानें</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/patrata-janch"
            className="inline-block bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-2xl hover:bg-yellow-300 transition shadow-lg">
            🎯 पात्रता जांचें →
          </Link>
          <a href="https://wa.me/917903742317"
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-bold px-8 py-3 rounded-2xl hover:bg-green-600 transition shadow-lg">
            💬 WhatsApp पर पूछें →
          </a>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 text-xs text-gray-600 text-center">
          ⚠️ <strong>अस्वीकरण:</strong> यह वेबसाइट सरकारी नहीं है। हम केवल शैक्षिक उद्देश्य से जानकारी देते हैं।
          आधिकारिक आवेदन के लिए संबंधित सरकारी पोर्टल पर जाएं।
        </div>
      </div>
    </div>
  )
}