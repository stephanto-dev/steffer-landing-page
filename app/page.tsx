import type { Metadata } from "next"
import { CONTACT } from "@/lib/constants"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CredibilitySection } from "@/components/credibility-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { TekoSection } from "@/components/teko-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { ComparisonSection } from "@/components/comparison-section"
import { DiagnosisSection } from "@/components/diagnosis-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.steffer.com.br/",
  },
  openGraph: {
    url: "https://www.steffer.com.br/",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://www.steffer.com.br/",
            name: "Steffer",
            alternateName: ["Steffer | Consultoria de IA e Automação", "Stefer"],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Steffer",
            alternateName: "Stefer",
            description:
              "Consultoria de IA e Automação especializada em transformar processos manuais em produtividade escalável para pequenos empreendedores",
            url: "https://www.steffer.com.br",
            logo: "https://www.steffer.com.br/images/logo-20steffer.png",
            image: "https://www.steffer.com.br/og-image.png",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Sales",
              availableLanguage: ["Portuguese"],
              telephone: CONTACT.whatsapp.number,
              email: CONTACT.email,
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "BR",
            },
            areaServed: {
              "@type": "Country",
              name: "Brasil",
            },
            serviceType: [
              "Consultoria de IA",
              "Automação de Processos",
              "Agentes de IA",
              "Orquestração de Processos",
              "GEO (Generative Engine Optimization)",
              "Dashboards e Análise de Dados",
            ],
            priceRange: "Até R$ 10.000",
            knowsAbout: [
              "Inteligência Artificial",
              "Automação RPA",
              "n8n",
              "Make.com",
              "ChatGPT",
              "APIs",
              "Integração de Sistemas",
            ],
            sameAs: [],
          }),
        }}
      />
      <Header />
      <HeroSection />
      <CredibilitySection />
      <ProblemSection />
      <SolutionSection />
      <DifferentialsSection />
      <UseCasesSection />
      <SocialProofSection />
      <TekoSection />
      <ComparisonSection />
      <DiagnosisSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
