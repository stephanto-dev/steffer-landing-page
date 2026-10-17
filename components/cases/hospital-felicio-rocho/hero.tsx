"use client"

import { CheckCircle2 } from "lucide-react"

export function CaseHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            Hospital Felício Rocho: <span className="text-primary">100% de adesão do corpo clínico</span> e fim dos
            erros de repasse manual
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty max-w-3xl mx-auto">
            <strong>Em resumo:</strong> o Hospital Felício Rocho, hospital de alta complexidade em Belo Horizonte (MG),
            substituiu as planilhas de escala e o cálculo manual de repasse pelo Teko, software de escala médica
            desenvolvido pela Steffer. O corpo clínico aderiu 100% e os erros de repasse manual acabaram.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
          <div className="flex items-center gap-3 justify-center">
            <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
            <span className="text-lg font-semibold">100% de adesão</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
            <span className="text-lg font-semibold">Zero erros de repasse</span>
          </div>
        </div>
      </div>
    </section>
  )
}
