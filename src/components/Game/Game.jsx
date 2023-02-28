import { useState } from "react";
import Board from "src/components/Board/Board";
import { calculateWinner } from "src/helper";
import "./style.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [firstMove, setFirstMove] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) {
      return;
    }

    boardCopy[index] = firstMove ? "X" : "O";
    setBoard(boardCopy);
    setFirstMove(!firstMove);
  };

  const startNewGame = () => {
    return (
      <button
        className="container__start-button"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Начать заново
      </button>
    );
  };

  return (
    <div className="container">
      <p className="container__text">
        {winner
          ? `Победил ${winner}`
          : `Сейчас ходит ${firstMove ? "Игрок X" : "Игрок O"}`}
      </p>
      <Board board={board} handleClick={handleClick} />
      {startNewGame()}
    </div>
  );
};

export default Game;
