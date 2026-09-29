import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Sobre a Steffer",
  description:
    "Fundada em 2024 por dois sócios da USP, a Steffer simplifica a vida do empreendedor brasileiro através da tecnologia.",
  alternates: { canonical: "https://steffer.com.br/sobre" },
}

const values = [
  { name: "Raça", description: "Garra pra resolver, sem desistir no primeiro obstáculo" },
  { name: "Excelência", description: "Entregar bem feito, não só entregar rápido" },
  { name: "Agilidade", description: "Decisão rápida, sem camada de burocracia entre a ideia e a entrega" },
  { name: "Pessoas", description: "Tecnologia existe pra servir gente, não o contrário" },
  {
    name: "Honestidade",
    description: "Falar a verdade sobre o que funciona e o que não funciona, mesmo quando dói",
  },
  { name: "Simplicidade", description: "A solução mais simples que resolve é sempre melhor que a mais sofisticada" },
  { name: "Paciência", description: "Entender o negócio antes de sugerir qualquer tecnologia" },
]

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-10 text-balance leading-tight">
            Quem <span className="text-primary">somos</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Origem</h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
            Fundada em abril de 2024 por dois sócios formados na USP, a Steffer nasceu para resolver um problema
            simples: empresas compram tecnologia sem entender o próprio processo. Somos um time enxuto: decisão
            rápida, sem camada de burocracia entre você e quem constrói sua solução.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Nossa tese</h2>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
            Entendemos seu negócio antes de sugerir qualquer tecnologia. Construímos uma base simples, mas robusta, e
            aplicamos IA só onde ela realmente economiza tempo.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Propósito</h2>
          <p className="text-2xl md:text-3xl font-semibold text-primary leading-snug text-balance">
            Simplificar a vida do empreendedor brasileiro por meio da tecnologia.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Reveal key={value.name} index={index} className="h-full">
                <Card className="h-full p-8 bg-background/50 border-primary/20">
                  <h3 className="text-xl font-bold text-primary">{value.name}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-accent via-accent/80 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="bg-primary-bright text-primary-bright-foreground hover:bg-primary-bright/90 glow-primary-bright font-semibold h-14 px-8 text-base sm:text-lg"
          >
            <a href="#contato">
              Agendar diagnóstico gratuito
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold h-14 px-8 text-base sm:text-lg"
          >
            <a href="#contato">Falar com a equipe</a>
          </Button>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
