import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <figure>
      {pokemon.imgSrc != null ? (
        <img src={pokemon.imgSrc} alt={`Image de ${pokemon.name}`} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

// PokemonCard.propTypes = {
//   pokemon: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     imgSrc: PropTypes.any,
//   }).isRequired,
// };

export default PokemonCard;
