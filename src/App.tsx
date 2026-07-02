import React, { useState, useEffect, useRef } from "react";
import { Motorcycle } from "./types";
import { motorcyclesData } from "./data/motorcycles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import MotorcycleGrid from "./components/MotorcycleGrid";
import MotorcycleDetailModal from "./components/MotorcycleDetailModal";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import AboutContact from "./components/AboutContact";
import { Sparkles, Heart, Bell, X, ArrowUpRight } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"home" | "catalog" | "about" | "contact" | "favorites">("home");
  
  // Advanced Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minYear, setMinYear] = useState("all");
  const [sortByPrice, setSortByPrice] = useState("default");

  // Selected Detail Modal
  const [selectedBike, setSelectedBike] = useState<Motorcycle | null>(null);

  // Favorites state (persisted in localStorage)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("falcao_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Custom Toast notification state
  const [toasts, setToasts] = useState<{ id: string; message: string; type: "success" | "info" | "heart" }[]>([]);

  // Refs for focusing and scrolling
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // Sync favorites to localStorage
  useEffect(() => {
    localStorage.setItem("falcao_favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Listener for Custom Events from listing grid
  useEffect(() => {
    const handleToggleFavorite = (e: Event) => {
      const bikeId = (e as CustomEvent).detail;
      toggleFavorite(bikeId);
    };

    const handleOpenDetail = (e: Event) => {
      const bike = (e as CustomEvent).detail;
      setSelectedBike(bike);
    };

    window.addEventListener("toggle-favorite", handleToggleFavorite);
    window.addEventListener("open-motorcycle-detail", handleOpenDetail);

    return () => {
      window.removeEventListener("toggle-favorite", handleToggleFavorite);
      window.removeEventListener("open-motorcycle-detail", handleOpenDetail);
    };
  }, [favorites]);

  const addToast = (message: string, type: "success" | "info" | "heart" = "success") => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleFavorite = (id: string) => {
    const isFav = favorites.includes(id);
    const bikeName = motorcyclesData.find((b) => b.id === id)?.name || "Máquina";
    
    if (isFav) {
      setFavorites((prev) => prev.filter((item) => item !== id));
      addToast(`${bikeName} removida dos favoritos.`, "info");
    } else {
      setFavorites((prev) => [...prev, id]);
      addToast(`${bikeName} adicionada aos favoritos!`, "heart");
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setMinYear("all");
    setSortByPrice("default");
    addToast("Filtros limpos com sucesso.", "info");
  };

  const handleSearchToggle = () => {
    // Focus search input or switch to catalog tab
    if (activeTab !== "catalog" && activeTab !== "home") {
      setActiveTab("catalog");
    }
    setTimeout(() => {
      const searchSection = document.getElementById("filters-section");
      if (searchSection) {
        searchSection.scrollIntoView({ behavior: "smooth" });
        const input = searchSection.querySelector("input");
        if (input) input.focus();
      }
    }, 300);
  };

  // Filter & Sort Logic
  const filteredMotorcycles = motorcyclesData.filter((bike) => {
    const matchesSearch =
      bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || bike.category === selectedCategory;
    const matchesYear = minYear === "all" || bike.year >= parseInt(minYear, 10);

    return matchesSearch && matchesCategory && matchesYear;
  });

  const sortedMotorcycles = [...filteredMotorcycles].sort((a, b) => {
    if (sortByPrice === "asc") {
      return a.price - b.price;
    }
    if (sortByPrice === "desc") {
      return b.price - a.price;
    }
    return 0; // Default ordering (curated original sequence)
  });

  const favoritedMotorcycles = motorcyclesData.filter((b) => favorites.includes(b.id));

  // Handler for contact feedback
  const handleContactSuccess = (name: string) => {
    addToast(`Mensagem enviada com sucesso, ${name}!`, "success");
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-secondary selection:text-on-secondary relative flex flex-col justify-between">
      
      {/* Toast Notifications Panel */}
      <div className="fixed top-24 right-4 z-[120] flex flex-col gap-3 max-w-sm w-full pointer-events-none" id="toasts-container">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto bg-surface-container border border-white/10 p-4 shadow-xl flex items-center justify-between gap-4 animate-slideInRight"
          >
            <div className="flex items-center gap-3">
              {toast.type === "heart" ? (
                <Heart className="w-5 h-5 text-secondary fill-secondary animate-pulse" />
              ) : toast.type === "info" ? (
                <Bell className="w-5 h-5 text-on-surface-variant" />
              ) : (
                <Sparkles className="w-5 h-5 text-secondary" />
              )}
              <span className="text-xs font-headline font-bold text-on-surface leading-tight">
                {toast.message}
              </span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-on-surface-variant hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSearchToggle={handleSearchToggle}
        favoritesCount={favorites.length}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto">
        {activeTab === "home" && (
          <div className="animate-fadeIn">
            {/* Hero Main Screen */}
            <Hero
              onExploreCatalog={() => setActiveTab("catalog")}
              onConsultancyClick={() => setActiveTab("contact")}
            />

            {/* Quick Catalog preview */}
            <Filters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              minYear={minYear}
              setMinYear={setMinYear}
              sortByPrice={sortByPrice}
              setSortByPrice={setSortByPrice}
              onResetFilters={handleResetFilters}
            />

            <MotorcycleGrid
              motorcycles={sortedMotorcycles}
              onSelectMotorcycle={setSelectedBike}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </div>
        )}

        {activeTab === "catalog" && (
          <div className="pt-20 animate-fadeIn">
            <Filters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              minYear={minYear}
              setMinYear={setMinYear}
              sortByPrice={sortByPrice}
              setSortByPrice={setSortByPrice}
              onResetFilters={handleResetFilters}
            />

            <MotorcycleGrid
              motorcycles={sortedMotorcycles}
              onSelectMotorcycle={setSelectedBike}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              title="MÁQUINAS SELECIONADAS"
              subtitle="Consulte nosso acervo completo com especificações de fábrica."
            />
          </div>
        )}

        {activeTab === "about" && (
          <div className="pt-20 animate-fadeIn">
            <AboutContact view="about" onSendContactMessage={handleContactSuccess} />
          </div>
        )}

        {activeTab === "contact" && (
          <div className="pt-20 animate-fadeIn">
            <AboutContact view="contact" onSendContactMessage={handleContactSuccess} />
          </div>
        )}

        {activeTab === "favorites" && (
          <div className="pt-20 animate-fadeIn">
            <MotorcycleGrid
              motorcycles={favoritedMotorcycles}
              onSelectMotorcycle={setSelectedBike}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              title="SUA GARAGEM DE ELITE"
              subtitle="As máquinas que você salvou como suas próximas conquistas."
            />

            {favoritedMotorcycles.length === 0 && (
              <div className="max-w-md mx-auto text-center pb-24 px-6">
                <p className="font-body text-sm text-on-surface-variant/80 mb-6">
                  Sua garagem está vazia. Explore nosso catálogo e favorite modelos para compará-los lado a lado.
                </p>
                <button
                  onClick={() => setActiveTab("catalog")}
                  className="bg-secondary text-on-secondary font-headline text-xs font-bold tracking-widest px-8 py-4 hover:bg-white hover:text-brand-dark transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto uppercase"
                >
                  Ir Para o Catálogo
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Unified High-End Subscription Block */}
        <Newsletter />
      </main>

      {/* Brand Footer */}
      <Footer
        onNavClick={setActiveTab}
        onFilterCategory={setSelectedCategory}
      />

      {/* Motorcycle Detail Modal overlay */}
      {selectedBike && (
        <MotorcycleDetailModal
          bike={selectedBike}
          onClose={() => setSelectedBike(null)}
          isFavorite={favorites.includes(selectedBike.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}
