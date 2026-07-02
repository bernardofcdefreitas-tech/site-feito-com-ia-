import React, { useState } from "react";
import { ShieldCheck, Award, Users, MapPin, Mail, Phone, Calendar, CheckCircle2 } from "lucide-react";

interface AboutContactProps {
  view: "about" | "contact";
  onSendContactMessage: (name: string) => void;
}

export default function AboutContact({ view, onSendContactMessage }: AboutContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Geral",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      onSendContactMessage(formData.name);
    }, 1200);
  };

  if (view === "about") {
    return (
      <section className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto text-left" id="about-us-view">
        {/* About Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-label text-[10px] tracking-[0.2em] text-secondary font-bold uppercase block mb-3">CONHEÇA A NOSSA HISTÓRIA</span>
          <h2 className="font-headline text-headline-lg text-glow mb-6 uppercase">A ASSINATURA DA ALTA PERFORMANCE</h2>
          <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
            Fundada em 2018 por entusiastas do automobilismo de competição e engenharia aeroespacial, a <strong className="text-secondary">Falcão Motors</strong> nasceu para suprir a carência de um atendimento genuinamente de elite para motociclistas de alta performance.
          </p>
        </div>

        {/* Brand Core pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-surface-container-low border border-white/5 p-8 relative overflow-hidden group hover:border-secondary transition-all duration-300">
            <div className="w-12 h-12 bg-secondary/10 border border-secondary text-secondary flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-lg font-bold text-on-surface uppercase mb-3">Curadoria de Arte</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Não vendemos apenas veículos; comercializamos obras de arte mecânicas. Cada modelo é selecionado sob rígidos critérios de originalidade, conservação e raridade.
            </p>
          </div>

          <div className="bg-surface-container-low border border-white/5 p-8 relative overflow-hidden group hover:border-secondary transition-all duration-300">
            <div className="w-12 h-12 bg-secondary/10 border border-secondary text-secondary flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-lg font-bold text-on-surface uppercase mb-3">Ateliê Técnico</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Nossos mecânicos possuem treinamento especializado de fábrica. Nossas motos passam por uma varredura preventiva completa de 120 itens antes de chegarem ao showroom.
            </p>
          </div>

          <div className="bg-surface-container-low border border-white/5 p-8 relative overflow-hidden group hover:border-secondary transition-all duration-300">
            <div className="w-12 h-12 bg-secondary/10 border border-secondary text-secondary flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-lg font-bold text-on-surface uppercase mb-3">Comunidade de Elite</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Fazemos parte de um ecossistema seletivo de entusiastas, promovendo encontros fechados, viagens planejadas com apoio integral de mecânicos e eventos de networking.
            </p>
          </div>
        </div>

        {/* Large Elegant Display */}
        <div className="relative w-full aspect-[21/9] overflow-hidden bg-brand-dark flex items-center justify-center mb-24 border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=1500&auto=format&fit=crop" 
            alt="Atelier Falcão Motors"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-dark/50 to-brand-darker pointer-events-none" />
          <div className="relative z-10 text-center px-4 max-w-2xl">
            <span className="font-label text-[10px] tracking-[0.25em] text-secondary font-bold uppercase mb-2 block">ATELIÊ E REVISÃO PREVENTIVA</span>
            <h3 className="font-headline text-xl md:text-3xl font-black text-on-surface uppercase mb-4 tracking-tight">ENGENHARIA REFINADA POR ESPECIALISTAS</h3>
            <p className="font-body text-xs md:text-sm text-on-surface-variant">Cada detalhe é medido, calibrado e assinado para oferecer a máxima segurança e potência que sua estrada exige.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 md:px-20 max-w-[1440px] mx-auto text-left" id="contact-view">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Contact details */}
        <div className="lg:col-span-5">
          <span className="font-label text-[10px] tracking-[0.2em] text-secondary font-bold uppercase block mb-3">FALE CONOSCO</span>
          <h2 className="font-headline text-headline-lg text-glow mb-6 uppercase">CONTATO E VISITA PRIVADA</h2>
          <p className="font-body text-body-lg text-on-surface-variant leading-relaxed mb-10">
            Nossos showrooms operam sob regime de atendimento exclusivo pré-agendado. Agende sua consultoria ou envie uma mensagem diretamente para nossa recepção de elite.
          </p>

          <div className="space-y-6" id="contact-info-list">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 border border-white/10 text-secondary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-label text-[9px] text-on-surface-variant/60 tracking-wider uppercase font-semibold">NOSSO ATELIÊ CENTRAL</span>
                <p className="font-body text-sm text-on-surface font-semibold mt-1">Av. das Nações, 2024 - Jardim Europa</p>
                <p className="font-body text-xs text-on-surface-variant">São Paulo - SP, CEP 01449-000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 border border-white/10 text-secondary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-label text-[9px] text-on-surface-variant/60 tracking-wider uppercase font-semibold">RECEPÇÃO CORPORATIVA</span>
                <p className="font-body text-sm text-on-surface font-semibold mt-1">atendimento@falcaomotors.com.br</p>
                <p className="font-body text-xs text-on-surface-variant">curadoria@falcaomotors.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 border border-white/10 text-secondary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-label text-[9px] text-on-surface-variant/60 tracking-wider uppercase font-semibold">ATENDIMENTO DE ELITE</span>
                <p className="font-body text-sm text-on-surface font-semibold mt-1">+55 (11) 4004-9595</p>
                <p className="font-body text-xs text-on-surface-variant">Segunda a Sábado, das 09h às 19h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact form */}
        <div className="lg:col-span-7 bg-surface-container-low border border-white/10 p-8 rounded-none">
          {showSuccess ? (
            <div className="flex flex-col items-center justify-center py-16 text-center" id="contact-success">
              <div className="w-16 h-16 bg-secondary/10 border border-secondary text-secondary flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-xl font-bold text-secondary uppercase tracking-wider mb-2">Mensagem Recebida</h3>
              <p className="font-body text-sm text-on-surface-variant max-w-md">
                Obrigado, <strong className="text-on-surface">{formData.name}</strong>. Sua mensagem foi direcionada para a diretoria. Responderemos no seu e-mail corporativo em breve.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="mt-8 border border-white/20 text-on-surface font-headline text-xs font-bold tracking-widest px-6 py-3 hover:border-secondary hover:text-secondary transition-all"
              >
                ENVIAR NOVA MENSAGEM
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
              <span className="block font-label text-[10px] font-bold tracking-widest text-secondary uppercase">FORMULÁRIO DE ATENDIMENTO</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-on-surface-variant mb-2">Seu Nome</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 focus:border-secondary focus:outline-none text-xs text-on-surface py-3 px-4 transition-all"
                    placeholder="Nome Completo"
                  />
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant mb-2">Seu E-mail</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 focus:border-secondary focus:outline-none text-xs text-on-surface py-3 px-4 transition-all"
                    placeholder="email@dominio.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-on-surface-variant mb-2">Telefone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 focus:border-secondary focus:outline-none text-xs text-on-surface py-3 px-4 transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant mb-2">Assunto</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 focus:border-secondary focus:outline-none text-xs text-on-surface py-3 px-4 cursor-pointer"
                  >
                    <option value="Geral">Dúvida Geral</option>
                    <option value="Reserva">Reserva de Showroom</option>
                    <option value="Financiamento">Plano de Financiamento</option>
                    <option value="Avaliacao">Avaliação de Seminova</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-on-surface-variant mb-2">Sua Mensagem</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-brand-dark border border-white/10 focus:border-secondary focus:outline-none text-xs text-on-surface py-3 px-4 min-h-[100px] transition-all"
                  placeholder="Descreva o seu projeto de estrada ou envie suas dúvidas técnicas."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-on-secondary font-headline text-xs font-bold tracking-widest py-4 rounded-none hover:bg-white hover:text-brand-dark transition-all duration-300 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-on-secondary border-t-transparent rounded-full animate-spin"></span>
                    PROCESSANDO ENVIADO...
                  </>
                ) : "ENVIAR SOLICITAÇÃO DE CONTATO"}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
