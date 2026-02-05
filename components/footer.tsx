import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const partners = [
    { name: "Pragmatic Play", logo: "/VISA.svg" },
    { name: "Evolution", logo: "/MasterCard.svg" },
    { name: "NetEnt", logo: "/Blik.svg" },
    { name: "Play'n GO", logo: "/Bitcoin.svg" },
    { name: "Microgaming", logo: "/Paysafecard.svg" }
  ]

  return (
    <footer className="border-t border-white/10 bg-black/40 py-12 px-4">
      <div className="container mx-auto">

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            {/* Логотип вместо текста */}
            <div className="relative w-40 h-16 mb-4">
              <Image
                src="/logo2.webp" // Замените на путь к вашему логотипу
                alt="VOX Casino"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Szybkie Linki</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#gry" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Gry hazardowe
                </Link>
              </li>
              <li>
                <Link href="#bonusy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Bonusy i promocje
                </Link>
              </li>
              <li>
                <Link href="#aplikacja" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Aplikacja mobilna
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Metody Płatności</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>BLIK</li>
              <li>Visa / Mastercard</li>
              <li>Bitcoin / Kryptowaluty</li>
              <li>Przelewy bankowe</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt 24/7</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MessageCircle className="w-4 h-4 text-amber-500" />
                <span>Live Chat</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>support@voxcasino.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Логотипы партнеров */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div key={partner.name} className="relative w-32 h-12 grayscale hover:grayscale-0 transition-all">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 VOX Casino. Wszelkie prawa zastrzeżone. Graj odpowiedzialnie.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span>Licencja Curacao</span>
              <span>•</span>
              <span>18+</span>
            </div>
          </div>

          <p className="text-gray-600 text-xs mt-4 text-center leading-relaxed max-w-4xl mx-auto">
            Hazard wiąże się z ryzykiem. Graj odpowiedzialnie i tylko wtedy, gdy możesz sobie na to pozwolić. Jeśli
            uważasz, że masz problem z hazardem, skontaktuj się z organizacjami oferującymi pomoc.
          </p>
        </div>
      </div>
    </footer>
  )
}