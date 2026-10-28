import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionHero } from "@/components/solucoes/solution-hero"
import { WhenMakesSense } from "@/components/solucoes/when-makes-sense"
import { WhatDelivers } from "@/components/solucoes/what-delivers"
import { HowWorks } from "@/components/solucoes/how-works"
import { SimpleFAQ } from "@/components/solucoes/simple-faq"
import { ContactSection } from "@/components/contact-section"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/motion/reveal"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Software sob medida para pequenas e médias empresas: quanto custa e quanto tempo leva | Steffer",
  description:
    "Quando vale um sistema sob medida em vez de um SaaS pronto, quanto custa e quanto tempo leva. Na Steffer, projetos iniciais de até R$ 10 mil, entregues em 4 a 8 semanas.",
  alternates: { canonical: "https://www.steffer.com.br/solucoes/software-sob-medida-para-pme" },
  openGraph: {
    title: "Software sob medida para pequenas e médias empresas: quanto custa e quanto tempo leva | Steffer",
    description:
      "Quando vale um sistema sob medida em vez de um SaaS pronto, quanto custa e quanto tempo leva. Na Steffer, projetos iniciais de até R$ 10 mil, entregues em 4 a 8 semanas.",
    url: "https://www.steffer.com.br/solucoes/software-sob-medida-para-pme",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software sob medida para pequenas e médias empresas: quanto custa e quanto tempo leva | Steffer",
    description:
      "Quando vale um sistema sob medida em vez de um SaaS pronto, quanto custa e quanto tempo leva. Na Steffer, projetos iniciais de até R$ 10 mil, entregues em 4 a 8 semanas.",
  },
}

const whenMakesSensePoints = [
  "Você já tentou ferramentas prontas e acabou adaptando o processo à ferramenta",
  "A operação depende de planilhas soltas e grupos de WhatsApp",
  "Os sistemas que você usa não conversam entre si e alguém copia dados à mão",
]

const whatDeliversItems = [
  "Sistema web desenhado a partir do seu processo real",
  "Painéis e ferramentas internas para a equipe sair da planilha",
  "Integrações com WhatsApp, ERPs e CRMs",
  "Manutenção e evolução contínua depois da entrega",
]

const howWorksSteps = [
  "Diagnóstico gratuito do processo, antes de escrever qualquer linha de código",
  "Protótipo para você ver e aprovar",
  "Desenvolvimento em ciclos curtos, com você acompanhando",
  "Testes antes de cada entrega",
  "Suporte contínuo depois do lançamento",
]

const faqs = [
  {
    question: "Quanto custa um software sob medida?",
    answer:
      "Na Steffer, os projetos iniciais custam até R$ 10 mil. Contratar um desenvolvedor para o mesmo projeto costuma passar de R$ 60 mil, e uma agência, de R$ 40 mil, segundo a comparação da Steffer.",
  },
  {
    question: "Quanto tempo leva?",
    answer: "De 4 a 8 semanas, contra 3 a 6 meses contratando um desenvolvedor ou 3 a 4 meses com uma agência.",
  },
  {
    question: "O suporte depois da entrega é cobrado à parte?",
    answer: "Não. O suporte contínuo está incluso.",
  },
]

function TekoExample() {
  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <Card className="p-8 md:p-12 bg-background/50 border-primary/20">
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Um exemplo é o{" "}
              <Link href="/teko" className="text-primary hover:underline">
                Teko
              </Link>
              , sistema de escala médica e repasse que a Steffer criou dentro do Hospital Felício Rocho.
            </p>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

export default function SoftwareSobMedidaPMEPage() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Desenvolvimento de software sob medida",
            description:
              "A Steffer desenvolve sistemas web sob medida para empresas brasileiras cujo processo não cabe num software pronto.",
            provider: {
              "@type": "Organization",
              name: "Steffer",
              url: "https://www.steffer.com.br",
            },
            areaServed: {
              "@type": "Country",
              name: "BR",
            },
            serviceType: "Desenvolvimento de software sob medida",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <Header />
      <SolutionHero
        title="Software sob medida para <span class='text-primary'>pequenas e médias empresas</span>"
        description="A Steffer desenvolve sistemas web sob medida para empresas brasileiras cujo processo não cabe num software pronto: clínicas, hospitais, operações com escala ou agenda complexa e empresas de serviço com fluxo próprio. Os projetos iniciais custam até R$ 10 mil e ficam prontos em 4 a 8 semanas, com protótipo aprovado antes do desenvolvimento e suporte contínuo incluso."
      />
      <WhenMakesSense points={whenMakesSensePoints} />
      <WhatDelivers items={whatDeliversItems} />
      <TekoExample />
      <HowWorks steps={howWorksSteps} />
      <SimpleFAQ faqs={faqs} />
      <section className="py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-foreground/80">
            <Link
              href="/blog/vibe-coding-na-sua-empresa"
              className="text-primary hover:underline font-semibold"
            >
              Leia sobre quando vale resolver sozinho e quando contratar consultoria →
            </Link>
          </p>
          <Link
            href="/diagnostico-gratuito"
            className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
          >
            Agendar diagnóstico gratuito →
          </Link>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </main>
  )
}
