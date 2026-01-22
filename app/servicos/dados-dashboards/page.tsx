import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DadosHero } from "@/components/servicos/dados/hero"
import { DadosProblem } from "@/components/servicos/dados/problem"
import { DadosWhat } from "@/components/servicos/dados/what"
import { DadosApproach } from "@/components/servicos/dados/approach"
import { DadosTypes } from "@/components/servicos/dados/types"
import { DadosUseCases } from "@/components/servicos/dados/use-cases"
import { DadosBenefits } from "@/components/servicos/dados/benefits"
import { DadosFAQ } from "@/components/servicos/dados/faq"
import { DadosCTA } from "@/components/servicos/dados/cta"
import { ContactSection } from "@/components/contact-section"

export const metadata = {
  title: "Dados e Dashboards | Steffer",
  description:
    "Transforme dados em decisões. Dashboards inteligentes que centralizam informações e mostram o que realmente importa em tempo real.",
}

export default function DadosDashboardsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DadosHero />
      <DadosProblem />
      <DadosWhat />
      <DadosApproach />
      <DadosTypes />
      <DadosUseCases />
      <DadosBenefits />
      <DadosFAQ />
      <DadosCTA />
      <ContactSection />
      <Footer />
    </main>
  )
}
