import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center py-6 px-4">
      <div className="text-lg font-bold mb-1">🇮🇳 सहायता मित्र</div>
      <div className="text-blue-300 text-xs mb-3">
        यह वेबसाइट सरकारी नहीं है। केवल शैक्षिक उद्देश्य।
      </div>
      <div className="flex justify-center gap-6 text-blue-300 text-sm mb-3">
        <Link href="/about" className="hover:text-white">हमारे बारे में</Link>
        <Link href="/privacy-policy" className="hover:text-white">गोपनीयता नीति</Link>
        <Link href="/terms" className="hover:text-white">नियम एवं शर्तें</Link>
      </div>
      <div className="text-blue-400 text-xs">© 2026 Sahayata Mitra</div>
    </footer>
  )
}