import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AgentesHero } from "@/components/servicos/agentes/hero"
import { AgentesProblem } from "@/components/servicos/agentes/problem"
import { AgentesTypes } from "@/components/servicos/agentes/types"
import { AgentesApproach } from "@/components/servicos/agentes/approach"
import { AgentesUseCases } from "@/components/servicos/agentes/use-cases"
import { AgentesBenefits } from "@/components/servicos/agentes/benefits"
import { AgentesFAQ } from "@/components/servicos/agentes/faq"
import { AgentesCTA } from "@/components/servicos/agentes/cta"
import { ContactSection } from "@/components/contact-section"

export const metadata = {
  title: "Agentes de IA | Steffer",
  description:
    "Assistentes virtuais inteligentes que trabalham 24/7. Atendimento, vendas, suporte e processos internos automatizados com IA conversacional.",
}

export default function AgentesIAPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AgentesHero />
      <AgentesProblem />
      <AgentesTypes />
      <AgentesApproach />
      <AgentesUseCases />
      <AgentesBenefits />
      <AgentesFAQ />
      <AgentesCTA />
      <ContactSection />
      <Footer />
    </main>
  )
}
