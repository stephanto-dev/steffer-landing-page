import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ConsultoriaHero } from "@/components/servicos/consultoria/hero"
import { ConsultoriaProblem } from "@/components/servicos/consultoria/problem"
import { ConsultoriaApproach } from "@/components/servicos/consultoria/approach"
import { ConsultoriaUseCases } from "@/components/servicos/consultoria/use-cases"
import { ConsultoriaBenefits } from "@/components/servicos/consultoria/benefits"
import { ConsultoriaFAQ } from "@/components/servicos/consultoria/faq"
import { ConsultoriaCTA } from "@/components/servicos/consultoria/cta"
import { RelatedSolutions } from "@/components/related-solutions"
import { ContactSection } from "@/components/contact-section"

const relatedSolutions = [
  {
    title: "Atendimento no WhatsApp com IA",
    description: "Agentes de IA que respondem clientes, tiram dúvidas e passam para a equipe o que precisa de gente",
    href: "/solucoes/atendimento-whatsapp-com-ia",
  },
  {
    title: "Automação para e-commerce",
    description: "Atendimento automático, estoque sincronizado, alertas e dashboards de vendas em tempo real",
    href: "/solucoes/automacao-com-ia-para-ecommerce",
  },
  {
    title: "Software sob medida para PME",
    description: "Quando vale um sistema sob medida, quanto custa e quanto tempo leva",
    href: "/solucoes/software-sob-medida-para-pme",
  },
  {
    title: "Diagnóstico gratuito",
    description: "Sessão de 45min para mapear processos, calcular ROI e sair com plano priorizado",
    href: "/diagnostico-gratuito",
  },
]

export const metadata = {
  title: "Consultoria e Automação | Steffer",
  description:
    "Transforme processos manuais em fluxos automatizados. Economize tempo, reduza erros e escale seu negócio com automação inteligente.",
  alternates: { canonical: "https://www.steffer.com.br/servicos/consultoria-automacao" },
  openGraph: {
    title: "Consultoria e Automação",
    description:
      "Transforme processos manuais em fluxos automatizados. Economize tempo, reduza erros e escale seu negócio com automação inteligente.",
    url: "https://www.steffer.com.br/servicos/consultoria-automacao",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoria e Automação",
    description:
      "Transforme processos manuais em fluxos automatizados. Economize tempo, reduza erros e escale seu negócio com automação inteligente.",
  },
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
      <section className="py-12 px-6 text-center bg-card/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-foreground/80">
            <strong>Leia também:</strong>{" "}
            <Link
              href="/blog/vibe-coding-na-sua-empresa"
              className="text-primary hover:underline font-semibold"
            >
              Vibe coding na sua empresa: quando vale fazer sozinho e quando contratar consultoria
            </Link>
          </p>
        </div>
      </section>
      <RelatedSolutions solutions={relatedSolutions} />
      <ContactSection />
      <Footer />
    </main>
  )
}
