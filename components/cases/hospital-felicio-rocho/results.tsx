"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, TrendingUp } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"

export function CaseResults() {
  const results = [
    "100% de adesão do corpo clínico ao novo fluxo de escala.",
    "Fim dos erros de repasse manual.",
    "Menos tempo de gestão administrativa para a equipe de escala.",
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-primary">Resultados</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <Reveal key={index} index={index}>
              <Card className="p-6 bg-background/50 border-primary/20 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  {index === 0 && <CheckCircle2 className="h-6 w-6 text-primary" />}
                  {index === 1 && <CheckCircle2 className="h-6 w-6 text-primary" />}
                  {index === 2 && <TrendingUp className="h-6 w-6 text-primary" />}
                </div>
                <p className="text-foreground/80 leading-relaxed">{result}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
