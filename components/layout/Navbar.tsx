'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/',               label: '🏠 होम' },
  { href: '/yojanaen',       label: '📋 योजनाएं' },
  { href: '/patrata-janch',  label: '✅ पात्रता जांच' },
  { href: '/dastavej',       label: '📄 दस्तावेज' },
  { href: '/about',          label: 'ℹ️ हमारे बारे में' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const path = usePathname()

  return (
    <nav className="bg-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🇮🇳</span>
          <div>
            <div className="font-bold text-sm">सरकारी सहायता मित्र</div>
            <div className="text-xs text-blue-300 hidden sm:block">Sarkari Sahayata Mitra</div>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-1 text-sm">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`px-3 py-1.5 rounded-lg transition ${path === href ? 'bg-white text-blue-800 font-bold' : 'hover:bg-blue-700'}`}>
              {label}
            </Link>
          ))}
        </div>
        <button className="lg:hidden text-2xl" onClick={() => setOpen(o => !o)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-blue-900 px-4 pb-4 grid grid-cols-2 gap-2">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm ${path === href ? 'bg-white text-blue-800 font-bold' : 'hover:bg-blue-700'}`}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}