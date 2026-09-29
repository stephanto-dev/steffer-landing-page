import type { ReactNode } from "react"
import { ArrowRight, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ServicePageProps {
  badge: string
  title: ReactNode
  subtitle: string
  problem: string
  deliverables: string[]
  steps: string[]
  audience: string
  differentials: string[]
  // Sections rendered after "Diferencial" (comparison table, proof, etc.)
  extra?: ReactNode
}

const CTA_LABEL = "Agendar diagnóstico gratuito"

function CTAButton({ className = "" }: { className?: string }) {
  return (
    <Button
      size="lg"
      asChild
      className={`bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold h-14 px-8 text-base sm:text-lg ${className}`}
    >
      <a href="#contato">
        {CTA_LABEL}
        <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </Button>
  )
}

export function ServicePage({
  badge,
  title,
  subtitle,
  problem,
  deliverables,
  steps,
  audience,
  differentials,
  extra,
}: ServicePageProps) {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/30 mb-6">
            <span className="text-sm text-foreground/80">{badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">{title}</h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed text-pretty">{subtitle}</p>
          <CTAButton />
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">O problema</h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">{problem}</p>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">O que entregamos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item) => (
              <Card key={item} className="p-8 bg-card border-primary/20 flex-row items-start gap-4">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg text-foreground/80 leading-relaxed">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">Como funciona</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <Card key={step} className="p-8 bg-background/50 border-primary/20 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-lg font-semibold leading-relaxed relative z-10 pr-12">{step}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Para quem é</h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">{audience}</p>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">Diferencial</h2>
          <ul className="space-y-4">
            {differentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg text-foreground/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {extra}

      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-accent via-accent/80 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Button
            size="lg"
            asChild
            className="bg-primary-bright text-primary-bright-foreground hover:bg-primary-bright/90 glow-primary-bright font-semibold h-14 px-8 text-base sm:text-lg"
          >
            <a href="#contato">
              {CTA_LABEL}
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </Button>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
