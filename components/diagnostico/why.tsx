"use client"

import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/motion/reveal"

export function DiagnosticoWhy() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Por que começar pelo <span className="text-primary">diagnóstico</span>
          </h2>
        </Reveal>

        <Reveal>
          <Card className="p-8 md:p-12 bg-background/50 border-primary/20">
            <p className="text-lg text-foreground/80 leading-relaxed text-center">
              Muitas empresas compram ferramentas antes de entender os próprios processos, e a automação acaba não sendo
              usada. Começar pelo diagnóstico garante que a tecnologia resolva um problema real da sua operação.
            </p>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
