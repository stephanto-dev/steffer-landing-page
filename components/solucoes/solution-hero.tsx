"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface SolutionHeroProps {
  title: string
  description: string
}

export function SolutionHero({ title, description }: SolutionHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight" dangerouslySetInnerHTML={{ __html: title }} />

          <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed text-pretty">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold"
            >
              <Link href="/diagnostico-gratuito">
                Agendar diagnóstico gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
