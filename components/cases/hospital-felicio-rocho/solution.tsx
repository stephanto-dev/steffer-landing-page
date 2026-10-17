"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"

export function CaseSolution() {
  const features = [
    "Escala digital com validação automática, no lugar das planilhas, com alertas de conflito e trava de qualificação por setor.",
    "Troca de plantão pelo WhatsApp, o aplicativo que os médicos já usavam, sem precisar instalar nada.",
    "Repasse automático, calculado por profissional e unidade a partir dos plantões confirmados.",
    "Histórico de presenças e alterações, para conformidade e auditoria.",
  ]

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            O que foi <span className="text-primary">feito</span>
          </h2>
        </Reveal>

        <Reveal>
          <Card className="p-8 md:p-12 bg-background/50 border-primary/20">
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              A Steffer começou mapeando como a escala e o repasse funcionavam no dia a dia do hospital e, a partir
              disso, desenvolveu o Teko lá dentro:
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
