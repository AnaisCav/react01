import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
  },
];

const App = () => {
  const [index, setIndex] = useState(0);
  const increaseIndex = () => {
    setIndex(index + 1);
  };
  const decreaseIndex = () => {
    setIndex(index - 1);
  };

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[index]} />
        <button onClick={decreaseIndex}>Précédent</button>
        <button onClick={increaseIndex}>Suivant</button>
      </div>
    </>
  );
};

//prettier-ignore
//   return (
//     <>
//       <div>
//         <PokemonCard pokemon={pokemon[index]} />
//         <button onClick={ () => {setIndex(index-1) }}>Précédent</button>
//         <button onClick={ () => {setIndex(index+1)}}>Suivant</button>
//       </div>
//     </>
//   );
// };

export default App;
