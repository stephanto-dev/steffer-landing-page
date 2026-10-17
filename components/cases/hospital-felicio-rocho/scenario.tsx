"use client"

import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/motion/reveal"

export function CaseScenario() {
  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            O <span className="text-primary">cenário</span>
          </h2>
        </Reveal>

        <Reveal>
          <Card className="p-8 md:p-12 bg-background/50 border-primary/20">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Antes do Teko, a escala de plantões vivia em planilhas e mensagens de WhatsApp, e o repasse dos médicos
              era calculado à mão. Trocas de plantão se perdiam, o gestor de escala gastava horas ajustando a planilha,
              e o financeiro fechava o mês com erros de repasse.
            </p>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
