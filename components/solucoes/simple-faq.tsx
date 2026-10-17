"use client"

import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface SimpleFAQProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function SimpleFAQ({ faqs }: SimpleFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Perguntas <span className="text-primary">frequentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-background/50 border-primary/20 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-primary/5 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
