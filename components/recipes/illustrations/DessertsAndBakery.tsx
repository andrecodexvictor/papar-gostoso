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
