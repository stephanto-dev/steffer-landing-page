"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    // If we're on the homepage, just scroll
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      router.push(`/#${id}`);
      setMobileMenuOpen(false);
    }
  };

  const services = [
    {
      name: "Consultoria e Automação",
      href: "/servicos/consultoria-automacao",
    },
    { name: "Agentes de IA", href: "/servicos/agentes-ia" },
    { name: "GEO", href: "/servicos/geo" },
    { name: "Dados e Dashboards", href: "/servicos/dados-dashboards" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-1 sm:gap-2 flex-shrink-0"
          >
            <Image
              src="/icone-steffer.png"
              alt="Logo Steffer - Consultoria de IA e Automação"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8"
            />
            <span className="text-lg sm:text-2xl font-bold text-primary truncate">
              STEFFER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className="text-sm text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-sm text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
            >
              Blog
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm text-foreground/80 hover:text-primary transition-colors py-2 whitespace-nowrap">
                Serviços
                <ChevronDown
                  size={16}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Invisible bridge to prevent dropdown from closing */}
              <div className="absolute top-full left-0 w-full h-2" />

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl overflow-hidden">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-sm text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold text-sm px-4 py-2 whitespace-nowrap"
            >
              Falar com especialista
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Blog
            </Link>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between text-foreground/80 hover:text-primary transition-colors text-sm font-medium text-left"
              >
                Serviços
                <ChevronDown
                  size={16}
                  className={`transition-transform flex-shrink-0 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="pl-3 flex flex-col gap-2 border-l-2 border-primary/30">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs sm:text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium text-left"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold text-sm w-full mt-2"
            >
              Falar com especialista
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
