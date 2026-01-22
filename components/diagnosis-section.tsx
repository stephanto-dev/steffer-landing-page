"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Flame, Clock } from "lucide-react"

export function DiagnosisSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const benefits = [
    {
      title: "Análise Personalizada",
      description: "Avaliação detalhada dos seus processos com maior potencial de automação",
    },
    {
      title: "Cálculo de ROI",
      description: "Projeção real de economia de tempo e recursos com as implementações",
    },
    {
      title: "Plano de Ação",
      description: "Roadmap priorizado de implementações com impacto x esforço",
    },
    {
      title: "Sessão de 45min",
      description: "Conversa com especialista para tirar todas as dúvidas",
    },
    {
      title: "Valor Real",
      description: "Diagnóstico com valor de R$ 5.000 — totalmente grátis",
    },
  ]

  return (
    <section
      id="diagnostico"
      className="py-12 md:py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-card-secondary via-background to-card-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-balance">
          Comece com um diagnóstico gratuito
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start md:items-center">
          {/* Left Column - Benefits */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">O que você recebe:</h3>
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                    <div className="min-w-0">
                      <h4 className="font-semibold text-base sm:text-lg mb-1">{benefit.title}</h4>
                      <p className="text-foreground/70 text-sm sm:text-base">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h4 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3">
                Por que o diagnóstico faz a diferença:
              </h4>
              <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                Muitas empresas compram ferramentas antes de entender seus processos. Resultado? 95% das iniciativas de
                IA falham. Começamos pelo diagnóstico porque tecnologia sem estratégia é só mais uma despesa.
              </p>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="bg-card border border-primary/30 rounded-lg sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-center justify-center">
                <Flame className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-primary">Apenas 20 vagas/mês</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-center justify-center">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-primary">Resposta em 24h</span>
              </div>
            </div>

            <Button
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold text-base sm:text-lg px-6 sm:px-12 py-4 sm:py-6 h-auto w-full mb-6 sm:mb-8 active:scale-95 transition-transform"
            >
              Agendar consultoria  
            </Button>

            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-foreground/70">
              <p className="flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Diagnóstico 100% gratuito</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Sem compromisso de contratação</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Roadmap de automação incluso</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Primeira conversa em até 24h</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
