import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DEFAULT_OG_IMAGE } from "@/lib/constants"

/**
 * DRAFT: This privacy policy page requires legal review before going live.
 * The following placeholders must be filled by the company's legal team:
 * - [RAZÃO SOCIAL] - Company's legal name
 * - [CNPJ] - Company's tax ID number
 * - [ENDEREÇO] - Company's full address
 * - [E-MAIL DO ENCARREGADO/DPO] - Data Protection Officer email
 */

export const metadata: Metadata = {
  title: "Política de Privacidade | Steffer",
  description:
    "Política de privacidade e proteção de dados pessoais da Steffer, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  alternates: { canonical: "https://www.steffer.com.br/politica-de-privacidade" },
  openGraph: {
    title: "Política de Privacidade | Steffer",
    description:
      "Política de privacidade e proteção de dados pessoais da Steffer, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
    url: "https://www.steffer.com.br/politica-de-privacidade",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidade | Steffer",
    description:
      "Política de privacidade e proteção de dados pessoais da Steffer, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
    images: [DEFAULT_OG_IMAGE.url],
  },
}

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <article className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        <h1 className="mb-8 text-4xl font-bold text-foreground md:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
        </p>

        <div className="prose prose-slate max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-ul:text-foreground prose-li:text-foreground prose-a:text-primary prose-a:underline">
          <section className="mb-8">
            <h2>1. Introdução</h2>
            <p>
              A <strong>[RAZÃO SOCIAL]</strong>, inscrita no CNPJ sob o nº <strong>[CNPJ]</strong>, com sede em{" "}
              <strong>[ENDEREÇO]</strong>, operando sob o nome fantasia <strong>Steffer</strong>, respeita a
              privacidade de seus usuários e clientes e está comprometida com a proteção dos dados pessoais coletados
              através do website <a href="https://www.steffer.com.br">www.steffer.com.br</a> e de seus serviços de
              consultoria e desenvolvimento de tecnologia.
            </p>
            <p>
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e compartilhamos seus dados
              pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD) e demais
              normas aplicáveis.
            </p>
          </section>

          <section className="mb-8">
            <h2>2. Dados Coletados</h2>
            <p>
              Coletamos os seguintes tipos de dados pessoais quando você interage com nosso website ou serviços:
            </p>

            <h3>2.1. Dados fornecidos por você</h3>
            <ul>
              <li>
                <strong>Dados de contato:</strong> nome, e-mail, telefone e empresa fornecidos através de formulários
                de contato e solicitações de diagnóstico gratuito
              </li>
              <li>
                <strong>Dados de comunicação:</strong> mensagens enviadas através do formulário de contato ou por
                e-mail
              </li>
            </ul>

            <h3>2.2. Dados coletados automaticamente</h3>
            <ul>
              <li>
                <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de
                permanência, origem da visita e dispositivo utilizado
              </li>
              <li>
                <strong>Cookies e tecnologias similares:</strong> utilizamos cookies para análise de tráfego e
                melhorias do website (via Google Analytics/Vercel Analytics)
              </li>
            </ul>

            <h3>2.3. Dados coletados por terceiros</h3>
            <ul>
              <li>
                <strong>HubSpot:</strong> nossa plataforma de gestão de relacionamento com clientes (CRM) e formulários
                de captura de leads
              </li>
              <li>
                <strong>Vercel Analytics:</strong> nossa plataforma de hospedagem coleta dados anônimos de performance
                e uso do website
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>3. Finalidade do Tratamento de Dados</h2>
            <p>Tratamos seus dados pessoais para as seguintes finalidades:</p>
            <ul>
              <li>Responder às suas solicitações de contato e diagnóstico gratuito</li>
              <li>Fornecer nossos serviços de consultoria, automação, desenvolvimento e tecnologia</li>
              <li>Enviar comunicações sobre nossos serviços, quando solicitado ou autorizado</li>
              <li>Melhorar a experiência de navegação no website através de análises estatísticas</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Proteger nossos direitos em processos judiciais ou administrativos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>4. Base Legal para o Tratamento</h2>
            <p>
              O tratamento de seus dados pessoais é realizado com base nas seguintes hipóteses legais previstas na
              LGPD:
            </p>
            <ul>
              <li>
                <strong>Execução de contrato:</strong> quando o tratamento é necessário para a execução de contrato ou
                de procedimentos preliminares relacionados ao contrato do qual você é parte (Art. 7º, V, LGPD)
              </li>
              <li>
                <strong>Legítimo interesse:</strong> para atividades de marketing, análises estatísticas e melhorias
                dos nossos serviços (Art. 7º, IX, LGPD)
              </li>
              <li>
                <strong>Cumprimento de obrigação legal:</strong> quando necessário para cumprirmos obrigações legais ou
                regulatórias (Art. 7º, II, LGPD)
              </li>
              <li>
                <strong>Consentimento:</strong> quando você nos fornece consentimento expresso para finalidades
                específicas (Art. 7º, I, LGPD)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>5. Compartilhamento de Dados</h2>
            <p>Seus dados pessoais podem ser compartilhados com:</p>
            <ul>
              <li>
                <strong>HubSpot Inc.:</strong> plataforma de CRM e automação de marketing utilizada para gestão de
                leads e relacionamento com clientes. O HubSpot é certificado no Privacy Shield e possui adequações à
                LGPD.
              </li>
              <li>
                <strong>Vercel Inc.:</strong> plataforma de hospedagem do nosso website, que coleta dados anônimos de
                performance e análise.
              </li>
              <li>
                <strong>Prestadores de serviços:</strong> fornecedores de serviços técnicos, de infraestrutura e
                suporte, sempre vinculados por obrigações de confidencialidade e proteção de dados.
              </li>
              <li>
                <strong>Autoridades competentes:</strong> quando exigido por lei ou ordem judicial.
              </li>
            </ul>
            <p>
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing sem seu
              consentimento expresso.
            </p>
          </section>

          <section className="mb-8">
            <h2>6. Armazenamento e Retenção de Dados</h2>
            <p>
              Seus dados pessoais são armazenados em servidores seguros, localizados no Brasil e no exterior (Estados
              Unidos), operados por nossos parceiros de tecnologia (Vercel e HubSpot), que adotam medidas técnicas e
              organizacionais adequadas de segurança.
            </p>
            <p>
              Os dados são mantidos pelo tempo necessário para cumprir as finalidades para as quais foram coletados,
              incluindo para atender requisitos legais, contratuais, de prestação de contas ou resolução de disputas.
              Após esse período, os dados são eliminados ou anonimizados.
            </p>
          </section>

          <section className="mb-8">
            <h2>7. Segurança dos Dados</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acessos
              não autorizados, perda, destruição, alteração ou divulgação indevida, incluindo:
            </p>
            <ul>
              <li>Criptografia de dados em trânsito (HTTPS/TLS)</li>
              <li>Controles de acesso restrito aos dados pessoais</li>
              <li>Monitoramento e registro de acessos aos sistemas</li>
              <li>Políticas internas de segurança da informação</li>
              <li>Treinamento de colaboradores sobre proteção de dados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>8. Direitos do Titular dos Dados</h2>
            <p>Você tem os seguintes direitos em relação aos seus dados pessoais, conforme a LGPD:</p>
            <ul>
              <li>
                <strong>Confirmação e acesso:</strong> confirmar a existência de tratamento e acessar seus dados
              </li>
              <li>
                <strong>Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados
              </li>
              <li>
                <strong>Anonimização, bloqueio ou eliminação:</strong> solicitar a anonimização, bloqueio ou eliminação
                de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD
              </li>
              <li>
                <strong>Portabilidade:</strong> solicitar a portabilidade dos dados a outro fornecedor de serviço ou
                produto
              </li>
              <li>
                <strong>Eliminação de dados:</strong> solicitar a eliminação dos dados pessoais tratados com base no
                seu consentimento
              </li>
              <li>
                <strong>Informação sobre compartilhamento:</strong> obter informações sobre as entidades públicas e
                privadas com as quais compartilhamos dados
              </li>
              <li>
                <strong>Informação sobre a possibilidade de não consentir:</strong> ser informado sobre a possibilidade
                de não fornecer consentimento e sobre as consequências da negativa
              </li>
              <li>
                <strong>Revogação do consentimento:</strong> revogar o consentimento a qualquer momento
              </li>
            </ul>
            <p>
              Para exercer seus direitos, entre em contato com nosso Encarregado de Proteção de Dados (DPO) através do
              e-mail <strong>[E-MAIL DO ENCARREGADO/DPO]</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2>9. Cookies</h2>
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação, analisar o tráfego
              do website e entender como os visitantes interagem com nosso conteúdo.
            </p>
            <p>
              Você pode configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie está
              sendo enviado. No entanto, algumas funcionalidades do website podem não funcionar adequadamente sem
              cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2>10. Transferência Internacional de Dados</h2>
            <p>
              Alguns dos nossos parceiros de tecnologia (HubSpot e Vercel) possuem servidores localizados fora do
              Brasil, principalmente nos Estados Unidos. Essas transferências são realizadas com garantias adequadas de
              proteção, incluindo cláusulas contratuais padrão e certificações de conformidade com normas
              internacionais de proteção de dados.
            </p>
          </section>

          <section className="mb-8">
            <h2>11. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas
              ou na legislação aplicável. Recomendamos que você revise esta página regularmente para se manter
              informado.
            </p>
            <p>
              A data da última atualização está indicada no início desta Política. Alterações materiais serão
              comunicadas através do website ou por e-mail.
            </p>
          </section>

          <section className="mb-8">
            <h2>12. Contato</h2>
            <p>
              Se você tiver dúvidas, comentários ou solicitações sobre esta Política de Privacidade ou sobre o
              tratamento de seus dados pessoais, entre em contato conosco:
            </p>
            <ul>
              <li>
                <strong>Encarregado de Proteção de Dados (DPO):</strong> [E-MAIL DO ENCARREGADO/DPO]
              </li>
              <li>
                <strong>E-mail geral:</strong> contato@steffer.com.br
              </li>
              <li>
                <strong>Endereço:</strong> [ENDEREÇO]
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>13. Autoridade Nacional de Proteção de Dados (ANPD)</h2>
            <p>
              Caso você entenda que seus direitos não foram adequadamente respeitados, você pode apresentar uma
              reclamação à Autoridade Nacional de Proteção de Dados (ANPD), através do website{" "}
              <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">
                www.gov.br/anpd
              </a>
              .
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  )
}
