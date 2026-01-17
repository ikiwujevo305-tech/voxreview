"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    question: "Czy VOX Casino jest legalne w Polsce?",
    answer:
      "VOX Casino działa na podstawie międzynarodowej licencji hazardowej wydanej przez rząd Curacao (numer licencji 8048/JAZ). Chociaż nie posiadamy polskiej licencji, możesz legalnie grać na naszej platformie jako gracz z Polski. Licencja Curacao gwarantuje uczciwe warunki gry, bezpieczeństwo danych osobowych i finansowych oraz przestrzeganie międzynarodowych standardów odpowiedzialnej gry.",
  },
  {
    question: "Jak długo trwa weryfikacja konta?",
    answer:
      "Standardowa weryfikacja konta w VOX Casino zajmuje od 12 do 24 godzin roboczych. Proces wymaga przesłania dokumentu tożsamości (dowód osobisty, paszport lub prawo jazdy) oraz potwierdzenia adresu zamieszkania (rachunek za media, wyciąg bankowy nie starszy niż 3 miesiące). W większości przypadków weryfikacja jest zakończona tego samego dnia. Weryfikacja jest wymagana tylko raz, przed pierwszą wypłatą środków. Gracze VIP mogą liczyć na ekspresową weryfikację w ciągu kilku godzin.",
  },
  {
    question: "Jakie są minimalne i maksymalne limity wypłat?",
    answer:
      "Minimalna kwota wypłaty w VOX Casino wynosi 50 PLN dla wszystkich metod płatności. Maksymalne limity zależą od statusu VIP: gracze standardowi mogą wypłacić do 5,000 PLN dziennie (30,000 PLN miesięcznie), gracze Silver do 10,000 PLN dziennie, Gold do 25,000 PLN dziennie, a gracze Platinum i Diamond nie mają limitów wypłat. Dla kryptowalut limity są wyższe - do 50,000 PLN dziennie dla graczy standardowych. Wszystkie limity są automatycznie zwiększane wraz z awansem w programie VIP.",
  },
  {
    question: "Czy mogę grać na VOX Casino na urządzeniach mobilnych?",
    answer:
      "Tak! VOX Casino oferuje pełną kompatybilność mobilną. Możesz grać bezpośrednio w przeglądarce mobilnej (działa na iOS, Android i innych systemach) lub pobrać naszą dedykowaną aplikację mobilną. Aplikacja jest dostępna na Androida (APK do pobrania na stronie) i iOS (dostępna w App Store). Wersja mobilna oferuje dostęp do wszystkich 5000+ gier, pełnej funkcjonalności konta, metod płatności i obsługi klienta. Interfejs jest w pełni zoptymalizowany pod ekrany dotykowe, zapewniając płynne i wygodne granie w każdym miejscu.",
  },
  {
    question: "Jakie są warunki bonusu powitalnego?",
    answer:
      "Pakiet powitalny VOX Casino składa się z 4 bonusów depozytowych: 1) 100% do 1500 PLN + 50 darmowych spinów przy pierwszym depozycie min. 50 PLN, 2) 75% do 1200 PLN + 50 FS przy drugim depozycie min. 100 PLN, 3) 50% do 1300 PLN + 50 FS przy trzecim depozycie min. 150 PLN, 4) 25% do 1000 PLN + 50 FS przy czwartym depozycie min. 200 PLN. Warunki obrotu wynoszą x40 dla bonusu i x40 dla wygranych z darmowych spinów. Maksymalny zakład z aktywnym bonusem to 20 PLN. Bonus jest ważny przez 30 dni od aktywacji. Darmowe spiny są przyznawane na popularne sloty Pragmatic Play.",
  },
  {
    question: "Jak skontaktować się z obsługą klienta?",
    answer:
      "Obsługa klienta VOX Casino jest dostępna 24/7 w języku polskim przez kilka kanałów: Czat na żywo (najszybsza opcja, średni czas odpowiedzi 30 sekund), Email: support@voxcasino.com (odpowiedź w ciągu 2-4 godzin), Telefon: +48 22 123 4567 (połączenia w godzinach 8:00-22:00 CET). Gracze VIP mają dostęp do dedykowanego menedżera konta z priorytetowym wsparciem. Wszystkie zapytania są obsługiwane przez profesjonalny zespół znający platformę na wylot.",
  },
  {
    question: "Czy w VOX Casino mogę grać w darmowe gry?",
    answer:
      "Absolutnie! Większość gier w VOX Casino (poza grami Live Casino) jest dostępna w trybie demo, który pozwala grać za wirtualne środki bez konieczności rejestracji czy wpłaty. To idealna opcja, żeby przetestować nowe gry, poznać ich mechanikę i funkcje bonusowe zanim zagrasz na prawdziwe pieniądze. Tryb demo oferuje dokładnie taką samą rozgrywkę jak wersja za prawdziwe środki, z tym samym RTP i funkcjami. Możesz bez ograniczeń testować sloty, gry stołowe i inne tytuły.",
  },
  {
    question: "Jak działa program lojalnościowy VIP?",
    answer:
      "Program VIP w VOX Casino składa się z 5 poziomów: Bronze (start), Silver (5,000 PLN obrotu), Gold (50,000 PLN), Platinum (250,000 PLN) i Diamond (1,000,000 PLN). Każdy poziom oferuje lepsze korzyści: wyższe cashbacki (od 5% do 20%), szybsze wypłaty, wyższe limity, personalizowane bonusy, dedykowanego menedżera VIP, zaproszenia na ekskluzywne wydarzenia i turnieje. Punkty lojalnościowe zdobywasz za każdą obróconą złotówkę (1 PLN = 1 punkt), które możesz wymieniać na bonusy gotówkowe. Status VIP jest permanentny - raz osiągnięty, zachowujesz go na zawsze.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-12 md:py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 text-balance px-2">
            Najczęściej Zadawane Pytania
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white/5 border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-4 md:p-6 flex justify-between items-start gap-4 hover:bg-white/5 transition-colors"
              >
                <h3 className="text-base md:text-lg font-semibold text-white pr-4 text-pretty">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 md:w-6 md:h-6 text-amber-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <CardContent className="px-4 md:px-6 pb-4 md:pb-6 pt-0">
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed text-pretty">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4 text-sm md:text-base px-4">Nie znalazłeś odpowiedzi na swoje pytanie?</p>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm md:text-base"
          >
            Skontaktuj się z nami
          </a>
        </div>
      </div>
    </section>
  )
}
