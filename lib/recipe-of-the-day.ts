import { RECIPES } from '@/data/recipes';
import { Recipe } from '@/types/recipe';

/**
 * MANUAL OVERRIDE:
 * Set a recipe ID here to pin a specific recipe as the Recipe of the Day.
 * Leave as `null` to enable automatic dynamic daily rotation based on the calendar day.
 * Example: 'carbonara-classica' | 'burger-japones-hambagu' | 'brownie-chocolatudo'
 */
export const MANUAL_RECIPE_OF_THE_DAY_ID: string | null = null;

// Curated list of standout recipes for the daily spotlight rotation
const SPOTLIGHT_RECIPE_IDS: string[] = [
  'hamburguer-com-pao-comprado',
  'carbonara-sem-medo',
  'cuscuz-nordestino-fofinho',
  'pizza-margherita-italiana',
  'brownie-de-chocolate',
  'feijoada-de-panela',
  'hamburguer-japones-facil',
  'lamen-de-misso',
  'tiramisu-de-cafe',
  'frango-a-parmegiana',
  'pudim-de-leite',
  'curry-japones-kare-raisu',
  'bolo-de-cenoura-com-chocolate',
  'risoto-de-cogumelos',
  'ratatouille-provencal',
  'cafe-gelado-cremoso',
  'coxinha-de-frango',
];

/**
 * Returns the Recipe of the Day.
 * Priority:
 * 1. Explicit overrideId argument (if provided)
 * 2. MANUAL_RECIPE_OF_THE_DAY_ID constant (if defined)
 * 3. Deterministic daily index based on current year and day of year.
 */
export function getRecipeOfTheDay(
  customDate?: Date,
  overrideId?: string | null
): { recipe: Recipe; dateString: string } {
  const now = customDate || new Date();

  // Format date in Portuguese (e.g., "Quarta-feira, 23 de Setembro")
  const dateString = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(now);

  // Capitalize first letter
  const formattedDate = dateString.charAt(0).toUpperCase() + dateString.slice(1);

  // 1. Check for passed override ID
  if (overrideId) {
    const found = RECIPES.find((r) => r.id === overrideId);
    if (found) {
      return { recipe: found, dateString: formattedDate };
    }
  }

  // 2. Check for manual constant override
  if (MANUAL_RECIPE_OF_THE_DAY_ID) {
    const found = RECIPES.find((r) => r.id === MANUAL_RECIPE_OF_THE_DAY_ID);
    if (found) {
      return { recipe: found, dateString: formattedDate };
    }
  }

  // 3. Calculate day-of-year index
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const diffTime = now.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Determine list of candidates (spotlight pool first, falling back to all recipes)
  const candidateRecipes = SPOTLIGHT_RECIPE_IDS
    .map((id) => RECIPES.find((r) => r.id === id))
    .filter((r): r is Recipe => Boolean(r));

  const pool = candidateRecipes.length > 0 ? candidateRecipes : RECIPES;
  const index = Math.abs(dayOfYear + now.getFullYear()) % pool.length;

  return {
    recipe: pool[index],
    dateString: formattedDate,
  };
}

export function getAllSpotlightRecipes(): Recipe[] {
  return SPOTLIGHT_RECIPE_IDS
    .map((id) => RECIPES.find((r) => r.id === id))
    .filter((r): r is Recipe => Boolean(r));
}
