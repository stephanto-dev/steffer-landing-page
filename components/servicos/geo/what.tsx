import { Card } from "@/components/ui/card"

export function GeoWhat() {
  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            O que é <span className="text-primary">GEO?</span>
          </h2>
        </div>

        <Card className="p-8 md:p-12 bg-card border-primary/20 mb-8">
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg">
              <strong className="text-foreground">GEO (Generative Engine Optimization)</strong> é a otimização de
              conteúdo para ser encontrado, citado e recomendado por Large Language Models (LLMs) como ChatGPT, Claude,
              Gemini, Perplexity e outros assistentes de IA.
            </p>

            <p>
              <strong className="text-foreground">Por que é diferente de SEO?</strong> Motores de busca tradicionais
              ranqueiam páginas baseado em links, keywords e autoridade de domínio. LLMs sintetizam informações de
              múltiplas fontes e geram respostas originais. Eles não mostram 10 links azuis - eles respondem direto.
            </p>

            <p>
              <strong className="text-foreground">O problema:</strong> Se seu conteúdo não está estruturado de forma que
              LLMs consigam entender, extrair e citar, você simplesmente não existe para essa audiência. E essa
              audiência está crescendo exponencialmente.
            </p>

            <p>
              <strong className="text-foreground">A oportunidade:</strong> 65% das empresas ainda não fazem GEO. Quem
              começar agora tem vantagem competitiva gigante. Assim como SEO nos anos 2000, GEO é a fronteira nova onde
              early adopters dominam.
            </p>

            <p>
              <strong className="text-foreground">O que fazemos:</strong> Otimizamos seu conteúdo, estrutura de dados,
              autoridade e presença digital para que LLMs te encontrem, entendam e citem como fonte confiável. Não é
              mágica - é engenharia de conteúdo baseada em como LLMs funcionam.
            </p>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-primary/20 text-center">
            <div className="text-3xl font-bold text-primary mb-2">SEO</div>
            <p className="text-sm text-foreground/70">Otimização para motores de busca (Google, Bing)</p>
          </Card>
          <Card className="p-6 bg-card border-primary/20 text-center">
            <div className="text-3xl font-bold text-primary mb-2">+</div>
            <p className="text-sm text-foreground/70">Complementa, não substitui</p>
          </Card>
          <Card className="p-6 bg-card border-primary/20 text-center">
            <div className="text-3xl font-bold text-primary mb-2">GEO</div>
            <p className="text-sm text-foreground/70">Otimização para LLMs (ChatGPT, Claude, Perplexity)</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
