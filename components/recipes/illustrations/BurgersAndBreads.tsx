import React from 'react';

/**
 * Photorealistic Vector Gastronomic Illustrations for Burgers & Breads
 * Fulfills all 5 photographic vector guidelines:
 * 1. 0 0 800 800 definition
 * 2. feTurbulence porosity filters for buns, meats, fried chicken
 * 3. Specular highlights (opacity 0.6-0.9 paths & 1.0 hot spots) for sauces, melted cheese, glazes
 * 4. Multi-stop gradients (4-5 color stops) with realistic occlusion shadows
 * 5. Organic fluid drips and imperfect natural silhouettes
 */

export function BurgerClassicIllustration() {
  return (
    <g id="burger-classic-smash">
      {/* Table & Burger Shadow */}
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Gourmet Matte Slate Platter */}
      <ellipse cx="400" cy="650" rx="300" ry="70" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="280" ry="60" fill="url(#slatePlateGrad)" />

      {/* Smash Burger Stack */}
      <g id="burger-layers" transform="translate(400, 420)">
        {/* Shadow under bottom bun */}
        <ellipse cx="0" cy="220" rx="200" ry="40" fill="#0C0A09" opacity="0.5" />

        {/* 1. BOTTOM BUN (Pão com Crosta Dourada e Miolo Macio) */}
        <path
          d="M-190 140 C-200 175 -160 220 0 220 C160 220 200 175 190 140 C190 130 150 120 0 120 C-150 120 -190 130 -190 140 Z"
          fill="url(#bunBottomGrad)"
          filter="url(#foodPorousNoise)"
        />
        <path
          d="M-180 135 C-140 125 0 125 180 135 C170 155 120 175 0 175 C-120 175 -170 155 -180 135 Z"
          fill="url(#bunCrumbGrad)"
        />

        {/* Special House Sauce & Pickles on Bottom Bun */}
        <path
          d="M-150 130 C-90 140 -20 120 30 135 C80 145 140 130 160 135 C140 145 80 150 0 150 C-80 150 -130 140 -150 130 Z"
          fill="url(#specialSauceGrad)"
        />
        {/* Pickles slices with ridges and seeds */}
        <g transform="translate(-80, 130) rotate(-10)">
          <ellipse cx="0" cy="0" rx="40" ry="16" fill="url(#pickleGrad)" />
          <ellipse cx="0" cy="-1" rx="32" ry="11" fill="url(#pickleCoreGrad)" />
          <circle cx="-12" cy="0" r="2" fill="#FEF08A" opacity="0.8" />
          <circle cx="8" cy="-2" r="2" fill="#FEF08A" opacity="0.8" />
          <path d="M-25 -5 Q0 -10 25 -5" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.7" />
        </g>
        <g transform="translate(80, 132) rotate(15)">
          <ellipse cx="0" cy="0" rx="38" ry="15" fill="url(#pickleGrad)" />
          <ellipse cx="0" cy="-1" rx="30" ry="10" fill="url(#pickleCoreGrad)" />
          <circle cx="-10" cy="-1" r="2" fill="#FEF08A" opacity="0.8" />
          <circle cx="10" cy="1" r="2" fill="#FEF08A" opacity="0.8" />
          <path d="M-20 -4 Q0 -8 20 -4" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.7" />
        </g>

        {/* 2. LOWER SMASH PATTY (Blend Bovino Alto Sear com Crosta de Maillard) */}
        <path
          d="M-220 110 C-225 80 -150 70 0 70 C150 70 225 80 220 110 C215 135 150 145 0 145 C-150 145 -215 135 -220 110 Z"
          fill="url(#pattyBeefGrad)"
          filter="url(#meatSearNoise)"
        />
        {/* Juicy Patty Edges with browned crispy lace */}
        <path
          d="M-220 110 Q-180 125 -140 115 Q-100 130 -40 120 Q20 132 80 122 Q140 130 190 118 Q215 125 220 110"
          stroke="#271106"
          strokeWidth="6"
          fill="none"
        />

        {/* 3. MELTED CHEDDAR CHEESE WATERFALL (Queijo Derretido em Cascata com Brilho) */}
        <g id="melted-cheddar-drips">
          {/* Main Cheese Sheet */}
          <path
            d="M-210 90 C-180 85 -90 75 0 75 C90 75 180 85 210 90 
               C205 110 190 130 180 155 C175 170 160 175 150 160 C145 140 140 100 130 95
               C110 95 95 130 85 180 C80 205 60 210 55 180 C50 145 45 100 30 95
               C10 95 -10 115 -20 150 C-25 175 -40 180 -45 155 C-50 125 -45 95 -70 95
               C-90 95 -110 135 -125 175 C-135 198 -155 195 -160 170 C-170 130 -185 105 -210 90 Z"
            fill="url(#cheddarMeltGrad)"
          />

          {/* Cheese Drip Depth Shadows */}
          <path
            d="M85 180 C80 205 60 210 55 180 C52 165 52 145 54 130"
            stroke="#92400E"
            strokeWidth="3"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M-125 175 C-135 198 -155 195 -160 170 C-165 150 -168 135 -168 120"
            stroke="#92400E"
            strokeWidth="3"
            fill="none"
            opacity="0.4"
          />

          {/* Specular Wet Highlights on Melted Cheese */}
          {/* Highlight along Drip 1 */}
          <path
            d="M84 130 C80 160 78 185 70 198"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          <circle cx="68" cy="202" r="3.5" fill="#FFFFFF" opacity="1" />

          {/* Highlight along Drip 2 */}
          <path
            d="M-130 120 C-135 150 -142 175 -150 188"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          <circle cx="-152" cy="191" r="3" fill="#FFFFFF" opacity="1" />

          {/* Highlight across Top Melt */}
          <path
            d="M-160 90 C-80 80 0 80 120 90"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            opacity="0.75"
          />
          <circle cx="-50" cy="84" r="4" fill="#FFFFFF" opacity="1" />
          <circle cx="40" cy="85" r="3.5" fill="#FFFFFF" opacity="1" />
        </g>

        {/* 4. UPPER SMASH PATTY (Segunda Carne com Crosta Smashed) */}
        <path
          d="M-215 50 C-220 20 -150 10 0 10 C150 10 220 20 215 50 C210 75 150 85 0 85 C-150 85 -210 75 -215 50 Z"
          fill="url(#pattyBeefGrad)"
          filter="url(#meatSearNoise)"
        />
        {/* Meat Juices Sheen */}
        <ellipse cx="60" cy="50" rx="40" ry="12" fill="#FFFFFF" opacity="0.3" />
        <circle cx="80" cy="48" r="3" fill="#FFFFFF" opacity="0.9" />

        {/* 5. SLICED RIPE TOMATOES (Fatias Suculenta de Tomate com Sementes Translúcidas) */}
        {/* Left Tomato Slice */}
        <g transform="translate(-90, 5) rotate(-5)">
          <ellipse cx="0" cy="0" rx="95" ry="32" fill="url(#tomatoSkinGrad)" />
          <ellipse cx="0" cy="-2" rx="88" ry="26" fill="url(#tomatoFleshGrad)" />
          {/* Seed Pockets with Gelatinous Greenish Core & Seeds */}
          <ellipse cx="-45" cy="-2" rx="20" ry="12" fill="url(#tomatoJellyGrad)" />
          <ellipse cx="40" cy="-2" rx="22" ry="12" fill="url(#tomatoJellyGrad)" />
          {/* Seeds */}
          <ellipse cx="-46" cy="-2" rx="5" ry="3" fill="#FEF08A" transform="rotate(15 -46 -2)" />
          <ellipse cx="38" cy="-2" rx="5" ry="3" fill="#FEF08A" transform="rotate(-20 38 -2)" />
          <ellipse cx="48" cy="0" rx="4" ry="2.5" fill="#FEF08A" />
          {/* Specular Highlight on Wet Cut Tomato Flesh */}
          <path d="M-60 -8 Q0 -18 60 -8" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.85" />
          <circle cx="-15" cy="-12" r="3" fill="#FFFFFF" opacity="1" />
          <circle cx="25" cy="-10" r="3.5" fill="#FFFFFF" opacity="1" />
        </g>

        {/* Right Tomato Slice Overlapping */}
        <g transform="translate(85, 8) rotate(6)">
          <ellipse cx="0" cy="0" rx="90" ry="30" fill="url(#tomatoSkinGrad)" />
          <ellipse cx="0" cy="-2" rx="84" ry="24" fill="url(#tomatoFleshGrad)" />
          <ellipse cx="-35" cy="-2" rx="18" ry="10" fill="url(#tomatoJellyGrad)" />
          <ellipse cx="35" cy="-2" rx="18" ry="10" fill="url(#tomatoJellyGrad)" />
          <ellipse cx="-35" cy="-2" rx="4.5" ry="2.5" fill="#FEF08A" />
          <ellipse cx="35" cy="-2" rx="4.5" ry="2.5" fill="#FEF08A" />
          <path d="M-50 -6 Q0 -14 50 -6" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8" />
          <circle cx="10" cy="-9" r="3" fill="#FFFFFF" opacity="1" />
        </g>

        {/* 6. CRISP RUFFLED GREEN LEAF LETTUCE (Folhas de Alface Crespa com Dobras Naturais) */}
        <g id="lettuce-layer">
          <path
            d="M-230 -10 
               C-245 -25 -220 -50 -190 -35 
               C-170 -60 -120 -55 -100 -30 
               C-80 -65 -30 -60 0 -35 
               C30 -60 80 -65 100 -30 
               C120 -55 170 -60 190 -35 
               C220 -50 245 -25 230 -10 
               C200 20 160 25 120 15 
               C80 25 0 25 -40 18 
               C-100 25 -180 20 -230 -10 Z"
            fill="url(#lettuceGrad)"
          />
          {/* Leaf Veins with Translucent Sunlight Green */}
          <path d="M-180 -25 Q-140 -35 -100 -25" stroke="#BBF7D0" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />
          <path d="M-80 -28 Q0 -40 80 -28" stroke="#BBF7D0" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85" />
          <path d="M100 -25 Q140 -35 180 -25" stroke="#BBF7D0" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8" />

          {/* Lettuce Droplets & Freshness Sheen */}
          <circle cx="-130" cy="-35" r="3" fill="#FFFFFF" opacity="0.85" />
          <circle cx="45" cy="-40" r="3.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="150" cy="-30" r="2.5" fill="#FFFFFF" opacity="0.8" />
        </g>

        {/* 7. TOP BRIOCHE BUN (Pão Brioche Alto, Dourado Amanteigado com Gergelim) */}
        <g id="top-bun">
          {/* Bun Shadow on Lettuce */}
          <ellipse cx="0" cy="-25" rx="195" ry="30" fill="#14532D" opacity="0.3" />

          {/* Bun Dome Volume */}
          <path
            d="M-205 -30 
               C-215 -180 -120 -250 0 -250 
               C120 -250 215 -180 205 -30 
               C200 5 130 15 0 15 
               C-130 15 -200 5 -205 -30 Z"
            fill="url(#bunTopGrad)"
            filter="url(#foodPorousNoise)"
          />

          {/* Deep Oven Baking Caramelization Zone (Aura de Assamento Perfeito) */}
          <path
            d="M-175 -60 
               C-185 -180 -90 -230 0 -230 
               C90 -230 185 -180 175 -60 
               C140 -40 70 -35 0 -35 
               C-70 -35 -140 -40 -175 -60 Z"
            fill="url(#bunBrowningGrad)"
            opacity="0.55"
          />

          {/* Butter Egg-Wash Gloss Sheen (Brilho Especular do Pincelado de Manteiga e Gema) */}
          <path
            d="M-130 -160 C-80 -220 0 -225 80 -195"
            stroke="#FFFFFF"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
            opacity="0.4"
            filter="url(#specularGlow)"
          />
          <path
            d="M-110 -175 C-70 -215 0 -220 60 -195"
            stroke="#FFFFFF"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          <circle cx="-50" cy="-205" r="5" fill="#FFFFFF" opacity="1" />
          <circle cx="10" cy="-208" r="4" fill="#FFFFFF" opacity="1" />

          {/* Toasted Sesame Seeds (Sementes de Gergelim com Volume 3D e Sombra) */}
          <g id="sesame-seeds">
            {[
              { x: -90, y: -130, rot: -30 },
              { x: -50, y: -170, rot: 15 },
              { x: 0, y: -185, rot: -10 },
              { x: 55, y: -165, rot: 25 },
              { x: 100, y: -125, rot: -20 },
              { x: -130, y: -90, rot: 45 },
              { x: 135, y: -80, rot: -35 },
              { x: -20, y: -130, rot: 30 },
              { x: 30, y: -140, rot: -15 },
              { x: 75, y: -110, rot: 40 },
              { x: -70, y: -100, rot: -15 },
              { x: 10, y: -105, rot: 10 },
            ].map((seed, i) => (
              <g key={i} transform={`translate(${seed.x}, ${seed.y}) rotate(${seed.rot})`}>
                {/* Seed drop shadow on bun */}
                <ellipse cx="1.5" cy="2" rx="5" ry="9" fill="#78350F" opacity="0.6" />
                {/* Seed body */}
                <ellipse cx="0" cy="0" rx="4.5" ry="8.5" fill="url(#sesameGrad)" />
                {/* Seed specular reflection */}
                <ellipse cx="-1" cy="-2" rx="1.5" ry="4" fill="#FFFFFF" opacity="0.85" />
              </g>
            ))}
          </g>
        </g>
      </g>
    </g>
  );
}

export function BurgerChickenIllustration() {
  return (
    <g id="burger-chicken-crispy">
      {/* Shadow */}
      <ellipse cx="400" cy="710" rx="300" ry="50" fill="url(#tableOcclusionShadow)" />
      <ellipse cx="400" cy="650" rx="290" ry="65" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="270" ry="55" fill="url(#plateCeramicGrad)" />

      {/* Crispy Chicken Burger Stack */}
      <g id="chicken-burger-layers" transform="translate(400, 430)">
        {/* Bottom Bun */}
        <path
          d="M-180 130 C-190 165 -150 200 0 200 C150 200 190 165 180 130 Z"
          fill="url(#bunBottomGrad)"
          filter="url(#foodPorousNoise)"
        />

        {/* Creamy Garlic Herb Mayo Spread */}
        <path
          d="M-150 120 Q0 140 150 120 Q120 145 0 145 Q-120 145 -150 120 Z"
          fill="url(#creamyMayoGrad)"
        />
        {/* Herb specks */}
        <circle cx="-60" cy="130" r="2" fill="#15803D" />
        <circle cx="20" cy="135" r="2" fill="#15803D" />
        <circle cx="80" cy="128" r="2" fill="#15803D" />

        {/* Thick Hand-Breaded Crunchy Fried Chicken Fillet (Peito de Frango Empanado no Panko Crocante) */}
        <g id="fried-chicken-patty">
          {/* Chicken Patty Volume with Jagged Craggy Edges */}
          <path
            d="M-210 60 
               C-225 30 -160 10 0 10 
               C160 10 225 30 210 60 
               C225 95 180 130 150 125 
               C110 135 70 120 0 130 
               C-70 120 -110 135 -150 125 
               C-180 130 -225 95 -210 60 Z"
            fill="url(#friedChickenGrad)"
            filter="url(#fineCrustNoise)"
          />

          {/* Crispy Golden Panko Shards (Flocos de Crosta Ultracrocante) */}
          <g fill="#FEF08A" opacity="0.9">
            {[-160, -120, -80, -40, 0, 40, 80, 120, 160].map((x, i) => (
              <React.Fragment key={i}>
                <polygon points={`${x} 50, ${x + 8} 42, ${x + 12} 55, ${x + 4} 60`} fill="#FDE047" />
                <polygon points={`${x - 15} 80, ${x - 5} 70, ${x} 85, ${x - 10} 90`} fill="#FEF08A" />
              </React.Fragment>
            ))}
          </g>

          {/* Deep Frying Amber/Mahogany Highlights */}
          <path
            d="M-180 50 C-100 20 100 20 180 50 C160 80 80 100 0 100 C-80 100 -160 80 -180 50 Z"
            fill="url(#friedChickenDarkGrad)"
            opacity="0.35"
          />

          {/* Oil Sheen on Golden Crust */}
          <path
            d="M-150 40 Q0 15 150 40"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            opacity="0.75"
          />
          <circle cx="-50" cy="30" r="3.5" fill="#FFFFFF" opacity="1" />
          <circle cx="60" cy="32" r="3.5" fill="#FFFFFF" opacity="1" />
        </g>

        {/* Mayo Drips Escaping the Chicken */}
        <path
          d="M-120 80 C-115 110 -105 130 -110 150 C-112 160 -122 160 -122 145 C-125 130 -130 110 -125 80 Z"
          fill="url(#creamyMayoGrad)"
        />
        <circle cx="-116" cy="152" r="2.5" fill="#FFFFFF" opacity="1" />

        {/* Crisp Pickles and Fresh Slaw */}
        <ellipse cx="-70" cy="0" rx="35" ry="14" fill="url(#pickleGrad)" />
        <ellipse cx="60" cy="5" rx="38" ry="15" fill="url(#pickleGrad)" />

        {/* Crisp Iceberg Lettuce Leaves */}
        <path
          d="M-200 -20 C-220 -40 -150 -55 0 -55 C150 -55 220 -40 200 -20 C180 5 120 10 0 10 C-120 10 -180 5 -200 -20 Z"
          fill="url(#lettuceGrad)"
        />

        {/* Glazed Brioche Top Bun */}
        <path
          d="M-195 -30 C-205 -180 -115 -240 0 -240 C115 -240 205 -180 195 -30 Z"
          fill="url(#bunTopGrad)"
          filter="url(#foodPorousNoise)"
        />
        {/* Butter Glaze Highlight */}
        <path
          d="M-120 -160 C-70 -205 0 -210 70 -185"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
        <circle cx="-40" cy="-195" r="4" fill="#FFFFFF" opacity="1" />
      </g>
    </g>
  );
}

export function BurgerJapaneseIllustration() {
  return (
    <g id="burger-japanese-hambagu">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="320" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Heavy Black Cast-Iron Skillet (Teppan Plate) with Wooden Trivet */}
      <ellipse cx="400" cy="650" rx="310" ry="75" fill="#78350F" />
      <ellipse cx="400" cy="640" rx="290" ry="65" fill="#18181B" />
      <ellipse cx="400" cy="630" rx="275" ry="55" fill="#27272A" />

      {/* 1. STEAMING GOHAN RICE BOWL (Tigela de Arroz Branco Japonês com Gergelim Preto) */}
      <g id="rice-bowl-side" transform="translate(560, 460)">
        {/* Bowl Shadow */}
        <ellipse cx="0" cy="110" rx="90" ry="25" fill="#09090B" opacity="0.5" />
        {/* Ceramic White Bowl Body */}
        <path d="M-85 40 C-85 110 85 110 85 40 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="3" />
        {/* Rice Mound */}
        <path
          d="M-80 40 C-85 -20 -30 -50 0 -50 C30 -50 85 -20 80 40 Z"
          fill="url(#gohanRiceGrad)"
          filter="url(#foodPorousNoise)"
        />
        {/* Rice Grains Definition */}
        <g fill="#FFFFFF" opacity="0.9">
          <ellipse cx="-30" cy="-20" rx="8" ry="4" transform="rotate(-15 -30 -20)" />
          <ellipse cx="10" cy="-35" rx="8" ry="4" transform="rotate(20 10 -35)" />
          <ellipse cx="40" cy="-15" rx="8" ry="4" transform="rotate(-30 40 -15)" />
          <ellipse cx="-10" cy="10" rx="9" ry="4.5" transform="rotate(10 -10 10)" />
          <ellipse cx="25" cy="5" rx="8.5" ry="4" transform="rotate(-15 25 5)" />
        </g>
        {/* Black Sesame Seeds (Kurogoma) */}
        <g fill="#18181B">
          <ellipse cx="-15" cy="-25" rx="2" ry="4" transform="rotate(25 -15 -25)" />
          <ellipse cx="20" cy="-20" rx="2" ry="4" transform="rotate(-35 20 -20)" />
          <ellipse cx="5" cy="-10" rx="2" ry="4" transform="rotate(15 5 -10)" />
        </g>
        {/* Steam */}
        <path d="M-10 -70 Q10 -110 -10 -150" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.4" filter="url(#steamBlur)" />
      </g>

      {/* 2. THE HERO HAMBAGU STEAK (Hambúrguer Japonês no Prato sem Pão com Demi-Glace) */}
      <g id="hambagu-meat" transform="translate(320, 520)">
        {/* Meat Shadow on Skillet */}
        <ellipse cx="0" cy="70" rx="160" ry="40" fill="#09090B" opacity="0.6" />

        {/* Thick Juicy Oval Hambagu Patty */}
        <path
          d="M-150 10 C-160 -40 -80 -80 0 -80 C80 -80 160 -40 150 10 C140 60 70 80 0 80 C-70 80 -140 60 -150 10 Z"
          fill="url(#hambaguMeatGrad)"
          filter="url(#meatSearNoise)"
        />

        {/* Luscious, Glossy Demi-Glace Gravy Glaze (Molho Demi-Glace Escuro e Espesso) */}
        <path
          d="M-135 5 C-145 -35 -70 -70 0 -70 C70 -70 145 -35 135 5 C125 45 60 65 0 65 C-60 65 -125 45 -135 5 Z"
          fill="url(#demiGlaceGrad)"
        />

        {/* Demi-Glace Drips Sizzling onto Cast Iron */}
        <path
          d="M-60 60 C-65 75 -50 85 -55 95 C-58 102 -68 100 -68 90 C-70 80 -75 70 -70 60 Z"
          fill="url(#demiGlaceGrad)"
        />
        <path
          d="M40 60 C45 78 55 88 50 100 C48 105 38 103 40 92 C42 82 35 70 35 60 Z"
          fill="url(#demiGlaceGrad)"
        />

        {/* Specular Liquid Highlights on the Demi-Glace */}
        <path
          d="M-90 -30 C-40 -60 40 -60 90 -30"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        <circle cx="-30" cy="-50" r="4.5" fill="#FFFFFF" opacity="1" />
        <circle cx="40" cy="-48" r="4" fill="#FFFFFF" opacity="1" />
        <circle cx="-56" cy="96" r="2.5" fill="#FFFFFF" opacity="1" />

        {/* Perfect Fried Egg on Top (Tamago com Gema Dourada Mole e Clara Rendada) */}
        <g id="sunny-egg-topping" transform="translate(0, -30)">
          {/* Egg White with Crispy Golden Edges */}
          <path
            d="M-85 10 C-95 -25 -50 -50 0 -50 C50 -50 95 -25 85 10 C75 40 40 45 0 45 C-40 45 -75 40 -85 10 Z"
            fill="url(#eggWhiteGrad)"
          />
          {/* Crispy browned bottom edge of egg */}
          <path
            d="M-80 15 Q-40 48 0 45 Q40 48 80 15"
            stroke="#B45309"
            strokeWidth="3.5"
            fill="none"
            opacity="0.75"
          />
          {/* Plump Vibrant Orange Egg Yolk */}
          <circle cx="0" cy="-5" r="34" fill="url(#eggYolkGrad)" />
          {/* Specular Reflection on Yolk */}
          <path
            d="M-15 -20 Q0 -28 15 -20"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
          <circle cx="-6" cy="-22" r="3" fill="#FFFFFF" opacity="1" />
        </g>
      </g>

      {/* Finely Shredded Sweet Japanese Cabbage (Repolho Fininho Guarnição) */}
      <g id="shredded-cabbage" transform="translate(180, 520)">
        <path d="M-40 20 Q-10 -20 20 20" stroke="#86EFAC" strokeWidth="3" fill="none" />
        <path d="M-30 10 Q5 -30 35 15" stroke="#BBF7D0" strokeWidth="2.5" fill="none" />
        <path d="M-20 30 Q15 -10 40 25" stroke="#86EFAC" strokeWidth="2.5" fill="none" />
      </g>
    </g>
  );
}

export function BreadRusticIllustration() {
  return (
    <g id="bread-rustic-sourdough">
      {/* Shadow */}
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Artisan Wooden Cutting Board */}
      <rect x="140" y="590" width="520" height="90" rx="20" fill="url(#woodBoardGrad)" />
      <rect x="140" y="580" width="520" height="20" rx="10" fill="url(#woodBoardTopGrad)" />

      {/* Sourdough Boule (Pão Rústico de Fermentação Natural) */}
      <g id="sourdough-loaf" transform="translate(400, 480)">
        {/* Shadow under boule */}
        <ellipse cx="0" cy="110" rx="210" ry="40" fill="#292524" opacity="0.5" />

        {/* Golden Brown Caramelized Crust with Natural Porous Flour Blisters */}
        <path
          d="M-210 80 C-230 -60 -140 -170 0 -170 C140 -170 230 -60 210 80 C190 120 120 130 0 130 C-120 130 -190 120 -210 80 Z"
          fill="url(#sourdoughCrustGrad)"
          filter="url(#foodPorousNoise)"
        />

        {/* Flour Dusting (Polvilhado de Farinha de Trigo Rústico) */}
        <path
          d="M-160 30 C-175 -50 -110 -140 0 -140 C110 -140 175 -50 160 30"
          stroke="#F5F5F4"
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
          opacity="0.45"
          filter="url(#steamBlur)"
        />

        {/* The Famous Baker's Ear (Pestana Rasgada Aberta e Tostada) */}
        <g id="sourdough-ear">
          <path
            d="M-150 -40 C-80 -120 60 -110 140 -30 C90 -60 -20 -70 -120 -30 Z"
            fill="url(#sourdoughEarGrad)"
          />
          {/* Deep Dark Roasted Edge of Ear */}
          <path
            d="M-150 -40 C-80 -120 60 -110 140 -30"
            stroke="#451A03"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          {/* Tender Steaming Aerated Crumb Peeking Out from the Cut */}
          <path
            d="M-120 -30 C-40 -65 40 -60 110 -25 C70 -40 -10 -45 -90 -25 Z"
            fill="url(#sourdoughCrumbGrad)"
          />
          {/* Open Crumb Alveoli (Alvéolos Naturais do Pão) */}
          <ellipse cx="-40" cy="-45" rx="8" ry="4" fill="#78350F" opacity="0.5" />
          <ellipse cx="20" cy="-48" rx="10" ry="5" fill="#78350F" opacity="0.5" />
          <ellipse cx="60" cy="-38" rx="7" ry="3.5" fill="#78350F" opacity="0.5" />
        </g>

        {/* Knife Slashing Decorative Score Marks (Cortes Artísticos) */}
        <path d="M-110 20 Q-60 -20 -10 10" stroke="#78350F" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M10 15 Q60 -25 110 10" stroke="#78350F" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.75" />

        {/* Golden Crust Highlights */}
        <path d="M-160 50 C-100 80 0 80 100 60" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.4" />
        <circle cx="-60" cy="-110" r="3.5" fill="#FFFFFF" opacity="0.85" />
        <circle cx="40" cy="-105" r="3.5" fill="#FFFFFF" opacity="0.85" />
      </g>
    </g>
  );
}
