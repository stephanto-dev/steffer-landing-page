import { Card } from "@/components/ui/card"
import { Target, Brain, Code, TestTube, Rocket, TrendingUp } from "lucide-react"

export function AgentesApproach() {
  const phases = [
    {
      number: "01",
      icon: Target,
      title: "Definição de Objetivo",
      duration: "Semana 1",
      description:
        "Entendemos o que o agente precisa fazer, quais problemas resolver, que tom de voz usar, e como medir sucesso.",
      deliverables: ["Escopo detalhado", "Personas definidas", "Fluxos de conversação", "KPIs estabelecidos"],
    },
    {
      number: "02",
      icon: Brain,
      title: "Treinamento e Base de Conhecimento",
      duration: "Semana 2",
      description:
        "Alimentamos o agente com informações sobre seu negócio, produtos, políticas, FAQs e casos de uso reais.",
      deliverables: [
        "Base de conhecimento estruturada",
        "Treinamento inicial",
        "Respostas padrão",
        "Casos de borda mapeados",
      ],
    },
    {
      number: "03",
      icon: Code,
      title: "Desenvolvimento e Integrações",
      duration: "Semanas 3-4",
      description:
        "Construímos o agente, integramos com seus sistemas (CRM, WhatsApp, site), configuramos workflows e automações.",
      deliverables: [
        "Agente desenvolvido",
        "Integrações ativas",
        "Workflows configurados",
        "Interface de gerenciamento",
      ],
    },
    {
      number: "04",
      icon: TestTube,
      title: "Testes e Refinamento",
      duration: "Semana 5",
      description:
        "Testamos exaustivamente com casos reais, ajustamos respostas, refinamos tom de voz e garantimos qualidade.",
      deliverables: ["Testes completos", "Ajustes implementados", "Qualidade validada", "Documentação"],
    },
    {
      number: "05",
      icon: Rocket,
      title: "Deploy e Treinamento",
      duration: "Semana 6",
      description:
        "Colocamos o agente em produção, treinamos sua equipe para gerenciar e monitorar, e garantimos transição suave.",
      deliverables: ["Agente em produção", "Equipe treinada", "Guias de uso", "Suporte ativo"],
    },
    {
      number: "06",
      icon: TrendingUp,
      title: "Otimização Contínua",
      duration: "Ongoing",
      description:
        "Monitoramos performance, coletamos feedback, ajustamos respostas e evoluímos o agente baseado em dados reais.",
      deliverables: ["Relatórios de performance", "Melhorias implementadas", "Novas features", "Otimização contínua"],
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Como criamos seu <span className="text-primary">agente de IA</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Processo estruturado em 6 fases para garantir que seu agente entenda seu negócio e entregue resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => {
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
      </div>
    </section>
  )
}
