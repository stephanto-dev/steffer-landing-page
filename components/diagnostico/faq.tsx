"use client"

import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function DiagnosticoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Quanto custa uma automação com IA na Steffer?",
      answer: "Os projetos iniciais custam até R$ 10 mil. O valor exato depende do escopo e sai do diagnóstico gratuito.",
    },
    {
      question: "Quanto tempo leva para implementar?",
      answer:
        "Projetos simples, com 1 ou 2 automações, levam de 3 a 4 semanas. Projetos com várias automações e integrações levam de 6 a 8 semanas. Transformações completas de processo podem levar de 10 a 12 semanas.",
    },
    {
      question: "Preciso ter conhecimento técnico?",
      answer:
        "Não. A Steffer cuida da implementação do início ao fim e treina sua equipe para usar as automações.",
    },
    {
      question: "Posso começar pequeno e expandir depois?",
      answer: "Sim. Dá pra começar com uma ou duas automações e ampliar conforme os resultados aparecem.",
    },
    {
      question: "Vocês dão suporte depois da entrega?",
      answer:
        "Sim. O acompanhamento continua depois da entrega, com suporte técnico, manutenção e ajustes conforme o negócio muda.",
    },
    {
      question: "O que a Steffer automatiza?",
      answer:
        "Atendimento ao cliente com chatbots e agentes de IA no WhatsApp, processamento de documentos e dados, relatórios e dashboards, integrações entre sistemas como CRM e ERP, e workflows de aprovação e notificações.",
    },
    {
      question: "Para que tipo de empresa?",
      answer:
        "Pequenas e médias empresas brasileiras, principalmente de saúde, e-commerce, serviços, agências e consultorias, e times comerciais.",
    },
    {
      question: "E se meu sistema for muito específico?",
      answer: "A gente entende a dor e cria a solução específica para o cliente.",
    },
    {
      question: "Meus dados estão seguros?",
      answer: "O banco de dados é seguro e criptografado.",
    },
    {
      question: "O diagnóstico é mesmo gratuito?",
      answer: "Sim, gratuito e sem compromisso de contratação.",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
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
