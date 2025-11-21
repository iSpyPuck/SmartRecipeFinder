import React, { useState } from "react";

interface Props {
  onSearch: (ingredients: string[]) => void;
}

export default function IngredientInput({ onSearch }: Props) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const list = text
      .split(",")
      .map(i => i.trim())
      .filter(i => i.length > 0);

    onSearch(list);
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Enter Ingredients</h2>
      <input
        type="text"
        placeholder="tomato, chicken, rice..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit" className="primary-btn">Find Recipes</button>
    </form>
  );
}
