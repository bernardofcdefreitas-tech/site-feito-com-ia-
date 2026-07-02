import React from "react";
import { SlidersHorizontal, Search, RotateCcw } from "lucide-react";

interface FiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  minYear: string;
  setMinYear: (year: string) => void;
  sortByPrice: string;
  setSortByPrice: (sort: string) => void;
  onResetFilters: () => void;
}

export default function Filters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  minYear,
  setMinYear,
  sortByPrice,
  setSortByPrice,
  onResetFilters,
}: FiltersProps) {
  return (
    <section className="py-12 bg-surface-container-lowest border-y border-white/5" id="filters-section">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          
          {/* Search Input */}
          <div className="col-span-1 md:col-span-4" id="search-container">
            <span className="block font-label text-[10px] font-bold tracking-widest text-secondary mb-2 uppercase">
              BUSCAR MODELO
            </span>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 focus:border-secondary focus:outline-none text-on-surface font-body py-2 pr-10 transition-all placeholder:text-on-surface-variant/30"
                placeholder="Ex: Africa Twin, BMW R 1250 GS, Ducati..."
              />
              <Search className="w-4 h-4 absolute right-2 top-3 text-on-surface-variant/60" />
            </div>
          </div>

          {/* Category Selector */}
          <div className="col-span-1 md:col-span-3" id="category-container">
            <span className="block font-label text-[10px] font-semibold tracking-widest text-on-surface-variant mb-2 uppercase">
              CATEGORIA
            </span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-brand-dark border-b border-white/20 focus:border-secondary focus:outline-none text-on-surface font-body py-2 cursor-pointer transition-colors"
            >
              <option value="all">Todas as Categorias</option>
              <option value="adventure">Big Trail / Adventure</option>
              <option value="sport">Super Sport</option>
              <option value="naked">Naked / Streetfighter</option>
            </select>
          </div>

          {/* Min Year Selector */}
          <div className="col-span-1 md:col-span-2" id="year-container">
            <span className="block font-label text-[10px] font-semibold tracking-widest text-on-surface-variant mb-2 uppercase">
              ANO MÍNIMO
            </span>
            <select
              value={minYear}
              onChange={(e) => setMinYear(e.target.value)}
              className="w-full bg-brand-dark border-b border-white/20 focus:border-secondary focus:outline-none text-on-surface font-body py-2 cursor-pointer transition-colors"
            >
              <option value="all">Todos os Anos</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>

          {/* Sort By Price Selector */}
          <div className="col-span-1 md:col-span-2" id="sort-container">
            <span className="block font-label text-[10px] font-semibold tracking-widest text-on-surface-variant mb-2 uppercase">
              ORDENAR POR
            </span>
            <select
              value={sortByPrice}
              onChange={(e) => setSortByPrice(e.target.value)}
              className="w-full bg-brand-dark border-b border-white/20 focus:border-secondary focus:outline-none text-on-surface font-body py-2 cursor-pointer transition-colors"
            >
              <option value="default">Relevância</option>
              <option value="asc">Menor Preço</option>
              <option value="desc">Maior Preço</option>
            </select>
          </div>

          {/* Reset Filters Action Button */}
          <div className="col-span-1 md:col-span-1 flex justify-end" id="actions-container">
            <button
              onClick={onResetFilters}
              className="w-full h-11 bg-surface-container-highest hover:bg-secondary hover:text-on-secondary text-secondary border border-secondary/20 font-headline text-xs font-bold tracking-wider rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer"
              title="Limpar filtros"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="md:hidden">LIMPAR</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
