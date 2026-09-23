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
