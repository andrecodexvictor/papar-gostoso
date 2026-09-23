import React from 'react';

/**
 * Photorealistic Vector Gastronomic Illustrations for Japanese Cuisine, Salads & Drinks
 * Compliant with:
 * - 0 0 800 800 coordinate scale
 * - Multi-stop gradients (4-5 color stops)
 * - Specular highlights (0.6-0.9 opacity paths, 1.0 hot spots) for broths, raw fish, creams
 * - Organic textures & realistic food aesthetics
 */

export function JapanRamenIllustration() {
  return (
    <g id="japan-ramen-bowl">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Traditional Ceramic Ramen Donburi Bowl (Tigela Japonesa com Borda Preta e Vermelha) */}
      <ellipse cx="400" cy="650" rx="280" ry="60" fill="#18181B" />
      <path
        d="M130 460 C120 620 230 670 400 670 C570 670 680 620 670 460 C660 420 620 400 400 400 C180 400 140 420 130 460 Z"
        fill="url(#ramenBowlGrad)"
      />
      {/* Bowl Rim & Lip */}
      <ellipse cx="400" cy="420" rx="265" ry="58" fill="#18181B" stroke="#991B1B" strokeWidth="6" />

      {/* Rich Golden Tonkotsu/Shoyu Broth with Shimmering Oil Droplets (Caldo Fumegante com Gotas de Óleo) */}
      <ellipse cx="400" cy="425" rx="250" ry="52" fill="url(#ramenBrothGrad)" />

      {/* Wavy Ramen Noodles (Fios de Macarrão Artesanal Submersos no Caldo) */}
      <g stroke="url(#ramenNoodleGrad)" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.9">
        <path d="M260 410 Q320 440 380 415 Q440 390 500 420" />
        <path d="M240 425 Q300 460 360 430 Q420 405 480 435" />
        <path d="M280 435 Q340 465 400 440 Q460 420 520 445" />
        <path d="M250 445 Q310 475 370 450 Q430 435 490 460" />
      </g>

      {/* Chashu Pork Belly Slices (Fatias de Barriga de Porco Chashu Braseadas) */}
      <g id="chashu-slices" transform="translate(320, 390)">
        <ellipse cx="0" cy="0" rx="65" ry="38" fill="url(#chashuMeatGrad)" />
        {/* Swirl of Braised Pork Belly Fat */}
        <path
          d="M-45 -10 C-30 -30 20 -30 45 -10 C50 15 20 25 -5 20 C-30 15 -35 -5 -15 -10 C0 -15 15 -5 10 5"
          stroke="url(#chashuFatGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        {/* Charred Braised Edges */}
        <ellipse cx="0" cy="0" rx="65" ry="38" stroke="#451A03" strokeWidth="3" fill="none" />
        {/* Sweet Glaze Specular Sheen */}
        <path d="M-30 -15 Q0 -25 35 -10" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85" />
        <circle cx="5" cy="-20" r="2.5" fill="#FFFFFF" opacity="1" />
      </g>

      {/* Ajitsuke Tamago (Ovo Marinado Partido ao Meio com Gema Mole Gelatinosa) */}
      <g id="ramen-egg" transform="translate(480, 420) rotate(-15)">
        {/* Brown Shoyu Marinated Egg White Edge */}
        <ellipse cx="0" cy="0" rx="42" ry="30" fill="url(#ramenEggWhiteGrad)" />
        {/* Glorious Jammy Soft Egg Yolk (Gema Cremosa Âmbar) */}
        <ellipse cx="0" cy="-2" rx="28" ry="20" fill="url(#ramenEggYolkGrad)" />
        {/* Specular Liquid Reflection on Jammy Yolk */}
        <path d="M-15 -8 Q0 -16 15 -8" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.9" />
        <circle cx="-5" cy="-10" r="2.5" fill="#FFFFFF" opacity="1" />
      </g>

      {/* Sweet Corn Kernels & Crisp Nori Seaweed Sheet (Milho Doce e Alga Nori Crocante) */}
      {/* Nori Sheet */}
      <polygon points="180,310 240,290 280,390 220,410" fill="#09090B" opacity="0.95" />
      <path d="M190 320 L270 395" stroke="#14532D" strokeWidth="2" opacity="0.4" />

      {/* Sweet Golden Corn Kernels */}
      <g id="corn-cluster" transform="translate(410, 460)">
        {[
          { cx: -25, cy: -5 },
          { cx: -10, cy: -8 },
          { cx: 5, cy: -6 },
          { cx: -18, cy: 8 },
          { cx: -2, cy: 6 },
          { cx: 12, cy: 7 },
        ].map((c, i) => (
          <g key={i}>
            <ellipse cx={c.cx} cy={c.cy} rx="7" ry="5" fill="url(#cornGrad)" />
            <circle cx={c.cx - 1} cy={c.cy - 1} r="1.5" fill="#FFFFFF" opacity="0.9" />
          </g>
        ))}
      </g>

      {/* Chopped Fresh Scallions & Sesame (Cebolinha Verde Fresca) */}
      <g fill="#22C55E">
        <circle cx="340" cy="445" r="4" stroke="#15803D" strokeWidth="1" />
        <circle cx="355" cy="450" r="3.5" stroke="#15803D" strokeWidth="1" />
        <circle cx="370" cy="442" r="4" stroke="#15803D" strokeWidth="1" />
      </g>

      {/* Floating Aromatic Sesame Oil Beads (Gotículas de Óleo de Gergelim Flutuando) */}
      <g fill="#F59E0B" opacity="0.85">
        <circle cx="280" cy="415" r="4" />
        <circle cx="450" cy="410" r="3.5" />
        <circle cx="330" cy="415" r="3" />
        <circle cx="510" cy="435" r="4" />
      </g>
    </g>
  );
}

export function JapanMochiIllustration() {
  return (
    <g id="japan-ichigo-daifuku-mochi">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="300" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Wabi-Sabi Ceramic Dish */}
      <ellipse cx="400" cy="650" rx="270" ry="60" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="250" ry="50" fill="url(#slatePlateGrad)" />

      {/* Cut Daifuku Mochi Revealing Ripe Strawberry (Mochi de Morango Cortado ao Meio com Recheio) */}
      <g id="mochi-strawberry" transform="translate(400, 500)">
        {/* Shadow */}
        <ellipse cx="0" cy="100" rx="160" ry="35" fill="#1C1917" opacity="0.4" />

        {/* Outer Translucent White Mochiko Dough (Massa Fofa e Elástica de Arroz Glutinoso) */}
        <path
          d="M-140 70 
             C-160 -30 -100 -110 0 -110 
             C100 -110 160 -30 140 70 
             C120 110 60 120 0 120 
             C-60 120 -120 110 -140 70 Z"
          fill="url(#mochiDoughGrad)"
          filter="url(#foodPorousNoise)"
        />

        {/* Cornstarch Powder Dusting on Mochi */}
        <path
          d="M-110 40 C-130 -30 -80 -80 0 -80 C80 -80 130 -30 110 40"
          stroke="#F8FAFC"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
          filter="url(#steamBlur)"
        />

        {/* Inner Chocolate / Sweet Red Bean Paste Layer (Camada Aveludada de Chocolate / Anko) */}
        <path
          d="M-95 55 
             C-110 -10 -65 -75 0 -75 
             C65 -75 110 -10 95 55 
             C80 85 40 90 0 90 
             C-40 90 -80 85 -95 55 Z"
          fill="url(#ankoChocolateGrad)"
        />

        {/* Center: Lush, Ripe, Sweet Red Strawberry (Morango Doce e Suculento Inteiro) */}
        <g id="fresh-strawberry">
          {/* Strawberry Body */}
          <path
            d="M0 -65 C55 -60 75 10 0 70 C-75 10 -55 -60 0 -65 Z"
            fill="url(#strawberryGrad)"
          />
          {/* Strawberry Core & Flesh Rings */}
          <path
            d="M0 -50 C35 -45 50 5 0 50 C-50 5 -35 -45 0 -50 Z"
            fill="url(#strawberryCoreGrad)"
          />

          {/* Golden Achene Seeds with Micro-Highlights */}
          <g fill="#FEF08A">
            {[-25, 0, 25].map((x, i) => (
              <React.Fragment key={i}>
                <ellipse cx={x} cy="-30" rx="2" ry="3.5" transform="rotate(10)" />
                <ellipse cx={x - 10} cy="-10" rx="2" ry="3.5" transform="rotate(-15)" />
                <ellipse cx={x + 10} cy="10" rx="2" ry="3.5" transform="rotate(20)" />
              </React.Fragment>
            ))}
          </g>

          {/* Juicy Specular Droplets & Sheen on Cut Strawberry */}
          <path
            d="M-30 -20 Q0 -35 30 -20"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          <circle cx="-8" cy="-25" r="2.5" fill="#FFFFFF" opacity="1" />
          <circle cx="12" cy="-22" r="2.5" fill="#FFFFFF" opacity="1" />
        </g>
      </g>
    </g>
  );
}

export function JapanPokeIllustration() {
  return (
    <g id="japan-poke-salmon">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Ceramic Poke Bowl */}
      <ellipse cx="400" cy="650" rx="280" ry="60" fill="#E2E8F0" />
      <path
        d="M130 460 C120 620 230 670 400 670 C570 670 680 620 670 460 C660 420 620 400 400 400 C180 400 140 420 130 460 Z"
        fill="url(#pokeBowlGrad)"
      />
      <ellipse cx="400" cy="420" rx="265" ry="55" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="4" />

      {/* Seasoned Sushi Rice Base */}
      <ellipse cx="400" cy="425" rx="250" ry="50" fill="url(#gohanRiceGrad)" />

      {/* Section 1: Fresh Raw Salmon Cubes (Cubos de Salmão Rosado Fresco Glistening with Sesame Oil) */}
      <g id="salmon-cubes" transform="translate(340, 420)">
        {[
          { x: -50, y: -20, s: 42, rot: 15 },
          { x: 0, y: -30, s: 44, rot: -10 },
          { x: -30, y: 15, s: 40, rot: 25 },
          { x: 20, y: 5, s: 45, rot: -20 },
        ].map((cube, i) => (
          <g key={i} transform={`translate(${cube.x}, ${cube.y}) rotate(${cube.rot})`}>
            {/* Cube shadow */}
            <rect x={-cube.s / 2 + 2} y={-cube.s / 2 + 3} width={cube.s} height={cube.s} rx="6" fill="#1C1917" opacity="0.3" />
            {/* Salmon Flesh */}
            <rect x={-cube.s / 2} y={-cube.s / 2} width={cube.s} height={cube.s} rx="6" fill="url(#salmonFleshGrad)" />
            {/* White Marbling Lines */}
            <line x1={-cube.s / 2} y1={-cube.s / 4} x2={cube.s / 2} y2={cube.s / 4} stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
            <line x1={-cube.s / 2} y1={cube.s / 8} x2={cube.s / 2} y2={cube.s / 2} stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
            {/* Sesame Oil Glisten Specular */}
            <path d={`M${-cube.s / 3} ${-cube.s / 3} L${cube.s / 4} ${-cube.s / 3}`} stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
            <circle cx={0} cy={-cube.s / 3} r="2" fill="#FFFFFF" opacity="1" />
          </g>
        ))}
      </g>

      {/* Section 2: Fan of Creamy Sliced Avocado (Leque de Fatias de Abacate) */}
      <g id="avocado-fan" transform="translate(470, 410) rotate(20)">
        {[0, 15, 30, 45].map((off, i) => (
          <path
            key={i}
            d={`M${-60 + off} -10 C${-40 + off} -40 ${20 + off} -40 ${40 + off} -10 C${30 + off} 15 ${-30 + off} 15 ${-60 + off} -10 Z`}
            fill="url(#avocadoGrad)"
            stroke="#15803D"
            strokeWidth="1.5"
          />
        ))}
      </g>

      {/* Section 3: Bright Green Edamame Beans (Edamame Fresco) */}
      <g fill="url(#edamameGrad)" stroke="#166534" strokeWidth="1" transform="translate(420, 455)">
        <ellipse cx="-20" cy="0" rx="12" ry="8" transform="rotate(-20 -20 0)" />
        <ellipse cx="0" cy="-5" rx="11" ry="8" transform="rotate(15 0 -5)" />
        <ellipse cx="20" cy="2" rx="12" ry="8" transform="rotate(-10 20 2)" />
      </g>

      {/* Black & White Toasted Sesame Seeds (Gergelim Salpicado) */}
      <g fill="#18181B">
        <circle cx="320" cy="405" r="1.5" />
        <circle cx="370" cy="425" r="1.5" />
        <circle cx="440" cy="415" r="1.5" />
      </g>
    </g>
  );
}

export function DrinkCoffeeIllustration() {
  return (
    <g id="drink-espresso-latte">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="280" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Ceramic Saucer (Pires de Café) */}
      <ellipse cx="400" cy="650" rx="260" ry="55" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="240" ry="45" fill="url(#plateCeramicGrad)" />

      {/* Cozy Ceramic Coffee Cup (Xícara Quente com Crema Aveludada) */}
      <g id="coffee-cup" transform="translate(400, 490)">
        {/* Cup Handle */}
        <path
          d="M170 0 C230 10 230 100 160 110"
          stroke="#F5F5F4"
          strokeWidth="24"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M170 0 C230 10 230 100 160 110"
          stroke="#E7E5E4"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cup Shadow */}
        <ellipse cx="0" cy="130" rx="170" ry="35" fill="#1C1917" opacity="0.4" />

        {/* Cup Body */}
        <path
          d="M-170 0 C-160 110 -110 140 0 140 C110 140 160 110 170 0 Z"
          fill="url(#coffeeCupBodyGrad)"
        />

        {/* Cup Lip Rim */}
        <ellipse cx="0" cy="0" rx="170" ry="45" fill="#FFFFFF" stroke="#E7E5E4" strokeWidth="4" />

        {/* Dark Rich Espresso Body */}
        <ellipse cx="0" cy="2" rx="155" ry="38" fill="url(#espressoLiquidGrad)" />

        {/* Velvety Hazelnut Crema with Rosetta Latte Art (Crema Aveludada com Desenho de Tulipa/Rosetta) */}
        <ellipse cx="0" cy="2" rx="150" ry="35" fill="url(#latteCremaGrad)" />

        {/* Latte Art Microfoam Pattern (Leite Vaporizado Sedoso) */}
        <g id="latte-art" fill="#FFFBEB">
          <ellipse cx="0" cy="20" rx="30" ry="12" />
          <ellipse cx="0" cy="5" rx="38" ry="14" />
          <ellipse cx="0" cy="-10" rx="42" ry="15" />
          <ellipse cx="0" cy="-22" rx="32" ry="12" />
          {/* Heart at the top */}
          <path d="M0 -32 C10 -40 22 -32 0 -18 C-22 -32 -10 -40 0 -32 Z" />
          {/* Drawn Stem Line */}
          <line x1="0" y1="-30" x2="0" y2="28" stroke="url(#espressoLiquidGrad)" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Liquid Sheen Highlight */}
        <path
          d="M-90 -10 C-40 -25 40 -25 90 -10"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
        <circle cx="-30" cy="-18" r="3" fill="#FFFFFF" opacity="1" />
      </g>

      {/* Steaming Vapor Rising */}
      <g opacity="0.4">
        <path d="M380 430 Q360 360 390 300 Q410 240 380 180" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" fill="none" filter="url(#steamBlur)" />
        <path d="M430 420 Q450 350 420 280 Q400 210 420 150" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" fill="none" filter="url(#steamBlur)" />
      </g>
    </g>
  );
}

export function SaladCaesarIllustration() {
  return (
    <g id="salad-caesar-fresh">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />
      <ellipse cx="400" cy="650" rx="290" ry="65" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="270" ry="55" fill="url(#plateCeramicGrad)" />

      {/* Crisp Romaine Leaves, Golden Sourdough Croutons, Parmesan Shavings & Creamy Caesar Dressing */}
      <g id="caesar-salad" transform="translate(400, 510)">
        {/* Romaine Lettuce Leaves */}
        <g id="romaine-leaves">
          <path d="M-150 20 C-130 -40 -40 -60 0 -30 C-60 10 -110 30 -150 20 Z" fill="url(#lettuceGrad)" />
          <path d="M-60 -30 C0 -80 80 -60 120 -20 C60 0 10 -10 -60 -30 Z" fill="url(#lettuceGrad)" />
          <path d="M20 -20 C80 -60 150 -30 160 30 C90 30 50 10 20 -20 Z" fill="url(#lettuceGrad)" />
          <path d="M-100 40 C-30 0 50 10 110 50 C20 60 -50 60 -100 40 Z" fill="url(#lettuceGrad)" />
        </g>

        {/* Golden Crunchy Sourdough Croutons (Croutons Dourados Crocantes) */}
        <g id="croutons">
          {[
            { x: -70, y: -10, rot: 15, s: 32 },
            { x: 30, y: -25, rot: -20, s: 35 },
            { x: 80, y: 15, rot: 30, s: 30 },
            { x: -20, y: 25, rot: -10, s: 34 },
          ].map((c, i) => (
            <g key={i} transform={`translate(${c.x}, ${c.y}) rotate(${c.rot})`}>
              <rect x={-c.s / 2} y={-c.s / 2} width={c.s} height={c.s} rx="4" fill="url(#croutonGrad)" />
              <path d={`M${-c.s / 3} ${-c.s / 3} L${c.s / 3} ${-c.s / 3}`} stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
            </g>
          ))}
        </g>

        {/* Shaved Parmigiano Reggiano Ribbons */}
        <g fill="#FFFBEB" opacity="0.95">
          <path d="M-50 -15 Q-10 -35 30 -20 Q0 -5 -50 -15 Z" stroke="#E2E8F0" strokeWidth="1" />
          <path d="M10 5 Q50 -10 80 10 Q40 20 10 5 Z" stroke="#E2E8F0" strokeWidth="1" />
          <path d="M-90 10 Q-60 -10 -30 15 Q-70 25 -90 10 Z" stroke="#E2E8F0" strokeWidth="1" />
        </g>

        {/* Creamy Caesar Dressing Drizzle */}
        <path
          d="M-110 10 Q-50 -10 10 15 Q70 -5 130 20"
          stroke="url(#creamyMayoGrad)"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M-100 10 Q-45 -10 10 15 Q65 -5 120 20"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
      </g>
    </g>
  );
}

export function JapanGyozaIllustration() {
  return (
    <g id="japan-gyoza-crispy" filter="url(#dropShadowFilter)">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Rectangular Japanese Ceramic Plate (Prato Retangular de Cerâmica Tradicional) */}
      <rect x="130" y="440" width="540" height="230" rx="20" fill="url(#cuttingBoardWoodGrad)" stroke="#1C1917" strokeWidth="4" />
      <rect x="145" y="455" width="510" height="200" rx="14" fill="#262626" />

      {/* Small Soy-Chili-Sesame Dipping Sauce Bowl (Tara) */}
      <g transform="translate(560, 540)">
        <ellipse cx="0" cy="0" rx="55" ry="35" fill="#171717" stroke="#404040" strokeWidth="3" />
        <ellipse cx="0" cy="-2" rx="46" ry="28" fill="url(#shoyuSauceGrad)" />
        {/* Drops of chili/sesame oil */}
        <circle cx="-15" cy="-5" r="7" fill="#DC2626" opacity="0.85" />
        <circle cx="15" cy="5" r="5" fill="#DC2626" opacity="0.85" />
        <circle cx="0" cy="-10" r="2.5" fill="#FFFFFF" opacity="0.9" />
        {/* Scallion rings in sauce */}
        <circle cx="-5" cy="0" r="4" fill="none" stroke="#22C55E" strokeWidth="2" />
      </g>

      {/* Row of 5 Crispy Pan-Fried Gyozas with Golden Brown Skirt (Hane) */}
      <g id="gyozas-row">
        {[
          { x: 210, y: 535, rot: -8 },
          { x: 280, y: 530, rot: -4 },
          { x: 350, y: 525, rot: 0 },
          { x: 420, y: 520, rot: 4 },
          { x: 490, y: 515, rot: 8 },
        ].map((g, i) => (
          <g key={i} transform={`translate(${g.x}, ${g.y}) rotate(${g.rot})`}>
            {/* Cast shadow */}
            <ellipse cx="0" cy="25" rx="45" ry="16" fill="#0C0A09" opacity="0.5" />
            {/* Golden-brown crispy fried lace bottom edge (Crosta Dourada e Crocante) */}
            <path d="M-40 18 Q0 30 40 18 Q20 38 -20 38 Z" fill="url(#gyozaSearGrad)" />
            {/* Dumpling Crescent Body */}
            <path
              d="M-45 15 C-40 -15 -15 -35 0 -35 C15 -35 40 -15 45 15 C30 25 -30 25 -45 15 Z"
              fill="url(#gyozaSkinGrad)"
            />
            {/* Delicately pleated top seam (Dobras tradicionais de gyoza) */}
            <path d="M-30 -15 Q-20 -25 -15 -18" stroke="#D97706" strokeWidth="2.5" fill="none" />
            <path d="M-15 -22 Q0 -32 5 -24" stroke="#D97706" strokeWidth="2.5" fill="none" />
            <path d="M5 -24 Q20 -30 25 -18" stroke="#D97706" strokeWidth="2.5" fill="none" />
            <path d="M25 -18 Q35 -20 38 -5" stroke="#D97706" strokeWidth="2.5" fill="none" />
            {/* Translucent steamed skin specular highlight */}
            <ellipse cx="0" cy="-10" rx="20" ry="6" fill="#FFFFFF" opacity="0.7" />
          </g>
        ))}
      </g>

      {/* Finely Sliced Scallions Garnish */}
      <g fill="none" stroke="#16A34A" strokeWidth="2">
        <circle cx="260" cy="560" r="3.5" />
        <circle cx="380" cy="570" r="4" />
        <circle cx="450" cy="555" r="3.5" />
      </g>
    </g>
  );
}

export function JapanKaraageIllustration() {
  return (
    <g id="japan-karaage-chicken" filter="url(#dropShadowFilter)">
      {/* Table shadow */}
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Ceramic plate with bamboo sheet */}
      <ellipse cx="400" cy="630" rx="310" ry="180" fill="url(#plateCeramicGrad)" stroke="#E5E7EB" strokeWidth="4" />
      <ellipse cx="400" cy="620" rx="280" ry="155" fill="url(#plateInnerShadow)" />

      {/* Mountain of Craggy Golden-Brown Crispy Chicken Bites (Pedaços Crocantes de Frango Frito Karaage) */}
      <g id="karaage-bites" transform="translate(380, 520)">
        {[
          { x: -90, y: 30, r: 42, rot: 15 },
          { x: -20, y: 40, r: 45, rot: -20 },
          { x: 60, y: 35, r: 40, rot: 30 },
          { x: -60, y: -20, r: 44, rot: 40 },
          { x: 20, y: -25, r: 46, rot: -10 },
          { x: -10, y: -70, r: 42, rot: 25 },
        ].map((b, i) => (
          <g key={i} transform={`translate(${b.x}, ${b.y}) rotate(${b.rot})`}>
            {/* Cast shadow */}
            <ellipse cx="0" cy="20" rx={b.r} ry={b.r / 2} fill="#1C1917" opacity="0.4" />
            {/* Organic craggy fried silhouette */}
            <path
              d={`M${-b.r} 0 C${-b.r} ${-b.r * 0.9} ${b.r * 0.4} ${-b.r * 1.1} ${b.r} 0 C${b.r * 1.1} ${b.r * 0.8} ${-b.r * 0.4} ${b.r * 1.1} ${-b.r} 0 Z`}
              fill="url(#chickenKaraageGrad)"
              filter="url(#foodPorousNoise)"
            />
            {/* Crispy potato starch crust cracks */}
            <path d={`M${-b.r / 2} 0 Q0 ${-b.r / 3} ${b.r / 2} 0`} stroke="#78350F" strokeWidth="3" fill="none" opacity="0.8" />
            {/* Specular oil sheen */}
            <circle cx={-b.r / 3} cy={-b.r / 3} r="3" fill="#FFFFFF" opacity="0.8" />
            <ellipse cx={b.r / 4} cy={-b.r / 4} rx="8" ry="3" fill="#FFFFFF" opacity="0.75" />
          </g>
        ))}
      </g>

      {/* Fresh Juicy Lemon Wedge on the side */}
      <g transform="translate(560, 560) rotate(-25)">
        <path d="M-40 0 C-40 -40 40 -40 40 0 Z" fill="#FACC15" stroke="#EAB308" strokeWidth="3" />
        <path d="M-34 -3 C-34 -32 34 -32 34 -3 Z" fill="#FEF08A" />
        {/* Lemon pulp segments */}
        <path d="M0 -3 L0 -30 M-15 -3 L-20 -25 M15 -3 L20 -25" stroke="#FACC15" strokeWidth="2" />
        <circle cx="-10" cy="-15" r="2" fill="#FFFFFF" opacity="0.9" />
      </g>

      {/* Kewpie Japanese Mayonnaise Dollop */}
      <g transform="translate(220, 580)">
        <ellipse cx="0" cy="15" rx="35" ry="18" fill="#1C1917" opacity="0.25" />
        <ellipse cx="0" cy="0" rx="30" ry="22" fill="url(#creamyMayoGrad)" />
        {/* Mayonnaise swirl peak */}
        <path d="M-15 5 Q0 -20 15 5" fill="url(#creamyMayoGrad)" />
        <ellipse cx="-5" cy="-5" rx="10" ry="4" fill="#FFFFFF" opacity="0.9" />
      </g>
    </g>
  );
}

export function SaladGreekIllustration() {
  return (
    <g id="salad-grega-mediterranea" filter="url(#dropShadowFilter)">
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />
      <ellipse cx="400" cy="640" rx="300" ry="75" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="635" rx="275" ry="62" fill="url(#plateCeramicGrad)" />

      <g id="greek-salad-mound" transform="translate(400, 520)">
        {/* Crisp European Cucumbers (Pepinos em Meia-Lua) */}
        <g id="cucumbers">
          {[-120, -50, 40, 110, -80, 80].map((x, i) => (
            <g key={i} transform={`translate(${x}, ${-10 + (i % 3) * 20}) rotate(${i * 35})`}>
              <ellipse cx="0" cy="0" rx="28" ry="18" fill="#86EFAC" stroke="#15803D" strokeWidth="4" />
              <ellipse cx="0" cy="0" rx="18" ry="10" fill="#BBF7D0" />
            </g>
          ))}
        </g>

        {/* Juicy Ripe Tomato Wedges (Gomos de Tomates Maduros e Suculentos) */}
        <g id="tomatoes">
          {[-90, -20, 60, -40, 30].map((x, i) => (
            <g key={i} transform={`translate(${x}, ${-30 + (i % 3) * 25}) rotate(${i * -40})`}>
              <path d="M-30 0 C-30 -35 30 -35 30 0 Z" fill="url(#ratatouilleTomatoGrad)" />
              <ellipse cx="-8" cy="-12" rx="6" ry="3" fill="#FFFFFF" opacity="0.8" />
            </g>
          ))}
        </g>

        {/* Shiny Black Kalamata Olives */}
        <g fill="#18181B">
          {[-70, 0, 70, -30, 50].map((x, i) => (
            <g key={i} transform={`translate(${x}, ${10 + (i % 2) * 25})`}>
              <ellipse cx="0" cy="0" rx="14" ry="10" transform={`rotate(${i * 45})`} />
              <circle cx="-3" cy="-3" r="2.5" fill="#FFFFFF" opacity="0.85" />
            </g>
          ))}
        </g>

        {/* Red Onion Rings */}
        <g fill="none" stroke="#9333EA" strokeWidth="4" opacity="0.85">
          <ellipse cx="-40" cy="10" rx="35" ry="15" transform="rotate(20 -40 10)" />
          <ellipse cx="40" cy="-15" rx="30" ry="12" transform="rotate(-30 40 -15)" />
        </g>

        {/* Large Thick Slab of Real Feta Cheese on Top (Bloco de Queijo Feta com Orégano e Azeite) */}
        <g transform="translate(0, -35)">
          <rect x="-80" y="-30" width="160" height="60" rx="4" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="2" />
          {/* Feta crumbled texture */}
          <path d="M-80 -10 L-60 -8 M40 10 L70 8" stroke="#E2E8F0" strokeWidth="2" />
          {/* Dried Greek oregano flakes */}
          <g fill="#15803D" opacity="0.9">
            {[-60, -40, -20, 0, 20, 40, 60, -30, 30].map((x, i) => (
              <circle key={i} cx={x} cy={-15 + (i % 3) * 12} r="1.8" />
            ))}
          </g>
          {/* Extra Virgin Olive Oil pool & sheen */}
          <path d="M-50 -10 Q0 -20 50 -10" stroke="#FACC15" strokeWidth="6" strokeLinecap="round" opacity="0.7" fill="none" />
          <ellipse cx="0" cy="-12" rx="25" ry="4" fill="#FFFFFF" opacity="0.9" />
        </g>
      </g>
    </g>
  );
}

export function SaladPotatoIllustration() {
  return (
    <g id="salada-de-maionese-batata" filter="url(#dropShadowFilter)">
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />
      <ellipse cx="400" cy="640" rx="290" ry="65" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="632" rx="270" ry="55" fill="url(#plateCeramicGrad)" />

      {/* Creamy Brazilian-Style Potato and Carrot Salad (Salada de Batata com Maionese e Ervas) */}
      <g id="potato-salad-mound" transform="translate(400, 520)">
        {/* Velvety Mayonnaise Base Bed */}
        <ellipse cx="0" cy="20" rx="180" ry="65" fill="url(#creamyMayoGrad)" />

        {/* Diced Tender Potatoes (Cubos de Batata Cozida Macia) */}
        <g id="potato-cubes">
          {[-100, -50, 0, 50, 100, -70, -20, 40, 80, -30, 20].map((x, i) => (
            <g key={i} transform={`translate(${x}, ${-20 + (i % 4) * 20}) rotate(${i * 20})`}>
              <rect x="-18" y="-14" width="36" height="28" rx="5" fill="#FEF08A" stroke="#FDE047" strokeWidth="2" />
              <circle cx="-5" cy="-5" r="3" fill="#FFFFFF" opacity="0.8" />
            </g>
          ))}
        </g>

        {/* Diced Sweet Carrots (Cubinhos de Cenoura Laranja) */}
        <g fill="#EA580C">
          {[-80, -30, 20, 70, -60, 40, 0].map((x, i) => (
            <rect key={i} x={x} y={-10 + (i % 3) * 20} width="16" height="14" rx="3" transform={`rotate(${i * 45} ${x} ${-10 + (i % 3) * 20})`} />
          ))}
        </g>

        {/* Sliced Hard-Boiled Egg on top (Ovo Cozido em Rodelas) */}
        <g transform="translate(0, -40)">
          <ellipse cx="0" cy="0" rx="45" ry="30" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="2" />
          <ellipse cx="0" cy="0" rx="25" ry="18" fill="#FACC15" />
          <ellipse cx="-4" cy="-4" rx="12" ry="8" fill="#EAB308" />
          <circle cx="-5" cy="-5" r="3" fill="#FFFFFF" opacity="0.9" />
        </g>

        {/* Fresh Finely Chopped Parsley & Chives (Cheiro-Verde Fresco Salpicado) */}
        <g fill="#15803D">
          {[-90, -60, -30, 0, 30, 60, 90, -45, 45, -15, 75].map((x, i) => (
            <rect key={i} x={x} y={-30 + (i % 5) * 15} width="6" height="3" rx="1" transform={`rotate(${i * 30} ${x} ${-30 + (i % 5) * 15})`} />
          ))}
        </g>

        {/* Creamy Mayo Gloss Sheen */}
        <g fill="#FFFFFF" opacity="0.85">
          <ellipse cx="-40" cy="15" rx="18" ry="5" />
          <ellipse cx="50" cy="10" rx="16" ry="4" />
          <circle cx="10" cy="30" r="3.5" />
        </g>
      </g>
    </g>
  );
}

export function SaladTropicalIllustration() {
  return (
    <g id="salada-tropical-colorida" filter="url(#dropShadowFilter)">
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />
      <ellipse cx="400" cy="640" rx="290" ry="65" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="632" rx="270" ry="55" fill="url(#plateCeramicGrad)" />

      {/* Tropical Summer Salad: Leaves, Ripe Mango Cubes, Sliced Strawberries & Cashews */}
      <g id="tropical-salad-mound" transform="translate(400, 520)">
        {/* Mixed Fresh Greens Base */}
        <g fill="url(#lettuceGrad)">
          <path d="M-140 20 C-120 -30 -30 -50 0 -20 C-60 10 -100 30 -140 20 Z" />
          <path d="M-50 -30 C0 -70 70 -50 110 -15 C50 0 10 -10 -50 -30 Z" />
          <path d="M20 -20 C70 -50 140 -20 150 30 C80 30 50 10 20 -20 Z" />
        </g>

        {/* Golden Ripe Mango Cubes (Cubos de Manga Rosa Doce) */}
        <g fill="url(#queijoCoalhoTopGrad)">
          {[-80, -30, 20, 70, -50, 40].map((x, i) => (
            <rect key={i} x={x} y={-25 + (i % 3) * 20} width="25" height="22" rx="4" transform={`rotate(${i * 25} ${x} ${-25 + (i % 3) * 20})`} />
          ))}
        </g>

        {/* Fresh Ruby Strawberry Halves (Morangos Frescos Suculentos) */}
        <g fill="url(#ratatouilleTomatoGrad)">
          {[-60, 0, 60, -20, 30].map((x, i) => (
            <g key={i} transform={`translate(${x}, ${-10 + (i % 2) * 25}) rotate(${i * -35})`}>
              <path d="M-15 0 C-15 -25 15 -25 15 0 C15 15 0 25 0 25 C0 25 -15 15 -15 0 Z" />
              <circle cx="-4" cy="-5" r="2" fill="#FFFFFF" opacity="0.8" />
            </g>
          ))}
        </g>

        {/* Toasted Cashew Nuts (Castanhas-de-Caju Tostadas) */}
        <g fill="#D97706">
          {[-90, -40, 10, 50, 80].map((x, i) => (
            <path key={i} d={`M${x} ${-15 + (i % 3) * 15} Q${x + 15} ${-25 + (i % 3) * 15} ${x + 20} ${-5 + (i % 3) * 15} Q${x + 10} ${-10 + (i % 3) * 15} ${x} ${-15 + (i % 3) * 15} Z`} />
          ))}
        </g>

        {/* Citrus Honey Vinaigrette Droplets */}
        <g fill="#FFFFFF" opacity="0.85">
          <circle cx="-30" cy="-20" r="3" />
          <circle cx="20" cy="-15" r="3" />
          <circle cx="50" cy="15" r="2.5" />
        </g>
      </g>
    </g>
  );
}

export function DrinkIcedCoffeeIllustration() {
  return (
    <g id="iced-coffee-tall-glass" filter="url(#dropShadowFilter)">
      <ellipse cx="400" cy="720" rx="200" ry="35" fill="url(#tableOcclusionShadow)" />

      {/* Tall Highball Glass with Condensation & Swirling Milk and Dark Espresso */}
      <g transform="translate(400, 470)">
        {/* Glass base */}
        <ellipse cx="0" cy="190" rx="90" ry="25" fill="#E2E8F0" opacity="0.7" />
        <ellipse cx="0" cy="185" rx="85" ry="22" fill="#CBD5E1" />

        {/* Glass body */}
        <path d="M-90 -160 L-80 180 C-80 195 80 195 80 180 L90 -160 Z" fill="url(#glassWallGrad)" opacity="0.4" />

        {/* Cold Chilled Milk Layer (Base) */}
        <path d="M-80 80 L-78 180 C-78 190 78 190 78 180 L80 80 Z" fill="#FFFBEB" />

        {/* Swirling Gradient of Dark Cold Brew & Milk in the Middle */}
        <path d="M-85 -40 L-80 80 Q0 90 80 80 L85 -40 Z" fill="url(#icedCoffeeSwirlGrad)" />

        {/* Intense Dark Cold Brew Espresso on Top */}
        <path d="M-90 -140 L-85 -40 Q0 -30 85 -40 L90 -140 Z" fill="url(#espressoLiquidGrad)" />

        {/* Floating Clear Glistening Ice Cubes */}
        <g id="ice-cubes">
          {/* Ice cube 1 */}
          <rect x="-50" y="-120" width="45" height="40" rx="6" fill="#FFFFFF" opacity="0.45" stroke="#FFFFFF" strokeWidth="2" transform="rotate(-15 -50 -120)" />
          {/* Ice cube 2 */}
          <rect x="10" y="-90" width="48" height="42" rx="6" fill="#FFFFFF" opacity="0.5" stroke="#FFFFFF" strokeWidth="2" transform="rotate(20 10 -90)" />
          {/* Ice cube 3 */}
          <rect x="-30" y="-30" width="44" height="38" rx="6" fill="#FFFFFF" opacity="0.4" stroke="#FFFFFF" strokeWidth="2" transform="rotate(10 -30 -30)" />
        </g>

        {/* Tall Glass Rim */}
        <ellipse cx="0" cy="-160" rx="90" ry="22" fill="none" stroke="#FFFFFF" strokeWidth="4" opacity="0.85" />
        <ellipse cx="0" cy="-160" rx="86" ry="20" fill="url(#espressoLiquidGrad)" />

        {/* Glass Specular Highlights */}
        <path d="M-75 -150 L-68 160" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" opacity="0.75" />
        <path d="M72 -150 L65 160" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />

        {/* Cold Condensation Droplets on Glass */}
        <g fill="#FFFFFF" opacity="0.9">
          <circle cx="-50" cy="-80" r="2.5" />
          <circle cx="-48" cy="-50" r="3" />
          <circle cx="-52" cy="10" r="2.5" />
          <circle cx="50" cy="-70" r="3" />
          <circle cx="48" cy="-20" r="2.5" />
          <circle cx="52" cy="40" r="3" />
          <circle cx="0" cy="100" r="3" />
        </g>
      </g>
    </g>
  );
}

export function DrinkCappuccinoIllustration() {
  return (
    <g id="cappuccino-cremoso" filter="url(#dropShadowFilter)">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="270" ry="45" fill="url(#tableOcclusionShadow)" />

      {/* Ceramic Saucer (Pires) */}
      <ellipse cx="400" cy="650" rx="280" ry="70" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="255" ry="60" fill="url(#plateCeramicGrad)" />

      {/* Ceramic Coffee Cup (Xícara) */}
      <g transform="translate(400, 520)">
        {/* Handle */}
        <path d="M160 0 C240 10 240 90 160 90" stroke="#1F2937" strokeWidth="30" strokeLinecap="round" fill="none" />
        <path d="M160 0 C230 10 230 90 160 90" stroke="#374151" strokeWidth="22" strokeLinecap="round" fill="none" />

        {/* Cup Body */}
        <path d="M-170 -40 C-170 120 170 120 170 -40 Z" fill="url(#coffeeMugGrad)" />

        {/* Liquid Surface */}
        <ellipse cx="0" cy="-40" rx="165" ry="65" fill="#3D1D09" />
        {/* Rich Crema Ring */}
        <ellipse cx="0" cy="-40" rx="155" ry="58" fill="url(#coffeeCremaGrad)" />

        {/* Thick Velvety Steamed Milk Micro-foam Heart (Arte Latte / Espuma Densada) */}
        <path
          d="M0 5 C-80 -40 -70 -90 0 -60 C70 -90 80 -40 0 5 Z"
          fill="#FFFBEB"
        />

        {/* Cinnamon & Fine Cocoa Powder Dusting (Canela e Cacau em Pó Polvilhados) */}
        <g fill="#451A03" opacity="0.85">
          {[-50, -25, 0, 25, 50, -35, 35, -15, 15].map((x, i) => (
            <circle key={i} cx={x} cy={-50 + (i % 3) * 15} r="1.8" />
          ))}
        </g>

        {/* Liquid and Foam Sheen */}
        <path d="M-100 -50 C-50 -75 50 -75 100 -50" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.8" fill="none" />
        <circle cx="-40" cy="-60" r="3" fill="#FFFFFF" opacity="1" />
      </g>

      {/* Steaming Aromatic Vapor */}
      <g opacity="0.35">
        <path d="M380 430 Q360 350 390 280 Q410 210 380 150" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" fill="none" filter="url(#steamBlur)" />
        <path d="M430 420 Q450 340 420 270 Q400 200 420 140" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" fill="none" filter="url(#steamBlur)" />
      </g>
    </g>
  );
}

