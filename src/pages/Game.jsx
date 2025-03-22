import React, { useState } from "react";
import Square from "../components/Square";
import calculateWinner from "../utils/CalculateWinner";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        const newSquares = squares.slice();
        if (calculateWinner(squares) || squares[index]) {
            return;
        }
        newSquares[index] = isXNext ? "X" : "O";
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const renderSquare = (index) => {
        return <Square value={squares[index]} onClick={() => handleClick(index)} />;
    };

    // Function to reset the game
    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
    };

    const winner = calculateWinner(squares);
    let status;

    if (winner === -1) {
        status = "It's a draw! 🤝";
    }
    else if (winner) {
        status = `🎉 Winner: ${winner}`;
    } else {
        status = `Next player: ${isXNext ? "X" : "O"}`;
    }

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="text-3xl font-bold text-indigo-600 mb-4">{status}</div>
            <div className="grid grid-cols-3 gap-3">
                {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
            </div>
            <div className="grid grid-cols-3 gap-3">
                {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
            </div>
            <div className="grid grid-cols-3 gap-3">
                {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
            </div>

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-500 transition cursor-pointer"
                onClick={resetGame}
            >
                Start New Game
            </button>
        </div>
    );
};

const Game = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-indigo-100">
            <Board />
        </div>
    );
};

export default Game;
