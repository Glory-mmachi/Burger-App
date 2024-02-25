
export default function Ingredients({ addIngredient, removeIngredient }) {
  return (
    <div className="flex gap-3">
      <button onClick={() => addIngredient("cheese")}>cheese</button>
      <button onClick={() => addIngredient("meat")}>meat</button>
      <button onClick={() => addIngredient("bacon")}>baee</button>
      <button onClick={() => addIngredient("salad")}>salad</button>
    </div>
  );
}
