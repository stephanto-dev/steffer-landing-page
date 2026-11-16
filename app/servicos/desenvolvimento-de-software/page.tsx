import type { Metadata } from "next"
import Link from "next/link"
import { ServicePage } from "@/components/servicos/service-page"
import { ComparisonSection } from "@/components/comparison-section"
import { TekoSection } from "@/components/teko-section"
import { DEFAULT_OG_IMAGE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Desenvolvimento de Software Sob Medida | Steffer",
  description:
    "Sistemas web personalizados para o seu processo, feitos do zero, sem templates genéricos que forçam você a se adaptar à ferramenta.",
  alternates: { canonical: "https://www.steffer.com.br/servicos/desenvolvimento-de-software" },
  openGraph: {
    title: "Desenvolvimento de Software Sob Medida",
    description:
      "Sistemas web personalizados para o seu processo, feitos do zero, sem templates genéricos que forçam você a se adaptar à ferramenta.",
    url: "https://www.steffer.com.br/servicos/desenvolvimento-de-software",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desenvolvimento de Software Sob Medida",
    description:
      "Sistemas web personalizados para o seu processo, feitos do zero, sem templates genéricos que forçam você a se adaptar à ferramenta.",
    images: [DEFAULT_OG_IMAGE.url],
  },
}

export default function DesenvolvimentoDeSoftwarePage() {
  return (
    <ServicePage
      badge="Desenvolvimento de software"
      title={
        <>
          Sistemas web personalizados para o seu processo,{" "}
          <span className="text-primary">não templates genéricos.</span>
        </>
      }
      subtitle="Se o seu processo é específico, o seu sistema também deveria ser."
      problem="Ferramenta pronta resolve o problema de todo mundo, e por isso não resolve bem o problema de ninguém. Quando o seu processo não encaixa no molde, você acaba trabalhando pra tecnologia, em vez do contrário."
      deliverables={[
        "Sistemas web sob medida, desenhados a partir do seu processo real",
        "Painéis e ferramentas internas para a equipe operar sem planilha solta",
        "Integrações com o que você já usa (WhatsApp, ERPs, CRMs)",
        "Manutenção e evolução contínua depois da entrega",
      ]}
      steps={[
        "Diagnóstico do processo (gratuito): entendemos o que precisa existir antes de escrever qualquer linha de código",
        "Protótipo e validação: você vê e aprova antes da gente construir de verdade",
        "Desenvolvimento ágil, em ciclos curtos: você acompanha o progresso, não recebe só no fim",
        "Testes rigorosos antes de qualquer entrega",
        "Suporte contínuo pós-lançamento",
      ]}
      audience="Negócios com um processo específico demais para caber num SaaS genérico: clínicas, hospitais, operações com escala/agenda complexa, empresas de serviço com fluxo próprio."
      differentials={[
        "4–8 semanas de implementação, não 3–6 meses",
        "A gente entende seu negócio antes de sugerir tecnologia",
        "Suporte contínuo incluso, não é extra",
      ]}
      extra={
        <>
          <ComparisonSection />
          <TekoSection />
          <section className="py-16 md:py-24 px-6 bg-background">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">Leia mais</h2>
              <div className="space-y-4">
                <p className="text-foreground/80">
                  <Link
                    href="/solucoes/software-sob-medida-para-pme"
                    className="text-primary hover:underline font-semibold text-lg"
                  >
                    Quando vale um software sob medida para empresas →
                  </Link>
                </p>
                <p className="text-foreground/80">
                  <Link
                    href="/blog/software-sob-medida-para-pme-quanto-custa"
                    className="text-primary hover:underline font-semibold text-lg"
                  >
                    Quanto custa um software sob medida →
                  </Link>
                </p>
              </div>
            </div>
          </section>
        </>
      }
    />
  )
}
