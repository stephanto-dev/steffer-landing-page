"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/motion/reveal"

interface Solution {
  title: string
  description: string
  href: string
}

interface RelatedSolutionsProps {
  solutions: Solution[]
}

export function RelatedSolutions({ solutions }: RelatedSolutionsProps) {
  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Veja <span className="text-primary">também</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <Reveal key={solution.href} index={index}>
              <Link href={solution.href}>
                <Card className="p-6 bg-background/50 border-primary/20 hover:border-primary/40 transition-colors h-full group">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{solution.title}</h3>
                  <p className="text-foreground/70 mb-4">{solution.description}</p>
                  <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                    <span>Saber mais</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
