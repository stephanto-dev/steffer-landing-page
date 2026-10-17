import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionHero } from "@/components/solucoes/solution-hero"
import { WhatDelivers } from "@/components/solucoes/what-delivers"
import { HowWorks } from "@/components/solucoes/how-works"
import { SimpleFAQ } from "@/components/solucoes/simple-faq"
import { ContactSection } from "@/components/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Automação com IA para e-commerce | Steffer",
  description:
    "Atendimento automático no WhatsApp, estoque sincronizado entre loja e ERP, alertas e dashboards de vendas. A Steffer automatiza a operação de lojas virtuais em 4 a 8 semanas, com projetos de até R$ 10 mil.",
  alternates: { canonical: "https://www.steffer.com.br/solucoes/automacao-com-ia-para-ecommerce" },
  openGraph: {
    title: "Automação com IA para e-commerce | Steffer",
    description:
      "Atendimento automático no WhatsApp, estoque sincronizado entre loja e ERP, alertas e dashboards de vendas. A Steffer automatiza a operação de lojas virtuais em 4 a 8 semanas, com projetos de até R$ 10 mil.",
    url: "https://www.steffer.com.br/solucoes/automacao-com-ia-para-ecommerce",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automação com IA para e-commerce | Steffer",
    description:
      "Atendimento automático no WhatsApp, estoque sincronizado entre loja e ERP, alertas e dashboards de vendas. A Steffer automatiza a operação de lojas virtuais em 4 a 8 semanas, com projetos de até R$ 10 mil.",
  },
}

const whatDeliversItems = [
  "Atendimento: agente de IA no WhatsApp para dúvidas frequentes, rastreamento de pedidos e recomendações",
  "Estoque: integração entre plataforma da loja e ERP, com atualização automática",
  "Alertas: aviso quando um produto está acabando ou um pedido trava",
  "Dados: dashboard de vendas e estoque atualizado em tempo real, sem montar relatório à mão",
]

const howWorksSteps = [
  "Diagnóstico gratuito de 45 minutos para ver onde a operação perde tempo e venda",
  "Plano com as automações ordenadas por impacto e esforço, com estimativa de ROI",
  "Implementação em ciclos curtos, com você acompanhando",
  "Treinamento da equipe e suporte contínuo",
]

const faqs = [
  {
    question: "Quanto custa automatizar um e-commerce?",
    answer: "Os projetos iniciais da Steffer custam até R$ 10 mil. O valor exato depende do escopo e sai do diagnóstico gratuito.",
  },
  {
    question: "Funciona com Shopify e com o meu ERP?",
    answer:
      "A Steffer integra a plataforma da loja com ERPs, CRMs e o WhatsApp. A compatibilidade com os seus sistemas é avaliada no diagnóstico.",
  },
  {
    question: "Preciso ter alguém técnico na equipe?",
    answer: "Não. A Steffer implementa e treina a equipe para usar as automações.",
  },
]

export default function AutomacaoEcommercePage() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Automação com IA para e-commerce",
            description:
              "Atendimento automático no WhatsApp, estoque sincronizado entre loja e ERP, alertas e dashboards de vendas.",
            provider: {
              "@type": "Organization",
              name: "Steffer",
              url: "https://www.steffer.com.br",
            },
            areaServed: {
              "@type": "Country",
              name: "BR",
            },
            serviceType: "Automação com IA para e-commerce",
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
        title="Automação com IA para <span class='text-primary'>e-commerce</span>"
        description="A Steffer automatiza a operação de lojas virtuais brasileiras: atendimento no WhatsApp com IA, estoque sincronizado entre loja e ERP, alertas automáticos e dashboards de vendas em tempo real. Cada automação é desenhada a partir da rotina da sua loja, com projetos iniciais de até R$ 10 mil e implementação em 4 a 8 semanas."
      />
      <WhatDelivers items={whatDeliversItems} />
      <HowWorks steps={howWorksSteps} />
      <SimpleFAQ faqs={faqs} />
      <ContactSection />
      <Footer />
    </main>
  )
}
