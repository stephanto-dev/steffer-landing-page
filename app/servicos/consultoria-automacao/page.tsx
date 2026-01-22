import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ConsultoriaHero } from "@/components/servicos/consultoria/hero"
import { ConsultoriaProblem } from "@/components/servicos/consultoria/problem"
import { ConsultoriaApproach } from "@/components/servicos/consultoria/approach"
import { ConsultoriaUseCases } from "@/components/servicos/consultoria/use-cases"
import { ConsultoriaBenefits } from "@/components/servicos/consultoria/benefits"
import { ConsultoriaFAQ } from "@/components/servicos/consultoria/faq"
import { ConsultoriaCTA } from "@/components/servicos/consultoria/cta"
import { ContactSection } from "@/components/contact-section"

export const metadata = {
  title: "Consultoria e Automação | Steffer",
  description:
    "Transforme processos manuais em fluxos automatizados. Economize tempo, reduza erros e escale seu negócio com automação inteligente.",
}

export default function ConsultoriaAutomacaoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ConsultoriaHero />
      <ConsultoriaProblem />
      <ConsultoriaApproach />
      <ConsultoriaUseCases />
      <ConsultoriaBenefits />
      <ConsultoriaFAQ />
      <ConsultoriaCTA />
      <ContactSection />
      <Footer />
    </main>
  )
}
