import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171a29] to-[#1a1d2e]">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-white mb-8">Polityka Prywatności</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Informacje Ogólne</h2>
            <p className="text-gray-300 leading-relaxed">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez
              Użytkowników w związku z korzystaniem przez nich z usług VOX Casino.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Administrator Danych</h2>
            <p className="text-gray-300 leading-relaxed">
              Administratorem danych osobowych jest VOX Casino, działające na podstawie licencji międzynarodowej
              Curacao. Jesteśmy zobowiązani do ochrony Twoich danych osobowych zgodnie z obowiązującymi przepisami
              prawa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Zakres Zbieranych Danych</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              W ramach świadczonych usług zbieramy następujące dane osobowe:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Imię i nazwisko</li>
              <li>Adres e-mail</li>
              <li>Numer telefonu</li>
              <li>Adres zamieszkania</li>
              <li>Data urodzenia</li>
              <li>Dane dotyczące transakcji finansowych</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Cel Przetwarzania Danych</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Twoje dane osobowe przetwarzamy w następujących celach:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Świadczenie usług hazardowych online</li>
              <li>Weryfikacja tożsamości (proces KYC)</li>
              <li>Przetwarzanie płatności i wypłat</li>
              <li>Komunikacja z użytkownikami</li>
              <li>Marketing i promocje (za zgodą)</li>
              <li>Zapobieganie oszustwom i praniu pieniędzy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Bezpieczeństwo Danych</h2>
            <p className="text-gray-300 leading-relaxed">
              Stosujemy zaawansowane środki bezpieczeństwa, w tym szyfrowanie SSL, aby chronić Twoje dane osobowe przed
              nieuprawnionym dostępem, utratą lub zniszczeniem. Wszystkie transakcje są zabezpieczone najwyższymi
              standardami branżowymi.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Udostępnianie Danych</h2>
            <p className="text-gray-300 leading-relaxed">
              Twoje dane osobowe możemy udostępniać wyłącznie zaufanym partnerom niezbędnym do świadczenia usług
              (dostawcy płatności, dostawcy oprogramowania do gier), oraz organom regulacyjnym, gdy jest to wymagane
              przez prawo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Twoje Prawa</h2>
            <p className="text-gray-300 leading-relaxed mb-4">Jako użytkownik masz prawo do:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Poprawiania nieprawidłowych danych</li>
              <li>Usunięcia danych (prawo do bycia zapomnianym)</li>
              <li>Ograniczenia przetwarzania danych</li>
              <li>Przenoszenia danych</li>
              <li>Sprzeciwu wobec przetwarzania danych</li>
              <li>Cofnięcia zgody w dowolnym momencie</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Pliki Cookie</h2>
            <p className="text-gray-300 leading-relaxed">
              Nasza strona wykorzystuje pliki cookie w celu poprawy funkcjonalności i personalizacji doświadczenia
              użytkownika. Możesz zarządzać ustawieniami cookie w swojej przeglądarce.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Zmiany w Polityce Prywatności</h2>
            <p className="text-gray-300 leading-relaxed">
              Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O wszelkich istotnych
              zmianach poinformujemy użytkowników za pośrednictwem strony internetowej lub e-mail.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">10. Kontakt</h2>
            <p className="text-gray-300 leading-relaxed">
              W przypadku pytań dotyczących przetwarzania danych osobowych, prosimy o kontakt pod adresem:
              support@voxcasino.com lub poprzez czat na żywo dostępny 24/7.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  )
}
