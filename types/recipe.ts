export type DishCategory =
  | 'burgers'
  | 'pastas'
  | 'breakfast_cafe'
  | 'lunch_meats'
  | 'desserts'
  | 'brasil'
  | 'italy'
  | 'france'
  | 'japan'
  | 'salads'
  | 'breads'
  | 'drinks';

export type DishType = 'salgado' | 'doce' | 'bebida' | 'pao';

export type Difficulty = 'Fácil' | 'Médio' | 'Elaborado';

export interface Ingredient {
  item: string;
  amount: number | null;
  unit: string;
  note?: string;
  tag?: string; // e.g. 'carne', 'queijo', 'chocolate', 'frango', 'pao', 'ovo', 'cafe', etc.
}

export interface Step {
  order: number;
  title?: string;
  instruction: string;
  tip?: string;
  timerSeconds?: number;
}

export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  category: DishCategory;
  type: DishType;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  totalTime: number; // in minutes
  difficulty: Difficulty;
  servings: number;
  caloriesApprox?: number;
  beagleTip: string;
  ingredients: Ingredient[];
  steps: Step[];
  tags: string[];
  illustrationId: string;
  featured?: boolean;
}
