import "./style.css";

const Square = ({ square, handleClick, index }) => {
  return (
    <button className="square" onClick={() => handleClick(index)}>
      {square}
    </button>
  );
};

export default Square;
