export default function WhatsAppButton() {
  const msg = encodeURIComponent('नमस्ते, मुझे सरकारी योजना के बारे में जानकारी चाहिए।')
  return (
    <a
      href={`https://wa.me/917903742317?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-xl flex items-center gap-2 font-bold text-sm transition z-50"
    >
      💬 WhatsApp Help
    </a>
  )
}