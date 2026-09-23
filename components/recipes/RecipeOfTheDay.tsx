'use client';

import React from 'react';
import { Recipe } from '@/types/recipe';
import DishIllustration from './DishIllustration';
import BeagleCoin from '../mascot/BeagleCoin';
import {
  Sparkles,
  Clock,
  ChefHat,
  Users,
  Play,
  ArrowRight,
  Heart,
  Flame,
  Calendar,
  SlidersHorizontal,
} from 'lucide-react';

interface RecipeOfTheDayProps {
  recipe: Recipe;
  dateString: string;
  onOpenRecipe: (recipe: Recipe) => void;
  onStartCookingMode: (recipe: Recipe) => void;
  isFavorite: boolean;
  onToggleFavorite: (recipeId: string, e: React.MouseEvent) => void;
  spotlightList?: Recipe[];
  onSelectRecipeOverride?: (recipeId: string | null) => void;
  selectedOverrideId?: string | null;
}

export default function RecipeOfTheDay({
  recipe,
  dateString,
  onOpenRecipe,
  onStartCookingMode,
  isFavorite,
  onToggleFavorite,
  spotlightList = [],
  onSelectRecipeOverride,
  selectedOverrideId,
}: RecipeOfTheDayProps) {
  const [showOverrideMenu, setShowOverrideMenu] = React.useState(false);

  return (
    <section id="recipe-of-the-day" className="relative overflow-hidden my-8 rounded-3xl bg-linear-to-br from-amber-500/10 via-amber-100/40 to-stone-100/80 border border-amber-200/80 shadow-md">
      {/* Decorative Warm Ambient Elements */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />

      <div className="relative p-6 sm:p-8 md:p-10">
        {/* Top Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-amber-200/60">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-stone-950 shadow-xs">
              <Sparkles className="w-4 h-4 fill-stone-950" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  Receita do Dia
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-200/70 text-amber-900 border border-amber-300/60">
                  {selectedOverrideId ? 'Destaque Personalizado' : 'Rotação Diária'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-stone-600 font-medium mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-amber-700" />
                <span>{dateString}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Update / Switch Recipe of the Day Trigger */}
            {onSelectRecipeOverride && spotlightList.length > 0 && (
              <div className="relative">
                <button
                  onClick={() => setShowOverrideMenu(!showOverrideMenu)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/80 hover:bg-white text-stone-700 border border-stone-200 transition-colors shadow-2xs"
                  title="Alterar ou personalizar a receita do dia"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-amber-700" />
                  <span>Trocar Destaque</span>
                </button>

                {showOverrideMenu && (
                  <div className="absolute right-0 mt-2 w-64 p-2 bg-white rounded-2xl shadow-xl border border-stone-200 z-30 space-y-1 text-xs max-h-72 overflow-y-auto">
                    <div className="px-2 py-1 text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                      Definir Receita do Dia
                    </div>
                    <button
                      onClick={() => {
                        onSelectRecipeOverride(null);
                        setShowOverrideMenu(false);
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-xl transition-colors ${
                        !selectedOverrideId
                          ? 'bg-amber-100 font-bold text-amber-950'
                          : 'text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      ✨ Automático (Calendário de Hoje)
                    </button>
                    {spotlightList.map((spotlight) => (
                      <button
                        key={spotlight.id}
                        onClick={() => {
                          onSelectRecipeOverride(spotlight.id);
                          setShowOverrideMenu(false);
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded-xl transition-colors line-clamp-1 ${
                          selectedOverrideId === spotlight.id
                            ? 'bg-amber-100 font-bold text-amber-950'
                            : 'text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        {spotlight.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Quick Favorite Action */}
            <button
              onClick={(e) => onToggleFavorite(recipe.id, e)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                isFavorite
                  ? 'bg-rose-100/90 text-rose-600 border border-rose-200 shadow-xs'
                  : 'bg-white/80 text-stone-600 hover:text-rose-600 hover:bg-white border border-stone-200'
              }`}
              title={isFavorite ? 'Remover dos favoritos' : 'Favoritar receita do dia'}
            >
              <Heart
                className={`w-3.5 h-3.5 ${isFavorite ? 'fill-rose-600 text-rose-600' : 'text-stone-400'}`}
              />
              <span className="hidden sm:inline">{isFavorite ? 'Favoritada' : 'Favoritar'}</span>
            </button>
          </div>
        </div>

        {/* Main Content Grid: Detailed Graphic + Recipe Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
          {/* Left/Graphic Column */}
          <div
            onClick={() => onOpenRecipe(recipe)}
            className="lg:col-span-5 cursor-pointer group"
          >
            <div className="relative aspect-4/3 sm:aspect-16/11 w-full rounded-2xl overflow-hidden bg-white/90 border border-amber-200/90 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
              <DishIllustration
                id={recipe.illustrationId}
                type={recipe.type}
                className="w-full h-full p-4 transition-transform duration-500 group-hover:scale-105"
              />

              {/* Category chip inside image */}
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-medium tracking-wide">
                {recipe.type === 'doce'
                  ? 'Sobremesa'
                  : recipe.type === 'bebida'
                  ? 'Café & Bebida'
                  : recipe.type === 'pao'
                  ? 'Pão Artesanal'
                  : 'Prato Salgado'}
              </div>
            </div>
          </div>

          {/* Right/Info Column */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                {recipe.category.toUpperCase()} · CHEF NIKA
              </div>
              <h3
                onClick={() => onOpenRecipe(recipe)}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 hover:text-amber-800 transition-colors cursor-pointer mt-1 font-serif"
              >
                {recipe.title}
              </h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                {recipe.subtitle}
              </p>
            </div>

            {/* Unboxed Metadata Metrics */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-700 py-2 border-y border-amber-200/60">
              <div className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>Pronto em <strong>{recipe.totalTime} min</strong></span>
              </div>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <div className="flex items-center gap-1.5 font-medium">
                <ChefHat className="w-4 h-4 text-amber-700" />
                <span>Dificuldade: <strong>{recipe.difficulty}</strong></span>
              </div>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <div className="flex items-center gap-1.5 font-medium">
                <Users className="w-4 h-4 text-amber-700" />
                <span>Rende <strong>{recipe.servings} porções</strong></span>
              </div>
              {recipe.caloriesApprox && (
                <>
                  <span aria-hidden="true" className="text-stone-300">·</span>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Flame className="w-4 h-4 text-amber-700" />
                    <span>~{recipe.caloriesApprox} kcal</span>
                  </div>
                </>
              )}
            </div>

            {/* Beagle Chef Tip Box */}
            <div className="p-3.5 rounded-2xl bg-white/70 border border-amber-200/90 flex items-start gap-3 shadow-2xs">
              <div className="shrink-0 mt-0.5">
                <BeagleCoin size="sm" animated={false} />
              </div>
              <div className="space-y-0.5">
                <div className="text-[11px] font-bold text-amber-900 uppercase tracking-wide">
                  Dica de Ouro do Beagle Chefe & Nika
                </div>
                <p className="text-xs text-amber-950/90 leading-snug line-clamp-2">
                  {recipe.beagleTip}
                </p>
              </div>
            </div>

            {/* Interactive Call-To-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenRecipe(recipe)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white hover:bg-stone-800 transition-all font-semibold text-xs shadow-sm hover:shadow-md active:scale-98"
              >
                <span>Ver Receita Completa & Ingredientes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onStartCookingMode(recipe)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-all shadow-xs active:scale-98"
              >
                <Play className="w-3.5 h-3.5 fill-stone-950" />
                <span>Cozinhar Agora</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
