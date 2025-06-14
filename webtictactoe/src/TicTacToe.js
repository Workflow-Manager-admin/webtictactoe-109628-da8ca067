import React, { useState } from "react";
import "./TicTacToe.css";

// PUBLIC_INTERFACE
function TicTacToe() {
  /**
   * This is the main container for the TicTacToe game.
   * Handles game state, player moves, and UI.
   */

  // State for the board: 3x3 grid, each value can be 'X', 'O', or null
  const [board, setBoard] = useState(Array(9).fill(null));
  // State for whose turn it is: true for 'X', false for 'O'
  const [xIsNext, setXIsNext] = useState(true);

  // Returns 'X', 'O', 'draw', or null (if game is ongoing)
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    if (squares.every(x => x)) return 'draw';
    return null;
  }

  const winner = calculateWinner(board);
  const status = winner
    ? winner === "draw"
      ? "It's a draw!"
      : `Winner: ${winner}`
    : `Current Turn: ${xIsNext ? "X" : "O"}`;

  // Handle user clicking a cell
  function handleClick(idx) {
    // Do nothing if cell filled or game over
    if (board[idx] || winner) return;
    const boardCopy = board.slice();
    boardCopy[idx] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }

  // Handle a full board reset
  function handleReset() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  // Board Rendering
  function renderCell(idx) {
    return (
      <button
        className="ttt-cell"
        onClick={() => handleClick(idx)}
        aria-label={`Cell ${idx}, ${board[idx] ? board[idx] : "empty"}`}
        tabIndex={0}
        key={idx}
      >
        {board[idx]}
      </button>
    );
  }

  return (
    <div className="ttt-container">
      <div className="ttt-status">{status}</div>
      <div className="ttt-board" role="grid" aria-label="Tic Tac Toe board">
        {[0, 1, 2].map(row =>
          <div className="ttt-row" role="row" key={row}>
            {[0, 1, 2].map(col => renderCell(row * 3 + col))}
          </div>
        )}
      </div>
      {(winner) &&
        <button className="ttt-reset-btn" onClick={handleReset}>
          Play Again
        </button>
      }
    </div>
  );
}

export default TicTacToe;
