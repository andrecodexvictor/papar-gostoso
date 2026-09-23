'use client';

import React from 'react';

interface BeagleChefEmblemProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'seal' | 'badge' | 'ribbon';
  className?: string;
  showText?: boolean;
}

export default function BeagleChefEmblem({
  size = 'sm',
  variant = 'seal',
  className = '',
  showText = true,
}: BeagleChefEmblemProps) {
  const sizeConfig = {
    xs: { iconSize: 'w-5 h-5', textSize: 'text-[9px]', pad: 'px-2 py-0.5' },
    sm: { iconSize: 'w-7 h-7', textSize: 'text-[10px]', pad: 'px-2.5 py-1' },
    md: { iconSize: 'w-10 h-10', textSize: 'text-xs', pad: 'px-3.5 py-1.5' },
    lg: { iconSize: 'w-14 h-14', textSize: 'text-sm', pad: 'px-4 py-2' },
  }[size];

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-amber-50/95 via-amber-100/90 to-amber-50/95 border border-amber-300/80 text-amber-950 shadow-xs backdrop-blur-md transition-all hover:scale-105 hover:shadow-md select-none ${sizeConfig.pad} ${className}`}
      title="Selo Oficial Beagle Chefe: Receita 100% Testada & Aprovada pela Nika"
    >
      {/* Golden Minted Beagle Chef Icon */}
      <div className={`shrink-0 ${sizeConfig.iconSize}`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xs">
          <defs>
            <linearGradient id="emblemGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="35%" stopColor="#F59E0B" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            <radialGradient id="emblemGlow" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#FDE68A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#B45309" stopOpacity="0.8" />
            </radialGradient>
            <linearGradient id="beagleEar" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A16207" />
              <stop offset="100%" stopColor="#582900" />
            </linearGradient>
          </defs>

          {/* Outer Coin Edge with serrated culinary stamp teeth */}
          <circle cx="50" cy="50" r="47" fill="url(#emblemGoldGrad)" />
          <circle cx="50" cy="50" r="42" fill="#FFFBEB" stroke="#B45309" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="40" fill="url(#emblemGlow)" opacity="0.35" />

          {/* Dotted Inner Ring */}
          <circle cx="50" cy="50" r="37" fill="none" stroke="#92400E" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

          {/* Chef Hat Top */}
          <path
            d="M38 32 C34 26 40 18 46 22 C48 16 56 16 58 22 C64 18 68 26 64 32 Z"
            fill="#FFFFFF"
            stroke="#B45309"
            strokeWidth="1.2"
          />
          <rect x="39" y="31" width="24" height="4" rx="1.5" fill="#FFFFFF" stroke="#B45309" strokeWidth="1.2" />

          {/* Beagle Mascot Face */}
          {/* Left Ear */}
          <path d="M29 42 C24 48 20 60 22 70 C24 75 28 76 32 72 C36 67 37 54 36 46 Z" fill="url(#beagleEar)" />
          {/* Right Ear */}
          <path d="M71 42 C76 48 80 60 78 70 C76 75 72 76 68 72 C64 67 63 54 64 46 Z" fill="url(#beagleEar)" />

          {/* Head */}
          <ellipse cx="50" cy="52" rx="20" ry="18" fill="#CA8A04" />
          {/* White Snout */}
          <path d="M46 38 C46 38 48 37 50 37 C52 37 54 38 54 38 C52 44 51 49 54 52 C57 53 62 57 62 62 C62 68 57 71 50 71 C43 71 38 68 38 62 C38 57 43 53 46 52 C49 49 48 44 46 38 Z" fill="#FFFFFF" />

          {/* Cheerful Eyes */}
          <circle cx="43" cy="50" r="3.2" fill="#18181B" />
          <circle cx="42" cy="49" r="1.1" fill="#FFFFFF" />
          <circle cx="57" cy="50" r="3.2" fill="#18181B" />
          <circle cx="56" cy="49" r="1.1" fill="#FFFFFF" />

          {/* Little Black Nose */}
          <path d="M47 57 C47 55 50 54 50 54 C50 54 53 55 53 57 C53 60 51 61 50 61 C49 61 47 60 47 57 Z" fill="#18181B" />
          {/* Happy Mouth */}
          <path d="M46 62 Q50 65 54 62" stroke="#18181B" strokeWidth="1" strokeLinecap="round" fill="none" />

          {/* 3 Gold Stars at bottom */}
          <g fill="#B45309" transform="translate(0, 10)">
            <path d="M50 72 L51 74 L53 74 L51.5 75 L52 77 L50 75.8 L48 77 L48.5 75 L47 74 L49 74 Z" />
            <path d="M40 73 L40.8 74.5 L42.5 74.5 L41.2 75.3 L41.6 77 L40 76 L38.4 77 L38.8 75.3 L37.5 74.5 L39.2 74.5 Z" />
            <path d="M60 73 L60.8 74.5 L62.5 74.5 L61.2 75.3 L61.6 77 L60 76 L58.4 77 L58.8 75.3 L57.5 74.5 L59.2 74.5 Z" />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`${sizeConfig.textSize} font-black tracking-wider uppercase text-amber-900 font-serif`}>
            Selo Beagle Chefe
          </span>
          <span className="text-[8px] font-bold text-amber-700/90 tracking-tight">
            Aprovado pela Nika
          </span>
        </div>
      )}
    </div>
  );
}
