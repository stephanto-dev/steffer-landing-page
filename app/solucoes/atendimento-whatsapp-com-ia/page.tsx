import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionHero } from "@/components/solucoes/solution-hero"
import { WhenMakesSense } from "@/components/solucoes/when-makes-sense"
import { WhatDelivers } from "@/components/solucoes/what-delivers"
import { HowWorks } from "@/components/solucoes/how-works"
import { SimpleFAQ } from "@/components/solucoes/simple-faq"
import { ContactSection } from "@/components/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Atendimento no WhatsApp com IA para empresas | Steffer",
  description:
    "A Steffer implementa agentes de IA no WhatsApp que respondem clientes, tiram dúvidas, rastreiam pedidos e passam para a equipe o que precisa de gente. Projetos de até R$ 10 mil, em 4 a 8 semanas.",
  alternates: { canonical: "https://www.steffer.com.br/solucoes/atendimento-whatsapp-com-ia" },
  openGraph: {
    title: "Atendimento no WhatsApp com IA para empresas | Steffer",
    description:
      "A Steffer implementa agentes de IA no WhatsApp que respondem clientes, tiram dúvidas, rastreiam pedidos e passam para a equipe o que precisa de gente. Projetos de até R$ 10 mil, em 4 a 8 semanas.",
    url: "https://www.steffer.com.br/solucoes/atendimento-whatsapp-com-ia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atendimento no WhatsApp com IA para empresas | Steffer",
    description:
      "A Steffer implementa agentes de IA no WhatsApp que respondem clientes, tiram dúvidas, rastreiam pedidos e passam para a equipe o que precisa de gente. Projetos de até R$ 10 mil, em 4 a 8 semanas.",
  },
}

const whenMakesSensePoints = [
  "A equipe não dá conta do volume de mensagens e o cliente espera horas por resposta",
  "As mesmas perguntas chegam todos os dias",
  "Informações como estoque, pedido ou agenda estão em outro sistema e alguém precisa copiar à mão",
  "Contatos fora do horário comercial se perdem",
]

const whatDeliversItems = [
  "Agente de IA no WhatsApp treinado com as informações do seu negócio",
  "Integração com CRM, ERP, e-commerce ou planilhas",
  "Regras de quando o agente responde sozinho e quando chama alguém da equipe",
  "Treinamento da equipe e suporte contínuo depois da entrega",
]

const howWorksSteps = [
  "Diagnóstico gratuito de 45 minutos para entender como o atendimento funciona hoje",
  "Desenho da solução, com o que o agente faz e onde ele se integra",
  "Implementação e testes em ciclos curtos, com você acompanhando",
  "Entrada no ar e treinamento da equipe",
  "Acompanhamento e ajustes conforme as conversas reais",
]

const faqs = [
  {
    question: "Quanto custa um atendimento com IA no WhatsApp?",
    answer: "Os projetos iniciais da Steffer custam até R$ 10 mil. O valor exato sai do diagnóstico gratuito.",
  },
  {
    question: "Em quanto tempo fica pronto?",
    answer: "Projetos simples levam de 3 a 4 semanas. Com várias integrações, de 6 a 8 semanas.",
  },
  {
    question: "O agente de IA substitui minha equipe?",
    answer:
      "Não. A Steffer trabalha com parceria entre pessoas e IA: o agente cuida do repetitivo e a equipe fica com as conversas que precisam de gente.",
  },
  {
    question: "Funciona com o sistema que eu já uso?",
    answer:
      "A Steffer integra o WhatsApp com CRMs, ERPs, lojas virtuais e planilhas. Isso é avaliado no diagnóstico.",
  },
]

export default function AtendimentoWhatsAppIAPage() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Atendimento no WhatsApp com IA",
            description:
              "A Steffer implementa agentes de IA no WhatsApp que respondem clientes, tiram dúvidas, rastreiam pedidos e passam para a equipe o que precisa de gente.",
            provider: {
              "@type": "Organization",
              name: "Steffer",
              url: "https://www.steffer.com.br",
            },
            areaServed: {
              "@type": "Country",
              name: "BR",
            },
            serviceType: "Automação de atendimento no WhatsApp com IA",
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
        title="Atendimento no WhatsApp com IA para <span class='text-primary'>pequenas e médias empresas</span>"
        description="A Steffer implementa agentes de inteligência artificial no WhatsApp da sua empresa. O agente responde as perguntas frequentes, informa status de pedido, agenda, qualifica o contato e passa para a sua equipe só o que precisa de uma pessoa. É feito sob medida para o seu processo, integrado ao CRM, ERP ou loja que você já usa, com projetos iniciais de até R$ 10 mil e implementação em 4 a 8 semanas."
      />
      <WhenMakesSense points={whenMakesSensePoints} />
      <WhatDelivers items={whatDeliversItems} />
      <HowWorks steps={howWorksSteps} />
      <SimpleFAQ faqs={faqs} />
      <ContactSection />
      <Footer />
    </main>
  )
}
