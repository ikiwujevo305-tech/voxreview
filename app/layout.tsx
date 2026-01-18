import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "VOX Casino Polska 2026 – Legalne Kasyno Online BLIK",
  description:
    "VOX Casino to nowoczesna platforma hazardowa z ponad 5000 grami, szybkimi wypłatami BLIK i bonusem powitalnym do 12 000 PLN. Legalne kasyno online z licencją.",
  keywords: "vox casino, kasyno online, kasyno polska, legalne kasyno, blik kasyno, bonus kasynowy, szybkie wypłaty",
  openGraph: {
    title: "VOX Casino Polska – Legalne Kasyno Online",
    description: "Odbierz bonus do 12 000 PLN w VOX Casino. Ponad 5000 gier, płatności BLIK, szybkie wypłaty.",
    type: "website",
    locale: "pl_PL",
    url: "https://edufrog.pl/", // добавьте ваш домен
  },
  robots: {
    index: true,
    follow: true,
  },
  // Канонический URL
  alternates: {
    canonical: "https://edufrog.pl/",
  },
}

export const viewport = {
  themeColor: "#171a29",
  width: "device-width",
  initialScale: 1,
}

// Структурированные данные для SEO
const structuredData = {
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
    "addressCountry": "PL"
  },
  "openingHours": "Mo-Su 00:00-24:00",
  "paymentAccepted": ["BLIK", "Credit Card", "Przelewy24"],
  "currenciesAccepted": ["PLN"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "1250",
    "bestRating": "5"
  }
}

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

        {/* Структурированные данные */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

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
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}