import { FileText, X, TrendingDown, HelpCircle } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"

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
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-balance">
            Quanto dinheiro você está perdendo com <span className="text-primary">processos manuais?</span>
          </h2>

          <p className="text-lg text-foreground/70 text-center mb-16 max-w-3xl mx-auto text-pretty">
            Se sua equipe gasta mais de 10 horas por semana em tarefas repetitivas, você está jogando dinheiro fora.
            Veja se você se identifica:
          </p>
        </Reveal>

        <div className="max-w-3xl mx-auto divide-y divide-border">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <Reveal key={index} index={index} className="flex items-center gap-5 py-6">
                <Icon className="h-8 w-8 text-primary flex-shrink-0" />
                <p className="text-lg text-foreground leading-relaxed">{problem.title}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
