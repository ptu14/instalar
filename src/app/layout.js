import { Lexend } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/style.scss'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import GoogleBadge from './components/google-reviews/GoogleBadge'
import FloatingPhone from './components/floating-phone/FloatingPhone'
import CookieBanner from './components/cookie-banner/CookieBanner'
import PromoBanner from './components/promo-banner/PromoBanner'
import promoBanners from './data/promo-banners'

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-lexend',
})

export const metadata = {
  metadataBase: new URL('https://www.komplexsystem.pl'),
  title: 'Komplex System - Instalacje Fotowoltaiczne i Pompy Ciepła | OZE',
  description: 'Profesjonalne instalacje fotowoltaiczne i pompy ciepła ✓ Dotacje Mój Prąd i Czyste Powietrze ✓ Oszczędności na rachunkach ✓ Kompleksowa obsługa',
  keywords: 'fotowoltaika, pompy ciepła, instalacje OZE, dotacje fotowoltaika, Mój Prąd, Czyste Powietrze, panele słoneczne, ekologiczne ogrzewanie, energia odnawialna, dofinansowanie OZE',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {},
  icons: {
    icon: [
      { url: '/icon/favicon.ico' },
      { url: '/icon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/icon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/icon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/icon/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: '/',
    title: 'Komplex System - Instalacje Fotowoltaiczne i Pompy Ciepła',
    description: 'Profesjonalne instalacje fotowoltaiczne i pompy ciepła. Skorzystaj z dotacji i oszczędzaj na rachunkach. Kompleksowa obsługa od projektu po montaż.',
    images: [
      {
        url: '/images/komplex_system.png',
        width: 650,
        height: 413,
        alt: 'Komplex System Logo',
      }
    ],
    siteName: 'Komplex System',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Komplex System - Instalacje Fotowoltaiczne i Pompy Ciepła',
    description: 'Profesjonalne instalacje fotowoltaiczne i pompy ciepła. Skorzystaj z dotacji i oszczędzaj na rachunkach.',
    images: ['/images/komplex_system.png'],
  },
  other: {
    'next-size-adjust': '',
  }
}

// Next.js 16: viewport przeniesiony do osobnej funkcji generateViewport
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        {/* Google Consent Mode v2 - default denied */}
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});` }} />
        {/* End Google Consent Mode v2 */}
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5SJRMFWB');` }} />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) - GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LEEZZFMK2B"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-LEEZZFMK2B');` }} />
        {/* End Google tag */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Komplex System",
          "image": "https://komplexsystem.pl/images/komplex_system.png",
          "url": "https://komplexsystem.pl",
          "telephone": "+48575508698",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Głogoczów 472",
            "addressLocality": "Głogoczów",
            "postalCode": "32-444",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.8945,
            "longitude": 19.8741
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "16:00"
          },
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61573877295855",
            "https://www.linkedin.com/company/komplex-system",
            "https://www.instagram.com/komplexsystem"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+48575508698",
            "contactType": "customer service"
          }
        }
        `}} />
      </head>
      <Analytics />
      <SpeedInsights />
      <body className={`${lexend.variable}`} suppressHydrationWarning={true}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SJRMFWB" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <CookieBanner />
        <PromoBanner banners={promoBanners} />
        {children}
        <div className="position-fixed bottom-0 start-0 m-3" style={{ zIndex: 9999 }}>
          <GoogleBadge />
        </div>
        <div className="position-fixed bottom-0 end-0 m-3" style={{ zIndex: 9999 }}>
          <FloatingPhone />
        </div>
      </body>
    </html>
  )
}