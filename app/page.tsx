// File location: app/page.tsx
// CHANGE: Added video section at the very top of the home page (above hero)
// Video: https://youtu.be/LLvoEEsjjDw

import Link from 'next/link';

export const metadata = {
  title: 'सहायता मित्र — गाँव-गाँव तक सरकारी हक़ | सरकारी योजनाएं, लोन, बीमा',
  description: 'सरकारी योजनाएं, लोन और बीमा की पूरी जानकारी आसान हिंदी में। PM-KISAN, KCC, फसल बीमा सहित 34+ योजनाएं। 100% मुफ़्त सहायता।',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* ======================== */}
      {/* 0. VIDEO SECTION (NEW)   */}
      {/* ======================== */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-10 sm:py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-6">
            <div className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm font-bold mb-3">
              🎬 देखें वीडियो
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              जानें कैसे करता है <span className="text-orange-600">सहायता मित्र</span> मदद
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              सिर्फ कुछ मिनटों में पाएं सरकारी योजनाओं की पूरी जानकारी
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border-4 border-white">
            <iframe
              src="https://www.youtube.com/embed/LLvoEEsjjDw?rel=0&modestbranding=1"
              title="सहायता मित्र - सरकारी योजनाओं की जानकारी"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>

        </div>
      </section>
      
      {/* ======================== */}
      {/* 1. HERO SECTION          */}
      {/* ======================== */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-green-50 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4h-4zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
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
                <Link 
                  href="/yojanaen"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition shadow-lg text-lg"
                >
                  योजनाएं देखें →
                </Link>
                <Link 
                  href="/patrata-janch"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-orange-600 transition text-lg"
                >
                  पात्रता जाँचें
                </Link>
              </div>
              
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                  100% मुफ़्त
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                  सरकारी स्रोत
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                  WhatsApp सहायता
                </div>
              </div>
            </div>
            
            {/* Right: Farmer Family Image */}
            <div className="relative">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-amber-100">
                <img 
                  src="/farmer-family.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating stat card */}
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

      {/* ======================== */}
      {/* 2. TRUST STRIP           */}
      {/* ======================== */}
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
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">24×7</div>
              <div className="text-sm text-gray-600">WhatsApp सहायता</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== */}
      {/* 3. 3 PRODUCTS SECTION    */}
      {/* ======================== */}
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
              तीन सरल तरीकों से सरकारी सहायता तक आपकी पहुँच
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Scheme Card */}
            <Link href="/yojanaen" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 h-full">
                <div className="aspect-[16/10] bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-300/20 rounded-full"></div>
                  <div className="absolute top-4 left-4 text-2xl opacity-30">🌾</div>
                  <div className="absolute bottom-4 right-4 text-2xl opacity-30">🌾</div>
                  
                  <div className="relative text-center text-white">
                    <div className="text-6xl sm:text-7xl mb-2 drop-shadow-lg">🏛️</div>
                    <div className="text-sm font-semibold opacity-95 px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                      केंद्र व राज्य सरकार
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-7">
                  <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-3">
                    18+ योजनाएं
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    🌾 सरकारी योजनाएं
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    PM-KISAN, आवास योजना, उज्ज्वला सहित केंद्र और राज्य सरकार की 18+ योजनाएं
                  </p>
                  <div className="flex items-center text-orange-600 font-semibold group-hover:gap-3 transition-all gap-2">
                    सभी योजनाएं देखें <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Loan Card */}
            <Link href="/loan" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 h-full">
                <div className="aspect-[16/10] bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-700 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-300/20 rounded-full"></div>
                  <div className="absolute top-4 left-4 text-2xl opacity-30">₹</div>
                  <div className="absolute bottom-4 right-4 text-2xl opacity-30">₹</div>
                  
                  <div className="relative text-center text-white">
                    <div className="text-6xl sm:text-7xl mb-2 drop-shadow-lg">💰</div>
                    <div className="text-sm font-semibold opacity-95 px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                      कम ब्याज दर
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-7">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                    8 लोन विकल्प
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    💰 सरकारी लोन
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    किसान क्रेडिट कार्ड, मुद्रा लोन, स्व-निधि सहित 8 कम ब्याज वाले लोन विकल्प
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 transition-all gap-2">
                    सभी लोन देखें <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Insurance Card */}
            <Link href="/insurance" className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 h-full">
                <div className="aspect-[16/10] bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-lime-300/20 rounded-full"></div>
                  <div className="absolute top-4 left-4 text-2xl opacity-30">❤️</div>
                  <div className="absolute bottom-4 right-4 text-2xl opacity-30">❤️</div>
                  
                  <div className="relative text-center text-white">
                    <div className="text-6xl sm:text-7xl mb-2 drop-shadow-lg">🛡️</div>
                    <div className="text-sm font-semibold opacity-95 px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                      परिवार की सुरक्षा
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-7">
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-3">
                    8 बीमा योजनाएं
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    🛡️ सुरक्षा बीमा
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    फसल बीमा, जीवन बीमा, स्वास्थ्य बीमा सहित 8 बीमा योजनाएं आपकी सुरक्षा के लिए
                  </p>
                  <div className="flex items-center text-green-600 font-semibold group-hover:gap-3 transition-all gap-2">
                    सभी बीमा देखें <span>→</span>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ======================== */}
      {/* 4. HOW IT WORKS          */}
      {/* ======================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              कैसे काम करता है?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              सिर्फ़ 3 आसान कदम और सरकारी मदद आपके हाथ में
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { num: '१', emoji: '🔍', title: 'योजना ढूँढें', desc: 'अपने काम की सरकारी योजना ब्राउज़ करें — किसान, महिला, बुज़ुर्ग, छात्र सबके लिए' },
              { num: '२', emoji: '✅', title: 'पात्रता जाँचें', desc: 'देखें आप योजना के लिए योग्य हैं या नहीं — सिर्फ़ 2 मिनट में' },
              { num: '३', emoji: '📝', title: 'आवेदन की मदद लें', desc: 'ज़रूरी दस्तावेज़ की लिस्ट और आवेदन के स्टेप्स — सब आसान हिंदी में' }
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

      {/* ======================== */}
      {/* 5. FINAL CTA             */}
      {/* ======================== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            अभी शुरू करें अपनी सरकारी मदद की यात्रा
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            हज़ारों किसान, महिलाएँ और परिवार पहले से ही हमारे साथ हैं
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/yojanaen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-xl text-lg"
            >
              योजनाएं देखें →
            </Link>
            <a 
              href="https://wa.me/917903742317"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition shadow-xl gap-2 text-lg"
            >
              📱 WhatsApp पर मदद
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}