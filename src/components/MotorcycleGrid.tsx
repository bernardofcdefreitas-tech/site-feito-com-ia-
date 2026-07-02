import React, { useState } from "react";
import { Motorcycle } from "../types";
import { Heart, ArrowUpRight, Flame, Sparkles, AlertCircle } from "lucide-react";

interface MotorcycleGridProps {
  motorcycles: Motorcycle[];
  onSelectMotorcycle: (motorcycle: Motorcycle) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  title?: string;
  subtitle?: string;
}

export default function MotorcycleGrid({
  motorcycles,
  onSelectMotorcycle,
  favorites,
  onToggleFavorite,
  title = "DISPONÍVEIS AGORA",
  subtitle = "Máquinas exclusivas em nosso showroom de luxo.",
}: MotorcycleGridProps) {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(motorcycles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMotorcycles = motorcycles.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to results
    document.getElementById("motorcycles-grid-header")?.scrollIntoView({ behavior: "smooth" });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-20 px-6 md:px-20 max-w-[1440px] mx-auto" id="motorcycles-grid-section">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4" id="motorcycles-grid-header">
        <div>
          <h2 className="font-headline text-headline-lg text-glow mb-2 uppercase">{title}</h2>
          <p className="font-body text-body-md text-on-surface-variant">{subtitle}</p>
        </div>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-none">
          <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-ping"></span>
          <span className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase font-bold">
            Mostrando {Math.min(itemsPerPage, paginatedMotorcycles.length)} de {motorcycles.length} Máquinas
          </span>
        </div>
      </div>

      {motorcycles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center border border-white/5 bg-surface-container-lowest" id="empty-state">
          <AlertCircle className="w-12 h-12 text-secondary mb-4 animate-bounce" />
          <h3 className="font-headline text-lg font-bold text-on-surface uppercase mb-2">Nenhuma máquina corresponde aos filtros</h3>
          <p className="font-body text-sm text-on-surface-variant max-w-md">
            Experimente redefinir os parâmetros de ano, categoria ou redefinir a busca por texto para encontrar sua próxima conquista.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16" id="grid-layout">
            {paginatedMotorcycles.map((bike) => {
              const isFavorite = favorites.includes(bike.id);
              return (
                <article
                  key={bike.id}
                  className="group bg-surface-container-lowest border border-white/5 rounded-none overflow-hidden transition-all duration-500 card-glow flex flex-col justify-between h-full"
                >
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                    <img
                      src={bike.image}
                      alt={bike.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Badge */}
                    {bike.badge && (
                      <div className="absolute top-4 left-4 border border-secondary text-secondary px-3 py-1 font-label text-[9px] tracking-wider font-bold bg-background/80 backdrop-blur-md flex items-center gap-1.5 rounded-none uppercase">
                        {bike.badge.includes("LIMITED") ? (
                          <Flame className="w-3 h-3 text-secondary" />
                        ) : (
                          <Sparkles className="w-3 h-3 text-secondary" />
                        )}
                        {bike.badge}
                      </div>
                    )}

                    {/* Favorite Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        // Call state modifier via synthetic events or pass functions
                        const event = new CustomEvent("toggle-favorite", { detail: bike.id });
                        window.dispatchEvent(event);
                      }}
                      className="absolute top-4 right-4 w-10 h-12 flex items-center justify-center bg-background/80 backdrop-blur-md rounded border border-white/10 hover:border-secondary transition-all"
                      title={isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
                    >
                      <svg
                        className={`w-5 h-5 transition-all ${isFavorite ? "fill-secondary text-secondary scale-110" : "text-white hover:text-secondary"}`}
                        fill={isFavorite ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
                      </svg>
                    </button>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none"></div>
                  </div>

                  <div className="p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-headline-md text-headline-md group-hover:text-secondary transition-colors mb-1">
                        {bike.name}
                      </h3>
                      <div className="flex gap-4 text-on-surface-variant font-mono text-xs tracking-wider">
                        <span>{bike.year}</span>
                        <span>•</span>
                        <span>{bike.mileage}</span>
                      </div>
                      <p className="text-xs text-on-surface-variant/75 mt-3 line-clamp-2 h-10">
                        {bike.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/5">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-label-caps text-on-surface-variant tracking-wider">VALOR DE INVESTIMENTO</span>
                        <span className="text-secondary font-headline-md text-headline-md">{formatPrice(bike.price)}</span>
                      </div>
                      <button
                        onClick={() => {
                          const event = new CustomEvent('open-motorcycle-detail', { detail: bike });
                          window.dispatchEvent(event);
                        }}
                        className="border border-white/20 hover:border-secondary text-on-surface hover:text-secondary font-headline text-xs font-bold tracking-wider px-5 py-3 rounded-none transition-all cursor-pointer flex items-center gap-1 group/btn"
                      >
                        DETALHES
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-20" id="pagination-nav">
              <nav className="flex items-center gap-3">
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={`w-12 h-12 flex items-center justify-center border rounded-none transition-all ${
                    currentPage === 1
                      ? "border-white/5 text-white/20 cursor-not-allowed"
                      : "border-white/10 text-on-surface hover:border-secondary hover:text-secondary cursor-pointer"
                  }`}
                >
                  <span className="font-label">‹</span>
                </button>
                
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-12 h-12 flex items-center justify-center rounded-none font-headline font-bold text-sm transition-all ${
                      currentPage === i + 1
                        ? "bg-secondary text-on-secondary shadow-md scale-105"
                        : "border border-white/10 hover:border-secondary text-on-surface hover:text-secondary cursor-pointer"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={`w-12 h-12 flex items-center justify-center border rounded-none transition-all ${
                    currentPage === totalPages
                      ? "border-white/5 text-white/20 cursor-not-allowed"
                      : "border-white/10 text-on-surface hover:border-secondary hover:text-secondary cursor-pointer"
                  }`}
                >
                  <span className="font-label">›</span>
                </button>
              </nav>
            </div>
          )}
        </>
      )}
    </section>
  );
}
