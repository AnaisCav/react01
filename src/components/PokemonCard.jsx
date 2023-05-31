function PokemonCard({ name, imgSrc }) {
  return (
    <figure>
      {imgSrc != null ? (
        <img src={imgSrc} alt={`Image de ${name}`} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{name}</figcaption>
    </figure>
  );
}

// function PokemonCard({name, imgSrc}) {

//   const pokemon = pokemonList[0];
//   return (
//     <figure>
//       {pokemon.imgSrc != null ? (
//         <img src={pokemon.imgSrc} alt={pokemon.name} />
//       ) : (
//         <p>???</p>
//       )}
//       <figcaption>{pokemon.name}</figcaption>
//     </figure>
//   );
// }

// function PokemonCard() {
//   const pokemon = pokemonList[0];

//   for (let i = 0; i < pokemonList.length; i++) {
//     if (pokemonList[i].imgSrc != undefined) {
//       if (pokemon === pokemonList[0]) {
//         return (
//           <>
//             <figure>
//               <img src={pokemonList[i].imgSrc} alt={pokemonList[i].name}></img>
//               <figcaption>{pokemonList[i].name}</figcaption>
//             </figure>
//           </>
//         );
//       }
//     } else {
//       return (
//         <>
//           <figure>
//             <p>???</p>
//             <figcaption>{pokemonList[i].name}</figcaption>
//           </figure>
//         </>
//       );
//     }
//   }
// }

export default PokemonCard;
