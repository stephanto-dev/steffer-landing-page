import { Card } from "@/components/ui/card"
import { Clock, DollarSign, TrendingUp, Users, Shield, Zap } from "lucide-react"

export function ConsultoriaBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description:
        "Elimine 10-20h/semana em tarefas repetitivas. Sua equipe foca no que realmente importa: crescer o negócio.",
    },
    {
      icon: DollarSign,
      title: "Redução de Custos",
      description: "Automatizar é mais barato que contratar. ROI médio em 3 meses com economia contínua depois.",
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade",
      description: "Cresça sem aumentar custos proporcionalmente. Automações escalam infinitamente sem reclamar.",
    },
    {
      icon: Users,
      title: "Equipe Mais Feliz",
      description: "Ninguém gosta de trabalho repetitivo. Libere seu time para trabalho criativo e estratégico.",
    },
    {
      icon: Shield,
      title: "Menos Erros",
      description: "Humanos erram, máquinas não. Reduza retrabalho, inconsistências e problemas operacionais.",
    },
    {
      icon: Zap,
      title: "Velocidade",
      description: "Processos que levavam dias agora levam minutos. Responda mais rápido, venda mais, cresça mais.",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Benefícios da <span className="text-primary">automação inteligente</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Por que empresas que automatizam crescem mais rápido que a concorrência
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
