import React, { useState } from "react";
import { Search, Menu, X, Heart, Shield, Compass, BookOpen, Contact } from "lucide-react";

interface HeaderProps {
  activeTab: "home" | "catalog" | "about" | "contact" | "favorites";
  setActiveTab: (tab: "home" | "catalog" | "about" | "contact" | "favorites") => void;
  onSearchToggle: () => void;
  favoritesCount: number;
}

export default function Header({ activeTab, setActiveTab, onSearchToggle, favoritesCount }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Início", icon: Compass },
    { id: "catalog", label: "Catálogo", icon: BookOpen },
    { id: "about", label: "Sobre Nós", icon: Shield },
    { id: "contact", label: "Contato", icon: Contact },
  ] as const;

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-12 h-20 max-w-[1440px] mx-auto bg-brand-dark/85 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div 
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => {
          setActiveTab("home");
          setIsMenuOpen(false);
        }}
        id="header-logo-container"
      >
        {/* Styled Elegant Emblem */}
        <div className="relative flex items-center justify-center w-10 h-10 border-2 border-secondary rounded-none rotate-45 group">
          <span className="font-headline font-black text-secondary text-lg select-none -rotate-45 block">F</span>
        </div>
        <div className="flex flex-col">
          <span className="font-headline text-lg md:text-xl font-black tracking-widest text-on-surface uppercase block">
            FALCÃO MOTORS
          </span>
          <span className="text-[9px] tracking-[0.25em] text-secondary uppercase font-label">
            HIGH-PERFORMANCE
          </span>
        </div>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center gap-8" id="desktop-navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`font-label text-xs tracking-wider font-semibold py-2 transition-all border-b-2 uppercase ${
              activeTab === item.id
                ? "text-secondary border-secondary"
                : "text-on-surface/70 hover:text-secondary border-transparent"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Right controls */}
      <div className="flex items-center gap-4 md:gap-6" id="header-controls">
        <button
          onClick={onSearchToggle}
          className="text-on-surface hover:text-secondary transition-all duration-300 active:scale-95 p-2 rounded-full hover:bg-white/5"
          title="Buscar modelo"
          id="btn-search-trigger"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Favorites count button */}
        <button
          onClick={() => setActiveTab("favorites")}
          className={`relative p-2 rounded-full hover:bg-white/5 transition-all duration-300 active:scale-95 ${
            activeTab === "favorites" ? "text-secondary" : "text-on-surface hover:text-secondary"
          }`}
          title="Favoritos"
          id="btn-favorites-trigger"
        >
          <Heart className={`w-5 h-5 ${favoritesCount > 0 ? "fill-secondary text-secondary" : ""}`} />
          {favoritesCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[9px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center animate-pulse">
              {favoritesCount}
            </span>
          )}
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-on-surface hover:text-secondary p-2"
          id="btn-mobile-menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div 
          className="absolute top-20 left-0 w-full bg-brand-darker border-b border-white/10 py-6 px-6 flex flex-col gap-4 animate-fadeIn md:hidden"
          id="mobile-nav-drawer"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center gap-4 py-3 px-4 rounded-md font-label text-sm tracking-wider font-semibold uppercase text-left transition-all ${
                  activeTab === item.id
                    ? "bg-secondary/10 text-secondary border-l-4 border-secondary"
                    : "text-on-surface/70 hover:bg-white/5 hover:text-secondary"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => {
              setActiveTab("favorites");
              setIsMenuOpen(false);
            }}
            className={`flex items-center gap-4 py-3 px-4 rounded-md font-label text-sm tracking-wider font-semibold uppercase text-left transition-all ${
              activeTab === "favorites"
                ? "bg-secondary/10 text-secondary border-l-4 border-secondary"
                : "text-on-surface/70 hover:bg-white/5 hover:text-secondary"
            }`}
          >
            <Heart className="w-4 h-4 fill-current" />
            Favoritos ({favoritesCount})
          </button>
        </div>
      )}
    </header>
  );
}
