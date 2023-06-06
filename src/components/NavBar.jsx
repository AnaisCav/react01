const NavBar = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {
  const changeIndex = () => {
    setPokemonIndex(pokemonIndex);
  };

  //prettier-ignore
  return (
    <nav>
      {pokemonList.map((pokemons, index) => (
        <button onClick={changeIndex} key={index}>
          {pokemons.name}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
