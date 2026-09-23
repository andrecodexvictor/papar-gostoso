import React from 'react';

/**
 * Photorealistic Vector Gastronomic Illustrations for Pastas & Italian Cuisine
 * Compliant with:
 * - 0 0 800 800 coordinate scale
 * - Multi-stop gradients (4-5 color stops)
 * - Specular highlights (0.6-0.9 opacity paths, 1.0 hot spots) for olive oil, cheeses, sauces
 * - Organic fluidity & food textures
 */

export function PastaCarbonaraIllustration() {
  return (
    <g id="pasta-carbonara-autentica">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Classic Italian Ceramic Pasta Bowl (Prato Fundo de Massa) */}
      <ellipse cx="400" cy="650" rx="300" ry="70" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="640" rx="275" ry="60" fill="url(#plateCeramicGrad)" />
      <ellipse cx="400" cy="625" rx="220" ry="48" fill="url(#plateInnerShadow)" />

      {/* Spaghetti Carbonara Mound */}
      <g id="carbonara-nest" transform="translate(400, 520)">
        {/* Shadow */}
        <ellipse cx="0" cy="70" rx="190" ry="35" fill="#1C1917" opacity="0.4" />

        {/* Base Mound of Golden Spaghetti strands coated in Egg-Pecorino Emulsion */}
        <ellipse cx="0" cy="20" rx="180" ry="65" fill="url(#carbonaraEmulsionGrad)" />

        {/* Flowing Organic Spaghetti Strands (Fios de Espaguete com Curvas Naturais e Brilho) */}
        <g id="spaghetti-strands" stroke="url(#spaghettiNoodleGrad)" strokeWidth="11" strokeLinecap="round" fill="none">
          <path d="M-150 20 C-100 -30 -40 -10 10 -40 C60 -60 120 -30 160 10" />
          <path d="M-140 -10 C-80 -60 0 -50 60 -80 C110 -70 140 -20 150 30" />
          <path d="M-120 40 C-60 0 40 10 100 -30 C130 -10 140 30 120 50" />
          <path d="M-160 0 C-110 50 -30 20 40 40 C90 20 130 50 150 10" />
          <path d="M-90 -50 C-30 -90 50 -90 100 -40" />
          <path d="M-50 -80 C0 -110 50 -100 80 -60" />
        </g>

        {/* Specular Liquid Highlights on Coated Spaghetti Strands */}
        <g stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8">
          <path d="M-130 -12 C-80 -55 -10 -45 50 -75" />
          <path d="M-40 -78 C0 -105 40 -95 70 -58" />
          <path d="M-100 35 C-50 -2 30 5 80 -28" />
          <path d="M-135 18 C-95 -25 -40 -8 0 -35" />
        </g>
        <circle cx="10" cy="-75" r="3" fill="#FFFFFF" opacity="1" />
        <circle cx="65" cy="-60" r="3.5" fill="#FFFFFF" opacity="1" />
        <circle cx="-60" cy="-45" r="3" fill="#FFFFFF" opacity="1" />

        {/* Crispy Golden-Brown Cubes of Guanciale / Bacon (Cubos de Guanciale Dourados com Gordura Translúcida) */}
        <g id="guanciale-cubes">
          {[
            { x: -70, y: -30, rot: 15, size: 28 },
            { x: 20, y: -65, rot: -25, size: 30 },
            { x: 80, y: -20, rot: 35, size: 26 },
            { x: -30, y: 15, rot: -10, size: 32 },
            { x: 50, y: 25, rot: 20, size: 28 },
            { x: -110, y: 5, rot: -30, size: 24 },
            { x: 120, y: 0, rot: 15, size: 25 },
          ].map((cube, i) => (
            <g key={i} transform={`translate(${cube.x}, ${cube.y}) rotate(${cube.rot})`}>
              {/* Cube shadow */}
              <rect x={-cube.size / 2 + 2} y={-cube.size / 2 + 3} width={cube.size} height={cube.size} rx="5" fill="#1C1917" opacity="0.5" />
              {/* Meat & rendered crispy fat cube */}
              <rect x={-cube.size / 2} y={-cube.size / 2} width={cube.size} height={cube.size} rx="5" fill="url(#guancialeGrad)" />
              {/* Crispy caramelized crust edge */}
              <rect x={-cube.size / 2} y={-cube.size / 2} width={cube.size} height={cube.size / 2.5} rx="3" fill="url(#guancialeCrustGrad)" />
              {/* Fat Sheen */}
              <path
                d={`M${-cube.size / 2 + 3} ${-cube.size / 2 + 2} L${cube.size / 2 - 3} ${-cube.size / 2 + 2}`}
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.85"
              />
              <circle cx={-cube.size / 4} cy={-cube.size / 4} r="2" fill="#FFFFFF" opacity="1" />
            </g>
          ))}
        </g>

        {/* Freshly Cracked Black Pepper (Pimenta-do-Reino Moída na Hora) */}
        <g fill="#18181B">
          {[-120, -90, -60, -30, 0, 30, 60, 90, 120, -45, 45, -15, 75].map((x, i) => (
            <React.Fragment key={i}>
              <polygon points={`${x} ${-40 + (i % 5) * 15}, ${x + 3} ${-43 + (i % 5) * 15}, ${x + 5} ${-38 + (i % 5) * 15}, ${x + 2} ${-36 + (i % 5) * 15}`} />
              <circle cx={x + 10} cy={-20 + (i % 4) * 12} r="1.5" />
            </React.Fragment>
          ))}
        </g>

        {/* Fine Grated Pecorino Romano Snow Dusting */}
        <g fill="#FFFBEB" opacity="0.9">
          {[-80, -40, 10, 50, 90, -100, 30, -20, 70].map((x, i) => (
            <rect key={i} x={x} y={-70 + (i % 4) * 20} width="6" height="2" rx="1" transform={`rotate(${i * 35} ${x} ${-70 + (i % 4) * 20})`} />
          ))}
        </g>
      </g>
    </g>
  );
}

export function ItalyPizzaIllustration() {
  return (
    <g id="italy-pizza-margherita">
      {/* Table & Board Shadow */}
      <ellipse cx="400" cy="710" rx="320" ry="50" fill="url(#tableOcclusionShadow)" />

      {/* Rustic Italian Olive Wood Pizza Peel/Board */}
      <ellipse cx="400" cy="650" rx="310" ry="75" fill="url(#woodBoardGrad)" />
      <ellipse cx="400" cy="642" rx="290" ry="65" fill="url(#woodBoardTopGrad)" />

      {/* Neapolitan Pizza Margherita (Pizza Redonda com Borda Cornicione Aerada e Queimadinhos Leopard) */}
      <g id="pizza-margherita" transform="translate(400, 520)">
        {/* Cast shadow under the puffy crust */}
        <ellipse cx="0" cy="80" rx="270" ry="55" fill="#1C1917" opacity="0.5" />

        {/* 1. CORNICIONE: Puffy, Leopard-Spotted High Airy Crust */}
        <path
          d="M-260 20 C-270 -60 -180 -120 0 -120 C180 -120 270 -60 260 20 C250 85 170 120 0 120 C-170 120 -250 85 -260 20 Z"
          fill="url(#pizzaCrustGrad)"
          filter="url(#foodPorousNoise)"
        />

        {/* Authentic Wood-Fired Leopard Char Spots (Manchas Queimadinhas de Forno a Lenha) */}
        <g id="leopard-spots" fill="#18181B" opacity="0.9">
          <ellipse cx="-220" cy="-30" rx="12" ry="7" transform="rotate(25 -220 -30)" />
          <ellipse cx="-190" cy="-70" rx="15" ry="9" transform="rotate(-15 -190 -70)" />
          <ellipse cx="-110" cy="-105" rx="16" ry="8" transform="rotate(35 -110 -105)" />
          <ellipse cx="-40" cy="-115" rx="14" ry="8" />
          <ellipse cx="50" cy="-112" rx="18" ry="9" transform="rotate(-20 50 -112)" />
          <ellipse cx="140" cy="-90" rx="15" ry="8" transform="rotate(25 140 -90)" />
          <ellipse cx="210" cy="-50" rx="14" ry="8" transform="rotate(-30 210 -50)" />
          <ellipse cx="235" cy="15" rx="13" ry="7" />
          <ellipse cx="190" cy="75" rx="16" ry="9" transform="rotate(15 190 75)" />
          <ellipse cx="90" cy="105" rx="15" ry="8" transform="rotate(-10 90 105)" />
          <ellipse cx="-80" cy="108" rx="14" ry="7" transform="rotate(20 -80 108)" />
          <ellipse cx="-180" cy="70" rx="15" ry="8" transform="rotate(-25 -180 70)" />
        </g>

        {/* 2. SAN MARZANO TOMATO SAUCE (Molho de Tomate Vibrante com Polpa) */}
        <ellipse cx="0" cy="10" rx="215" ry="80" fill="url(#sanMarzanoSauceGrad)" />

        {/* Sauce Texture Highlights & Glistening Pulp */}
        <ellipse cx="-60" cy="0" rx="90" ry="35" fill="url(#sauceHighlightGrad)" opacity="0.6" />
        <ellipse cx="70" cy="15" rx="80" ry="32" fill="url(#sauceHighlightGrad)" opacity="0.6" />

        {/* 3. MELTED FIOR DI LATTE MOZZARELLA ISLANDS (Ilhas de Muçarela Derretida Branca e Dourada) */}
        <g id="mozzarella-islands">
          {/* Island 1: Center */}
          <g transform="translate(0, 5)">
            <path
              d="M-50 -15 C-40 -35 30 -35 45 -10 C55 10 35 25 -10 25 C-45 25 -55 0 -50 -15 Z"
              fill="url(#mozzarellaMeltGrad)"
            />
            {/* Blistered Golden Spot on Cheese */}
            <ellipse cx="-10" cy="-8" rx="12" ry="7" fill="#B45309" opacity="0.75" />
            <ellipse cx="15" cy="5" rx="10" ry="6" fill="#D97706" opacity="0.7" />
            {/* Specular Wet Melt Sheen */}
            <path d="M-30 -18 Q0 -25 30 -12" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.9" />
            <circle cx="10" cy="-16" r="3" fill="#FFFFFF" opacity="1" />
          </g>

          {/* Island 2: Left */}
          <g transform="translate(-100, 15)">
            <path
              d="M-40 -10 C-30 -25 25 -25 35 -5 C45 12 25 20 -5 20 C-35 20 -45 5 -40 -10 Z"
              fill="url(#mozzarellaMeltGrad)"
            />
            <ellipse cx="-5" cy="-2" rx="10" ry="6" fill="#B45309" opacity="0.7" />
            <path d="M-20 -12 Q5 -18 20 -8" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.85" />
          </g>

          {/* Island 3: Right */}
          <g transform="translate(95, 0)">
            <path
              d="M-35 -12 C-25 -28 30 -25 40 -8 C48 10 20 22 -10 20 C-35 18 -42 2 -35 -12 Z"
              fill="url(#mozzarellaMeltGrad)"
            />
            <ellipse cx="5" cy="0" rx="11" ry="6" fill="#D97706" opacity="0.7" />
            <path d="M-15 -14 Q5 -20 25 -10" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.85" />
          </g>

          {/* Island 4: Top */}
          <g transform="translate(-10, -40)">
            <ellipse cx="0" cy="0" rx="35" ry="18" fill="url(#mozzarellaMeltGrad)" />
            <ellipse cx="-2" cy="-2" rx="9" ry="5" fill="#B45309" opacity="0.65" />
            <path d="M-15 -6 Q0 -12 15 -6" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85" />
          </g>
        </g>

        {/* 4. FRESH BASIL LEAVES WITH OLIVE OIL SHEEN (Folhas de Manjericão Fresco com Fio de Azeite) */}
        <g id="basil-leaves">
          {/* Leaf 1: Center-Left */}
          <g transform="translate(-45, -10) rotate(-25)">
            <path
              d="M0 -30 C20 -20 25 15 0 35 C-25 15 -20 -20 0 -30 Z"
              fill="url(#basilLeafGrad)"
            />
            <path d="M0 -28 L0 32" stroke="#14532D" strokeWidth="2" opacity="0.7" />
            {/* Olive Oil Specular Sheen on Leaf */}
            <path d="M-3 -15 Q-12 0 -3 20" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85" />
            <circle cx="-5" cy="-2" r="2.5" fill="#FFFFFF" opacity="1" />
          </g>

          {/* Leaf 2: Center-Right */}
          <g transform="translate(50, -15) rotate(35)">
            <path
              d="M0 -32 C22 -22 26 15 0 36 C-26 15 -22 -22 0 -32 Z"
              fill="url(#basilLeafGrad)"
            />
            <path d="M0 -30 L0 34" stroke="#14532D" strokeWidth="2" opacity="0.7" />
            <path d="M3 -18 Q12 0 3 22" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85" />
            <circle cx="5" cy="0" r="2.5" fill="#FFFFFF" opacity="1" />
          </g>

          {/* Leaf 3: Bottom */}
          <g transform="translate(-10, 45) rotate(70)">
            <path
              d="M0 -26 C18 -18 20 12 0 30 C-20 12 -18 -18 0 -26 Z"
              fill="url(#basilLeafGrad)"
            />
            <path d="M0 -24 L0 28" stroke="#14532D" strokeWidth="1.8" opacity="0.7" />
            <path d="M-2 -12 Q-8 2 -2 16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
          </g>
        </g>

        {/* Drizzle of Extra Virgin Olive Oil Drops */}
        <g fill="#FACC15" opacity="0.85">
          <circle cx="-80" cy="-20" r="3.5" />
          <circle cx="30" cy="-35" r="3" />
          <circle cx="120" cy="20" r="4" />
          <circle cx="-20" cy="25" r="3.5" />
        </g>
      </g>
    </g>
  );
}

export function PastaLasagnaIllustration() {
  return (
    <g id="pasta-lasagna-bolonhesa">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />
      <ellipse cx="400" cy="650" rx="290" ry="65" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="642" rx="270" ry="55" fill="url(#plateCeramicGrad)" />

      {/* Towering Slice of Lasagna Bolognese with Exposed Layers */}
      <g id="lasagna-slice" transform="translate(400, 480)">
        {/* Shadow */}
        <path d="M-160 140 L120 170 L170 190 L-140 170 Z" fill="#1C1917" opacity="0.4" />

        {/* 1. FRONT CUT LAYERS: Silky Fresh Pasta Sheets + Thick Bolognese Ragù + Béchamel */}
        {/* Layer 1 (Bottom Pasta Sheet) */}
        <path d="M-150 130 L110 160 L110 142 L-150 112 Z" fill="url(#lasagnaPastaGrad)" />
        {/* Ragù Meat Layer 1 */}
        <path d="M-150 112 L110 142 L110 110 L-150 80 Z" fill="url(#bologneseRaguGrad)" filter="url(#meatSearNoise)" />
        {/* Layer 2 (Middle Pasta Sheet) */}
        <path d="M-150 80 L110 110 L110 92 L-150 62 Z" fill="url(#lasagnaPastaGrad)" />
        {/* Ragù & Creamy Béchamel Layer 2 */}
        <path d="M-150 62 L110 92 L110 50 L-150 20 Z" fill="url(#lasagnaBechamelGrad)" />
        {/* Layer 3 (Top Pasta Sheet) */}
        <path d="M-150 20 L110 50 L110 32 L-150 02 Z" fill="url(#lasagnaPastaGrad)" />

        {/* 2. BUBBLING GRATIN CHEESE CRUST ON TOP (Topo de Queijo Dourado e Borbulhante) */}
        <path
          d="M-155 0 L115 30 L170 -60 L-100 -90 Z"
          fill="url(#lasagnaGratinGrad)"
        />
        {/* Blistered Roasted Cheese Spots */}
        <ellipse cx="-20" cy="-30" rx="35" ry="18" fill="#78350F" opacity="0.8" />
        <ellipse cx="60" cy="-10" rx="28" ry="14" fill="#92400E" opacity="0.8" />
        <ellipse cx="-70" cy="-50" rx="24" ry="12" fill="#B45309" opacity="0.8" />
        <ellipse cx="100" cy="-40" rx="22" ry="10" fill="#78350F" opacity="0.8" />

        {/* Cheesy Molten Drips Escaping the Side */}
        <path
          d="M-70 10 C-65 35 -55 50 -58 70 C-60 85 -70 85 -72 70 C-75 50 -80 30 -78 10 Z"
          fill="url(#mozzarellaMeltGrad)"
        />
        <circle cx="-65" cy="78" r="2.5" fill="#FFFFFF" opacity="1" />

        <path
          d="M30 40 C35 65 45 80 40 100 C38 108 28 105 30 92 C32 75 25 55 25 40 Z"
          fill="url(#mozzarellaMeltGrad)"
        />
        <circle cx="36" cy="103" r="2.5" fill="#FFFFFF" opacity="1" />

        {/* Specular Melt Highlights */}
        <path d="M-110 -15 L40 15" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.75" />
        <circle cx="-40" cy="-4" r="3" fill="#FFFFFF" opacity="1" />
        <circle cx="10" cy="5" r="3" fill="#FFFFFF" opacity="1" />
      </g>
    </g>
  );
}

export function ItalyRisottoIllustration() {
  return (
    <g id="italy-risotto-cogumelos">
      {/* Table Shadow */}
      <ellipse cx="400" cy="710" rx="310" ry="50" fill="url(#tableOcclusionShadow)" />
      <ellipse cx="400" cy="650" rx="300" ry="70" fill="url(#plateRimGrad)" />
      <ellipse cx="400" cy="640" rx="275" ry="60" fill="url(#plateCeramicGrad)" />
      <ellipse cx="400" cy="625" rx="225" ry="48" fill="url(#plateInnerShadow)" />

      {/* Risotto all'Onda (Risoto Cremoso Ondulado no Prato com Manteiga e Queijo) */}
      <g id="risotto-bed" transform="translate(400, 520)">
        <ellipse cx="0" cy="30" rx="195" ry="65" fill="url(#risottoCreamGrad)" />

        {/* Rice Grains Definition with Creamy Emulsion Mask */}
        <g fill="#FFFFFF" opacity="0.85">
          {[-120, -80, -40, 0, 40, 80, 120].map((x, i) => (
            <React.Fragment key={i}>
              <ellipse cx={x} cy={10 + (i % 3) * 10} rx="7" ry="3.5" transform={`rotate(${i * 20} ${x} ${10 + (i % 3) * 10})`} />
              <ellipse cx={x - 20} cy={30 + (i % 2) * 10} rx="7" ry="3.5" transform={`rotate(${-i * 15} ${x - 20} ${30 + (i % 2) * 10})`} />
            </React.Fragment>
          ))}
        </g>

        {/* Sautéed Golden-Brown Wild Porcini / Paris Mushrooms (Cogumelos Salteados Dourados) */}
        <g id="sauteed-mushrooms">
          {[
            { x: -50, y: 0, rot: -20, r: 35 },
            { x: 30, y: -15, rot: 15, r: 38 },
            { x: 0, y: 35, rot: 40, r: 32 },
            { x: 75, y: 20, rot: -10, r: 30 },
            { x: -80, y: 25, rot: 25, r: 28 },
          ].map((m, i) => (
            <g key={i} transform={`translate(${m.x}, ${m.y}) rotate(${m.rot})`}>
              {/* Mushroom shadow */}
              <ellipse cx="0" cy="5" rx={m.r} ry={m.r / 2} fill="#271106" opacity="0.4" />
              {/* Mushroom Cap */}
              <path
                d={`M${-m.r} 0 C${-m.r} ${-m.r} ${m.r} ${m.r * 0.8} ${m.r} 0 C${m.r * 0.7} 12 ${-m.r * 0.7} 12 ${-m.r} 0 Z`}
                fill="url(#mushroomCapGrad)"
              />
              {/* Butter Glaze Highlight on Mushroom */}
              <path
                d={`M${-m.r / 2} ${-m.r / 3} Q0 ${-m.r / 2} ${m.r / 2} ${-m.r / 4}`}
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.8"
              />
              <circle cx="0" cy={-m.r / 3} r="2" fill="#FFFFFF" opacity="1" />
            </g>
          ))}
        </g>

        {/* Shaved Parmigiano Reggiano Curls (Lâminas de Queijo Parmesão Curado) */}
        <g fill="#FEFCE8" opacity="0.95">
          <path d="M-20 -5 Q10 -25 40 -10 Q20 5 -20 -5 Z" stroke="#E2E8F0" strokeWidth="1" />
          <path d="M-60 15 Q-30 0 -10 20 Q-40 30 -60 15 Z" stroke="#E2E8F0" strokeWidth="1" />
        </g>

        {/* Fresh Minced Thyme & Truffle Oil Glistening Drops */}
        <g fill="#15803D">
          <circle cx="-35" cy="5" r="1.5" />
          <circle cx="15" cy="12" r="1.5" />
          <circle cx="55" cy="-5" r="1.5" />
        </g>
      </g>
    </g>
  );
}
