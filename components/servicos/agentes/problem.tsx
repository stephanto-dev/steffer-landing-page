import { Card } from "@/components/ui/card"
import { Clock, Users, TrendingDown, AlertCircle } from "lucide-react"

export function AgentesProblem() {
  const stats = [
    {
      stat: "67%",
      description: "dos clientes esperam respostas instantâneas, mas a maioria das empresas demora horas",
      source: "Salesforce, 2024",
    },
    {
      stat: "R$ 8k/mês",
      description: "custo médio de um atendente humano (salário + encargos + treinamento)",
      source: "Glassdoor, 2024",
    },
    {
      stat: "40%",
      description: "das perguntas de clientes são repetitivas e poderiam ser automatizadas",
      source: "Gartner, 2024",
    },
    {
      stat: "3x",
      description: "empresas com atendimento 24/7 convertem 3x mais leads que concorrentes",
      source: "HubSpot, 2024",
    },
  ]

  const problems = [
    {
      icon: Clock,
      title: "Atendimento lento",
      description:
        "Clientes esperam horas por resposta. Leads esfriam. Vendas são perdidas porque ninguém respondeu rápido.",
    },
    {
      icon: Users,
      title: "Equipe sobrecarregada",
      description:
        "Time de atendimento afogado em perguntas repetitivas. Sem tempo para casos complexos que realmente importam.",
    },
    {
      icon: TrendingDown,
      title: "Horário limitado",
      description:
        "Seu negócio dorme, mas seus clientes não. Leads chegam de madrugada e só são atendidos no dia seguinte.",
    },
    {
      icon: AlertCircle,
      title: "Inconsistência",
      description:
        "Cada atendente responde diferente. Informações desencontradas. Cliente recebe resposta A hoje e B amanhã.",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Atendimento humano não escala. <span className="text-primary">IA sim.</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Enquanto você dorme, seus concorrentes estão perdendo clientes. Ou pior: atendendo com agentes de IA
            enquanto você ainda depende só de humanos.
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
