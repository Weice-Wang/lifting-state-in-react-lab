// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.length === 0 ? (
        <p>No ingredient</p>
      ) : (
        props.stack.map((ingredient) => (
          <li key={ingredient.name} style={{ background: ingredient.color }}>
            <Ingredient
              ingredient={ingredient}
              removeFromBurger={props.removeFromBurger}
            />
          </li>
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
