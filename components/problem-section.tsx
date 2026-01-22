import { FileText, X, TrendingDown, HelpCircle } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: FileText,
      title: "Processos manuais que consomem horas da equipe",
    },
    {
      icon: X,
      title: "Erros operacionais por retrabalho humano",
    },
    {
      icon: TrendingDown,
      title: "Baixa produtividade e custos elevados",
    },
    {
      icon: HelpCircle,
      title: "Ferramentas de IA compradas mas nunca usadas",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-balance">
          Quanto dinheiro você está perdendo com <span className="text-primary">processos manuais?</span>
        </h2>

        <p className="text-lg text-foreground/70 text-center mb-16 max-w-3xl mx-auto text-pretty">
          Se sua equipe gasta mais de 10 horas por semana em tarefas repetitivas, você está jogando dinheiro fora. Veja
          se você se identifica:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="bg-card border border-primary/20 rounded-xl p-8 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <Icon className="h-12 w-12 text-primary mb-4" />
                <p className="text-lg text-foreground leading-relaxed">{problem.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
