"use client"

import { Search, Zap, Wrench } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { Reveal } from "@/components/motion/reveal"

export function SolutionSection() {
  const reduceMotion = useReducedMotion()
  const solutions = [
    {
      icon: Search,
      title: "Mapeamento e Diagnóstico Profundo",
      description:
        "Entendemos seu negócio, sua equipe e seus processos antes de sugerir qualquer automação. Identificamos onde a IA realmente faz sentido.",
    },
    {
      icon: Zap,
      title: "Implementação Personalizada",
      description:
        "Criamos automações e agentes de IA sob medida que trabalham EM PARCERIA com sua equipe — economizando tempo sem substituir o fator humano.",
    },
    {
      icon: Wrench,
      title: "Suporte e Evolução Contínua",
      description:
        "Acompanhamento constante, ajustes e treinamento para garantir que a tecnologia continue gerando valor real.",
    },
  ]

  return (
    <section id="servicos" className="py-20 md:py-32 px-6 bg-card-secondary">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Como a Steffer resolve</h2>
          <p className="text-xl text-foreground/70 text-balance">
            Tecnologia que se encaixa no seu dia a dia, não o contrário
          </p>
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            className="absolute left-8 top-8 bottom-8 w-px bg-border hidden md:block origin-top"
            initial={{ scaleY: reduceMotion ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
          <div className="space-y-10 md:space-y-14">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Reveal key={index} index={index} className="relative flex flex-col md:flex-row gap-5 items-start">
                  <div className="flex-shrink-0 relative z-10 flex items-center gap-3 md:block">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <Icon className="h-6 w-6 text-primary md:hidden" />
                  </div>
                  <div className="flex-1 md:pt-3">
                    <div className="hidden md:flex items-center gap-3 mb-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="text-2xl font-semibold">{solution.title}</h3>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 md:hidden">{solution.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-lg">{solution.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
