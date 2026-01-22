import { Card } from "@/components/ui/card"
import { TrendingUp, ShoppingCart, Megaphone, Cog, Users, DollarSign, Package } from "lucide-react"

export function DadosTypes() {
  const types = [
    {
      icon: TrendingUp,
      title: "Executive Dashboard",
      description: "Visão consolidada do negócio em uma tela. Métricas de receita, custos, margens e alertas.",
      for: "CEOs, founders, diretores",
      metrics: ["Receita", "Custos", "Margens", "Comparações período vs período"],
    },
    {
      icon: ShoppingCart,
      title: "Sales Dashboard",
      description: "Pipeline de vendas em tempo real. Taxa de conversão, performance por vendedor e forecast.",
      for: "Gerentes comerciais, vendedores",
      metrics: ["Pipeline", "Taxa de conversão", "Performance", "Forecast vs realizado"],
    },
    {
      icon: Megaphone,
      title: "Marketing Dashboard",
      description: "CAC, ROI por canal, funil de conversão, métricas de conteúdo e performance de campanhas.",
      for: "CMOs, analistas de marketing",
      metrics: ["CAC", "ROI por canal", "Funil", "Performance de campanhas"],
    },
    {
      icon: Cog,
      title: "Operations Dashboard",
      description: "Métricas de produtividade, tempo médio de processos, gargalos e resource utilization.",
      for: "Gerentes de operações",
      metrics: ["Produtividade", "Tempo de processos", "Gargalos", "SLA compliance"],
    },
    {
      icon: Users,
      title: "Customer Success Dashboard",
      description: "Health score de clientes, churn rate, NPS trends, tickets e upsell opportunities.",
      for: "CS managers, account managers",
      metrics: ["Health score", "Churn rate", "NPS", "Upsell opportunities"],
    },
    {
      icon: DollarSign,
      title: "Financial Dashboard",
      description: "Cash flow projection, AR/AP aging, burn rate, P&L em tempo real e budget vs actual.",
      for: "CFOs, controllers, founders",
      metrics: ["Cash flow", "AR/AP", "Burn rate", "Budget vs actual"],
    },
    {
      icon: Package,
      title: "E-commerce Dashboard",
      description: "Vendas por período, taxa de conversão, ticket médio, performance de produtos e inventory.",
      for: "E-commerce managers",
      metrics: ["Vendas", "Conversão", "AOV", "Inventory turnover"],
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Tipos de <span className="text-primary">dashboards</span> que criamos
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Dashboards especializados para cada área do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, index) => {
            const Icon = type.icon
            return (
              <Card key={index} className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-all">
                <Icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">{type.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground/80 mb-2">Para:</p>
                  <p className="text-sm text-primary">{type.for}</p>
                </div>

                <div className="border-t border-primary/20 pt-4">
                  <p className="text-sm font-semibold mb-2 text-foreground/80">Métricas principais:</p>
                  <ul className="space-y-1">
                    {type.metrics.map((metric, i) => (
                      <li key={i} className="text-sm text-foreground/60 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
