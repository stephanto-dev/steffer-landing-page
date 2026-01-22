"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GeoUseCases() {
  const cases = [
    {
      title: "SaaS de Gestão Financeira",
      subtitle: "De invisível para referência em LLMs",
      challenge:
        "Empresa tinha bom SEO no Google mas era completamente ignorada por ChatGPT e Claude quando usuários perguntavam sobre software de gestão financeira. Concorrentes eram sempre citados.",
      solution: [
        "Auditoria completa de como LLMs respondiam sobre o nicho",
        "Criação de guias definitivos sobre gestão financeira para PMEs",
        "Publicação de estudo original com dados do setor",
        "Otimização de schema markup e structured data",
        "Campanha de PR em publicações de negócios",
      ],
      results: [
        "ChatGPT começou a citar a empresa em 60% das queries relevantes",
        "Menções em Perplexity aumentaram 400%",
        "Tráfego de referral de LLMs cresceu 250%",
        "Leads qualificados vindos de LLMs: +180/mês",
        "Posicionamento como thought leader no nicho",
      ],
      metrics: "ROI em 4 meses | 180 leads/mês via LLMs",
    },
    {
      title: "Consultoria de Marketing Digital",
      subtitle: "Dominando respostas de IA sobre marketing",
      challenge:
        "Consultoria com 10 anos de mercado mas zero presença em LLMs. Quando usuários perguntavam sobre estratégias de marketing, nunca eram mencionados. Perdendo clientes para concorrentes mais visíveis.",
      solution: [
        "Criação de biblioteca de conteúdo otimizado para GEO",
        "50+ artigos aprofundados sobre táticas de marketing",
        "Dados originais de campanhas (anonimizados)",
        "Guest posts em sites de autoridade (HubSpot, Neil Patel)",
        "Otimização de perfis em plataformas relevantes",
      ],
      results: [
        "Claude cita a consultoria em 70% das queries sobre marketing digital",
        "Apareceram em top 3 recomendações do Perplexity",
        "Inbound leads aumentaram 320%",
        "Ticket médio de clientes vindos de LLMs: 40% maior",
        "Autoridade percebida disparou",
      ],
      metrics: "ROI em 3 meses | 320% aumento em leads",
    },
    {
      title: "E-commerce de Suplementos",
      subtitle: "Educação via LLMs gerando vendas",
      challenge:
        "Mercado de suplementos é competitivo. Google Ads caro. SEO saturado. Precisavam de novo canal de aquisição. LLMs eram oportunidade inexplorada.",
      solution: [
        "Criação de guias educacionais sobre suplementação",
        "Conteúdo baseado em ciência com fontes citadas",
        "FAQs extensos sobre cada categoria de produto",
        "Parcerias com nutricionistas para autoridade",
        "Schema markup de produtos e reviews",
      ],
      results: [
        "ChatGPT recomenda a loja quando perguntado sobre suplementos específicos",
        "Tráfego orgânico de LLMs: 2.500 visitas/mês",
        "Taxa de conversão de tráfego LLM: 8.5% (vs 2.3% média)",
        "CAC de clientes via LLMs: 60% menor que Google Ads",
        "LTVde clientes LLM: 35% maior (mais educados)",
      ],
      metrics: "ROI em 2 meses | CAC 60% menor",
    },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="casos" className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Casos reais de <span className="text-primary">GEO</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Empresas que se tornaram referência em LLMs e explodiram em visibilidade
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((useCase, index) => (
            <Card key={index} className="p-8 md:p-12 bg-background/50 border-primary/20">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-primary font-semibold">{useCase.subtitle}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-foreground/90">O Desafio:</h4>
                  <p className="text-foreground/70 leading-relaxed mb-6">{useCase.challenge}</p>

                  <h4 className="font-bold text-lg mb-3 text-foreground/90">A Solução:</h4>
                  <ul className="space-y-2">
                    {useCase.solution.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/70">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 text-foreground/90">Resultados:</h4>
                  <ul className="space-y-3 mb-6">
                    {useCase.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-foreground/80 leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <p className="text-primary font-bold text-center">{useCase.metrics}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => scrollToSection("contato")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold"
          >
            Começar minha estratégia GEO
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
