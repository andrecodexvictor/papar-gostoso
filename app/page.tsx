'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RECIPES, CATEGORIES_CONFIG, MAIN_INGREDIENT_FILTERS } from '@/data/recipes';
import { Recipe, DishCategory, DishType } from '@/types/recipe';
import RecipeCard from '@/components/recipes/RecipeCard';
import RecipeModal from '@/components/recipes/RecipeModal';
import CookingModeModal from '@/components/recipes/CookingModeModal';
import RecipeOfTheDay from '@/components/recipes/RecipeOfTheDay';
import BeagleCoin from '@/components/mascot/BeagleCoin';
import BeagleAssistant from '@/components/mascot/BeagleAssistant';
import { getRecipeOfTheDay, getAllSpotlightRecipes } from '@/lib/recipe-of-the-day';
import {
  Search,
  X,
  Heart,
  Sparkles,
  Flame,
  Utensils,
  Coffee,
  Cake,
  Pizza,
  Croissant,
  Soup,
  Sandwich,
  Salad,
  Filter,
  ArrowUpDown,
  BookOpen,
  RotateCcw,
} from 'lucide-react';

export default function HomePage() {
  // State management
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<DishType | 'all'>('all');
  const [selectedIngredient, setSelectedIngredient] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [sortBy, setSortBy] = useState<'recommended' | 'time' | 'calories'>('recommended');

  // Active modals
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);
  const [cookingRecipe, setCookingRecipe] = useState<Recipe | null>(null);

  // Favorites persistence in localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('papa_gostoso_favorites');
        if (saved) return JSON.parse(saved);
      } catch {
        // LocalStorage safe
      }
    }
    return [];
  });

  // Recipe of the Day dynamic calculation & override state
  const [overrideRecipeOfDayId, setOverrideRecipeOfDayId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem('papa_gostoso_recipe_of_the_day_override');
      } catch {
        return null;
      }
    }
    return null;
  });

  const spotlightList = useMemo(() => getAllSpotlightRecipes(), []);

  const { recipe: recipeOfTheDay, dateString } = useMemo(() => {
    return getRecipeOfTheDay(undefined, overrideRecipeOfDayId);
  }, [overrideRecipeOfDayId]);

  const handleSelectRecipeOverride = (id: string | null) => {
    setOverrideRecipeOfDayId(id);
    try {
      if (id) {
        localStorage.setItem('papa_gostoso_recipe_of_the_day_override', id);
      } else {
        localStorage.removeItem('papa_gostoso_recipe_of_the_day_override');
      }
    } catch {
      // storage safe
    }
  };

  const toggleFavorite = (recipeId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavorites((prev) => {
      const updated = prev.includes(recipeId)
        ? prev.filter((id) => id !== recipeId)
        : [...prev, recipeId];
      try {
        localStorage.setItem('papa_gostoso_favorites', JSON.stringify(updated));
      } catch {
        // Storage safe
      }
      return updated;
    });
  };

  // Filtered and Sorted Recipes
  const filteredRecipes = useMemo(() => {
    return RECIPES.filter((r) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'burgers' && r.category !== 'burgers' && r.category !== 'breads') return false;
        if (selectedCategory !== 'burgers' && r.category !== selectedCategory) return false;
      }

      // Dish Type filter (doce, salgado, bebida, pao)
      if (selectedType !== 'all' && r.type !== selectedType) {
        return false;
      }

      // Ingredient tag filter
      if (selectedIngredient !== 'all') {
        const hasTag = r.ingredients.some((ing) => ing.tag === selectedIngredient);
        const hasText = r.ingredients.some((ing) =>
          ing.item.toLowerCase().includes(selectedIngredient.toLowerCase())
        );
        if (!hasTag && !hasText) return false;
      }

      // Favorites only filter
      if (showOnlyFavorites && !favorites.includes(r.id)) {
        return false;
      }

      // Search Query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = r.title.toLowerCase().includes(query);
        const matchesSubtitle = r.subtitle.toLowerCase().includes(query);
        const matchesTags = r.tags.some((t) => t.toLowerCase().includes(query));
        const matchesIngredient = r.ingredients.some((i) =>
          i.item.toLowerCase().includes(query)
        );
        if (!matchesTitle && !matchesSubtitle && !matchesTags && !matchesIngredient) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'time') {
        return a.totalTime - b.totalTime;
      }
      if (sortBy === 'calories') {
        return (a.caloriesApprox || 999) - (b.caloriesApprox || 999);
      }
      // 'recommended': featured first, then title
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [
    selectedCategory,
    selectedType,
    selectedIngredient,
    searchQuery,
    showOnlyFavorites,
    favorites,
    sortBy,
  ]);

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedType('all');
    setSelectedIngredient('all');
    setSearchQuery('');
    setShowOnlyFavorites(false);
    setSortBy('recommended');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedType !== 'all' ||
    selectedIngredient !== 'all' ||
    searchQuery !== '' ||
    showOnlyFavorites;

  // Icon mapping helper
  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'Sandwich':
        return <Sandwich className="w-4 h-4" />;
      case 'Utensils':
        return <Utensils className="w-4 h-4" />;
      case 'Heart':
        return <Heart className="w-4 h-4" />;
      case 'Coffee':
        return <Coffee className="w-4 h-4" />;
      case 'Flame':
        return <Flame className="w-4 h-4" />;
      case 'Cake':
        return <Cake className="w-4 h-4" />;
      case 'Pizza':
        return <Pizza className="w-4 h-4" />;
      case 'Croissant':
        return <Croissant className="w-4 h-4" />;
      case 'Soup':
        return <Soup className="w-4 h-4" />;
      case 'Salad':
        return <Salad className="w-4 h-4" />;
      default:
        return <Utensils className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 selection:bg-amber-100 selection:text-amber-950 font-sans">
      {/* ========================================================
          1. TOP BAR (Clean, unhurried Apple/Marketplace aesthetic)
          ======================================================== */}
      <header className="sticky top-0 z-30 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EDE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Brand Identity: Beagle in Coin + Name */}
          <div
            onClick={clearAllFilters}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <BeagleCoin size="md" animated={true} />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-[#B85D38] transition-colors">
                  Papá Gostoso
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider text-[#B85D38] bg-[#F5EBE1] border border-[#ECD9C8] px-2 py-0.5 rounded-full">
                  NIKA
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium tracking-wide">
                Receitas e Tutoriais Aconchegantes
              </p>
            </div>
          </div>

          {/* Quick Header Search Bar (Desktop) */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar receitas, pães, café, sobremesas..."
                className="w-full pl-10 pr-9 py-2 rounded-2xl bg-white border border-[#E5DCD0] focus:outline-none focus:border-[#B85D38] focus:bg-white text-xs text-stone-900 transition-all placeholder:text-stone-400 shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Top Actions: Favorites Toggle + Recipe Count */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                showOnlyFavorites
                  ? 'bg-rose-50 border border-rose-200 text-rose-600'
                  : 'bg-white border border-[#E5DCD0] text-stone-700 hover:border-[#D8CAB8]'
              }`}
              title="Filtrar receitas favoritas"
            >
              <Heart
                className={`w-3.5 h-3.5 ${
                  showOnlyFavorites ? 'fill-rose-600 text-rose-600' : 'text-stone-400'
                }`}
              />
              <span className="hidden sm:inline">Favoritos</span>
              {favorites.length > 0 && (
                <span className="w-4.5 h-4.5 rounded-full bg-rose-100 text-rose-700 text-[10px] flex items-center justify-center font-bold">
                  {favorites.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Input below Header */}
        <div className="md:hidden px-4 pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar receitas, ingredientes..."
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-white border border-[#E5DCD0] text-xs text-stone-900 placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ========================================================
          2. HERO SECTION (Cozy Marketplace Atmosphere)
          ======================================================== */}
      <section className="relative overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14 border-b border-[#EDE6DC] bg-linear-to-b from-[#F5EFE6]/80 via-[#FAF7F2] to-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              {/* Unboxed kicker */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B85D38]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>O Livro de Culinária da Nika & Beagle Chefe</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15]">
                Cozinha descomplicada, <br className="hidden sm:inline" />
                <span className="text-[#B85D38] italic font-normal">
                  feita com carinho e sabor de casa.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 max-w-2xl leading-relaxed">
                De smash burgers no pão comum a carbonaras clássicas, cuscuz nordestino, feijoada,
                pizzas italianas, mochi e sobremesas aconchegantes. Tutoriais simples,
                ilustrações detalhadas e mais de 100 receitas para o seu dia a dia.
              </p>

              {/* Quick stats unboxed */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-stone-600">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#B85D38]" />
                  <span><strong>{RECIPES.length}</strong> Receitas Selecionadas</span>
                </div>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <div>
                  <strong>100%</strong> Ilustrado com amor
                </div>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <div>
                  Passo a passo com <strong>Timer Sonoro</strong>
                </div>
              </div>

              {/* Quick Jump to Recipe of the Day */}
              <div className="pt-2">
                <a
                  href="#recipe-of-the-day"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B85D38]/10 hover:bg-[#B85D38]/20 border border-[#B85D38]/30 text-[#8C3A19] font-semibold text-xs transition-colors shadow-2xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#B85D38]" />
                  <span>Destaque de Hoje: <strong>{recipeOfTheDay.title}</strong></span>
                </a>
              </div>
            </div>

            {/* Hero Mascot Golden Coin Focal Feature */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-3xl bg-white/70 border border-[#EDE6DC] shadow-xs backdrop-blur-xs">
              <BeagleCoin size="xl" animated={true} />
              <div className="mt-4">
                <h3 className="text-sm font-serif font-bold text-stone-900">Mascote Beagle em Moeda</h3>
                <p className="text-xs text-stone-500 mt-1 max-w-xs leading-relaxed">
                  Aprovado pela Nika. Clique no Beagle no canto inferior para pedir uma receita surpresa!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2.5. RECEITA DO DIA (SPOTLIGHT BANNER)
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RecipeOfTheDay
          recipe={recipeOfTheDay}
          dateString={dateString}
          onOpenRecipe={(r) => setActiveRecipe(r)}
          onStartCookingMode={(r) => setCookingRecipe(r)}
          isFavorite={favorites.includes(recipeOfTheDay.id)}
          onToggleFavorite={toggleFavorite}
          spotlightList={spotlightList}
          onSelectRecipeOverride={handleSelectRecipeOverride}
          selectedOverrideId={overrideRecipeOfDayId}
        />
      </div>

      {/* ========================================================
          3. CATEGORIES HORIZONTAL NAVIGATION (Fluid & Animated)
          ======================================================== */}
      <section className="sticky top-18 z-20 bg-white/95 backdrop-blur-md border-b border-stone-200 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {CATEGORIES_CONFIG.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative shrink-0 flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold transition-all duration-200 select-none ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-sm'
                      : 'bg-stone-100/80 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  <span className={isActive ? 'text-amber-400' : 'text-stone-500'}>
                    {renderCategoryIcon(cat.icon)}
                  </span>
                  <span>{cat.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-stone-900 rounded-2xl -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. INGREDIENT & QUICK FILTER SYSTEM (User-Friendly)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex flex-col gap-4 bg-white p-4 sm:p-5 rounded-3xl border border-stone-200/80 shadow-2xs">
          {/* Top Row: Dish Type (Salgado, Doce, Café, Pães) */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-stone-400" />
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                Tipo de Prato:
              </span>
              <div className="flex flex-wrap items-center gap-1.5 ml-2">
                {[
                  { id: 'all', label: 'Todos' },
                  { id: 'salgado', label: 'Salgados' },
                  { id: 'doce', label: 'Doces & Sobremesas' },
                  { id: 'bebida', label: 'Cafés & Bebidas' },
                  { id: 'pao', label: 'Pães Artesanais' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedType(t.id as DishType | 'all')}
                    className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
                      selectedType === t.id
                        ? 'bg-amber-100 text-amber-950 font-bold border border-amber-300'
                        : 'bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-stone-400" />
              <span className="text-xs text-stone-500 font-medium">Ordenar:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'recommended' | 'time' | 'calories')}
                className="bg-stone-50 border border-stone-200 text-stone-800 text-xs rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-amber-400 font-medium"
              >
                <option value="recommended">Recomendadas do Chefe</option>
                <option value="time">Mais Rápidas Primeiro</option>
                <option value="calories">Menos Calorias</option>
              </select>
            </div>
          </div>

          {/* Bottom Row: Ingredient filtering ("O que tem na sua despensa?") */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-stone-100">
            <span className="text-xs font-medium text-stone-500 mr-1">
              Ingrediente chave:
            </span>
            <button
              onClick={() => setSelectedIngredient('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                selectedIngredient === 'all'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Qualquer
            </button>
            {MAIN_INGREDIENT_FILTERS.map((ing) => (
              <button
                key={ing.tag}
                onClick={() =>
                  setSelectedIngredient(
                    selectedIngredient === ing.tag ? 'all' : ing.tag
                  )
                }
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedIngredient === ing.tag
                    ? 'bg-amber-600 text-white font-bold shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {ing.label}
              </button>
            ))}

            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="ml-auto text-xs text-stone-400 hover:text-stone-800 flex items-center gap-1 font-medium transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Limpar Filtros</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. RECIPES CATALOG GRID
          ======================================================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
              {showOnlyFavorites ? 'Minhas Receitas Favoritas' : 'Cardápio de Receitas'}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Exibindo <strong>{filteredRecipes.length}</strong> de {RECIPES.length} receitas
            </p>
          </div>
        </div>

        {/* Recipes Grid */}
        {filteredRecipes.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredRecipes.map((recipe) => (
                <motion.div
                  key={recipe.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <RecipeCard
                    recipe={recipe}
                    onSelect={(r) => setActiveRecipe(r)}
                    isFavorite={favorites.includes(recipe.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Friendly Empty State with Beagle Mascot */
          <div className="py-16 px-6 text-center max-w-md mx-auto space-y-4">
            <div className="flex justify-center">
              <BeagleCoin size="lg" animated={false} />
            </div>
            <h3 className="text-lg font-bold text-stone-900">
              Nenhuma receita encontrada
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              O Beagle Chefe procurou por toda a cozinha, mas não achou nada com os filtros atuais. Que tal tentar outro ingrediente ou limpar os filtros?
            </p>
            <button
              onClick={clearAllFilters}
              className="px-5 py-2.5 rounded-xl bg-stone-900 text-white font-medium text-xs hover:bg-stone-800 transition-colors shadow-xs"
            >
              Mostrar Todas as Receitas
            </button>
          </div>
        )}
      </main>

      {/* ========================================================
          6. FOOTER
          ======================================================== */}
      <footer className="mt-20 border-t border-[#EDE6DC] bg-[#FAF7F2] py-12 text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <BeagleCoin size="sm" animated={false} />
            <div>
              <div className="font-serif font-bold text-stone-900 text-sm">
                Papá Gostoso
              </div>
              <p className="text-xs text-stone-500">
                Dedicado à boa mesa, simplicidade e momentos aconchegantes.
              </p>
            </div>
          </div>

          <div className="text-xs text-stone-500 text-center sm:text-right">
            <span>Cozinha conectada à NIKA · Mascote Beagle em Moeda Dourada</span>
            <div className="mt-1">
              Feito com carinho para todos os amantes da boa comida.
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================
          7. MODALS & INTERACTIVE OVERLAYS
          ======================================================== */}
      {/* Recipe Detail Modal */}
      {activeRecipe && (
        <RecipeModal
          recipe={activeRecipe}
          onClose={() => setActiveRecipe(null)}
          isFavorite={favorites.includes(activeRecipe.id)}
          onToggleFavorite={(id) => toggleFavorite(id)}
          onStartCookingMode={(recipe) => {
            setActiveRecipe(null);
            setCookingRecipe(recipe);
          }}
        />
      )}

      {/* Full-Screen Step-by-Step Cooking Mode */}
      {cookingRecipe && (
        <CookingModeModal
          recipe={cookingRecipe}
          onClose={() => setCookingRecipe(null)}
        />
      )}

      {/* Floating Beagle Mascot Assistant */}
      <BeagleAssistant
        recipes={RECIPES}
        onSelectRecipe={(r) => setActiveRecipe(r)}
      />
    </div>
  );
}
