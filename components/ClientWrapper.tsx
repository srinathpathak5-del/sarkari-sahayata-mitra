'use client'
import Ticker from './layout/Ticker'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import MobileEntry from './MobileEntry'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MobileEntry>
      <Ticker />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </MobileEntry>
  )
}