"use client"
import { HubSpotForm } from "./hubspot-form"

export function ContactSection() {
  const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || ""
  const HUBSPOT_FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || ""

  return (
    <section id="contato" className="py-20 md:py-32 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Entre em contato</h2>
          <p className="text-lg md:text-xl text-foreground/70 text-balance">
            Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas
          </p>
        </div>

        <div className="border border-border rounded-2xl p-8 md:p-12 shadow-xl bg-slate-300 px-0 py-0">
          {HUBSPOT_PORTAL_ID && HUBSPOT_FORM_ID ? (
            <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={HUBSPOT_FORM_ID} region="na1" />
          ) : (
            <div className="text-center py-8">
              <p className="text-foreground/70 mb-4">
                Configure suas credenciais do HubSpot nas variáveis de ambiente:
              </p>
              <ul className="text-sm text-foreground/60 space-y-2">
                <li>NEXT_PUBLIC_HUBSPOT_PORTAL_ID</li>
                <li>NEXT_PUBLIC_HUBSPOT_FORM_ID</li>
              </ul>
            </div>
          )}

          <p className="text-sm text-foreground/60 text-center mt-6">
            Ao enviar este formulário, você concorda com nossa política de privacidade
          </p>
        </div>
      </div>
    </section>
  )
}
