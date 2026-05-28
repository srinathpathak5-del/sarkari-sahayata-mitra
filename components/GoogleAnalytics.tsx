// File location: components/GoogleAnalytics.tsx
// Loads BOTH Google Analytics (G-JTLRHX2HT9) AND Google Ads (AW-18195168856) tags
// This enables visitor tracking AND ads conversion tracking

'use client'
import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-JTLRHX2HT9'      // Google Analytics
const GOOGLE_ADS_ID = 'AW-18195168856'         // Google Ads conversion tracking

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tags" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  )
}