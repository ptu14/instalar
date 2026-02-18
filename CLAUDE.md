# CLAUDE.md - Komplex System

## Projekt

Strona internetowa firmy **Komplex System** - profesjonalne instalacje OZE (fotowoltaika, pompy ciepła, magazyny energii, klimatyzacja) w Małopolsce. Główny cel: generowanie leadów i pozycjonowanie lokalne (SEO).

- **Domena:** https://www.komplexsystem.pl
- **Stack:** Next.js 16 (App Router) + React 19 + Bootstrap 5 + SASS
- **Deploy:** Vercel
- **Język treści:** polski

## Komendy

```bash
npm run dev      # Serwer deweloperski (Turbopack)
npm run build    # Build produkcyjny
npm run start    # Serwer produkcyjny
npm run lint     # ESLint
```

## Struktura projektu

```
src/app/
├── api/                    # Endpointy API (contact, get-images, reviews)
├── assets/scss/            # Style SASS (modularna architektura)
├── components/             # Komponenty React
│   ├── navbar/             # Nawigacja
│   ├── footer/             # Stopka
│   ├── contact-form/       # Formularz kontaktowy (lead gen)
│   ├── business/           # Hero slider, counter, video, CTA
│   ├── google-reviews/     # Karuzela opinii Google
│   ├── regional/           # Szablony stron regionalnych
│   └── floating-phone/     # Pływający widget telefonu
├── data/                   # Dane statyczne (regions.json, services.js, reviews.js)
├── oferta/                 # Strony usług + dynamiczne strony regionalne
│   └── [service]/[region]/ # 20 stron regionalnych (5 regionów × 4 usługi)
├── dotacje/                # Strony dotacji (Mój Prąd, Czyste Powietrze, Moje Ciepło)
├── blog/[slug]/            # Blog z dynamicznym routingiem
├── realizacje/             # Galeria realizacji
├── kontakt/                # Strona kontaktowa
├── layout.js               # Root layout (metadata, Schema.org, Analytics)
├── page.js                 # Strona główna
└── sitemap.js              # Dynamiczny sitemap XML
```

## Kluczowe wzorce

### Architektura regionalna
- Dane regionów w `src/app/data/regions.json` (5 regionów Małopolski)
- Dynamiczny routing: `/oferta/[service]/[region]/page.js`
- Reużywalny komponent: `RegionalServicePage.js`
- Każdy region ma: miasta docelowe, kontekst SEO, unikalne korzyści, lokalne wyzwania

### Komponenty
- **Server Components** - domyślnie (strony, layouty)
- **Client Components** - oznaczone `"use client"` (formularze, interaktywne elementy)
- Obrazy: Next.js `<Image>` z Cloudinary dla zdalnych, `/public/images/` dla lokalnych

### Style
- Bootstrap 5 (grid, utilities) + niestandardowe SCSS
- Font: Lexend (Google Fonts, zmienna CSS `--font-lexend`)
- Klasa `.text-balance` dla wyrównania tekstu

### Formularze i email
- Formularz kontaktowy: telefon + opcjonalny email
- API: `POST /api/contact` → Nodemailer (Gmail SMTP)
- Zmienne env: `GMAIL_USER`, `GMAIL_APP_PASS`, `CONTACT_EMAIL`

### SEO
- Rozbudowane metadata w każdej stronie
- Schema.org JSON-LD (LocalBusiness)
- Dynamiczny sitemap z regionalnymi stronami
- Self-referencing canonical URLs na stronach regionalnych
- Alt attributes na wszystkich obrazach

## Konwencje

- **Język kodu:** JavaScript (bez TypeScript)
- **Komentarze:** po polsku
- **Importy:** alias `@/*` → `./src/*`
- **React Strict Mode:** wyłączony
- **Obrazy zdalne:** dozwolone domeny: `jakoszczedzacpieniadze.pl`, `komplexsystem.com`, `res.cloudinary.com`

## Zmienne środowiskowe

Wymagane w `.env.local` (wzór w `.env.local.example`):
- `GMAIL_USER` / `GMAIL_APP_PASS` - dane do wysyłki maili
- `CONTACT_EMAIL` - adres odbiorcy formularza
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` / `CLOUDINARY_API_KEY` / `CLOUDINARY_API_SECRET`
