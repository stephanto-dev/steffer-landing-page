import { Card } from "@/components/ui/card"
import { FileSpreadsheet, Clock, TrendingDown, AlertCircle } from "lucide-react"

export function DadosProblem() {
  const stats = [
    {
      stat: "73%",
      description: "das empresas não conseguem transformar dados em insights acionáveis",
      source: "Forrester, 2024",
    },
    {
      stat: "4h/semana",
      description: "gestores gastam procurando informações espalhadas em múltiplos sistemas",
      source: "McKinsey, 2024",
    },
    {
      stat: "23x",
      description: "empresas data-driven têm mais chances de adquirir clientes",
      source: "McKinsey, 2024",
    },
    {
      stat: "60%",
      description: "das decisões de negócio ainda são baseadas em intuição, não em dados",
      source: "Gartner, 2024",
    },
  ]

  const problems = [
    {
      icon: FileSpreadsheet,
      title: "Dados espalhados",
      description:
        "Informações em CRM, planilhas, analytics, ERP. Ninguém tem visão completa. Decisões baseadas em pedaços de verdade.",
    },
    {
      icon: Clock,
      title: "Relatórios manuais",
      description:
        "Equipe gasta horas copiando dados, criando PowerPoints, atualizando planilhas. Informação sempre desatualizada.",
    },
    {
      icon: TrendingDown,
      title: "Falta de visibilidade",
      description:
        "Você descobre problemas quando já é tarde. Não sabe o que está funcionando ou falhando em tempo real.",
    },
    {
      icon: AlertCircle,
      title: "Decisões no escuro",
      description: "Sem dados confiáveis, decisões são baseadas em feeling. Você está dirigindo de olhos vendados.",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Seus dados existem, mas você <span className="text-primary">consegue usá-los?</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            A maioria das empresas coleta toneladas de dados mas não consegue transformá-los em decisões. Resultado?
            Oportunidades perdidas e problemas descobertos tarde demais.
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
