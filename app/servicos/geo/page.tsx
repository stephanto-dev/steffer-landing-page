import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GeoHero } from "@/components/servicos/geo/hero"
import { GeoProblem } from "@/components/servicos/geo/problem"
import { GeoWhat } from "@/components/servicos/geo/what"
import { GeoApproach } from "@/components/servicos/geo/approach"
import { GeoStrategies } from "@/components/servicos/geo/strategies"
import { GeoUseCases } from "@/components/servicos/geo/use-cases"
import { GeoBenefits } from "@/components/servicos/geo/benefits"
import { GeoFAQ } from "@/components/servicos/geo/faq"
import { GeoCTA } from "@/components/servicos/geo/cta"
import { ContactSection } from "@/components/contact-section"

export const metadata = {
  title: "GEO - Otimização para LLMs | Steffer",
  description:
    "Seja encontrado por ChatGPT, Claude, Perplexity e outros LLMs. Otimize seu conteúdo para a era da busca por IA.",
}

export default function GEOPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <GeoHero />
      <GeoProblem />
      <GeoWhat />
      <GeoApproach />
      <GeoStrategies />
      <GeoUseCases />
      <GeoBenefits />
      <GeoFAQ />
      <GeoCTA />
      <ContactSection />
      <Footer />
    </main>
  )
}
