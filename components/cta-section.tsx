import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link" // Добавляем импорт Link

export function CtaSection() {
  return (
    <section id="aplikacja" className="py-20 px-4 relative">
      {/* Фоновое изображение */}
      <div className="absolute inset-0">
        <img 
          src="/banner2.png" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-3xl p-8 md:p-12 mb-8 text-center relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(251,191,36,0.15),transparent_60%)]"></div>
            
            <div className="relative z-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
                Zacznij Wygrywać Już Dziś!
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-balance">
                Dołącz do tysięcy graczy, którzy wybrali VOX Casino i odbierz swój bonus powitalny
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/play" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-10 py-7"
                  >
                    Zarejestruj
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/play" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white/10 text-lg px-10 py-7 bg-transparent"
                  >
                    Gry
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}