import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientWrapper from '../components/ClientWrapper'

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
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}