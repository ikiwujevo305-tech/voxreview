// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import Script from "next/script"
// import "./globals.css"

// const inter = Inter({ subsets: ["latin", "latin-ext"] })

// export const metadata: Metadata = {
//   title: "VOX Casino Polska 2026 – Legalne Kasyno + Bonusy Opinie",
//   description:
//     "VOX Casino to nowoczesna platforma z ponad 5000 grami, szybkimi wypłatami BLIK i bonusem powitalnym do 12 000 PLN. Legalne kasyno online z licencją w Polsce 2026.",
//   keywords: "vox casino, kasyno online, kasyno polska, legalne kasyno, blik kasyno, bonus kasynowy, szybkie wypłaty, vox casino recenzja, vox casino no deposit bonus, vox casino free spins",
//   openGraph: {
//     title: "VOX Casino Polska – Legalne Kasyno Online",
//     description: "Odbierz bonus do 12 000 PLN w VOX Casino. Ponad 5000 gier, płatności BLIK, szybkie wypłaty.",
//     type: "website",
//     locale: "pl_PL",
//     url: "https://edufrog.pl/", // добавьте ваш домен
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   // Канонический URL
//   alternates: {
//     canonical: "https://edufrog.pl/",
//   },
// }

// export const viewport = {
//   themeColor: "#171a29",
//   width: "device-width",
//   initialScale: 1,
// }

// // Структурированные данные для SEO
// const structuredData = {
//   "@context": "https://schema.org",
//   "@type": "Casino",
//   "name": "VOX Casino",
//   "description": "Legalne kasyno online w Polsce z bonusem do 12 000 PLN i wypłatami BLIK",
//   "url": "https://edufrog.pl/",
//   "logo": "https://edufrog.pl/logo.png",
//   "sameAs": [
//     "https://facebook.com/voxcasino",
//     "https://twitter.com/voxcasino"
//   ],
//   "address": {
//     "@type": "PostalAddress",
//     "addressCountry": "PL"
//   },
//   "openingHours": "Mo-Su 00:00-24:00",
//   "paymentAccepted": ["BLIK", "Credit Card", "Przelewy24"],
//   "currenciesAccepted": ["PLN"],
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "ratingValue": "4.4",
//     "reviewCount": "1257",
//     "bestRating": "5"
//   }
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="pl">
//       <head>
//         {/* Google Analytics */}
//         <Script
//           strategy="afterInteractive"
//           src="https://www.googletagmanager.com/gtag/js?id=G-6B6SBXKTWR"
//         />
//         <Script
//           id="google-analytics"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-6B6SBXKTWR');
//             `,
//           }}
//         />

//         {/* Структурированные данные */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//         />

//         {/* Каноническая ссылка */}
//         <link rel="canonical" href="https://edufrog.pl/" />

//         {/* Дополнительные метатеги */}
//         <meta name="geo.region" content="PL" />
//         <meta name="geo.placename" content="Polska" />
//         <meta name="language" content="pl" />
//         <meta name="rating" content="Adult" />
//         <meta name="revisit-after" content="2 days" />
//         <meta name="copyright" content="VOX Casino" />
        
//         {/* Для мобильных устройств */}
//         <meta name="mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
//       </head>
//       <body className={`${inter.className} antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }





// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import Script from "next/script"
// import "./globals.css"

// const inter = Inter({ subsets: ["latin", "latin-ext"] })

// export const metadata: Metadata = {
//   title: "VOX Casino Polska 2026 – Legalne Kasyno + Bonusy Opinie",
//   description:
//     "VOX Casino to nowoczesna platforma z ponad 5000 grami, szybkimi wypłatami BLIK i bonusem powitalnym do 12 000 PLN. Legalne kasyno online z licencją w Polsce 2026.",
//   keywords: "vox casino, kasyno online, kasyno polska, legalne kasyno, blik kasyno, bonus kasynowy, szybkie wypłaty, vox casino recenzja, vox casino no deposit bonus, vox casino free spins",
//   openGraph: {
//     title: "VOX Casino Polska – Legalne Kasyno Online",
//     description: "Odbierz bonus do 12 000 PLN w VOX Casino. Ponad 5000 gier, płatności BLIK, szybkie wypłaty.",
//     type: "website",
//     locale: "pl_PL",
//     url: "https://edufrog.pl/",
//     images: [
//       {
//         url: "https://edufrog.pl/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "VOX Casino - Legalne Kasyno Online w Polsce",
//       },
//     ],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   alternates: {
//     canonical: "https://edufrog.pl/",
//   },
// }

// export const viewport = {
//   themeColor: "#171a29",
//   width: "device-width",
//   initialScale: 1,
// }

// // Структурированные данные для SEO
// const structuredData = {
//   "@context": "https://schema.org",
//   "@type": "Casino",
//   "name": "VOX Casino",
//   "description": "Legalne kasyno online w Polsce z bonusem do 12 000 PLN i wypłatami BLIK",
//   "url": "https://edufrog.pl/",
//   "logo": "https://edufrog.pl/logo.png",
//   "sameAs": [
//     "https://facebook.com/voxcasino",
//     "https://twitter.com/voxcasino"
//   ],
//   "address": {
//     "@type": "PostalAddress",
//     "addressCountry": {
//       "@type": "Country",
//       "name": "PL"
//     },
//     // Добавленные недостающие поля для PostalAddress
//     "postalCode": "00-001", // Замените на реальный почтовый индекс
//     "streetAddress": "ul. Marszałkowska 67", // Замените на реальный адрес
//     "addressLocality": "Warszawa" // Замените на реальный город
//   },
//   "openingHours": "Mo-Su 00:00-24:00",
//   "paymentAccepted": ["BLIK", "Credit Card", "Przelewy24"],
//   "currenciesAccepted": ["PLN"],
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "ratingValue": "4.7",
//     "reviewCount": "1250",
//     "bestRating": "5"
//   },
//   // Добавленные необязательные поля
//   "telephone": "+48 333 451 389",
//   "priceRange": "$$",
//   "image": "https://edufrog.pl/logo2.png"
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="pl">
//       <head>
//         {/* Google Analytics */}
//         <Script
//           strategy="afterInteractive"
//           src="https://www.googletagmanager.com/gtag/js?id=G-6B6SBXKTWR"
//         />
//         <Script
//           id="google-analytics"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-6B6SBXKTWR');
//             `,
//           }}
//         />

//         {/* Структурированные данные */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//         />

//         {/* Каноническая ссылка */}
//         <link rel="canonical" href="https://edufrog.pl/" />

//         {/* Дополнительные метатеги */}
//         <meta name="geo.region" content="PL" />
//         <meta name="geo.placename" content="Polska" />
//         <meta name="language" content="pl" />
//         <meta name="rating" content="Adult" />
//         <meta name="revisit-after" content="2 days" />
//         <meta name="copyright" content="VOX Casino" />
        
//         {/* Для мобильных устройств */}
//         <meta name="mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
//       </head>
//       <body className={`${inter.className} antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }



import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

// Данные для FAQ (те же вопросы, что и в компоненте FAQ)
const faqs = [
  {
    question: "Czy VOX Casino jest legalne w Polsce?",
    answer:
      "VOX Casino działa na podstawie międzynarodowej licencji hazardowej wydanej przez rząd Curacao (numer licencji 8048/JAZ). Chociaż nie posiadamy polskiej licencji, możesz legalnie grać na naszej platformie jako gracz z Polski. Licencja Curacao gwarantuje uczciwe warunki gry, bezpieczeństwo danych osobowych i finansowych oraz przestrzeganie międzynarodowych standardów odpowiedzialnej gry.",
  },
  {
    question: "Jak długo trwa weryfikacja konta?",
    answer:
      "Standardowa weryfikacja konta w VOX Casino zajmuje od 12 do 24 godzin roboczych. Proces wymaga przesłania dokumentu tożsamości (dowód osobisty, paszport lub prawo jazdy) oraz potwierdzenia adresu zamieszkania (rachunek za media, wyciąg bankowy nie starszy niż 3 miesiące). W większości przypadków weryfikacja jest zakończona tego samego dnia. Weryfikacja jest wymagana tylko raz, przed pierwszą wypłatą środków. Gracze VIP mogą liczyć na ekspresową weryfikację w ciągu kilku godzin.",
  },
  {
    question: "Jakie są minimalne i maksymalne limity wypłat?",
    answer:
      "Minimalna kwota wypłaty w VOX Casino wynosi 50 PLN dla wszystkich metod płatności. Maksymalne limity zależą od statusu VIP: gracze standardowi mogą wypłacić do 5,000 PLN dziennie (30,000 PLN miesięcznie), gracze Silver do 10,000 PLN dziennie, Gold do 25,000 PLN dziennie, a gracze Platinum i Diamond nie mają limitów wypłat. Dla kryptowalut limity są wyższe - do 50,000 PLN dziennie dla graczy standardowych. Wszystkie limity są automatycznie zwiększane wraz z awansem w programie VIP.",
  },
  {
    question: "Czy mogę grać na VOX Casino na urządzeniach mobilnych?",
    answer:
      "Tak! VOX Casino oferuje pełną kompatybilność mobilną. Możesz grać bezpośrednio w przeglądarce mobilnej (działa na iOS, Android i innych systemach) или pobrać naszą dedykowaną aplikację mobilną. Aplikacja jest dostępna na Androida (APK do pobrania na stronie) i iOS (dostępna w App Store). Wersja mobilna oferuje dostęp do wszystkich 5000+ gier, pełnej funkcjonalności konta, metod płatności i obsługi klienta. Interfejs jest w pełni zoptymalizowany pod ekrany dotykowe, zapewniając płynne i wygodne granie w każdym miejscu.",
  },
  {
    question: "Jakie są warunki bonusu powitalnego?",
    answer:
      "Pakiet powitalny VOX Casino składa się z 4 bonusów depozytowych: 1) 100% do 1500 PLN + 50 darmowych spinów przy pierwszym depozycie min. 50 PLN, 2) 75% do 1200 PLN + 50 FS przy drugim depozycie min. 100 PLN, 3) 50% do 1300 PLN + 50 FS przy trzecim depozycie min. 150 PLN, 4) 25% do 1000 PLN + 50 FS przy czwartym depozycie min. 200 PLN. Warunki obrotu wynoszą x40 dla bonusu i x40 dla wygranych z darmowych spinów. Maksymalny zakład z aktywnym bonusem to 20 PLN. Bonus jest ważny przez 30 dni od aktywacji. Darmowe spiny są przyznawane na popularne sloty Pragmatic Play.",
  },
  {
    question: "Jak skontaktować się z obsługą klienta?",
    answer:
      "Obsługa klienta VOX Casino jest dostępna 24/7 w języku polskim przez kilka kanałów: Czat na żywo (najszybsza opcja, średni czas odpowiedzi 30 sekund), Email: support@voxcasino.com (odpowiedź w ciągu 2-4 godzin), Telefon: +48 22 123 4567 (połączenia w godzinach 8:00-22:00 CET). Gracze VIP mają dostęp do dedykowanego menedżera konta z priorytetowym wsparciem. Wszystkie zapytania są obsługiwane przez profesjonalny zespół znający platformę na wylot.",
  },
  {
    question: "Czy w VOX Casino mogę grać w darmowe gry?",
    answer:
      "Absolutnie! Większość gier w VOX Casino (poza grami Live Casino) jest dostępna w trybie demo, który pozwala grać za wirtualne środki bez konieczności rejestracji czy wpłaty. To idealna opcja, żeby przetestować nowe gry, poznać ich mechanikę i funkcje bonusowe zanim zagrasz na prawdziwe pieniądze. Tryb demo oferuje dokładnie taką samą rozgrywkę jak wersja za prawdziwe środki, z tym samym RTP i funkcjami. Możesz bez ograniczeń testować sloty, gry stołowe i inne tytuły.",
  },
  {
    question: "Jak działa program lojalnościowy VIP?",
    answer:
      "Program VIP w VOX Casino składa się z 5 poziomów: Bronze (start), Silver (5,000 PLN obrotu), Gold (50,000 PLN), Platinum (250,000 PLN) i Diamond (1,000,000 PLN). Każdy poziom oferuje lepsze korzyści: wyższe cashbacki (od 5% do 20%), szybsze wypłaty, wyższe limity, personalizowane bonusy, dedykowanego menedżera VIP, zaproszenia na ekskluzywne wydarzenia i turnieje. Punkty lojalnościowe zdobywasz za każdą obróconą złotówkę (1 PLN = 1 punkt), które możesz wymieniać na bonusy gotówkowe. Status VIP jest permanentny - raz osiągnięty, zachowujesz go na zawsze.",
  },
]

export const metadata: Metadata = {
  title: "VOX Casino Polska 2026 – Legalne Kasyno + Bonusy Opinie",
  description:
    "VOX Casino to nowoczesna platforma z ponad 5000 grami, szybkimi wypłatami BLIK i bonusem powitalnym do 12 000 PLN. Legalne kasyno online z licencją w Polsce 2026.",
  keywords: "vox casino, kasyno online, kasyno polska, legalne kasyno, blik kasyno, bonus kasynowy, szybkie wypłaty, vox casino recenzja, vox casino no deposit bonus, vox casino free spins",
  openGraph: {
    title: "VOX Casino Polska – Legalne Kasyno Online",
    description: "Odbierz bonus do 12 000 PLN w VOX Casino. Ponad 5000 gier, płatności BLIK, szybkie wypłaty.",
    type: "website",
    locale: "pl_PL",
    url: "https://edufrog.pl/",
    images: [
      {
        url: "https://edufrog.pl/og-image.png",
        width: 1200,
        height: 630,
        alt: "VOX Casino - Legalne Kasyno Online w Polsce",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://edufrog.pl/",
  },
}

export const viewport = {
  themeColor: "#171a29",
  width: "device-width",
  initialScale: 1,
}

// Основные структурированные данные для Casino
const casinoStructuredData = {
  "@context": "https://schema.org",
  "@type": "Casino",
  "name": "VOX Casino",
  "description": "Legalne kasyno online w Polsce z bonusem do 12 000 PLN i wypłatami BLIK",
  "url": "https://edufrog.pl/",
  "logo": "https://edufrog.pl/logo.png",
  "sameAs": [
    "https://facebook.com/voxcasino",
    "https://twitter.com/voxcasino"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": {
      "@type": "Country",
      "name": "PL"
    },
    "postalCode": "00-001",
    "streetAddress": "ul. Przykładowa 123",
    "addressLocality": "Warszawa"
  },
  "openingHours": "Mo-Su 00:00-24:00",
  "paymentAccepted": ["BLIK", "Credit Card", "Przelewy24"],
  "currenciesAccepted": ["PLN"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "1250",
    "bestRating": "5"
  },
  "telephone": "+48 333 451 389",
  "priceRange": "$$",
  "image": "https://edufrog.pl/logo2.png"
}

// Структурированные данные для FAQ
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

// Собираем все структурированные данные в один массив
const allStructuredData = [
  casinoStructuredData,
  faqStructuredData
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-6B6SBXKTWR"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6B6SBXKTWR');
            `,
          }}
        />

        {/* Структурированные данные - вставляем все в один тег script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(allStructuredData) }}
        />

        {/* Альтернативный вариант: несколько тегов script */}
        {/* 
        {allStructuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))} 
        */}

        {/* Каноническая ссылка */}
        <link rel="canonical" href="https://edufrog.pl/" />

        {/* Дополнительные метатеги */}
        <meta name="geo.region" content="PL" />
        <meta name="geo.placename" content="Polska" />
        <meta name="language" content="pl" />
        <meta name="rating" content="Adult" />
        <meta name="revisit-after" content="2 days" />
        <meta name="copyright" content="VOX Casino" />
        
        {/* Для мобильных устройств */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Дополнительные SEO теги */}
        <meta name="author" content="VOX Casino" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:site_name" content="VOX Casino" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:country-name" content="Polska" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@voxcasino" />
        <meta name="twitter:creator" content="@voxcasino" />
        <meta name="twitter:title" content="VOX Casino Polska – Legalne Kasyno Online" />
        <meta name="twitter:description" content="Odbierz bonus do 12 000 PLN w VOX Casino. Ponad 5000 gier, płatności BLIK, szybkie wypłaty." />
        <meta name="twitter:image" content="https://edufrog.pl/og-image.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}