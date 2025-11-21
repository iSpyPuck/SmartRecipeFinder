import type { Recipe } from "./types";

export async function findRecipes(ingredients: string[]): Promise<Recipe[]> {
  const apiKey = import.meta.env.VITE_RECIPE_API_KEY;
  const query = ingredients.join(",");

  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&number=12&apiKey=${apiKey}`;

  const response = await fetch(url);
  if (!response.ok) return [];

  return response.json();
}
