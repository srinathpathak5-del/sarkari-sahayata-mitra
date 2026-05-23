'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import schemesData from '../../data/schemes.json'

const NAV_LINKS = [
  { href: '/',              label: '🏠 होम' },
  { href: '/yojanaen',     label: '📋 योजनाएं' },
  { href: '/loan',         label: '🏦 लोन' },
  { href: '/insurance',    label: '🛡️ बीमा' },
  { href: '/patrata-janch',label: '✅ पात्रता' },
  { href: '/dastavej',     label: '📄 दस्तावेज' },
  { href: '/about',        label: 'ℹ️ हमारे बारे में' },
]

export default function Navbar() {
  const [open, setOpen]           = useState(false)
  const [search, setSearch]       = useState('')
  const [results, setResults]     = useState<typeof schemesData.schemes>([])
  const [showSearch, setShowSearch] = useState(false)
  const path   = usePathname()
  const router = useRouter()
  const ref    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (search.trim().length < 1) { setResults([]); return }
    const q = search.toLowerCase()
    setResults(schemesData.schemes.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.tag.includes(q) ||
      s.shortDesc.toLowerCase().includes(q)
    ))
  }, [search])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShowSearch(false); setSearch(''); setResults([])
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  function handleSelect(slug: string) {
    setShowSearch(false); setSearch(''); setResults([]); setOpen(false)
    router.push(`/yojana/${slug}`)
  }

  return (
    <nav className="bg-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl">🇮🇳</span>
          <div>
            <div className="font-bold text-sm leading-tight">सरकारी सहायता मित्र</div>
            <div className="text-xs text-blue-300 hidden sm:block">Sarkari Sahayata Mitra</div>
          </div>
        </Link>

        {/* Search — desktop */}
        <div ref={ref} className="relative hidden md:block flex-1 max-w-xs">
          <div className="flex items-center bg-blue-700 rounded-xl px-3 py-2 gap-2">
            <span className="text-blue-300 text-sm">🔍</span>
            <input
              value={search}
              onChange={e => { setSearch(e.target.value); setShowSearch(true) }}
              onFocus={() => setShowSearch(true)}
              placeholder="योजना खोजें..."
              className="bg-transparent text-white placeholder-blue-300 text-sm focus:outline-none w-full"
            />
            {search && (
              <button onClick={() => { setSearch(''); setResults([]) }}
                className="text-blue-300 hover:text-white">✕</button>
            )}
          </div>
          {showSearch && results.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white rounded-xl shadow-2xl mt-1 overflow-hidden z-50 max-h-72 overflow-y-auto">
              {results.map(s => (
                <button key={s.id} onClick={() => handleSelect(s.slug)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition border-b last:border-0 text-left">
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{s.name}</div>
                    <div className="text-xs text-gray-500">{s.benefit} • {s.tag}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
          {showSearch && search.length > 1 && results.length === 0 && (
            <div className="absolute top-full left-0 right-0 bg-white rounded-xl shadow-xl mt-1 p-4 text-center text-sm text-gray-500 z-50">
              कोई योजना नहीं मिली 😔
            </div>
          )}
        </div>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-0.5 text-xs shrink-0">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`px-2 py-1.5 rounded-lg transition whitespace-nowrap ${
                path === href ? 'bg-white text-blue-800 font-bold' : 'hover:bg-blue-700'
              }`}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile icons */}
        <div className="flex items-center gap-2 xl:hidden">
          <button onClick={() => { setShowSearch(s => !s); setOpen(false) }}
            className="bg-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-600 transition text-sm">
            🔍
          </button>
          <button onClick={() => { setOpen(o => !o); setShowSearch(false) }}
            className="text-2xl" aria-label="Menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile search */}
      {showSearch && (
        <div className="xl:hidden px-4 pb-3">
          <div className="flex items-center bg-blue-700 rounded-xl px-3 py-2 gap-2">
            <span className="text-blue-300 text-sm">🔍</span>
            <input autoFocus value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="योजना खोजें..."
              className="bg-transparent text-white placeholder-blue-300 text-sm focus:outline-none w-full" />
            {search && (
              <button onClick={() => { setSearch(''); setResults([]) }}
                className="text-blue-300 hover:text-white">✕</button>
            )}
          </div>
          {results.length > 0 && (
            <div className="bg-white rounded-xl shadow-2xl mt-1 overflow-hidden max-h-64 overflow-y-auto">
              {results.map(s => (
                <button key={s.id} onClick={() => handleSelect(s.slug)}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition border-b last:border-0 text-left">
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{s.name}</div>
                    <div className="text-xs text-gray-500">{s.benefit} • {s.tag}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
          {search.length > 1 && results.length === 0 && (
            <div className="bg-white rounded-xl shadow-xl mt-1 p-4 text-center text-sm text-gray-500">
              कोई योजना नहीं मिली 😔
            </div>
          )}
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-blue-900 px-4 pb-4 grid grid-cols-2 gap-2">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm ${
                path === href ? 'bg-white text-blue-800 font-bold' : 'hover:bg-blue-700'
              }`}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}