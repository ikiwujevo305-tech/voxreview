import { Card, CardContent } from "@/components/ui/card"

export function Review() {
  return (
    <section id="gry" className="py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Dlaczego VOX to najlepszy wybór w Polsce w 2026 roku?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-8 md:mb-10">
          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
            <CardContent className="p-4 md:p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Bezpieczeństwo i Licencja</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                Działamy na podstawie międzynarodowej <strong>licencji Curacao.</strong> Każde logowanie do systemu jest szyfrowane protokołem SSL, a nasze gry są regularnie poddawane audytom bezpieczeństwa.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
            <CardContent className="p-4 md:p-5">
              <h3 className="text-lg font-semibold text-white mb-2"><a href="#wypłaty" className="text-amber-500 hover:underline">Szybkie Wypłaty</a></h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                Kasyno z szybkimi wypłatami i ogromną liczbą systemów płatniczych, które są dostępne w Polsce. Środki na portfele kryptowalutowe i elektroniczne są przekazywane niemal natychmiast, a przelewy bankowe – w ciągu <strong>1-3 dni</strong>.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
            <CardContent className="p-4 md:p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Nowoczesna Technologia</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                Platforma działa płynnie na każdym urządzeniu (IOS/Android/MacOS/Windows).
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
            <CardContent className="p-4 md:p-5">
              <h3 className="text-lg font-semibold text-white mb-2">Ponad 5000 Gier</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                Współpracujemy z wiodącymi dostawcami: Pragmatic Play, Evolution, NetEnt, Play'n GO, InOut Games i in.
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
                  <div className="text-lg font-bold text-amber-500">2-3 sek</div>
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