"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ConsultoriaUseCases() {
  const cases = [
    {
      title: "E-commerce de Moda",
      subtitle: "Automação de atendimento e gestão de estoque",
      challenge:
        "Loja online recebia 200+ mensagens/dia no WhatsApp. Equipe de 3 pessoas não dava conta. Estoque desorganizado causava vendas perdidas.",
      solution: [
        "Chatbot inteligente no WhatsApp para dúvidas frequentes, rastreamento de pedidos e recomendações",
        "Integração Shopify + ERP para atualização automática de estoque",
        "Alertas automáticos quando produto está acabando",
        "Dashboard em tempo real de vendas e estoque",
      ],
      results: [
        "85% das mensagens resolvidas automaticamente",
        "Tempo de resposta: 2h → 2 minutos",
        "Zero stock-outs em 6 meses",
        "Equipe focou em vendas complexas e aumentou ticket médio em 32%",
      ],
      metrics: "ROI em 2 meses | Economia de 15h/semana",
    },
    {
      title: "Agência de Marketing",
      subtitle: "Automação de relatórios e gestão de clientes",
      challenge:
        "Agência com 25 clientes gastava 20h/semana criando relatórios manuais em PowerPoint. Dados espalhados em múltiplas plataformas.",
      solution: [
        "Integração de todas as plataformas (Google Ads, Meta, Analytics, LinkedIn)",
        "Dashboards automáticos por cliente com atualização em tempo real",
        "Relatórios PDF gerados e enviados automaticamente todo dia 1",
        "Portal white-label onde cliente acessa dados 24/7",
      ],
      results: [
        "Zero horas em relatórios manuais (vs 20h/semana)",
        "NPS de clientes: 7.8 → 9.1",
        "Taxa de renovação: 75% → 92%",
        "Conseguiram pegar 5 novos clientes sem contratar",
      ],
      metrics: "ROI em 1.5 meses | R$ 12k economizados/mês",
    },
    {
      title: "Escritório de Contabilidade",
      subtitle: "Automação de processos e gestão de documentos",
      challenge:
        "80 clientes empresariais. Coleta de documentos era caótica. Equipe perdia horas perseguindo clientes por documentos faltantes.",
      solution: [
        "Portal automatizado de upload de documentos com lembretes",
        "Classificação automática de documentos via IA",
        "Workflow de aprovação e notificações automáticas",
        "Dashboard de status por cliente (verde/amarelo/vermelho)",
      ],
      results: [
        "Tempo de coleta de docs: 2 semanas → 3 dias",
        "95% dos clientes entregam docs no prazo (vs 60%)",
        "Equipe economizou 12h/semana em follow-ups",
        "Conseguiram atender 20 clientes a mais sem contratar",
      ],
      metrics: "ROI em 3 meses | 12h economizadas/semana",
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
            Casos reais de <span className="text-primary">automação</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Empresas que transformaram operações caóticas em máquinas eficientes
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
            Quero resultados assim também
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
