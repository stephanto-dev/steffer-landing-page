"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AgentesUseCases() {
  const cases = [
    {
      title: "E-commerce de Eletrônicos",
      subtitle: "Agente de atendimento no WhatsApp",
      challenge:
        "Loja recebia 300+ mensagens/dia no WhatsApp. Perguntas sobre especificações, estoque, frete. Equipe de 2 pessoas não conseguia acompanhar. Tempo de resposta de 4-6 horas.",
      solution: [
        "Agente de IA integrado ao WhatsApp Business",
        "Base de conhecimento com todos os produtos e especificações",
        "Integração com sistema de estoque para informações em tempo real",
        "Cálculo automático de frete",
        "Escalação para humano em casos complexos",
      ],
      results: [
        "90% das mensagens resolvidas automaticamente",
        "Tempo de resposta: 6h → 30 segundos",
        "Atendimento 24/7 sem custo adicional",
        "Conversão de leads aumentou 45%",
        "Equipe focou em vendas consultivas de alto valor",
      ],
      metrics: "ROI em 1.5 meses | 280 horas economizadas/mês",
    },
    {
      title: "Software B2B (SaaS)",
      subtitle: "Agente de qualificação de leads",
      challenge:
        "Recebiam 150+ leads/mês via site. SDRs gastavam horas qualificando leads frios. 70% dos leads não eram fit. Reuniões desperdiçadas com prospects errados.",
      solution: [
        "Agente conversacional no site e via email",
        "Perguntas de qualificação inteligentes",
        "Scoring automático de leads",
        "Agendamento direto na agenda dos vendedores",
        "Integração com HubSpot CRM",
      ],
      results: [
        "Apenas leads qualificados chegam aos SDRs",
        "Taxa de conversão de reunião: 15% → 42%",
        "Tempo de qualificação: 20min → 2min",
        "SDRs focam em fechar, não em qualificar",
        "Pipeline 3x mais saudável",
      ],
      metrics: "ROI em 2 meses | 60h economizadas/mês",
    },
    {
      title: "Clínica Médica",
      subtitle: "Agente de agendamento e confirmação",
      challenge:
        "Recepcionistas gastavam 4h/dia agendando consultas e confirmando presença. 30% de no-show. Telefone sempre ocupado. Pacientes desistiam de agendar.",
      solution: [
        "Agente de IA para agendamento via WhatsApp e site",
        "Confirmação automática 24h antes da consulta",
        "Lembretes automáticos",
        "Reagendamento facilitado",
        "Integração com sistema de gestão da clínica",
      ],
      results: [
        "No-show reduziu de 30% para 8%",
        "Agendamentos aumentaram 60% (disponível 24/7)",
        "Recepcionistas economizaram 4h/dia",
        "Satisfação dos pacientes aumentou significativamente",
        "Receita aumentou R$ 18k/mês com redução de no-shows",
      ],
      metrics: "ROI em 1 mês | 120h economizadas/mês",
    },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="casos" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Casos reais de <span className="text-primary">agentes de IA</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Empresas que transformaram atendimento e vendas com assistentes virtuais inteligentes
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((useCase, index) => (
            <Card key={index} className="p-8 md:p-12 bg-card border-primary/20">
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
            Criar meu agente de IA
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
