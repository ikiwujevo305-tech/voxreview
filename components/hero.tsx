// import { Button } from "@/components/ui/button"

// export function Hero() {
//   return (
//     <section className="relative overflow-hidden pt-20 pb-32 px-4">
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>

//       <div className="container mx-auto relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">VOX Casino Polska 2026</h1>

//           <p className="text-xl md:text-2xl text-gray-300 mb-4 text-balance">
//             Twoje centrum hazardu i wielkich wygranych na prawdziwe pieniądze
//           </p>

//           <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
//             Witaj w miejscu, gdzie technologia spotyka się z pasją do gier. VOX Casino to nowoczesna platforma hazardowa
//             z ogromną biblioteką gier, szybkimi wypłatami i płatnościami BLIK.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-8 py-6">
//               Odbierz Bonus do 12 000 PLN
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent"
//             >
//               Zobacz Gry
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-4">
      {/* Фоновое изображение */}
      <div className="absolute inset-0">
        <Image
          src="/banner.png" // Замените на путь к вашему изображению
          alt="VOX Casino"
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

          <p className="text-xl md:text-2xl text-gray-300 mb-4 text-balance">
            Twoje centrum hazardu i wielkich wygranych na prawdziwe pieniądze
          </p>

          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Witaj w miejscu, gdzie technologia spotyka się z pasją do gier. VOX Casino to nowoczesna platforma hazardowa
            z ogromną biblioteką gier, szybkimi wypłatami i płatnościami BLIK.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
  <Link href="/play" className="w-full sm:w-auto">
    <Button 
      size="lg" 
      className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-8 py-6"
    >
      Odbierz Bonus do 12 000 PLN
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