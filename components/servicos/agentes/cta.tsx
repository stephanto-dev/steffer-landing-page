"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function AgentesCTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-accent via-accent/80 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Pronto para ter um assistente que <span className="text-primary">nunca dorme?</span>
        </h2>

        <p className="text-xl md:text-2xl text-foreground/90 mb-10 text-balance leading-relaxed">
          Agende um diagnóstico gratuito e descubra como um agente de IA pode transformar seu atendimento
        </p>

        <Button
          size="lg"
          onClick={() => scrollToSection("contato")}
          className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold text-lg px-12 py-6 h-auto mb-8"
        >
          Criar meu agente de IA
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
          <div className="flex items-center gap-2 text-foreground/80">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-sm">Diagnóstico gratuito</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-sm">Prototipo funcional em 2 semanas</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-sm">ROI médio em 2-3 meses</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-sm">Suporte contínuo incluso</span>
          </div>
        </div>
      </div>
    </section>
  )
}
