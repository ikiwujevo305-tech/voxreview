import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function GamesTables() {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 text-balance px-2">
            Najpopularniejsze Gry w VOX Casino
          </h2>
        </div>

        <div className="space-y-8 md:space-y-12">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle id="slots" className="text-xl md:text-2xl text-white">Top 10 Automatów do Gier</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-2 md:px-4 text-gray-400 font-medium">#</th>
                      <th className="text-left py-3 px-2 md:px-4 text-gray-400 font-medium">Nazwa Gry</th>
                      <th className="text-left py-3 px-2 md:px-4 text-gray-400 font-medium">Dostawca</th>
                      <th className="text-left py-3 px-2 md:px-4 text-gray-400 font-medium">RTP</th>
                      <th className="text-left py-3 px-2 md:px-4 text-gray-400 font-medium whitespace-nowrap">
                        Max Wygrana
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4">1</td>
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Mega Wild Fruits & Chillies</td>
                      <td className="py-3 px-2 md:px-4">Spinomenal</td>
                      <td className="py-3 px-2 md:px-4 text-amber-500">96.21%</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">5,000x</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4">2</td>
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Vox Joker</td>
                      <td className="py-3 px-2 md:px-4">VOX</td>
                      <td className="py-3 px-2 md:px-4 text-amber-500">96.50%</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">5,000x</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4">3</td>
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Coin Win 2: Hold The Spin</td>
                      <td className="py-3 px-2 md:px-4">Pragmatic Play</td>
                      <td className="py-3 px-2 md:px-4 text-amber-500">96.48%</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">21,100x</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4">4</td>
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Blazing Crown Deluxe</td>
                      <td className="py-3 px-2 md:px-4">Amigo Gaming</td>
                      <td className="py-3 px-2 md:px-4 text-amber-500">96.09%</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">50,000x</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4">5</td>
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Gonzo's Quest</td>
                      <td className="py-3 px-2 md:px-4">NetEnt</td>
                      <td className="py-3 px-2 md:px-4 text-amber-500">95.97%</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">2,500x</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4">6</td>
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Demi Gods V</td>
                      <td className="py-3 px-2 md:px-4">Spinomenal</td>
                      <td className="py-3 px-2 md:px-4 text-amber-500">96.71%</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">2,100x</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4">7</td>
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Chicken Road</td>
                      <td className="py-3 px-2 md:px-4">InOuts Games</td>
                      <td className="py-3 px-2 md:px-4 text-amber-500">96.01%</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">1,000x</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4">8</td>
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Olympus Rivals</td>
                      <td className="py-3 px-2 md:px-4">Play'n GO</td>
                      <td className="py-3 px-2 md:px-4 text-amber-500">96.51%</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">4,570x</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4">9</td>
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Le Bandit</td>
                      <td className="py-3 px-2 md:px-4">HackSaw</td>
                      <td className="py-3 px-2 md:px-4 text-amber-500">96.51%</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">6,750x</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4">10</td>
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Wolf Fang - Ice & Fire</td>
                      <td className="py-3 px-2 md:px-4">Spinomenal</td>
                      <td className="py-3 px-2 md:px-4 text-amber-500">96.83%</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">20,000x</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle id="live-casino" className="text-xl md:text-2xl text-white">Najlepsze Gry Live Casino</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-2 md:px-4 text-gray-400 font-medium">Gra</th>
                      <th className="text-left py-3 px-2 md:px-4 text-gray-400 font-medium">Typ</th>
                      <th className="text-left py-3 px-2 md:px-4 text-gray-400 font-medium">Dostawca</th>
                      <th className="text-left py-3 px-2 md:px-4 text-gray-400 font-medium whitespace-nowrap">
                        Min/Max
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Speed Roulette 2</td>
                      <td className="py-3 px-2 md:px-4">Ruletka</td>
                      <td className="py-3 px-2 md:px-4">Midnite</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">10 PLN / 50,000 PLN</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Ice Fishing</td>
                      <td className="py-3 px-2 md:px-4">Game Show</td>
                      <td className="py-3 px-2 md:px-4">Evolution</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">5 PLN / 20,000 PLN</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Speed Roulette 1</td>
                      <td className="py-3 px-2 md:px-4">Ruletka</td>
                      <td className="py-3 px-2 md:px-4">Midnite</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">100 PLN / 100,000 PLN</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Crazy Pachinko</td>
                      <td className="py-3 px-2 md:px-4">Ruletka</td>
                      <td className="py-3 px-2 md:px-4">Pachinko</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">20 PLN / 75,000 PLN</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Baccarat 2</td>
                      <td className="py-3 px-2 md:px-4">Blackjack</td>
                      <td className="py-3 px-2 md:px-4">Baccarat</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">5 PLN / 15,000 PLN</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle id="wypłaty" className="text-xl md:text-2xl text-white">Porównanie Metod Płatności</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-2 md:px-4 text-gray-400 font-medium">Metoda</th>
                      <th className="text-left py-3 px-2 md:px-4 text-gray-400 font-medium whitespace-nowrap">
                        Min. Depozyt
                      </th>
                      <th className="text-left py-3 px-2 md:px-4 text-gray-400 font-medium whitespace-nowrap">
                        Czas Wpłaty
                      </th>
                      <th className="text-left py-3 px-2 md:px-4 text-gray-400 font-medium whitespace-nowrap">
                        Czas Wypłaty
                      </th>
                      <th className="text-left py-3 px-2 md:px-4 text-gray-400 font-medium">Prowizja</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4 font-medium text-white">BLIK</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">20 PLN</td>
                      <td className="py-3 px-2 md:px-4 text-green-400 whitespace-nowrap">Natychmiast</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">1-24h</td>
                      <td className="py-3 px-2 md:px-4 text-green-400">0%</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Visa/Mastercard</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">50 PLN</td>
                      <td className="py-3 px-2 md:px-4 text-green-400 whitespace-nowrap">Natychmiast</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">1-3 dni</td>
                      <td className="py-3 px-2 md:px-4 text-green-400">0%</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Bitcoin</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">100 PLN</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">10-30 min</td>
                      <td className="py-3 px-2 md:px-4 text-green-400 whitespace-nowrap">Do 1h</td>
                      <td className="py-3 px-2 md:px-4 text-green-400">0%</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Ethereum</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">100 PLN</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">5-15 min</td>
                      <td className="py-3 px-2 md:px-4 text-green-400 whitespace-nowrap">Do 1h</td>
                      <td className="py-3 px-2 md:px-4 text-green-400">0%</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-2 md:px-4 font-medium text-white">Przelew Bankowy</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">100 PLN</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">1-2 dni</td>
                      <td className="py-3 px-2 md:px-4 whitespace-nowrap">1-3 dni</td>
                      <td className="py-3 px-2 md:px-4 text-green-400">0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
