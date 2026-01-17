import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Review } from "@/components/review"
import { DetailedReview } from "@/components/detailed-review"
import { GamesTables } from "@/components/games-tables"
import { Benefits } from "@/components/benefits"
import { FAQ } from "@/components/faq"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171a29] to-[#1a1d2e]">
      <Header />
      <main>
        <Hero />
        <Review />
        <DetailedReview />
        <GamesTables />
        <Benefits />
        <FAQ />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
