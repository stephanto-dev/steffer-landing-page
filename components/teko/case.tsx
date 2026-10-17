"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/motion/reveal"

export function TekoCase() {
  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Caso: <span className="text-primary">Hospital Felício Rocho</span>
          </h2>
        </Reveal>

        <Reveal>
          <Card className="p-8 md:p-12 bg-background/50 border-primary/20">
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              O Hospital Felício Rocho, de alta complexidade, em Belo Horizonte, trocou as planilhas de escala e o
              cálculo manual de repasse pelo Teko. O resultado foi 100% de adesão do corpo clínico e o fim dos erros de
              repasse manual.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span className="text-lg font-semibold">100% de adesão do corpo clínico</span>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span className="text-lg font-semibold">Fim dos erros de repasse manual</span>
            </div>

            <Button size="lg" variant="outline" asChild className="border-primary/50 text-foreground hover:bg-primary/10">
              <Link href="/cases/hospital-felicio-rocho">
                Ler o caso completo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
