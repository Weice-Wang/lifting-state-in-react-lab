import { useState } from "react";

const Ingredient = ({ ingredient, addToBurger, removeFromBurger }) => {
  return (
    <>
      <p>{ingredient.name}</p>
      {addToBurger ? (
        <button onClick={() => addToBurger(ingredient)}>+</button>
      ) : removeFromBurger ? (
        <button onClick={() => removeFromBurger(ingredient)}>-</button>
      ) : null}
    </>
  );
};

export default Ingredient;
