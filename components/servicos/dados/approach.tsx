import { Card } from "@/components/ui/card"
import { Search, Target, Database, BarChart3, Bell, Users, RefreshCw } from "lucide-react"

export function DadosApproach() {
  const phases = [
    {
      number: "01",
      icon: Search,
      title: "Data Discovery & Mapping",
      duration: "Semana 1",
      description:
        "Identificamos todas as fontes de dados, mapeamos fluxos atuais, encontramos gaps e redundâncias, e entrevistamos stakeholders.",
      deliverables: [
        "Mapa de landscape de dados",
        "Fluxos atuais documentados",
        "Gaps identificados",
        "Necessidades de reporting",
      ],
    },
    {
      number: "02",
      icon: Target,
      title: "KPI Definition & Metrics Framework",
      duration: "Semana 2",
      description:
        "Definimos North Star Metric, identificamos KPIs primários e secundários, criamos framework de métricas e estabelecemos metas.",
      deliverables: [
        "North Star Metric definida",
        "Framework de métricas",
        "Leading vs lagging indicators",
        "Metas e benchmarks",
      ],
    },
    {
      number: "03",
      icon: Database,
      title: "Data Architecture & Integration",
      duration: "Semanas 3-4",
      description:
        "Desenhamos arquitetura de dados, configuramos pipelines ETL/ELT, integramos fontes via APIs e criamos data warehouse se necessário.",
      deliverables: ["Arquitetura de dados", "Pipelines configurados", "Integrações ativas", "Data warehouse setup"],
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Dashboard Design & Development",
      duration: "Semanas 5-6",
      description:
        "Desenhamos wireframes, escolhemos ferramenta ideal, desenvolvemos visualizações, implementamos filtros e otimizamos para mobile.",
      deliverables: ["Wireframes aprovados", "Dashboards funcionais", "Visualizações interativas", "Mobile-responsive"],
    },
    {
      number: "05",
      icon: Bell,
      title: "Automation & Alerts",
      duration: "Semana 7",
      description:
        "Configuramos atualizações automáticas, alertas inteligentes, notificações para anomalias e relatórios agendados.",
      deliverables: [
        "Atualizações automáticas",
        "Sistema de alertas",
        "Notificações configuradas",
        "Relatórios agendados",
      ],
    },
    {
      number: "06",
      icon: Users,
      title: "Training & Documentation",
      duration: "Semana 8",
      description: "Treinamos usuários, criamos documentação de métricas, guias de uso e best practices de análise.",
      deliverables: ["Equipe treinada", "Documentação completa", "Guias de uso", "Best practices"],
    },
    {
      number: "07",
      icon: RefreshCw,
      title: "Optimization & Evolution",
      duration: "Ongoing",
      description:
        "Coletamos feedback, ajustamos visualizações, adicionamos novas métricas e otimizamos performance continuamente.",
      deliverables: ["Feedback implementado", "Novas métricas", "Performance otimizada", "Evolução contínua"],
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Como construímos sua <span className="text-primary">inteligência de dados</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Processo estruturado em 7 fases para transformar dados caóticos em insights acionáveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.slice(0, 6).map((phase, index) => {
            const Icon = phase.icon
            return (
              <Card
                key={index}
                className="p-8 bg-background/50 border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {phase.number}
                </div>

                <Icon className="h-12 w-12 text-primary mb-4 relative z-10" />

                <div className="mb-2">
                  <h3 className="text-xl font-bold mb-1">{phase.title}</h3>
                  <p className="text-sm text-primary font-semibold">{phase.duration}</p>
                </div>

                <p className="text-foreground/70 mb-4 leading-relaxed">{phase.description}</p>

                <div className="border-t border-primary/20 pt-4">
                  <p className="text-sm font-semibold mb-2 text-foreground/80">Entregas:</p>
                  <ul className="space-y-1">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="text-sm text-foreground/60 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-6">
          <Card className="p-8 bg-background/50 border-primary/20">
            <div className="flex items-start gap-4">
              <RefreshCw className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{phases[6].title}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{phases[6].duration}</p>
                <p className="text-foreground/70 leading-relaxed">{phases[6].description}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
