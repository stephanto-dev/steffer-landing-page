"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Reveal } from "@/components/motion/reveal"
import {
  ShoppingCart,
  Briefcase,
  Megaphone,
  TrendingUp,
  Stethoscope,
  Calendar,
  MessageCircle,
  DollarSign,
  ShieldCheck,
  Bot,
  Package,
  Mail,
  BarChart3,
  FileText,
  RefreshCw,
  Target,
  PenLine,
  Flame,
  Phone,
  Handshake,
} from "lucide-react"

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      icon: Stethoscope,
      label: "Saúde / Médicos",
      headline: "Gestão clínica sem o 'limbo administrativo'",
      cases: [
        {
          icon: Calendar,
          title: "Escalas Inteligentes",
          description: "Substituição de planilhas por agendas digitais com validação automática",
        },
        {
          icon: MessageCircle,
          title: "Trocas via WhatsApp",
          description: "Fluxo de troca de plantão integrado ao app que os médicos já usam",
        },
        {
          icon: DollarSign,
          title: "Automação de Repasses",
          description: "Cálculo automático de valores devidos por profissional e unidade",
        },
        {
          icon: ShieldCheck,
          title: "Conformidade e Auditoria",
          description: "Histórico completo de presenças e alterações para segurança jurídica",
        },
      ],
      result: "Hospital Felício Rocho atingiu 100% de adesão clínica e eliminou erros de repasse manual",
    },
    {
      icon: ShoppingCart,
      label: "E-commerce",
      headline: "Do pedido à entrega: operação automatizada",
      cases: [
        {
          icon: Bot,
          title: "Atendimento Inteligente",
          description: "Chatbot que resolve 80% das dúvidas sobre pedidos, rastreamento e trocas automaticamente",
        },
        {
          icon: Package,
          title: "Gestão de Pedidos",
          description: "Integração automática entre loja, estoque, transportadora e contabilidade",
        },
        {
          icon: Mail,
          title: "Follow-up Pós-venda",
          description:
            "Sequências personalizadas de email/WhatsApp pedindo avaliação, sugerindo produtos complementares",
        },
        {
          icon: BarChart3,
          title: "Alertas Inteligentes",
          description: "Notificações automáticas sobre estoque baixo, pedidos em atraso ou anomalias nas vendas",
        },
      ],
      result: "Cliente reduziu 15h/semana em atendimento manual e aumentou taxa de recompra em 28%",
    },
    {
      icon: Briefcase,
      label: "Empresas de Serviços",
      headline: "Da captação ao delivery: fluxo sem ruído",
      cases: [
        {
          icon: Calendar,
          title: "Agendamento Inteligente",
          description: "Sistema que consulta disponibilidade, agenda e envia lembretes automáticos",
        },
        {
          icon: FileText,
          title: "Propostas Personalizadas",
          description: "IA que gera propostas comerciais baseadas no perfil do lead e histórico",
        },
        {
          icon: RefreshCw,
          title: "Pipeline Automatizado",
          description: "Movimentação automática de leads no CRM baseada em ações e tempo",
        },
        {
          icon: TrendingUp,
          title: "Relatórios Automáticos",
          description: "Dashboards que se atualizam sozinhos com métricas de produtividade e faturamento",
        },
      ],
      result: "Escritório de contabilidade reduziu 60% do tempo em tarefas administrativas",
    },
    {
      icon: Megaphone,
      label: "Agências e Consultorias",
      headline: "Escale sem perder qualidade",
      cases: [
        {
          icon: BarChart3,
          title: "Relatórios para Clientes",
          description: "Geração automática de reports mensais com métricas de todas as plataformas",
        },
        {
          icon: Target,
          title: "Onboarding Automatizado",
          description: "Sequência de boas-vindas, coleta de informações e setup inicial sem intervenção manual",
        },
        {
          icon: PenLine,
          title: "Assistente de Conteúdo",
          description: "IA que ajuda na criação de posts, roteiros e copies baseados no tom de voz do cliente",
        },
        {
          icon: DollarSign,
          title: "Gestão Financeira",
          description: "Controle automático de horas, faturamento e cobrança por cliente/projeto",
        },
      ],
      result: "Agência dobrou a base de clientes mantendo o mesmo time",
    },
    {
      icon: TrendingUp,
      label: "Vendas/Comercial",
      headline: "Venda mais, trabalhe menos",
      cases: [
        {
          icon: Target,
          title: "Qualificação de Leads",
          description: "Sistema que pontua e prioriza leads automaticamente baseado em comportamento",
        },
        {
          icon: Flame,
          title: "Nutrição Inteligente",
          description: "Sequências de email/WhatsApp personalizadas baseadas no estágio do funil",
        },
        {
          icon: Phone,
          title: "CRM que Trabalha por Você",
          description: "Tarefas automáticas, lembretes e próximos passos sugeridos pela IA",
        },
        {
          icon: Handshake,
          title: "Follow-up que não Falha",
          description: "Sistema que garante que nenhum lead esfrie por falta de contato",
        },
      ],
      result: "Time comercial aumentou conversão em 40% com o mesmo número de vendedores",
    },
  ]

  return (
    <section id="casos-de-uso" className="py-20 md:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Automações que transformam negócios
          </h2>
        </Reveal>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => {
            const Icon = tab.icon
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === index
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-background text-foreground/70 hover:text-foreground hover:bg-background/80 border border-primary/20"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-background border border-primary/20 rounded-2xl p-8 md:p-12 overflow-hidden">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="md:text-4xl font-bold mb-8 text-balance text-2xl">{tabs[activeTab].headline}</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {tabs[activeTab].cases.map((useCase, index) => {
                const CaseIcon = useCase.icon
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border transition-all ${
                      index % 2 === 0 ? "bg-card border-primary/20" : "bg-card-secondary border-primary/20"
                    }`}
                  >
                    <CaseIcon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="text-xl font-semibold mb-2">{useCase.title}</h4>
                    <p className="text-foreground/70 leading-relaxed">{useCase.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <p className="text-lg font-semibold text-primary mb-2">Resultado Real:</p>
              <p className="text-foreground/80 leading-relaxed">{tabs[activeTab].result}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
