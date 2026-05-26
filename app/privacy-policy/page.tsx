// File location: app/privacy-policy/page.tsx
// CHANGES: Fixed email and WhatsApp number — now uses real contact details

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-2">🔒 गोपनीयता नीति</h1>
      <p className="text-xs text-gray-400 mb-6">Privacy Policy — अंतिम अपडेट: मई 2026</p>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">

        <section className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
          <h2 className="font-bold text-blue-900 text-base mb-3">1. हम कौन हैं?</h2>
          <p>
            सहायता मित्र एक निजी शैक्षिक पोर्टल है जो ग्रामीण और
            अर्ध-शहरी भारतीय नागरिकों को सरकारी योजनाओं की जानकारी सरल
            हिंदी में उपलब्ध कराता है। यह किसी भी सरकारी संस्था से संबद्ध नहीं है।
          </p>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="font-bold text-gray-800 text-base mb-3">2. हम क्या जानकारी एकत्र करते हैं?</h2>
          <ul className="space-y-2">
            {[
              'नाम, मोबाइल नंबर और पिनकोड — जो आप जानकारी पाने के समय देते हैं',
              'वेबसाइट उपयोग की जानकारी — कौन से पेज देखे, कितनी देर',
              'डिवाइस की जानकारी — मोबाइल/कंप्यूटर, ब्राउज़र प्रकार',
              'पात्रता जांच के दौरान दी गई जानकारी',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-600 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
          <h2 className="font-bold text-orange-800 text-base mb-3">
            3. ⚠️ आपकी जानकारी का उपयोग कैसे होगा?
          </h2>
          <ul className="space-y-2">
            {[
              'सरकारी योजनाओं से संबंधित अपडेट और जानकारी भेजना',
              'विपणन (Marketing) उद्देश्यों के लिए — WhatsApp, SMS या कॉल',
              'हमारे विश्वसनीय भागीदारों के साथ सेवा सुधार हेतु साझा करना',
              'वेबसाइट की गुणवत्ता और उपयोगकर्ता अनुभव बेहतर बनाना',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-orange-600 shrink-0 font-bold">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 bg-orange-100 rounded-xl p-3 text-xs text-orange-800">
            <strong>महत्वपूर्ण:</strong> वेबसाइट में प्रवेश करके आप उपरोक्त उपयोग के
            लिए अपनी सहमति देते हैं।
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="font-bold text-gray-800 text-base mb-3">4. आपके अधिकार</h2>
          <ul className="space-y-2">
            {[
              'आप किसी भी समय अपना डेटा हटाने का अनुरोध कर सकते हैं',
              'मार्केटिंग संदेशों से बाहर निकलने के लिए हमसे संपर्क करें',
              'अपनी जानकारी देखने या सुधारने का अधिकार',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-600 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="font-bold text-gray-800 text-base mb-3">5. संपर्क करें</h2>
          <div className="space-y-2">
            <p>
              📧{' '}
              <a 
                href="mailto:help@sahayatamitra.com" 
                className="text-blue-600 hover:underline font-medium"
              >
                help@sahayatamitra.com
              </a>
            </p>
            <p>
              💬{' '}
              <a 
                href="https://wa.me/917903742317" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:underline font-medium"
              >
                WhatsApp: +91 79037 42317
              </a>
            </p>
          </div>
        </section>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-xs text-gray-600">
          ⚠️ <strong>अस्वीकरण:</strong> यह वेबसाइट सरकारी नहीं है। केवल शैक्षिक उद्देश्य।
        </div>
      </div>
    </div>
  )
}