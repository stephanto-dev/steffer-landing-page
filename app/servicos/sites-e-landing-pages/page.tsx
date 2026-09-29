import type { Metadata } from "next"
import { ServicePage } from "@/components/servicos/service-page"

export const metadata: Metadata = {
  title: "Sites e Landing Pages | Steffer",
  description:
    "Presença digital que já nasce pronta para gerar leads e ser encontrada. Sites institucionais e landing pages otimizados desde o primeiro dia.",
  alternates: { canonical: "https://steffer.com.br/servicos/sites-e-landing-pages" },
}

export default function SitesELandingPagesPage() {
  return (
    <ServicePage
      badge="Sites e landing pages"
      title={
        <>
          Presença digital que <span className="text-primary">já nasce pronta para gerar leads e ser encontrada.</span>
        </>
      }
      subtitle="Um site bonito que ninguém acha não gera negócio."
      problem="Muita empresa tem site, mas o site não converte visita em contato, e não aparece quando o cliente procura. Site bonito sem estratégia por trás é vitrine vazia."
      deliverables={[
        "Sites institucionais",
        "Landing pages de captação (para campanhas, lançamentos, ofertas específicas)",
        "Otimização para buscadores e IA generativa desde a construção (SEO e GEO, não como retrofit depois)",
        "Integração com automação e captação de leads (formulário → WhatsApp/CRM automaticamente)",
      ]}
      steps={[
        "Entendimento do objetivo (institucional, captação, venda direta)",
        "Definição de estrutura e conteúdo focado em conversão",
        "Design e desenvolvimento",
        "Otimização técnica de SEO/GEO antes do lançamento",
        "Lançamento + acompanhamento de performance",
      ]}
      audience="Negócios que precisam de presença digital que realmente gera contato, não um cartão de visita online que ninguém encontra."
      differentials={[
        "Site pensado para ser encontrado desde o início, não SEO como remendo depois",
        "Já nasce conectado às suas automações (lead cai direto no seu fluxo, sem trabalho manual)",
      ]}
    />
  )
}
