'use client'
import dynamic from 'next/dynamic'
import Ticker from './layout/Ticker'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

const MobileEntry = dynamic(() => import('./MobileEntry'), { ssr: false })

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