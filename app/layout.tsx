// File location: app/layout.tsx
// CHANGE: Added GoogleAnalytics component to track visitors on every page

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientWrapper from '../components/ClientWrapper'
import GoogleAnalytics from '../components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'सहायता मित्र - Sarkari Yojana Guide',
  description: 'PM Kisan, Ayushman Card, E-Shram की पूरी जानकारी हिंदी में। पात्रता, दस्तावेज और आवेदन प्रक्रिया।',
  keywords: 'PM Kisan, Ayushman Card, E-Shram, सरकारी योजना, sahayata mitra',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <body className={inter.className}>
        <GoogleAnalytics />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}