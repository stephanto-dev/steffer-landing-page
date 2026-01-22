"use client"

import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function DadosFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Quanto tempo leva para implementar?",
      answer:
        "Depende da complexidade. Projetos simples (1-2 fontes de dados, 1 dashboard) levam 3-4 semanas. Projetos médios (múltiplas fontes, vários dashboards) levam 6-8 semanas. Projetos complexos (integrações customizadas, múltiplos dashboards) podem levar 10-12 semanas. Sempre começamos com diagnóstico para dar timeline preciso.",
    },
    {
      question: "Preciso contratar ferramentas caras como Tableau?",
      answer:
        "Não necessariamente. Avaliamos suas necessidades e orçamento e recomendamos a melhor opção - pode ser desde Google Sheets (projetos pequenos) até Power BI, Looker ou soluções open-source como Metabase. Focamos em valor, não em vender ferramenta cara.",
    },
    {
      question: "E se eu não tenho muitos dados?",
      answer:
        "Todo negócio tem dados, mesmo que em planilhas. Começamos de onde você está e evoluímos. Às vezes o problema é justamente não estar coletando os dados certos - ajudamos nisso também. Não precisa ser big data para ter dashboards úteis.",
    },
    {
      question: "Meus dados estão seguros?",
      answer:
        "Sim. Seguimos best practices de segurança: conexões encriptadas, acesso controlado por roles, compliance com LGPD. Seus dados ficam na sua infraestrutura ou em cloud providers confiáveis (AWS, Google Cloud, Azure). Assinamos NDA se necessário.",
    },
    {
      question: "Posso fazer alterações depois?",
      answer:
        "Sim! Dashboards evoluem com seu negócio. Oferecemos planos de manutenção onde fazemos ajustes mensais, adicionamos novas métricas, integramos novas fontes. Data intelligence é processo contínuo, não projeto one-off.",
    },
    {
      question: "Quanto custa?",
      answer:
        "Varia conforme escopo. Projetos simples começam em R$ 8.000. Projetos médios entre R$ 15.000-30.000. Projetos complexos enterprise podem ser R$ 50.000+. Fazemos diagnóstico gratuito e proposta detalhada. ROI médio é de 4-6 meses.",
    },
    {
      question: "Vocês dão treinamento?",
      answer:
        "Sim! Todo projeto inclui treinamento da equipe que vai usar os dashboards. Também criamos documentação de métricas (o que cada número significa, como é calculado) e vídeos tutoriais. Queremos que você seja autônomo.",
    },
    {
      question: "E se meu sistema for muito específico/antigo?",
      answer:
        "Já trabalhamos com sistemas legados, ERPs customizados, planilhas Excel antigas, softwares proprietários. Se tem dados, conseguimos integrar. Às vezes requer desenvolvimento de API customizada ou ETL específico, mas é viável. Temos experiência com integrações complexas.",
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
            Tudo o que você precisa saber sobre dados e dashboards
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
