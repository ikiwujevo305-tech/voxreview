"use client"
import { Gift, Crown, Wallet, Headphones, Lock, Rocket } from "lucide-react"
import Link from "next/link"

export function Benefits() {
  const benefits = [
    {
      icon: Gift,
      title: "Pakiet Powitalny",
      description: "Do 12 000 PLN bonusu + setki darmowych spinów dla nowych graczy",
    },
    {
      icon: Crown,
      title: "Program VIP",
      description: "Ekskluzywne przywileje, cashback do 15% i osobisty manager dla lojalnych graczy",
    },
    {
      icon: Wallet,
      title: "BLIK i Krypto",
      description: "Natychmiastowe wpłaty i wypłaty bez prowizji - 100% bezpieczeństwa",
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description: "Polski zespół wsparcia dostępny całą dobę przez Live Chat i e-mail",
    },
    {
      icon: Lock,
      title: "Licencja Curacao",
      description: "Legalne kasyno online z międzynarodową licencją i certyfikatami bezpieczeństwa",
    },
    {
      icon: Rocket,
      title: "Aplikacja Mobilna",
      description: "Graj gdziekolwiek jesteś - pobierz aplikację VOX Casino na Android i iOS",
    },
  ]

  return (
    <section id="bonusy" className="py-20 px-4 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Twoje Korzyści w VOX Casino</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
  <style jsx>{`
    @keyframes glow {
      0% {
        filter: brightness(1) drop-shadow(0 0 5px rgba(245, 158, 11, 0.5));
      }
      100% {
        filter: brightness(1.2) drop-shadow(0 0 20px rgba(245, 158, 11, 0.8));
      }
    }
    .glowing-text {
      animation: glow 2s ease-in-out infinite alternate;
    }
  `}</style>
  
  <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 p-1 rounded-2xl relative">
    {/* Неоновое свечение */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-2xl blur-xl opacity-60 animate-pulse"></div>
    
    <Link href="/play" className="block">
  <div className="relative bg-[#171a29] rounded-2xl px-8 py-6 overflow-hidden group cursor-pointer hover:bg-[#1a1e32] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/10">
    {/* Светящиеся градиенты по углам */}
    <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-amber-500/30 to-transparent rounded-full blur-lg group-hover:from-amber-500/50 group-hover:scale-110 transition-all duration-500"></div>
    <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-tl from-amber-600/30 to-transparent rounded-full blur-lg group-hover:from-amber-600/50 group-hover:scale-110 transition-all duration-500"></div>
    
    <p className="text-gray-400 mb-2 relative z-10 group-hover:text-gray-300 transition-colors">
      Łączna wartość bonusów powitalnych
    </p>
    <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 glowing-text relative z-10 group-hover:from-amber-300 group-hover:to-amber-500 transition-all duration-300">
      12 000 PLN
    </p>
    
    {/* Анимированные линии свечения */}
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-amber-400 rounded-full animate-ping group-hover:bg-amber-300"></div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping animation-delay-500 group-hover:bg-amber-300"></div>
    </div>
    
    {/* Стрелка или индикатор клика */}
    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
        <svg 
          className="w-4 h-4 text-amber-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  </div>
</Link>
  </div>
</div>
      </div>
    </section>
  )
}
