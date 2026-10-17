import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DiagnosticoHero } from "@/components/diagnostico/hero"
import { DiagnosticoReceive } from "@/components/diagnostico/receive"
import { DiagnosticoHow } from "@/components/diagnostico/how"
import { DiagnosticoWhy } from "@/components/diagnostico/why"
import { DiagnosticoFAQ } from "@/components/diagnostico/faq"
import { ContactSection } from "@/components/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diagnóstico gratuito de automação com IA | Steffer",
  description:
    "Sessão de 45 minutos com um especialista da Steffer para mapear seus processos, calcular o ROI da automação e sair com um plano priorizado. Gratuito e sem compromisso.",
  alternates: { canonical: "https://www.steffer.com.br/diagnostico-gratuito" },
  openGraph: {
    title: "Diagnóstico gratuito de automação com IA | Steffer",
    description:
      "Sessão de 45 minutos com um especialista da Steffer para mapear seus processos, calcular o ROI da automação e sair com um plano priorizado. Gratuito e sem compromisso.",
    url: "https://www.steffer.com.br/diagnostico-gratuito",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnóstico gratuito de automação com IA | Steffer",
    description:
      "Sessão de 45 minutos com um especialista da Steffer para mapear seus processos, calcular o ROI da automação e sair com um plano priorizado. Gratuito e sem compromisso.",
  },
}

export default function DiagnosticoGratuitoPage() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Diagnóstico gratuito de automação com IA",
            description:
              "Sessão de 45 minutos com um especialista da Steffer para mapear seus processos, calcular o ROI da automação e sair com um plano priorizado. Gratuito e sem compromisso.",
            provider: {
              "@type": "Organization",
              name: "Steffer",
              url: "https://www.steffer.com.br",
            },
            areaServed: {
              "@type": "Country",
              name: "BR",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "BRL",
              description: "Diagnóstico gratuito",
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
                name: "Quanto custa uma automação com IA na Steffer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Os projetos iniciais custam até R$ 10 mil. O valor exato depende do escopo e sai do diagnóstico gratuito.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto tempo leva para implementar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Projetos simples, com 1 ou 2 automações, levam de 3 a 4 semanas. Projetos com várias automações e integrações levam de 6 a 8 semanas. Transformações completas de processo podem levar de 10 a 12 semanas.",
                },
              },
              {
                "@type": "Question",
                name: "Preciso ter conhecimento técnico?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Não. A Steffer cuida da implementação do início ao fim e treina sua equipe para usar as automações.",
                },
              },
              {
                "@type": "Question",
                name: "Posso começar pequeno e expandir depois?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim. Dá pra começar com uma ou duas automações e ampliar conforme os resultados aparecem.",
                },
              },
              {
                "@type": "Question",
                name: "Vocês dão suporte depois da entrega?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim. O acompanhamento continua depois da entrega, com suporte técnico, manutenção e ajustes conforme o negócio muda.",
                },
              },
              {
                "@type": "Question",
                name: "O que a Steffer automatiza?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Atendimento ao cliente com chatbots e agentes de IA no WhatsApp, processamento de documentos e dados, relatórios e dashboards, integrações entre sistemas como CRM e ERP, e workflows de aprovação e notificações.",
                },
              },
              {
                "@type": "Question",
                name: "Para que tipo de empresa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pequenas e médias empresas brasileiras, principalmente de saúde, e-commerce, serviços, agências e consultorias, e times comerciais.",
                },
              },
              {
                "@type": "Question",
                name: "E se meu sistema for muito específico?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A gente entende a dor e cria a solução específica para o cliente.",
                },
              },
              {
                "@type": "Question",
                name: "Meus dados estão seguros?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "O banco de dados é seguro e criptografado.",
                },
              },
              {
                "@type": "Question",
                name: "O diagnóstico é mesmo gratuito?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim, gratuito e sem compromisso de contratação.",
                },
              },
            ],
          }),
        }}
      />
      <Header />
      <DiagnosticoHero />
      <DiagnosticoReceive />
      <DiagnosticoHow />
      <DiagnosticoWhy />
      <DiagnosticoFAQ />
      <ContactSection />
      <Footer />
    </main>
  )
}
