import { Card } from "@/components/ui/card"
import { MessageSquare, ShoppingCart, Headphones, Users, FileText, Briefcase } from "lucide-react"

export function AgentesTypes() {
  const types = [
    {
      icon: MessageSquare,
      title: "Agente de Atendimento",
      description:
        "Responde dúvidas frequentes, fornece informações sobre produtos/serviços, resolve problemas simples",
      useCases: ["E-commerce", "SaaS", "Serviços"],
      features: ["Integração WhatsApp/Site/Instagram", "Base de conhecimento customizada", "Escalação para humano"],
    },
    {
      icon: ShoppingCart,
      title: "Agente de Vendas",
      description: "Qualifica leads, agenda reuniões, envia propostas, faz follow-up automático",
      useCases: ["B2B", "Imobiliárias", "Consultorias"],
      features: ["Qualificação inteligente", "Agendamento automático", "CRM integration"],
    },
    {
      icon: Headphones,
      title: "Agente de Suporte",
      description: "Troubleshooting técnico, abertura de tickets, acompanhamento de solicitações",
      useCases: ["SaaS", "Tech", "Telecom"],
      features: ["Diagnóstico de problemas", "Base de soluções", "Ticket tracking"],
    },
    {
      icon: Users,
      title: "Agente de RH",
      description: "Responde dúvidas de colaboradores, processa solicitações, coleta feedback",
      useCases: ["Empresas médias/grandes", "RH"],
      features: ["FAQ de políticas", "Solicitações automatizadas", "Onboarding"],
    },
    {
      icon: FileText,
      title: "Agente de Documentos",
      description: "Extrai informações de documentos, classifica, processa e organiza automaticamente",
      useCases: ["Contabilidade", "Jurídico", "Financeiro"],
      features: ["OCR inteligente", "Classificação automática", "Extração de dados"],
    },
    {
      icon: Briefcase,
      title: "Agente Interno",
      description: "Automatiza processos internos, responde dúvidas da equipe, acessa sistemas",
      useCases: ["Qualquer empresa", "Operações"],
      features: ["Acesso a múltiplos sistemas", "Execução de tarefas", "Relatórios automáticos"],
    },
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Tipos de <span className="text-primary">agentes de IA</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty">
            Cada negócio tem necessidades diferentes. Criamos agentes especializados para cada caso de uso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, index) => {
            const Icon = type.icon
            return (
              <Card key={index} className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-all">
                <Icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">{type.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground/80 mb-2">Ideal para:</p>
                  <div className="flex flex-wrap gap-2">
                    {type.useCases.map((useCase, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-primary/20 pt-4">
                  <p className="text-sm font-semibold mb-2 text-foreground/80">Funcionalidades:</p>
                  <ul className="space-y-1">
                    {type.features.map((feature, i) => (
                      <li key={i} className="text-sm text-foreground/60 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
