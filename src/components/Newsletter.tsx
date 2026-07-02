import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-24 bg-surface-container-low border-t border-white/5" id="newsletter-section">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {showSuccess ? (
          <div className="flex flex-col items-center justify-center p-8 bg-surface-container-lowest border border-white/5 animate-fadeIn" id="news-success">
            <CheckCircle2 className="w-12 h-12 text-secondary mb-4 animate-bounce" />
            <h3 className="font-headline text-lg font-bold text-on-surface uppercase mb-2">BEM-VINDO À ELITE</h3>
            <p className="font-body text-sm text-on-surface-variant max-w-md">
              Obrigado por se cadastrar. Você receberá atualizações exclusivas, edições numeradas e convites em primeira mão para os eventos da Falcão Motors.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-6 text-xs text-secondary hover:text-white uppercase font-label tracking-widest underline transition-all"
            >
              CADASTRAR OUTRO E-MAIL
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-headline text-headline-lg text-glow mb-4 uppercase">ENTRE PARA A ELITE</h2>
            <p className="font-body text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
              Receba antecipadamente em seu e-mail novos modelos, edições ultra limitadas e convites para eventos exclusivos de pista da Falcão Motors.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" id="newsletter-form">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-b border-white/20 focus:border-secondary focus:outline-none text-on-surface py-3 px-2 transition-all placeholder:text-on-surface-variant/30 text-sm"
                placeholder="Seu e-mail corporativo"
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="bg-secondary text-on-secondary font-headline text-xs font-bold tracking-widest px-12 py-4 rounded-none hover:bg-white hover:text-brand-dark transition-all duration-300 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubscribed ? (
                  <span className="w-4 h-4 border-2 border-on-secondary border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    INSCREVER-SE
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
