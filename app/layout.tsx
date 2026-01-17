import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: "#171a29",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
