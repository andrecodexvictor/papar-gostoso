import { Recipe } from '@/types/recipe';
import { BURGER_RECIPES } from './recipes/burgers';
import { PASTA_RECIPES } from './recipes/pastas';
import { ITALY_RECIPES } from './recipes/italy';
import { BRASIL_RECIPES } from './recipes/brasil';
import { BREAKFAST_RECIPES } from './recipes/breakfast';
import { LUNCH_MEATS_RECIPES } from './recipes/lunch-meats';
import { DESSERT_RECIPES } from './recipes/desserts';
import { JAPAN_RECIPES } from './recipes/japan';
import { FRANCE_RECIPES } from './recipes/france';
import { SALAD_RECIPES } from './recipes/salads';
import { DRINK_RECIPES } from './recipes/drinks';

export const RECIPES: Recipe[] = [
  ...BURGER_RECIPES,
  ...PASTA_RECIPES,
  ...BRASIL_RECIPES,
  ...ITALY_RECIPES,
  ...BREAKFAST_RECIPES,
  ...LUNCH_MEATS_RECIPES,
  ...DESSERT_RECIPES,
  ...JAPAN_RECIPES,
  ...FRANCE_RECIPES,
  ...SALAD_RECIPES,
  ...DRINK_RECIPES,
];

export interface CategoryInfo {
  id: string;
  shortName: string;
  name: string;
  subtitle: string;
  icon: string;
}

export const CATEGORIES_CONFIG: CategoryInfo[] = [
  { id: 'all', shortName: 'Tudo', name: 'Todas as Receitas', subtitle: 'Catálogo completo', icon: 'Sparkles' },
  { id: 'burgers', shortName: 'Burgers', name: 'Hambúrgueres & Pães', subtitle: 'Pão de mercado, smash e artesanais', icon: 'Sandwich' },
  { id: 'pastas', shortName: 'Pasta', name: 'Massas & Lasanhas', subtitle: 'Molho branco, carbonara e forno', icon: 'Utensils' },
  { id: 'brasil', shortName: 'Da terra', name: 'Seção Brasil', subtitle: 'Feijoada, moqueca, cuscuz e afeto', icon: 'Heart' },
  { id: 'italy', shortName: 'Itália', name: 'Seção Itália Clássica', subtitle: 'Pizzas, risotos e tiramisù autêntico', icon: 'Pizza' },
  { id: 'breakfast_cafe', shortName: 'Manhã', name: 'Café da Manhã', subtitle: 'Ovos cremosos, toasts e panquecas', icon: 'Coffee' },
  { id: 'desserts', shortName: 'Doces', name: 'Forno & Doces', subtitle: 'Brownies, bolos fofos e mousses', icon: 'Cake' },
  { id: 'lunch_meats', shortName: 'Almoço', name: 'Almoço & Churrasco', subtitle: 'Bife acebolado, parmegiana e peixes', icon: 'Flame' },
  { id: 'japan', shortName: 'Japão', name: 'Culinária Japonesa', subtitle: 'Lámen, curry, poke e mochis', icon: 'Soup' },
  { id: 'france', shortName: 'França', name: 'França & Bistrô', subtitle: 'Ratatouille, quiche e croissants', icon: 'Croissant' },
  { id: 'salads', shortName: 'Frescas', name: 'Saladas & Leves', subtitle: 'Caesar, grão-de-bico e batata', icon: 'Salad' },
  { id: 'drinks', shortName: 'Bebidas', name: 'Cafés & Bebidas', subtitle: 'Café coado, affogato e gelados', icon: 'Coffee' },
];

export const MAIN_INGREDIENT_FILTERS = [
  { label: 'Carne', tag: 'carne' },
  { label: 'Frango', tag: 'frango' },
  { label: 'Queijo', tag: 'queijo' },
  { label: 'Chocolate', tag: 'chocolate' },
  { label: 'Café', tag: 'cafe' },
  { label: 'Ovos', tag: 'ovo' },
  { label: 'Pão', tag: 'pao' },
  { label: 'Arroz', tag: 'arroz' },
  { label: 'Massa', tag: 'massa' },
  { label: 'Doces', tag: 'doce' },
];
