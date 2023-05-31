const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {
  const pokemon = pokemonList[0];

  for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].imgSrc != undefined) {
      if (pokemon === pokemonList[0]) {
        return (
          <>
            <figure>
              <img src={pokemonList[i].imgSrc} alt={pokemonList[i].name}></img>
              <figcaption>{pokemonList[i].name}</figcaption>
            </figure>
          </>
        );
      }
    } else {
      return (
        <>
          <figure>
            <p>???</p>
            <figcaption>{pokemonList[i].name}</figcaption>
          </figure>
        </>
      );
    }
  }
}

export default PokemonCard;
