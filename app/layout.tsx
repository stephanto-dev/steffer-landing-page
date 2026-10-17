import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.steffer.com.br/"),
  alternates: {
    canonical: "https://www.steffer.com.br/",
  },
  title: "Steffer | Tecnologia sob medida para o seu negócio",
  description:
      "Consultoria e desenvolvimento de tecnologia sob medida. Automação, IA, sistemas e dados que se adaptam ao seu processo, não o contrário.",
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
    "desenvolvimento de software",
    "sites institucionais",
    "dashboards de BI",
  ],
  authors: [{ name: "Steffer" }],
  creator: "Steffer",
  publisher: "Steffer",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.steffer.com.br",
    title: "Steffer | Tecnologia sob medida para o seu negócio",
    description:
      "Consultoria e desenvolvimento de tecnologia sob medida. Automação, IA, sistemas e dados que se adaptam ao seu processo, não o contrário.",
    siteName: "Steffer",
    images: [
      {
        url: "https://www.steffer.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "Steffer - Consultoria de IA e Automação",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steffer | Tecnologia sob medida para o seu negócio",
    description:
      "Consultoria e desenvolvimento de tecnologia sob medida. Automação, IA, sistemas e dados que se adaptam ao seu processo, não o contrário.",
    images: ["https://www.steffer.com.br/og-image.png"],
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
  },
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f6f8fa",
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
              url: "https://www.steffer.com.br",
              logo: "https://www.steffer.com.br/images/logo-20steffer.png",
              image: "https://www.steffer.com.br/og-image.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Sales",
                availableLanguage: ["Portuguese"],
                telephone: "+553798652419",
                email: "contato@steffer.com.br",
              },
              address: {
                "@type": "PostalAddress",
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
              priceRange: "Até R$ 10.000",
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
