"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as const

const trustSignals = [
  "Até 70% menos tempo em tarefas repetitivas",
  "ROI médio em 3 meses",
  "Parceria humano + IA",
]

const clients = [
  { name: "Gonfer Construir", initial: "G" },
  { name: "Loja Megamix", initial: "M" },
  { name: "Hospital Felício Rocho", initial: "H" },
]

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-primary/[0.14]",
  reduceMotion,
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
  reduceMotion: boolean | null
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -80, rotate: rotate - 12 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 1.8, delay, ease: EASE, opacity: { duration: 1 } }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, 16, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border border-primary/10 shadow-[0_8px_32px_0_rgba(11,203,191,0.10)]`}
        />
      </motion.div>
    </motion.div>
  )
}

function ClientCard({ reduceMotion }: { reduceMotion: boolean | null }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end center"] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])

  return (
    <div ref={ref} className="w-full max-w-sm mt-10">
      <motion.div
        style={{ scale, opacity, y }}
        className="relative rounded-2xl border border-primary/20 bg-card/90 p-5 shadow-2xl shadow-primary/10 backdrop-blur-sm origin-bottom"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-semibold text-foreground/60">Clientes atendidos</span>
        </div>
        <div className="flex flex-col gap-1.5">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: reduceMotion ? 0 : 0.5 + i * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 rounded-lg bg-muted/60 px-3 py-2.5"
            >
              <div className="h-7 w-7 shrink-0 rounded-full bg-primary/15 flex items-center justify-center text-[11px] font-bold text-primary">
                {client.initial}
              </div>
              <span className="flex-1 truncate text-sm font-medium text-foreground">{client.name}</span>
              <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                <Check className="h-2.5 w-2.5" /> Ativo
              </span>
            </motion.div>
          ))}
        </div>

        <div className="absolute -top-3 -right-3 rounded-xl border border-primary/20 bg-card px-3.5 py-2 shadow-lg">
          <p className="text-lg font-black text-primary leading-none">70%</p>
          <p className="mt-0.5 text-[10px] text-foreground/50">Menos tempo</p>
        </div>
        <div className="absolute -bottom-3 -left-3 rounded-xl border border-primary/20 bg-card px-3.5 py-2 shadow-lg">
          <p className="text-lg font-black text-primary leading-none">3 meses</p>
          <p className="mt-0.5 text-[10px] text-foreground/50">ROI médio</p>
        </div>
      </motion.div>
    </div>
  )
}

export function HeroSection() {
  const reduceMotion = useReducedMotion()
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-4 sm:px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent pointer-events-none" />

      {/* Floating decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.3}
          width={520}
          height={120}
          rotate={12}
          gradient="from-primary/[0.14]"
          className="left-[-8%] top-[16%]"
          reduceMotion={reduceMotion}
        />
        <ElegantShape
          delay={0.5}
          width={380}
          height={95}
          rotate={-14}
          gradient="from-accent/[0.10]"
          className="right-[-4%] top-[62%]"
          reduceMotion={reduceMotion}
        />
        <ElegantShape
          delay={0.4}
          width={260}
          height={65}
          rotate={-7}
          gradient="from-primary/[0.12]"
          className="left-[4%] bottom-[10%]"
          reduceMotion={reduceMotion}
        />
        <ElegantShape
          delay={0.6}
          width={170}
          height={48}
          rotate={22}
          gradient="from-accent/[0.10]"
          className="right-[16%] top-[10%]"
          reduceMotion={reduceMotion}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance leading-tight animate-fade-in-up">
          A revolução da IA chegou e a <span className="text-primary">oportunidade de participar está passando</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed text-pretty animate-fade-in-up">
          No meio de tanta complexidade e novidade, ter ajuda de quem entende do assunto faz toda a diferença.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up">
          <Button
            size="lg"
            onClick={() => scrollToSection("contato")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary glow-primary-breathing font-semibold h-14 px-8 text-base sm:text-lg w-full sm:w-auto"
          >
            Agendar consultoria gratuita
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("servicos")}
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:text-foreground font-semibold h-14 px-8 text-base sm:text-lg w-full sm:w-auto"
          >
            Ver como funciona
          </Button>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-8 animate-fade-in-up">
          {trustSignals.map((signal) => (
            <div key={signal} className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
              <span className="text-xs text-foreground/60">{signal}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <ClientCard reduceMotion={reduceMotion} />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollToSection("credibilidade")}
        aria-label="Rolar para o próximo conteúdo"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/40 hover:text-primary transition-colors"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>
    </section>
  )
}
