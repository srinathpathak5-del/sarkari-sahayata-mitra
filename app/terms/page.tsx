// File location: app/terms/page.tsx
// CHANGES: Fixed email and WhatsApp number in 2 places — now uses real contact details

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-2">📋 नियम एवं शर्तें</h1>
      <p className="text-xs text-gray-400 mb-6">Terms & Conditions — अंतिम अपडेट: मई 2026</p>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">

        <section className="bg-red-50 border border-red-200 rounded-2xl p-5">
          <h2 className="font-bold text-red-800 text-base mb-3">⚠️ महत्वपूर्ण अस्वीकरण</h2>
          <p>
            सहायता मित्र एक <strong>स्वतंत्र शैक्षिक पोर्टल</strong> है।
            यह भारत सरकार या किसी सरकारी विभाग की आधिकारिक वेबसाइट नहीं है।
            यहाँ दी गई जानकारी केवल शैक्षिक उद्देश्य के लिए है।
          </p>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="font-bold text-gray-800 text-base mb-3">1. सेवा की शर्तें</h2>
          <ul className="space-y-2">
            {[
              'इस वेबसाइट का उपयोग करके आप इन नियमों से सहमत होते हैं',
              'आपकी आयु कम से कम 18 वर्ष होनी चाहिए',
              'आप सही और सटीक जानकारी प्रदान करेंगे',
              'आप इस वेबसाइट का दुरुपयोग नहीं करेंगे',
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
            2. मार्केटिंग और संचार सहमति
          </h2>
          <p className="mb-3">
            वेबसाइट में अपना नाम, मोबाइल नंबर और पिनकोड दर्ज करके आप सहमति देते हैं कि:
          </p>
          <ul className="space-y-2">
            {[
              'सरकारी योजनाओं से संबंधित SMS और WhatsApp संदेश प्राप्त करना',
              'हमारे भागीदारों की सेवाओं के बारे में जानकारी प्राप्त करना',
              'विपणन (Marketing) उद्देश्यों के लिए कॉल या संदेश प्राप्त करना',
              'सर्वेक्षण और फीडबैक अनुरोध प्राप्त करना',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-orange-600 shrink-0 font-bold">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-orange-700">
            आप किसी भी समय{' '}
            <a 
              href="mailto:help@sahayatamitra.com" 
              className="font-semibold text-orange-800 hover:underline"
            >
              help@sahayatamitra.com
            </a>
            {' '}पर लिखकर इन संचारों से बाहर निकल सकते हैं।
          </p>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="font-bold text-gray-800 text-base mb-3">3. जानकारी की सटीकता</h2>
          <p>
            हम यहाँ दी गई जानकारी को सटीक रखने का प्रयास करते हैं, लेकिन
            सरकारी योजनाओं के नियम बदल सकते हैं। किसी भी योजना के लिए
            आवेदन से पहले संबंधित सरकारी वेबसाइट पर पुष्टि करें।
          </p>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="font-bold text-gray-800 text-base mb-3">4. दायित्व की सीमा</h2>
          <p>
            सहायता मित्र किसी भी आवेदन के परिणाम के लिए उत्तरदायी
            नहीं है। यह पोर्टल केवल जानकारी देता है, आवेदन नहीं करता।
          </p>
        </section>

        <section className="bg-white border border-gray-200 rounded-2xl p-5">
          <h2 className="font-bold text-gray-800 text-base mb-3">5. संपर्क</h2>
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

      </div>
    </div>
  )
}