import Square from "src/components/Square/Square";
import "./style.css";

const Board = ({ board, handleClick }) => {
  return (
    <div className="wrapper">
      {board.map((square, index) => {
        return (
          <Square
            key={index}
            index={index}
            square={square}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default Board;
