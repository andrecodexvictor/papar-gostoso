'use client';

import React from 'react';
import { Recipe } from '@/types/recipe';
import DishIllustration from './DishIllustration';
import { Clock, Heart, Sparkles, ArrowRight } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
  isFavorite: boolean;
  onToggleFavorite: (recipeId: string, e: React.MouseEvent) => void;
}

const CATEGORY_LABEL_MAP: Record<string, string> = {
  burgers: 'HAMBÚRGUERES',
  pastas: 'MASSAS',
  brasil: 'BRASIL',
  italy: 'ITÁLIA',
  breakfast_cafe: 'CAFÉ DA MANHÃ',
  desserts: 'FORNO & DOCES',
  lunch_meats: 'ALMOÇO',
  japan: 'JAPONESA',
  france: 'FRANÇA',
  salads: 'SALADAS',
  drinks: 'BEBIDAS',
};

export default function RecipeCard({
  recipe,
  onSelect,
  isFavorite,
  onToggleFavorite,
}: RecipeCardProps) {
  const categoryLabel = CATEGORY_LABEL_MAP[recipe.category] || 'RECEITA';

  return (
    <div
      onClick={() => onSelect(recipe)}
      className="group relative flex flex-col bg-[#FCFAF7] hover:bg-white rounded-3xl border border-[#EBE3D7] hover:border-[#D6C7B2] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden text-left"
    >
      {/* Top Media: Bespoke Detailed SVG Illustration */}
      <div className="relative w-full aspect-4/3 overflow-hidden bg-[#F5EFE6]/60 border-b border-[#EFE8DC]">
        <DishIllustration
          id={recipe.illustrationId}
          type={recipe.type}
          className="w-full h-full p-4 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => onToggleFavorite(recipe.id, e)}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-md ${
            isFavorite
              ? 'bg-rose-50 text-rose-600 shadow-sm'
              : 'bg-white/85 text-stone-500 hover:text-rose-600 hover:bg-white shadow-xs'
          }`}
          title={isFavorite ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
          aria-label="Favoritar receita"
        >
          <Heart
            className={`w-4 h-4 transition-transform active:scale-125 ${
              isFavorite ? 'fill-rose-600' : ''
            }`}
          />
        </button>

        {/* Featured Tag Indicator if applicable */}
        {recipe.featured && (
          <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-[#B85D38] text-white text-[11px] font-medium tracking-wide flex items-center gap-1 shadow-xs">
            <Sparkles className="w-3 h-3" />
            <span>Destaque</span>
          </div>
        )}
      </div>

      {/* Card Content & Zero-Pill Cozy Typography */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Header row: category + prep time */}
          <div className="flex items-center justify-between text-[11px] font-medium tracking-wider text-[#9E5D38] uppercase mb-1.5">
            <span>{categoryLabel}</span>
            <span className="text-stone-500 font-normal flex items-center gap-1">
              <Clock className="w-3 h-3 text-stone-400" />
              {recipe.totalTime} MIN
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-serif font-medium text-stone-900 leading-snug group-hover:text-[#B85D38] transition-colors line-clamp-2">
            {recipe.title}
          </h3>

          {/* Subtitle */}
          <p className="text-xs text-stone-600 mt-1.5 line-clamp-2 leading-relaxed">
            {recipe.subtitle}
          </p>
        </div>

        {/* Action Link: Ver receita -> */}
        <div className="pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1.5 font-medium text-[#B85D38] group-hover:translate-x-0.5 transition-transform">
            <span>Ver receita</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>

          <span className="text-[11px] text-stone-400 font-normal">
            {recipe.difficulty} · {recipe.servings} {recipe.servings === 1 ? 'porção' : 'porções'}
          </span>
        </div>
      </div>
    </div>
  );
}
