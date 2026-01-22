"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, TrendingUp, Zap } from "lucide-react"

export function ConsultoriaHero() {
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
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground/80">Consultoria e Automação</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              Pare de perder tempo com tarefas que a <span className="text-primary">IA pode fazer</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed text-pretty">
              Transforme processos manuais em fluxos automatizados. Economize até 20 horas por semana, reduza erros e
              escale seu negócio sem aumentar custos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold"
              >
                Agendar diagnóstico gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("casos")}
                className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold"
              >
                Ver casos de sucesso
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Implementação em 4-8 semanas</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>ROI médio em 3 meses</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">O que automatizamos:</h3>
              <ul className="space-y-4">
                {[
                  "Atendimento ao cliente (chatbots inteligentes)",
                  "Processamento de documentos e dados",
                  "Geração de relatórios e dashboards",
                  "Integração entre sistemas (CRM, ERP, etc)",
                  "Workflows de aprovação e notificações",
                  "Coleta e análise de dados",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
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
