import { Reveal } from "@/components/motion/reveal"

export function CredibilitySection() {
  const stats = [
    {
      number: "95%",
      description: "das operações de IA falham em gerar valor real (MIT, 2024)",
    },
    {
      number: "60%",
      description: "dos projetos de automação são abandonados no primeiro ano",
    },
    {
      number: "3x",
      description: "mais chances de sucesso com especialistas guiando a implementação",
    },
  ]

  return (
    <section id="credibilidade" className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-16 text-balance">
            O problema real da implementação de IA
          </h2>
        </Reveal>

        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-border max-w-4xl mx-auto mb-10 sm:mb-12">
          {stats.map((stat, index) => (
            <Reveal key={index} index={index} className="flex-1 text-center px-4 sm:px-8 py-6 sm:py-0">
              <div className="text-4xl sm:text-6xl md:text-7xl font-bold text-primary mb-3 sm:mb-4">{stat.number}</div>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">{stat.description}</p>
            </Reveal>
          ))}
        </div>

        <p className="text-lg sm:text-xl text-center text-foreground/80 max-w-3xl mx-auto text-balance">
          A tecnologia existe. O que falta é alguém que entenda{" "}
          <span className="text-primary font-semibold">seu negócio</span> E a{" "}
          <span className="text-primary font-semibold">tecnologia</span>.
        </p>
      </div>
    </section>
  )
}
