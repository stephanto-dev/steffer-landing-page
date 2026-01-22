import { Card } from "@/components/ui/card"
import { Search, Target, Cog, Rocket, BarChart, Users, RefreshCw } from "lucide-react"

export function ConsultoriaApproach() {
  const phases = [
    {
      number: "01",
      icon: Search,
      title: "Diagnóstico e Mapeamento",
      duration: "Semana 1",
      description:
        "Entendemos profundamente seus processos atuais, identificamos gargalos e oportunidades de automação com maior ROI.",
      deliverables: [
        "Mapa de processos atual",
        "Análise de gargalos",
        "Oportunidades priorizadas",
        "Estimativa de ROI",
      ],
    },
    {
      number: "02",
      icon: Target,
      title: "Estratégia e Planejamento",
      duration: "Semana 2",
      description:
        "Desenhamos a solução ideal para seu contexto, definimos tecnologias, integrações e roadmap de implementação.",
      deliverables: ["Arquitetura da solução", "Stack tecnológico", "Roadmap detalhado", "Cronograma e milestones"],
    },
    {
      number: "03",
      icon: Cog,
      title: "Desenvolvimento e Integração",
      duration: "Semanas 3-6",
      description:
        "Construímos as automações, integramos sistemas, configuramos workflows e garantimos que tudo funcione perfeitamente.",
      deliverables: [
        "Automações implementadas",
        "Integrações configuradas",
        "Testes realizados",
        "Documentação técnica",
      ],
    },
    {
      number: "04",
      icon: Rocket,
      title: "Deploy e Treinamento",
      duration: "Semana 7",
      description:
        "Colocamos tudo em produção, treinamos sua equipe e garantimos que todos saibam usar as novas automações.",
      deliverables: ["Sistema em produção", "Equipe treinada", "Guias de uso", "Suporte inicial"],
    },
    {
      number: "05",
      icon: BarChart,
      title: "Monitoramento e Otimização",
      duration: "Semana 8",
      description: "Acompanhamos resultados, coletamos feedback, ajustamos o que for necessário e medimos o ROI real.",
      deliverables: ["Relatório de performance", "Ajustes implementados", "Métricas de ROI", "Plano de evolução"],
    },
    {
      number: "06",
      icon: RefreshCw,
      title: "Suporte Contínuo",
      duration: "Ongoing",
      description:
        "Mantemos tudo funcionando, respondemos dúvidas, fazemos ajustes e evoluímos as automações conforme seu negócio cresce.",
      deliverables: ["Suporte técnico", "Manutenção preventiva", "Novas features", "Otimizações contínuas"],
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Nossa metodologia de <span className="text-primary">implementação</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Processo estruturado em 6 fases para garantir que a automação funcione de verdade e gere resultados reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => {
            const Icon = phase.icon
            return (
              <Card
                key={index}
                className="p-8 bg-card border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all"
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

        <div className="mt-12 bg-card border border-primary/20 rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-4">
            <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Por que nossa abordagem funciona:</h3>
              <div className="grid md:grid-cols-2 gap-6 text-foreground/70">
                <div>
                  <p className="mb-4 leading-relaxed">
                    <strong className="text-foreground">Não vendemos tecnologia, resolvemos problemas.</strong>{" "}
                    Começamos entendendo seu negócio, não empurrando ferramentas.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Implementação hands-on.</strong> Não entregamos um documento e
                    sumimos. Fazemos acontecer do início ao fim.
                  </p>
                </div>
                <div>
                  <p className="mb-4 leading-relaxed">
                    <strong className="text-foreground">Treinamento incluso.</strong> Sua equipe precisa saber usar. Não
                    adianta automatizar se ninguém adota.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Suporte contínuo.</strong> Negócios mudam, automações precisam
                    evoluir. Estamos junto nessa jornada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
