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
    <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-16 text-balance">
          O problema real da implementação de IA
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background border border-primary/20 rounded-lg sm:rounded-xl p-6 sm:p-8 text-center hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="text-4xl sm:text-6xl md:text-7xl font-bold text-primary mb-3 sm:mb-4">{stat.number}</div>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">{stat.description}</p>
            </div>
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
