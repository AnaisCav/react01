const NavBar = ({ index, setIndex, pokemonList }) => {
  const increaseIndex = () => {
    setIndex(index + 1);
  };
  const decreaseIndex = () => {
    setIndex(index - 1);
  };
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
