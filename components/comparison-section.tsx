"use client"

import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const comparisons = [
  {
    criteria: "Tempo de implementação",
    steffer: "4-8 semanas",
    dev: "3-6 meses",
    diy: "Nunca termina",
    agency: "3-4 meses",
  },
  {
    criteria: "Custo inicial",
    steffer: "Menos de R$ 10k",
    dev: "R$ 60k+",
    diy: '"Grátis" (tempo)',
    agency: "R$ 40k+",
  },
  {
    criteria: "Entende seu negócio",
    steffer: true,
    dev: false,
    diy: true,
    agency: false,
  },
  {
    criteria: "Suporte contínuo",
    steffer: true,
    dev: false,
    diy: false,
    agency: "Extra",
  },
  {
    criteria: "Garantia de resultado",
    steffer: true,
    dev: false,
    diy: false,
    agency: false,
  },
]

export function ComparisonSection() {
  return (
    <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Steffer vs. <span className="text-primary">Outras Soluções</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto text-pretty px-2">
            Compare e entenda por que somos a escolha certa para sua empresa
          </p>
        </div>

        <Card className="overflow-hidden bg-background/50 border-primary/20">
          <div className="overflow-x-auto">
            <table className="w-full min-w-max sm:min-w-0">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left p-2 sm:p-4 font-semibold text-xs sm:text-sm text-foreground/80 min-w-[150px] sm:min-w-[200px]"></th>
                  <th className="text-center p-2 sm:p-4 font-bold text-xs sm:text-sm text-primary bg-primary/10 min-w-[120px] sm:min-w-[140px]">
                    Steffer
                  </th>
                  <th className="text-center p-2 sm:p-4 font-semibold text-xs sm:text-sm text-foreground/60 min-w-[120px] sm:min-w-[140px]">
                    Contratar Dev
                  </th>
                  <th className="text-center p-2 sm:p-4 font-semibold text-xs sm:text-sm text-foreground/60 min-w-[120px] sm:min-w-[140px]">
                    Fazer Sozinho
                  </th>
                  <th className="text-center p-2 sm:p-4 font-semibold text-xs sm:text-sm text-foreground/60 min-w-[120px] sm:min-w-[140px]">
                    Agência
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={index} className="border-b border-primary/10 last:border-0">
                    <td className="p-2 sm:p-4 font-medium text-xs sm:text-sm text-foreground/80">{row.criteria}</td>
                    <td className="text-center p-2 sm:p-4 bg-primary/5">
                      {typeof row.steffer === "boolean" ? (
                        row.steffer ? (
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/30 mx-auto" />
                        )
                      ) : (
                        <span className="text-primary font-semibold text-xs sm:text-sm">{row.steffer}</span>
                      )}
                    </td>
                    <td className="text-center p-2 sm:p-4">
                      {typeof row.dev === "boolean" ? (
                        row.dev ? (
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/30 mx-auto" />
                        )
                      ) : (
                        <span className="text-foreground/60 text-xs sm:text-sm">{row.dev}</span>
                      )}
                    </td>
                    <td className="text-center p-2 sm:p-4">
                      {typeof row.diy === "boolean" ? (
                        row.diy ? (
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/30 mx-auto" />
                        )
                      ) : (
                        <span className="text-foreground/60 text-xs sm:text-sm">{row.diy}</span>
                      )}
                    </td>
                    <td className="text-center p-2 sm:p-4">
                      {typeof row.agency === "boolean" ? (
                        row.agency ? (
                          <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mx-auto" />
                        ) : (
                          <X className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/30 mx-auto" />
                        )
                      ) : (
                        <span className="text-foreground/60 text-xs sm:text-sm">{row.agency}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-6 sm:mt-8 px-2">
          <p className="text-sm sm:text-base text-foreground/70">
            Quer entender melhor como podemos ajudar sua empresa?{" "}
            <a href="#contato" className="text-primary hover:underline font-semibold">
              Fale com um especialista
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
