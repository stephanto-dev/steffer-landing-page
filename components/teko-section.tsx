"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, MessageSquare, Calendar, Calculator, Shield } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { Reveal } from "@/components/motion/reveal"

const EASE = [0.22, 1, 0.36, 1] as const

export function TekoSection() {
  const reduceMotion = useReducedMotion()
  const headerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ["start end", "center center"] })
  const headerY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 48, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])

  const features = [
    {
      icon: Calendar,
      title: "Gestão de Escalas",
      description: "Organização intuitiva de agendas médicas, eliminando planilhas e conflitos de horários.",
    },
    {
      icon: MessageSquare,
      title: "Integração WhatsApp",
      description: "Trocas de plantão nativas via WhatsApp, garantindo 100% de adesão do corpo clínico.",
    },
    {
      icon: Calculator,
      title: "Repasses Automáticos",
      description: "Cálculo preciso de repasses financeiros complexos, reduzindo erros administrativos.",
    },
    {
      icon: Shield,
      title: "Validação de Presença",
      description: "Fluxo de confirmação por secretárias e gestores, garantindo a execução do serviço.",
    },
  ]

  return (
    <section id="produtos" className="py-20 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-background to-card-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="flex-1 text-left">
            <motion.div ref={headerRef} style={{ y: headerY, opacity: headerOpacity }}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance">
                Conheça o <span className="text-primary">Teko</span>
              </h2>

              <p className="text-xl text-foreground/70 mb-8 leading-relaxed text-pretty">
                A plataforma definitiva para o "limbo administrativo" de hospitais de médio porte.
                Nascido no <strong>Hospital Felício Rocho</strong>, o Teko substitui processos informais
                por automação digital de alta adesão.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <Reveal key={index} index={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-foreground/60 leading-snug">{feature.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary h-14 px-8 text-base sm:text-lg" asChild>
                <Link href="https://teko.steffer.com.br" target="_blank">
                  Ver Plataforma <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 text-foreground hover:bg-primary/5 hover:text-foreground h-14 px-8 text-base sm:text-lg" asChild>
                <Link href="#contato">Solicitar Demonstração</Link>
              </Button>
            </Reveal>

            <p className="mt-6 text-sm text-foreground/50 italic">
              * Solução validada e em operação no Hospital Felício Rocho.
            </p>
          </div>

          {/* Visual / Screenshot Placeholder */}
          <motion.div
            className="flex-1 relative w-full max-w-[600px]"
            initial={{ opacity: 0, x: reduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 animate-pulse"></div>
            <div className="relative bg-card border border-primary/20 rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent"></div>

              {/* Fake UI Elements for the screenshot placeholder */}
              <div className="p-4 border-b border-primary/10 bg-muted/30 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-[10px] text-foreground/40 font-mono tracking-widest uppercase">teko.steffer.com.br</div>
              </div>

              <div className="p-8 flex flex-col h-full justify-center items-center text-center">
                <div className="w-20 h-20 mb-6 rounded-3xl bg-primary/10 flex items-center justify-center">
                   <Calendar className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Painel de Escalas</h4>
                <p className="text-foreground/60 max-w-[280px]">Interface intuitiva para gestão de plantões e trocas em tempo real via WhatsApp.</p>

                <div className="mt-10 w-full grid grid-cols-7 gap-2">
                  {[...Array(21)].map((_, i) => (
                    <div key={i} className={`h-8 rounded-md border border-primary/10 ${i === 12 ? 'bg-primary/40' : 'bg-primary/5'}`}></div>
                  ))}
                </div>
              </div>

              {/* Float Badge */}
              <motion.div
                className="absolute bottom-6 right-6 bg-background/90 backdrop-blur border border-primary/30 p-4 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.5, ease: EASE }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs text-foreground/60">Taxa de Adesão</div>
                    <div className="text-xl font-bold">100% via WhatsApp</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
