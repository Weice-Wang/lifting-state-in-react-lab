// src/components/IngredientList/IngredientList.jsx
import Ingredient from "../Ingredient/Ingredient";

const IngredientList = (props) => {
  return (
    <ul>
      {props.availableIngredients.map((ingredient) => (
        <li key={ingredient.name} style={{ background: ingredient.color }}>
          <Ingredient ingredient={ingredient} addToBurger={props.addToBurger} />
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
