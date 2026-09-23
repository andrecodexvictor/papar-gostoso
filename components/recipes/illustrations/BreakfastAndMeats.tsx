import React from 'react';

/**
 * Photorealistic Vector Gastronomic Illustrations for Meats, Steaks & Breakfast
 * Compliant with:
 * - 0 0 800 800 coordinate scale
 * - Multi-stop gradients (4-5 color stops)
 * - Specular highlights (0.6-0.9 opacity paths, 1.0 hot spots)
 * - feTurbulence meat sear filters & liquid glazes
 */

export function LunchSteakIllustration() {
  return (
    <g id="lunch-steak-picanha">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Rustic Cast Iron / Slate Steak Platter */}
      <ellipse cx="400" cy="650" rx="300" ry="70" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="280" ry="60" fill="url(#slatePlateGrad)" />

      {/* Hero Steak Cut (Bife Alto de Picanha / Ancho com Crosta de Brasa e Ponto Rosado) */}
      <g id="steak-meat" transform="translate(400, 500)">
        {/* Pooling Meat Juices on the Platter (Suco da Carne Suculento Brilhante) */}
        <ellipse cx="0" cy="85" rx="210" ry="45" fill="url(#meatJusPoolGrad)" opacity="0.8" />
        <ellipse cx="60" cy="80" rx="80" ry="15" fill="#FFFFFF" opacity="0.3" />

        {/* Steak Body with Natural Marbling & Sear Filter */}
        <path
          d="M-180 50 C-200 -20 -150 -70 -50 -75 C50 -80 180 -50 190 20 C200 80 120 100 0 100 C-120 100 -160 90 -180 50 Z"
          fill="url(#steakSearGrad)"
          filter="url(#meatSearNoise)"
        />

        {/* Juicy Pink Rare Center Exposed Cut Angle */}
        <path
          d="M-140 40 C-150 -10 -100 -40 -30 -45 C40 -50 140 -20 150 20 C140 60 80 75 0 75 C-80 75 -120 65 -140 40 Z"
          fill="url(#steakPinkMediumGrad)"
        />

        {/* Characteristic Diamond/Crosshatch Charcoal Grill Marks (Marcas de Grelha em Xadrez) */}
        <g stroke="#18181B" strokeWidth="6" strokeLinecap="round" opacity="0.85">
          <line x1="-120" y1="-30" x2="-40" y2="60" />
          <line x1="-70" y1="-50" x2="20" y2="65" />
          <line x1="-10" y1="-55" x2="80" y2="60" />
          <line x1="50" y1="-45" x2="130" y2="40" />

          <line x1="120" y1="-20" x2="30" y2="65" />
          <line x1="70" y1="-45" x2="-30" y2="65" />
          <line x1="10" y1="-55" x2="-80" y2="55" />
          <line x1="-50" y1="-50" x2="-130" y2="30" />
        </g>

        {/* Melting Herb Garlic Butter Dollop on Top (Nóz de Manteiga de Ervas Derretendo) */}
        <g id="herb-butter-melting" transform="translate(0, -10)">
          {/* Melting Butter Pool spreading over steak */}
          <ellipse cx="0" cy="15" rx="55" ry="25" fill="url(#meltedButterPoolGrad)" />
          <ellipse cx="-10" cy="12" rx="30" ry="12" fill="#FFFFFF" opacity="0.6" />

          {/* Butter Cube Body */}
          <rect x="-25" y="-20" width="50" height="35" rx="8" fill="url(#butterCubeGrad)" />
          {/* Chopped fresh rosemary & thyme specks in butter */}
          <circle cx="-12" cy="-8" r="2.5" fill="#15803D" />
          <circle cx="8" cy="-5" r="2.5" fill="#15803D" />
          <circle cx="2" cy="5" r="2" fill="#15803D" />
          {/* Butter Specular Glaze */}
          <path d="M-18 -15 L18 -15" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
          <circle cx="-6" cy="-16" r="2" fill="#FFFFFF" opacity="1" />
        </g>

        {/* Flakes of Maldon Sea Salt & Cracked Black Pepper (Sal Grosso de Parrilla) */}
        <g fill="#FFFFFF" opacity="0.95">
          <polygon points="-80,0 -76,-5 -72,0 -76,5" />
          <polygon points="-40,-25 -36,-30 -32,-25 -36,-20" />
          <polygon points="60,-15 64,-20 68,-15 64,-10" />
          <polygon points="90,15 94,10 98,15 94,20" />
        </g>

        {/* Meat Juices Specular Sheen (Reflexos Líquidos da Gordura Quente) */}
        <path
          d="M-100 20 Q0 -5 100 15"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
        <circle cx="-40" cy="12" r="3.5" fill="#FFFFFF" opacity="1" />
        <circle cx="50" cy="18" r="3.5" fill="#FFFFFF" opacity="1" />
      </g>
    </g>
  );
}

export function BreakfastEggsIllustration() {
  return (
    <g id="breakfast-eggs-bacon">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />
      <ellipse cx="400" cy="650" rx="290" ry="65" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="270" ry="55" fill="url(#plateCeramicGrad)" />

      {/* Two Sunny-Side Farmhouse Eggs with Wavy Smoked Bacon Strips */}
      <g id="eggs-pan" transform="translate(400, 510)">
        {/* Crispy Bacon Strip 1 (Tira de Bacon Defumada Ondulada e Crocante) */}
        <g transform="translate(80, -30) rotate(25)">
          <path
            d="M-120 0 Q-80 -25 -40 0 Q0 25 40 0 Q80 -25 120 0 L120 25 Q80 0 40 25 Q0 0 -40 25 Q-80 0 -120 25 Z"
            fill="url(#baconMeatGrad)"
            filter="url(#meatSearNoise)"
          />
          {/* Bacon fat strip */}
          <path
            d="M-110 8 Q-75 -15 -40 8 Q0 30 40 8 Q75 -15 110 8"
            stroke="url(#baconFatGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          {/* Bacon Gloss */}
          <path d="M-80 -5 Q-40 15 0 -5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
          <circle cx="-40" cy="4" r="2" fill="#FFFFFF" opacity="1" />
        </g>

        {/* Crispy Bacon Strip 2 */}
        <g transform="translate(-80, 50) rotate(-15)">
          <path
            d="M-110 0 Q-70 -20 -30 0 Q10 20 50 0 Q90 -20 120 0 L120 22 Q90 0 50 22 Q10 0 -30 22 Q-70 0 -110 22 Z"
            fill="url(#baconMeatGrad)"
            filter="url(#meatSearNoise)"
          />
          <path
            d="M-100 7 Q-65 -12 -30 7 Q10 27 50 7 Q85 -12 110 7"
            stroke="url(#baconFatGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Egg 1 (Left Sunny Side Up) */}
        <g id="egg-1" transform="translate(-70, -20)">
          {/* Egg White with golden lacy ruffled edges */}
          <path
            d="M-105 10 C-115 -40 -60 -80 0 -80 C70 -80 110 -30 100 20 C90 70 30 85 -20 80 C-75 75 -100 50 -105 10 Z"
            fill="url(#eggWhiteGrad)"
          />
          <path
            d="M-100 15 Q-50 82 0 78 Q60 82 95 18"
            stroke="#B45309"
            strokeWidth="4"
            fill="none"
            opacity="0.8"
          />

          {/* Plump Liquid Golden-Orange Yolk */}
          <circle cx="-10" cy="-5" r="42" fill="url(#eggYolkGrad)" />
          {/* Specular Wet Shine on Yolk */}
          <path
            d="M-30 -25 Q-10 -35 15 -22"
            stroke="#FFFFFF"
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
          <circle cx="-16" cy="-27" r="3.5" fill="#FFFFFF" opacity="1" />
          <circle cx="10" cy="-22" r="3" fill="#FFFFFF" opacity="1" />
        </g>

        {/* Egg 2 (Right Sunny Side Up) */}
        <g id="egg-2" transform="translate(60, 20)">
          <path
            d="M-90 10 C-100 -35 -50 -70 0 -70 C60 -70 95 -25 90 20 C80 60 25 75 -15 70 C-65 65 -85 45 -90 10 Z"
            fill="url(#eggWhiteGrad)"
          />
          <circle cx="5" cy="0" r="38" fill="url(#eggYolkGrad)" />
          <path
            d="M-12 -18 Q5 -28 22 -16"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
          <circle cx="0" cy="-21" r="3" fill="#FFFFFF" opacity="1" />
        </g>

        {/* Fresh Ground Black Pepper & Chive Rings */}
        <g fill="#18181B">
          <circle cx="-40" cy="15" r="1.5" />
          <circle cx="20" cy="-10" r="1.5" />
          <circle cx="80" cy="10" r="1.5" />
        </g>
        <g stroke="#15803D" strokeWidth="2.5" fill="none">
          <circle cx="-25" cy="30" r="4" />
          <circle cx="45" cy="-25" r="4" />
        </g>
      </g>
    </g>
  );
}

export function BreakfastPancakeIllustration() {
  return (
    <g id="breakfast-pancake-stack">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />
      <ellipse cx="400" cy="650" rx="280" ry="65" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="260" ry="55" fill="url(#plateCeramicGrad)" />

      {/* Fluffy Triple Stack of American Golden Pancakes */}
      <g id="pancake-stack" transform="translate(400, 480)">
        {/* Shadow under bottom pancake */}
        <ellipse cx="0" cy="125" rx="190" ry="38" fill="#1C1917" opacity="0.45" />

        {/* Pancake 1 (Bottom) */}
        <path
          d="M-180 80 C-190 105 -130 130 0 130 C130 130 190 105 180 80 C170 55 120 50 0 50 C-120 50 -170 55 -180 80 Z"
          fill="url(#pancakeGrad)"
          filter="url(#foodPorousNoise)"
        />

        {/* Pancake 2 (Middle) */}
        <path
          d="M-175 35 C-185 60 -125 85 0 85 C125 85 185 60 175 35 C165 10 115 5 0 5 C-115 5 -165 10 -175 35 Z"
          fill="url(#pancakeGrad)"
          filter="url(#foodPorousNoise)"
        />

        {/* Pancake 3 (Top Hero Pancake) */}
        <path
          d="M-170 -10 C-180 15 -120 40 0 40 C120 40 180 15 170 -10 C160 -35 110 -50 0 -50 C-110 -50 -160 -35 -170 -10 Z"
          fill="url(#pancakeTopGrad)"
          filter="url(#foodPorousNoise)"
        />
        {/* Golden Brown Butter Sear Ring on Top */}
        <ellipse cx="0" cy="-10" rx="130" ry="30" fill="url(#pancakeSearRingGrad)" opacity="0.8" />

        {/* Cascading Amber Maple Syrup (Xarope de Bordo Brilhante Escorrendo) */}
        <g id="maple-syrup-drips">
          {/* Main pool on top */}
          <ellipse cx="0" cy="-5" rx="110" ry="25" fill="url(#mapleSyrupGrad)" opacity="0.9" />

          {/* Drip 1: Front center waterfall */}
          <path
            d="M-25 15 C-20 45 -10 70 -15 95 C-18 110 -8 120 0 125 C8 120 0 105 -2 90 C-4 70 5 45 10 15 Z"
            fill="url(#mapleSyrupGrad)"
          />
          <path d="M-10 25 L-12 105" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
          <circle cx="-8" cy="115" r="2.5" fill="#FFFFFF" opacity="1" />

          {/* Drip 2: Right cascade */}
          <path
            d="M80 5 C85 35 95 60 90 85 C88 98 98 105 105 108 C108 103 102 90 102 78 C105 55 98 30 95 5 Z"
            fill="url(#mapleSyrupGrad)"
          />
          <path d="M92 15 L95 85" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        </g>

        {/* Golden Butter Cube Melting on Top */}
        <g id="butter-cube" transform="translate(0, -35)">
          <rect x="-22" y="-20" width="44" height="30" rx="6" fill="url(#butterCubeGrad)" />
          {/* Butter Specular Highlight */}
          <path d="M-16 -14 L16 -14" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          <circle cx="-6" cy="-15" r="2" fill="#FFFFFF" opacity="1" />
        </g>

        {/* Fresh Blueberries Garnish (Mirtilos Frescos) */}
        <g id="blueberries">
          {[
            { cx: -60, cy: -20, r: 14 },
            { cx: -80, cy: 0, r: 13 },
            { cx: 50, cy: -25, r: 15 },
          ].map((b, i) => (
            <g key={i}>
              <circle cx={b.cx} cy={b.cy} r={b.r} fill="url(#blueberryGrad)" />
              {/* Star calyx */}
              <circle cx={b.cx} cy={b.cy - 2} r={b.r * 0.3} fill="#1E1B4B" />
              {/* Specular shine */}
              <circle cx={b.cx - 3} cy={b.cy - 4} r="2.5" fill="#FFFFFF" opacity="0.9" />
            </g>
          ))}
        </g>
      </g>
    </g>
  );
}
