import PropTypes from "prop-types";
import styled from "styled-components";

const Image = styled.img`
  width: 500px
  transition: width 1s ease-in;
`;

const Text = styled.p`
  text-align: center;
  text-shadow: none;
  font-size: 3rem;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  font-size: 2rem;
  text-shadow: 2px 2px 5px grey;
`;

function PokemonCard({ pokemon }) {
  return (
    <Figure>
      {pokemon.imgSrc != null ? (
        <Image src={pokemon.imgSrc} alt={`Image de ${pokemon.name}`} />
      ) : (
        <Text>???</Text>
      )}
      <figaption>{pokemon.name}</figaption>
    </Figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.any,
  }).isRequired,
};

export default PokemonCard;
