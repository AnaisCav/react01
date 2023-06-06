const NavBar = ({ setPokemonIndex, pokemonList }) => {
  //prettier-ignore
  return (
    <nav>
      {pokemonList.map((pokemons, index) => (
        <button onClick={() => setPokemonIndex(index)} key={index}>
          {pokemons.name}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
