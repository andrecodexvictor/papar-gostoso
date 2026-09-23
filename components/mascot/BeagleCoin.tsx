'use client';

import React from 'react';

interface BeagleCoinProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  animate?: boolean;
  animated?: boolean;
  withSparkle?: boolean;
  mood?: 'happy' | 'chef' | 'wink';
}

const sizeMap = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-20 h-20',
  xl: 'w-32 h-32',
  hero: 'w-44 h-44 md:w-56 md:h-56',
};

export default function BeagleCoin({
  size = 'md',
  className = '',
  animate = true,
  animated,
  withSparkle = true,
  mood = 'chef',
}: BeagleCoinProps) {
  const isAnimated = animated !== undefined ? animated : animate;
  const sizeClass = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${sizeClass} ${className} ${
        isAnimated ? 'transition-transform duration-300 hover:scale-105 hover:rotate-1' : ''
      }`}
      title="Mascote Papá Gostoso: O Beagle na Moeda de Ouro"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          {/* Metallic Gold Gradients */}
          <linearGradient id="coinEdgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="25%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="75%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          <linearGradient id="coinFaceGrad" x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="40%" stopColor="#FDE68A" />
            <stop offset="70%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <radialGradient id="coinInnerGlow" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#FCD34D" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#92400E" stopOpacity="0.6" />
          </radialGradient>

          <linearGradient id="beagleEarBrown" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#854D0E" />
            <stop offset="40%" stopColor="#A16207" />
            <stop offset="100%" stopColor="#582900" />
          </linearGradient>

          <linearGradient id="beagleFurTan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CA8A04" />
            <stop offset="60%" stopColor="#A16207" />
            <stop offset="100%" stopColor="#713F12" />
          </linearGradient>

          <linearGradient id="coinSheen" x1="0%" y1="0%" x2="100%" y2="30%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#451A03" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Outer coin ribbed rim */}
        <circle cx="100" cy="100" r="96" fill="url(#coinEdgeGrad)" />
        
        {/* Subtle Coin Edge Ridges / Milling */}
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="#78350F"
          strokeWidth="1.5"
          strokeDasharray="2 3"
          opacity="0.6"
        />

        {/* Stepped Coin Rim */}
        <circle cx="100" cy="100" r="88" fill="url(#coinFaceGrad)" />
        <circle cx="100" cy="100" r="88" fill="url(#coinInnerGlow)" />

        {/* Decorative inner dotted border */}
        <circle
          cx="100"
          cy="100"
          r="81"
          fill="none"
          stroke="#78350F"
          strokeWidth="2"
          strokeDasharray="4 4"
          opacity="0.45"
        />

        {/* Minted Stars on Coin Rim */}
        <g fill="#92400E" opacity="0.75">
          <path d="M100 18 L101.5 22 L106 22 L102.5 24.5 L104 29 L100 26.5 L96 29 L97.5 24.5 L94 22 L98.5 22 Z" transform="scale(0.8) translate(25, 0)" />
          <path d="M26 100 L28 103 L32 103 L29 105 L30.5 109 L27 107 L23.5 109 L25 105 L22 103 L26 103 Z" transform="scale(0.65) translate(12, 50)" />
          <path d="M174 100 L176 103 L180 103 L177 105 L178.5 109 L175 107 L171.5 109 L173 105 L170 103 L174 103 Z" transform="scale(0.65) translate(88, 50)" />
        </g>

        {/* Coin Inner Pedestal Circle */}
        <circle cx="100" cy="100" r="74" fill="#FFFBEB" stroke="#B45309" strokeWidth="2.5" />

        {/* Subtle Kitchen/Gourmet Laurel Leaves on bottom rim */}
        <g stroke="#B45309" strokeWidth="1.5" fill="#FDE68A" opacity="0.6">
          <path d="M50 148 Q60 162 76 166 Q66 158 64 148 Z" />
          <path d="M150 148 Q140 162 124 166 Q134 158 136 148 Z" />
          <path d="M72 165 Q85 173 100 174 Q88 168 82 160 Z" />
          <path d="M128 165 Q115 173 100 174 Q112 168 118 160 Z" />
        </g>

        {/* ================= MASCOT: ADORABLE BEAGLE ================= */}
        <g id="beagle-mascot" filter="url(#softShadow)">
          {/* Beagle Left Floppy Ear (Soft Tri-Color) */}
          <path
            d="M58 84 C48 94 40 114 43 134 C45 146 54 150 63 144 C72 136 76 112 73 95 Z"
            fill="url(#beagleEarBrown)"
          />
          {/* Ear Inner Shadow */}
          <path
            d="M50 100 C45 115 47 132 54 141 C57 143 62 140 65 133 C67 122 66 108 63 98 Z"
            fill="#582900"
            opacity="0.3"
          />

          {/* Beagle Right Floppy Ear */}
          <path
            d="M142 84 C152 94 160 114 157 134 C155 146 146 150 137 144 C128 136 124 112 127 95 Z"
            fill="url(#beagleEarBrown)"
          />
          {/* Right Ear Shadow */}
          <path
            d="M150 100 C155 115 153 132 146 141 C143 143 138 140 135 133 C133 122 134 108 137 98 Z"
            fill="#582900"
            opacity="0.3"
          />

          {/* Beagle Head (Classic Tan Profile) */}
          <ellipse cx="100" cy="100" rx="42" ry="38" fill="url(#beagleFurTan)" />

          {/* White Beagle Blaze & Snout Pattern (White Muzzle) */}
          <path
            d="M93 72 C93 72 97 70 100 70 C103 70 107 72 107 72 C104 82 103 91 107 98 C113 100 125 106 125 118 C125 131 113 137 100 137 C87 137 75 131 75 118 C75 106 87 100 93 98 C97 91 96 82 93 72 Z"
            fill="#FFFFFF"
          />

          {/* Cute Pink Cheeks */}
          <circle cx="80" cy="116" r="6" fill="#FDA4AF" opacity="0.6" />
          <circle cx="120" cy="116" r="6" fill="#FDA4AF" opacity="0.6" />

          {/* Beagle Big Warm Eyes */}
          {mood === 'wink' ? (
            <>
              {/* Left Eye: Winking Smile */}
              <path d="M80 97 Q86 91 92 97" stroke="#1F2937" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              {/* Right Eye: Big Sparkly Eye */}
              <circle cx="114" cy="96" r="7.5" fill="#1F2937" />
              <circle cx="112" cy="94" r="2.8" fill="#FFFFFF" />
              <circle cx="116" cy="98" r="1.2" fill="#FFFFFF" />
            </>
          ) : (
            <>
              {/* Left Eye */}
              <circle cx="86" cy="96" r="7.5" fill="#1F2937" />
              <circle cx="84" cy="94" r="2.8" fill="#FFFFFF" />
              <circle cx="88" cy="98" r="1.2" fill="#FFFFFF" />

              {/* Right Eye */}
              <circle cx="114" cy="96" r="7.5" fill="#1F2937" />
              <circle cx="112" cy="94" r="2.8" fill="#FFFFFF" />
              <circle cx="116" cy="98" r="1.2" fill="#FFFFFF" />
            </>
          )}

          {/* Cute Eyebrow markings (classic beagle tan dots) */}
          <ellipse cx="85" cy="86" rx="3.5" ry="2" fill="#CA8A04" />
          <ellipse cx="115" cy="86" rx="3.5" ry="2" fill="#CA8A04" />

          {/* Beagle Black Nose */}
          <path
            d="M93 110 C93 107 100 106 100 106 C100 106 107 107 107 110 C107 115 104 117 100 117 C96 117 93 115 93 110 Z"
            fill="#18181B"
          />
          {/* Nose shine */}
          <ellipse cx="98" cy="109" rx="2" ry="1.2" fill="#9CA3AF" />

          {/* Snout Line & Cheerful Mouth */}
          <path d="M100 117 L100 123" stroke="#18181B" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M91 122 Q100 128 109 122"
            stroke="#18181B"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Happy little pink tongue peeking */}
          <path
            d="M97 124 Q100 130 103 124 Z"
            fill="#F43F5E"
            stroke="#9F1239"
            strokeWidth="0.8"
          />

          {/* Whisker dots */}
          <circle cx="89" cy="119" r="0.9" fill="#71717A" />
          <circle cx="86" cy="120" r="0.9" fill="#71717A" />
          <circle cx="111" cy="119" r="0.9" fill="#71717A" />
          <circle cx="114" cy="120" r="0.9" fill="#71717A" />

          {/* Chef Toque (Hat) - Puffed and Chef-approved */}
          {mood === 'chef' && (
            <g id="chef-hat" transform="translate(0, -6)">
              {/* Hat Puffs */}
              <path
                d="M83 62 C78 52 86 42 96 46 C100 40 112 40 115 48 C124 45 130 55 125 64 Z"
                fill="#FFFFFF"
                stroke="#E5E7EB"
                strokeWidth="1.2"
              />
              <path
                d="M93 45 C98 38 108 38 112 45"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="1"
              />
              {/* Hat Band with golden trim */}
              <path
                d="M86 63 L122 63 L120 69 L88 69 Z"
                fill="#FEF3C7"
                stroke="#D97706"
                strokeWidth="1"
              />
              <circle cx="104" cy="66" r="1.5" fill="#B45309" />
            </g>
          )}

          {/* Cute Little Chef Bandana / Collar */}
          <path
            d="M86 136 Q100 144 114 136 L108 147 Q100 151 92 147 Z"
            fill="#DC2626"
            stroke="#991B1B"
            strokeWidth="1.2"
          />
          <circle cx="100" cy="142" r="2" fill="#FBBF24" />

          {/* Beagle's Friendly Little White Paw resting over the rim */}
          <g transform="translate(100, 154)">
            <ellipse cx="0" cy="0" rx="14" ry="9" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.2" />
            {/* Paw pads */}
            <circle cx="-6" cy="-2" r="2.5" fill="#FDA4AF" opacity="0.8" />
            <circle cx="0" cy="-4" r="2.5" fill="#FDA4AF" opacity="0.8" />
            <circle cx="6" cy="-2" r="2.5" fill="#FDA4AF" opacity="0.8" />
            <ellipse cx="0" cy="2" rx="4.5" ry="3" fill="#FDA4AF" opacity="0.8" />
          </g>
        </g>

        {/* Text "PAPÁ GOSTOSO" around top arch */}
        <path
          id="topTextPath"
          d="M 36 100 A 64 64 0 0 1 164 100"
          fill="none"
        />
        <text
          fontSize="11"
          fontWeight="bold"
          fill="#78350F"
          letterSpacing="2.5"
          opacity="0.85"
        >
          <textPath href="#topTextPath" startOffset="50%" textAnchor="middle">
            PAPÁ GOSTOSO
          </textPath>
        </text>

        {/* Diagonal Light Sheen across Coin for realistic mint shine */}
        <path
          d="M30 30 Q100 0 170 30 Q130 90 80 150 Q20 110 30 30 Z"
          fill="url(#coinSheen)"
          clipPath="circle(94px at 100px 100px)"
          pointerEvents="none"
        />
      </svg>

      {/* Optional Sparkle / Glow */}
      {withSparkle && (
        <span
          className="absolute -top-1 -right-1 pointer-events-none text-amber-400 opacity-90 animate-pulse text-xs"
          aria-hidden="true"
        >
          ✨
        </span>
      )}
    </div>
  );
}
