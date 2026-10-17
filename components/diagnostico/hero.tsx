"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { CONTACT } from "@/lib/constants"

export function DiagnosticoHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            Diagnóstico gratuito: <span className="text-primary">descubra o que vale a pena automatizar</span> na sua
            empresa
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed text-pretty">
            Antes de vender qualquer tecnologia, a Steffer entende como sua empresa funciona. O diagnóstico é uma
            conversa de 45 minutos com um especialista. Você sai dela sabendo quais processos vale automatizar com IA,
            quanto isso economiza e por onde começar. É gratuito e sem compromisso de contratação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold"
            >
              Agendar diagnóstico
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-foreground/60">
            <span>WhatsApp</span>
            <a href={CONTACT.whatsapp.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              {CONTACT.whatsapp.display}
            </a>
            <span className="hidden sm:inline">·</span>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
