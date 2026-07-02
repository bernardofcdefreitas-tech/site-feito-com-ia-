import React, { useState, useEffect } from "react";
import { Motorcycle, BookingRequest } from "../types";
import { X, Calendar, User, Mail, Phone, FileText, CheckCircle, Shield, Award, Heart, MessageSquare } from "lucide-react";

interface MotorcycleDetailModalProps {
  bike: Motorcycle;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function MotorcycleDetailModal({
  bike,
  onClose,
  isFavorite,
  onToggleFavorite,
}: MotorcycleDetailModalProps) {
  const [formData, setFormData] = useState<BookingRequest>({
    motorcycleId: bike.id,
    motorcycleName: bike.name,
    name: "",
    email: "",
    phone: "",
    date: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury booking request processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-surface-container-low border border-white/10 rounded-none shadow-2xl overflow-hidden my-8" id="motorcycle-detail-modal">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-55 w-10 h-10 flex items-center justify-center bg-black/50 text-white hover:text-secondary border border-white/10 rounded-full transition-all duration-300"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center p-12 text-center py-24 bg-surface-container-lowest" id="success-screen">
            <div className="w-20 h-20 bg-secondary/10 border border-secondary text-secondary rounded-full flex items-center justify-center mb-6 animate-pulse">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="font-headline text-2xl font-black text-secondary tracking-wide uppercase mb-3 text-glow">
              CONSULTORIA SOLICITADA COM SUCESSO!
            </h2>
            <p className="font-body text-base text-on-surface max-w-xl mb-6">
              Obrigado, <strong className="text-secondary">{formData.name}</strong>. Nossa curadoria de elite foi notificada. Um consultor especialista em alta performance entrará em contato nas próximas 2 horas.
            </p>
            <div className="bg-surface-container-low border border-white/5 p-6 rounded-none max-w-lg w-full text-left font-mono text-xs text-on-surface-variant/90 leading-relaxed mb-8">
              <p className="font-bold text-secondary uppercase mb-2">Protocolo da Reserva • Falcão Motors</p>
              <p><strong>Máquina:</strong> {bike.name}</p>
              <p><strong>Valor Ref:</strong> {formatCurrency(bike.price)}</p>
              <p><strong>Data de Atendimento:</strong> {formData.date ? new Date(formData.date).toLocaleDateString("pt-BR") : "Imediata"}</p>
              <p><strong>E-mail cadastrado:</strong> {formData.email}</p>
              <p className="mt-2 text-secondary/60">Obs: Um e-mail com a confirmação e o portfólio completo foi enviado para {formData.email}.</p>
            </div>
            <button
              onClick={onClose}
              className="bg-secondary text-on-secondary font-headline text-xs font-bold tracking-widest px-8 py-4 rounded-none hover:bg-white hover:text-brand-dark transition-all duration-300 cursor-pointer"
            >
              FECHAR E CONTINUAR
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto lg:overflow-visible">
            
            {/* Left Column: Image, Badges and Quick Stats */}
            <div className="lg:col-span-6 relative flex flex-col justify-between bg-black/60 min-h-[350px] lg:min-h-0">
              <img
                src={bike.image}
                alt={bike.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-transparent to-brand-dark/30 pointer-events-none" />

              {/* Top Badges */}
              <div className="relative z-10 p-6 flex justify-between items-start">
                <span className="bg-secondary text-on-secondary px-3 py-1 font-label text-[9px] tracking-widest font-bold uppercase rounded-none">
                  {bike.category === "adventure" ? "Big Trail" : bike.category === "sport" ? "Super Sport" : "Naked Sport"}
                </span>
                
                <button
                  onClick={() => onToggleFavorite(bike.id)}
                  className="w-10 h-10 bg-brand-dark/80 text-white hover:text-secondary rounded border border-white/10 flex items-center justify-center transition-all"
                  title={isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? "fill-secondary text-secondary" : ""}`} />
                </button>
              </div>

              {/* Bottom Quick Specs overlay */}
              <div className="relative z-10 p-6 pt-24 mt-auto">
                <span className="text-[10px] font-label text-secondary tracking-[0.2em] font-semibold uppercase">ANO {bike.year} • {bike.mileage}</span>
                <h2 className="font-headline text-3xl font-black text-on-surface uppercase mt-1 mb-2 tracking-tight">
                  {bike.name}
                </h2>
                <div className="text-secondary font-headline text-2xl font-black text-glow">
                  {formatCurrency(bike.price)}
                </div>
                <div className="flex gap-4 mt-4 font-mono text-[10px] text-on-surface-variant/90">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-secondary" />
                    <span>Garantia de 1 Ano</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-secondary" />
                    <span>Laudo de Ateliê</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Specs and Booking Form */}
            <div className="lg:col-span-6 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[90vh]">
              <div>
                {/* Description Tabs style */}
                <div className="mb-6">
                  <span className="block font-label text-[10px] font-bold tracking-widest text-secondary uppercase mb-2">APRESENTAÇÃO</span>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    {bike.longDescription}
                  </p>
                  <p className="text-xs text-secondary mt-2"><strong>Cor Exclusiva:</strong> {bike.color}</p>
                </div>

                {/* Technical Specifications Grid */}
                <div className="mb-8" id="specifications-technical">
                  <span className="block font-label text-[10px] font-bold tracking-widest text-secondary uppercase mb-3">ESPECIFICAÇÕES TÉCNICAS</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {bike.specs.map((spec, i) => (
                      <div key={i} className="flex flex-col bg-white/5 border border-white/5 p-3">
                        <span className="text-[9px] font-label text-on-surface-variant/60 uppercase tracking-wider">{spec.label}</span>
                        <span className="text-xs font-mono font-bold text-on-surface mt-1">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking/Consultancy Form */}
              <div className="bg-surface-container-lowest border border-white/5 p-6 rounded-none">
                <span className="block font-label text-[10px] font-bold tracking-widest text-secondary uppercase mb-2">AGENDE UMA CONSULTORIA PRIVADA</span>
                <p className="text-xs text-on-surface-variant mb-4">Insira os seus dados para agendar test-ride, tirar dúvidas técnicas ou solicitar financiamento exclusivo.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Nome Completo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-brand-dark/40 border border-white/10 rounded-none py-2.5 px-3 text-xs text-on-surface focus:border-secondary focus:outline-none"
                      />
                      <User className="w-3.5 h-3.5 absolute right-3 top-3.5 text-on-surface-variant/40" />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="E-mail Corporativo"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-brand-dark/40 border border-white/10 rounded-none py-2.5 px-3 text-xs text-on-surface focus:border-secondary focus:outline-none"
                      />
                      <Mail className="w-3.5 h-3.5 absolute right-3 top-3.5 text-on-surface-variant/40" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="WhatsApp / Telefone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-brand-dark/40 border border-white/10 rounded-none py-2.5 px-3 text-xs text-on-surface focus:border-secondary focus:outline-none"
                      />
                      <Phone className="w-3.5 h-3.5 absolute right-3 top-3.5 text-on-surface-variant/40" />
                    </div>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-brand-dark/40 border border-white/10 rounded-none py-2.5 px-3 text-xs text-on-surface focus:border-secondary focus:outline-none text-on-surface-variant/80"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      placeholder="Deseja acrescentar alguma dúvida ou preferência técnica? (Opcional)"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-brand-dark/40 border border-white/10 rounded-none py-2.5 px-3 text-xs text-on-surface focus:border-secondary focus:outline-none min-h-[60px]"
                    />
                    <FileText className="w-3.5 h-3.5 absolute right-3 top-3.5 text-on-surface-variant/40" />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-on-secondary font-headline text-xs font-bold tracking-widest py-3 rounded-none hover:bg-white hover:text-brand-dark transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-on-secondary border-t-transparent rounded-full animate-spin"></span>
                        ENVIANDO REQUISIÇÃO...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4" />
                        RESERVAR CONSULTORIA DE ELITE
                      </>
                    )}
                  </button>
                </form>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
