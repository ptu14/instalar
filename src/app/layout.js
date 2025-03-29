import { Poppins, Ubuntu, Teko, Noto_Sans,Libre_Baskerville,Kaushan_Script } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/style.scss'
import './assets/css/materialdesignicons.min.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight:['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins',
})

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight:['300','400','500','700'],
  variable: '--font-ubuntu',
})
const teko = Teko({ 
  subsets: ['latin'],
  weight:['300','400','500','700'],
  variable: '--font-teko',
})
const noto = Noto_Sans({ 
  subsets: ['latin'],
  weight:['400','700'],
  variable: '--font-noto',
})
const libre = Libre_Baskerville({ 
  subsets: ['latin'],
  weight:['400','700'],
  variable: '--font-libre',
})
const kaushan = Kaushan_Script({ 
  subsets: ['latin'],
  weight:['400'],
  variable: '--font-kaushan',
})

export const metadata = {
  title: 'Komplex System - Instalacje Fotowoltaiczne i Pompy Ciepła | OZE',
  description: 'Profesjonalne instalacje fotowoltaiczne i pompy ciepła ✓ Dotacje Mój Prąd i Czyste Powietrze ✓ Oszczędności na rachunkach ✓ Kompleksowa obsługa',
  keywords: 'fotowoltaika, pompy ciepła, instalacje OZE, dotacje fotowoltaika, Mój Prąd, Czyste Powietrze, panele słoneczne, ekologiczne ogrzewanie, energia odnawialna, dofinansowanie OZE',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  canonical: 'https://komplexsystem.pl/',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://komplexsystem.pl/',
    title: 'Komplex System - Instalacje Fotowoltaiczne i Pompy Ciepła',
    description: 'Profesjonalne instalacje fotowoltaiczne i pompy ciepła. Skorzystaj z dotacji i oszczędzaj na rachunkach. Kompleksowa obsługa od projektu po montaż.',
    images: [
      {
        url: 'https://komplexsystem.pl/images/logo-icon.png',
        width: 800,
        height: 600,
        alt: 'Komplex System Logo',
      }
    ],
    siteName: 'Komplex System',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${poppins.variable} ${ubuntu.variable} ${teko.variable} ${noto.variable} ${libre.variable} ${kaushan.variable}`}>{children}</body>
    </html>
  )
}