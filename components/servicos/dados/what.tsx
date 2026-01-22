import { Card } from "@/components/ui/card"

export function DadosWhat() {
  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            O que é <span className="text-primary">Data & Dashboard Intelligence?</span>
          </h2>
        </div>

        <Card className="p-8 md:p-12 bg-card border-primary/20 mb-8">
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg">
              <strong className="text-foreground">Data Intelligence</strong> é a organização estratégica, integração e
              visualização de informações de negócio para permitir tomada de decisão rápida e precisa.
            </p>

            <p>
              <strong className="text-foreground">O problema:</strong> A maioria das empresas coleta dados em dezenas de
              ferramentas diferentes (CRM, ERP, analytics, software financeiro) mas não consegue ver o quadro completo.
              Cada sistema é uma ilha isolada.
            </p>

            <p>
              <strong className="text-foreground">O que fazemos:</strong> Mapeamos suas fontes de dados, criamos fluxos
              unificados, desenhamos dashboards customizados e configuramos relatórios automáticos para que você sempre
              saiba como seu negócio está performando.
            </p>

            <p>
              <strong className="text-foreground">Além de gráficos bonitos:</strong> Dashboard intelligence de verdade
              significa métricas acionáveis, alertas para anomalias, insights preditivos e dados que direcionam ações
              específicas.
            </p>

            <p>
              <strong className="text-foreground">A transformação:</strong> De "acho que estamos indo bem" para "sei
              exatamente quais métricas moveram esta semana e por quê".
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
