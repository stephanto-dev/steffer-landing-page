import { Card } from "@/components/ui/card"
import { Clock, TrendingUp, Users, Target, Shield, Zap } from "lucide-react"

export function DadosBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description:
        "Elimine 10-20h/semana em relatórios manuais. Acesso instantâneo a qualquer métrica, sem caçar dados em múltiplos sistemas.",
    },
    {
      icon: TrendingUp,
      title: "Decisões Melhores",
      description:
        "Data-driven em vez de gut-feeling. Veja tendências antes de virarem problemas. Identifique oportunidades mais rápido.",
    },
    {
      icon: Users,
      title: "Alinhamento de Time",
      description:
        "Todo mundo olhando as mesmas métricas. Accountability clara. Performance transparente para toda a equipe.",
    },
    {
      icon: Target,
      title: "Otimização de Custos",
      description:
        "Identifique atividades não-rentáveis. Otimize alocação de recursos. Reduza desperdício baseado em dados reais.",
    },
    {
      icon: Shield,
      title: "Vantagem Competitiva",
      description:
        "Reaja mais rápido a mudanças de mercado. Entenda comportamento de clientes profundamente. Teste e itere com confiança.",
    },
    {
      icon: Zap,
      title: "Agilidade",
      description:
        "Informação em tempo real, não relatórios de semana passada. Tome decisões rápidas baseadas em dados atualizados.",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Benefícios de <span className="text-primary">data intelligence</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Por que empresas data-driven crescem mais rápido
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-all">
                <Icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
