import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-green-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: Text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 border border-orange-100">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-gray-700">🇮🇳 सहायता मित्र</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  गाँव-गाँव तक
                </span><br />
                सरकारी हक़
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                सरकारी योजनाएं, लोन और बीमा की पूरी जानकारी अब आसान हिंदी में।
                हर किसान और परिवार के लिए — सही जानकारी, सही समय पर।
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/yojanaen"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition shadow-lg text-lg">
                  योजनाएं देखें →
                </Link>
                <Link href="/patrata-janch"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-orange-600 transition text-lg">
                  पात्रता जाँचें
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600 justify-center lg:justify-start">
                {['100% मुफ़्त', 'सरकारी स्रोत', 'WhatsApp सहायता'].map(t => (
                  <div key={t} className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-amber-100">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop"
                  alt="Indian rural family"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center text-3xl">🌾</div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">34+</div>
                  <div className="text-sm text-gray-600">सरकारी सहायता</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 lg:-right-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center text-3xl">💚</div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">हिंदी</div>
                  <div className="text-sm text-gray-600">में जानकारी</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              ['18+', 'सरकारी योजनाएं', 'text-orange-600'],
              ['8', 'लोन विकल्प', 'text-blue-600'],
              ['8', 'बीमा योजनाएं', 'text-green-600'],
              ['24×7', 'WhatsApp सहायता', 'text-purple-600'],
            ].map(([n, l, c]) => (
              <div key={l}>
                <div className={`text-3xl sm:text-4xl font-bold ${c} mb-1`}>{n}</div>
                <div className="text-sm text-gray-600">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BENEFICIARY STATS */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-xl font-bold text-gray-800 mb-6">
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

      {/* 4. 3 PRODUCTS SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              हमारी सेवाएं
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              हम आपकी कैसे मदद करते हैं?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              तीन सरल तरीकों से सरकारी सहायता तक आपकी पहुँच
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Schemes */}
            <Link href="/yojanaen" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 h-full border border-gray-100">
                <div className="aspect-[16/10] bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                  <div className="relative text-center text-white">
                    <div className="text-7xl mb-2">🏛️</div>
                    <div className="text-sm font-semibold px-3 py-1 bg-white/20 rounded-full">केंद्र व राज्य सरकार</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-3">18+ योजनाएं</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">🌾 सरकारी योजनाएं</h3>
                  <p className="text-gray-600 mb-4">PM-KISAN, आवास योजना, उज्ज्वला सहित 18+ योजनाएं</p>
                  <div className="flex items-center text-orange-600 font-semibold gap-2 group-hover:gap-3 transition-all">सभी योजनाएं देखें <span>→</span></div>
                </div>
              </div>
            </Link>

            {/* Loan */}
            <Link href="/loan" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 h-full border border-gray-100">
                <div className="aspect-[16/10] bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-700 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                  <div className="relative text-center text-white">
                    <div className="text-7xl mb-2">💰</div>
                    <div className="text-sm font-semibold px-3 py-1 bg-white/20 rounded-full">कम ब्याज दर</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">8 लोन विकल्प</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">💰 सरकारी लोन</h3>
                  <p className="text-gray-600 mb-4">किसान क्रेडिट कार्ड, मुद्रा लोन, स्व-निधि सहित 8 लोन</p>
                  <div className="flex items-center text-blue-600 font-semibold gap-2 group-hover:gap-3 transition-all">सभी लोन देखें <span>→</span></div>
                </div>
              </div>
            </Link>

            {/* Insurance */}
            <Link href="/insurance" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 h-full border border-gray-100">
                <div className="aspect-[16/10] bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                  <div className="relative text-center text-white">
                    <div className="text-7xl mb-2">🛡️</div>
                    <div className="text-sm font-semibold px-3 py-1 bg-white/20 rounded-full">परिवार की सुरक्षा</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-3">8 बीमा योजनाएं</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">🛡️ सुरक्षा बीमा</h3>
                  <p className="text-gray-600 mb-4">फसल बीमा, जीवन बीमा, स्वास्थ्य बीमा सहित 8 योजनाएं</p>
                  <div className="flex items-center text-green-600 font-semibold gap-2 group-hover:gap-3 transition-all">सभी बीमा देखें <span>→</span></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">कैसे काम करता है?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">सिर्फ़ 3 आसान कदम और सरकारी मदद आपके हाथ में</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { num: '१', emoji: '🔍', title: 'योजना ढूँढें', desc: 'अपने काम की सरकारी योजना ब्राउज़ करें — किसान, महिला, बुज़ुर्ग, छात्र सबके लिए' },
              { num: '२', emoji: '✅', title: 'पात्रता जाँचें', desc: 'देखें आप योजना के लिए योग्य हैं या नहीं — सिर्फ़ 2 मिनट में' },
              { num: '३', emoji: '📝', title: 'आवेदन की मदद लें', desc: 'ज़रूरी दस्तावेज़ की लिस्ट और आवेदन के स्टेप्स — सब आसान हिंदी में' },
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-7 sm:p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {step.num}
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  {step.emoji}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-6">💬 लोग क्या कह रहे हैं?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'राम प्रसाद, उत्तर प्रदेश', text: 'PM Kisan की जानकारी मिली और मैंने सफलतापूर्वक आवेदन किया। बहुत आसान था।', icon: '🌾' },
              { name: 'सुनीता देवी, बिहार', text: 'Ayushman Card बनाने की पूरी जानकारी यहाँ मिली। अब मुफ्त इलाज होता है।', icon: '🏥' },
              { name: 'मोहम्मद अली, राजस्थान', text: 'E-Shram Card बनाने में मदद मिली। अब ₹2 लाख का बीमा है मेरे पास।', icon: '👷' },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-4 shadow-sm">
                <div className="text-3xl mb-3">{t.icon}</div>
                <p className="text-sm text-gray-600 italic mb-3">"{t.text}"</p>
                <div className="font-bold text-gray-800 text-xs">— {t.name}</div>
                <div className="flex text-yellow-400 mt-1 text-sm">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            अभी शुरू करें अपनी सरकारी मदद की यात्रा
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            हज़ारों किसान, महिलाएँ और परिवार पहले से ही हमारे साथ हैं
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/yojanaen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-xl text-lg">
              योजनाएं देखें →
            </Link>
            <a href="https://wa.me/917903742317" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition shadow-xl gap-2 text-lg">
              📱 WhatsApp पर मदद
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 text-xs text-gray-600 text-center">
          ⚠️ <strong>अस्वीकरण:</strong> यह वेबसाइट सरकारी नहीं है। केवल शैक्षिक उद्देश्य।
        </div>
      </div>

    </main>
  )
}