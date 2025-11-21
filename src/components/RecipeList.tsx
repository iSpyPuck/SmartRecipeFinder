import React from "react";
import { Recipe } from "../types";

interface Props {
  recipes: Recipe[];
}

export default function RecipeList({ recipes }: Props) {
  return (
    <div className="card">
      <h2>Recipe Results</h2>

      {recipes.length === 0 && (
        <p className="muted">No recipes yet. Try searching above.</p>
      )}

      <div className="recipe-grid">
        {recipes.map(r => (
          <div key={r.id} className="recipe-card">
            <img src={r.image} alt={r.title} />
            <h3>{r.title}</h3>

            <p className="muted small">
              Used: {r.usedIngredients.length}  
              &nbsp;•&nbsp; Missing: {r.missedIngredients.length}
            </p>

            <p className="likes">❤️ {r.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
