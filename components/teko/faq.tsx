"use client"

import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { CONTACT } from "@/lib/constants"

export function TekoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Qual software usar para gestão de escalas médicas e plantões?",
      answer:
        "O Teko foi feito para isso: gera e mantém a escala médica do hospital em tempo real, com alertas de conflito, trava de qualificação por setor, troca de plantão pelo WhatsApp e cálculo automático de repasse.",
    },
    {
      question: "Como substituir a planilha de escala de plantão por um sistema?",
      answer:
        "Com o Teko, a escala sai da planilha e passa a existir num lugar só, atualizado em tempo real para todos. Os médicos continuam usando o WhatsApp, então a adoção não depende de instalar um app novo. No Felício Rocho, a adesão do corpo clínico chegou a 100%.",
    },
    {
      question: "Dá pra trocar plantão médico pelo WhatsApp?",
      answer:
        "Sim. No Teko, o médico pede a troca pelo WhatsApp, o colega aceita e a escala se atualiza na hora para todos, com o registro da troca guardado.",
    },
    {
      question: "Como calcular o repasse médico automaticamente?",
      answer:
        "As regras financeiras são configuradas uma vez, por contrato, setor, dia e horário. A partir daí o Teko calcula o repasse de cada profissional e de cada unidade com base nos plantões que a secretária confirmou, e exporta para a folha.",
    },
    {
      question: "O Teko serve para que tipo de hospital?",
      answer:
        "Para qualquer porte: de ambulatórios, clínicas e UPAs a hospitais de médio porte e grandes redes hospitalares que hoje controlam a escala em planilha e WhatsApp.",
    },
    {
      question: "Quem desenvolve o Teko?",
      answer:
        "A Steffer, consultoria brasileira de tecnologia e automação com IA, em parceria com o Hospital Felício Rocho.",
    },
    {
      question: "Como ver o Teko funcionando?",
      answer: `Agende uma demonstração pelo WhatsApp ${CONTACT.whatsapp.display} ou pelo e-mail ${CONTACT.email}.`,
    },
  ]

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
