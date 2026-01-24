import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CredibilitySection } from "@/components/credibility-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { ComparisonSection } from "@/components/comparison-section"
import { DiagnosisSection } from "@/components/diagnosis-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://steffer.com.br/",
            name: "Steffer",
            alternateName: "Steffer | Consultoria de IA e Automação",
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
      <ComparisonSection />
      <DiagnosisSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
