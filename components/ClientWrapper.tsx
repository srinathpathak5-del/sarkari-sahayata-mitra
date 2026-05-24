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