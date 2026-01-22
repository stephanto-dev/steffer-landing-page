import { Card } from "@/components/ui/card"
import { AlertCircle, Clock, DollarSign, TrendingDown } from "lucide-react"

export function ConsultoriaProblem() {
  const stats = [
    {
      stat: "73%",
      description: "das empresas perdem mais de 10h/semana em tarefas manuais repetitivas",
      source: "McKinsey, 2024",
    },
    {
      stat: "R$ 45k/ano",
      description: "custo médio de um funcionário fazendo trabalho que poderia ser automatizado",
      source: "Deloitte, 2024",
    },
    {
      stat: "40%",
      description: "dos erros operacionais são causados por processos manuais",
      source: "Gartner, 2024",
    },
    {
      stat: "3x",
      description: "empresas com automação crescem 3x mais rápido que concorrentes",
      source: "Harvard Business Review",
    },
  ]

  const problems = [
    {
      icon: Clock,
      title: "Tempo desperdiçado",
      description: "Sua equipe gasta horas copiando dados, enviando emails repetitivos, gerando relatórios manuais",
    },
    {
      icon: AlertCircle,
      title: "Erros custosos",
      description: "Retrabalho humano gera inconsistências, dados duplicados, informações desatualizadas",
    },
    {
      icon: TrendingDown,
      title: "Crescimento limitado",
      description: "Processos manuais não escalam - contratar mais gente aumenta custos exponencialmente",
    },
    {
      icon: DollarSign,
      title: "Dinheiro na mesa",
      description: "Enquanto sua equipe faz trabalho repetitivo, oportunidades de negócio passam despercebidas",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Processos manuais estão <span className="text-primary">matando sua produtividade</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Se você ainda depende de planilhas, emails e trabalho manual para rodar seu negócio, está perdendo tempo e
            dinheiro todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((item, index) => (
            <Card key={index} className="p-6 bg-background/50 border-primary/20 text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{item.stat}</div>
              <p className="text-sm text-foreground/80 mb-2 leading-relaxed">{item.description}</p>
              <p className="text-xs text-foreground/50">{item.source}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <Card key={index} className="p-8 bg-background/50 border-primary/20">
                <Icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{problem.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
