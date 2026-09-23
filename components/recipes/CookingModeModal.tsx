'use client';

import React, { useState, useEffect } from 'react';
import { Recipe } from '@/types/recipe';
import BeagleCoin from '../mascot/BeagleCoin';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Volume2,
} from 'lucide-react';

interface CookingModeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export default function CookingModeModal({ recipe, onClose }: CookingModeModalProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = recipe.steps[currentStepIndex];
  const isLastStep = currentStepIndex === recipe.steps.length - 1;

  // Timer state for steps that specify timerSeconds
  const [timeLeft, setTimeLeft] = useState<number>(currentStep?.timerSeconds || 0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Sound chime helper with Web Audio API (no external file dependency)
  const playChime = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch {
      // Audio context might be restricted before interaction
    }
  };

  const handleStepChange = (newIndex: number) => {
    setCurrentStepIndex(newIndex);
    setIsTimerRunning(false);
    setTimeLeft(recipe.steps[newIndex]?.timerSeconds || 0);
  };

  // Interval for countdown
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            playChime();
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timeLeft]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/90 backdrop-blur-md text-white animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl h-[90vh] max-h-[800px] flex flex-col justify-between bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto">
        {/* Top bar: recipe title + close */}
        <div className="flex items-center justify-between border-b border-stone-800 pb-4">
          <div className="flex items-center gap-3">
            <BeagleCoin size="sm" animated={false} />
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                Modo Cozinha · Papá Gostoso
              </div>
              <h2 className="text-sm font-medium text-stone-300 line-clamp-1">
                {recipe.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            title="Sair do Modo Cozinha"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Dots / Bar */}
        <div className="my-4">
          <div className="flex items-center justify-between text-xs text-stone-400 mb-2 font-medium">
            <span>Passo {currentStepIndex + 1} de {recipe.steps.length}</span>
            <span>{Math.round(((currentStepIndex + 1) / recipe.steps.length) * 100)}% concluído</span>
          </div>
          <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-amber-500 to-amber-400 transition-all duration-300 rounded-full"
              style={{
                width: `${((currentStepIndex + 1) / recipe.steps.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Main Step Content: Extra Large Readable Typography for kitchen distance */}
        <div className="flex-1 flex flex-col justify-center my-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 font-bold text-lg flex items-center justify-center">
              {currentStep.order}
            </span>
            {currentStep.title && (
              <h3 className="text-xl sm:text-2xl font-bold text-stone-100 tracking-tight">
                {currentStep.title}
              </h3>
            )}
          </div>

          <p className="text-xl sm:text-2xl text-stone-200 leading-relaxed font-normal">
            {currentStep.instruction}
          </p>

          {currentStep.tip && (
            <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-amber-200 text-sm flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>{currentStep.tip}</span>
            </div>
          )}

          {/* Step Timer if configured */}
          {currentStep.timerSeconds && (
            <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-amber-400" />
                <div>
                  <div className="text-xs text-stone-400 uppercase font-semibold tracking-wider">
                    Timer deste passo
                  </div>
                  <div className="text-3xl font-mono font-bold tracking-wider text-amber-300 tabular-nums">
                    {formatTimer(timeLeft)}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm flex items-center gap-2 transition-colors"
                >
                  {isTimerRunning ? (
                    <>
                      <Pause className="w-4 h-4" /> Pausar
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-stone-950" /> Iniciar
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    setTimeLeft(currentStep.timerSeconds || 0);
                  }}
                  className="p-2 rounded-xl text-stone-400 hover:text-stone-200 hover:bg-stone-700/60 transition-colors"
                  title="Reiniciar Timer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={playChime}
                  className="p-2 rounded-xl text-stone-400 hover:text-stone-200 hover:bg-stone-700/60 transition-colors"
                  title="Testar som do alarme"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation Controls */}
        <div className="flex items-center justify-between border-t border-stone-800 pt-6">
          <button
            onClick={() => handleStepChange(Math.max(0, currentStepIndex - 1))}
            disabled={currentStepIndex === 0}
            className="px-5 py-2.5 rounded-xl border border-stone-700 text-stone-300 hover:bg-stone-800 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-2 text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          {isLastStep ? (
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-lg"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Finalizar Preparo!</span>
            </button>
          ) : (
            <button
              onClick={() =>
                handleStepChange(
                  Math.min(recipe.steps.length - 1, currentStepIndex + 1)
                )
              }
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm flex items-center gap-2 transition-all shadow-lg active:scale-98"
            >
              <span>Próximo Passo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
