"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function GeoCTA() {
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
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">
          Pronto para ser citado por <span className="text-primary-bright">ChatGPT e Claude?</span>
        </h2>

        <p className="text-xl md:text-2xl text-white/90 mb-10 text-balance leading-relaxed">
          Agende um diagnóstico gratuito e descubra como LLMs atualmente respondem sobre seu nicho
        </p>

        <Button
          size="lg"
          onClick={() => scrollToSection("contato")}
          className="bg-primary-bright text-primary-bright-foreground hover:bg-primary-bright/90 glow-primary-bright font-semibold h-14 px-8 text-base sm:text-lg mb-8"
        >
          Começar minha estratégia GEO
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
          <div className="flex items-center gap-2 text-white/80">
            <CheckCircle className="h-5 w-5 text-primary-bright flex-shrink-0" />
            <span className="text-sm">Auditoria gratuita de visibilidade</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <CheckCircle className="h-5 w-5 text-primary-bright flex-shrink-0" />
            <span className="text-sm">Análise de concorrentes</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <CheckCircle className="h-5 w-5 text-primary-bright flex-shrink-0" />
            <span className="text-sm">Roadmap personalizado</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <CheckCircle className="h-5 w-5 text-primary-bright flex-shrink-0" />
            <span className="text-sm">Sem compromisso</span>
          </div>
        </div>
      </div>
    </section>
  )
}
