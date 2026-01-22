"use client"

import { useState } from "react"
import { ShoppingCart, Briefcase, Megaphone, TrendingUp } from "lucide-react"

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      icon: ShoppingCart,
      label: "E-commerce",
      headline: "Do pedido à entrega: operação automatizada",
      cases: [
        {
          emoji: "🤖",
          title: "Atendimento Inteligente",
          description: "Chatbot que resolve 80% das dúvidas sobre pedidos, rastreamento e trocas automaticamente",
        },
        {
          emoji: "📦",
          title: "Gestão de Pedidos",
          description: "Integração automática entre loja, estoque, transportadora e contabilidade",
        },
        {
          emoji: "💌",
          title: "Follow-up Pós-venda",
          description:
            "Sequências personalizadas de email/WhatsApp pedindo avaliação, sugerindo produtos complementares",
        },
        {
          emoji: "📊",
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
          emoji: "📅",
          title: "Agendamento Inteligente",
          description: "Sistema que consulta disponibilidade, agenda e envia lembretes automáticos",
        },
        {
          emoji: "📄",
          title: "Propostas Personalizadas",
          description: "IA que gera propostas comerciais baseadas no perfil do lead e histórico",
        },
        {
          emoji: "🔄",
          title: "Pipeline Automatizado",
          description: "Movimentação automática de leads no CRM baseada em ações e tempo",
        },
        {
          emoji: "📈",
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
          emoji: "📊",
          title: "Relatórios para Clientes",
          description: "Geração automática de reports mensais com métricas de todas as plataformas",
        },
        {
          emoji: "🎯",
          title: "Onboarding Automatizado",
          description: "Sequência de boas-vindas, coleta de informações e setup inicial sem intervenção manual",
        },
        {
          emoji: "✍️",
          title: "Assistente de Conteúdo",
          description: "IA que ajuda na criação de posts, roteiros e copies baseados no tom de voz do cliente",
        },
        {
          emoji: "💰",
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
          emoji: "🎯",
          title: "Qualificação de Leads",
          description: "Sistema que pontua e prioriza leads automaticamente baseado em comportamento",
        },
        {
          emoji: "🔥",
          title: "Nutrição Inteligente",
          description: "Sequências de email/WhatsApp personalizadas baseadas no estágio do funil",
        },
        {
          emoji: "📞",
          title: "CRM que Trabalha por Você",
          description: "Tarefas automáticas, lembretes e próximos passos sugeridos pela IA",
        },
        {
          emoji: "🤝",
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Automações que transformam negócios
        </h2>

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
        <div className="bg-background border border-primary/20 rounded-2xl p-8 md:p-12">
          <h3 className="md:text-4xl font-bold mb-8 text-balance text-2xl">{tabs[activeTab].headline}</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {tabs[activeTab].cases.map((useCase, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all ${
                  index % 2 === 0 ? "bg-card border-primary/20" : "bg-card-secondary border-primary/20"
                }`}
              >
                <div className="text-3xl mb-3">{useCase.emoji}</div>
                <h4 className="text-xl font-semibold mb-2">{useCase.title}</h4>
                <p className="text-foreground/70 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
            <p className="text-lg font-semibold text-primary mb-2">Resultado Real:</p>
            <p className="text-foreground/80 leading-relaxed">{tabs[activeTab].result}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
