import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Trophy, Users, Gift } from "lucide-react"

export function DetailedReview() {
  return (
    <section className="py-12 md:py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 text-balance px-2">
            Pełny Przegląd VOX Casino Polska
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
                  Doświadczenie Gracza na Najwyższym Poziomie
                </h3>
              </div>
              <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
                <p>
                  W VOX Casino stawiamy gracza na pierwszym miejscu. Nasza platforma została zaprojektowana z myślą o
                  maksymalnym komforcie i intuicyjności. Od momentu rejestracji po pierwsze wypłaty - każdy krok jest
                  prosty, przejrzysty i bezpieczny.
                </p>
                <p>
                  Współpracujemy z największymi dostawcami oprogramowania w branży: Pragmatic Play, Evolution Gaming,
                  NetEnt, Play'n GO, Microgaming, Quickspin i wieloma innymi. To gwarantuje dostęp do najnowszych,
                  najlepiej zaprojektowanych gier z najwyższymi współczynnikami RTP na rynku.
                </p>
                <p>
                  Nasza biblioteka gier jest stale aktualizowana - co tydzień dodajemy nowe tytuły, abyś nigdy nie
                  znudził się grą. Od klasycznych automatów owocowych, przez nowoczesne gry wideo z wieloma liniami
                  wypłat, aż po ekscytujące gry z jackpotem progresywnym - znajdziesz wszystko czego potrzebujesz.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/slots.jpeg"
                  alt="VOX Casino gaming interface"
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
                <Image src="/live-casino-dealer-at-blackjack-table-professional.jpg" alt="VOX Casino live dealers" fill className="object-cover" />
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
                  Do wyboru masz dziesiątki wariantów ruletki (europejska, amerykańska, francuska, Lightning Roulette),
                  blackjacka (klasyczny, VIP, Speed Blackjack), bakarata, poker i ekscytujące game shows jak Crazy Time,
                  Monopoly Live czy Deal or No Deal. Wszystko w jakości Full HD z wieloma kątami kamer.
                </p>
                <p>
                  Transmisje prowadzone są w języku polskim i angielskim, a profesjonalni dealerzy tworzą przyjazną
                  atmosferę, odpowiadając na pytania graczy w czasie rzeczywistym przez czat na żywo.
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
                  Nasz zespół obsługi klienta jest dostępny 24/7 przez czat na żywo, email i telefon. Wszystkie
                  zapytania są obsługiwane w języku polskim przez wykwalifikowanych specjalistów, którzy znają platformę
                  na wylot i są gotowi pomóc w każdej sytuacji.
                </p>
                <p>
                  VOX Casino to nie tylko miejsce do gry - to społeczność. Regularnie organizujemy turnieje z pulami
                  nagród sięgającymi dziesiątek tysięcy złotych, gdzie możesz rywalizować z innymi graczami i wspinać
                  się w rankingach. Każdy turniej to dodatkowa szansa na wygraną bez dodatkowego ryzyka.
                </p>
                <p>
                  Program lojalnościowy nagradza każdą twoją aktywność. Im więcej grasz, tym wyższy poziom VIP osiągasz,
                  a wraz z nim - lepsze bonusy, szybsze wypłaty, dedykowanego menedżera konta i ekskluzywne zaproszenia
                  na specjalne wydarzenia.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src="/support.webp" alt="VOX Casino support team" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Bonuses */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image src="/bonus.webp" alt="VOX Casino bonuses" fill className="object-cover" />
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
                  VOX Casino słynie z najbardziej hojnych bonusów w Polsce. Pakiet powitalny dla nowych graczy obejmuje
                  bonus od pierwszych czterech depozytów o łącznej wartości do 5000 PLN + 200 darmowych spinów na
                  najpopularniejsze sloty. To jeden z najlepszych pakietów startowych na rynku!
                </p>
                <p>
                  Ale to nie wszystko - regularne promocje jak "Piątkowe Darmowe Spiny", "Weekendowy Cashback 20%",
                  "Reload Bonus w Środy" sprawiają, że zawsze masz dodatkowe środki do gry. Wszystkie bonusy mają
                  uczciwe warunki obrotu (najczęściej x35-x40), które są realne do spełnienia.
                </p>
                <p>
                  Nie zapominamy też o stałych graczach - program VIP oferuje spersonalizowane bonusy, wyższe limity
                  wypłat, dedykowane promocje i wiele innych przywilejów. Im dłużej z nami grasz, tym więcej zyskujesz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
