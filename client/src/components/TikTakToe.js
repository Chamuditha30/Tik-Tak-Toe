import React, { useEffect, useState } from "react";
import {
  firstMove,
  secondMove,
  thirdMove,
  forthMove,
  winPlayer,
} from "./BotMove";

export default function TikTakToe() {
  //define board
  const [board, setBoard] = useState(Array(9).fill(null));
  const [userMoves, setUserMoves] = useState([]);
  const [botMoves, setBotMoves] = useState([]);
  const [winner, setWinner] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [winningPattern, setWinningPattern] = useState([]);

  //hard bot move
  const botMoveHandler = (newUserMoves) => {
    let botMove;

    //1st move
    if (newUserMoves.length === 1) {
      setBoard((prevBoard) => {
        let newBoard = [...prevBoard];

        do {
          botMove = firstMove();
          console.log(botMove);
        } while (newBoard[botMove]);

        newBoard[botMove] = "⭕";
        return newBoard;
      });
      setBotMoves((prevBotMoves) => [...prevBotMoves, botMove]);
    }

    //2nd move
    else if (newUserMoves.length === 2) {
      setBoard((prevBoard) => {
        let newBoard = [...prevBoard];

        botMove = secondMove(newUserMoves);

        if (!botMove || newBoard[botMove]) {
          do {
            botMove = firstMove();
            console.log(botMove);
          } while (newBoard[botMove]);
        }

        newBoard[botMove] = "⭕";
        return newBoard;
      });
      setBotMoves((prevBotMoves) => [...prevBotMoves, botMove]);
    }

    //3rd move
    else if (newUserMoves.length === 3) {
      setBoard((prevBoard) => {
        let newBoard = [...prevBoard];

        botMove = thirdMove(newUserMoves, botMoves);

        if (!botMove || newBoard[botMove]) {
          do {
            botMove = firstMove();
            console.log(botMove);
          } while (newBoard[botMove]);
        }

        newBoard[botMove] = "⭕";
        return newBoard;
      });
      setBotMoves((prevBotMoves) => [...prevBotMoves, botMove]);
    }

    //4th move
    else if (newUserMoves.length === 4) {
      setBoard((prevBoard) => {
        let newBoard = [...prevBoard];

        botMove = forthMove(newUserMoves, botMoves);

        if (!botMove || newBoard[botMove]) {
          do {
            botMove = firstMove();
            console.log(botMove);
          } while (newBoard[botMove]);
        }

        newBoard[botMove] = "⭕";
        return newBoard;
      });
      setBotMoves((prevBotMoves) => [...prevBotMoves, botMove]);
    }
  };

  //user move handler
  const userMoveHandler = (index) => {
    if (isGameOver || board[index]) return;

    //mark X when user click on cell
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[index] = "❌";
      return newBoard;
    });

    //update user marked cells
    const newUserMoves = [...userMoves, index];
    setUserMoves(newUserMoves);

    //check if user win
    const result = winPlayer(newUserMoves, botMoves);
    if (result && result.winner === "user") {
      setWinner("user");
      setWinningPattern(result.winningPattern);
      setIsGameOver(true);
      return;
    }

    setTimeout(() => {
      botMoveHandler(newUserMoves);
    }, 500);
  };

  useEffect(() => {
    console.log("Board: ", board);
    console.log("User moves", userMoves);
    console.log("Bot moves", botMoves);

    if (userMoves.length >= 3 || botMoves.length >= 3) {
      const result = winPlayer(userMoves, botMoves);
      if (result) {
        setWinner(result.winner);
        setWinningPattern(result.winningPattern);
        setIsGameOver(true);
      }
    }

    if (board.every((cell) => cell !== null) && !winner) {
      setWinner("draw");
      setIsGameOver(true);
    }
  }, [board, userMoves, botMoves, winner]);

  //function to determine if a cell is part of the winning pattern
  const isWinningCell = (index) => {
    return winningPattern.includes(index);
  };

  //restart
  const restartHandler = () => {
    setBoard(Array(9).fill(null));
    setUserMoves([]);
    setBotMoves([]);
    setWinner("");
    setIsGameOver(false);
    setWinningPattern([]);
  };

  return (
    <div className="bg-bg flex h-screen w-full flex-col items-center justify-center gap-5 bg-cover bg-center">
      <h1 className="text-5xl font-bold text-white shadow-lg">TIC TAC TOE</h1>
      <h1
        className={`${winner ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"} rounded px-2 py-1 text-3xl font-semibold text-white transition-all duration-300 ease-out ${winner === "user" ? "bg-green-500" : winner === "bot" ? "bg-red-500" : winner === "draw" ? "bg-yellow-500" : ""}`}
      >
        {winner === "user"
          ? "You Win!"
          : winner === "bot"
            ? "You Lost!"
            : winner === "draw"
              ? "Draw!"
              : ""}
      </h1>

      {/* grid */}
      <div className="grid grid-cols-3 gap-1 bg-red-950 p-4 shadow-lg">
        {board.map((cell, index) => (
          <button
            key={index}
            disabled={board[index] ? true : false}
            onClick={() => userMoveHandler(index)}
            className={`bg-boardBg flex size-20 items-center justify-center bg-cover bg-center ${isWinningCell(index) ? "animate-pulse" : ""} text-4xl md:text-6xl ${cell === "x" ? "text-amber-800" : "text-white"} md:size-32`}
          >
            {cell}
          </button>
        ))}
      </div>

      {/* reset button */}
      <button
        onClick={restartHandler}
        className={`mt-5 rounded border-2 border-white ${winner === "user" ? "bg-green-500" : winner === "bot" ? "bg-red-500" : winner === "draw" ? "bg-yellow-500" : "bg-amber-800"} px-2 py-1 text-xl font-semibold text-white`}
      >
        Restart
      </button>
    </div>
  );
}
