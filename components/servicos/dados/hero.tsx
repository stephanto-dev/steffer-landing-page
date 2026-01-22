"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Clock, TrendingUp } from "lucide-react"
import Image from "next/image"

export function DadosHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/30 mb-6">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground/80">Dados e Dashboards</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              Pare de tomar decisões no escuro. <span className="text-primary">Veja seus dados em tempo real.</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed text-pretty">
              Integre todas as suas fontes de dados, centralize informações e visualize o que realmente importa em
              dashboards inteligentes que transformam números em ações.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold"
              >
                Ver exemplos de dashboards
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("casos")}
                className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold"
              >
                Casos de sucesso
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Implementação em 6-8 semanas</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Decisões baseadas em dados</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
              <Image
                src="/images/design-mode/pexels-shkrabaanthony-5816283.jpg"
                alt="Profissionais de negócios analisando gráficos, dados e dashboards de IA em tempo real"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            <div className="mt-6 bg-card border border-primary/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">O que integramos:</h3>
              <ul className="space-y-3">
                {[
                  "CRM (HubSpot, Pipedrive, RD Station)",
                  "Analytics (Google, Meta, LinkedIn)",
                  "E-commerce (Shopify, WooCommerce)",
                  "Financeiro (Conta Azul, Omie, ERPs)",
                  "Marketing (Google Ads, Meta Ads)",
                  "Qualquer sistema com API ou planilhas",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
