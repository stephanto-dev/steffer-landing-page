"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react"

export function GeoHero() {
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
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground/80">GEO - Generative Engine Optimization</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              Seja encontrado por <span className="text-primary">ChatGPT, Claude e Perplexity</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed text-pretty">
              SEO está mudando. Milhões de pessoas já usam LLMs para buscar informações. Se sua empresa não aparece nas
              respostas da IA, você está invisível para uma geração inteira de clientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold"
              >
                Otimizar para LLMs
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
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Aumente visibilidade em LLMs</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>Conteúdo otimizado para IA</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Por que GEO importa:</h3>
              <ul className="space-y-4">
                {[
                  "ChatGPT tem 200M+ usuários ativos",
                  "40% da Gen Z usa LLMs em vez do Google",
                  "Perplexity processa 500M+ buscas/mês",
                  "LLMs são a nova porta de entrada para clientes",
                  "Quem não aparece na IA, não existe",
                  "GEO é o novo SEO - comece agora",
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
