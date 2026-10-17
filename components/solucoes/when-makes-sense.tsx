"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"

interface WhenMakesSenseProps {
  points: string[]
}

export function WhenMakesSense({ points }: WhenMakesSenseProps) {
  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Quando <span className="text-primary">faz sentido</span>
          </h2>
        </Reveal>

        <Reveal>
          <Card className="p-8 md:p-12 bg-background/50 border-primary/20">
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
