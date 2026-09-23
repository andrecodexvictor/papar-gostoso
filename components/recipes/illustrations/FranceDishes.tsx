import React from 'react';

/**
 * Hyper-realistic French culinary illustrations
 * Following the design guidelines:
 * - viewBox="0 0 800 800"
 * - feTurbulence & feDisplacementMap for organic textures
 * - Specular highlights (opacity 0.6 - 1.0) for succulence and sheen
 * - Multi-stop gradients (4 to 5 stops)
 * - Fluid, organic forms
 */

export const FranceRatatouilleIllustration: React.FC = () => (
  <g id="dish-ratatouille" filter="url(#dropShadowFilter)">
    {/* Ceramic round gratin / baking dish */}
    <ellipse cx="400" cy="450" rx="360" ry="260" fill="#2C3539" stroke="#1A2421" strokeWidth="6" />
    <ellipse cx="400" cy="445" rx="340" ry="245" fill="#3D2B1F" />
    <ellipse cx="400" cy="445" rx="335" ry="240" fill="url(#ratatouilleSauceGrad)" />

    {/* Concentric spiral of alternating thin vegetables: Eggplant (purple), Zucchini (green), Yellow Squash (yellow/gold), Roma Tomato (rich red) */}
    {/* Outer ring */}
    <g filter="url(#sauceShine)">
      {/* Tomato slices */}
      <ellipse cx="200" cy="380" rx="42" ry="55" transform="rotate(-35 200 380)" fill="url(#ratatouilleTomatoGrad)" />
      <ellipse cx="260" cy="310" rx="42" ry="55" transform="rotate(-15 260 310)" fill="url(#ratatouilleZucchiniGrad)" />
      <ellipse cx="340" cy="270" rx="42" ry="55" transform="rotate(5 340 270)" fill="url(#ratatouilleSquashGrad)" />
      <ellipse cx="430" cy="265" rx="42" ry="55" transform="rotate(25 430 265)" fill="url(#ratatouilleEggplantGrad)" />
      <ellipse cx="515" cy="290" rx="42" ry="55" transform="rotate(45 515 290)" fill="url(#ratatouilleTomatoGrad)" />
      <ellipse cx="585" cy="350" rx="42" ry="55" transform="rotate(65 585 350)" fill="url(#ratatouilleZucchiniGrad)" />
      <ellipse cx="615" cy="430" rx="42" ry="55" transform="rotate(85 615 430)" fill="url(#ratatouilleSquashGrad)" />
      <ellipse cx="590" cy="510" rx="42" ry="55" transform="rotate(110 590 510)" fill="url(#ratatouilleEggplantGrad)" />
      <ellipse cx="520" cy="575" rx="42" ry="55" transform="rotate(140 520 575)" fill="url(#ratatouilleTomatoGrad)" />
      <ellipse cx="425" cy="605" rx="42" ry="55" transform="rotate(170 425 605)" fill="url(#ratatouilleZucchiniGrad)" />
      <ellipse cx="330" cy="590" rx="42" ry="55" transform="rotate(195 330 590)" fill="url(#ratatouilleSquashGrad)" />
      <ellipse cx="240" cy="535" rx="42" ry="55" transform="rotate(225 240 535)" fill="url(#ratatouilleEggplantGrad)" />
      <ellipse cx="185" cy="455" rx="42" ry="55" transform="rotate(250 185 455)" fill="url(#ratatouilleTomatoGrad)" />
    </g>

    {/* Middle Spiral Ring */}
    <g>
      <ellipse cx="270" cy="400" rx="36" ry="46" transform="rotate(-30 270 400)" fill="url(#ratatouilleZucchiniGrad)" />
      <ellipse cx="320" cy="350" rx="36" ry="46" transform="rotate(-5 320 350)" fill="url(#ratatouilleEggplantGrad)" />
      <ellipse cx="385" cy="335" rx="36" ry="46" transform="rotate(15 385 335)" fill="url(#ratatouilleSquashGrad)" />
      <ellipse cx="450" cy="350" rx="36" ry="46" transform="rotate(40 450 350)" fill="url(#ratatouilleTomatoGrad)" />
      <ellipse cx="505" cy="395" rx="36" ry="46" transform="rotate(70 505 395)" fill="url(#ratatouilleZucchiniGrad)" />
      <ellipse cx="515" cy="460" rx="36" ry="46" transform="rotate(95 515 460)" fill="url(#ratatouilleEggplantGrad)" />
      <ellipse cx="480" cy="515" rx="36" ry="46" transform="rotate(130 480 515)" fill="url(#ratatouilleSquashGrad)" />
      <ellipse cx="410" cy="540" rx="36" ry="46" transform="rotate(165 410 540)" fill="url(#ratatouilleTomatoGrad)" />
      <ellipse cx="340" cy="520" rx="36" ry="46" transform="rotate(195 340 520)" fill="url(#ratatouilleZucchiniGrad)" />
      <ellipse cx="280" cy="465" rx="36" ry="46" transform="rotate(230 280 465)" fill="url(#ratatouilleEggplantGrad)" />
    </g>

    {/* Center Rosette of vegetables */}
    <g>
      <ellipse cx="355" cy="425" rx="28" ry="36" transform="rotate(-20 355 425)" fill="url(#ratatouilleSquashGrad)" />
      <ellipse cx="400" cy="405" rx="28" ry="36" transform="rotate(15 400 405)" fill="url(#ratatouilleTomatoGrad)" />
      <ellipse cx="445" cy="425" rx="28" ry="36" transform="rotate(50 445 425)" fill="url(#ratatouilleZucchiniGrad)" />
      <ellipse cx="435" cy="470" rx="28" ry="36" transform="rotate(110 435 470)" fill="url(#ratatouilleEggplantGrad)" />
      <ellipse cx="385" cy="480" rx="28" ry="36" transform="rotate(160 385 480)" fill="url(#ratatouilleSquashGrad)" />
      {/* Center rolled tomato rose petal */}
      <circle cx="400" cy="445" r="22" fill="url(#ratatouilleTomatoGrad)" />
      <path d="M390 440 C395 430 410 432 412 442 C414 452 398 456 390 440 Z" fill="#991B1B" />
    </g>

    {/* Glistening Herb Oil & Fresh Thyme Leaves */}
    <g stroke="#15803D" strokeWidth="2.5" fill="none">
      <path d="M320 370 Q350 360 380 375 T420 365" />
      <path d="M410 500 Q440 510 470 495 T500 510" />
      <path d="M260 480 Q290 490 310 470" />
    </g>
    {/* Thyme tiny leaves */}
    <g fill="#166534">
      <ellipse cx="340" cy="363" rx="5" ry="3" transform="rotate(25 340 363)" />
      <ellipse cx="365" cy="368" rx="5" ry="3" transform="rotate(-15 365 368)" />
      <ellipse cx="430" cy="505" rx="5" ry="3" transform="rotate(30 430 505)" />
      <ellipse cx="455" cy="502" rx="5" ry="3" transform="rotate(-30 455 502)" />
    </g>

    {/* Olive oil glossy specular highlights */}
    <g fill="#FFFFFF" opacity="0.75">
      <circle cx="270" cy="305" r="4" />
      <ellipse cx="350" cy="265" rx="6" ry="3" transform="rotate(10 350 265)" />
      <circle cx="525" cy="285" r="3.5" />
      <ellipse cx="590" cy="345" rx="7" ry="3" transform="rotate(40 590 345)" />
      <circle cx="440" cy="345" r="4" />
      <circle cx="400" cy="435" r="3" />
      <ellipse cx="330" cy="515" rx="5" ry="2" transform="rotate(-20 330 515)" />
    </g>
  </g>
);

export const FranceQuicheIllustration: React.FC = () => (
  <g id="dish-quiche-lorraine" filter="url(#dropShadowFilter)">
    {/* Ceramic quiche dish */}
    <ellipse cx="400" cy="455" rx="355" ry="255" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="4" />
    <ellipse cx="400" cy="450" rx="340" ry="240" fill="#B45309" />

    {/* Fluted golden pastry crust edge */}
    <path
      d="M100 440 C110 390 140 330 190 280 C250 230 320 200 400 200 C480 200 550 230 610 280 C660 330 690 390 700 440 C690 510 650 580 590 630 C530 680 470 700 400 700 C330 700 270 680 210 630 C150 580 110 510 100 440 Z"
      fill="url(#sourdoughCrustGrad)"
    />

    {/* Fluted crinkle indentations on crust */}
    <path
      d="M120 420 L135 435 L150 400 L170 415 L190 375 L215 390 L240 350 L270 365 L300 330 L335 345 L370 320 L400 335 L435 320 L470 345 L505 330 L535 365 L565 350 L590 390 L615 375 L635 415 L655 400 L670 435 L680 420"
      stroke="#78350F"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
      opacity="0.6"
    />

    {/* Creamy golden baked egg & gruyere filling with subtle dome */}
    <ellipse cx="400" cy="450" rx="275" ry="195" fill="url(#quicheFillingGrad)" />

    {/* Savory browned spots & melted gruyere patches */}
    <ellipse cx="320" cy="410" rx="45" ry="30" fill="url(#quicheBrownedSpotGrad)" />
    <ellipse cx="480" cy="430" rx="55" ry="35" fill="url(#quicheBrownedSpotGrad)" />
    <ellipse cx="380" cy="510" rx="60" ry="38" fill="url(#quicheBrownedSpotGrad)" />
    <ellipse cx="430" cy="380" rx="35" ry="24" fill="url(#quicheBrownedSpotGrad)" />

    {/* Crisped browned bacon lardons scattered throughout */}
    <g filter="url(#sauceShine)">
      {/* Bacon lardons (striated savory cubes) */}
      <rect x="260" y="440" width="38" height="18" rx="5" transform="rotate(15 260 440)" fill="url(#baconLardonGrad)" />
      <rect x="350" y="380" width="42" height="16" rx="5" transform="rotate(-25 350 380)" fill="url(#baconLardonGrad)" />
      <rect x="460" y="390" width="40" height="18" rx="5" transform="rotate(35 460 390)" fill="url(#baconLardonGrad)" />
      <rect x="420" y="470" width="45" height="18" rx="5" transform="rotate(-10 420 470)" fill="url(#baconLardonGrad)" />
      <rect x="310" y="490" width="36" height="17" rx="5" transform="rotate(45 310 490)" fill="url(#baconLardonGrad)" />
      <rect x="520" y="460" width="38" height="16" rx="5" transform="rotate(-30 520 460)" fill="url(#baconLardonGrad)" />
      <rect x="350" y="550" width="42" height="18" rx="5" transform="rotate(8 350 550)" fill="url(#baconLardonGrad)" />
      <rect x="460" y="530" width="36" height="16" rx="5" transform="rotate(-40 460 530)" fill="url(#baconLardonGrad)" />
    </g>

    {/* Fresh chopped chives & cracked black pepper */}
    <g fill="#15803D">
      <rect x="290" y="410" width="8" height="4" rx="1.5" transform="rotate(20 290 410)" />
      <rect x="380" y="430" width="8" height="4" rx="1.5" transform="rotate(-40 380 430)" />
      <rect x="450" y="440" width="8" height="4" rx="1.5" transform="rotate(10 450 440)" />
      <rect x="330" y="460" width="8" height="4" rx="1.5" transform="rotate(65 330 460)" />
      <rect x="410" y="520" width="8" height="4" rx="1.5" transform="rotate(-15 410 520)" />
      <rect x="490" y="490" width="8" height="4" rx="1.5" transform="rotate(30 490 490)" />
    </g>
    <g fill="#1F2937">
      <circle cx="340" cy="425" r="1.5" />
      <circle cx="415" cy="405" r="1.5" />
      <circle cx="475" cy="465" r="1.5" />
      <circle cx="365" cy="515" r="1.5" />
      <circle cx="440" cy="495" r="1.5" />
    </g>

    {/* Melty cheese succulent highlights */}
    <g fill="#FFFFFF" opacity="0.6">
      <ellipse cx="370" cy="390" rx="12" ry="4" transform="rotate(-10 370 390)" />
      <ellipse cx="440" cy="480" rx="14" ry="5" transform="rotate(5 440 480)" />
      <circle cx="325" cy="445" r="3.5" />
      <circle cx="470" cy="400" r="3" />
    </g>
  </g>
);

export const FranceCroissantIllustration: React.FC = () => (
  <g id="dish-croissant" filter="url(#dropShadowFilter)">
    {/* Elegant bistro porcelain plate with French gold rim */}
    <ellipse cx="400" cy="460" rx="360" ry="250" fill="#FAF7F2" stroke="#E6DFD5" strokeWidth="4" />
    <ellipse cx="400" cy="455" rx="335" ry="230" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="6 3" opacity="0.6" />
    <ellipse cx="400" cy="450" rx="310" ry="210" fill="#FFFFFF" />

    {/* Delicate bread crumbs on the plate */}
    <g fill="#D97706" opacity="0.8">
      <ellipse cx="230" cy="520" rx="4" ry="2" />
      <circle cx="215" cy="535" r="2" />
      <ellipse cx="560" cy="530" rx="5" ry="3" />
      <circle cx="585" cy="545" r="2.5" />
      <ellipse cx="380" cy="590" rx="4" ry="2" />
    </g>

    {/* Beautiful Golden Laminated Curved Croissant */}
    <g filter="url(#sauceShine)">
      {/* Base / Body of Crescent */}
      <path
        d="M170 480 C180 390 280 320 400 320 C520 320 620 390 630 480 C580 500 500 485 400 485 C300 485 220 500 170 480 Z"
        fill="url(#croissantDeepGrad)"
      />

      {/* Main Center Curved Roll (Laminated layers) */}
      <ellipse cx="400" cy="420" rx="140" ry="110" fill="url(#croissantGoldenGrad)" />
      <path
        d="M270 430 C300 350 500 350 530 430 C490 480 310 480 270 430 Z"
        fill="url(#croissantLayerGrad)"
      />

      {/* Characteristic laminated folds / spiraled overlapping layers */}
      <path
        d="M310 390 C340 330 460 330 490 390 C450 440 350 440 310 390 Z"
        fill="url(#croissantGoldenGrad)"
      />
      <path
        d="M345 370 C370 325 430 325 455 370 C430 410 370 410 345 370 Z"
        fill="url(#croissantTopGrad)"
      />

      {/* Crescent Left Horn / Tip (tapered and crisp) */}
      <path
        d="M170 480 C140 505 155 540 190 535 C230 530 265 485 285 450 C235 445 190 455 170 480 Z"
        fill="url(#croissantGoldenGrad)"
      />
      {/* Left horn inner curl */}
      <path d="M165 500 C155 520 180 530 200 515" stroke="#92400E" strokeWidth="4" fill="none" />

      {/* Crescent Right Horn / Tip */}
      <path
        d="M630 480 C660 505 645 540 610 535 C570 530 535 485 515 450 C565 445 610 455 630 480 Z"
        fill="url(#croissantGoldenGrad)"
      />
      {/* Right horn inner curl */}
      <path d="M635 500 C645 520 620 530 600 515" stroke="#92400E" strokeWidth="4" fill="none" />

      {/* Layer Lines (laminated puff pastry cracks & ridges) */}
      <path d="M300 410 Q400 370 500 410" stroke="#78350F" strokeWidth="3" fill="none" opacity="0.75" />
      <path d="M330 380 Q400 350 470 380" stroke="#78350F" strokeWidth="3.5" fill="none" opacity="0.8" />
      <path d="M365 355 Q400 335 435 355" stroke="#78350F" strokeWidth="3" fill="none" opacity="0.8" />
      <path d="M250 460 Q280 440 310 455" stroke="#78350F" strokeWidth="2.5" fill="none" opacity="0.7" />
      <path d="M490 455 Q520 440 550 460" stroke="#78350F" strokeWidth="2.5" fill="none" opacity="0.7" />
    </g>

    {/* Buttery egg-wash glazed specular shine */}
    <g fill="#FFFFFF" opacity="0.85">
      <ellipse cx="400" cy="345" rx="30" ry="7" />
      <ellipse cx="370" cy="365" rx="20" ry="5" transform="rotate(-15 370 365)" />
      <ellipse cx="430" cy="365" rx="20" ry="5" transform="rotate(15 430 365)" />
      <circle cx="340" cy="390" r="3.5" />
      <circle cx="460" cy="390" r="3.5" />
      <ellipse cx="205" cy="505" rx="12" ry="4" transform="rotate(20 205 505)" />
      <ellipse cx="595" cy="505" rx="12" ry="4" transform="rotate(-20 595 505)" />
    </g>
  </g>
);

export const FranceOnionSoupIllustration: React.FC = () => (
  <g id="dish-french-onion-soup" filter="url(#dropShadowFilter)">
    {/* Ceramic two-handled French soup crock (soupière à tête de lion) */}
    {/* Lion ears / handles */}
    <circle cx="160" cy="430" r="28" fill="#D97706" stroke="#92400E" strokeWidth="4" />
    <circle cx="160" cy="430" r="14" fill="#FAF7F2" />
    <circle cx="640" cy="430" r="28" fill="#D97706" stroke="#92400E" strokeWidth="4" />
    <circle cx="640" cy="430" r="14" fill="#FAF7F2" />

    {/* Bowl body */}
    <ellipse cx="400" cy="470" rx="260" ry="200" fill="url(#crockBowlGrad)" />
    <ellipse cx="400" cy="390" rx="240" ry="130" fill="#582900" />

    {/* Rich deep caramelized onion broth underneath */}
    <ellipse cx="400" cy="395" rx="230" ry="120" fill="url(#onionBrothGrad)" />

    {/* Floating toasted baguette slice */}
    <ellipse cx="400" cy="390" rx="160" ry="85" fill="url(#sourdoughCrustGrad)" />

    {/* Thick bubbly broiled Gruyère cheese blanket melting over the rim */}
    <path
      d="M200 370 C240 330 320 310 400 310 C480 310 560 330 600 370 C620 400 610 440 570 460 C510 480 430 485 370 480 C300 475 230 460 200 430 C185 410 185 385 200 370 Z"
      fill="url(#quicheFillingGrad)"
    />

    {/* Melty cheese drips cascading down the sides of the bowl */}
    <path d="M230 410 C220 450 225 480 235 495 C240 480 245 440 250 415 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />
    <path d="M570 410 C580 455 575 490 565 505 C560 485 555 440 550 415 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />
    <path d="M380 480 C385 515 390 535 395 540 C400 530 405 505 410 480 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />

    {/* Broiled caramelization blisters & dark toasted spots */}
    <ellipse cx="330" cy="370" rx="35" ry="20" fill="url(#quicheBrownedSpotGrad)" />
    <ellipse cx="460" cy="380" rx="45" ry="24" fill="url(#quicheBrownedSpotGrad)" />
    <ellipse cx="400" cy="430" rx="40" ry="18" fill="url(#quicheBrownedSpotGrad)" />
    <ellipse cx="270" cy="400" rx="25" ry="14" fill="url(#quicheBrownedSpotGrad)" />
    <ellipse cx="520" cy="410" rx="28" ry="15" fill="url(#quicheBrownedSpotGrad)" />

    {/* Fresh thyme sprig on melted cheese top */}
    <path d="M370 385 Q400 375 440 395" stroke="#15803D" strokeWidth="3" fill="none" />
    <ellipse cx="385" cy="380" rx="6" ry="3" fill="#166534" transform="rotate(-20 385 380)" />
    <ellipse cx="410" cy="383" rx="6" ry="3" fill="#166534" transform="rotate(30 410 383)" />
    <ellipse cx="430" cy="392" rx="6" ry="3" fill="#166534" transform="rotate(-10 430 392)" />

    {/* Hot melted cheese specular highlights */}
    <g fill="#FFFFFF" opacity="0.8">
      <ellipse cx="370" cy="355" rx="16" ry="5" />
      <circle cx="430" cy="365" r="4" />
      <ellipse cx="475" cy="415" rx="12" ry="4" />
      <circle cx="310" cy="385" r="3" />
    </g>
  </g>
);
