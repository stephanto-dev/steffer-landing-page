"use client"

import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/motion/reveal"

export function DiagnosticoHow() {
  const steps = [
    "Você preenche o formulário ou chama no WhatsApp, e a Steffer responde em até 24 horas.",
    "Na sessão de 45 minutos, mapeamos como sua equipe trabalha hoje e onde perde tempo.",
    "Você recebe o plano com as oportunidades priorizadas e a estimativa de ROI.",
    "Se fizer sentido, a implementação leva de 4 a 8 semanas. Se não fizer, você fica com o plano.",
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Como <span className="text-primary">funciona</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <Reveal key={index} index={index}>
              <Card className="p-8 bg-background/50 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed mt-1">{step}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
