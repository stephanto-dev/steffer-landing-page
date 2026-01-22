import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://steffer.com.br"),
  alternates: {
    canonical: "https://steffer.com.br",
  },
  title: "Steffer | Consultoria de IA e Automação para Pequenos Empreendedores",
  description:
    "Transforme processos manuais em produtividade escalável. Automatizamos o tédio para você focar no lucro. 87% dos empreendedores conhecem IA, mas apenas 14% a usam efetivamente.",
  keywords: [
    "consultoria de IA",
    "automação de processos",
    "agentes de IA",
    "orquestração de processos",
    "GEO otimização",
    "dashboards inteligentes",
    "dados em tempo real",
    "eficiência como serviço",
    "pequenos empreendedores",
    "PMEs",
    "Brasil",
    "redução de custos",
    "produtividade escalável",
    "n8n",
    "Make.com",
    "automação WhatsApp",
    "atendimento automatizado",
    "RPA",
    "implementação de IA",
  ],
  authors: [{ name: "Steffer" }],
  creator: "Steffer",
  publisher: "Steffer",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#27E8DC",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://steffer.com.br",
    title: "Steffer | Consultoria de IA e Automação para Pequenos Empreendedores",
    description:
      "Transforme processos manuais em produtividade escalável. Automatizamos o tédio para você focar no lucro. 87% dos empreendedores conhecem IA, mas apenas 14% a usam efetivamente.",
    siteName: "Steffer",
    images: [
      {
        url: "https://steffer.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "Steffer - Consultoria de IA e Automação",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@steffer",
    creator: "@steffer",
    title: "Steffer | Consultoria de IA e Automação para Pequenos Empreendedores",
    description:
      "Transforme processos manuais em produtividade escalável. Automatizamos o tédio para você focar no lucro.",
    images: ["https://steffer.com.br/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    bingbot: {
      index: true,
      follow: true,
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Steffer",
              description:
                "Consultoria de IA e Automação especializada em transformar processos manuais em produtividade escalável para pequenos empreendedores",
              url: "https://steffer.com.br",
              logo: "https://steffer.com.br/images/logo-20steffer.png",
              image: "https://steffer.com.br/og-image.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Sales",
                availableLanguage: ["Portuguese"],
                telephone: "+55 11 9 9999-9999",
                email: "contato@steffer.com.br",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Brasil",
                addressCountry: "BR",
              },
              areaServed: {
                "@type": "Country",
                name: "Brasil",
              },
              serviceType: [
                "Consultoria de IA",
                "Automação de Processos",
                "Agentes de IA",
                "Orquestração de Processos",
                "GEO (Generative Engine Optimization)",
                "Dashboards e Análise de Dados",
              ],
              priceRange: "$$",
              knowsAbout: [
                "Inteligência Artificial",
                "Automação RPA",
                "n8n",
                "Make.com",
                "ChatGPT",
                "APIs",
                "Integração de Sistemas",
              ],
              sameAs: [],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "50",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Cliente satisfeito",
                  },
                  reviewBody: "Reduziram nossos custos em 40% e aumentaram a produtividade em 60%",
                },
              ],
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
                  name: "Como a IA reduz custos operacionais?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A IA automatiza tarefas repetitivas, elimina processos manuais ineficientes e otimiza fluxos de trabalho. Nossos clientes conseguem até 70% de redução em tarefas repetitivas, gerando economias significativas em horas de trabalho e custos fixos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Por que 95% das implementações de IA falham?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A maioria das implementações falha por falta de diagnóstico profundo, alinhamento inadequado com objetivos de negócio, e ausência de expertise técnica combinada com conhecimento do mercado. Realizamos mapeamento profundo antes de implementar qualquer solução.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Qual é o ROI médio em 3 meses?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nossos clientes experimentam ROI médio em 3 meses através da redução de custos operacionais, automação de processos, e aumento de produtividade. O resultado varia conforme o tipo de implementação, mas garantimos retorno mensurável.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Como funciona o serviço de consultoria?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Oferecemos diagnóstico gratuito de automação (valor R$ 5.000), onde mapeamos seus processos, identificamos oportunidades de IA, e apresentamos um plano customizado. Depois trabalhamos em parceria para implementar e acompanhar os resultados.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Qual a diferença entre Steffer e outras agências de IA?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Realizamos mapeamento e diagnóstico profundo antes de implementar. 52% dos empreendedores não sabem como usar IA - nós ensinamos. Temos 50+ clientes servidos e 500+ horas economizadas por mês. Nossa filosofia: raça, excelência, agilidade, honestidade e simplicidade.",
                  },
                },
              ],
            }),
          }}
        />

        <meta
          name="description"
          content="Consultoria de IA e Automação especializada em transformar processos manuais em produtividade escalável"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="language" content="Portuguese" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/50634073.js" />
      </body>
    </html>
  )
}
