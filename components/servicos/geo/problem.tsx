import { Card } from "@/components/ui/card"
import { Search, TrendingDown, Users, AlertCircle } from "lucide-react"

export function GeoProblem() {
  const stats = [
    {
      stat: "200M+",
      description: "usuários ativos do ChatGPT buscando informações todos os dias",
      source: "OpenAI, 2024",
    },
    {
      stat: "40%",
      description: "da Gen Z prefere usar LLMs em vez de motores de busca tradicionais",
      source: "Pew Research, 2024",
    },
    {
      stat: "500M+",
      description: "buscas mensais no Perplexity, crescendo 50% ao mês",
      source: "Perplexity, 2024",
    },
    {
      stat: "65%",
      description: "das empresas ainda não otimizam conteúdo para LLMs - oportunidade gigante",
      source: "Gartner, 2024",
    },
  ]

  const problems = [
    {
      icon: Search,
      title: "Invisível para LLMs",
      description:
        "Seu site pode estar no topo do Google, mas se LLMs não te citam, você está perdendo milhões de potenciais clientes.",
    },
    {
      icon: TrendingDown,
      title: "Tráfego orgânico caindo",
      description:
        "Cada vez menos pessoas clicam em links. LLMs respondem direto. Se você não está na resposta, perdeu o cliente.",
    },
    {
      icon: Users,
      title: "Concorrentes na frente",
      description:
        "Enquanto você ignora GEO, seus concorrentes estão sendo citados como referência por ChatGPT e Claude.",
    },
    {
      icon: AlertCircle,
      title: "Conteúdo não otimizado",
      description:
        "Conteúdo feito para Google não funciona para LLMs. Eles precisam de estrutura, contexto e autoridade diferentes.",
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            A busca mudou. <span className="text-primary">Sua estratégia também precisa.</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Milhões de pessoas não usam mais Google. Elas perguntam para ChatGPT, Claude, Perplexity. Se sua empresa não
            aparece lá, você está invisível.
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
