import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Ticker from '../components/layout/Ticker'
import dynamic from 'next/dynamic'

// Load MobileEntry only on client side — fixes the loading issue
const MobileEntry = dynamic(() => import('../components/MobileEntry'), {
  ssr: false,
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'सरकारी सहायता मित्र - Sarkari Yojana Guide',
  description: 'PM Kisan, Ayushman Card, E-Shram की पूरी जानकारी हिंदी में।',
  keywords: 'PM Kisan, Ayushman Card, E-Shram, सरकारी योजना',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <body className={inter.className}>
        <MobileEntry>
          <Ticker />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MobileEntry>
      </body>
    </html>
  )
}