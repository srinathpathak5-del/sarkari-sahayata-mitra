export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">ℹ️ हमारे बारे में</h1>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-5 text-center">
        <div className="text-3xl mb-3">🇮🇳</div>
        <h2 className="font-bold text-blue-900 text-lg mb-2">सहायता मित्र</h2>
        <p className="text-sm text-gray-700">
          हम एक शैक्षिक पोर्टल हैं जो ग्रामीण और अर्ध-शहरी नागरिकों को
          सरकारी योजनाओं की जानकारी आसान हिंदी में देते हैं।
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          ['50,000+', 'लाभार्थी'],
          ['18+', 'योजनाएं'],
          ['100%', 'मुफ्त'],
        ].map(([n, l]) => (
          <div key={l} className="bg-white border border-gray-200 rounded-xl p-3 text-center">
            <div className="text-xl font-bold text-blue-800">{n}</div>
            <div className="text-xs text-gray-500">{l}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          ['🎯', 'हमारा उद्देश्य', 'सरकारी योजनाओं की जानकारी हर नागरिक तक पहुँचाना'],
          ['💯', 'हमारा वादा', '100% मुफ्त, सटीक और भरोसेमंद जानकारी'],
          ['🤝', 'हमारी मदद', 'WhatsApp और ऑनलाइन सहायता उपलब्ध'],
        ].map(([icon, title, desc]) => (
          <div key={title} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">{icon}</div>
            <h3 className="font-bold text-gray-800 mb-1 text-sm">{title}</h3>
            <p className="text-xs text-gray-500">{desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-5 mb-5">
        <h2 className="font-bold text-red-800 mb-2">⚠️ अस्वीकरण</h2>
        <p className="text-sm text-gray-700">
          यह वेबसाइट <strong>सरकारी वेबसाइट नहीं है।</strong> हम केवल शैक्षिक
          उद्देश्य से सार्वजनिक जानकारी प्रदान करते हैं। आधिकारिक आवेदन के
          लिए संबंधित सरकारी पोर्टल पर जाएं।
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <h2 className="font-bold text-blue-900 mb-4">📞 संपर्क करें</h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <span className="text-2xl">💬</span>
            <a href="https://wa.me/917903742317" target="_blank" rel="noopener noreferrer"
              className="text-green-600 font-medium hover:underline">
              WhatsApp: +91 79037 42317
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📧</span>
            <a href="mailto:help@sahayatamitra.com"
              className="text-blue-600 hover:underline">
              help@sahayatamitra.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">⏰</span>
            <span>सोमवार–शनिवार, सुबह 9 – शाम 6</span>
          </div>
        </div>
      </div>
    </div>
  )
}