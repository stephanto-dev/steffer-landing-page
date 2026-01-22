import { Search, Zap, Wrench } from "lucide-react"

export function SolutionSection() {
  const solutions = [
    {
      icon: Search,
      title: "Mapeamento e Diagnóstico Profundo",
      description:
        "Entendemos seu negócio, sua equipe e seus processos antes de sugerir qualquer automação. Identificamos onde a IA realmente faz sentido.",
    },
    {
      icon: Zap,
      title: "Implementação Personalizada",
      description:
        "Criamos automações e agentes de IA sob medida que trabalham EM PARCERIA com sua equipe — economizando tempo sem substituir o fator humano.",
    },
    {
      icon: Wrench,
      title: "Suporte e Evolução Contínua",
      description:
        "Acompanhamento constante, ajustes e treinamento para garantir que a tecnologia continue gerando valor real.",
    },
  ]

  return (
    <section id="servicos" className="py-20 md:py-32 px-6 bg-card-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Como a Steffer resolve</h2>
          <p className="text-xl text-foreground/70 text-balance">
            Tecnologia que se encaixa no seu dia a dia, não o contrário
          </p>
        </div>

        <div className="space-y-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="bg-background/50 border border-primary/20 rounded-xl p-8 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10 hover:bg-background/70"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-lg">{solution.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
