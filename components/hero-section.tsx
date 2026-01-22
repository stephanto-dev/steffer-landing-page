"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, DollarSign, Users } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-20 md:pb-32 px-4 sm:px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent pointer-events-none" />

      {/* Floating decorative elements */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-card border border-primary/30 mb-4 sm:mb-6 animate-fade-in">
          <span className="text-xl sm:text-2xl">🤖</span>
          <span className="text-xs sm:text-sm text-foreground/80">+Automação e tecnologia para sua empresa</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance leading-tight animate-fade-in-up">
          A revolução da IA chegou e a <span className="text-primary">oportunidade de participar está passando</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed text-pretty animate-fade-in-up">
          No meio de tanta complexidade e novidade, ter ajuda de quem entende do assunto faz toda a diferença.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 animate-fade-in-up">
          <Button
            size="lg"
            onClick={() => scrollToSection("contato")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold text-sm sm:text-base px-6 sm:px-8 w-full sm:w-auto"
          >
            Agendar consultoria gratuita
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("servicos")}
            className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold text-sm sm:text-base px-6 sm:px-8 w-full sm:w-auto"
          >
            Ver como funciona
          </Button>
        </div>

        {/* Mini Stats */}
        <div className="flex flex-col gap-3 sm:gap-4 text-xs sm:text-sm text-foreground/70 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <span className="break-words">Até 70% menos tempo em tarefas repetitivas</span>
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <span>ROI médio em 3 meses</span>
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <span>Parceria humano + IA</span>
          </div>
        </div>
      </div>
    </section>
  )
}
