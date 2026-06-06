// File location: app/page.tsx
// CHANGE: Updated 4th product card (सरकारी काम) to use new illustration
// instead of purple gradient with emojis

import Link from 'next/link';

export const metadata = {
  title: 'सहायता मित्र — गाँव-गाँव तक सरकारी हक़ | सरकारी योजनाएं, लोन, बीमा, दस्तावेज़',
  description: 'सरकारी योजनाएं, लोन, बीमा और दस्तावेज़ की पूरी जानकारी आसान हिंदी में। PM-KISAN, KCC, Aadhaar, PAN सहित सभी सरकारी सेवाएं। 100% मुफ़्त।',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* VIDEO SECTION */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-10 sm:py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm font-bold mb-3">
              🎬 देखें वीडियो
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              जानें कैसे <span className="text-orange-600">सहायता मित्र</span> आपकी ज़िन्दगी बदल सकता है
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              असली कहानियाँ, असली बदलाव — देखें कैसे सरकारी योजनाएं लाखों परिवारों की मदद कर रही हैं
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div>
              <div className="text-center mb-3">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-2">
                  📋 कैसे काम करता है
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-800">
                  सहायता मित्र की मदद से सरकारी योजनाओं की जानकारी
                </h3>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border-4 border-white">
                <iframe src="https://www.youtube.com/embed/LLvoEEsjjDw?rel=0&modestbranding=1" title="सहायता मित्र" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
              </div>
            </div>
            <div>
              <div className="text-center mb-3">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-2">
                  😊 खुश परिवार
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-800">
                  सरकारी योजना से मिली खुशियाँ — एक परिवार की कहानी
                </h3>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border-4 border-white">
                <iframe src="https://www.youtube.com/embed/NU2z6q3fN_I?rel=0&modestbranding=1" title="सहायता मित्र" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-green-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 border border-orange-100">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-gray-700">🇮🇳 सहायता मित्र</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">गाँव-गाँव तक</span><br />
                सरकारी हक़
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                सरकारी योजनाएं, लोन, बीमा और दस्तावेज़ की पूरी जानकारी अब आसान हिंदी में।
                हर किसान और परिवार के लिए — सही जानकारी, सही समय पर।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/yojanaen" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition shadow-lg text-lg">
                  योजनाएं देखें →
                </Link>
                <Link href="/patrata-janch" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-orange-600 transition text-lg">
                  पात्रता जाँचें
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600 justify-center lg:justify-start">
                <div className="flex items-center gap-2"><span className="w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">✓</span>100% मुफ़्त</div>
                <div className="flex items-center gap-2"><span className="w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">✓</span>सरकारी स्रोत</div>
                <div className="flex items-center gap-2"><span className="w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">✓</span>WhatsApp सहायता</div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-amber-100">
                <img src="/farmer-family.jpg" alt="" className="w-full h-full object-cover" />
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

      {/* TRUST STRIP */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-1">18+</div>
              <div className="text-sm text-gray-600">सरकारी योजनाएं</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">8</div>
              <div className="text-sm text-gray-600">लोन विकल्प</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1">8</div>
              <div className="text-sm text-gray-600">बीमा योजनाएं</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">15+</div>
              <div className="text-sm text-gray-600">सरकारी दस्तावेज़</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 PRODUCTS SECTION */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              हमारी सेवाएं
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              हम आपकी कैसे मदद करते हैं?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              चार सरल तरीकों से सरकारी सहायता तक आपकी पहुँच
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            
            {/* CARD 1 - SCHEMES */}
            <Link href="/yojanaen" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 h-full">
                <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                  <img src="/scheme-creative.png" alt="सरकारी योजनाएं" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="inline-block px-2.5 py-0.5 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-3">
                    18+ योजनाएं
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">🌾 सरकारी योजनाएं</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    PM-KISAN, आवास योजना, उज्ज्वला सहित 18+ योजनाएं
                  </p>
                  <div className="flex items-center text-orange-600 font-semibold group-hover:gap-3 transition-all gap-2 text-sm">
                    देखें <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* CARD 2 - LOANS */}
            <Link href="/loan" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 h-full">
                <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                  <img src="/loan-creative.png" alt="सरकारी लोन" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                    8 विकल्प
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">💰 सरकारी लोन</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    KCC, मुद्रा, स्व-निधि — 8 कम ब्याज वाले लोन
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 transition-all gap-2 text-sm">
                    देखें <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* CARD 3 - INSURANCE */}
            <Link href="/insurance" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 h-full">
                <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                  <img src="/insurance-creative.png" alt="सुरक्षा बीमा" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="inline-block px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-3">
                    8 योजनाएं
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">🛡️ सुरक्षा बीमा</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    फसल, जीवन, स्वास्थ्य — 8 बीमा योजनाएं
                  </p>
                  <div className="flex items-center text-green-600 font-semibold group-hover:gap-3 transition-all gap-2 text-sm">
                    देखें <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* CARD 4 - SARKARI KAAM - NOW WITH IMAGE! */}
            <Link href="/sarkari-kaam" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 h-full">
                <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                  <img src="/sarkari-kaam-creative.png" alt="सरकारी काम - Aadhaar, PAN, DL, Voter ID" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="inline-block px-2.5 py-0.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full mb-3">
                    15+ दस्तावेज़
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">📋 सरकारी काम</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Aadhaar, PAN, DL, राशन कार्ड — राज्यवार आवेदन
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:gap-3 transition-all gap-2 text-sm">
                    देखें <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              🛠️ मुफ्त टूल्स
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              सरकारी आवेदन के लिए <span className="text-blue-600">मुफ्त टूल्स</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              आवेदन भरने में मदद के लिए आसान और मुफ्त डिजिटल टूल्स
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Link href="/photo-resize" className="group">
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 h-full border-2 border-blue-200 hover:border-blue-500 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">✓ उपलब्ध</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-lg">📸</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">फोटो साइज़ बदलें</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  सरकारी फॉर्म के लिए फोटो का KB में आकार बदलें — 20KB, 50KB, 100KB तक
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">आधार</span>
                  <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">PAN</span>
                  <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">PM Kisan</span>
                  <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">वोटर कार्ड</span>
                </div>
                <div className="flex items-center text-blue-600 font-bold group-hover:gap-3 transition-all gap-2">
                  टूल इस्तेमाल करें <span>→</span>
                </div>
              </div>
            </Link>
            <div className="group cursor-not-allowed">
              <div className="bg-white/60 rounded-3xl p-6 sm:p-7 h-full border-2 border-gray-200 relative overflow-hidden opacity-75">
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-2.5 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">🚧 जल्द आ रहा है</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center text-3xl mb-5">✍️</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">सिग्नेचर रिसाइज़र</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">सरकारी फॉर्म के लिए सिग्नेचर का सही साइज़ बनाएं</p>
                <div className="flex items-center text-gray-400 font-bold gap-2">जल्द उपलब्ध</div>
              </div>
            </div>
            <div className="group cursor-not-allowed">
              <div className="bg-white/60 rounded-3xl p-6 sm:p-7 h-full border-2 border-gray-200 relative overflow-hidden opacity-75">
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-2.5 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">🚧 जल्द आ रहा है</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center text-3xl mb-5">📄</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">फोटो को PDF बनाएं</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">कई फोटो को एक PDF में बदलें — दस्तावेज अपलोड के लिए</p>
                <div className="flex items-center text-gray-400 font-bold gap-2">जल्द उपलब्ध</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-blue-100 text-sm text-gray-700">
              <span className="text-green-600 font-bold">🔒</span>
              <span>सभी टूल्स 100% सुरक्षित — आपकी फाइल आपके फोन में ही रहती है</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">कैसे काम करता है?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">सिर्फ़ 3 आसान कदम और सरकारी मदद आपके हाथ में</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { num: '१', emoji: '🔍', title: 'योजना ढूँढें', desc: 'अपने काम की सरकारी योजना ब्राउज़ करें — किसान, महिला, बुज़ुर्ग, छात्र सबके लिए' },
              { num: '२', emoji: '✅', title: 'पात्रता जाँचें', desc: 'देखें आप योजना के लिए योग्य हैं या नहीं — सिर्फ़ 2 मिनट में' },
              { num: '३', emoji: '📝', title: 'आवेदन की मदद लें', desc: 'ज़रूरी दस्तावेज़ की लिस्ट और आवेदन के स्टेप्स — सब आसान हिंदी में' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-7 sm:p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">{step.num}</div>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center text-3xl mb-6">{step.emoji}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">अभी शुरू करें अपनी सरकारी मदद की यात्रा</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-95 max-w-2xl mx-auto">हज़ारों किसान, महिलाएँ और परिवार पहले से ही हमारे साथ हैं</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/yojanaen" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-xl text-lg">
              योजनाएं देखें →
            </Link>
            <a href="https://wa.me/917903742317" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition shadow-xl gap-2 text-lg">
              📱 WhatsApp पर मदद
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
