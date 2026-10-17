"use client"

import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/motion/reveal"

export function CaseWhy() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Por que <span className="text-primary">funcionou</span>
          </h2>
        </Reveal>

        <Reveal>
          <Card className="p-8 md:p-12 bg-background/50 border-primary/20">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Os médicos não precisaram aprender um aplicativo novo, porque tudo passa pelo WhatsApp. O financeiro
              passou a receber plantões já confirmados pela secretária, e as regras de repasse foram configuradas uma
              vez só, em vez de recalculadas todo mês.
            </p>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
