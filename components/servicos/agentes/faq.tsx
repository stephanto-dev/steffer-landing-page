"use client"

import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function AgentesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "O agente vai substituir minha equipe?",
      answer:
        "Não! O agente cuida de perguntas repetitivas e casos simples (80% do volume). Sua equipe foca em casos complexos, vendas consultivas e relacionamento. O resultado é uma equipe mais produtiva e feliz, não desempregada.",
    },
    {
      question: "Quanto tempo leva para implementar?",
      answer:
        "Projetos simples (chatbot básico) levam 4-6 semanas. Projetos médios (múltiplas integrações) levam 6-8 semanas. Projetos complexos (agentes especializados com workflows avançados) podem levar 8-10 semanas. Sempre começamos com um piloto rápido.",
    },
    {
      question: "Quanto custa?",
      answer:
        "Investimento inicial: R$ 8.000-25.000 dependendo da complexidade. Manutenção mensal: R$ 500-2.000 (inclui hospedagem, monitoramento, ajustes). Compare com R$ 8.000/mês de um atendente humano. ROI médio em 2-3 meses.",
    },
    {
      question: "O agente entende português bem?",
      answer:
        "Sim! Usamos os melhores modelos de linguagem (GPT-4, Claude) que entendem português perfeitamente, incluindo gírias, erros de digitação e contexto. Treinamos especificamente para o vocabulário do seu negócio.",
    },
    {
      question: "E se o agente não souber responder?",
      answer:
        "Configuramos escalação inteligente. Se o agente não tem certeza ou detecta frustração, transfere para um humano automaticamente. Você define as regras de escalação. Nada de cliente preso falando com robô burro.",
    },
    {
      question: "Posso integrar com meus sistemas?",
      answer:
        "Sim! Integramos com WhatsApp, Instagram, site, CRM (HubSpot, Pipedrive, RD Station), sistemas de agendamento, ERPs, e-commerce, etc. Se tem API, conseguimos integrar. Se não tem, criamos uma.",
    },
    {
      question: "Como garanto que o agente não vai falar besteira?",
      answer:
        "Testamos exaustivamente antes do deploy. Configuramos guardrails (limites do que pode/não pode falar). Monitoramos todas as conversas. Você tem dashboard para revisar e aprovar respostas. Evoluímos baseado em feedback real.",
    },
    {
      question: "Posso treinar o agente com meus dados?",
      answer:
        "Sim! Alimentamos o agente com seus FAQs, políticas, catálogo de produtos, casos de uso reais. Quanto mais informação você fornecer, melhor o agente responde. Seus dados ficam seguros e privados.",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Perguntas <span className="text-primary">frequentes</span>
          </h2>
          <p className="text-lg text-foreground/70 text-pretty">Tudo o que você precisa saber sobre agentes de IA</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-card border-primary/20 overflow-hidden">
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
