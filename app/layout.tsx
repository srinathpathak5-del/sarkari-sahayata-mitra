import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/layout/WhatsAppButton'
import Ticker from '../components/layout/Ticker'
import MobileEntry from '../components/MobileEntry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'सरकारी सहायता मित्र - Sarkari Yojana Guide',
  description: 'PM Kisan, Ayushman Card, E-Shram की पूरी जानकारी हिंदी में। पात्रता, दस्तावेज और आवेदन प्रक्रिया।',
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
          <WhatsAppButton />
        </MobileEntry>
      </body>
    </html>
  )
}