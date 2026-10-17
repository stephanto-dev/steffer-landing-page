"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/motion/reveal"
import { CONTACT } from "@/lib/constants"

export function CaseCTA() {
  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <Card className="p-8 md:p-12 bg-background/50 border-primary/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quer o <span className="text-primary">mesmo no seu hospital?</span>
            </h2>

            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Conheça o Teko ou agende uma demonstração pelo WhatsApp {CONTACT.whatsapp.display} ou pelo e-mail{" "}
              {CONTACT.email}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                <Link href="/teko">
                  Conhecer o Teko
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/50 text-foreground hover:bg-primary/10"
              >
                <a href={CONTACT.whatsapp.link} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
