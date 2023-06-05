const NavBar = ({ index, setIndex, pokemonList }) => {
  const increaseIndex = () => {
    setIndex(index + 1);
  };
  const decreaseIndex = () => {
    setIndex(index - 1);
  };
  return (
    <nav>
      <button onClick={decreaseIndex}>Précédent</button>
      <button onClick={increaseIndex}>Suivant</button>
    </nav>
  );
};

export default NavBar;
