// File location: components/ClientWrapper.tsx
// CHANGE: Removed MobileEntry wrapper — visitors now land directly on the homepage
// The new lead-capture modal (Name + Mobile + Pincode) still appears when users click
// "जानकारी" on any scheme, or when they visit the eligibility page.

'use client'
import Ticker from './layout/Ticker'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Ticker />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}