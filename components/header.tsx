"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#171a29]/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-10 md:w-40 md:h-12">
              <Image
                src="/logo2.webp"
                alt="VOX Casino logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#gry" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Gry
            </Link>
            <Link href="#bonusy" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Bonusy
            </Link>
            <Link href="#aplikacja" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Aplikacja
            </Link>
            <Link href="#rezenzja" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Recenzja
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Polityka Prywatności
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Кнопки для скачивания */}
            <Link href="/play">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                Zaloguj
              </Button>
            </Link>
            <Link href="/play">
              <Button className="bg-amber-500 text-black hover:bg-amber-600 font-semibold">
                Zarejestruj się
              </Button>
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#gry"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gry
              </Link>
              <Link
                href="#bonusy"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Bonusy
              </Link>
              <Link
                href="#aplikacja"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Aplikacja
              </Link>
              <Link
                href="#rezenzja"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Recenzja
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Polityka Prywatności
              </Link>
              
              {/* Кнопки для скачивания в мобильном меню */}
              <div className="flex flex-col gap-3 pt-4">
                <Link href="/play" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    Zaloguj
                  </Button>
                </Link>
                <Link href="/play" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-amber-500 text-black hover:bg-amber-600 font-semibold">
                    Zarejestruj się
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}