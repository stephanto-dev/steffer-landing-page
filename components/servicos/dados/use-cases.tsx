"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DadosUseCases() {
  const cases = [
    {
      title: "Agência de Marketing",
      subtitle: "Unified Client Dashboard",
      challenge:
        "Agência gerenciando 20+ clientes. Dados espalhados em Google Analytics, Meta Ads, Google Ads, LinkedIn. 15h/semana criando relatórios manuais em PowerPoint. Clientes pedindo updates constantes.",
      solution: [
        "Integração de todas as plataformas via APIs",
        "Dashboard individual por cliente (white-label)",
        "Atualização automática a cada 2 horas",
        "Relatórios PDF automáticos enviados todo dia 1",
        "Portal onde cliente acessa dashboard 24/7",
      ],
      results: [
        "Zero horas/semana em relatórios manuais (vs 15h antes)",
        "NPS de clientes aumentou de 7.8 para 9.1",
        "Renovação de contratos subiu de 75% para 92%",
        "Agência conseguiu pegar 5 novos clientes sem contratar",
      ],
      metrics: "ROI em 1.5 meses | 15h economizadas/semana",
    },
    {
      title: "E-commerce de Moda",
      subtitle: "Real-time Operations Dashboard",
      challenge:
        "Loja online R$ 2M/ano. Decisões de compra baseadas em feeling. Descobriam produtos esgotados quando clientes reclamavam. Não sabiam quais produtos estavam performando. Campanhas de marketing sem visibilidade de ROI.",
      solution: [
        "Dashboard integrado: Shopify + Google Analytics + Meta Ads + Bling (ERP)",
        "Visão real-time de vendas, estoque, marketing ROI, produtos em alta",
        "Alertas automáticos: estoque baixo, produto sem venda há 30 dias",
        "Análise preditiva de demanda por produto",
      ],
      results: [
        "Redução de 40% em stock-outs",
        "Aumento de 28% no sell-through rate",
        "Marketing ROAS melhorou de 2.3x para 4.1x",
        "Tempo de decisão de recompra: 1 semana → 1 dia",
      ],
      metrics: "ROI em 2 meses | ROAS +78%",
    },
    {
      title: "SaaS B2B",
      subtitle: "Customer Health Dashboard",
      challenge:
        "Software de gestão, 300+ clientes ativos. Churn de 8% ao mês (muito alto). Não sabiam quais clientes estavam em risco. CS team reativo, não proativo. Upsell opportunities perdidas.",
      solution: [
        "Customer Health Score baseado em 12 variáveis",
        "Dashboard com categorização automática: Green/Yellow/Red",
        "Alertas quando cliente muda de zona",
        "Playbooks automáticos sugeridos",
        "Integração: product analytics, support, billing, CRM",
      ],
      results: [
        "Churn reduziu de 8% para 3.2% ao mês",
        "45% dos clientes em risco salvos proativamente",
        "Identificação de R$ 180k em oportunidades de upsell",
        "CS team 3x mais eficiente",
      ],
      metrics: "ROI em 3 meses | Churn -60%",
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
            Casos reais de <span className="text-primary">data intelligence</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Empresas que transformaram dados caóticos em decisões inteligentes
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
            Criar meus dashboards
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
