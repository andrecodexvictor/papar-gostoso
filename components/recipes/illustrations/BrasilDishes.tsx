import React from 'react';

/**
 * Photorealistic Vector Gastronomic Illustrations for Traditional Brazilian Cuisine
 * Strict compliance with:
 * - 0 0 800 800 coordinate scale
 * - Multi-stop gradients (4-5 color stops minimum)
 * - Organic imperfections & liquid fluidity (dripping butter, caramel, melting cheese)
 * - Specular highlights (opacity 0.6-0.9 paths & 1.0 hot spots)
 * - Porous textural application with filters
 */

export function BrasilCuscuzIllustration() {
  return (
    <g id="brasil-cuscuz-nordestino">
      {/* Table Shadow */}
      <ellipse cx="400" cy="680" rx="320" ry="60" fill="url(#tableOcclusionShadow)" />

      {/* Rustic Terracotta Plate */}
      <ellipse cx="400" cy="640" rx="300" ry="75" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="635" rx="280" ry="65" fill="url(#plateCeramicGrad)" />
      <ellipse cx="400" cy="625" rx="260" ry="55" fill="url(#plateInnerShadow)" />

      {/* Banana Leaf Bed with Realistic Ribs & Translucency */}
      <path
        d="M170 610 C210 570 320 560 400 565 C480 560 590 570 630 610 C580 650 490 665 400 665 C310 665 220 650 170 610 Z"
        fill="url(#bananaLeafGrad)"
      />
      {/* Leaf Central Rib & Veins */}
      <path d="M180 610 Q400 595 620 610" stroke="#166534" strokeWidth="3" opacity="0.7" fill="none" />
      <path d="M250 600 Q300 580 340 570" stroke="#22C55E" strokeWidth="1.5" opacity="0.4" fill="none" />
      <path d="M460 570 Q500 580 550 600" stroke="#22C55E" strokeWidth="1.5" opacity="0.4" fill="none" />

      {/* Cuscuz Mound - Organic Steaming Corn Flour Dome */}
      {/* Shadow under cuscuz */}
      <ellipse cx="400" cy="610" rx="190" ry="40" fill="#1C1917" opacity="0.45" />

      {/* Base & Body of Cuscuz with Cornmeal Porous Filter */}
      <path
        d="M230 580 C220 480 260 360 300 320 C350 280 450 280 500 320 C540 360 580 480 570 580 C560 620 480 640 400 640 C320 640 240 620 230 580 Z"
        fill="url(#cuscuzCornGrad)"
        filter="url(#foodPorousNoise)"
      />

      {/* Corn Grain Crumbs & Texture Highlights */}
      <g opacity="0.85">
        <circle cx="280" cy="520" r="4.5" fill="#FEF08A" />
        <circle cx="310" cy="460" r="4" fill="#FDE047" />
        <circle cx="340" cy="540" r="5" fill="#EAB308" />
        <circle cx="460" cy="510" r="4.5" fill="#FEF08A" />
        <circle cx="490" cy="440" r="4" fill="#FDE047" />
        <circle cx="520" cy="530" r="5" fill="#EAB308" />
        <circle cx="380" cy="360" r="3.5" fill="#FEF08A" />
        <circle cx="420" cy="350" r="4" fill="#FACC15" />
      </g>

      {/* Toasted Slab of Queijo Coalho with Dark Golden Griddle Marks */}
      <g id="queijo-coalho-tostado" transform="translate(0, -10)">
        {/* Cheese Slab Cast Shadow */}
        <path d="M290 340 L510 340 L520 370 L280 370 Z" fill="#451A03" opacity="0.4" />
        {/* Cheese Body */}
        <path
          d="M295 290 Q400 275 505 290 L515 350 Q400 365 285 350 Z"
          fill="url(#queijoCoalhoGrad)"
        />
        {/* Top Surface */}
        <path
          d="M295 290 Q400 275 505 290 L490 270 Q400 255 310 270 Z"
          fill="url(#queijoCoalhoTopGrad)"
        />
        {/* Characteristic Charcoal/Gold Griddle Sear Marks on Coalho Cheese */}
        <path d="M320 280 L350 335" stroke="#78350F" strokeWidth="5" strokeLinecap="round" opacity="0.85" />
        <path d="M370 275 L405 340" stroke="#78350F" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
        <path d="M425 277 L460 340" stroke="#78350F" strokeWidth="5.5" strokeLinecap="round" opacity="0.85" />
        <path d="M475 282 L498 335" stroke="#78350F" strokeWidth="4.5" strokeLinecap="round" opacity="0.85" />

        {/* Char Cracker Highlights */}
        <path d="M372 290 L402 330" stroke="#451A03" strokeWidth="2.5" opacity="0.7" />
        <path d="M427 290 L457 330" stroke="#451A03" strokeWidth="2.5" opacity="0.7" />

        {/* Specular Glistening Melt on Cheese Surface */}
        <path d="M330 285 Q390 275 470 285" stroke="#FFFFFF" strokeWidth="3" opacity="0.85" strokeLinecap="round" />
        <ellipse cx="400" cy="282" rx="18" ry="4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="440" cy="285" r="3" fill="#FFFFFF" opacity="1" />
      </g>

      {/* Melty Golden "Manteiga de Garrafa" Cascading Drips */}
      <g id="manteiga-de-garrafa-drips">
        {/* Pool of Melted Clarified Butter around Base */}
        <ellipse cx="400" cy="620" rx="140" ry="24" fill="url(#meltedButterPoolGrad)" opacity="0.85" />
        <ellipse cx="380" cy="618" rx="80" ry="12" fill="#FFFFFF" opacity="0.6" />

        {/* Main River of Butter Dripping Down the Front */}
        <path
          d="M390 340 C380 380 375 420 385 450 C395 480 370 510 365 540 C360 570 380 600 395 620 C405 620 410 605 405 575 C400 545 420 520 415 485 C410 450 420 390 410 340 Z"
          fill="url(#butterLiquidGrad)"
          opacity="0.95"
        />
        {/* Specular Highlight Streak along Butter Drip */}
        <path
          d="M388 350 C382 390 380 430 388 455 C394 475 378 505 374 535 C370 560 385 595 396 612"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        {/* Pinpoint Highlights on Liquid Drops */}
        <circle cx="388" cy="455" r="3" fill="#FFFFFF" opacity="1" />
        <circle cx="374" cy="535" r="2.5" fill="#FFFFFF" opacity="1" />

        {/* Second Butter Drip on Right */}
        <path
          d="M455 345 C450 380 460 420 455 450 C450 480 465 520 460 560 C458 575 468 590 475 600 C480 598 475 580 472 560 C475 525 462 485 468 450 C472 420 465 380 465 345 Z"
          fill="url(#butterLiquidGrad)"
          opacity="0.9"
        />
        <path
          d="M458 355 C453 385 462 420 457 450 C454 475 467 515 462 555"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />
      </g>

      {/* Realistic Steaming Vapor Rising */}
      <g opacity="0.45">
        <path
          d="M360 260 Q340 210 370 170 Q400 130 380 90"
          stroke="#FFFFFF"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          filter="url(#steamBlur)"
        />
        <path
          d="M430 250 Q460 200 430 150 Q400 100 430 60"
          stroke="#FFFFFF"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          filter="url(#steamBlur)"
        />
        <path
          d="M400 240 Q380 180 410 130 Q440 80 410 40"
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          filter="url(#steamBlur)"
        />
      </g>
    </g>
  );
}

export function BrasilFeijoadaIllustration() {
  return (
    <g id="brasil-feijoada-de-panela">
      {/* Table Surface Shadow */}
      <ellipse cx="400" cy="710" rx="330" ry="55" fill="url(#tableOcclusionShadow)" />

      {/* Traditional Black Clay Caçarola (Panela de Barro Preta) */}
      <ellipse cx="400" cy="650" rx="290" ry="70" fill="url(#clayPotRimGrad)" />
      {/* Panela Rim Lip */}
      <path
        d="M110 500 C100 620 220 670 400 670 C580 670 700 620 690 500 C680 470 650 450 400 450 C150 450 120 470 110 500 Z"
        fill="url(#clayPotBodyGrad)"
      />
      {/* Clay Pot Rustic Rim Highlights */}
      <ellipse cx="400" cy="450" rx="275" ry="60" fill="url(#clayPotLipGrad)" stroke="#27272A" strokeWidth="6" />

      {/* Deep Rich Black Bean Broth (Caldo Encorpado e Aveludado) */}
      <ellipse cx="400" cy="455" rx="260" ry="52" fill="url(#feijaoBrothGrad)" />

      {/* Broth Specular Sheen Layer */}
      <ellipse cx="370" cy="445" rx="180" ry="30" fill="url(#brothSheenGrad)" opacity="0.75" />
      <path
        d="M240 440 C320 425 460 425 540 440 C510 455 420 460 340 460 C270 460 240 450 240 440 Z"
        fill="#FFFFFF"
        opacity="0.3"
      />

      {/* Tender Black Beans Swimming in Broth (Feijões Pretos Inteiros Brilhantes) */}
      <g id="black-beans-cluster">
        {[
          { cx: 270, cy: 450, rx: 14, ry: 9, rot: -15 },
          { cx: 310, cy: 470, rx: 15, ry: 10, rot: 25 },
          { cx: 350, cy: 440, rx: 13, ry: 8, rot: -10 },
          { cx: 480, cy: 450, rx: 14, ry: 9, rot: 30 },
          { cx: 520, cy: 465, rx: 15, ry: 10, rot: -20 },
          { cx: 440, cy: 475, rx: 13, ry: 9, rot: 5 },
          { cx: 220, cy: 460, rx: 12, ry: 8, rot: 40 },
          { cx: 570, cy: 455, rx: 13, ry: 8, rot: -35 },
        ].map((bean, i) => (
          <g key={i} transform={`rotate(${bean.rot} ${bean.cx} ${bean.cy})`}>
            <ellipse cx={bean.cx} cy={bean.cy} rx={bean.rx} ry={bean.ry} fill="url(#feijaoBeanGrad)" />
            {/* Bean Specular Highlight */}
            <path
              d={`M${bean.cx - bean.rx + 3} ${bean.cy - 2} Q${bean.cx} ${bean.cy - bean.ry + 2} ${bean.cx + bean.rx - 4} ${bean.cy - 1}`}
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
            <circle cx={bean.cx + 2} cy={bean.cy - 3} r="1.5" fill="#FFFFFF" opacity="1" />
          </g>
        ))}
      </g>

      {/* Succulent Smoked Paio & Calabresa Sausage Slices Peeking from Broth */}
      <g id="calabresa-paio-slices">
        {/* Slice 1: Foreground Paio */}
        <g transform="translate(320, 420)">
          <ellipse cx="0" cy="0" rx="36" ry="24" fill="url(#paioCasingGrad)" />
          <ellipse cx="0" cy="-2" rx="32" ry="20" fill="url(#paioMeatGrad)" />
          {/* Meat marbling & pepper flecks */}
          <circle cx="-12" cy="-4" r="3" fill="#FEE2E2" opacity="0.8" />
          <circle cx="8" cy="2" r="3.5" fill="#FEE2E2" opacity="0.8" />
          <circle cx="-2" cy="-8" r="2.5" fill="#FEE2E2" opacity="0.8" />
          <circle cx="16" cy="-6" r="1.5" fill="#18181B" />
          <circle cx="-8" cy="4" r="1.5" fill="#18181B" />
          {/* Juicy Specular Oil Film */}
          <ellipse cx="-4" cy="-5" rx="20" ry="10" fill="#FFFFFF" opacity="0.6" />
          <circle cx="-6" cy="-6" r="2.5" fill="#FFFFFF" opacity="0.95" />
        </g>

        {/* Slice 2: Right Calabresa */}
        <g transform="translate(460, 430) rotate(15)">
          <ellipse cx="0" cy="0" rx="34" ry="22" fill="url(#paioCasingGrad)" />
          <ellipse cx="0" cy="-2" rx="30" ry="18" fill="url(#paioMeatGrad)" />
          <circle cx="-8" cy="-2" r="3" fill="#FEE2E2" opacity="0.75" />
          <circle cx="10" cy="-4" r="2.5" fill="#FEE2E2" opacity="0.75" />
          <ellipse cx="0" cy="-4" rx="16" ry="8" fill="#FFFFFF" opacity="0.6" />
          <circle cx="2" cy="-5" r="2" fill="#FFFFFF" opacity="1" />
        </g>
      </g>

      {/* Tender Braised Costelinha de Porco (Rib Chunk with succulent bone) */}
      <g id="costelinha-chunk" transform="translate(390, 390)">
        {/* Meat Volume */}
        <path
          d="M-45 10 C-40 -20 40 -25 50 8 C52 25 -35 35 -45 10 Z"
          fill="url(#porkRibGrad)"
          filter="url(#meatSearNoise)"
        />
        {/* Bone end */}
        <ellipse cx="-42" cy="0" rx="10" ry="14" fill="url(#boneCartilageGrad)" />
        {/* Meat Juices & Glaze */}
        <path
          d="M-25 -10 Q10 -22 38 -5 Q10 5 -20 -2 Z"
          fill="#FFFFFF"
          opacity="0.65"
        />
        <circle cx="8" cy="-12" r="2.5" fill="#FFFFFF" opacity="1" />
      </g>

      {/* Fresh Bay Leaves (Folhas de Louro com Brilho do Caldo) */}
      <g id="louro-leaves">
        <path
          d="M260 410 C290 395 330 405 345 425 C320 435 280 430 260 410 Z"
          fill="url(#bayLeafGrad)"
        />
        <path d="M265 412 Q300 410 340 423" stroke="#14532D" strokeWidth="1.5" fill="none" opacity="0.8" />
        <path d="M280 408 Q310 407 335 418" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.65" />
      </g>

      {/* Juicy Orange Slice Garnish (Gomo de Laranja Suculento) */}
      <g id="orange-slice" transform="translate(200, 480) rotate(-20)">
        <path d="M-50 0 C-40 -50 40 -50 50 0 Z" fill="#EA580C" />
        <path d="M-45 -2 C-35 -45 35 -45 45 -2 Z" fill="#FFEDD5" />
        {/* Orange Segments */}
        <path d="M-38 -5 C-32 -38 -5 -40 0 -5 Z" fill="url(#orangeJuiceGrad)" />
        <path d="M2 -5 C8 -40 32 -38 38 -5 Z" fill="url(#orangeJuiceGrad)" />
        {/* Glistening Citrus Pulps & Droplets */}
        <circle cx="-16" cy="-20" r="2" fill="#FFFFFF" opacity="0.8" />
        <circle cx="16" cy="-20" r="2" fill="#FFFFFF" opacity="0.8" />
        <path d="M-30 -12 Q-15 -30 0 -8" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.7" />
      </g>

      {/* Fresh Shredded Crisp Couve (Couve Refogada Verde Viva) */}
      <g id="couve-crisp" transform="translate(560, 480)">
        <path d="M-20 -10 Q10 -30 30 -5 Q15 20 -15 15 Z" fill="url(#couveGrad)" />
        <path d="M-10 -5 Q15 -18 25 -2" stroke="#86EFAC" strokeWidth="1.5" fill="none" opacity="0.8" />
        <circle cx="8" cy="-10" r="1.5" fill="#FFFFFF" opacity="0.8" />
      </g>
    </g>
  );
}

export function BrasilCoxinhaIllustration() {
  return (
    <g id="brasil-coxinha-crocante">
      {/* Shadow */}
      <ellipse cx="400" cy="700" rx="260" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Porcelain Serving Platter */}
      <ellipse cx="400" cy="650" rx="270" ry="65" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="250" ry="55" fill="url(#plateCeramicGrad)" />

      {/* Two Artisan Golden Crisp Coxinhas: One Standing, One Resting */}
      {/* Resting Coxinha (Background) */}
      <g transform="translate(480, 520) rotate(55)">
        <path
          d="M0 -150 C40 -90 90 20 70 80 C50 130 -50 130 -70 80 C-90 20 -40 -90 0 -150 Z"
          fill="url(#coxinhaGoldenGrad)"
          filter="url(#fineCrustNoise)"
        />
      </g>

      {/* Standing Centerpiece Coxinha (Ultra Crisp Tear-drop Shape) */}
      <g id="main-coxinha" transform="translate(370, 440)">
        {/* Cast shadow onto plate */}
        <ellipse cx="0" cy="170" rx="90" ry="24" fill="#1C1917" opacity="0.4" />

        {/* Coxinha Body with Porous Craggy Breadcrumb Crust */}
        <path
          d="M0 -220 C45 -140 125 10 110 100 C95 180 -95 180 -110 100 C-125 10 -45 -140 0 -220 Z"
          fill="url(#coxinhaGoldenGrad)"
          filter="url(#foodPorousNoise)"
        />

        {/* Flakes of Golden Crunchy Panko / Farinha de Rosca */}
        <g fill="#FEF08A" opacity="0.85">
          <ellipse cx="-40" cy="-30" rx="4" ry="2.5" transform="rotate(-30 -40 -30)" />
          <ellipse cx="30" cy="-50" rx="4.5" ry="3" transform="rotate(25 30 -50)" />
          <ellipse cx="-60" cy="50" rx="5" ry="3" transform="rotate(15 -60 50)" />
          <ellipse cx="50" cy="60" rx="4" ry="2" transform="rotate(-40 50 60)" />
          <ellipse cx="0" cy="110" rx="5" ry="3" />
          <ellipse cx="-20" cy="-120" rx="3.5" ry="2" transform="rotate(-20 -20 -120)" />
          <ellipse cx="15" cy="-140" rx="3" ry="2" transform="rotate(40 15 -140)" />
        </g>

        {/* Deep Golden/Amber Toast Highlights (Browning Variations) */}
        <path
          d="M-20 -190 C0 -140 70 -10 65 80 C60 140 0 160 -40 140 C-80 120 -85 30 -60 -40 Z"
          fill="url(#coxinhaToastShadeGrad)"
          opacity="0.4"
        />

        {/* Specular Crunch Sheen along Curves */}
        <path
          d="M-15 -190 C-35 -120 -85 -10 -70 80 C-60 125 -10 155 10 155"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M-12 -170 C-28 -110 -65 -15 -55 65"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
        <circle cx="-10" cy="-180" r="3.5" fill="#FFFFFF" opacity="1" />
        <circle cx="-45" cy="10" r="4" fill="#FFFFFF" opacity="0.95" />
      </g>

      {/* Fresh Lime Wedge & Chili Pepper on Plate Rim */}
      <g id="lime-wedge" transform="translate(240, 610) rotate(15)">
        <path d="M-30 0 C-25 -30 25 -30 30 0 Z" fill="#15803D" />
        <path d="M-26 -2 C-20 -26 20 -26 26 -2 Z" fill="#DCFCE7" />
        <path d="M-22 -4 C-16 -22 16 -22 22 -4 Z" fill="url(#limeJuiceGrad)" />
        <circle cx="-8" cy="-12" r="1.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="8" cy="-12" r="1.5" fill="#FFFFFF" opacity="0.8" />
      </g>
    </g>
  );
}

export function BrasilPaoDeQueijoIllustration() {
  return (
    <g id="brasil-pao-de-queijo">
      {/* Table Surface Shadow */}
      <ellipse cx="400" cy="690" rx="300" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Rustic Woven Bread Basket / Linen Cloth */}
      <ellipse cx="400" cy="640" rx="280" ry="70" fill="#E7E5E4" />
      <ellipse cx="400" cy="635" rx="265" ry="60" fill="#F5F5F4" />

      {/* Red Gingham / Linen Napkin Peeking */}
      <path
        d="M200 620 C240 590 320 580 400 585 C480 580 560 590 600 620 C560 655 480 665 400 665 C320 665 240 655 200 620 Z"
        fill="#FEF2F2"
      />
      <path d="M220 615 Q400 590 580 615" stroke="#F87171" strokeWidth="2" strokeDasharray="6 4" fill="none" opacity="0.6" />

      {/* Golden Puffed Pães de Queijo Pyramid (3 Units) */}

      {/* Back Left Pão de Queijo */}
      <g transform="translate(300, 500)">
        <ellipse cx="0" cy="65" rx="75" ry="24" fill="#292524" opacity="0.3" />
        <circle cx="0" cy="0" r="70" fill="url(#paoQueijoGrad)" filter="url(#foodPorousNoise)" />
        {/* Cheese Cracks */}
        <path d="M-30 -20 Q0 -10 30 -30" stroke="#78350F" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M-10 10 Q15 25 35 15" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.7" />
      </g>

      {/* Back Right Pão de Queijo */}
      <g transform="translate(500, 510)">
        <ellipse cx="0" cy="65" rx="75" ry="24" fill="#292524" opacity="0.3" />
        <circle cx="0" cy="0" r="72" fill="url(#paoQueijoGrad)" filter="url(#foodPorousNoise)" />
        <path d="M-20 -30 Q5 -15 25 -35" stroke="#78350F" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M-25 15 Q0 30 30 10" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.7" />
      </g>

      {/* Front Hero Pão de Queijo - Split Open Revealing Steaming Stretchy Cheese */}
      <g id="hero-pao-de-queijo" transform="translate(400, 540)">
        <ellipse cx="0" cy="80" rx="95" ry="30" fill="#1C1917" opacity="0.45" />

        {/* Outer Golden Puffed Crust with natural dimples and crackles */}
        <path
          d="M-85 10 C-95 -45 -60 -85 0 -85 C60 -85 95 -45 85 10 C80 65 50 85 0 85 C-50 85 -80 65 -85 10 Z"
          fill="url(#paoQueijoHeroGrad)"
          filter="url(#foodPorousNoise)"
        />

        {/* Roasted Cheese Blisters (Manchas Douradas de Queijo Canastra Tostado) */}
        <ellipse cx="-40" cy="-40" rx="14" ry="9" fill="#92400E" opacity="0.85" />
        <ellipse cx="35" cy="-35" rx="16" ry="11" fill="#78350F" opacity="0.85" />
        <ellipse cx="10" cy="-60" rx="12" ry="8" fill="#B45309" opacity="0.85" />
        <ellipse cx="-20" cy="30" rx="15" ry="9" fill="#92400E" opacity="0.85" />
        <ellipse cx="45" cy="25" rx="14" ry="8" fill="#78350F" opacity="0.85" />

        {/* Fissures & Cracks where glossy melted cheese oozes */}
        <path
          d="M-50 -10 Q-20 5 0 -5 Q25 -15 50 0"
          stroke="#FEF08A"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M-45 -10 Q-18 5 0 -5 Q23 -15 45 0"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.95"
        />

        {/* Specular Butter Sheen on the Crisp Crust */}
        <path
          d="M-60 -60 C-30 -80 30 -80 60 -60"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />
        <circle cx="-15" cy="-70" r="3.5" fill="#FFFFFF" opacity="1" />
        <circle cx="20" cy="-68" r="3" fill="#FFFFFF" opacity="1" />
      </g>

      {/* Steaming Vapor */}
      <g opacity="0.4">
        <path
          d="M400 440 Q380 380 410 320 Q430 270 400 220"
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          filter="url(#steamBlur)"
        />
      </g>
    </g>
  );
}

export function BrasilBrigadeiroIllustration() {
  return (
    <g id="brasil-brigadeiro-gourmet">
      {/* Table Shadow */}
      <ellipse cx="400" cy="700" rx="280" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Vintage Ceramic Dessert Plate */}
      <ellipse cx="400" cy="640" rx="260" ry="60" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="632" rx="240" ry="50" fill="url(#plateCeramicGrad)" />

      {/* Centerpiece Glossy Brigadeiro Gourmet Ball */}
      <g id="brigadeiro-ball" transform="translate(400, 480)">
        {/* Cast shadow under the paper liner */}
        <ellipse cx="0" cy="150" rx="110" ry="32" fill="#1C1917" opacity="0.4" />

        {/* Traditional Fluted Brown Paper Forminha (Forminha Plissada) */}
        <path
          d="M-110 90 L-80 150 Q0 165 80 150 L110 90 Q0 110 -110 90 Z"
          fill="url(#paperLinerGrad)"
        />
        {/* Pleat lines on forminha */}
        {[-80, -60, -40, -20, 0, 20, 40, 60, 80].map((x, i) => (
          <line key={i} x1={x * 1.15} y1="95" x2={x * 0.9} y2="152" stroke="#451A03" strokeWidth="2.5" opacity="0.65" />
        ))}

        {/* Ultra-Rich Dark Chocolate Brigadeiro Sphere */}
        <circle cx="0" cy="30" r="105" fill="url(#brigadeiroChocolateGrad)" />

        {/* Hundreds of Realistic 3D Chocolate Sprinkles (Granulado Nobre) with Specular Highlights */}
        <g id="granulado-sprinkles">
          {[
            { x: -50, y: -40, rot: 25, len: 24, w: 7 },
            { x: 10, y: -60, rot: -40, len: 26, w: 7 },
            { x: -20, y: -20, rot: 60, len: 22, w: 7 },
            { x: 45, y: -30, rot: 15, len: 25, w: 7.5 },
            { x: -70, y: 10, rot: -30, len: 24, w: 7 },
            { x: -30, y: 30, rot: 45, len: 26, w: 7.5 },
            { x: 25, y: 20, rot: -60, len: 24, w: 7 },
            { x: 65, y: 15, rot: 35, len: 22, w: 7 },
            { x: -60, y: 70, rot: 10, len: 25, w: 7 },
            { x: -10, y: 80, rot: -20, len: 26, w: 7.5 },
            { x: 40, y: 70, rot: 50, len: 24, w: 7 },
            { x: 0, y: -40, rot: -10, len: 25, w: 7.5 },
            { x: -45, y: -65, rot: 45, len: 22, w: 7 },
            { x: 55, y: -55, rot: -25, len: 24, w: 7 },
          ].map((sp, i) => (
            <g key={i} transform={`translate(${sp.x}, ${sp.y}) rotate(${sp.rot})`}>
              {/* Sprinkle Shadow */}
              <rect x={-sp.len / 2 + 1} y={-sp.w / 2 + 2} width={sp.len} height={sp.w} rx={sp.w / 2} fill="#09090B" opacity="0.6" />
              {/* Sprinkle Body */}
              <rect x={-sp.len / 2} y={-sp.w / 2} width={sp.len} height={sp.w} rx={sp.w / 2} fill="url(#sprinkleChocGrad)" />
              {/* Top Specular Glaze Highlight */}
              <path
                d={`M${-sp.len / 2 + 3} ${-sp.w / 2 + 1.5} L${sp.len / 2 - 3} ${-sp.w / 2 + 1.5}`}
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.8"
              />
              <circle cx={-sp.len / 4} cy={-sp.w / 4} r="1.5" fill="#FFFFFF" opacity="1" />
            </g>
          ))}
        </g>

        {/* Glossy Overall Specular Sheen (Reflexo de Chocolate Derretido Macio) */}
        <path
          d="M-60 -30 C-30 -70 30 -70 60 -30"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity="0.65"
        />
        <circle cx="-25" cy="-55" r="4" fill="#FFFFFF" opacity="1" />
        <circle cx="20" cy="-55" r="3" fill="#FFFFFF" opacity="1" />
      </g>
    </g>
  );
}

export function BrasilBoloCenouraIllustration() {
  return (
    <g id="brasil-bolo-cenoura">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="300" ry="55" fill="url(#tableOcclusionShadow)" />

      {/* Ceramic Cake Plate */}
      <ellipse cx="400" cy="650" rx="280" ry="65" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="260" ry="55" fill="url(#plateCeramicGrad)" />

      {/* Generous Slice of Vibrant Orange Carrot Cake (Fatia Farta de Bolo de Cenoura) */}
      <g id="cake-slice" transform="translate(400, 480)">
        {/* Shadow under slice */}
        <path d="M-140 120 L130 140 L160 170 L-160 150 Z" fill="#1C1917" opacity="0.35" />

        {/* Soft, Fluffy, Porous Carrot Crumb Body */}
        <path
          d="M-150 120 L30 145 L150 40 L-30 15 Z"
          fill="url(#carrotCakeCrumbGrad)"
          filter="url(#foodPorousNoise)"
        />
        {/* Back Wall of Slice */}
        <path
          d="M-30 15 L150 40 L150 -60 L-30 -85 Z"
          fill="url(#carrotCakeBackGrad)"
        />

        {/* Top Surface of Slice */}
        <path
          d="M-150 20 L30 45 L150 -60 L-30 -85 Z"
          fill="url(#carrotCakeTopCrumbGrad)"
        />

        {/* Natural Crumb Texture Specks */}
        <g fill="#EA580C" opacity="0.8">
          <circle cx="-80" cy="70" r="3" />
          <circle cx="-30" cy="90" r="2.5" />
          <circle cx="20" cy="85" r="3" />
          <circle cx="-100" cy="50" r="2.5" />
          <circle cx="70" cy="80" r="3" />
        </g>

        {/* Legendary Crackled Crunchy Chocolate Topping (Calda Crocante de Chocolate que Craquela) */}
        <g id="chocolate-casquinha-crocante">
          {/* Thick Solid Crust on Top */}
          <path
            d="M-155 15 L35 40 L155 -65 L-25 -90 Z"
            fill="url(#chocolateCaldaGrad)"
          />

          {/* Crackle Fissures on the Chocolate Crust */}
          <path d="M-60 -20 L-20 -10 L10 -40 L50 -35" stroke="#18181B" strokeWidth="2.5" fill="none" opacity="0.8" />
          <path d="M-100 5 L-70 0 L-60 -20" stroke="#18181B" strokeWidth="2" fill="none" opacity="0.8" />
          <path d="M10 -10 L40 15 L70 5" stroke="#18181B" strokeWidth="2" fill="none" opacity="0.8" />

          {/* Luscious, Glossy Chocolate Drips Cascading Down the Cut Surface */}
          <path
            d="M-155 15 C-150 45 -135 60 -138 80 C-140 95 -130 105 -125 108 C-120 108 -125 90 -120 70 C-115 50 -130 35 -130 15 Z"
            fill="url(#chocolateDripGrad)"
          />
          <path
            d="M-90 25 C-85 55 -75 75 -78 95 C-80 110 -70 120 -65 125 C-60 120 -68 100 -62 80 C-58 60 -70 40 -70 25 Z"
            fill="url(#chocolateDripGrad)"
          />
          <path
            d="M0 38 C5 65 18 80 15 105 C12 120 22 135 28 140 C32 135 25 115 28 95 C30 75 20 55 20 38 Z"
            fill="url(#chocolateDripGrad)"
          />

          {/* Chocolate Puddle on Plate Base */}
          <ellipse cx="-60" cy="130" rx="35" ry="10" fill="url(#chocolateCaldaGrad)" />
          <ellipse cx="30" cy="142" rx="25" ry="8" fill="url(#chocolateCaldaGrad)" />

          {/* Specular Highlights on the Chocolate Drips */}
          <path
            d="M-135 30 L-135 75"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          <circle cx="-135" cy="78" r="2.5" fill="#FFFFFF" opacity="1" />

          <path
            d="M-75 35 L-74 85"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          <circle cx="-74" cy="90" r="3" fill="#FFFFFF" opacity="1" />

          <path
            d="M12 48 L15 95"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
          />
          <circle cx="16" cy="100" r="2.5" fill="#FFFFFF" opacity="1" />

          {/* Top crust high specular shine */}
          <path
            d="M-120 10 L0 30"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.6"
          />
          <circle cx="-60" cy="20" r="3" fill="#FFFFFF" opacity="1" />
        </g>
      </g>
    </g>
  );
}
