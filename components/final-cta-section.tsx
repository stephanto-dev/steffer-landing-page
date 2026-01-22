"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function FinalCTASection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-accent via-accent/80 to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Quer ser parte dos 5% que fazem <span className="text-primary">IA funcionar?</span>
        </h2>

        <p className="text-xl md:text-2xl text-foreground/90 mb-10 text-balance leading-relaxed">
          Chega de ferramentas que ninguém usa. Vamos implementar IA que sua equipe vai amar.
        </p>

        <Button
          size="lg"
          onClick={() => scrollToSection("contato")}
          className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold px-12 py-6 h-auto mb-8 text-center text-sm"
        >
          Falar com especialista 
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
          <div className="flex items-center gap-2 text-foreground/80">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-sm">Diagnóstico 100% gratuito</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-sm">Sem compromisso de contratação</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-sm">Insights valiosos garantidos</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-sm">Primeira conversa em até 24h</span>
          </div>
        </div>
      </div>
    </section>
  )
}
