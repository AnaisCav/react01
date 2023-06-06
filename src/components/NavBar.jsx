import { useEffect } from "react";

const NavBar = ({ index, setIndex, pokemonList }) => {
  useEffect(() => {
    alert("Hello Pokemon Trainer 😃 !");
  }, []);

  const increaseIndex = () => {
    setIndex(index + 1);
  };
  const decreaseIndex = () => {
    setIndex(index - 1);
  };

  if (index == 3) {
    alert("Pika, Pika !!");
  }

  return (
    <nav>
      {index > 0 && <button onClick={decreaseIndex}>Précédent</button>}
      {index < pokemonList.length - 1 && (
        <button onClick={increaseIndex}>Suivant</button>
      )}
    </nav>
  );
};

export default NavBar;
