// File location: app/photo-resize/page.tsx
// Free Photo Resizer Tool — Resize photos to specific KB sizes for government applications
// Runs 100% in browser — no server needed, fast, private
// URL: sahayatamitra.com/photo-resize

'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'

interface PresetSize {
  label: string
  kb: number
  description: string
  emoji: string
}

const PRESETS: PresetSize[] = [
  { label: 'आधार/PAN', kb: 50, description: 'आधार, PAN कार्ड के लिए', emoji: '🆔' },
  { label: 'PM Kisan', kb: 100, description: 'PM Kisan, e-Shram के लिए', emoji: '🌾' },
  { label: 'सरकारी फॉर्म', kb: 20, description: 'छोटे सरकारी फॉर्म के लिए', emoji: '📋' },
  { label: 'वोटर कार्ड', kb: 50, description: 'वोटर ID के लिए', emoji: '🗳️' },
  { label: 'पासपोर्ट', kb: 200, description: 'पासपोर्ट आवेदन', emoji: '🛂' },
  { label: 'ड्राइविंग लाइसेंस', kb: 30, description: 'DL के लिए', emoji: '🚗' },
]

export default function PhotoResizerPage() {
  const [originalImage, setOriginalImage] = useState<string | null>(null)
  const [originalSize, setOriginalSize] = useState<number>(0)
  const [resizedImage, setResizedImage] = useState<string | null>(null)
  const [resizedSize, setResizedSize] = useState<number>(0)
  const [targetKB, setTargetKB] = useState<number>(50)
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setError('कृपया फोटो (JPG, PNG) अपलोड करें')
      return
    }
    setError('')
    setResizedImage(null)
    setOriginalSize(file.size)
    const reader = new FileReader()
    reader.onload = (e) => setOriginalImage(e.target?.result as string)
    reader.readAsDataURL(file)
  }

  async function compressImage(imageSrc: string, targetKB: number): Promise<{ dataUrl: string; size: number }> {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) { reject(new Error('Canvas not supported')); return }
        const targetBytes = targetKB * 1024
        let quality = 0.95
        let width = img.width
        let height = img.height
        let dataUrl = ''
        let attempts = 0
        const maxAttempts = 25

        function tryCompress() {
          canvas.width = width
          canvas.height = height
          ctx!.clearRect(0, 0, width, height)
          ctx!.drawImage(img, 0, 0, width, height)
          dataUrl = canvas.toDataURL('image/jpeg', quality)
          const base64Length = dataUrl.length - (dataUrl.indexOf(',') + 1)
          const sizeInBytes = (base64Length * 3) / 4
          attempts++
          if (sizeInBytes <= targetBytes || attempts >= maxAttempts) {
            resolve({ dataUrl, size: sizeInBytes })
            return
          }
          if (quality > 0.3) {
            quality -= 0.08
          } else {
            width = Math.floor(width * 0.9)
            height = Math.floor(height * 0.9)
            quality = 0.7
          }
          tryCompress()
        }
        tryCompress()
      }
      img.onerror = () => reject(new Error('Image load failed'))
      img.src = imageSrc
    })
  }

  async function handleResize() {
    if (!originalImage) { setError('पहले फोटो अपलोड करें'); return }
    if (targetKB < 5 || targetKB > 1000) { setError('आकार 5 KB से 1000 KB के बीच रखें'); return }
    setError('')
    setProcessing(true)
    try {
      const { dataUrl, size } = await compressImage(originalImage, targetKB)
      setResizedImage(dataUrl)
      setResizedSize(size)
    } catch (err) {
      setError('फोटो प्रोसेस करने में दिक्कत हुई। दूसरी फोटो डालें।')
    } finally {
      setProcessing(false)
    }
  }

  function handleDownload() {
    if (!resizedImage) return
    const link = document.createElement('a')
    link.href = resizedImage
    link.download = `resized-${targetKB}kb.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  function formatSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  function handleReset() {
    setOriginalImage(null)
    setOriginalSize(0)
    setResizedImage(null)
    setResizedSize(0)
    setError('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-bold mb-3">
          🛠️ मुफ्त टूल
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">
          📸 फोटो साइज़ कम करें
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          सरकारी आवेदन के लिए फोटो का आकार KB में बदलें — आसान, मुफ्त और सुरक्षित
        </p>
      </div>

      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 mb-6 text-center">
        <div className="text-sm text-green-800">
          <strong>🔒 100% सुरक्षित:</strong> आपकी फोटो आपके फोन में ही रहती है, कहीं अपलोड नहीं होती
        </div>
      </div>

      <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-5 shadow-sm">
        <h2 className="font-bold text-lg text-gray-800 mb-3">चरण 1: फोटो अपलोड करें</h2>
        {!originalImage ? (
          <label className="block">
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
            <div className="border-3 border-dashed border-orange-300 bg-orange-50 rounded-2xl p-10 text-center cursor-pointer hover:bg-orange-100 transition">
              <div className="text-6xl mb-3">📷</div>
              <div className="font-bold text-lg text-orange-700 mb-1">यहाँ क्लिक करें</div>
              <div className="text-sm text-gray-600">JPG, PNG फोटो चुनें (अधिकतम 10 MB)</div>
            </div>
          </label>
        ) : (
          <div className="space-y-3">
            <div className="aspect-square max-w-xs mx-auto rounded-xl overflow-hidden border-2 border-gray-200">
              <img src={originalImage} alt="Original" className="w-full h-full object-cover" />
            </div>
            <div className="text-center text-sm">
              <span className="text-gray-600">मूल आकार: </span>
              <span className="font-bold text-blue-700">{formatSize(originalSize)}</span>
            </div>
            <button onClick={handleReset} className="w-full text-sm text-red-600 hover:underline">
              ✕ दूसरी फोटो चुनें
            </button>
          </div>
        )}
      </div>

      {originalImage && (
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-5 shadow-sm">
          <h2 className="font-bold text-lg text-gray-800 mb-3">चरण 2: कितना KB चाहिए?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
            {PRESETS.map((preset) => (
              <button
                key={`${preset.label}-${preset.kb}`}
                onClick={() => setTargetKB(preset.kb)}
                className={`p-3 rounded-xl border-2 text-left transition ${
                  targetKB === preset.kb ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-orange-300'
                }`}
              >
                <div className="text-xl mb-1">{preset.emoji}</div>
                <div className="font-bold text-sm text-gray-800">{preset.label}</div>
                <div className="text-xs text-orange-600 font-semibold">{preset.kb} KB</div>
                <div className="text-[10px] text-gray-500 mt-1">{preset.description}</div>
              </button>
            ))}
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <label className="block text-sm font-semibold text-gray-700 mb-2">या कस्टम KB चुनें:</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={targetKB}
                onChange={(e) => setTargetKB(Number(e.target.value) || 0)}
                min="5"
                max="1000"
                className="flex-1 px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none text-base"
              />
              <span className="text-gray-600 font-semibold">KB</span>
            </div>
          </div>
          <button
            onClick={handleResize}
            disabled={processing}
            className="w-full mt-4 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300 text-white font-bold py-3.5 rounded-xl text-base transition flex items-center justify-center gap-2"
          >
            {processing ? (<><span className="animate-spin">⏳</span> प्रोसेस हो रहा है...</>) : (<>🔧 साइज़ कम करें</>)}
          </button>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm mb-5">
          ⚠️ {error}
        </div>
      )}

      {resizedImage && (
        <div className="bg-green-50 rounded-2xl border-2 border-green-300 p-6 mb-5 shadow-sm">
          <h2 className="font-bold text-lg text-green-800 mb-4">✅ चरण 3: तैयार है! डाउनलोड करें</h2>
          <div className="aspect-square max-w-xs mx-auto rounded-xl overflow-hidden border-2 border-green-300 mb-4">
            <img src={resizedImage} alt="Resized" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white rounded-xl p-3 mb-4 text-center">
            <div className="text-sm text-gray-600 mb-1">नया आकार</div>
            <div className="text-2xl font-bold text-green-700">{formatSize(resizedSize)}</div>
            <div className="text-xs text-gray-500 mt-1">
              मूल: {formatSize(originalSize)} → नया: {formatSize(resizedSize)} 
              {' '}({Math.round((1 - resizedSize / originalSize) * 100)}% कम)
            </div>
          </div>
          <button
            onClick={handleDownload}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl text-base transition flex items-center justify-center gap-2"
          >
            📥 फोटो डाउनलोड करें
          </button>
        </div>
      )}

      <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl p-6 text-center">
        <div className="text-3xl mb-2">🌾</div>
        <h3 className="font-bold text-lg mb-2">सरकारी योजनाओं की जानकारी चाहिए?</h3>
        <p className="text-sm text-white/90 mb-4">PM Kisan, Ayushman, e-Shram और कई योजनाएं — आसान हिंदी में</p>
        <Link href="/yojanaen" className="inline-block bg-white text-orange-600 font-bold px-6 py-2.5 rounded-xl hover:bg-gray-100 transition">
          सभी योजनाएं देखें →
        </Link>
      </div>

      <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="font-bold text-gray-800 mb-3">📖 कैसे इस्तेमाल करें?</h3>
        <ol className="space-y-2 text-sm text-gray-700">
          <li><strong>1.</strong> ऊपर &quot;यहाँ क्लिक करें&quot; पर टैप करके अपनी फोटो चुनें</li>
          <li><strong>2.</strong> जिस सरकारी फॉर्म के लिए चाहिए, वो विकल्प चुनें (या KB टाइप करें)</li>
          <li><strong>3.</strong> &quot;साइज़ कम करें&quot; बटन दबाएं</li>
          <li><strong>4.</strong> &quot;डाउनलोड करें&quot; से फोटो सेव करें</li>
        </ol>
      </div>
    </div>
  )
}
