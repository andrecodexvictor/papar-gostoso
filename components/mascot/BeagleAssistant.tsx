'use client';

import React, { useState } from 'react';
import BeagleCoin from './BeagleCoin';
import { Recipe } from '@/types/recipe';
import { Sparkles, Dices, X, ChevronRight, MessageSquareHeart } from 'lucide-react';

interface BeagleAssistantProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
}

export default function BeagleAssistant({ recipes, onSelectRecipe }: BeagleAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentThoughtIndex, setCurrentThoughtIndex] = useState(0);

  const BEAGLE_THOUGHTS = [
    'Oi, Nika! O pão quentinho na frigideira com manteiga muda completamente o dia.',
    'Dica de ouro da Nika: massas italianas adoram a água do próprio cozimento para dar liga ao molho!',
    'Lembre-se: o hambúrguer japonês (Hambagu) fica perfeito no prato com repolho bem fininho e arroz gohan.',
    'Brownie bom é aquele com casquinha de papel e centro macio que derrete na boca!',
    'Café bom não queima a água: tire do fogo assim que as bolinhas começarem a surgir a 92°C.',
    'O cuscuz nordestino fofinho com manteiga de garrafa e queijo coalho tostado salva qualquer manhã!',
    'Se for fazer carne no churrasco, sele primeiro a gordura para perfumar toda a grelha!',
  ];

  const handleRandomRecipe = () => {
    if (recipes.length === 0) return;
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const chosen = recipes[randomIndex];
    onSelectRecipe(chosen);
    setIsOpen(false);
  };

  const nextThought = () => {
    setCurrentThoughtIndex((prev) => (prev + 1) % BEAGLE_THOUGHTS.length);
  };

  return (
    <>
      {/* Floating Beagle Coin Trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-3 p-2 pr-4 bg-white/90 hover:bg-white backdrop-blur-md rounded-full border border-amber-200/90 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
          title="Falar com o Beagle Chefe da Nika"
          aria-label="Abrir dicas do mascote"
        >
          <BeagleCoin size="sm" animated={true} />
          <div className="text-left hidden sm:block">
            <div className="text-[10px] font-bold uppercase tracking-wider text-amber-900">
              Mascote Nika
            </div>
            <div className="text-xs font-semibold text-stone-900 flex items-center gap-1">
              <span>Beagle Chefe</span>
              <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
            </div>
          </div>
        </button>
      </div>

      {/* Cozy Mascot Dialog Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-84 sm:w-96 p-5 bg-white/95 backdrop-blur-md border border-stone-200 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <BeagleCoin size="xs" animated={false} />
              <div>
                <h4 className="text-sm font-bold text-stone-900">Beagle Chefe</h4>
                <p className="text-[11px] text-stone-500">Mascote oficial do Papá Gostoso</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Speech Bubble */}
          <div className="my-4 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-950 leading-relaxed relative">
            <p className="italic">
              &ldquo;{BEAGLE_THOUGHTS[currentThoughtIndex]}&rdquo;
            </p>
            <button
              onClick={nextThought}
              className="mt-2 text-[11px] font-medium text-amber-800 hover:text-amber-950 flex items-center gap-1"
            >
              <span>Outro conselho do Beagle</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Quick Interactive Actions */}
          <div className="space-y-2">
            <button
              onClick={handleRandomRecipe}
              className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs active:scale-98"
            >
              <Dices className="w-4 h-4" />
              <span>Sugerir Receita Surpresa</span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('search-input');
                if (el) {
                  el.focus();
                  setIsOpen(false);
                }
              }}
              className="w-full py-2 px-4 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-50 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquareHeart className="w-3.5 h-3.5 text-stone-400" />
              <span>Buscar por Ingrediente da Sua Geladeira</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
