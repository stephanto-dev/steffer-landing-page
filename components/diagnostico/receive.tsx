"use client"

import { Card } from "@/components/ui/card"
import { Search, Calculator, ListChecks, Clock } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"

export function DiagnosticoReceive() {
  const benefits = [
    {
      icon: Search,
      title: "Análise dos seus processos",
      description: "Com os que têm mais potencial de automação",
    },
    {
      icon: Calculator,
      title: "Cálculo de ROI",
      description: "Com a projeção de quanto tempo e dinheiro a automação economiza",
    },
    {
      icon: ListChecks,
      title: "Plano de ação",
      description: "Com as implementações ordenadas por impacto e esforço",
    },
    {
      icon: Clock,
      title: "Sessão de 45 minutos",
      description: "Com um especialista para tirar todas as dúvidas",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            O que você <span className="text-primary">recebe</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <Reveal key={index} index={index}>
              <Card className="p-8 bg-background/50 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-foreground/70">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
