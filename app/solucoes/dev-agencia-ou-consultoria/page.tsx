import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionHero } from "@/components/solucoes/solution-hero"
import { SimpleFAQ } from "@/components/solucoes/simple-faq"
import { ContactSection } from "@/components/contact-section"
import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/motion/reveal"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contratar dev, agência ou consultoria para automatizar sua empresa? | Steffer",
  description:
    "Comparação de prazo, custo inicial e suporte entre contratar um desenvolvedor, uma agência, fazer sozinho ou contratar uma consultoria como a Steffer.",
  alternates: { canonical: "https://www.steffer.com.br/solucoes/dev-agencia-ou-consultoria" },
  openGraph: {
    title: "Contratar dev, agência ou consultoria para automatizar sua empresa? | Steffer",
    description:
      "Comparação de prazo, custo inicial e suporte entre contratar um desenvolvedor, uma agência, fazer sozinho ou contratar uma consultoria como a Steffer.",
    url: "https://www.steffer.com.br/solucoes/dev-agencia-ou-consultoria",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contratar dev, agência ou consultoria para automatizar sua empresa? | Steffer",
    description:
      "Comparação de prazo, custo inicial e suporte entre contratar um desenvolvedor, uma agência, fazer sozinho ou contratar uma consultoria como a Steffer.",
  },
}

const faqs = [
  {
    question: "Qual é a opção mais barata para automatizar uma empresa pequena?",
    answer:
      "Fazer sozinho não tem custo direto, mas consome tempo da equipe. Entre as opções contratadas, a Steffer trabalha com projetos iniciais de até R$ 10 mil.",
  },
  {
    question: "Qual é a opção mais rápida?",
    answer:
      "Na comparação da Steffer, a consultoria entrega em 4 a 8 semanas, contra 3 a 4 meses de uma agência e 3 a 6 meses contratando um dev.",
  },
]

function ComparisonTable() {
  return (
    <section className="py-20 md:py-32 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-primary">Comparação</span>
          </h2>
        </Reveal>

        <Reveal>
          <Card className="p-0 bg-background/50 border-primary/20 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="p-4 text-left font-semibold text-foreground"></th>
                  <th className="p-4 text-left font-semibold text-primary">Steffer (consultoria)</th>
                  <th className="p-4 text-left font-semibold text-foreground/80">Contratar dev</th>
                  <th className="p-4 text-left font-semibold text-foreground/80">Fazer sozinho</th>
                  <th className="p-4 text-left font-semibold text-foreground/80">Agência</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-primary/10">
                  <td className="p-4 font-semibold text-foreground/80">Tempo de implementação</td>
                  <td className="p-4 text-foreground/80">4 a 8 semanas</td>
                  <td className="p-4 text-foreground/80">3 a 6 meses</td>
                  <td className="p-4 text-foreground/80">Sem prazo para terminar</td>
                  <td className="p-4 text-foreground/80">3 a 4 meses</td>
                </tr>
                <tr className="border-b border-primary/10">
                  <td className="p-4 font-semibold text-foreground/80">Custo inicial</td>
                  <td className="p-4 text-foreground/80">Até R$ 10 mil</td>
                  <td className="p-4 text-foreground/80">R$ 60 mil ou mais</td>
                  <td className="p-4 text-foreground/80">&quot;Grátis&quot;, mas custa o seu tempo</td>
                  <td className="p-4 text-foreground/80">R$ 40 mil ou mais</td>
                </tr>
                <tr className="border-b border-primary/10">
                  <td className="p-4 font-semibold text-foreground/80">Começa entendendo o negócio</td>
                  <td className="p-4 text-foreground/80">Sim, com diagnóstico gratuito</td>
                  <td className="p-4 text-foreground/80">Depende de quem contrata</td>
                  <td className="p-4 text-foreground/80">Depende de você</td>
                  <td className="p-4 text-foreground/80">Nem sempre</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-foreground/80">Suporte depois da entrega</td>
                  <td className="p-4 text-foreground/80">Incluso</td>
                  <td className="p-4 text-foreground/80">Depende do contrato</td>
                  <td className="p-4 text-foreground/80">Você mesmo</td>
                  <td className="p-4 text-foreground/80">Cobrado à parte</td>
                </tr>
              </tbody>
            </table>
          </Card>

          <p className="text-sm text-foreground/60 mt-4 italic">*Valores de referência da Steffer.</p>
        </Reveal>
      </div>
    </section>
  )
}

function WhenEachMakesSense() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Quando cada opção <span className="text-primary">faz sentido</span>
          </h2>
        </Reveal>

        <Reveal>
          <Card className="p-8 md:p-12 bg-background/50 border-primary/20">
            <ul className="space-y-6 text-lg text-foreground/80">
              <li>
                <strong>Contratar um dev</strong> faz sentido quando a tecnologia é o produto da empresa e há trabalho
                contínuo para uma pessoa em tempo integral.
              </li>
              <li>
                <strong>Fazer sozinho</strong> funciona para automações simples, se alguém da equipe tem tempo para
                aprender e manter.{" "}
                <Link href="/blog/vibe-coding-na-sua-empresa" className="text-primary hover:underline">
                  Leia sobre vibe coding e quando vale fazer por conta própria
                </Link>
                .
              </li>
              <li>
                <strong>Uma agência</strong> costuma servir bem a projetos grandes com escopo fechado.
              </li>
              <li>
                <strong>Uma consultoria como a Steffer</strong> faz sentido quando você quer resolver um problema de
                operação rápido, sem montar time técnico, e com alguém que continue cuidando depois.
              </li>
            </ul>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

export default function DevAgenciaOuConsultoriaPage() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Dev, agência ou consultoria: quem contratar para automatizar sua empresa?",
            description:
              "Comparação de prazo, custo inicial e suporte entre contratar um desenvolvedor, uma agência, fazer sozinho ou contratar uma consultoria como a Steffer.",
            url: "https://www.steffer.com.br/solucoes/dev-agencia-ou-consultoria",
            publisher: {
              "@type": "Organization",
              name: "Steffer",
              url: "https://www.steffer.com.br",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <Header />
      <SolutionHero
        title="Dev, agência ou consultoria: <span class='text-primary'>quem contratar</span> para automatizar sua empresa?"
        description="Para uma pequena ou média empresa que quer automatizar processos ou ter um sistema próprio, existem quatro caminhos: contratar um desenvolvedor, contratar uma agência, fazer sozinho com ferramentas no-code ou contratar uma consultoria que entende o negócio e implementa. A diferença está no prazo, no custo inicial e em quem cuida do sistema depois."
      />
      <ComparisonTable />
      <WhenEachMakesSense />
      <SimpleFAQ faqs={faqs} />
      <section className="py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/diagnostico-gratuito"
            className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
          >
            Agendar diagnóstico gratuito →
          </Link>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </main>
  )
}
