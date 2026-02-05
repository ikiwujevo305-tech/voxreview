import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-4">
      {/* Фоновое изображение */}
      <div className="absolute inset-0">
        <Image
          src="/banner.webp" // Замените на путь к вашему изображению
          alt="VOX Casino banner"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Затемнение для лучшей читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        {/* Дополнительный градиент для акцента */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">VOX Casino Polska 2026</h1>

          <p className="text-xl md:text-2xl text-white mb-4 text-balance">
            Twoje centrum gier hazardowych i dużych wygranych na prawdziwe pieniądze. Przeczytaj recenzję kasyna VOX i zacznij zarabiać. Witamy!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
  <Link href="/play" className="w-full sm:w-auto">
    <Button 
      size="lg" 
      className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-8 py-6"
    >
      Otrzymaj 12 000 PLN
    </Button>
  </Link>
  <Link href="/play" className="w-full sm:w-auto">
    <Button
      size="lg"
      variant="outline"
      className="w-full border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent backdrop-blur-sm"
    >
      Zobacz Gry
    </Button>
  </Link>
</div>
        </div>
      </div>
    </section>
  )
}