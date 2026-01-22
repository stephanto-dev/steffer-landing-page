import { Card } from "@/components/ui/card"
import { Search, FileText, Link, BarChart, Zap, TrendingUp } from "lucide-react"

export function GeoApproach() {
  const phases = [
    {
      number: "01",
      icon: Search,
      title: "Auditoria de Visibilidade",
      duration: "Semana 1",
      description:
        "Testamos como LLMs atualmente respondem sobre seu nicho, marca e concorrentes. Identificamos gaps de visibilidade.",
      deliverables: [
        "Relatório de citações atuais",
        "Análise de concorrentes",
        "Gaps de conteúdo",
        "Oportunidades priorizadas",
      ],
    },
    {
      number: "02",
      icon: FileText,
      title: "Otimização de Conteúdo",
      duration: "Semanas 2-3",
      description:
        "Reestruturamos conteúdo existente e criamos novo conteúdo otimizado para LLMs: claro, factual, bem estruturado.",
      deliverables: ["Conteúdo otimizado", "Estrutura semântica", "FAQs expandidos", "Dados estruturados"],
    },
    {
      number: "03",
      icon: Link,
      title: "Construção de Autoridade",
      duration: "Semanas 4-5",
      description:
        "Aumentamos sua autoridade digital através de menções em fontes confiáveis, press releases e conteúdo citável.",
      deliverables: ["Estratégia de PR", "Parcerias de conteúdo", "Menções em fontes", "Link building"],
    },
    {
      number: "04",
      icon: Zap,
      title: "Implementação Técnica",
      duration: "Semana 6",
      description:
        "Implementamos schema markup, otimizamos crawlability, configuramos sitemaps e garantimos que LLMs consigam acessar seu conteúdo.",
      deliverables: ["Schema markup", "Sitemap otimizado", "Robots.txt configurado", "Estrutura técnica"],
    },
    {
      number: "05",
      icon: BarChart,
      title: "Monitoramento e Medição",
      duration: "Semana 7",
      description:
        "Configuramos tracking de citações em LLMs, monitoramos menções e medimos crescimento de visibilidade.",
      deliverables: ["Dashboard de tracking", "Alertas de citações", "Relatórios mensais", "Métricas de GEO"],
    },
    {
      number: "06",
      icon: TrendingUp,
      title: "Otimização Contínua",
      duration: "Ongoing",
      description:
        "GEO é processo contínuo. Criamos conteúdo novo, ajustamos estratégia baseado em dados e mantemos você relevante.",
      deliverables: ["Conteúdo mensal", "Ajustes estratégicos", "Testes A/B", "Evolução contínua"],
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Nossa metodologia de <span className="text-primary">GEO</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Processo estruturado para fazer sua empresa ser citada por LLMs como referência no seu nicho
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
