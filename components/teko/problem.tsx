"use client"

import { Card } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"

export function TekoProblem() {
  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            O <span className="text-primary">problema</span>
          </h2>
        </Reveal>

        <Reveal>
          <Card className="p-8 md:p-12 bg-background/50 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <AlertCircle className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  Quando a escala fica no WhatsApp e o repasse no Excel, ninguém tem controle real. O gestor perde
                  horas toda semana, os médicos reclamam das trocas, e o financeiro fecha o mês com erro.
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
