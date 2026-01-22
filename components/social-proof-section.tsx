"use client"

import { Card } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "Reduzimos 15 horas por semana em atendimento manual. O chatbot da Steffer paga sozinho todo mês.",
    author: "Leandro Ferreira",
    role: "Sócio Administrador",
    company: "Gonfer Construir",
    rating: 5,
  },
  {
    quote: "Finalmente uma consultoria que entende de negócio, não só de tecnologia. Implementação impecável.",
    author: "Luciana Gonçalves",
    role: "Dona",
    company: "Loja Megamix",
    rating: 5,
  },
  {
    quote: "Fizeram em dias algo muito melhor o que a equipe de desenvolvimento demorou meses para entregar",
    author: "Dr. Lourenço",
    role: "Médico",
    company: "Hospital Felicio Roxo",
    rating: 5,
  },
]

const stats = [
  { value: "50+", label: "empresas atendidas" },
  { value: "500+", label: "horas economizadas/mês" },
  { value: "95%", label: "taxa de satisfação" },
]

export function SocialProofSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Empresas que confiam na <span className="text-primary">Steffer</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Resultados reais de empresas que transformaram suas operações com automação inteligente
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-background/50 border-primary/20">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/70">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-background/50 border-primary/20 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 mb-6 leading-relaxed text-pretty">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="border-t border-primary/20 pt-4">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-foreground/60">
                  {testimonial.role} @ {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
