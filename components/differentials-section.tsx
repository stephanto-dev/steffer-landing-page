import { Target, Brain, CheckCircle, Users, MessageCircle, BarChart3 } from "lucide-react"

export function DifferentialsSection() {
  const differentials = [
    {
      icon: Target,
      title: "Personalização Total",
      description: "Cada solução é desenhada especificamente para seu contexto, não templates genéricos",
    },
    {
      icon: Brain,
      title: "Entendimento Profundo",
      description: "Mergulhamos no seu negócio para entender as nuances que fazem a diferença",
    },
    {
      icon: CheckCircle,
      title: "Implementação que Funciona",
      description: "Tecnologia que sua equipe realmente usa e que se encaixa na rotina real",
    },
    {
      icon: Users,
      title: "Parceria Humano + IA",
      description: "Automações que potencializam pessoas, não substituem",
    },
    {
      icon: MessageCircle,
      title: "Time Disponível",
      description: "Suporte próximo e acessível para dúvidas, ajustes e evoluções",
    },
    {
      icon: BarChart3,
      title: "ROI Mensurável",
      description: "Métricas claras de economia de tempo e recursos desde o início",
    },
  ]

  return (
    <section id="sobre" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Por que escolher a Steffer?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, index) => {
            const Icon = diff.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-card to-card-secondary border border-primary/20 rounded-xl p-8 hover:border-accent/60 transition-all hover:shadow-lg hover:shadow-accent/20 glow-accent"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{diff.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{diff.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
