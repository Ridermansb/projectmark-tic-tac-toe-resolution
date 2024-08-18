/**
 * Check if a player has won the game.
 * @description
 * For each row in the board, check if all the tiles in that row are marked by the same player.
 * If so, and all the tiles are marked by the same player, meaning the player has won the game.
 */
const winningCombinations = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left to bottom-right
  [2, 4, 6], // Diagonal from top-right to bottom-left
];

/**
 * Check if a player has won the game.
 * @param board The game board
 * @param player The player to check
 * @example
 * ```js
 * const board = ["x", "x", "x", "", "", "", "", "", ""];
 * const player = "x";
 * console.log(checkWinner(board, player)); // true
 * ```
 * @returns {boolean | null} True if the player has won the game, false otherwise or null if the game is still in progress
 */
export function checkWinner(board, player) {
  const isWinningCombination = winningCombinations.some((combination) =>
    combination.every((index) => board[index] === player),
  );
  const isBoardFull = board.every((tile) => tile !== "");

  if (isWinningCombination) {
    return true;
  } else if (isBoardFull) {
    return false; // It's a draw
  } else {
    return null; // Game is still in progress
  }
}
