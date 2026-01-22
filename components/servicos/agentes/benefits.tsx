import { Card } from "@/components/ui/card"
import { Clock, DollarSign, TrendingUp, Zap, Shield, Users } from "lucide-react"

export function AgentesBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description:
        "Seu agente nunca dorme, nunca tira férias, nunca fica doente. Atende clientes a qualquer hora, qualquer dia.",
    },
    {
      icon: Zap,
      title: "Resposta Instantânea",
      description:
        "Zero tempo de espera. Clientes recebem respostas em segundos, não em horas. Leads quentes não esfriam.",
    },
    {
      icon: DollarSign,
      title: "Custo Previsível",
      description:
        "Investimento único + manutenção mensal. Muito mais barato que contratar e treinar equipe de atendimento.",
    },
    {
      icon: TrendingUp,
      title: "Escalabilidade Infinita",
      description:
        "Atende 1 ou 1000 clientes simultaneamente sem perder qualidade. Cresce com seu negócio sem custo adicional.",
    },
    {
      icon: Shield,
      title: "Consistência Total",
      description:
        "Sempre responde da mesma forma, com o mesmo tom, seguindo as mesmas políticas. Zero variação de qualidade.",
    },
    {
      icon: Users,
      title: "Equipe Mais Feliz",
      description: "Humanos focam em casos complexos e estratégicos. IA cuida do repetitivo. Todo mundo ganha.",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Por que ter um <span className="text-primary">agente de IA</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Benefícios que transformam a forma como você atende e vende
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="p-8 bg-background/50 border-primary/20 hover:border-primary/40 transition-all"
              >
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
