"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { Reveal } from "@/components/motion/reveal"

const EASE = [0.22, 1, 0.36, 1] as const

export function FinalCTASection() {
  const reduceMotion = useReducedMotion()
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-accent via-accent/80 to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">
          Quer ser parte dos 5% que fazem <span className="text-primary-bright">IA funcionar?</span>
        </h2>

        <p className="text-xl md:text-2xl text-white/90 mb-10 text-balance leading-relaxed">
          Chega de ferramentas que ninguém usa. Vamos implementar IA que sua equipe vai amar.
        </p>

        <Button
          size="lg"
          onClick={() => scrollToSection("contato")}
          className="bg-primary-bright text-primary-bright-foreground hover:bg-primary-bright/90 glow-primary-bright font-semibold h-14 px-8 text-base sm:text-lg mb-8"
        >
          Falar com especialista
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
          {[
            "Diagnóstico 100% gratuito",
            "Sem compromisso de contratação",
            "Insights valiosos garantidos",
            "Primeira conversa em até 24h",
          ].map((item, index) => (
            <Reveal key={item} index={index} y={12} className="flex items-center gap-2 text-white/80">
              <CheckCircle className="h-5 w-5 text-primary-bright flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </Reveal>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
