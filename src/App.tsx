import React, { useState } from "react";
import IngredientInput from "./components/IngredientInput";
import RecipeList from "./components/RecipeList";
import { findRecipes } from "./api";
import { Recipe } from "./types";

export default function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(ingredients: string[]) {
    setLoading(true);
    const results = await findRecipes(ingredients);
    setRecipes(results);
    setLoading(false);
  }

  return (
    <div className="app">
      <header>
        <h1>Smart Recipe Finder</h1>
        <p className="subtitle">
          Find recipes based on the ingredients you already have.
        </p>
      </header>

      <IngredientInput onSearch={handleSearch} />

      {loading ? (
        <p className="muted">Searching recipes...</p>
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
}
