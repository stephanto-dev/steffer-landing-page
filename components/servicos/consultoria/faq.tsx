"use client"

import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function ConsultoriaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Quanto tempo leva para implementar?",
      answer:
        "Depende da complexidade. Projetos simples (1-2 automações) levam 3-4 semanas. Projetos médios (múltiplas automações e integrações) levam 6-8 semanas. Projetos complexos (transformação completa de processos) podem levar 10-12 semanas. Sempre começamos com diagnóstico para dar timeline preciso.",
    },
    {
      question: "Quanto custa?",
      answer:
        "Varia conforme escopo. Projetos simples começam em R$ 8.000. Projetos médios ficam entre R$ 15.000-30.000. Projetos complexos enterprise podem ser R$ 50.000+. Fazemos diagnóstico gratuito e proposta detalhada antes de qualquer compromisso. O ROI médio é de 3 meses.",
    },
    {
      question: "Preciso ter conhecimento técnico?",
      answer:
        "Não! Esse é nosso trabalho. Você precisa entender seu negócio, nós cuidamos da tecnologia. Fazemos todo o trabalho técnico e treinamos sua equipe para usar as automações. Criamos interfaces simples e intuitivas.",
    },
    {
      question: "E se meu sistema for muito específico?",
      answer:
        "Já trabalhamos com sistemas legados, ERPs customizados, planilhas Excel antigas, softwares proprietários. Se tem dados, conseguimos integrar. Às vezes requer desenvolvimento de API customizada, mas é viável. Temos experiência com integrações complexas.",
    },
    {
      question: "Vocês dão suporte depois?",
      answer:
        "Sim! Todo projeto inclui 30 dias de suporte pós-implementação. Depois oferecemos planos de manutenção mensal onde fazemos ajustes, adicionamos features, integramos novos sistemas. Automações precisam evoluir com seu negócio.",
    },
    {
      question: "Como garantem que vai funcionar?",
      answer:
        "Começamos com diagnóstico profundo, não vendemos antes de entender. Fazemos implementação em fases com validação contínua. Treinamos sua equipe. Medimos resultados desde o dia 1. Se algo não funcionar, ajustamos até funcionar. Nosso sucesso depende do seu.",
    },
    {
      question: "Posso começar pequeno e expandir?",
      answer:
        "Sim! Recomendamos começar com 1-2 processos de alto impacto, validar resultados, depois expandir. É menos arriscado e gera buy-in da equipe. Muitos clientes começam com um piloto e depois automatizam toda a operação.",
    },
    {
      question: "Meus dados estão seguros?",
      answer:
        "Sim. Seguimos best practices de segurança: conexões encriptadas, acesso controlado por roles, compliance com LGPD. Seus dados ficam na sua infraestrutura ou em cloud providers confiáveis (AWS, Google Cloud, Azure). Assinamos NDA se necessário.",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Perguntas <span className="text-primary">frequentes</span>
          </h2>
          <p className="text-lg text-foreground/70 text-pretty">
            Tudo o que você precisa saber sobre consultoria e automação
          </p>
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
