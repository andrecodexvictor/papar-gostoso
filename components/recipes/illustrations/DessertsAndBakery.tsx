import React from 'react';

/**
 * Photorealistic Vector Gastronomic Illustrations for Desserts & Bakery
 * Compliant with:
 * - 0 0 800 800 coordinate scale
 * - Multi-stop gradients (4-5 color stops)
 * - Specular highlights (0.6-0.9 opacity paths, 1.0 hot spots) for caramels, chocolates, meringues
 * - Organic textures for fudgy crumbs & flaky crusts
 */

export function DessertPuddingIllustration() {
  return (
    <g id="dessert-pudim-de-leite">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Elegant Porcelain Dessert Platter */}
      <ellipse cx="400" cy="650" rx="290" ry="65" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="270" ry="55" fill="url(#plateCeramicGrad)" />

      {/* The Famous Brazilian Pudim de Leite (Liso, Espelhado, Perfeito com Calda Dourada) */}
      <g id="pudim-structure" transform="translate(400, 480)">
        {/* Amber Caramel Pool around the base (Calda de Caramelo Âmbar Espelhada) */}
        <ellipse cx="0" cy="115" rx="210" ry="45" fill="url(#caramelPoolGrad)" />
        <ellipse cx="50" cy="110" rx="90" ry="18" fill="#FFFFFF" opacity="0.4" />
        <circle cx="80" cy="108" r="3" fill="#FFFFFF" opacity="0.9" />

        {/* Silky Golden Custard Ring Body (Corpo Macio e Aveludado de Leite Condensado) */}
        <path
          d="M-170 90 
             C-180 -10 -130 -80 -70 -100 
             C-30 -110 30 -110 70 -100 
             C130 -80 180 -10 170 90 
             C160 125 110 135 0 135 
             C-110 135 -160 125 -170 90 Z"
          fill="url(#pudimCustardGrad)"
        />

        {/* Pudim Central Hole (O Furo Central Tradicional do Pudim) */}
        <ellipse cx="0" cy="-60" rx="55" ry="24" fill="url(#pudimHoleShadowGrad)" />

        {/* Top Surface of Pudim */}
        <ellipse cx="0" cy="-80" rx="120" ry="32" fill="url(#pudimTopCaramelGrad)" />

        {/* Cascading Rivers of Amber Caramel Sauce Drips (Fios de Caramelo Escorrendo pelas Laterais) */}
        <g id="caramel-drips">
          {/* Drip 1: Center Front */}
          <path
            d="M-20 -70 C-15 -30 -10 10 -15 50 C-18 80 -10 105 0 115 C8 105 5 80 0 50 C-2 15 5 -30 10 -70 Z"
            fill="url(#caramelDripGrad)"
          />
          <path d="M-8 -60 L-10 95" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
          <circle cx="-10" cy="102" r="3" fill="#FFFFFF" opacity="1" />

          {/* Drip 2: Left Side */}
          <path
            d="M-110 -65 C-105 -20 -95 20 -105 60 C-110 85 -100 100 -92 108 C-88 100 -92 80 -88 60 C-82 20 -95 -20 -100 -65 Z"
            fill="url(#caramelDripGrad)"
          />
          <path d="M-102 -50 L-98 85" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <circle cx="-95" cy="95" r="2.5" fill="#FFFFFF" opacity="1" />

          {/* Drip 3: Right Side */}
          <path
            d="M90 -65 C95 -20 105 20 95 60 C90 85 100 100 108 108 C112 100 108 80 112 60 C118 20 105 -20 100 -65 Z"
            fill="url(#caramelDripGrad)"
          />
          <path d="M100 -50 L104 85" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        </g>

        {/* High Specular Mirrored Curvature Sheen (Brilho Espelhado de Pudim Sem Furinhos) */}
        <path
          d="M-120 -50 C-70 -75 70 -75 120 -50"
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />
        <circle cx="-50" cy="-62" r="4.5" fill="#FFFFFF" opacity="1" />
        <circle cx="45" cy="-60" r="4" fill="#FFFFFF" opacity="1" />
      </g>
    </g>
  );
}

export function DessertBrownieIllustration() {
  return (
    <g id="dessert-brownie-fudge">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="290" ry="50" fill="url(#tableOcclusionShadow)" />
      <ellipse cx="400" cy="650" rx="270" ry="60" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="250" ry="50" fill="url(#slatePlateGrad)" />

      {/* Decadent Fudgy Dark Chocolate Brownie Block (Cubo de Brownie com Casquinha Craquelada) */}
      <g id="brownie-block" transform="translate(400, 500)">
        {/* Shadow */}
        <path d="M-140 100 L120 120 L150 140 L-120 125 Z" fill="#09090B" opacity="0.6" />

        {/* 1. FRONT CUT SURFACE: Ultra-Moist Dense Fudge Crumb with semi-melted chocolate chunks */}
        <path
          d="M-130 90 L80 110 L80 0 L-130 -20 Z"
          fill="url(#brownieFudgeGrad)"
          filter="url(#crumbTexture)"
        />

        {/* 2. SIDE CUT SURFACE */}
        <path
          d="M80 110 L140 50 L140 -50 L80 0 Z"
          fill="url(#brownieSideGrad)"
        />

        {/* 3. SHINY, PAPERY CRACKLED TOP CRUST (A Famosa Casquinha Brilhante Craquelada) */}
        <path
          d="M-130 -20 L80 0 L140 -50 L-70 -70 Z"
          fill="url(#brownieCrustGrad)"
        />
        {/* Fine Crackle Fissures on Papery Crust */}
        <path d="M-90 -45 L-50 -35 L-20 -50 L30 -40 L70 -20" stroke="#18181B" strokeWidth="2.5" fill="none" opacity="0.8" />
        <path d="M-30 -38 L0 -15 L40 -20" stroke="#18181B" strokeWidth="2" fill="none" opacity="0.8" />
        <path d="M-70 -60 L-40 -40" stroke="#18181B" strokeWidth="2" fill="none" opacity="0.8" />

        {/* Specular Glaze on Shiny Crust */}
        <path d="M-100 -35 L50 -10" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.75" />
        <circle cx="-40" cy="-25" r="3" fill="#FFFFFF" opacity="1" />
        <circle cx="20" cy="-15" r="3" fill="#FFFFFF" opacity="1" />

        {/* Molten Chocolate Pools & Drips Escaping the Cut Edge */}
        <g id="molten-fudge-drips">
          <ellipse cx="-40" cy="30" rx="16" ry="10" fill="url(#moltenChocGrad)" />
          <path d="M-45 35 Q-40 60 -42 75 Q-48 70 -48 45 Z" fill="url(#moltenChocGrad)" />
          <path d="M-42 40 L-42 70" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          <circle cx="-42" cy="74" r="1.5" fill="#FFFFFF" opacity="1" />

          <ellipse cx="20" cy="50" rx="18" ry="11" fill="url(#moltenChocGrad)" />
        </g>

        {/* Flaky Maldon Sea Salt Crystals on Top (Flocos de Flor de Sal) */}
        <g fill="#FFFFFF" opacity="0.95">
          <polygon points="-60,-45 -55,-50 -50,-46 -55,-40" />
          <polygon points="10,-25 15,-30 20,-26 15,-20" />
          <polygon points="-20,-35 -16,-38 -12,-35 -16,-32" />
        </g>
      </g>
    </g>
  );
}

export function DessertCookieIllustration() {
  return (
    <g id="dessert-chocolate-chip-cookie">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="290" ry="50" fill="url(#tableOcclusionShadow)" />
      <ellipse cx="400" cy="650" rx="270" ry="60" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="250" ry="50" fill="url(#plateCeramicGrad)" />

      {/* Craggy Artisan NYC-Style Chocolate Chip Cookie (Cookie Alto, Dourado e com Poças de Chocolate) */}
      <g id="cookie-body" transform="translate(400, 510)">
        {/* Cast shadow under cookie */}
        <ellipse cx="0" cy="80" rx="190" ry="40" fill="#1C1917" opacity="0.5" />

        {/* Irregular Organic Golden-Brown Cookie Dough Mound */}
        <path
          d="M-180 30 
             C-195 -40 -120 -100 0 -100 
             C120 -100 195 -40 180 30 
             C170 85 110 110 0 110 
             C-110 110 -170 85 -180 30 Z"
          fill="url(#cookieDoughGrad)"
          filter="url(#foodPorousNoise)"
        />

        {/* Caramelized Toasted Edge Ring (Bordas Douradas e Caramelizadas) */}
        <path
          d="M-175 35 C-190 -30 -115 -85 0 -85 C115 -85 190 -30 175 35 C165 80 105 100 0 100 C-105 100 -165 80 -175 35 Z"
          fill="url(#cookieCenterGrad)"
        />

        {/* Natural Craggy Surface Cracks & Fissures */}
        <path d="M-80 -20 Q-30 -10 0 -35 Q40 -20 90 -10" stroke="#78350F" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M-40 20 Q10 40 60 25" stroke="#78350F" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />

        {/* Luscious Pools of Semi-Melted Dark Chocolate (Poças Brilhantes de Chocolate Belga) */}
        <g id="chocolate-chip-pools">
          {/* Pool 1: Center Left */}
          <g transform="translate(-50, -15)">
            <ellipse cx="0" cy="0" rx="35" ry="22" fill="url(#moltenChocGrad)" />
            <path d="M-20 -6 Q0 -14 20 -6" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85" />
            <circle cx="-5" cy="-8" r="2.5" fill="#FFFFFF" opacity="1" />
          </g>

          {/* Pool 2: Center Right */}
          <g transform="translate(45, -25)">
            <ellipse cx="0" cy="0" rx="38" ry="24" fill="url(#moltenChocGrad)" />
            <path d="M-18 -8 Q2 -16 22 -8" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.85" />
            <circle cx="5" cy="-10" r="3" fill="#FFFFFF" opacity="1" />
          </g>

          {/* Pool 3: Front */}
          <g transform="translate(-10, 40)">
            <ellipse cx="0" cy="0" rx="42" ry="25" fill="url(#moltenChocGrad)" />
            <path d="M-22 -8 Q0 -16 24 -8" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.85" />
            <circle cx="-2" cy="-10" r="3" fill="#FFFFFF" opacity="1" />
          </g>

          {/* Extra Chips peeking */}
          <ellipse cx="-110" cy="10" rx="22" ry="15" fill="url(#moltenChocGrad)" />
          <ellipse cx="110" cy="20" rx="24" ry="16" fill="url(#moltenChocGrad)" />
        </g>

        {/* Flaky Sea Salt */}
        <g fill="#FFFFFF" opacity="0.95">
          <polygon points="-70,10 -66,6 -62,10 -66,14" />
          <polygon points="15,-45 19,-49 23,-45 19,-41" />
          <polygon points="70,15 74,11 78,15 74,19" />
        </g>
      </g>
    </g>
  );
}

export function DessertRedVelvetIllustration() {
  return (
    <g id="dessert-red-velvet" filter="url(#dropShadowFilter)">
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />
      <ellipse cx="400" cy="650" rx="290" ry="65" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="270" ry="55" fill="url(#plateCeramicGrad)" />

      {/* Triangular Slice of Luxurious Red Velvet Cake (Fatia de Bolo Red Velvet Aveludada) */}
      <g transform="translate(400, 490)">
        {/* Slice shadow */}
        <path d="M-180 80 L80 120 L160 50 L-100 -20 Z" fill="#1C1917" opacity="0.4" />

        {/* Bottom Red Velvet Sponge Layer */}
        <path d="M-170 50 L70 90 L150 20 L-90 -40 Z" fill="url(#redVelvetCrumbGrad)" />
        <path d="M-170 50 L-170 90 L70 130 L70 90 Z" fill="url(#redVelvetCrumbGrad)" />

        {/* First Cream Cheese Frosting Layer */}
        <path d="M-170 35 L70 75 L150 5 L-90 -55 Z" fill="#FFFBEB" />
        <path d="M-170 35 L-170 50 L70 90 L70 75 Z" fill="#FEF3C7" />

        {/* Middle Red Velvet Sponge Layer */}
        <path d="M-170 -5 L70 35 L150 -35 L-90 -95 Z" fill="url(#redVelvetCrumbGrad)" />
        <path d="M-170 -5 L-170 35 L70 75 L70 35 Z" fill="url(#redVelvetCrumbGrad)" />

        {/* Second Cream Cheese Frosting Layer */}
        <path d="M-170 -20 L70 20 L150 -50 L-90 -110 Z" fill="#FFFBEB" />
        <path d="M-170 -20 L-170 -5 L70 35 L70 20 Z" fill="#FEF3C7" />

        {/* Top Red Velvet Sponge Layer */}
        <path d="M-170 -60 L70 -20 L150 -90 L-90 -150 Z" fill="url(#redVelvetCrumbGrad)" />
        <path d="M-170 -60 L-170 -20 L70 20 L70 -20 Z" fill="url(#redVelvetCrumbGrad)" />

        {/* Top Fluffy Cream Cheese Frosting Crown */}
        <path d="M-170 -80 L70 -40 L150 -110 L-90 -170 Z" fill="#FFFFFF" />
        <path d="M-170 -80 L-170 -60 L70 -20 L70 -40 Z" fill="#FEF3C7" />

        {/* Ruby Red Velvet Crumbs scattered on top and plate */}
        <g fill="#991B1B">
          {[-120, -70, -30, 20, 60, 100, -90, -40, 40].map((x, i) => (
            <circle key={i} cx={x} cy={-100 + (i % 3) * 30} r={2.5 + (i % 2)} />
          ))}
          {[-140, -110, 80, 110].map((x, i) => (
            <circle key={i} cx={x} cy={100 + (i % 2) * 15} r={2} />
          ))}
        </g>

        {/* Frosting sheen */}
        <path d="M-140 -80 L40 -45" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
      </g>
    </g>
  );
}

export function DessertSpongeCakeIllustration() {
  return (
    <g id="dessert-bolo-caseiro" filter="url(#dropShadowFilter)">
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />
      <ellipse cx="400" cy="650" rx="290" ry="65" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="270" ry="55" fill="url(#plateCeramicGrad)" />

      {/* Fluffy Golden Bundt Cake with Vanilla Glaze Drips (Bolo Caseiro Fofinho com Calda Branca) */}
      <g transform="translate(400, 500)">
        {/* Cake shadow */}
        <ellipse cx="0" cy="90" rx="190" ry="40" fill="#1C1917" opacity="0.4" />

        {/* Golden Fluted Bundt Ring */}
        <path
          d="M-180 60 C-180 -30 -120 -120 0 -120 C120 -120 180 -30 180 60 C160 110 80 120 0 120 C-80 120 -160 110 -180 60 Z"
          fill="url(#spongeCakeGoldenGrad)"
        />

        {/* Bundt Center Hole */}
        <ellipse cx="0" cy="-60" rx="55" ry="25" fill="#451A03" opacity="0.8" />

        {/* Fluted Ridges of the Bundt Pan */}
        <g stroke="#78350F" strokeWidth="4" fill="none" opacity="0.4">
          <path d="M-150 40 C-130 -10 -90 -70 -40 -95" />
          <path d="M-90 80 C-80 10 -50 -60 0 -100" />
          <path d="M0 100 C0 20 0 -50 0 -100" />
          <path d="M90 80 C80 10 50 -60 0 -100" />
          <path d="M150 40 C130 -10 90 -70 40 -95" />
        </g>

        {/* Silky White Sugar Glaze Drips (Calda Branca Escorrendo pelas Caneluras) */}
        <path
          d="M-140 -80 C-120 -40 -125 10 -115 50 C-110 70 -100 85 -95 75 C-90 60 -95 20 -100 -20 C-85 -50 -60 -70 0 -85 C60 -70 85 -50 100 -20 C95 20 90 60 95 75 C100 85 110 70 115 50 C125 10 120 -40 140 -80 Z"
          fill="#FFFFFF"
          opacity="0.9"
        />

        {/* Glaze High Specular Shine */}
        <path d="M-80 -75 Q0 -95 80 -75" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" opacity="1" fill="none" />
        <circle cx="-105" cy="55" r="3" fill="#FFFFFF" opacity="1" />
        <circle cx="105" cy="55" r="3" fill="#FFFFFF" opacity="1" />
      </g>
    </g>
  );
}

export function DessertLemonPieIllustration() {
  return (
    <g id="dessert-torta-de-limao" filter="url(#dropShadowFilter)">
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />
      <ellipse cx="400" cy="650" rx="290" ry="65" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="270" ry="55" fill="url(#plateCeramicGrad)" />

      {/* Lemon Tart: Biscuit Crust, Silky Tart Lemon Curd, Torched Meringue Peaks & Lime Zest */}
      <g transform="translate(400, 510)">
        {/* Fluted Golden Biscuit Crust */}
        <ellipse cx="0" cy="60" rx="200" ry="80" fill="url(#sourdoughCrustGrad)" />
        <ellipse cx="0" cy="50" rx="180" ry="70" fill="url(#breadCrumbGrad)" />

        {/* Bright Citric Lemon Curd Filling (Recheio Cítrico Amarelo-Limão) */}
        <ellipse cx="0" cy="45" rx="170" ry="65" fill="url(#lemonCurdGrad)" />

        {/* Toasted Torched Meringue Swirls (Picos de Merengue Tostados com Maçarico) */}
        <g id="meringue-peaks">
          {[
            { x: -90, y: 30, r: 35 },
            { x: -30, y: 45, r: 38 },
            { x: 40, y: 40, r: 36 },
            { x: 100, y: 25, r: 34 },
            { x: -60, y: 5, r: 36 },
            { x: 10, y: 10, r: 40 },
            { x: 70, y: -5, r: 35 },
            { x: -10, y: -25, r: 38 },
          ].map((m, i) => (
            <g key={i} transform={`translate(${m.x}, ${m.y})`}>
              <ellipse cx="0" cy="0" rx={m.r} ry={m.r * 0.75} fill="#FFFFFF" />
              {/* Torched golden brown peak tip */}
              <path
                d={`M0 ${-m.r * 0.8} C${-m.r * 0.3} ${-m.r * 0.4} ${m.r * 0.3} ${-m.r * 0.4} 0 ${-m.r * 0.8} Z`}
                fill="url(#quicheBrownedSpotGrad)"
              />
              <path
                d={`M${-m.r * 0.4} ${-m.r * 0.2} Q0 ${-m.r * 0.6} ${m.r * 0.4} ${-m.r * 0.2}`}
                stroke="#D97706"
                strokeWidth="2.5"
                fill="none"
              />
            </g>
          ))}
        </g>

        {/* Fresh Grated Lime Zest Sprinkles (Raspas Verdes de Limão Tahiti Frescas) */}
        <g fill="#16A34A">
          {[-110, -80, -40, 0, 40, 80, 110, -60, 60, -20, 20].map((x, i) => (
            <rect key={i} x={x} y={10 + (i % 4) * 15} width="6" height="2" rx="1" transform={`rotate(${i * 45} ${x} ${10 + (i % 4) * 15})`} />
          ))}
        </g>

        {/* Specular Curd & Meringue Highlights */}
        <ellipse cx="-40" cy="40" rx="14" ry="5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="20" cy="15" r="3.5" fill="#FFFFFF" opacity="0.9" />
      </g>
    </g>
  );
}

export function DessertMousseIllustration() {
  return (
    <g id="dessert-mousse-cup" filter="url(#dropShadowFilter)">
      <ellipse cx="400" cy="720" rx="220" ry="40" fill="url(#tableOcclusionShadow)" />

      {/* Elegant Stemmed Glass Dessert Goblet */}
      <g transform="translate(400, 490)">
        {/* Glass Base & Stem */}
        <ellipse cx="0" cy="180" rx="90" ry="25" fill="#E2E8F0" opacity="0.7" />
        <rect x="-12" y="90" width="24" height="90" fill="url(#glassWallGrad)" opacity="0.5" />

        {/* Glass Goblet Bowl */}
        <path d="M-140 -60 C-140 100 140 100 140 -60 Z" fill="url(#glassWallGrad)" opacity="0.35" />

        {/* Airy Whipped Dark Chocolate Mousse Filling (Mousse Aveludada com Microbolhas) */}
        <path d="M-130 -50 C-130 90 130 90 130 -50 Z" fill="url(#chocolateMousseGrad)" />

        {/* Fluffy Aerated Dome Top */}
        <ellipse cx="0" cy="-50" rx="130" ry="45" fill="url(#chocolateMousseTopGrad)" />

        {/* Visible Micro-bubbles / texture */}
        <g fill="#271106" opacity="0.5">
          {[-80, -40, 0, 40, 80, -60, -20, 20, 60].map((x, i) => (
            <circle key={i} cx={x} cy={-50 + (i % 3) * 15} r={2.5 + (i % 2)} />
          ))}
        </g>

        {/* Rich Curled Dark Chocolate Shavings (Raspas de Chocolate Nobre) */}
        <g fill="#18181B" stroke="#000000" strokeWidth="1">
          <path d="M-30 -65 Q0 -85 20 -70 Q0 -55 -30 -65 Z" />
          <path d="M-10 -75 Q20 -95 40 -80 Q10 -65 -10 -75 Z" />
          <path d="M-45 -55 Q-25 -75 0 -60 Q-25 -45 -45 -55 Z" />
        </g>

        {/* Fresh Emerald Mint Leaf Sprig on Top */}
        <g fill="#15803D" transform="translate(15, -75)">
          <path d="M0 0 Q-25 -30 0 -45 Q25 -30 0 0 Z" />
          <path d="M0 0 L0 -40" stroke="#166534" strokeWidth="2" />
        </g>

        {/* Glass Specular Highlights */}
        <path d="M-125 -50 C-125 60 -80 85 -80 85" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" opacity="0.8" fill="none" />
        <ellipse cx="0" cy="-50" rx="120" ry="40" stroke="#FFFFFF" strokeWidth="3" opacity="0.5" fill="none" />
      </g>
    </g>
  );
}

export function DessertJellyIllustration() {
  return (
    <g id="dessert-gelatina-colorida" filter="url(#dropShadowFilter)">
      <ellipse cx="400" cy="720" rx="230" ry="40" fill="url(#tableOcclusionShadow)" />

      {/* Crystal Dessert Bowl with Colorful Translucent Mosaic Jelly Cubes in Sweet Milk Cream */}
      <g transform="translate(400, 500)">
        {/* Glass Bowl */}
        <ellipse cx="0" cy="160" rx="80" ry="20" fill="#CBD5E1" opacity="0.6" />
        <path d="M-150 -40 C-150 140 150 140 150 -40 Z" fill="url(#glassWallGrad)" opacity="0.4" />

        {/* Sweet Cream Bed */}
        <path d="M-140 -30 C-140 130 140 130 140 -30 Z" fill="#FFFBEB" />

        {/* Translucent Jewel Jelly Cubes (Cubos Mosaico Coloridos de Gelatina) */}
        {/* Red Strawberry cubes */}
        <rect x="-80" y="20" width="40" height="35" rx="5" fill="#EF4444" opacity="0.85" transform="rotate(15 -80 20)" />
        <rect x="30" y="40" width="42" height="38" rx="5" fill="#EF4444" opacity="0.85" transform="rotate(-20 30 40)" />
        <rect x="-20" y="-35" width="40" height="35" rx="5" fill="#EF4444" opacity="0.85" transform="rotate(10 -20 -35)" />

        {/* Green Lime cubes */}
        <rect x="-30" y="35" width="38" height="35" rx="5" fill="#22C55E" opacity="0.85" transform="rotate(-15 -30 35)" />
        <rect x="50" y="-20" width="40" height="36" rx="5" fill="#22C55E" opacity="0.85" transform="rotate(25 50 -20)" />

        {/* Yellow Pineapple / Orange cubes */}
        <rect x="-100" y="-20" width="42" height="38" rx="5" fill="#FACC15" opacity="0.85" transform="rotate(-25 -100 -20)" />
        <rect x="0" y="5" width="40" height="36" rx="5" fill="#FACC15" opacity="0.85" transform="rotate(12 0 5)" />

        {/* Purple Grape cubes */}
        <rect x="-60" y="-10" width="36" height="34" rx="5" fill="#A855F7" opacity="0.85" transform="rotate(20 -60 -10)" />
        <rect x="70" y="10" width="38" height="35" rx="5" fill="#A855F7" opacity="0.85" transform="rotate(-10 70 10)" />

        {/* Gelatin glistening cube highlights */}
        <g fill="#FFFFFF" opacity="0.85">
          <circle cx="-65" cy="25" r="3" />
          <circle cx="45" cy="45" r="3" />
          <circle cx="-85" cy="-15" r="3" />
          <circle cx="15" cy="15" r="3" />
          <circle cx="65" cy="-15" r="3" />
        </g>

        {/* Glass reflection line */}
        <path d="M-135 -30 C-135 70 -90 120 -90 120" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" opacity="0.8" fill="none" />
      </g>
    </g>
  );
}

