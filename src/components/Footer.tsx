import React from "react";
import { Share2, Mail, Phone, ExternalLink } from "lucide-react";

interface FooterProps {
  onNavClick: (tab: "home" | "catalog" | "about" | "contact" | "favorites") => void;
  onFilterCategory: (category: string) => void;
}

export default function Footer({ onNavClick, onFilterCategory }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleCategoryClick = (category: string) => {
    onFilterCategory(category);
    onNavClick("catalog");
  };

  return (
    <footer className="w-full bg-brand-darker border-t border-white/10" id="main-footer">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-20 flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Column: Brand Statement */}
        <div className="mb-8 md:mb-0 max-w-sm">
          <div 
            onClick={() => onNavClick("home")}
            className="font-headline text-2xl font-black text-on-surface uppercase tracking-widest mb-6 cursor-pointer hover:text-secondary transition-all"
          >
            FALCÃO MOTORS
          </div>
          <p className="text-on-surface-variant/80 font-body text-sm leading-relaxed mb-6">
            Sua porta de entrada para o mundo da alta performance em duas rodas. Atendimento personalizado, atelier técnico rigoroso e curadoria de excelência de marcas globais.
          </p>
          <div className="flex gap-4">
            <a 
              href="mailto:contato@falcaomotors.com.br" 
              className="w-10 h-10 bg-white/5 border border-white/10 hover:border-secondary hover:text-secondary rounded-full flex items-center justify-center transition-all text-on-surface-variant"
              title="E-mail"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a 
              href="tel:+551140049595" 
              className="w-10 h-10 bg-white/5 border border-white/10 hover:border-secondary hover:text-secondary rounded-full flex items-center justify-center transition-all text-on-surface-variant"
              title="Telefone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "Falcão Motors Showroom",
                    text: "Confira as melhores motos de alta performance e aventura na Falcão Motors!",
                    url: window.location.href,
                  }).catch(console.error);
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copiado para a área de transferência!");
                }
              }}
              className="w-10 h-10 bg-white/5 border border-white/10 hover:border-secondary hover:text-secondary rounded-full flex items-center justify-center transition-all text-on-surface-variant cursor-pointer"
              title="Compartilhar"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Columns: Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24 w-full md:w-auto" id="footer-links-grid">
          
          {/* Categories */}
          <div className="flex flex-col gap-4">
            <span className="font-label text-[10px] font-bold text-secondary uppercase tracking-widest">
              CATÁLOGO
            </span>
            <button
              onClick={() => handleCategoryClick("adventure")}
              className="font-body text-sm text-on-surface-variant hover:text-white transition-colors text-left"
            >
              Big Trails
            </button>
            <button
              onClick={() => handleCategoryClick("naked")}
              className="font-body text-sm text-on-surface-variant hover:text-white transition-colors text-left"
            >
              Naked Bikes
            </button>
            <button
              onClick={() => handleCategoryClick("sport")}
              className="font-body text-sm text-on-surface-variant hover:text-white transition-colors text-left"
            >
              Super Sports
            </button>
            <button
              onClick={() => {
                onFilterCategory("all");
                onNavClick("catalog");
              }}
              className="font-body text-sm text-on-surface-variant hover:text-white transition-colors text-left"
            >
              Todos os Modelos
            </button>
          </div>

          {/* Company links */}
          <div className="flex flex-col gap-4">
            <span className="font-label text-[10px] font-bold text-secondary uppercase tracking-widest">
              EMPRESA
            </span>
            <button
              onClick={() => onNavClick("about")}
              className="font-body text-sm text-on-surface-variant hover:text-white transition-colors text-left"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => onNavClick("contact")}
              className="font-body text-sm text-on-surface-variant hover:text-white transition-colors text-left"
            >
              Contato
            </button>
            <button
              onClick={() => alert("As carreiras para o nosso Ateliê Técnico e Showroom abrirão em breve. Envie o seu currículo para talentos@falcaomotors.com.br")}
              className="font-body text-sm text-on-surface-variant hover:text-white transition-colors text-left flex items-center gap-1.5"
            >
              Carreiras
              <ExternalLink className="w-3 h-3 text-secondary" />
            </button>
          </div>

          {/* Legal / Policies */}
          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <span className="font-label text-[10px] font-bold text-secondary uppercase tracking-widest">
              LEGAL
            </span>
            <button
              onClick={() => alert("Política de privacidade da Falcão Motors: Seu sigilo de dados e informações de consultoria são 100% protegidos em servidores criptografados.")}
              className="font-body text-sm text-on-surface-variant hover:text-white transition-colors text-left"
            >
              Privacidade
            </button>
            <button
              onClick={() => alert("Termos de uso da Falcão Motors: O showroom opera exclusivamente sob pré-agendamento e as transações ocorrem sob as leis do território nacional.")}
              className="font-body text-sm text-on-surface-variant hover:text-white transition-colors text-left"
            >
              Termos de Uso
            </button>
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="w-full py-8 text-center border-t border-white/5 bg-brand-darker">
        <p className="font-label text-[9px] text-on-surface-variant/40 tracking-[0.25em] uppercase">
          © {currentYear} FALCÃO MOTORS. HIGH-PERFORMANCE ENGINEERING.
        </p>
      </div>
    </footer>
  );
}
