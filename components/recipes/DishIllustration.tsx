'use client';

import React from 'react';

interface DishIllustrationProps {
  id: string;
  className?: string;
  type?: 'salgado' | 'doce' | 'bebida' | 'pao';
}

export default function DishIllustration({
  id,
  className = 'w-full h-full',
  type = 'salgado',
}: DishIllustrationProps) {
  // Common visual backdrop based on sweet vs savory vs drink vs bread
  const isSweet = type === 'doce';
  const isDrink = type === 'bebida';
  const isBread = type === 'pao';

  const bgGradient = isSweet
    ? 'linear-gradient(135deg, #FFF7ED 0%, #FED7AA 50%, #FFEDD5 100%)'
    : isDrink
    ? 'linear-gradient(135deg, #F5F3FF 0%, #DDD6FE 50%, #EDE9FE 100%)'
    : isBread
    ? 'linear-gradient(135deg, #FEFCE8 0%, #FEF08A 50%, #FDE047 100%)'
    : 'linear-gradient(135deg, #FDFBF7 0%, #F5EBE1 50%, #EAD7C5 100%)';

  const renderDishContent = () => {
    switch (id) {
      // ----------------------------------------------------
      // HAMBURGUERES & PÃES
      // ----------------------------------------------------
      case 'burger_classic':
        return (
          <g transform="translate(100, 100)">
            {/* Plate */}
            <ellipse cx="0" cy="45" rx="80" ry="24" fill="#E2E8F0" opacity="0.6" />
            <ellipse cx="0" cy="42" rx="74" ry="20" fill="#F8FAFC" />
            {/* Bottom Bun (pão comprado) */}
            <path d="M-55 25 Q0 38 55 25 Q50 38 0 38 Q-50 38 -55 25 Z" fill="#D97706" />
            <path d="M-52 25 Q0 35 52 25 Q48 34 0 34 Q-48 34 -52 25 Z" fill="#F59E0B" />
            {/* Sauce & Pickles */}
            <path d="M-45 22 Q-20 28 0 22 Q25 28 45 22" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx="-25" cy="22" rx="10" ry="3" fill="#65A30D" />
            <ellipse cx="20" cy="22" rx="9" ry="3" fill="#65A30D" />
            {/* Patty */}
            <rect x="-58" y="6" width="116" height="16" rx="8" fill="#451A03" />
            <rect x="-56" y="8" width="112" height="6" rx="3" fill="#78350F" opacity="0.8" />
            {/* Melted Cheddar Drapes */}
            <path d="M-52 14 L-35 14 L-30 26 L-22 14 L0 14 L8 28 L18 14 L40 14 L46 25 L52 14 Z" fill="#FBBF24" />
            {/* Crisp Green Lettuce */}
            <path d="M-62 6 Q-50 -4 -38 5 Q-20 -6 -5 6 Q15 -5 32 5 Q50 -4 62 6 Q40 10 0 10 Q-40 10 -62 6 Z" fill="#22C55E" />
            <path d="M-55 4 Q-35 -2 -15 4 Q10 -2 40 4" stroke="#86EFAC" strokeWidth="2" fill="none" />
            {/* Sliced Ripe Tomatoes */}
            <ellipse cx="-24" cy="-2" rx="26" ry="7" fill="#DC2626" />
            <ellipse cx="22" cy="-2" rx="26" ry="7" fill="#EF4444" />
            {/* Top Bun */}
            <path d="M-58 -4 C-58 -42 58 -42 58 -4 C58 6 -58 6 -58 -4 Z" fill="#D97706" />
            <path d="M-52 -7 C-52 -38 52 -38 52 -7 C52 1 -52 1 -52 -7 Z" fill="#F59E0B" />
            {/* Sesame Seeds */}
            <g fill="#FEF3C7" opacity="0.95">
              <ellipse cx="-25" cy="-26" rx="2" ry="3.5" transform="rotate(-20 -25 -26)" />
              <ellipse cx="-10" cy="-30" rx="2" ry="3.5" transform="rotate(10 -10 -30)" />
              <ellipse cx="12" cy="-28" rx="2" ry="3.5" transform="rotate(-15 12 -28)" />
              <ellipse cx="28" cy="-22" rx="2" ry="3.5" transform="rotate(30 28 -22)" />
              <ellipse cx="-38" cy="-16" rx="2" ry="3.5" transform="rotate(-40 -38 -16)" />
              <ellipse cx="0" cy="-22" rx="2" ry="3.5" />
              <ellipse cx="38" cy="-14" rx="2" ry="3.5" transform="rotate(45 38 -14)" />
            </g>
          </g>
        );

      case 'burger_chicken':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="45" rx="80" ry="24" fill="#E2E8F0" opacity="0.6" />
            <ellipse cx="0" cy="42" rx="74" ry="20" fill="#F8FAFC" />
            {/* Bottom Bun */}
            <path d="M-54 24 Q0 36 54 24 Q48 36 0 36 Q-48 36 -54 24 Z" fill="#D97706" />
            {/* Creamy Herb Mayo */}
            <path d="M-40 22 Q0 26 40 22" stroke="#FEF3C7" strokeWidth="5" strokeLinecap="round" />
            {/* Crispy Crusted Chicken Fillet */}
            <path d="M-60 12 Q-30 8 0 10 Q35 7 60 13 Q45 25 0 24 Q-45 25 -60 12 Z" fill="#B45309" />
            <path d="M-55 14 Q-25 10 5 12 Q40 10 55 15 Q38 22 0 21 Q-38 22 -55 14 Z" fill="#D97706" />
            {/* Crispy Texture flecks */}
            <circle cx="-35" cy="16" r="1.5" fill="#78350F" />
            <circle cx="-15" cy="18" r="1.5" fill="#78350F" />
            <circle cx="20" cy="17" r="1.5" fill="#78350F" />
            <circle cx="42" cy="16" r="1.5" fill="#78350F" />
            {/* Pickles & Lettuce */}
            <path d="M-62 6 Q-50 -4 -38 5 Q-20 -6 -5 6 Q15 -5 32 5 Q50 -4 62 6 Q40 10 0 10 Q-40 10 -62 6 Z" fill="#16A34A" />
            {/* Brioche Top Bun */}
            <path d="M-56 -3 C-56 -40 56 -40 56 -3 C56 6 -56 6 -56 -3 Z" fill="#D97706" />
            <path d="M-50 -6 C-50 -36 50 -36 50 -6 C50 2 -50 2 -50 -6 Z" fill="#F59E0B" />
            {/* Bun Glaze highlight */}
            <path d="M-30 -26 Q0 -34 30 -26" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
          </g>
        );

      case 'burger_japanese':
        // HAMBURGUER JAPONES (HAMBAGU): Servido no prato com guarnição de arroz, molho demi-glace e repolho, SEM PÃO!
        return (
          <g transform="translate(100, 100)">
            {/* Japanese Ceramic Oval Plate */}
            <ellipse cx="0" cy="20" rx="90" ry="46" fill="#334155" />
            <ellipse cx="0" cy="18" rx="84" ry="42" fill="#1E293B" />
            <ellipse cx="0" cy="16" rx="80" ry="38" fill="#0F172A" />
            {/* Gohan Rice Bowl (Guarnição) */}
            <g transform="translate(48, -4)">
              {/* Ceramic Rice Bowl */}
              <path d="M-28 14 C-28 35 28 35 28 14 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
              {/* Steaming Fluffy Rice Mound */}
              <ellipse cx="0" cy="14" rx="26" ry="14" fill="#FFFFFF" />
              <circle cx="-10" cy="8" r="8" fill="#FFFFFF" />
              <circle cx="5" cy="6" r="9" fill="#FFFFFF" />
              <circle cx="12" cy="10" r="7" fill="#FFFFFF" />
              {/* Black Sesame Seeds on Rice */}
              <ellipse cx="-4" cy="8" rx="1" ry="1.8" fill="#1E293B" />
              <ellipse cx="6" cy="10" rx="1" ry="1.8" fill="#1E293B" transform="rotate(30 6 10)" />
              <ellipse cx="2" cy="6" rx="1" ry="1.8" fill="#1E293B" transform="rotate(-20 2 6)" />
              {/* Rice Steam */}
              <path d="M-5 -2 Q-10 -12 -4 -20" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" fill="none" />
              <path d="M8 -4 Q14 -14 8 -22" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" fill="none" />
            </g>
            {/* Crisp Shredded Cabbage & Grated Daikon Garnish */}
            <g transform="translate(-48, 8)">
              <ellipse cx="0" cy="4" rx="24" ry="12" fill="#DCFCE7" />
              <path d="M-18 2 Q-10 6 0 2 Q10 7 18 2" stroke="#86EFAC" strokeWidth="1.5" fill="none" />
              <path d="M-14 6 Q-6 10 4 6 Q12 11 16 7" stroke="#4ADE80" strokeWidth="1.2" fill="none" />
              {/* Grated Daikon Oroshi snow mound on top */}
              <ellipse cx="0" cy="-2" rx="10" ry="6" fill="#F8FAFC" />
              <circle cx="0" cy="-4" r="1.5" fill="#22C55E" />
            </g>
            {/* Juicy Seared Hambagu Patty (Central, glazed with demi-glace) */}
            <g transform="translate(-4, 18)">
              {/* Shadow */}
              <ellipse cx="0" cy="12" rx="42" ry="16" fill="#000000" opacity="0.4" />
              {/* Thick Hambagu Steak Patty */}
              <ellipse cx="0" cy="0" rx="38" ry="20" fill="#451A03" />
              <ellipse cx="0" cy="-4" rx="36" ry="18" fill="#582900" />
              <ellipse cx="-4" cy="-6" rx="32" ry="15" fill="#78350F" />
              {/* Glossy Savory Demi-Glace Sauce Dripping */}
              <path
                d="M-28 -8 C-15 -14 15 -14 28 -8 C34 -2 24 10 16 12 C6 14 -4 14 -14 12 C-26 10 -32 -2 -28 -8 Z"
                fill="#271306"
              />
              <path
                d="M-18 -4 C-8 -8 10 -8 18 -4 C22 2 12 8 6 9 C-2 10 -10 10 -14 8 C-20 6 -20 0 -18 -4 Z"
                fill="#451A03"
              />
              {/* Sauce Gloss Shine */}
              <ellipse cx="-8" cy="-8" rx="14" ry="4" fill="#FFFFFF" opacity="0.3" transform="rotate(-8 -8 -8)" />
              {/* Scallion rings on top */}
              <ellipse cx="4" cy="-4" rx="3" ry="1.5" fill="#22C55E" stroke="#15803D" strokeWidth="0.8" />
              <ellipse cx="-2" cy="-2" rx="2.5" ry="1.2" fill="#22C55E" stroke="#15803D" strokeWidth="0.8" />
            </g>
          </g>
        );

      case 'bread_burger_bun':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="40" rx="70" ry="20" fill="#CBD5E1" opacity="0.5" />
            {/* Bottom bun slice */}
            <ellipse cx="0" cy="24" rx="55" ry="16" fill="#D97706" />
            <ellipse cx="0" cy="20" rx="52" ry="14" fill="#F59E0B" />
            <ellipse cx="0" cy="18" rx="48" ry="12" fill="#FEF3C7" />
            {/* Top Brioche Bun */}
            <path d="M-58 -4 C-58 -46 58 -46 58 -4 C58 12 -58 12 -58 -4 Z" fill="#B45309" />
            <path d="M-54 -6 C-54 -42 54 -42 54 -6 C54 8 -54 8 -54 -6 Z" fill="#D97706" />
            <path d="M-46 -10 C-46 -38 46 -38 46 -10 C46 4 -46 4 -46 -10 Z" fill="#F59E0B" />
            {/* Golden egg-wash shine */}
            <path d="M-30 -28 Q0 -38 30 -28" stroke="#FEF3C7" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            {/* Toasted Sesame seeds */}
            <g fill="#FFFBEB">
              <ellipse cx="-25" cy="-22" rx="2" ry="3.5" transform="rotate(-15 -25 -22)" />
              <ellipse cx="-10" cy="-28" rx="2" ry="3.5" transform="rotate(20 -10 -28)" />
              <ellipse cx="14" cy="-26" rx="2" ry="3.5" transform="rotate(-25 14 -26)" />
              <ellipse cx="30" cy="-18" rx="2" ry="3.5" transform="rotate(35 30 -18)" />
              <ellipse cx="-35" cy="-14" rx="2" ry="3.5" transform="rotate(-35 -35 -14)" />
              <ellipse cx="2" cy="-20" rx="2" ry="3.5" />
              <ellipse cx="36" cy="-10" rx="2" ry="3.5" transform="rotate(45 36 -10)" />
            </g>
          </g>
        );

      case 'bread_artisan':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="40" rx="75" ry="20" fill="#CBD5E1" opacity="0.5" />
            {/* Crusty Round Boule */}
            <path d="M-65 15 C-65 -45 65 -45 65 15 C65 30 -65 30 -65 15 Z" fill="#92400E" />
            <path d="M-60 12 C-60 -40 60 -40 60 12 C60 25 -60 25 -60 12 Z" fill="#B45309" />
            <path d="M-52 8 C-52 -34 52 -34 52 8 C52 20 -52 20 -52 8 Z" fill="#D97706" />
            {/* Artisan Ear & Score Cuts (Lame cuts) */}
            <path d="M-38 -15 Q-5 -30 25 -20" stroke="#78350F" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M-38 -15 Q-5 -30 25 -20" stroke="#FEF3C7" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M-20 -5 Q10 -18 42 -4" stroke="#78350F" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M-20 -5 Q10 -18 42 -4" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Flour Dusting */}
            <ellipse cx="0" cy="-26" rx="28" ry="8" fill="#FFFFFF" opacity="0.35" />
            <ellipse cx="-20" cy="-6" rx="14" ry="6" fill="#FFFFFF" opacity="0.25" />
          </g>
        );

      // ----------------------------------------------------
      // MASSAS & ITÁLIA
      // ----------------------------------------------------
      case 'pasta_carbonara':
        return (
          <g transform="translate(100, 100)">
            {/* Terracotta Italian Pasta Plate */}
            <ellipse cx="0" cy="15" rx="84" ry="46" fill="#E2E8F0" />
            <ellipse cx="0" cy="12" rx="78" ry="40" fill="#F8FAFC" />
            <ellipse cx="0" cy="10" rx="60" ry="30" fill="#F1F5F9" />
            {/* Carbonara Spaghetti Nest (Golden Rich Egg & Pecorino) */}
            <ellipse cx="0" cy="8" rx="50" ry="24" fill="#FDE047" />
            {/* Spaghetti Strands */}
            <path d="M-40 4 Q-15 18 20 4 Q35 -5 10 -8 Q-25 -8 -40 4" stroke="#EAB308" strokeWidth="4" fill="none" />
            <path d="M-30 10 Q0 -6 32 8 Q15 20 -15 14" stroke="#CA8A04" strokeWidth="3.5" fill="none" />
            <path d="M-20 0 Q10 14 38 -2 Q20 -14 -10 -6" stroke="#FDE047" strokeWidth="4" fill="none" />
            <path d="M-35 8 Q-5 22 25 12" stroke="#FEF08A" strokeWidth="3" fill="none" />
            {/* Crispy Browned Guanciale Cubes */}
            <rect x="-24" y="0" width="10" height="8" rx="2" fill="#78350F" />
            <rect x="-22" y="2" width="6" height="4" rx="1" fill="#DC2626" />
            <rect x="12" y="4" width="11" height="8" rx="2" fill="#78350F" />
            <rect x="14" y="6" width="7" height="4" rx="1" fill="#DC2626" />
            <rect x="-5" y="-6" width="9" height="7" rx="2" fill="#78350F" />
            <rect x="25" y="-5" width="8" height="6" rx="2" fill="#78350F" />
            {/* Cracked Black Pepper Flecks */}
            <circle cx="-12" cy="4" r="1.2" fill="#1E293B" />
            <circle cx="2" cy="12" r="1.5" fill="#1E293B" />
            <circle cx="-2" cy="-2" r="1.2" fill="#1E293B" />
            <circle cx="18" cy="-4" r="1.4" fill="#1E293B" />
            <circle cx="-28" cy="8" r="1" fill="#1E293B" />
            {/* Shaved Pecorino curls */}
            <path d="M-8 2 Q-2 6 4 2" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M10 8 Q15 12 20 8" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Rising Steam */}
            <path d="M-10 -15 Q-15 -30 -8 -42" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" opacity="0.4" fill="none" />
            <path d="M12 -18 Q18 -32 10 -45" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" opacity="0.4" fill="none" />
          </g>
        );

      case 'pasta_white_sauce':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="15" rx="84" ry="46" fill="#E2E8F0" />
            <ellipse cx="0" cy="12" rx="78" ry="40" fill="#F8FAFC" />
            {/* Rich Béchamel Cream White Sauce Pasta */}
            <ellipse cx="0" cy="8" rx="52" ry="25" fill="#FEFCE8" />
            <path d="M-38 6 Q-10 20 22 4 Q38 -6 12 -8 Q-22 -8 -38 6" stroke="#FEF9C3" strokeWidth="5" fill="none" />
            <path d="M-25 12 Q5 -4 35 10 Q15 22 -15 15" stroke="#FDE047" strokeWidth="3.5" fill="none" />
            <path d="M-15 0 Q12 16 35 -2" stroke="#FFFFFF" strokeWidth="4.5" fill="none" />
            {/* Melted Cheese Swirls & Grated Parmesan */}
            <ellipse cx="-10" cy="6" rx="20" ry="8" fill="#FEF08A" opacity="0.7" />
            <circle cx="-16" cy="4" r="1" fill="#CA8A04" />
            <circle cx="8" cy="12" r="1" fill="#CA8A04" />
            <circle cx="20" cy="2" r="1" fill="#CA8A04" />
            {/* Chopped Fresh Parsley */}
            <circle cx="-14" cy="2" r="1.8" fill="#16A34A" />
            <circle cx="6" cy="6" r="1.8" fill="#16A34A" />
            <circle cx="-4" cy="10" r="1.8" fill="#16A34A" />
            <circle cx="22" cy="8" r="1.8" fill="#16A34A" />
          </g>
        );

      case 'pasta_chicken':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="15" rx="84" ry="46" fill="#E2E8F0" />
            <ellipse cx="0" cy="12" rx="78" ry="40" fill="#F8FAFC" />
            {/* Pasta base */}
            <ellipse cx="0" cy="8" rx="52" ry="25" fill="#FEF08A" />
            <path d="M-35 8 Q-5 22 25 12" stroke="#FBBF24" strokeWidth="4" fill="none" />
            {/* Shredded Tender Chicken Breast */}
            <path d="M-25 0 Q-15 8 -5 2 Q10 8 20 0 Q5 -8 -15 -6 Z" fill="#FED7AA" />
            <path d="M-22 2 Q-12 9 -3 4 Q12 9 18 2" stroke="#EA580C" strokeWidth="1.2" fill="none" />
            <path d="M-10 10 Q5 16 20 11" stroke="#FDBA74" strokeWidth="4" strokeLinecap="round" fill="none" />
            {/* Fresh Chives / Green Onions */}
            <circle cx="-8" cy="4" r="1.8" fill="#15803D" />
            <circle cx="12" cy="6" r="1.8" fill="#15803D" />
            <circle cx="2" cy="12" r="1.8" fill="#15803D" />
          </g>
        );

      case 'lasagna_bolognese':
        return (
          <g transform="translate(100, 100)">
            {/* Ceramic Baking Dish Edge */}
            <ellipse cx="0" cy="35" rx="75" ry="24" fill="#CBD5E1" opacity="0.6" />
            {/* Lasagna Block Perspective */}
            {/* Front Cut Side with Layers */}
            <path d="M-55 10 L55 10 L55 32 L-55 32 Z" fill="#991B1B" />
            {/* Pasta sheet 1 */}
            <rect x="-55" y="14" width="110" height="4" fill="#FEF08A" />
            {/* Meat & Béchamel Layer */}
            <rect x="-55" y="18" width="110" height="5" fill="#7F1D1D" />
            {/* Pasta sheet 2 */}
            <rect x="-55" y="23" width="110" height="4" fill="#FEF08A" />
            {/* Meat layer bottom */}
            <rect x="-55" y="27" width="110" height="5" fill="#7F1D1D" />
            {/* Golden Grated Mozzarella Bubbling Top */}
            <path d="M-55 10 L-25 -20 L85 -20 L55 10 Z" fill="#F59E0B" />
            <path d="M-50 9 L-22 -18 L80 -18 L50 9 Z" fill="#FEF08A" />
            {/* Broiled Brown Cheese Spots */}
            <ellipse cx="0" cy="-4" rx="12" ry="6" fill="#B45309" />
            <ellipse cx="25" cy="-8" rx="8" ry="4" fill="#92400E" />
            <ellipse cx="-20" cy="-6" rx="9" ry="5" fill="#B45309" />
            <ellipse cx="40" cy="2" rx="6" ry="3" fill="#B45309" />
            {/* Fresh Basil Leaf on top */}
            <path d="M0 -12 C-8 -22 8 -22 0 -12 Z" fill="#16A34A" />
            <path d="M0 -12 L0 -19" stroke="#15803D" strokeWidth="0.8" />
          </g>
        );

      case 'pasta_pesto':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="15" rx="84" ry="46" fill="#E2E8F0" />
            <ellipse cx="0" cy="12" rx="78" ry="40" fill="#F8FAFC" />
            {/* Vibrant Green Pesto Genovese Pasta */}
            <ellipse cx="0" cy="8" rx="52" ry="25" fill="#16A34A" />
            <ellipse cx="0" cy="6" rx="48" ry="22" fill="#22C55E" />
            <path d="M-36 6 Q-10 18 20 4 Q36 -6 10 -8 Q-24 -8 -36 6" stroke="#15803D" strokeWidth="4" fill="none" />
            <path d="M-24 10 Q5 -4 34 8" stroke="#4ADE80" strokeWidth="3.5" fill="none" />
            {/* Pine Nuts (Pinoli) */}
            <ellipse cx="-16" cy="4" rx="4" ry="2.5" fill="#FEF3C7" transform="rotate(-15 -16 4)" />
            <ellipse cx="14" cy="8" rx="4" ry="2.5" fill="#FEF3C7" transform="rotate(25 14 8)" />
            <ellipse cx="4" cy="-2" rx="3.5" ry="2" fill="#FEF3C7" />
            {/* Fresh Basil Crown */}
            <path d="M-5 -2 C-14 -12 2 -12 -5 -2 Z" fill="#15803D" />
            <path d="M6 -2 C15 -12 -1 -12 6 -2 Z" fill="#16A34A" />
          </g>
        );

      case 'pizza_margherita':
        return (
          <g transform="translate(100, 100)">
            {/* Wooden Peel / Board */}
            <ellipse cx="0" cy="15" rx="86" ry="48" fill="#B45309" opacity="0.3" />
            {/* Pizza Base & Blistered Crust */}
            <ellipse cx="0" cy="8" rx="76" ry="40" fill="#D97706" />
            <ellipse cx="0" cy="6" rx="72" ry="37" fill="#B45309" />
            {/* Blistered leopard spots on crust */}
            <circle cx="-62" cy="4" r="3" fill="#451A03" />
            <circle cx="58" cy="8" r="2.5" fill="#451A03" />
            <circle cx="2" cy="-28" r="3" fill="#451A03" />
            {/* San Marzano Tomato Sauce */}
            <ellipse cx="0" cy="6" rx="64" ry="31" fill="#DC2626" />
            <ellipse cx="0" cy="5" rx="60" ry="28" fill="#B91C1C" />
            {/* Mozzarella di Bufala Melted Islands */}
            <ellipse cx="-26" cy="4" rx="16" ry="9" fill="#FFFBEB" />
            <ellipse cx="22" cy="10" rx="18" ry="10" fill="#FFFBEB" />
            <ellipse cx="0" cy="-6" rx="14" ry="8" fill="#FFFBEB" />
            <ellipse cx="32" cy="-4" rx="12" ry="7" fill="#FFFBEB" />
            <ellipse cx="-34" cy="-5" rx="11" ry="6" fill="#FFFBEB" />
            {/* Extra Virgin Olive Oil Drizzle */}
            <path d="M-30 0 Q0 -10 30 5" stroke="#FACC15" strokeWidth="2" fill="none" opacity="0.7" />
            {/* Fresh Green Basil Leaves */}
            <g transform="translate(-15, 2)">
              <path d="M0 0 C-6 -8 6 -8 0 0 Z" fill="#16A34A" />
            </g>
            <g transform="translate(18, 5)">
              <path d="M0 0 C-7 -9 7 -9 0 0 Z" fill="#15803D" />
            </g>
            <g transform="translate(6, -8)">
              <path d="M0 0 C-6 -8 6 -8 0 0 Z" fill="#16A34A" />
            </g>
          </g>
        );

      case 'risotto_four_cheese':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="15" rx="84" ry="46" fill="#E2E8F0" />
            <ellipse cx="0" cy="12" rx="78" ry="40" fill="#F8FAFC" />
            {/* Creamy Golden Risotto Mound */}
            <ellipse cx="0" cy="8" rx="54" ry="26" fill="#FEF08A" />
            <ellipse cx="0" cy="6" rx="50" ry="23" fill="#FDE047" />
            {/* Rice grains texture */}
            <g fill="#FEFCE8">
              <ellipse cx="-20" cy="4" rx="3.5" ry="2" />
              <ellipse cx="-10" cy="10" rx="3.5" ry="2" transform="rotate(20 -10 10)" />
              <ellipse cx="10" cy="6" rx="3.5" ry="2" transform="rotate(-15 10 6)" />
              <ellipse cx="25" cy="10" rx="3.5" ry="2" />
              <ellipse cx="2" cy="0" rx="3.5" ry="2" transform="rotate(45 2 0)" />
            </g>
            {/* Parmesan curls on top */}
            <path d="M-10 -2 Q0 2 10 -2" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="4" cy="8" r="1.2" fill="#1E293B" />
            <circle cx="-12" cy="6" r="1.2" fill="#1E293B" />
          </g>
        );

      case 'bruschetta_pomodoro':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="30" rx="75" ry="25" fill="#E2E8F0" opacity="0.6" />
            {/* Toasted Rustic Ciabatta Slice */}
            <path d="M-60 10 C-60 -15 60 -15 60 10 C60 25 -60 25 -60 10 Z" fill="#92400E" />
            <path d="M-55 8 C-55 -12 55 -12 55 8 C55 20 -55 20 -55 8 Z" fill="#D97706" />
            <path d="M-48 5 C-48 -8 48 -8 48 5 C48 16 -48 16 -48 5 Z" fill="#FEF3C7" />
            {/* Grill Marks */}
            <line x1="-35" y1="-4" x2="-25" y2="12" stroke="#78350F" strokeWidth="2.5" />
            <line x1="-5" y1="-6" x2="5" y2="12" stroke="#78350F" strokeWidth="2.5" />
            <line x1="25" y1="-4" x2="35" y2="12" stroke="#78350F" strokeWidth="2.5" />
            {/* Diced Ripe Red Tomatoes */}
            <g>
              <rect x="-32" y="-2" width="12" height="10" rx="2" fill="#DC2626" />
              <rect x="-16" y="2" width="13" height="11" rx="2" fill="#EF4444" />
              <rect x="2" y="-4" width="12" height="11" rx="2" fill="#DC2626" />
              <rect x="18" y="2" width="13" height="10" rx="2" fill="#EF4444" />
              <rect x="-6" y="6" width="11" height="9" rx="2" fill="#B91C1C" />
            </g>
            {/* Fresh Basil & Olive oil shine */}
            <path d="M-10 -6 C-16 -14 0 -14 -10 -6 Z" fill="#16A34A" />
            <path d="M12 -4 C6 -12 22 -12 12 -4 Z" fill="#15803D" />
            <circle cx="0" cy="5" r="2" fill="#FACC15" opacity="0.8" />
          </g>
        );

      // ----------------------------------------------------
      // FRANÇA
      // ----------------------------------------------------
      case 'ratatouille_provencal':
        return (
          <g transform="translate(100, 100)">
            {/* French Round Stoneware Baking Dish */}
            <ellipse cx="0" cy="15" rx="84" ry="46" fill="#B45309" />
            <ellipse cx="0" cy="12" rx="78" ry="40" fill="#FEF3C7" />
            {/* Concentric spiral of shingled baked vegetable slices */}
            <ellipse cx="0" cy="10" rx="68" ry="34" fill="#B91C1C" />
            {/* Outer Vegetable Ring: Red Tomato, Yellow Squash, Green Zucchini, Purple Eggplant */}
            <g stroke="#1C1917" strokeWidth="0.8">
              {/* Tomato */}
              <ellipse cx="-45" cy="5" rx="9" ry="14" fill="#DC2626" transform="rotate(-20 -45 5)" />
              {/* Zucchini */}
              <ellipse cx="-35" cy="12" rx="9" ry="14" fill="#15803D" transform="rotate(-10 -35 12)" />
              {/* Yellow Squash */}
              <ellipse cx="-20" cy="18" rx="9" ry="14" fill="#FACC15" />
              {/* Eggplant */}
              <ellipse cx="0" cy="20" rx="9" ry="14" fill="#581C87" />
              <ellipse cx="20" cy="18" rx="9" ry="14" fill="#DC2626" />
              <ellipse cx="35" cy="12" rx="9" ry="14" fill="#15803D" transform="rotate(10 35 12)" />
              <ellipse cx="45" cy="5" rx="9" ry="14" fill="#FACC15" transform="rotate(20 45 5)" />
              {/* Inner ring */}
              <ellipse cx="-25" cy="0" rx="7" ry="10" fill="#581C87" />
              <ellipse cx="-12" cy="4" rx="7" ry="10" fill="#DC2626" />
              <ellipse cx="5" cy="4" rx="7" ry="10" fill="#15803D" />
              <ellipse cx="20" cy="0" rx="7" ry="10" fill="#FACC15" />
            </g>
            {/* Center rosette */}
            <circle cx="0" cy="-4" r="7" fill="#DC2626" />
            {/* Thyme & Herb de Provence sprig */}
            <path d="M-10 -10 Q0 -20 10 -10" stroke="#16A34A" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="-5" cy="-14" r="1.5" fill="#15803D" />
            <circle cx="5" cy="-14" r="1.5" fill="#15803D" />
          </g>
        );

      case 'quiche_lorraine':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="35" rx="78" ry="25" fill="#CBD5E1" opacity="0.6" />
            {/* Fluted French Pastry Crust */}
            <path d="M-65 5 C-65 -25 65 -25 65 5 C65 25 -65 25 -65 5 Z" fill="#B45309" />
            <path d="M-60 4 C-60 -22 60 -22 60 4 C60 22 -60 22 -60 4 Z" fill="#D97706" />
            {/* Rich Golden Custard Filling */}
            <ellipse cx="0" cy="4" rx="55" ry="18" fill="#FDE047" />
            <ellipse cx="0" cy="2" rx="50" ry="15" fill="#FEF08A" />
            {/* Smoked Bacon Lardons */}
            <rect x="-28" y="0" width="12" height="6" rx="2" fill="#7F1D1D" />
            <rect x="-10" y="4" width="14" height="6" rx="2" fill="#991B1B" />
            <rect x="15" y="-2" width="12" height="6" rx="2" fill="#7F1D1D" />
            <rect x="4" y="6" width="10" height="5" rx="2" fill="#991B1B" />
            {/* Browned Gruyere Cheese spots */}
            <ellipse cx="-16" cy="-4" rx="7" ry="3" fill="#B45309" opacity="0.7" />
            <ellipse cx="12" cy="4" rx="8" ry="3" fill="#B45309" opacity="0.7" />
            {/* Fresh Nutmeg and parsley */}
            <circle cx="-4" cy="2" r="1" fill="#78350F" />
            <circle cx="8" cy="-2" r="1.5" fill="#16A34A" />
          </g>
        );

      case 'crepe_suzette':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="20" rx="84" ry="46" fill="#E2E8F0" />
            <ellipse cx="0" cy="16" rx="78" ry="40" fill="#F8FAFC" />
            {/* Folded Golden French Crepes */}
            <path d="M-45 10 L0 -15 L15 15 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
            <path d="M-10 15 L25 -10 L45 20 Z" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
            {/* Glistening Orange Caramel Butter Sauce (Beurre Suzette) */}
            <ellipse cx="0" cy="18" rx="55" ry="18" fill="#F97316" opacity="0.75" />
            {/* Fresh Orange Segments */}
            <path d="M-20 8 Q-10 0 0 8 Q-10 12 -20 8 Z" fill="#FB923C" stroke="#EA580C" strokeWidth="1" />
            <path d="M5 10 Q15 2 25 10 Q15 14 5 10 Z" fill="#FB923C" stroke="#EA580C" strokeWidth="1" />
            {/* Orange Zest Twists */}
            <path d="M-5 -2 Q5 -8 15 -2" stroke="#EA580C" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
        );

      // ----------------------------------------------------
      // CAFÉ & BREAKFAST
      // ----------------------------------------------------
      case 'coffee_drip':
        return (
          <g transform="translate(100, 100)">
            {/* Ceramic Saucer */}
            <ellipse cx="0" cy="40" rx="60" ry="18" fill="#E2E8F0" />
            {/* Modern Ceramic Coffee Mug */}
            <path d="M-36 0 C-36 35 36 35 36 0 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
            {/* Mug Handle */}
            <path d="M34 6 C48 6 48 24 34 24" fill="none" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />
            {/* Steaming Pour-Over Filter Coffee */}
            <ellipse cx="0" cy="0" rx="34" ry="14" fill="#3B1D08" />
            <ellipse cx="-4" cy="-2" rx="26" ry="10" fill="#582900" />
            {/* Swirling crema highlights */}
            <path d="M-15 -2 Q0 4 15 -2" stroke="#CA8A04" strokeWidth="2" fill="none" opacity="0.6" />
            {/* Steam spirals */}
            <path d="M-8 -15 Q-14 -32 -6 -48" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" fill="none" />
            <path d="M10 -18 Q18 -36 8 -52" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" fill="none" />
          </g>
        );

      case 'coffee_iced':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="46" rx="45" ry="14" fill="#CBD5E1" opacity="0.6" />
            {/* Tall Glass Tumbler */}
            <path d="M-26 -40 L-20 40 Q0 46 20 40 L26 -40 Z" fill="#E0F2FE" opacity="0.4" stroke="#BAE6FD" strokeWidth="1.5" />
            {/* Dark Cold Brew Coffee Layer (Bottom) */}
            <path d="M-22 10 L-20 38 Q0 44 20 38 L22 10 Z" fill="#2E1005" />
            {/* Cream Swirl Cascading Down */}
            <path d="M-24 -20 L-22 10 Q-5 18 0 8 Q8 16 22 10 L24 -20 Z" fill="#854D0E" />
            <path d="M-25 -36 L-24 -20 Q-10 -15 0 -24 Q12 -16 24 -20 L25 -36 Z" fill="#FEF3C7" />
            {/* Floating Ice Cubes */}
            <rect x="-16" y="-30" width="14" height="12" rx="2" fill="#FFFFFF" opacity="0.75" stroke="#BAE6FD" strokeWidth="1" transform="rotate(15 -16 -30)" />
            <rect x="4" y="-24" width="13" height="11" rx="2" fill="#FFFFFF" opacity="0.75" stroke="#BAE6FD" strokeWidth="1" transform="rotate(-10 4 -24)" />
            {/* Striped Straw */}
            <line x1="12" y1="-56" x2="2" y2="35" stroke="#F43F5E" strokeWidth="4" strokeLinecap="round" />
            <line x1="12" y1="-56" x2="2" y2="35" stroke="#FFFFFF" strokeWidth="4" strokeDasharray="6 6" strokeLinecap="round" />
          </g>
        );

      case 'cappuccino_creamy':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="40" rx="65" ry="20" fill="#E2E8F0" />
            {/* Porcelain Wide Cappuccino Cup */}
            <path d="M-42 4 C-42 38 42 38 42 4 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
            <path d="M40 8 C55 8 55 26 40 26" fill="none" stroke="#CBD5E1" strokeWidth="6" strokeLinecap="round" />
            {/* Rich Espresso Rim */}
            <ellipse cx="0" cy="4" rx="40" ry="16" fill="#451A03" />
            {/* Velvety Milk Microfoam */}
            <ellipse cx="0" cy="2" rx="36" ry="14" fill="#FEF3C7" />
            {/* Latte Art Heart */}
            <path d="M0 8 C-12 -4 -6 -10 0 -4 C6 -10 12 -4 0 8 Z" fill="#B45309" />
            <path d="M0 6 C-8 -2 -4 -8 0 -3 C4 -8 8 -2 0 6 Z" fill="#FEF3C7" />
            {/* Cinnamon Powder Dusting */}
            <circle cx="-16" cy="4" r="1" fill="#78350F" />
            <circle cx="14" cy="-2" r="1" fill="#78350F" />
            <circle cx="10" cy="8" r="1" fill="#78350F" />
          </g>
        );

      case 'scrambled_eggs':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="25" rx="80" ry="35" fill="#E2E8F0" />
            <ellipse cx="0" cy="20" rx="74" ry="30" fill="#F8FAFC" />
            {/* Ultra Creamy Hotel-Style Soft Scrambled Eggs */}
            <ellipse cx="0" cy="15" rx="55" ry="22" fill="#FBBF24" />
            <path d="M-40 12 C-30 4 -10 2 0 10 C15 4 35 6 42 16 C30 24 0 25 -40 12 Z" fill="#FDE047" />
            {/* Glossy Butter Sheen */}
            <ellipse cx="-15" cy="12" rx="14" ry="6" fill="#FEFCE8" opacity="0.8" />
            <ellipse cx="18" cy="14" rx="12" ry="5" fill="#FEFCE8" opacity="0.8" />
            {/* Freshly Snipped Chives */}
            <circle cx="-20" cy="10" r="2" fill="#15803D" />
            <circle cx="-5" cy="15" r="2" fill="#15803D" />
            <circle cx="12" cy="10" r="2" fill="#15803D" />
            <circle cx="28" cy="14" r="2" fill="#15803D" />
          </g>
        );

      case 'avocado_toast':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="30" rx="75" ry="24" fill="#CBD5E1" opacity="0.6" />
            {/* Sourdough Toast */}
            <path d="M-55 10 C-55 -15 55 -15 55 10 C55 24 -55 24 -55 10 Z" fill="#92400E" />
            <path d="M-50 8 C-50 -10 50 -10 50 8 C50 20 -50 20 -50 8 Z" fill="#D97706" />
            {/* Creamy Mashed Avocado */}
            <path d="M-42 6 C-40 -4 40 -4 42 6 C40 16 -40 16 -42 6 Z" fill="#65A30D" />
            <path d="M-36 4 C-30 -2 30 -2 36 4 C32 12 -32 12 -36 4 Z" fill="#84CC16" />
            {/* Avocado Slices fan */}
            <ellipse cx="-18" cy="2" rx="14" ry="6" fill="#4D7C0F" transform="rotate(-15 -18 2)" />
            <ellipse cx="0" cy="4" rx="14" ry="6" fill="#4D7C0F" />
            <ellipse cx="18" cy="2" rx="14" ry="6" fill="#4D7C0F" transform="rotate(15 18 2)" />
            {/* Poached Egg on top */}
            <ellipse cx="0" cy="-2" rx="18" ry="11" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="1" />
            <circle cx="2" cy="-3" r="7" fill="#F59E0B" />
            {/* Chili flakes */}
            <circle cx="-10" cy="2" r="1.5" fill="#DC2626" />
            <circle cx="12" cy="0" r="1.5" fill="#DC2626" />
          </g>
        );

      case 'pancakes_fluffy':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="42" rx="70" ry="22" fill="#E2E8F0" />
            {/* Bottom Pancake */}
            <ellipse cx="0" cy="25" rx="55" ry="16" fill="#B45309" />
            <ellipse cx="0" cy="22" rx="52" ry="14" fill="#D97706" />
            {/* Middle Pancake */}
            <ellipse cx="0" cy="12" rx="52" ry="15" fill="#B45309" />
            <ellipse cx="0" cy="9" rx="49" ry="13" fill="#D97706" />
            {/* Top Pancake */}
            <ellipse cx="0" cy="-2" rx="50" ry="15" fill="#B45309" />
            <ellipse cx="0" cy="-5" rx="47" ry="13" fill="#F59E0B" />
            {/* Melting Butter Pat */}
            <rect x="-10" y="-18" width="20" height="12" rx="2" fill="#FDE047" stroke="#EAB308" strokeWidth="1" />
            {/* Amber Maple Syrup Cascade */}
            <path d="M-8 -10 Q-15 5 -12 18 Q-5 12 0 10 Q8 18 14 6 L12 -10 Z" fill="#D97706" opacity="0.85" />
            <circle cx="-12" cy="24" r="3" fill="#D97706" opacity="0.85" />
          </g>
        );

      // ----------------------------------------------------
      // ALMOÇO, CARNES & CHURRASCO
      // ----------------------------------------------------
      case 'steak_acebolado':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="25" rx="84" ry="40" fill="#E2E8F0" />
            <ellipse cx="0" cy="20" rx="78" ry="34" fill="#F8FAFC" />
            {/* Browned Juicy Pan Steak */}
            <ellipse cx="0" cy="14" rx="58" ry="24" fill="#451A03" />
            <ellipse cx="0" cy="10" rx="54" ry="21" fill="#78350F" />
            {/* Golden Caramelized Onions mountain */}
            <g stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round">
              <path d="M-30 6 Q-10 0 10 8" />
              <path d="M-20 12 Q0 4 25 10" />
              <path d="M-10 -2 Q15 -4 30 4" />
              <path d="M-35 14 Q-5 18 20 14" />
            </g>
            {/* Rich pan sauce sheen */}
            <ellipse cx="0" cy="12" rx="30" ry="8" fill="#451A03" opacity="0.5" />
            {/* Parsley flakes */}
            <circle cx="-15" cy="8" r="1.5" fill="#16A34A" />
            <circle cx="15" cy="6" r="1.5" fill="#16A34A" />
          </g>
        );

      case 'parmigiana_chicken':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="25" rx="84" ry="40" fill="#E2E8F0" />
            <ellipse cx="0" cy="20" rx="78" ry="34" fill="#F8FAFC" />
            {/* Crispy breaded cutlet */}
            <ellipse cx="0" cy="14" rx="58" ry="24" fill="#B45309" />
            {/* Rustic Marinara Tomato Sauce */}
            <ellipse cx="0" cy="10" rx="50" ry="19" fill="#DC2626" />
            {/* Melted Broiled Mozzarella Sheet with brown spots */}
            <ellipse cx="0" cy="8" rx="42" ry="15" fill="#FEF08A" />
            <circle cx="-18" cy="8" r="3.5" fill="#B45309" />
            <circle cx="16" cy="6" r="4" fill="#B45309" />
            <circle cx="0" cy="10" r="3" fill="#B45309" />
            {/* Fresh Oregano & Basil */}
            <circle cx="-8" cy="6" r="1.5" fill="#16A34A" />
            <circle cx="8" cy="10" r="1.5" fill="#16A34A" />
          </g>
        );

      case 'grilled_chicken':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="25" rx="84" ry="40" fill="#E2E8F0" />
            <ellipse cx="0" cy="20" rx="78" ry="34" fill="#F8FAFC" />
            {/* Tender seared chicken breast */}
            <path d="M-45 10 C-45 -10 35 -16 48 5 C45 24 -35 24 -45 10 Z" fill="#F59E0B" />
            <path d="M-40 8 C-40 -6 32 -12 42 4 C38 20 -30 20 -40 8 Z" fill="#FDE047" />
            {/* Charcoal Grill Marks */}
            <line x1="-25" y1="-2" x2="-15" y2="18" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="-5" y1="-4" x2="5" y2="16" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="15" y1="-6" x2="25" y2="14" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
            {/* Fresh Lemon Wheel */}
            <circle cx="-32" cy="-4" r="12" fill="#FACC15" stroke="#EAB308" strokeWidth="1.5" />
            <circle cx="-32" cy="-4" r="9" fill="#FEF08A" />
            {/* Rosemary sprig */}
            <path d="M10 2 Q28 -8 40 -4" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
          </g>
        );

      case 'bbq_picanha':
        return (
          <g transform="translate(100, 100)">
            {/* Heavy Brazilian Wooden Churrasco Board */}
            <ellipse cx="0" cy="20" rx="86" ry="44" fill="#78350F" />
            <ellipse cx="0" cy="18" rx="80" ry="38" fill="#92400E" />
            {/* Sliced Picanha with Golden Fat Cap (Gordurinha) */}
            <g transform="translate(-15, 6)">
              {/* Slice 1 */}
              <path d="M-35 8 C-35 -6 5 -6 5 8 C5 16 -35 16 -35 8 Z" fill="#451A03" />
              <path d="M-30 6 C-30 -2 0 -2 0 6 C0 13 -30 13 -30 6 Z" fill="#991B1B" />
              {/* Golden Fat Cap */}
              <path d="M-35 4 Q-15 -4 5 4" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" fill="none" />
              {/* Slice 2 (front) */}
              <path d="M-25 18 C-25 4 15 4 15 18 C15 26 -25 26 -25 18 Z" fill="#451A03" />
              <path d="M-20 16 C-20 8 10 8 10 16 C10 23 -20 23 -20 16 Z" fill="#DC2626" />
              <path d="M-25 14 Q-5 6 15 14" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" fill="none" />
              {/* Sal Grosso (coarse salt crystals) */}
              <rect x="-12" y="12" width="2" height="2" fill="#FFFFFF" />
              <rect x="0" y="14" width="2.5" height="2.5" fill="#FFFFFF" />
              <rect x="-8" y="16" width="2" height="2" fill="#FFFFFF" />
            </g>
            {/* Farofa Bowl side */}
            <g transform="translate(42, 6)">
              <ellipse cx="0" cy="8" rx="20" ry="10" fill="#FDE047" />
              <ellipse cx="0" cy="6" rx="18" ry="8" fill="#D97706" />
              {/* Farofa crunchy flecks */}
              <circle cx="-5" cy="6" r="1" fill="#78350F" />
              <circle cx="4" cy="5" r="1.2" fill="#78350F" />
            </g>
          </g>
        );

      case 'bbq_ribs':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="20" rx="86" ry="44" fill="#78350F" />
            {/* Slow Roasted Rib Rack */}
            <rect x="-50" y="-4" width="100" height="28" rx="8" fill="#451A03" />
            <rect x="-46" y="-2" width="92" height="24" rx="6" fill="#7F1D1D" />
            {/* Exposed Rib Bones */}
            <rect x="-42" y="-12" width="8" height="12" rx="3" fill="#F8FAFC" />
            <rect x="-16" y="-14" width="8" height="14" rx="3" fill="#F8FAFC" />
            <rect x="10" y="-14" width="8" height="14" rx="3" fill="#F8FAFC" />
            <rect x="34" y="-12" width="8" height="12" rx="3" fill="#F8FAFC" />
            {/* Glossy BBQ glaze */}
            <ellipse cx="0" cy="6" rx="40" ry="8" fill="#B91C1C" opacity="0.6" />
          </g>
        );

      // ----------------------------------------------------
      // DOCES & SOBREMESAS
      // ----------------------------------------------------
      case 'brownie_chocolate':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="35" rx="65" ry="20" fill="#CBD5E1" opacity="0.5" />
            {/* Fudgy Chocolate Brownie Cube */}
            <path d="M-45 6 L0 25 L45 6 L0 -12 Z" fill="#2E1005" />
            {/* Front cut face */}
            <path d="M-45 6 L0 25 L0 42 L-45 24 Z" fill="#1C0A00" />
            {/* Right cut face */}
            <path d="M0 25 L45 6 L45 24 L0 42 Z" fill="#2E1005" />
            {/* Top Crinkle Papery Crust with Chocolate Chips */}
            <path d="M-44 5 L0 23 L44 5 L0 -10 Z" fill="#451A03" />
            {/* Crackles */}
            <path d="M-25 6 L-10 14 L5 8" stroke="#78350F" strokeWidth="1.5" fill="none" />
            <path d="M0 0 L15 12" stroke="#78350F" strokeWidth="1.5" fill="none" />
            {/* Glossy melted chocolate chips */}
            <ellipse cx="-15" cy="8" rx="4" ry="2.5" fill="#1C0A00" />
            <ellipse cx="12" cy="14" rx="5" ry="3" fill="#1C0A00" />
            <ellipse cx="10" cy="0" rx="4" ry="2.5" fill="#1C0A00" />
            {/* Cocoa dust */}
            <circle cx="-5" cy="4" r="1" fill="#FEF3C7" opacity="0.6" />
            <circle cx="20" cy="4" r="1" fill="#FEF3C7" opacity="0.6" />
          </g>
        );

      case 'cake_grandma':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="35" rx="72" ry="22" fill="#E2E8F0" />
            {/* Classic Fluted Brazilian Ring Cake (Bolo da Vovó) */}
            <ellipse cx="0" cy="15" rx="60" ry="25" fill="#D97706" />
            <path d="M-60 15 C-60 -25 60 -25 60 15 Z" fill="#F59E0B" />
            <ellipse cx="0" cy="-6" rx="48" ry="18" fill="#FDE047" />
            {/* Center Bundt Hole */}
            <ellipse cx="0" cy="-6" rx="16" ry="8" fill="#B45309" />
            <ellipse cx="0" cy="-5" rx="14" ry="7" fill="#78350F" />
            {/* Powdered Sugar Dusting */}
            <ellipse cx="0" cy="-10" rx="36" ry="10" fill="#FFFFFF" opacity="0.75" />
            <ellipse cx="-20" cy="6" rx="10" ry="4" fill="#FFFFFF" opacity="0.6" />
            <ellipse cx="20" cy="6" rx="10" ry="4" fill="#FFFFFF" opacity="0.6" />
          </g>
        );

      case 'cake_red_velvet':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="35" rx="68" ry="22" fill="#E2E8F0" />
            {/* Dramatic Red Velvet Cake Slice */}
            <path d="M-40 20 L25 35 L45 -20 L-20 -35 Z" fill="#991B1B" />
            {/* Side face with cream cheese frosting layers */}
            <path d="M-40 20 L25 35 L25 5 L-40 -10 Z" fill="#7F1D1D" />
            {/* Frosting layer middle */}
            <path d="M-40 4 L25 19 L25 14 L-40 -1 Z" fill="#FFFBEB" />
            {/* Frosting layer bottom */}
            <path d="M-40 18 L25 33 L25 30 L-40 15 Z" fill="#FFFBEB" />
            {/* Top Frosting Snow */}
            <path d="M-40 -10 L25 5 L45 -20 L-20 -35 Z" fill="#FFFBEB" />
            {/* Red Cake Crumbs on top */}
            <circle cx="0" cy="-15" r="2" fill="#DC2626" />
            <circle cx="10" cy="-8" r="1.8" fill="#DC2626" />
            <circle cx="-12" cy="-22" r="1.5" fill="#DC2626" />
          </g>
        );

      case 'cookies_choc_chip':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="35" rx="70" ry="22" fill="#CBD5E1" opacity="0.5" />
            {/* Back Cookie */}
            <ellipse cx="-20" cy="8" rx="34" ry="18" fill="#B45309" />
            <ellipse cx="-20" cy="6" rx="32" ry="16" fill="#D97706" />
            {/* Front Big Warm Bakery Cookie */}
            <ellipse cx="14" cy="18" rx="42" ry="22" fill="#B45309" />
            <ellipse cx="14" cy="15" rx="40" ry="20" fill="#F59E0B" />
            <ellipse cx="14" cy="13" rx="36" ry="17" fill="#FDE047" />
            {/* Melted Dark Chocolate Chunks */}
            <ellipse cx="0" cy="12" rx="6" ry="4" fill="#2E1005" />
            <ellipse cx="22" cy="8" rx="7" ry="4.5" fill="#2E1005" />
            <ellipse cx="12" cy="22" rx="6" ry="3.5" fill="#2E1005" />
            <ellipse cx="32" cy="18" rx="5" ry="3" fill="#2E1005" />
            <ellipse cx="-5" cy="22" rx="4" ry="3" fill="#2E1005" />
            {/* Chocolate Melt shine */}
            <circle cx="1" cy="11" r="1.2" fill="#FFFFFF" opacity="0.7" />
            <circle cx="23" cy="7" r="1.2" fill="#FFFFFF" opacity="0.7" />
          </g>
        );

      case 'mousse_maracuja':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="40" rx="50" ry="16" fill="#CBD5E1" opacity="0.6" />
            {/* Crystal Dessert Glass Coupe */}
            <path d="M-30 -20 L-24 20 Q0 30 24 20 L30 -20 Z" fill="#E0F2FE" opacity="0.4" stroke="#BAE6FD" strokeWidth="1.5" />
            {/* Stem & Base */}
            <path d="M-3 24 L-3 36 L-20 40 L20 40 L3 36 L3 24 Z" fill="#BAE6FD" opacity="0.5" />
            {/* Airy Tropical Passion Fruit Mousse */}
            <path d="M-28 -12 L-22 18 Q0 26 22 18 L28 -12 Z" fill="#FACC15" />
            {/* Glossy Seed Glaze on Top */}
            <ellipse cx="0" cy="-12" rx="28" ry="10" fill="#EAB308" />
            {/* Black Passion Fruit Seeds */}
            <ellipse cx="-12" cy="-12" rx="4" ry="2.5" fill="#1C1917" stroke="#CA8A04" strokeWidth="1" />
            <ellipse cx="4" cy="-10" rx="4" ry="2.5" fill="#1C1917" stroke="#CA8A04" strokeWidth="1" />
            <ellipse cx="16" cy="-13" rx="3.5" ry="2" fill="#1C1917" stroke="#CA8A04" strokeWidth="1" />
            <ellipse cx="-4" cy="-15" rx="3.5" ry="2" fill="#1C1917" stroke="#CA8A04" strokeWidth="1" />
          </g>
        );

      case 'mousse_chocolate':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="40" rx="50" ry="16" fill="#CBD5E1" opacity="0.6" />
            <path d="M-30 -20 L-24 20 Q0 30 24 20 L30 -20 Z" fill="#E0F2FE" opacity="0.4" stroke="#BAE6FD" strokeWidth="1.5" />
            {/* Stem */}
            <path d="M-3 24 L-3 36 L-20 40 L20 40 L3 36 L3 24 Z" fill="#BAE6FD" opacity="0.5" />
            {/* Rich Dark Chocolate Airy Mousse */}
            <path d="M-28 -12 L-22 18 Q0 26 22 18 L28 -12 Z" fill="#3B1D08" />
            <ellipse cx="0" cy="-12" rx="28" ry="10" fill="#451A03" />
            {/* Whipped Cream Dollop */}
            <ellipse cx="0" cy="-16" rx="10" ry="6" fill="#FFFBEB" />
            <circle cx="0" cy="-20" r="4" fill="#FFFFFF" />
            {/* Chocolate Curls & Mint */}
            <path d="M-6 -22 C-12 -28 0 -28 -6 -22 Z" fill="#16A34A" />
            <ellipse cx="4" cy="-18" rx="3" ry="1.5" fill="#1C0A00" />
          </g>
        );

      case 'gelatina_mosaico':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="35" rx="65" ry="20" fill="#E2E8F0" />
            {/* Transparent Glass Bowl */}
            <ellipse cx="0" cy="5" rx="60" ry="26" fill="#E0F2FE" opacity="0.3" stroke="#BAE6FD" strokeWidth="1.5" />
            {/* Sweet Condensed Milk Cream Base (White) */}
            <ellipse cx="0" cy="5" rx="56" ry="24" fill="#FFFBEB" />
            {/* Colorful Translucent Gelatin Cubes */}
            {/* Strawberry Red */}
            <rect x="-35" y="-4" width="16" height="14" rx="3" fill="#EF4444" opacity="0.9" />
            <rect x="18" y="2" width="15" height="13" rx="3" fill="#EF4444" opacity="0.9" />
            {/* Lime Green */}
            <rect x="-12" y="4" width="16" height="14" rx="3" fill="#22C55E" opacity="0.9" />
            <rect x="5" y="-12" width="15" height="13" rx="3" fill="#22C55E" opacity="0.9" />
            {/* Pineapple Yellow / Orange */}
            <rect x="-20" y="-12" width="15" height="13" rx="3" fill="#FACC15" opacity="0.9" />
            <rect x="2" y="10" width="14" height="12" rx="3" fill="#F97316" opacity="0.9" />
            {/* Grape Purple / Blue */}
            <rect x="25" y="-10" width="14" height="13" rx="3" fill="#8B5CF6" opacity="0.9" />
          </g>
        );

      case 'pudim_leite':
        return (
          <g transform="translate(100, 100)">
            {/* Ceramic Dessert Dish */}
            <ellipse cx="0" cy="35" rx="74" ry="24" fill="#E2E8F0" />
            <ellipse cx="0" cy="32" rx="68" ry="20" fill="#F8FAFC" />
            {/* Pool of Glossy Caramel Syrup */}
            <ellipse cx="0" cy="28" rx="62" ry="18" fill="#B45309" opacity="0.8" />
            <ellipse cx="0" cy="26" rx="58" ry="16" fill="#D97706" opacity="0.8" />
            {/* Smooth Brazilian Flan Body (Without bubbles/holes) */}
            <path d="M-42 18 C-40 -10 40 -10 42 18 Z" fill="#FDE047" />
            <path d="M-38 16 C-36 -8 36 -8 38 16 Z" fill="#FEF08A" />
            {/* Caramel Glaze Crown on Top */}
            <ellipse cx="0" cy="-6" rx="32" ry="11" fill="#92400E" />
            <ellipse cx="0" cy="-7" rx="28" ry="9" fill="#B45309" />
            {/* Caramel Syrup Drip down the side */}
            <path d="M-12 -2 Q-14 8 -10 16" stroke="#92400E" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M10 -2 Q12 10 8 18" stroke="#92400E" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Glossy highlight */}
            <ellipse cx="-10" cy="-8" rx="10" ry="3" fill="#FFFFFF" opacity="0.4" />
          </g>
        );

      case 'brigadeiro_gourmet':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="35" rx="70" ry="22" fill="#E2E8F0" />
            {/* Paper baking cups and truffles */}
            {/* Brigadeiro 1 */}
            <g transform="translate(-26, 12)">
              <ellipse cx="0" cy="10" rx="18" ry="8" fill="#451A03" />
              <circle cx="0" cy="2" r="16" fill="#1C0A00" />
              {/* Chocolate Sprinkles (granulado) */}
              <line x1="-8" y1="0" x2="-4" y2="4" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
              <line x1="2" y1="-4" x2="6" y2="0" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
              <line x1="-4" y1="-6" x2="0" y2="-2" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
            </g>
            {/* Brigadeiro 2 (Center) */}
            <g transform="translate(0, 4)">
              <ellipse cx="0" cy="12" rx="20" ry="9" fill="#451A03" />
              <circle cx="0" cy="2" r="18" fill="#1C0A00" />
              <line x1="-10" y1="2" x2="-5" y2="6" stroke="#582900" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="4" y1="-2" x2="9" y2="2" stroke="#582900" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="-3" y1="-6" x2="2" y2="-2" stroke="#582900" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="2" y1="6" x2="7" y2="10" stroke="#582900" strokeWidth="2.5" strokeLinecap="round" />
            </g>
            {/* Brigadeiro 3 */}
            <g transform="translate(26, 12)">
              <ellipse cx="0" cy="10" rx="18" ry="8" fill="#451A03" />
              <circle cx="0" cy="2" r="16" fill="#1C0A00" />
              <line x1="-6" y1="0" x2="-2" y2="4" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="-4" x2="7" y2="0" stroke="#451A03" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>
        );

      // ----------------------------------------------------
      // JAPÃO & ASIÁTICA
      // ----------------------------------------------------
      case 'curry_japanese':
        return (
          <g transform="translate(100, 100)">
            {/* Deep Oval Japanese Curry Dish */}
            <ellipse cx="0" cy="15" rx="86" ry="46" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
            {/* Steamed White Rice (Left side) */}
            <path d="M-75 10 C-75 -15 -10 -15 -10 20 C-10 40 -75 35 -75 10 Z" fill="#FFFFFF" />
            <circle cx="-50" cy="6" r="16" fill="#FFFFFF" />
            <circle cx="-32" cy="12" r="18" fill="#FFFFFF" />
            {/* Rich Golden-Brown Japanese Curry (Right side) */}
            <path d="M-15 15 C-15 -12 75 -12 75 15 C75 35 -15 35 -15 15 Z" fill="#78350F" />
            <path d="M-10 16 C-10 -8 70 -8 70 16 C70 32 -10 32 -10 16 Z" fill="#92400E" />
            {/* Tender Potato Chunks */}
            <ellipse cx="20" cy="10" rx="9" ry="7" fill="#FEF08A" />
            {/* Sweet Carrot Chunks */}
            <polygon points="40,6 48,16 34,18" fill="#EA580C" />
            <polygon points="5,8 14,14 4,18" fill="#EA580C" />
            {/* Tender Beef cube */}
            <rect x="24" y="16" width="12" height="10" rx="2" fill="#451A03" />
            {/* Fukujinzuke (red pickled relish) */}
            <path d="M-30 -2 Q-20 -6 -10 -2" stroke="#DC2626" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        );

      case 'ramen_shoyu':
        return (
          <g transform="translate(100, 100)">
            {/* Japanese Deep Ramen Bowl with Red Rim Pattern */}
            <path d="M-65 -10 C-65 48 65 48 65 -10 Z" fill="#18181B" />
            <ellipse cx="0" cy="-10" rx="65" ry="24" fill="#DC2626" />
            <ellipse cx="0" cy="-10" rx="61" ry="21" fill="#78350F" />
            {/* Rich Shoyu Broth & Ramen Noodles */}
            <ellipse cx="0" cy="-10" rx="56" ry="18" fill="#92400E" />
            <path d="M-35 -10 Q-15 4 10 -8" stroke="#FDE047" strokeWidth="3" fill="none" />
            <path d="M-20 -4 Q5 8 30 -6" stroke="#FEF08A" strokeWidth="2.5" fill="none" />
            {/* Rolled Chashu Pork Slice */}
            <ellipse cx="-24" cy="-8" rx="16" ry="10" fill="#7F1D1D" stroke="#D97706" strokeWidth="1.5" />
            <ellipse cx="-24" cy="-8" rx="10" ry="6" fill="#991B1B" />
            {/* Ajitsuke Soft-Boiled Egg Halved (with glowing jammy yolk) */}
            <g transform="translate(20, -6)">
              <ellipse cx="0" cy="0" rx="15" ry="10" fill="#FFFBEB" stroke="#D97706" strokeWidth="1" />
              <ellipse cx="-1" cy="0" rx="9" ry="6" fill="#F59E0B" />
              <ellipse cx="-1" cy="0" rx="6" ry="4" fill="#EA580C" />
            </g>
            {/* Nori Sheet */}
            <rect x="-48" y="-30" width="22" height="24" rx="2" fill="#064E3B" transform="rotate(-15 -48 -30)" />
            {/* Narutomaki (Pink Fishcake spiral) */}
            <circle cx="-2" cy="0" r="7" fill="#FFFFFF" />
            <path d="M-4 0 C-4 -3 0 -3 0 0 C0 3 4 3 4 0" stroke="#F43F5E" strokeWidth="1.5" fill="none" />
            {/* Chopped Scallions */}
            <circle cx="2" cy="-14" r="2" fill="#22C55E" />
            <circle cx="10" cy="-16" r="2" fill="#22C55E" />
            <circle cx="-14" cy="-16" r="2" fill="#22C55E" />
          </g>
        );

      case 'poke_salmon':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="20" rx="80" ry="38" fill="#1E293B" />
            <ellipse cx="0" cy="16" rx="74" ry="34" fill="#334155" />
            {/* Sushi Rice base */}
            <ellipse cx="0" cy="14" rx="66" ry="28" fill="#FFFFFF" />
            {/* Fresh Diced Salmon Cubes (Coral/Orange) */}
            <g transform="translate(-16, 8)">
              <rect x="-14" y="-8" width="12" height="10" rx="2" fill="#FB923C" stroke="#EA580C" strokeWidth="0.8" />
              <rect x="-4" y="-2" width="12" height="10" rx="2" fill="#F97316" stroke="#EA580C" strokeWidth="0.8" />
              <rect x="-18" y="2" width="12" height="10" rx="2" fill="#FB923C" stroke="#EA580C" strokeWidth="0.8" />
            </g>
            {/* Edamame Beans */}
            <g transform="translate(18, 4)">
              <ellipse cx="-4" cy="-4" rx="5" ry="3" fill="#84CC16" />
              <ellipse cx="6" cy="-2" rx="5" ry="3" fill="#65A30D" />
              <ellipse cx="0" cy="5" rx="5" ry="3" fill="#84CC16" />
            </g>
            {/* Avocado Fan */}
            <g transform="translate(0, -6)">
              <ellipse cx="-12" cy="0" rx="10" ry="4" fill="#4D7C0F" transform="rotate(-20 -12 0)" />
              <ellipse cx="0" cy="0" rx="10" ry="4" fill="#65A30D" />
              <ellipse cx="12" cy="0" rx="10" ry="4" fill="#4D7C0F" transform="rotate(20 12 0)" />
            </g>
            {/* Black Sesame Seeds & Ponzu Glaze */}
            <circle cx="-6" cy="10" r="1.2" fill="#000000" />
            <circle cx="10" cy="12" r="1.2" fill="#000000" />
            <circle cx="0" cy="16" r="1.2" fill="#000000" />
          </g>
        );

      case 'mochi_sweet':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="30" rx="65" ry="20" fill="#E2E8F0" />
            {/* Pastel Pink Strawberry Daifuku Mochi */}
            <ellipse cx="-20" cy="10" rx="26" ry="18" fill="#FCE7F3" stroke="#F472B6" strokeWidth="1" />
            {/* Cut face revealing whole fresh strawberry & sweet red bean paste */}
            <ellipse cx="18" cy="12" rx="28" ry="19" fill="#FCE7F3" stroke="#F472B6" strokeWidth="1" />
            {/* Sweet Azuki Bean Paste layer */}
            <ellipse cx="18" cy="12" rx="20" ry="14" fill="#451A03" />
            {/* Juicy Red Strawberry Heart */}
            <path d="M18 4 C10 4 8 18 18 22 C28 18 26 4 18 4 Z" fill="#EF4444" />
            <circle cx="16" cy="10" r="1" fill="#FEF08A" />
            <circle cx="20" cy="14" r="1" fill="#FEF08A" />
          </g>
        );

      // ----------------------------------------------------
      // SALADAS & LEVES
      // ----------------------------------------------------
      case 'salad_caesar':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="20" rx="84" ry="44" fill="#E2E8F0" />
            <ellipse cx="0" cy="16" rx="78" ry="38" fill="#F8FAFC" />
            {/* Crisp Romaine Leaves */}
            <g fill="#22C55E">
              <ellipse cx="-28" cy="4" rx="24" ry="14" transform="rotate(-15 -28 4)" />
              <ellipse cx="26" cy="6" rx="24" ry="14" transform="rotate(15 26 6)" />
              <ellipse cx="0" cy="0" rx="26" ry="15" fill="#16A34A" />
            </g>
            {/* Creamy Caesar Dressing drizzle */}
            <path d="M-30 4 Q0 -6 30 6" stroke="#FEF3C7" strokeWidth="3" fill="none" />
            {/* Golden Garlic Croutons */}
            <rect x="-18" y="2" width="10" height="9" rx="2" fill="#D97706" />
            <rect x="8" y="4" width="11" height="10" rx="2" fill="#B45309" />
            <rect x="-4" y="-4" width="9" height="8" rx="2" fill="#D97706" />
            {/* Shaved Parmesan flakes */}
            <path d="M-10 6 L-4 4" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M14 0 L20 -2" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        );

      case 'salad_greek':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="20" rx="84" ry="44" fill="#E2E8F0" />
            <ellipse cx="0" cy="16" rx="78" ry="38" fill="#F8FAFC" />
            {/* Red Ripe Tomatoes */}
            <circle cx="-25" cy="4" r="12" fill="#EF4444" />
            <circle cx="22" cy="8" r="11" fill="#DC2626" />
            {/* Crisp Cucumbers */}
            <circle cx="-5" cy="10" r="10" fill="#22C55E" stroke="#15803D" strokeWidth="2" />
            <circle cx="12" cy="-2" r="10" fill="#22C55E" stroke="#15803D" strokeWidth="2" />
            {/* Kalamata Black Olives */}
            <ellipse cx="-12" cy="-2" rx="6" ry="4" fill="#1E1B4B" />
            <ellipse cx="28" cy="0" rx="6" ry="4" fill="#1E1B4B" />
            {/* Slab of Greek Feta Cheese */}
            <rect x="-10" y="-8" width="22" height="14" rx="2" fill="#FFFBEB" stroke="#E2E8F0" strokeWidth="1" />
            {/* Dried Oregano & Olive Oil */}
            <circle cx="-2" cy="-2" r="1" fill="#15803D" />
            <circle cx="4" cy="-4" r="1" fill="#15803D" />
            <circle cx="2" cy="2" r="1" fill="#15803D" />
          </g>
        );

      case 'salad_potato':
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="20" rx="84" ry="44" fill="#E2E8F0" />
            <ellipse cx="0" cy="16" rx="78" ry="38" fill="#F8FAFC" />
            {/* Creamy Potato Salad Mound with Homemade Mayo */}
            <ellipse cx="0" cy="10" rx="55" ry="24" fill="#FEF08A" />
            <ellipse cx="0" cy="6" rx="50" ry="20" fill="#FEFCE8" />
            {/* Potato cubes */}
            <ellipse cx="-18" cy="6" rx="10" ry="7" fill="#FEF08A" />
            <ellipse cx="16" cy="8" rx="11" ry="8" fill="#FEF08A" />
            {/* Tiny Green Peas & Orange Carrot Bits */}
            <circle cx="-12" cy="4" r="3" fill="#22C55E" />
            <circle cx="4" cy="10" r="3" fill="#22C55E" />
            <circle cx="20" cy="4" r="3" fill="#22C55E" />
            <rect x="-4" y="2" width="5" height="5" rx="1" fill="#F97316" />
            <rect x="10" y="8" width="5" height="5" rx="1" fill="#F97316" />
            {/* Fresh Parsley */}
            <circle cx="-2" cy="12" r="1.5" fill="#15803D" />
          </g>
        );

      default:
        // Generic fallback plate with gourmet garnish
        return (
          <g transform="translate(100, 100)">
            <ellipse cx="0" cy="20" rx="84" ry="44" fill="#E2E8F0" />
            <ellipse cx="0" cy="16" rx="78" ry="38" fill="#F8FAFC" />
            <ellipse cx="0" cy="10" rx="54" ry="24" fill={isSweet ? '#FED7AA' : '#FDE047'} />
            <ellipse cx="0" cy="6" rx="46" ry="18" fill={isSweet ? '#FEF3C7' : '#FEF08A'} />
            <circle cx="0" cy="4" r="4" fill={isSweet ? '#DC2626' : '#16A34A'} />
          </g>
        );
    }
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl ${className}`}
      style={{ background: bgGradient }}
    >
      <svg
        viewBox="0 0 200 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
      >
        {renderDishContent()}
      </svg>
    </div>
  );
}
