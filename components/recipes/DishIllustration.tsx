import React from 'react';
import {
  BrasilCuscuzIllustration,
  BrasilFeijoadaIllustration,
  BrasilCoxinhaIllustration,
  BrasilPaoDeQueijoIllustration,
  BrasilBrigadeiroIllustration,
  BrasilBoloCenouraIllustration,
  BrasilMoquecaIllustration,
  BrasilPastelIllustration,
  BrasilTapiocaIllustration,
} from './illustrations/BrasilDishes';
import {
  BurgerClassicIllustration,
  BurgerChickenIllustration,
  BurgerJapaneseIllustration,
  BreadRusticIllustration,
} from './illustrations/BurgersAndBreads';
import {
  PastaCarbonaraIllustration,
  ItalyPizzaIllustration,
  PastaLasagnaIllustration,
  ItalyRisottoIllustration,
  PastaWhiteSauceIllustration,
  PastaChickenIllustration,
  PastaPestoIllustration,
  ItalyBruschettaIllustration,
} from './illustrations/PastasAndItaly';
import {
  FranceRatatouilleIllustration,
  FranceQuicheIllustration,
  FranceCroissantIllustration,
  FranceOnionSoupIllustration,
} from './illustrations/FranceDishes';
import {
  LunchSteakIllustration,
  BreakfastEggsIllustration,
  BreakfastPancakeIllustration,
} from './illustrations/BreakfastAndMeats';
import {
  DessertPuddingIllustration,
  DessertBrownieIllustration,
  DessertCookieIllustration,
  DessertRedVelvetIllustration,
  DessertSpongeCakeIllustration,
  DessertLemonPieIllustration,
  DessertMousseIllustration,
  DessertJellyIllustration,
} from './illustrations/DessertsAndBakery';
import {
  JapanRamenIllustration,
  JapanMochiIllustration,
  JapanPokeIllustration,
  JapanGyozaIllustration,
  JapanKaraageIllustration,
  DrinkCoffeeIllustration,
  DrinkIcedCoffeeIllustration,
  DrinkCappuccinoIllustration,
  SaladCaesarIllustration,
  SaladGreekIllustration,
  SaladPotatoIllustration,
  SaladTropicalIllustration,
} from './illustrations/JapanSaladsDrinks';
import { DishType } from '@/types/recipe';

interface DishIllustrationProps {
  id: string;
  type?: DishType | 'drink' | string;
  className?: string;
}

/**
 * DishIllustration: Hyper-realistic vector food illustration engine.
 *
 * Implements strict gastronomic realism principles:
 * 1. viewBox 0 0 800 800 high definition coordinate space.
 * 2. feTurbulence & feDisplacementMap organic porous textural filters for dough, crust, meat, sponge cake.
 * 3. Specular highlights (0.6 - 0.9 opacity paths, 1.0 hot spot specular pinpoints).
 * 4. Multi-stop gradients (4 to 6 color stops) eliminating flat solid tones.
 * 5. Organic fluid drips, melting cheese cascades, crackled crusts and natural food imperfections.
 * 6. Authentic correspondence to real traditional and international culinary recipes.
 */
export const DishIllustration: React.FC<DishIllustrationProps> = ({
  id,
  type = 'salgado',
  className = '',
}) => {
  const renderDishContent = () => {
    switch (id) {
      // BRASIL
      case 'brasil_cuscuz':
        return <BrasilCuscuzIllustration />;
      case 'brasil_feijoada':
        return <BrasilFeijoadaIllustration />;
      case 'brasil_coxinha':
        return <BrasilCoxinhaIllustration />;
      case 'brasil_pao_de_queijo':
        return <BrasilPaoDeQueijoIllustration />;
      case 'brasil_brigadeiro':
        return <BrasilBrigadeiroIllustration />;
      case 'brasil_bolo_cenoura':
        return <BrasilBoloCenouraIllustration />;
      case 'brasil_moqueca':
        return <BrasilMoquecaIllustration />;
      case 'brasil_pastel':
        return <BrasilPastelIllustration />;
      case 'brasil_tapioca':
        return <BrasilTapiocaIllustration />;

      // FRANCE
      case 'france_ratatouille':
        return <FranceRatatouilleIllustration />;
      case 'france_quiche':
        return <FranceQuicheIllustration />;
      case 'france_croissant':
      case 'dessert_croissant':
        return <FranceCroissantIllustration />;
      case 'france_onion_soup':
        return <FranceOnionSoupIllustration />;

      // BURGERS & BREADS
      case 'burger_classic':
      case 'burger_smash':
      case 'burger_meat':
        return <BurgerClassicIllustration />;
      case 'burger_chicken':
        return <BurgerChickenIllustration />;
      case 'burger_japanese':
      case 'japan_hambagu':
        return <BurgerJapaneseIllustration />;
      case 'bread_rustic':
      case 'bread_burger_bun':
        return <BreadRusticIllustration />;

      // PASTAS & ITALY
      case 'pasta_carbonara':
      case 'pasta_garlic_oil':
        return <PastaCarbonaraIllustration />;
      case 'pasta_white_sauce':
        return <PastaWhiteSauceIllustration />;
      case 'pasta_chicken':
        return <PastaChickenIllustration />;
      case 'pasta_pesto':
      case 'italy_pesto':
        return <PastaPestoIllustration />;
      case 'italy_pizza':
        return <ItalyPizzaIllustration />;
      case 'italy_bruschetta':
        return <ItalyBruschettaIllustration />;
      case 'pasta_lasagna':
      case 'pasta_gnocchi':
      case 'italy_parmigiana':
      case 'lunch_parmigiana':
        return <PastaLasagnaIllustration />;
      case 'italy_risotto':
        return <ItalyRisottoIllustration />;

      // MEATS & LUNCH
      case 'lunch_steak':
      case 'lunch_ribs':
        return <LunchSteakIllustration />;

      // BREAKFAST
      case 'breakfast_eggs':
        return <BreakfastEggsIllustration />;
      case 'breakfast_toast':
        return <BreadRusticIllustration />;
      case 'breakfast_pancake':
      case 'france_crepe':
        return <BreakfastPancakeIllustration />;

      // DESSERTS & SWEETS
      case 'dessert_pudding':
        return <DessertPuddingIllustration />;
      case 'dessert_brownie':
        return <DessertBrownieIllustration />;
      case 'dessert_cookie':
      case 'dessert_cookies':
        return <DessertCookieIllustration />;
      case 'dessert_red_velvet':
        return <DessertRedVelvetIllustration />;
      case 'dessert_sponge_cake':
        return <DessertSpongeCakeIllustration />;
      case 'dessert_lemon_tart':
      case 'dessert_lemon_pie':
        return <DessertLemonPieIllustration />;
      case 'dessert_mousse':
        return <DessertMousseIllustration />;
      case 'dessert_jelly':
        return <DessertJellyIllustration />;

      // JAPAN
      case 'japan_ramen':
        return <JapanRamenIllustration />;
      case 'japan_mochi':
        return <JapanMochiIllustration />;
      case 'japan_poke':
      case 'japan_onigiri':
        return <JapanPokeIllustration />;
      case 'japan_gyoza':
        return <JapanGyozaIllustration />;
      case 'japan_karaage':
        return <JapanKaraageIllustration />;

      // DRINKS & COFFEE
      case 'drink_coffee':
      case 'drink_hot_chocolate':
      case 'drink_matcha':
        return <DrinkCoffeeIllustration />;
      case 'drink_iced_coffee':
        return <DrinkIcedCoffeeIllustration />;
      case 'drink_cappuccino':
        return <DrinkCappuccinoIllustration />;

      // SALADS
      case 'salad_caesar':
        return <SaladCaesarIllustration />;
      case 'salad_greek':
        return <SaladGreekIllustration />;
      case 'salad_tropical':
        return <SaladTropicalIllustration />;
      case 'salad_potato':
        return <SaladPotatoIllustration />;

      // FALLBACK BASED ON TYPE
      default:
        if (type === 'doce') return <DessertPuddingIllustration />;
        if (type === 'pao') return <BreadRusticIllustration />;
        if (type === 'drink' || type === 'bebida') return <DrinkCoffeeIllustration />;
        return <BurgerClassicIllustration />;
    }
  };

  return (
    <svg
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Ilustração gastronômica hiper-realista"
    >
      <defs>
        {/* ================================================================= */}
        {/* 1. TEXTURAS ORGÂNICAS & FILTROS GASTRO-FOTOGRÁFICOS                */}
        {/* ================================================================= */}

        {/* Porous Texture Filter for Breads, Cornmeal, Patties, Cakes */}
        <filter id="foodPorousNoise" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves={3}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="4.5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Fine Crust Noise for Fried Foods, Coxinha, Chicken Crumb */}
        <filter id="fineCrustNoise" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.08"
            numOctaves={4}
            result="crustNoise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="crustNoise"
            scale="3"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Meat Sear Noise for Burger Patties & Steaks */}
        <filter id="meatSearNoise" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05"
            numOctaves={3}
            result="searNoise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="searNoise"
            scale="5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Crumb Texture for Brownie & Cakes */}
        <filter id="crumbTexture" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.06"
            numOctaves={3}
            result="crumbNoise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="crumbNoise"
            scale="3.5"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Steam Blur for Hot Food Vapor */}
        <filter id="steamBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" />
        </filter>

        {/* Specular Glow Filter for Golden Glazes */}
        <filter id="specularGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* ================================================================= */}
        {/* 2. GRADIENTES MULTI-STOP (VOLUMETRIA & COZIMENTO REALÍSTICO)       */}
        {/* ================================================================= */}

        {/* Table & Occlusion Shadow */}
        <radialGradient id="tableOcclusionShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1C1917" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#1C1917" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1C1917" stopOpacity="0" />
        </radialGradient>

        {/* Ceramic Plate Rim & Body */}
        <linearGradient id="plateRimGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E7E5E4" />
          <stop offset="40%" stopColor="#F5F5F4" />
          <stop offset="80%" stopColor="#E7E5E4" />
          <stop offset="100%" stopColor="#D6D3D1" />
        </linearGradient>
        <linearGradient id="plateCeramicGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#FAFAF9" />
          <stop offset="100%" stopColor="#F5F5F4" />
        </linearGradient>
        <radialGradient id="plateInnerShadow" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="#E7E5E4" stopOpacity="0" />
          <stop offset="100%" stopColor="#A8A29E" stopOpacity="0.35" />
        </radialGradient>

        {/* Slate Plate Gradients */}
        <linearGradient id="slatePlateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3F3F46" />
          <stop offset="40%" stopColor="#27272A" />
          <stop offset="80%" stopColor="#18181B" />
          <stop offset="100%" stopColor="#09090B" />
        </linearGradient>

        {/* Wood Board Gradients */}
        <linearGradient id="woodBoardGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#78350F" />
          <stop offset="30%" stopColor="#92400E" />
          <stop offset="70%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id="woodBoardTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="50%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>

        {/* BRASIL GRADIENTS */}
        <linearGradient id="bananaLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#15803D" />
          <stop offset="35%" stopColor="#16A34A" />
          <stop offset="70%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>

        <linearGradient id="cuscuzCornGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FACC15" />
          <stop offset="25%" stopColor="#EAB308" />
          <stop offset="60%" stopColor="#CA8A04" />
          <stop offset="85%" stopColor="#A16207" />
          <stop offset="100%" stopColor="#854D0E" />
        </linearGradient>

        <linearGradient id="queijoCoalhoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="30%" stopColor="#FEF3C7" />
          <stop offset="70%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="queijoCoalhoTopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>

        <linearGradient id="butterLiquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="40%" stopColor="#FACC15" />
          <stop offset="80%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#CA8A04" />
        </linearGradient>
        <radialGradient id="meltedButterPoolGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE047" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#EAB308" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#CA8A04" stopOpacity="0" />
        </radialGradient>

        {/* FEIJOADA GRADIENTS */}
        <linearGradient id="clayPotBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3F3F46" />
          <stop offset="30%" stopColor="#27272A" />
          <stop offset="70%" stopColor="#18181B" />
          <stop offset="100%" stopColor="#09090B" />
        </linearGradient>
        <linearGradient id="clayPotRimGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#52525B" />
          <stop offset="100%" stopColor="#18181B" />
        </linearGradient>
        <linearGradient id="clayPotLipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#27272A" />
          <stop offset="50%" stopColor="#18181B" />
          <stop offset="100%" stopColor="#09090B" />
        </linearGradient>
        <linearGradient id="feijaoBrothGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#271810" />
          <stop offset="30%" stopColor="#1E120B" />
          <stop offset="70%" stopColor="#150B07" />
          <stop offset="100%" stopColor="#0A0503" />
        </linearGradient>
        <radialGradient id="brothSheenGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#B45309" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="feijaoBeanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3E2723" />
          <stop offset="40%" stopColor="#2A1612" />
          <stop offset="80%" stopColor="#1B0000" />
          <stop offset="100%" stopColor="#0D0000" />
        </linearGradient>
        <linearGradient id="paioCasingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#991B1B" />
          <stop offset="100%" stopColor="#450A0A" />
        </linearGradient>
        <linearGradient id="paioMeatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="40%" stopColor="#B91C1C" />
          <stop offset="80%" stopColor="#7F1D1D" />
          <stop offset="100%" stopColor="#450A0A" />
        </linearGradient>
        <linearGradient id="porkRibGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350F" />
          <stop offset="50%" stopColor="#451A03" />
          <stop offset="100%" stopColor="#271106" />
        </linearGradient>
        <linearGradient id="boneCartilageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="100%" stopColor="#D4D4D8" />
        </linearGradient>
        <linearGradient id="bayLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#15803D" />
          <stop offset="50%" stopColor="#166534" />
          <stop offset="100%" stopColor="#14532D" />
        </linearGradient>
        <linearGradient id="orangeJuiceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="40%" stopColor="#F97316" />
          <stop offset="80%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#C2410C" />
        </linearGradient>
        <linearGradient id="couveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="50%" stopColor="#16A34A" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>

        {/* COXINHA GRADIENTS */}
        <linearGradient id="coxinhaGoldenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="25%" stopColor="#EAB308" />
          <stop offset="60%" stopColor="#CA8A04" />
          <stop offset="85%" stopColor="#A16207" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <radialGradient id="coxinhaToastShadeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#78350F" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#B45309" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="limeJuiceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="50%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>

        {/* PÃO DE QUEIJO */}
        <linearGradient id="paoQueijoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="35%" stopColor="#FDE68A" />
          <stop offset="70%" stopColor="#F59E0B" />
          <stop offset="90%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="paoQueijoHeroGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="30%" stopColor="#FEF3C7" />
          <stop offset="65%" stopColor="#FBBF24" />
          <stop offset="85%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>

        {/* BRIGADEIRO */}
        <radialGradient id="brigadeiroChocolateGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#451A03" />
          <stop offset="40%" stopColor="#271106" />
          <stop offset="80%" stopColor="#180A04" />
          <stop offset="100%" stopColor="#090402" />
        </radialGradient>
        <linearGradient id="paperLinerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350F" />
          <stop offset="50%" stopColor="#451A03" />
          <stop offset="100%" stopColor="#271106" />
        </linearGradient>
        <linearGradient id="sprinkleChocGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B1705" />
          <stop offset="45%" stopColor="#572207" />
          <stop offset="70%" stopColor="#271106" />
          <stop offset="100%" stopColor="#120803" />
        </linearGradient>

        {/* BOLO DE CENOURA */}
        <linearGradient id="carrotCakeCrumbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FED7AA" />
          <stop offset="30%" stopColor="#FB923C" />
          <stop offset="70%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#C2410C" />
        </linearGradient>
        <linearGradient id="carrotCakeBackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#9A3412" />
        </linearGradient>
        <linearGradient id="carrotCakeTopCrumbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        <linearGradient id="chocolateCaldaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3F1D0B" />
          <stop offset="40%" stopColor="#271106" />
          <stop offset="80%" stopColor="#180A04" />
          <stop offset="100%" stopColor="#090402" />
        </linearGradient>
        <linearGradient id="chocolateDripGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#572207" />
          <stop offset="40%" stopColor="#381404" />
          <stop offset="80%" stopColor="#200B02" />
          <stop offset="100%" stopColor="#0A0401" />
        </linearGradient>

        {/* BURGER GRADIENTS */}
        <linearGradient id="bunBottomGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="40%" stopColor="#FDE68A" />
          <stop offset="75%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="bunCrumbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="100%" stopColor="#FEF3C7" />
        </linearGradient>
        <linearGradient id="bunTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="25%" stopColor="#F59E0B" />
          <stop offset="60%" stopColor="#D97706" />
          <stop offset="85%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <radialGradient id="bunBrowningGrad" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#78350F" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#92400E" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pattyBeefGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5B2E15" />
          <stop offset="35%" stopColor="#3E1A08" />
          <stop offset="70%" stopColor="#271106" />
          <stop offset="100%" stopColor="#150802" />
        </linearGradient>
        <linearGradient id="cheddarMeltGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="25%" stopColor="#FACC15" />
          <stop offset="60%" stopColor="#F59E0B" />
          <stop offset="85%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="tomatoSkinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="50%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <linearGradient id="tomatoFleshGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="50%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#B91C1C" />
        </linearGradient>
        <linearGradient id="tomatoJellyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#84CC16" />
          <stop offset="40%" stopColor="#65A30D" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <linearGradient id="lettuceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="35%" stopColor="#4ADE80" />
          <stop offset="70%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>
        <linearGradient id="pickleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4D7C0F" />
          <stop offset="100%" stopColor="#1A2E05" />
        </linearGradient>
        <linearGradient id="pickleCoreGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#BEF264" />
          <stop offset="100%" stopColor="#65A30D" />
        </linearGradient>
        <linearGradient id="specialSauceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FED7AA" />
          <stop offset="50%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        <linearGradient id="sesameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="45%" stopColor="#FEF3C7" />
          <stop offset="85%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* CHICKEN & JAPAN BURGER */}
        <linearGradient id="friedChickenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="25%" stopColor="#EAB308" />
          <stop offset="60%" stopColor="#CA8A04" />
          <stop offset="85%" stopColor="#92400E" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id="friedChickenDarkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#92400E" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
        <linearGradient id="creamyMayoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#FFFBEB" />
          <stop offset="100%" stopColor="#FEF3C7" />
        </linearGradient>
        <linearGradient id="gohanRiceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F8FAFC" />
          <stop offset="80%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="hambaguMeatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#451A03" />
          <stop offset="45%" stopColor="#271106" />
          <stop offset="85%" stopColor="#1A0A03" />
          <stop offset="100%" stopColor="#0B0401" />
        </linearGradient>
        <linearGradient id="demiGlaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#572207" />
          <stop offset="40%" stopColor="#381404" />
          <stop offset="80%" stopColor="#1E0A02" />
          <stop offset="100%" stopColor="#080200" />
        </linearGradient>
        <linearGradient id="eggWhiteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#FAFAF9" />
          <stop offset="100%" stopColor="#F5F5F4" />
        </linearGradient>
        <radialGradient id="eggYolkGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="25%" stopColor="#FACC15" />
          <stop offset="65%" stopColor="#F97316" />
          <stop offset="90%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#C2410C" />
        </radialGradient>

        {/* BREAD */}
        <linearGradient id="sourdoughCrustGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="25%" stopColor="#D97706" />
          <stop offset="60%" stopColor="#B45309" />
          <stop offset="85%" stopColor="#78350F" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
        <linearGradient id="sourdoughEarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350F" />
          <stop offset="50%" stopColor="#451A03" />
          <stop offset="100%" stopColor="#1C0A02" />
        </linearGradient>
        <linearGradient id="sourdoughCrumbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="50%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>

        {/* PASTA & ITALY */}
        <radialGradient id="carbonaraEmulsionGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="45%" stopColor="#FACC15" />
          <stop offset="75%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#CA8A04" />
        </radialGradient>
        <linearGradient id="spaghettiNoodleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF9C3" />
          <stop offset="35%" stopColor="#FEF08A" />
          <stop offset="70%" stopColor="#FACC15" />
          <stop offset="100%" stopColor="#CA8A04" />
        </linearGradient>
        <linearGradient id="guancialeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="30%" stopColor="#DC2626" />
          <stop offset="70%" stopColor="#991B1B" />
          <stop offset="100%" stopColor="#450A0A" />
        </linearGradient>
        <linearGradient id="guancialeCrustGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350F" />
          <stop offset="50%" stopColor="#451A03" />
          <stop offset="100%" stopColor="#1C0A02" />
        </linearGradient>

        <linearGradient id="pizzaCrustGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="30%" stopColor="#FEF3C7" />
          <stop offset="65%" stopColor="#F59E0B" />
          <stop offset="85%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="sanMarzanoSauceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="35%" stopColor="#DC2626" />
          <stop offset="75%" stopColor="#B91C1C" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </linearGradient>
        <radialGradient id="sauceHighlightGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FCA5A5" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#EF4444" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#B91C1C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mozzarellaMeltGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FFFBEB" />
          <stop offset="75%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
        <linearGradient id="basilLeafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="40%" stopColor="#16A34A" />
          <stop offset="80%" stopColor="#15803D" />
          <stop offset="100%" stopColor="#14532D" />
        </linearGradient>

        <linearGradient id="lasagnaPastaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF9C3" />
          <stop offset="50%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="bologneseRaguGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#991B1B" />
          <stop offset="40%" stopColor="#7F1D1D" />
          <stop offset="80%" stopColor="#450A0A" />
          <stop offset="100%" stopColor="#280505" />
        </linearGradient>
        <linearGradient id="lasagnaBechamelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FFFBEB" />
          <stop offset="80%" stopColor="#B91C1C" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </linearGradient>
        <linearGradient id="lasagnaGratinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="35%" stopColor="#FBBF24" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>

        <linearGradient id="risottoCreamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="40%" stopColor="#FEF3C7" />
          <stop offset="75%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="mushroomCapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A16207" />
          <stop offset="45%" stopColor="#78350F" />
          <stop offset="85%" stopColor="#451A03" />
          <stop offset="100%" stopColor="#271106" />
        </linearGradient>

        {/* MEAT & BREAKFAST */}
        <linearGradient id="steakSearGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#451A03" />
          <stop offset="30%" stopColor="#271106" />
          <stop offset="70%" stopColor="#180A04" />
          <stop offset="100%" stopColor="#080301" />
        </linearGradient>
        <linearGradient id="steakPinkMediumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDA4AF" />
          <stop offset="45%" stopColor="#FB7185" />
          <stop offset="75%" stopColor="#E11D48" />
          <stop offset="100%" stopColor="#9F1239" />
        </linearGradient>
        <radialGradient id="meatJusPoolGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#572207" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#271106" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="butterCubeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="50%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>

        <linearGradient id="baconMeatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B91C1C" />
          <stop offset="50%" stopColor="#7F1D1D" />
          <stop offset="100%" stopColor="#450A0A" />
        </linearGradient>
        <linearGradient id="baconFatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="50%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>

        <linearGradient id="pancakeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="40%" stopColor="#FDE68A" />
          <stop offset="80%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="pancakeTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="35%" stopColor="#FDE68A" />
          <stop offset="70%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <radialGradient id="pancakeSearRingGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#92400E" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#B45309" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mapleSyrupGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="40%" stopColor="#D97706" />
          <stop offset="80%" stopColor="#92400E" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
        <radialGradient id="blueberryGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="30%" stopColor="#4F46E5" />
          <stop offset="70%" stopColor="#312E81" />
          <stop offset="100%" stopColor="#1E1B4B" />
        </radialGradient>

        {/* PUDIM */}
        <radialGradient id="caramelPoolGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.95" />
          <stop offset="40%" stopColor="#D97706" stopOpacity="0.9" />
          <stop offset="75%" stopColor="#92400E" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#451A03" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pudimCustardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="25%" stopColor="#FEF3C7" />
          <stop offset="60%" stopColor="#FDE68A" />
          <stop offset="85%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="pudimTopCaramelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="50%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id="pudimHoleShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#451A03" />
          <stop offset="100%" stopColor="#1C0A02" />
        </linearGradient>
        <linearGradient id="caramelDripGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="40%" stopColor="#D97706" />
          <stop offset="80%" stopColor="#92400E" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>

        {/* BROWNIE & COOKIE */}
        <linearGradient id="brownieFudgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3F1D0B" />
          <stop offset="40%" stopColor="#271106" />
          <stop offset="80%" stopColor="#180A04" />
          <stop offset="100%" stopColor="#080301" />
        </linearGradient>
        <linearGradient id="brownieSideGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2E1407" />
          <stop offset="100%" stopColor="#0F0501" />
        </linearGradient>
        <linearGradient id="brownieCrustGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#572207" />
          <stop offset="40%" stopColor="#381404" />
          <stop offset="70%" stopColor="#220B02" />
          <stop offset="100%" stopColor="#110501" />
        </linearGradient>
        <linearGradient id="moltenChocGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#451A03" />
          <stop offset="50%" stopColor="#271106" />
          <stop offset="100%" stopColor="#0B0401" />
        </linearGradient>

        <linearGradient id="cookieDoughGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="30%" stopColor="#FEF3C7" />
          <stop offset="65%" stopColor="#FDE68A" />
          <stop offset="85%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="cookieCenterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="50%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>

        {/* JAPAN & DRINKS */}
        <linearGradient id="ramenBowlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#27272A" />
          <stop offset="50%" stopColor="#18181B" />
          <stop offset="100%" stopColor="#09090B" />
        </linearGradient>
        <linearGradient id="ramenBrothGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#CA8A04" />
          <stop offset="35%" stopColor="#A16207" />
          <stop offset="70%" stopColor="#78350F" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
        <linearGradient id="ramenNoodleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="50%" stopColor="#FACC15" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>
        <linearGradient id="chashuMeatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350F" />
          <stop offset="45%" stopColor="#451A03" />
          <stop offset="100%" stopColor="#271106" />
        </linearGradient>
        <linearGradient id="chashuFatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
        <linearGradient id="ramenEggWhiteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="70%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <radialGradient id="ramenEggYolkGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FACC15" />
          <stop offset="35%" stopColor="#F97316" />
          <stop offset="75%" stopColor="#EA580C" />
          <stop offset="100%" stopColor="#9A3412" />
        </radialGradient>
        <linearGradient id="cornGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="50%" stopColor="#FACC15" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>

        <linearGradient id="mochiDoughGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#F8FAFC" />
          <stop offset="80%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="ankoChocolateGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#451A03" />
          <stop offset="50%" stopColor="#271106" />
          <stop offset="100%" stopColor="#150802" />
        </linearGradient>
        <radialGradient id="strawberryGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="40%" stopColor="#EF4444" />
          <stop offset="80%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </radialGradient>
        <radialGradient id="strawberryCoreGrad" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#FEE2E2" />
          <stop offset="50%" stopColor="#FCA5A5" />
          <stop offset="100%" stopColor="#EF4444" />
        </radialGradient>

        <linearGradient id="pokeBowlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="50%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
        <linearGradient id="salmonFleshGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDA4AF" />
          <stop offset="45%" stopColor="#FB7185" />
          <stop offset="75%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>
        <linearGradient id="avocadoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="45%" stopColor="#A3E635" />
          <stop offset="80%" stopColor="#65A30D" />
          <stop offset="100%" stopColor="#365314" />
        </linearGradient>
        <linearGradient id="edamameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="50%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#15803D" />
        </linearGradient>

        <linearGradient id="coffeeCupBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#FAFAF9" />
          <stop offset="100%" stopColor="#E7E5E4" />
        </linearGradient>
        <linearGradient id="espressoLiquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#451A03" />
          <stop offset="50%" stopColor="#271106" />
          <stop offset="100%" stopColor="#150802" />
        </linearGradient>
        <radialGradient id="latteCremaGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="50%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </radialGradient>

        <linearGradient id="croutonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="40%" stopColor="#FDE68A" />
          <stop offset="80%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
      </defs>

      {/* Render the specific hyper-realistic dish illustration */}
      {renderDishContent()}
    </svg>
  );
};

export default DishIllustration;
