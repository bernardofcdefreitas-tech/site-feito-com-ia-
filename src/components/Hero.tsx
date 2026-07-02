import React from "react";
import { ArrowRight, ShieldCheck, Award, Flame } from "lucide-react";

interface HeroProps {
  onExploreCatalog: () => void;
  onConsultancyClick: () => void;
}

export default function Hero({ onExploreCatalog, onConsultancyClick }: HeroProps) {
  return (
    <section className="relative w-full min-h-[90vh] flex items-end justify-center overflow-hidden pt-24" id="hero-section">
      {/* Background Image and Overlays */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center scale-105 animate-pulse-slow"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAH3CJ27QrMTWdudax8PHXK1hcnkI-O6RMFYCwSx5l-BEvmcN48y0YCIrFhCHw9egrnnZG14T5aS3d5grvp-cKT_dUr1LNGwTm1Qo3mSpSJzYPQtnnx4qdj5JSZJbU2vmpyYbELk4wWucHcxiSPIHD32K-r323wuM2CC86wJGc7UEWmUk4shnKAxNhIawfzRIshsLK8k3N5PYQS2RjxZsopE4SX1dqAEN0dNqMIcriaRe-7IBABgdardQ')"
          }}
          aria-label="Honda Africa Twin CRF 1100L Super Adventure"
        />
        <div className="absolute inset-0 bg-brand-dark/40" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-20 pb-16 text-center md:text-left flex flex-col justify-end min-h-[75vh]">
        <div className="max-w-4xl">
          {/* Subtle Accent Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-none mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-label text-[10px] tracking-[0.2em] text-secondary font-bold uppercase">
              SHOWROOM EXCLUSIVO • FALCÃO MOTORS
            </span>
          </div>

          <h1 className="font-headline text-headline-xl md:text-[76px] font-black leading-none tracking-tight mb-6">
            DOMINE A ESTRADA <br className="hidden md:inline" />
            COM <span className="text-secondary text-glow">PODER E LUXO</span>
          </h1>

          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
            Engenharia de alta performance e design sob medida para quem vê motocicletas como ativos de arte, símbolos de status e extensões de sua própria personalidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-16">
            <button 
              onClick={onExploreCatalog}
              className="bg-secondary text-on-secondary font-headline text-xs font-bold tracking-widest px-10 py-5 rounded-none hover:bg-white hover:text-brand-dark transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
            >
              EXPLORAR ACERVO
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={onConsultancyClick}
              className="border border-white/30 text-on-surface font-headline text-xs font-bold tracking-widest px-10 py-5 rounded-none hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              SOLICITAR CONSULTORIA
            </button>
          </div>
        </div>

        {/* Premium Core pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 text-left" id="hero-pillars">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 border border-white/10 rounded-none">
              <Award className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h4 className="font-headline text-sm font-bold text-on-surface uppercase">Curadoria Premium</h4>
              <p className="font-body text-xs text-on-surface-variant/70 mt-1">Apenas as máquinas mais exclusivas e raras do mercado global.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 border border-white/10 rounded-none">
              <ShieldCheck className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h4 className="font-headline text-sm font-bold text-on-surface uppercase">Garantia Ateliê</h4>
              <p className="font-body text-xs text-on-surface-variant/70 mt-1">Revisão minuciosa de mais de 120 pontos por especialistas.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 border border-white/10 rounded-none">
              <Flame className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h4 className="font-headline text-sm font-bold text-on-surface uppercase">Atendimento Sob Medida</h4>
              <p className="font-body text-xs text-on-surface-variant/70 mt-1">Consultoria personalizada individual e sigilo absoluto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
