import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CaseHero } from "@/components/cases/hospital-felicio-rocho/hero"
import { CaseScenario } from "@/components/cases/hospital-felicio-rocho/scenario"
import { CaseSolution } from "@/components/cases/hospital-felicio-rocho/solution"
import { CaseResults } from "@/components/cases/hospital-felicio-rocho/results"
import { CaseWhy } from "@/components/cases/hospital-felicio-rocho/why"
import { CaseCTA } from "@/components/cases/hospital-felicio-rocho/cta"
import { ContactSection } from "@/components/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Caso Hospital Felício Rocho | Escala médica e repasse automáticos com o Teko",
  description:
    "Como o Hospital Felício Rocho, em Belo Horizonte, trocou planilhas e cálculo manual de repasse pelo Teko e chegou a 100% de adesão do corpo clínico, sem erros de repasse manual.",
  alternates: { canonical: "https://www.steffer.com.br/cases/hospital-felicio-rocho" },
  openGraph: {
    title: "Caso Hospital Felício Rocho | Escala médica e repasse automáticos com o Teko",
    description:
      "Como o Hospital Felício Rocho, em Belo Horizonte, trocou planilhas e cálculo manual de repasse pelo Teko e chegou a 100% de adesão do corpo clínico, sem erros de repasse manual.",
    url: "https://www.steffer.com.br/cases/hospital-felicio-rocho",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caso Hospital Felício Rocho | Escala médica e repasse automáticos com o Teko",
    description:
      "Como o Hospital Felício Rocho, em Belo Horizonte, trocou planilhas e cálculo manual de repasse pelo Teko e chegou a 100% de adesão do corpo clínico, sem erros de repasse manual.",
  },
}

export default function CaseHospitalFelicioRochoPage() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Hospital Felício Rocho: 100% de adesão do corpo clínico e fim dos erros de repasse manual",
            description:
              "Como o Hospital Felício Rocho, em Belo Horizonte, trocou planilhas e cálculo manual de repasse pelo Teko e chegou a 100% de adesão do corpo clínico, sem erros de repasse manual.",
            url: "https://www.steffer.com.br/cases/hospital-felicio-rocho",
            publisher: {
              "@type": "Organization",
              name: "Steffer",
              url: "https://www.steffer.com.br",
            },
            about: [
              {
                "@type": "Organization",
                name: "Hospital Felício Rocho",
              },
              {
                "@type": "SoftwareApplication",
                name: "Teko",
                url: "https://www.steffer.com.br/teko",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.steffer.com.br",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Cases",
                item: "https://www.steffer.com.br/cases",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Hospital Felício Rocho",
                item: "https://www.steffer.com.br/cases/hospital-felicio-rocho",
              },
            ],
          }),
        }}
      />
      <Header />
      <CaseHero />
      <CaseScenario />
      <CaseSolution />
      <CaseResults />
      <CaseWhy />
      <CaseCTA />
      <ContactSection />
      <Footer />
    </main>
  )
}
