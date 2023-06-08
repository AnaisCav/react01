import styled from "styled-components";

const Button = styled.button`
  border-radius: 10px;
  border: 1px solid black;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: verdana;
  background-color: #d6cfcf;
  cursor: pointer;
  transition: border-color 0.25s;
  margin: 8px;
  width: 10rem;
`;

const Nav = styled.nav`
  display: fley;
  justify-content: space-between;
`;

const NavBar = ({ setPokemonIndex, pokemonList }) => {
  //prettier-ignore
  return (
    <Nav>
      {pokemonList.map((pokemons, index) => (
        <Button onClick={() => setPokemonIndex(index)} key={index}>
          {pokemons.name}
        </Button>
      ))}
    </Nav>
  );
};

export default NavBar;
