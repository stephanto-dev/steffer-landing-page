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
import { RelatedSolutions } from "@/components/related-solutions"
import { ContactSection } from "@/components/contact-section"

const relatedSolutions = [
  {
    title: "Automação para e-commerce",
    description: "Dashboards de vendas e estoque em tempo real, alertas automáticos e integrações",
    href: "/solucoes/automacao-com-ia-para-ecommerce",
  },
  {
    title: "Software sob medida para PME",
    description: "Sistemas personalizados com dashboards integrados ao seu processo",
    href: "/solucoes/software-sob-medida-para-pme",
  },
  {
    title: "Diagnóstico gratuito",
    description: "Sessão de 45min para mapear suas fontes de dados e definir KPIs relevantes",
    href: "/diagnostico-gratuito",
  },
]

export const metadata = {
  title: "Dados e Dashboards | Steffer",
  description:
    "Transforme dados em decisões. Dashboards inteligentes que centralizam informações e mostram o que realmente importa em tempo real.",
  alternates: { canonical: "https://www.steffer.com.br/servicos/dados-dashboards" },
  openGraph: {
    title: "Dados e Dashboards",
    description:
      "Transforme dados em decisões. Dashboards inteligentes que centralizam informações e mostram o que realmente importa em tempo real.",
    url: "https://www.steffer.com.br/servicos/dados-dashboards",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dados e Dashboards",
    description:
      "Transforme dados em decisões. Dashboards inteligentes que centralizam informações e mostram o que realmente importa em tempo real.",
  },
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
      <RelatedSolutions solutions={relatedSolutions} />
      <ContactSection />
      <Footer />
    </main>
  )
}
