//1st move
export const firstMove = () => {
  const index = Math.floor(Math.random() * 9);
  return index;
};

//2nd move
export const secondMove = (userMoves) => {
  const botMovePatterns = {
    // Corner scenarios - block potential wins
    "0,1": 2, // Top-left and top-middle -> block at top-right
    "0,3": 6, // Top-left and middle-left -> block at bottom-left
    "0,4": 8, // Top-left and center -> block at bottom-right
    "0,2": 1, // Top-left and top-right -> block at top-middle
    "0,6": 3, // Top-left and bottom-left -> block at middle-left
    "0,8": 4, // Top-left and bottom-right -> block at center

    "1,2": 0, // Top-middle and top-right -> block at top-left
    "1,4": 7, // Top-middle and center -> block at bottom-middle
    "1,0": 2, // Top-middle and top-left -> block at top-right
    "1,7": 4, // Top-middle and bottom-middle -> block at center

    "2,1": 0, // Top-right and top-middle -> block at top-left
    "2,4": 6, // Top-right and center -> block at bottom-left
    "2,5": 8, // Top-right and middle-right -> block at bottom-right
    "2,0": 1, // Top-right and top-left -> block at top-middle
    "2,8": 5, // Top-right and bottom-right -> block at middle-right
    "2,6": 4, // Top-right and bottom-left -> block at center

    "3,0": 6, // Middle-left and top-left -> block at bottom-left
    "3,4": 5, // Middle-left and center -> block at middle-right
    "3,6": 0, // Middle-left and bottom-left -> block at top-left
    "3,5": 4, // Middle-left and middle-right -> block at center

    "4,0": 8, // Center and top-left -> block at bottom-right
    "4,1": 7, // Center and top-middle -> block at bottom-middle
    "4,2": 6, // Center and top-right -> block at bottom-left
    "4,3": 5, // Center and middle-left -> block at middle-right
    "4,5": 3, // Center and middle-right -> block at middle-left
    "4,6": 2, // Center and bottom-left -> block at top-right
    "4,7": 1, // Center and bottom-middle -> block at top-middle
    "4,8": 0, // Center and bottom-right -> block at top-left

    "5,2": 8, // Middle-right and top-right -> block at bottom-right
    "5,4": 3, // Middle-right and center -> block at middle-left
    "5,8": 2, // Middle-right and bottom-right -> block at top-right
    "5,3": 4, // Middle-right and middle-left -> block at center

    "6,0": 3, // Bottom-left and top-left -> block at middle-left
    "6,3": 0, // Bottom-left and middle-left -> block at top-left
    "6,4": 2, // Bottom-left and center -> block at top-right
    "6,7": 8, // Bottom-left and bottom-middle -> block at bottom-right
    "6,2": 4, // Bottom-left and top-right -> block at center
    "6,8": 7, // Bottom-left and bottom-right -> block at bottom-middle

    "7,1": 4, // Bottom-middle and top-middle -> block at center
    "7,4": 1, // Bottom-middle and center -> block at top-middle
    "7,6": 8, // Bottom-middle and bottom-left -> block at bottom-right
    "7,8": 6, // Bottom-middle and bottom-right -> block at bottom-left

    "8,0": 4, // Bottom-right and top-left -> block at center
    "8,2": 5, // Bottom-right and top-right -> block at middle-right
    "8,4": 0, // Bottom-right and center -> block at top-left
    "8,5": 2, // Bottom-right and middle-right -> block at top-right
    "8,6": 7, // Bottom-right and bottom-left -> block at bottom-middle
    "8,7": 6, // Bottom-right and bottom-middle -> block at bottom-left
  };

  //sort and join user moves
  const moves = userMoves.slice().sort().join(",");

  //if patten matched return bot move
  if (botMovePatterns[moves]) {
    return botMovePatterns[moves];
  } else {
    return null;
  }
};

//3rd move
export const thirdMove = (userMoves, botMoves) => {
  const botMovePatterns = {
    // Corner scenarios - block potential wins
    "0,1": 2, // Top-left and top-middle -> block at top-right
    "0,3": 6, // Top-left and middle-left -> block at bottom-left
    "0,4": 8, // Top-left and center -> block at bottom-right
    "0,2": 1, // Top-left and top-right -> block at top-middle
    "0,6": 3, // Top-left and bottom-left -> block at middle-left
    "0,8": 4, // Top-left and bottom-right -> block at center

    "1,2": 0, // Top-middle and top-right -> block at top-left
    "1,4": 7, // Top-middle and center -> block at bottom-middle
    "1,0": 2, // Top-middle and top-left -> block at top-right
    "1,7": 4, // Top-middle and bottom-middle -> block at center

    "2,1": 0, // Top-right and top-middle -> block at top-left
    "2,4": 6, // Top-right and center -> block at bottom-left
    "2,5": 8, // Top-right and middle-right -> block at bottom-right
    "2,0": 1, // Top-right and top-left -> block at top-middle
    "2,8": 5, // Top-right and bottom-right -> block at middle-right
    "2,6": 4, // Top-right and bottom-left -> block at center

    "3,0": 6, // Middle-left and top-left -> block at bottom-left
    "3,4": 5, // Middle-left and center -> block at middle-right
    "3,6": 0, // Middle-left and bottom-left -> block at top-left
    "3,5": 4, // Middle-left and middle-right -> block at center

    "4,0": 8, // Center and top-left -> block at bottom-right
    "4,1": 7, // Center and top-middle -> block at bottom-middle
    "4,2": 6, // Center and top-right -> block at bottom-left
    "4,3": 5, // Center and middle-left -> block at middle-right
    "4,5": 3, // Center and middle-right -> block at middle-left
    "4,6": 2, // Center and bottom-left -> block at top-right
    "4,7": 1, // Center and bottom-middle -> block at top-middle
    "4,8": 0, // Center and bottom-right -> block at top-left

    "5,2": 8, // Middle-right and top-right -> block at bottom-right
    "5,4": 3, // Middle-right and center -> block at middle-left
    "5,8": 2, // Middle-right and bottom-right -> block at top-right
    "5,3": 4, // Middle-right and middle-left -> block at center

    "6,0": 3, // Bottom-left and top-left -> block at middle-left
    "6,3": 0, // Bottom-left and middle-left -> block at top-left
    "6,4": 2, // Bottom-left and center -> block at top-right
    "6,7": 8, // Bottom-left and bottom-middle -> block at bottom-right
    "6,2": 4, // Bottom-left and top-right -> block at center
    "6,8": 7, // Bottom-left and bottom-right -> block at bottom-middle

    "7,1": 4, // Bottom-middle and top-middle -> block at center
    "7,4": 1, // Bottom-middle and center -> block at top-middle
    "7,6": 8, // Bottom-middle and bottom-left -> block at bottom-right
    "7,8": 6, // Bottom-middle and bottom-right -> block at bottom-left

    "8,0": 4, // Bottom-right and top-left -> block at center
    "8,2": 5, // Bottom-right and top-right -> block at middle-right
    "8,4": 0, // Bottom-right and center -> block at top-left
    "8,5": 2, // Bottom-right and middle-right -> block at top-right
    "8,6": 7, // Bottom-right and bottom-left -> block at bottom-middle
    "8,7": 6, // Bottom-right and bottom-middle -> block at bottom-left
  };

  //sort and join user & bot moves
  const uMoves = userMoves.slice().sort().join(",");
  const bMoves = botMoves.slice().sort().join(",");

  //if patten matched return bot move
  if (botMovePatterns[uMoves]) {
    return botMovePatterns[uMoves];
  } else {
    return botMovePatterns[bMoves];
  }
};

//4th move
export const forthMove = (userMoves, botMoves) => {
  const botMovePatterns = {
    // Corner scenarios - block potential wins
    "0,1": 2, // Top-left and top-middle -> block at top-right
    "0,3": 6, // Top-left and middle-left -> block at bottom-left
    "0,4": 8, // Top-left and center -> block at bottom-right
    "0,2": 1, // Top-left and top-right -> block at top-middle
    "0,6": 3, // Top-left and bottom-left -> block at middle-left
    "0,8": 4, // Top-left and bottom-right -> block at center

    "1,2": 0, // Top-middle and top-right -> block at top-left
    "1,4": 7, // Top-middle and center -> block at bottom-middle
    "1,0": 2, // Top-middle and top-left -> block at top-right
    "1,7": 4, // Top-middle and bottom-middle -> block at center

    "2,1": 0, // Top-right and top-middle -> block at top-left
    "2,4": 6, // Top-right and center -> block at bottom-left
    "2,5": 8, // Top-right and middle-right -> block at bottom-right
    "2,0": 1, // Top-right and top-left -> block at top-middle
    "2,8": 5, // Top-right and bottom-right -> block at middle-right
    "2,6": 4, // Top-right and bottom-left -> block at center

    "3,0": 6, // Middle-left and top-left -> block at bottom-left
    "3,4": 5, // Middle-left and center -> block at middle-right
    "3,6": 0, // Middle-left and bottom-left -> block at top-left
    "3,5": 4, // Middle-left and middle-right -> block at center

    "4,0": 8, // Center and top-left -> block at bottom-right
    "4,1": 7, // Center and top-middle -> block at bottom-middle
    "4,2": 6, // Center and top-right -> block at bottom-left
    "4,3": 5, // Center and middle-left -> block at middle-right
    "4,5": 3, // Center and middle-right -> block at middle-left
    "4,6": 2, // Center and bottom-left -> block at top-right
    "4,7": 1, // Center and bottom-middle -> block at top-middle
    "4,8": 0, // Center and bottom-right -> block at top-left

    "5,2": 8, // Middle-right and top-right -> block at bottom-right
    "5,4": 3, // Middle-right and center -> block at middle-left
    "5,8": 2, // Middle-right and bottom-right -> block at top-right
    "5,3": 4, // Middle-right and middle-left -> block at center

    "6,0": 3, // Bottom-left and top-left -> block at middle-left
    "6,3": 0, // Bottom-left and middle-left -> block at top-left
    "6,4": 2, // Bottom-left and center -> block at top-right
    "6,7": 8, // Bottom-left and bottom-middle -> block at bottom-right
    "6,2": 4, // Bottom-left and top-right -> block at center
    "6,8": 7, // Bottom-left and bottom-right -> block at bottom-middle

    "7,1": 4, // Bottom-middle and top-middle -> block at center
    "7,4": 1, // Bottom-middle and center -> block at top-middle
    "7,6": 8, // Bottom-middle and bottom-left -> block at bottom-right
    "7,8": 6, // Bottom-middle and bottom-right -> block at bottom-left

    "8,0": 4, // Bottom-right and top-left -> block at center
    "8,2": 5, // Bottom-right and top-right -> block at middle-right
    "8,4": 0, // Bottom-right and center -> block at top-left
    "8,5": 2, // Bottom-right and middle-right -> block at top-right
    "8,6": 7, // Bottom-right and bottom-left -> block at bottom-middle
    "8,7": 6, // Bottom-right and bottom-middle -> block at bottom-left
  };

  //sort and join user & bot moves
  const uMoves = userMoves.slice().sort().join(",");
  const bMoves = botMoves.slice().sort().join(",");

  //if patten matched return bot move
  if (botMovePatterns[uMoves]) {
    return botMovePatterns[uMoves];
  } else {
    return botMovePatterns[bMoves];
  }
};

//win patterns
export const winPlayer = (userMoves, botMoves) => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Horizontal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Vertical
    [0, 4, 8],
    [2, 4, 6], // Diagonal
  ];

  // Check if a player's moves match any winning pattern
  for (const pattern of winPatterns) {
    if (pattern.every((pos) => userMoves.includes(pos))) {
      return { winner: "user", winningPattern: pattern };
    }
    if (pattern.every((pos) => botMoves.includes(pos))) {
      return { winner: "bot", winningPattern: pattern };
    }
  }

  return null; // No winner
};
