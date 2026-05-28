// File location: app/layout.tsx
// CHANGE: Removed Google Fonts network dependency (was causing build failures)
//         Now uses a system font stack — loads instantly, no network needed

import type { Metadata } from 'next'
import './globals.css'
import ClientWrapper from '../components/ClientWrapper'
import GoogleAnalytics from '../components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'सहायता मित्र - Sarkari Yojana Guide',
  description: 'PM Kisan, Ayushman Card, E-Shram की पूरी जानकारी हिंदी में। पात्रता, दस्तावेज और आवेदन प्रक्रिया।',
  keywords: 'PM Kisan, Ayushman Card, E-Shram, सरकारी योजना, sahayata mitra',
  verification: {
    google: 'amhCSHc5Qq-qRLjcV6oVg_SvqIKWWsXHhz9Cc9oSgDM',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <body style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' }}>
        <GoogleAnalytics />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}