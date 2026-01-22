"use client"

import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function GeoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "GEO substitui SEO?",
      answer:
        "Não! GEO complementa SEO. Você precisa de ambos. SEO para motores de busca tradicionais (Google, Bing), GEO para LLMs (ChatGPT, Claude, Perplexity). São audiências diferentes com comportamentos diferentes. Empresas inteligentes investem nos dois.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "Primeiras citações em LLMs: 4-8 semanas. Resultados consistentes: 3-4 meses. GEO é jogo de médio prazo, não overnight. Mas quem começa agora tem vantagem gigante sobre quem esperar. Assim como SEO nos anos 2000.",
    },
    {
      question: "Como vocês medem sucesso em GEO?",
      answer:
        "Rastreamos: (1) Frequência de citações em LLMs, (2) Posição nas respostas (top 3 vs menção), (3) Tráfego de referral de LLMs, (4) Leads gerados via LLMs, (5) Share of voice vs concorrentes. Criamos dashboard customizado para acompanhar.",
    },
    {
      question: "Meu nicho é muito específico, GEO funciona?",
      answer:
        "Sim! Na verdade, nichos específicos são ideais para GEO. LLMs adoram responder perguntas específicas com fontes autoritativas. Se você é especialista em algo, GEO te posiciona como A referência. Nichos genéricos são mais difíceis.",
    },
    {
      question: "Quanto custa?",
      answer:
        "Investimento inicial: R$ 12.000-35.000 dependendo do escopo (auditoria, otimização, criação de conteúdo, PR). Manutenção mensal: R$ 3.000-8.000 (conteúdo contínuo, monitoramento, ajustes). ROI médio em 4-6 meses. Fazemos diagnóstico gratuito primeiro.",
    },
    {
      question: "Posso fazer GEO sozinho?",
      answer:
        "Tecnicamente sim, mas é complexo. Requer: (1) Entender como LLMs funcionam, (2) Criar conteúdo otimizado, (3) Construir autoridade digital, (4) Implementar structured data, (5) Monitorar citações. A maioria das empresas não tem expertise ou tempo. Terceirizar acelera resultados.",
    },
    {
      question: "GEO funciona para e-commerce?",
      answer:
        "Sim! Especialmente para produtos que requerem educação (suplementos, eletrônicos, ferramentas). LLMs recomendam produtos quando usuários perguntam 'qual o melhor X para Y'. Se você não está otimizado, concorrentes levam a venda. E-commerce + conteúdo educacional = combinação perfeita.",
    },
    {
      question: "E se LLMs mudarem como funcionam?",
      answer:
        "Princípios de GEO são fundamentais: conteúdo de qualidade, autoridade, estrutura clara, dados factuais. Mesmo que LLMs evoluam, esses pilares continuam relevantes. Além disso, monitoramos mudanças e ajustamos estratégia continuamente. GEO é processo vivo, não set-and-forget.",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Perguntas <span className="text-primary">frequentes</span>
          </h2>
          <p className="text-lg text-foreground/70 text-pretty">Tudo o que você precisa saber sobre GEO</p>
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
