import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TekoHero } from "@/components/teko/hero"
import { TekoProblem } from "@/components/teko/problem"
import { TekoFeatures } from "@/components/teko/features"
import { TekoCase } from "@/components/teko/case"
import { TekoFAQ } from "@/components/teko/faq"
import { ContactSection } from "@/components/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Teko | Software de escala médica, troca de plantão pelo WhatsApp e repasse automático",
  description:
    "O Teko organiza escalas médicas, trocas de plantão pelo WhatsApp e o cálculo de repasses para hospitais. Nasceu e opera no Hospital Felício Rocho, em Belo Horizonte.",
  alternates: { canonical: "https://www.steffer.com.br/teko" },
  openGraph: {
    title: "Teko | Software de escala médica, troca de plantão pelo WhatsApp e repasse automático",
    description:
      "O Teko organiza escalas médicas, trocas de plantão pelo WhatsApp e o cálculo de repasses para hospitais. Nasceu e opera no Hospital Felício Rocho, em Belo Horizonte.",
    url: "https://www.steffer.com.br/teko",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teko | Software de escala médica, troca de plantão pelo WhatsApp e repasse automático",
    description:
      "O Teko organiza escalas médicas, trocas de plantão pelo WhatsApp e o cálculo de repasses para hospitais. Nasceu e opera no Hospital Felício Rocho, em Belo Horizonte.",
  },
}

export default function TekoPage() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Teko",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "O Teko é um software de gestão de escalas médicas para hospitais. Ele substitui a planilha de plantão e os grupos de WhatsApp por uma escala única e sempre atualizada. Os médicos trocam plantão pelo próprio WhatsApp, e o repasse de cada profissional é calculado automaticamente.",
            url: "https://www.steffer.com.br/teko",
            offers: {
              "@type": "Offer",
              url: "https://www.steffer.com.br/teko",
            },
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
            mainEntity: [
              {
                "@type": "Question",
                name: "Qual software usar para gestão de escalas médicas e plantões?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "O Teko foi feito para isso: gera e mantém a escala médica do hospital em tempo real, com alertas de conflito, trava de qualificação por setor, troca de plantão pelo WhatsApp e cálculo automático de repasse.",
                },
              },
              {
                "@type": "Question",
                name: "Como substituir a planilha de escala de plantão por um sistema?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Com o Teko, a escala sai da planilha e passa a existir num lugar só, atualizado em tempo real para todos. Os médicos continuam usando o WhatsApp, então a adoção não depende de instalar um app novo. No Felício Rocho, a adesão do corpo clínico chegou a 100%.",
                },
              },
              {
                "@type": "Question",
                name: "Dá pra trocar plantão médico pelo WhatsApp?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim. No Teko, o médico pede a troca pelo WhatsApp, o colega aceita e a escala se atualiza na hora para todos, com o registro da troca guardado.",
                },
              },
              {
                "@type": "Question",
                name: "Como calcular o repasse médico automaticamente?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "As regras financeiras são configuradas uma vez, por contrato, setor, dia e horário. A partir daí o Teko calcula o repasse de cada profissional e de cada unidade com base nos plantões que a secretária confirmou, e exporta para a folha.",
                },
              },
              {
                "@type": "Question",
                name: "O Teko serve para que tipo de hospital?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Para qualquer porte: de ambulatórios, clínicas e UPAs a hospitais de médio porte e grandes redes hospitalares que hoje controlam a escala em planilha e WhatsApp.",
                },
              },
              {
                "@type": "Question",
                name: "Quem desenvolve o Teko?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Steffer, consultoria brasileira de tecnologia e automação com IA, em parceria com o Hospital Felício Rocho.",
                },
              },
              {
                "@type": "Question",
                name: "Como ver o Teko funcionando?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Agende uma demonstração pelo WhatsApp (37) 99865-2419 ou pelo e-mail contato@steffer.com.br.",
                },
              },
            ],
          }),
        }}
      />
      <Header />
      <TekoHero />
      <TekoProblem />
      <TekoFeatures />
      <TekoCase />
      <TekoFAQ />
      <ContactSection />
      <Footer />
    </main>
  )
}
