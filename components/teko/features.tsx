"use client"

import { Card } from "@/components/ui/card"
import { MessageSquare, BarChart3, DollarSign, CheckCircle2, AlertTriangle, Shield } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"

export function TekoFeatures() {
  const medicFeatures = [
    {
      icon: MessageSquare,
      title: "Recebe a escala e os avisos pelo WhatsApp",
    },
    {
      icon: MessageSquare,
      title: "Pede e aceita troca de plantão pelo WhatsApp",
    },
    {
      icon: BarChart3,
      title: "Consulta o histórico de plantões",
    },
  ]

  const gestorFeatures = [
    {
      icon: CheckCircle2,
      title: "Escala em tempo real, a mesma para todos",
    },
    {
      icon: AlertTriangle,
      title: "Alertas automáticos de conflito",
    },
    {
      icon: Shield,
      title: "Trava de qualificação por setor, que impede alocar alguém num setor onde não pode atuar",
    },
  ]

  const financeiroFeatures = [
    {
      icon: DollarSign,
      title: "Repasse calculado automaticamente por profissional, unidade, dia, horário, setor e contrato",
    },
    {
      icon: CheckCircle2,
      title: "Dupla validação de presença: a secretária confirma o plantão antes do pagamento",
    },
    {
      icon: BarChart3,
      title: "Histórico completo de presenças e alterações para auditoria",
    },
    {
      icon: BarChart3,
      title: "Exportação para a folha de pagamento",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            O que o Teko <span className="text-primary">faz</span>
          </h2>
        </Reveal>

        <div className="space-y-12">
          <Reveal>
            <Card className="p-8 bg-background/50 border-primary/20">
              <h3 className="text-2xl font-bold mb-6">
                Para o médico, <span className="text-primary">sem aplicativo novo pra aprender</span>
              </h3>
              <ul className="space-y-4">
                {medicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground/80">{feature.title}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="p-8 bg-background/50 border-primary/20">
              <h3 className="text-2xl font-bold mb-6">
                Para o <span className="text-primary">gestor de escala</span>
              </h3>
              <ul className="space-y-4">
                {gestorFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground/80">{feature.title}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="p-8 bg-background/50 border-primary/20">
              <h3 className="text-2xl font-bold mb-6">
                Para o <span className="text-primary">financeiro</span>
              </h3>
              <ul className="space-y-4">
                {financeiroFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground/80">{feature.title}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
