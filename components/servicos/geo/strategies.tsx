import { Card } from "@/components/ui/card"
import { FileText, Users, Link2, Database, MessageSquare, Award } from "lucide-react"

export function GeoStrategies() {
  const strategies = [
    {
      icon: FileText,
      title: "Conteúdo Citável",
      description:
        "Criamos conteúdo factual, bem estruturado e com dados que LLMs adoram citar: estudos, estatísticas, guias definitivos.",
      tactics: [
        "Artigos longos e aprofundados (2000+ palavras)",
        "Dados originais e pesquisas",
        "Definições claras e conceitos",
        "Listas e comparações estruturadas",
      ],
    },
    {
      icon: Database,
      title: "Dados Estruturados",
      description:
        "Implementamos schema markup e structured data para que LLMs entendam exatamente o que cada página significa.",
      tactics: [
        "Schema.org markup (Organization, Product, Article)",
        "JSON-LD implementation",
        "Rich snippets otimizados",
        "Knowledge graph optimization",
      ],
    },
    {
      icon: Users,
      title: "Autoridade e Credibilidade",
      description:
        "Construímos sua reputação digital através de menções em fontes confiáveis que LLMs reconhecem como autoritativas.",
      tactics: [
        "Press releases em veículos relevantes",
        "Guest posts em sites de autoridade",
        "Menções em Wikipedia e fontes acadêmicas",
        "Parcerias com influenciadores do nicho",
      ],
    },
    {
      icon: Link2,
      title: "Link Building Estratégico",
      description:
        "Links de sites confiáveis aumentam sua autoridade aos olhos de LLMs. Focamos em qualidade, não quantidade.",
      tactics: [
        "Backlinks de sites .edu e .gov",
        "Menções em publicações do setor",
        "Citações em estudos e pesquisas",
        "Parcerias de conteúdo",
      ],
    },
    {
      icon: MessageSquare,
      title: "FAQ e Q&A Optimization",
      description: "LLMs adoram responder perguntas. Criamos FAQs completos e otimizados para queries conversacionais.",
      tactics: [
        "FAQs extensos e detalhados",
        "Formato de pergunta e resposta",
        "Long-tail keywords conversacionais",
        "Schema FAQ markup",
      ],
    },
    {
      icon: Award,
      title: "E-E-A-T Optimization",
      description:
        "Experience, Expertise, Authoritativeness, Trustworthiness - os pilares que LLMs usam para avaliar fontes.",
      tactics: [
        "Author bios detalhados",
        "Credenciais e certificações",
        "Casos de sucesso e provas sociais",
        "Transparência e fontes citadas",
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Estratégias de <span className="text-primary">GEO</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Táticas comprovadas para aumentar sua visibilidade em Large Language Models
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon
            return (
              <Card key={index} className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-all">
                <Icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{strategy.title}</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">{strategy.description}</p>

                <div className="border-t border-primary/20 pt-4">
                  <p className="text-sm font-semibold mb-2 text-foreground/80">Táticas:</p>
                  <ul className="space-y-1">
                    {strategy.tactics.map((tactic, i) => (
                      <li key={i} className="text-sm text-foreground/60 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{tactic}</span>
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
