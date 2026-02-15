// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
  return (
    <ul>
      {props.availableIngredients.map((ingredient) => (
        <li key={ingredient.name} style={{ background: ingredient.color }}>
          <p>{ingredient.name}</p>
          <button onClick={() => props.addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
