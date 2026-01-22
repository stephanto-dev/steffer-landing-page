import { Card } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Zap, Award, Target } from "lucide-react"

export function GeoBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Novo Canal de Aquisição",
      description:
        "LLMs são canal de tráfego inexplorado. Enquanto concorrentes brigam no Google, você domina ChatGPT e Claude.",
    },
    {
      icon: Users,
      title: "Audiência Qualificada",
      description:
        "Usuários de LLMs são mais educados e intencionados. Fazem perguntas específicas, não buscas genéricas.",
    },
    {
      icon: DollarSign,
      title: "CAC Menor",
      description:
        "Tráfego orgânico de LLMs não tem custo por clique. Investimento inicial, retorno contínuo e crescente.",
    },
    {
      icon: Zap,
      title: "Vantagem Competitiva",
      description:
        "65% das empresas ainda ignoram GEO. Quem começar agora domina o espaço antes da concorrência acordar.",
    },
    {
      icon: Award,
      title: "Autoridade e Credibilidade",
      description: "Ser citado por ChatGPT como referência aumenta drasticamente sua autoridade percebida no mercado.",
    },
    {
      icon: Target,
      title: "Futuro-Proof",
      description:
        "LLMs são o futuro da busca. Investir em GEO agora é se preparar para onde o mercado está indo, não onde está.",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Por que investir em <span className="text-primary">GEO</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Benefícios de ser encontrado e citado por LLMs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-all">
                <Icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
