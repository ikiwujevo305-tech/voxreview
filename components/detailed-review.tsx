import Image from "next/image"
import { Star, Trophy, Users, Gift } from "lucide-react"

export function DetailedReview() {
  return (
    <section id="rezenzja" className="py-12 md:py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 text-balance px-2">
            Pełny Przegląd VOX Casino - Co Sprawia, że Jest Wyjątkowe w 2026 Roku?
          </h2>
        </div>

        <div className="space-y-12 md:space-y-20">
          {/* Gaming Experience */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Najwyższy poziom wrażeń z gry
                </h3>
              </div>
              <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
                <p>
                  Gracz jest dla nich najważniejszy. Platforma została zaprojektowana z myślą o maksymalnym komforcie i intuicyjności. Od momentu rejestracji do pierwszych wypłat — każdy krok jest prosty, zrozumiały i bezpieczny.
                </p>
                <p>
                  Współpraca z największymi dostawcami oprogramowania w branży: <strong><a href="#slots" className="text-amber-500 hover:underline">Pragmatic Play, Evolution Gaming, NetEnt, Play'n GO, Microgaming, Quickspin</a></strong> i wieloma innymi. Gwarantuje to dostęp do najnowszych, najlepszych gier z najwyższymi współczynnikami RTP na rynku.
                </p>
                <p>
                  Biblioteka gier jest stale aktualizowana — co tydzień dodawane są nowe gry, abyś nigdy nie znudził się graniem. 
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/slots.webp"
                  alt="VOX Casino slot games"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Live Casino */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src="/live-casino-dealer-at-blackjack-table-professional.webp" alt="live dealers" fill className="object-cover" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Kasyno na Żywo z Prawdziwymi Krupierami</h3>
              </div>
              <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
                <p>
                  Sekcja Live Casino w VOX to prawdziwa perełka dla miłośników autentycznych doznań kasynowych. Dzięki
                  współpracy z Evolution Gaming - światowym liderem w transmisji gier na żywo - oferujemy najbardziej
                  zaawansowane technologicznie stoliki z profesjonalnymi krupierami.
                </p>
                <p>
                  <a href="#live-casino" className="text-amber-500 hover:underline">Do wyboru masz dziesiątki wariantów ruletki</a> (europejska, amerykańska, francuska, Lightning Roulette),
                  blackjacka (klasyczny, VIP, Speed Blackjack), bakarata, poker i ekscytujące game shows jak Crazy Time,
                  Monopoly Live czy Deal or No Deal.
                </p>
              </div>
            </div>
          </div>

          {/* Community and Support */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Wsparcie i Społeczność</h3>
              </div>
              <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
                <p>
                  Nasza obsługa klienta jest dostępna 24 godziny na dobę, 7 dni w tygodniu poprzez czat, e-mail i telefon.
                </p>
                <p>
                  VOX to nie tylko miejsce do gry, ale także społeczność. Regularnie organizujemy turnieje z pulą nagród sięgającą dziesiątek tysięcy złotych, w których możesz rywalizować z innymi graczami i piąć się w górę rankingów.
                </p>
                <p>
                  <strong>Program lojalnościowy</strong> nagradza każdą Twoją aktywność. Im więcej grasz, tym wyższy poziom VIP osiągasz, a wraz z nim — lepsze bonusy, darmowe spiny i osobisty menedżer konta.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src="/support.webp" alt="VOX support team" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Bonuses */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src="/bonus.webp" alt="VOX bonus and free spins" fill className="object-cover" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <Gift className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Hojne Bonusy i Promocje</h3>
              </div>
              <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
                <p>
                  Pakiet powitalny dla nowych graczy obejmuje bonus od pierwszych czterech depozytów o łącznej wartości do 5000 PLN + 200 darmowych spinów na najpopularniejsze automaty. Oprócz tego dostępny jest bonus bez depozytu.
                </p>
                <p>
                  Ale to nie wszystko — regularne promocje, takie jak „Piątkowe darmowe spiny”, „20% cashback w weekendy”, „Bonus za doładowanie konta w środy”, gwarantują, że zawsze będziesz mieć dodatkowe środki do gry. Wszystkie bonusy mają uczciwe warunki obrotu (najczęściej x35-x40), które naprawdę można spełnić
                </p>
                <p>
                  Program VIP oferuje spersonalizowane bonusy, wyższe limity wypłat, specjalne promocje i wiele innych przywilejów.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
