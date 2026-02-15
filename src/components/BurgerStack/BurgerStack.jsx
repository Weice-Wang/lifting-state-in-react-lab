// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.map((stack) => (
        <li key={stack.name} style={{ background: stack.color }}>
          <p>{stack.name}</p>
          <button onClick={() => props.removeFromBurger(stack)}>-</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
