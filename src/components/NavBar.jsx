const NavBar = ({ index, setIndex }) => {
  const increaseIndex = () => {
    setIndex(index + 1);
  };
  const decreaseIndex = () => {
    setIndex(index - 1);
  };
  return (
    <div>
      <button onClick={decreaseIndex}>Précédent</button>
      <button onClick={increaseIndex}>Suivant</button>
    </div>
  );
};

export default NavBar;
