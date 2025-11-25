import { Poppins, Ubuntu, Teko, Noto_Sans, Libre_Baskerville, Kaushan_Script, Lexend } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/style.scss'
import './assets/css/materialdesignicons.min.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import GoogleBadge from './components/google-reviews/GoogleBadge'

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-lexend',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
})
const teko = Teko({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-teko',
})
const noto = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto',
})
const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
})
const kaushan = Kaushan_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-kaushan',
})

export const metadata = {
  metadataBase: new URL('https://komplexsystem.pl'),
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
  alternates: {
    canonical: '/',
  },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Komplex System",
          "url": "https://komplexsystem.pl",
          "logo": "https://komplexsystem.pl/images/komplex_system.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+48785076979",
            "contactType": "customer service"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Głogoczów 472",
            "addressLocality": "Głogoczów",
            "postalCode": "32-444",
            "addressCountry": "PL"
          }
        }
        `}} />
      </head>
      <Analytics />
      <SpeedInsights />
      <body className={`${lexend.variable} ${ubuntu.variable} ${teko.variable} ${noto.variable} ${libre.variable} ${kaushan.variable}`}>
        {children}
        <div className="position-fixed bottom-0 start-0 m-3" style={{ zIndex: 9999 }}>
          <GoogleBadge />
        </div>
      </body>
    </html>
  )
}