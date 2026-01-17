// import { Shield, Zap, Smartphone, Award } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"

// export function Review() {
//   return (
//     <section id="gry" className="py-12 md:py-20 px-4">
//       <div className="container mx-auto">
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 text-balance px-2">
//             Dlaczego VOX Casino to najlepszy wybór w Polsce?
//           </h2>
//         </div>

//         <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12 md:mb-16">
//           <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
//             <CardContent className="p-6 md:p-8">
//               <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
//                 <Shield className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
//               </div>
//               <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Bezpieczeństwo i Licencja</h3>
//               <p className="text-sm md:text-base text-gray-400 leading-relaxed">
//                 Działamy na podstawie międzynarodowej licencji Curacao. Każde logowanie jest szyfrowane protokołem SSL,
//                 a gry są regularnie audytowane. Twoje środki są w pełni chronione.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
//             <CardContent className="p-6 md:p-8">
//               <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
//                 <Zap className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
//               </div>
//               <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Szybkie Wypłaty</h3>
//               <p className="text-sm md:text-base text-gray-400 leading-relaxed">
//                 Jesteśmy znani jako kasyno online z szybkimi wypłatami. Środki na portfele krypto i e-wallety są
//                 realizowane niemal natychmiast. Przelewy bankowe zazwyczaj 1-3 dni robocze.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
//             <CardContent className="p-6 md:p-8">
//               <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
//                 <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
//               </div>
//               <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Nowoczesna Technologia</h3>
//               <p className="text-sm md:text-base text-gray-400 leading-relaxed">
//                 Platforma VOX Casino działa płynnie na każdym urządzeniu. Niezależnie od tego, czy grasz na komputerze,
//                 czy korzystasz z aplikacji mobilnej, doświadczenie jest zawsze na najwyższym poziomie.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
//             <CardContent className="p-6 md:p-8">
//               <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
//                 <Award className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
//               </div>
//               <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Ponad 5000 Gier</h3>
//               <p className="text-sm md:text-base text-gray-400 leading-relaxed">
//                 Współpracujemy z czołowymi dostawcami (Pragmatic Play, Evolution, NetEnt, Play'n GO), aby dostarczyć Ci
//                 najlepsze automaty, stoły na żywo i gry typu Crash.
//               </p>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-6 md:p-12">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Płatności BLIK</h3>
//               <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
//                 Jesteśmy dumni, że oferujemy kasyno z BLIK. Wpłaty są natychmiastowe - wpisujesz kod BLIK, zatwierdzasz
//                 w aplikacji bankowej i grasz. To najszybsza i najbezpieczniejsza metoda płatności w Polsce.
//               </p>
//               <div className="grid grid-cols-3 gap-3 md:gap-4">
//                 <div className="px-3 py-3 md:px-4 md:py-2 bg-white/10 rounded-lg">
//                   <div className="text-xl md:text-2xl font-bold text-amber-500">0%</div>
//                   <div className="text-xs md:text-sm text-gray-400">Prowizji</div>
//                 </div>
//                 <div className="px-3 py-3 md:px-4 md:py-2 bg-white/10 rounded-lg">
//                   <div className="text-xl md:text-2xl font-bold text-amber-500">20 PLN</div>
//                   <div className="text-xs md:text-sm text-gray-400">Min. depozyt</div>
//                 </div>
//                 <div className="px-3 py-3 md:px-4 md:py-2 bg-white/10 rounded-lg">
//                   <div className="text-xl md:text-2xl font-bold text-amber-500">0 sek</div>
//                   <div className="text-xs md:text-sm text-gray-400">Realizacja</div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h4 className="text-lg md:text-xl font-bold text-white mb-4">Dostępne Metody Płatności:</h4>
//               <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
//                 <li className="flex items-center">
//                   <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
//                   BLIK - Natychmiastowe wpłaty
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
//                   Visa / Mastercard
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
//                   Bitcoin / Kryptowaluty
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
//                   Przelewy bankowe
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




import { Shield, Zap, Smartphone, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Review() {
  return (
    <section id="gry" className="py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Dlaczego VOX Casino to najlepszy wybór w Polsce?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-8 md:mb-10">
          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
            <CardContent className="p-4 md:p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Bezpieczeństwo i Licencja</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                Działamy na podstawie międzynarodowej licencji Curacao. Każde logowanie jest szyfrowane SSL, a gry regularnie audytowane.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
            <CardContent className="p-4 md:p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Szybkie Wypłaty</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                Kasyno z szybkimi wypłatami. Środki na krypto i e-wallety niemal natychmiast, przelewy bankowe 1-3 dni.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
            <CardContent className="p-4 md:p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Nowoczesna Technologia</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                Platforma działa płynnie na każdym urządzeniu. Doświadczenie na najwyższym poziomie na komputerze i mobile.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
            <CardContent className="p-4 md:p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Ponad 5000 Gier</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                Współpracujemy z czołowymi dostawcami: Pragmatic Play, Evolution, NetEnt, Play'n GO.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-xl p-4 md:p-6">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-white mb-2">Płatności BLIK</h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-4">
                Kasyno z BLIK - natychmiastowe wpłaty. Wpisujesz kod, zatwierdzasz w aplikacji bankowej i grasz.
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="px-3 py-2 bg-white/10 rounded-lg">
                  <div className="text-lg font-bold text-amber-500">0%</div>
                  <div className="text-xs text-gray-400">Prowizji</div>
                </div>
                <div className="px-3 py-2 bg-white/10 rounded-lg">
                  <div className="text-lg font-bold text-amber-500">50 PLN</div>
                  <div className="text-xs text-gray-400">Min. depozyt</div>
                </div>
                <div className="px-3 py-2 bg-white/10 rounded-lg">
                  <div className="text-lg font-bold text-amber-500">0 sek</div>
                  <div className="text-xs text-gray-400">Realizacja</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm md:text-base font-bold text-white mb-2">Dostępne Metody:</h4>
              <ul className="space-y-1 text-xs md:text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 flex-shrink-0"></span>
                  BLIK - Natychmiastowe
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 flex-shrink-0"></span>
                  Visa / Mastercard
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 flex-shrink-0"></span>
                  Bitcoin / Krypto
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 flex-shrink-0"></span>
                  Przelewy bankowe
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}