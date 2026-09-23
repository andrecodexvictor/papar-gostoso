'use client';

import React, { useState } from 'react';
import { Recipe } from '@/types/recipe';
import BeagleCoin from '../mascot/BeagleCoin';
import BeagleChefEmblem from '../mascot/BeagleChefEmblem';
import {
  X,
  Clock,
  ChefHat,
  Users,
  Check,
  Play,
  Heart,
  Share2,
  Printer,
  Sparkles,
} from 'lucide-react';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (recipeId: string) => void;
  onStartCookingMode: (recipe: Recipe) => void;
}

export default function RecipeModal({
  recipe,
  onClose,
  isFavorite,
  onToggleFavorite,
  onStartCookingMode,
}: RecipeModalProps) {
  const [portionMultiplier, setPortionMultiplier] = useState<number>(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [copiedLink, setCopiedLink] = useState(false);

  if (!recipe) return null;

  const toggleCheck = (index: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-stone-50 rounded-3xl border border-stone-200 shadow-2xl flex flex-col text-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Actions */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
            <span>{recipe.category}</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span>{recipe.type}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(recipe.id)}
              className={`p-2 rounded-full transition-colors ${
                isFavorite
                  ? 'bg-rose-50 text-rose-600'
                  : 'text-stone-400 hover:text-rose-600 hover:bg-stone-100'
              }`}
              title={isFavorite ? 'Remover dos favoritos' : 'Favoritar'}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-600' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              title="Compartilhar receita"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              title="Imprimir receita"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-200/80 transition-colors ml-2"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Main Visual & Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 aspect-4/3 rounded-2xl overflow-hidden shadow-inner border border-stone-200/80 bg-stone-100">
              <img
                src={`/imagens/${encodeURIComponent(recipe.title)}.jpg`}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <BeagleChefEmblem size="sm" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-tight">
                {recipe.title}
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                {recipe.subtitle}
              </p>

              {/* Unboxed Metadata metrics */}
              <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-600 border-t border-stone-200">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  <span>Preparo: <strong>{recipe.prepTime} min</strong></span>
                </div>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <div className="flex items-center gap-1.5">
                  <ChefHat className="w-3.5 h-3.5 text-amber-700" />
                  <span>Cozimento: <strong>{recipe.cookTime} min</strong></span>
                </div>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <div>
                  Dificuldade: <strong>{recipe.difficulty}</strong>
                </div>
              </div>

              {/* Primary Action Button: Enter Cooking Mode */}
              <div className="pt-3">
                <button
                  onClick={() => onStartCookingMode(recipe)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-stone-900 text-white hover:bg-stone-800 transition-all font-medium text-sm shadow-md hover:shadow-lg active:scale-98"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Entrar no Modo Cozinha (Passo a Passo)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Dica de Ouro do Beagle Chefe */}
          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/70 flex items-start gap-4 shadow-xs">
            <div className="shrink-0">
              <BeagleCoin size="md" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Dica de Ouro do Beagle Chefe</span>
              </div>
              <p className="text-sm text-amber-950/90 leading-relaxed">
                {recipe.beagleTip}
              </p>
            </div>
          </div>

          {/* Ingredients Section with Multiplier */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-3">
              <div>
                <h3 className="text-lg font-bold text-stone-900">Ingredientes</h3>
                <p className="text-xs text-stone-500">Marque o que já separou na bancada</p>
              </div>

              {/* Portion Scaler Multiplier Controls */}
              <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-lg text-xs font-medium">
                <span className="px-2 text-stone-600 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>Porções:</span>
                </span>
                {[1, 2, 4].map((mult) => (
                  <button
                    key={mult}
                    onClick={() => setPortionMultiplier(mult)}
                    className={`px-3 py-1 rounded-md transition-all ${
                      portionMultiplier === mult
                        ? 'bg-white text-stone-900 font-bold shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {recipe.servings * mult}p ({mult}x)
                  </button>
                ))}
              </div>
            </div>

            {/* Checklist of Ingredients */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {recipe.ingredients.map((ing, idx) => {
                const isChecked = !!checkedIngredients[idx];
                const scaledAmount =
                  ing.amount !== null
                    ? (ing.amount * portionMultiplier).toLocaleString('pt-BR', {
                        maximumFractionDigits: 1,
                      })
                    : null;

                return (
                  <div
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-200 text-stone-400'
                        : 'bg-white border-stone-200/80 hover:border-amber-300 text-stone-800'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center border transition-colors ${
                        isChecked
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'border-stone-300 bg-stone-50'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>

                    <div className="flex-1 text-sm leading-snug">
                      <span className={isChecked ? 'line-through text-stone-400' : 'font-medium'}>
                        {scaledAmount && (
                          <span className="font-bold text-amber-900 mr-1.5 tabular-nums">
                            {scaledAmount} {ing.unit}
                          </span>
                        )}
                        {!scaledAmount && ing.unit !== 'a gosto' && (
                          <span className="font-bold text-amber-900 mr-1.5">{ing.unit}</span>
                        )}
                        {ing.item}
                        {ing.note && <span className="text-xs text-stone-400 ml-1">({ing.note})</span>}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instructions Step by Step */}
          <div className="space-y-4">
            <div className="border-b border-stone-200 pb-3">
              <h3 className="text-lg font-bold text-stone-900">Modo de Preparo</h3>
              <p className="text-xs text-stone-500">Tutorial simples e descomplicado para seguir no seu ritmo</p>
            </div>

            <div className="space-y-4">
              {recipe.steps.map((step) => (
                <div
                  key={step.order}
                  className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center">
                        {step.order}
                      </span>
                      {step.title && (
                        <h4 className="text-sm font-semibold text-stone-900">{step.title}</h4>
                      )}
                    </div>

                    {step.timerSeconds && (
                      <span className="text-xs text-amber-800 font-medium flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/50">
                        <Clock className="w-3 h-3" />
                        <span>{Math.floor(step.timerSeconds / 60)} min</span>
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed pl-8">
                    {step.instruction}
                  </p>

                  {step.tip && (
                    <div className="pl-8 text-xs text-amber-800 italic bg-amber-50/50 p-2 rounded-lg mt-1">
                      💡 {step.tip}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Bottom Actions */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-stone-50/95 backdrop-blur-md border-t border-stone-200">
          <div className="text-xs text-stone-500">
            Receita testada pela cozinha da Nika & Beagle Chefe
          </div>

          <button
            onClick={() => onStartCookingMode(recipe)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs transition-colors shadow-sm"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Iniciar Modo Cozinha</span>
          </button>
        </div>

        {copiedLink && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 px-4 py-2 bg-stone-900 text-white text-xs rounded-full shadow-lg">
            Link da receita copiado!
          </div>
        )}
      </div>
    </div>
  );
}
