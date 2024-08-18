import { reactive, inject } from "vue";
import { checkWinner } from "./modules/game";

export const key = Symbol();

export const store = reactive({
  currentPlayer: "o",
  victoriesPlayer1: 0,
  victoriesPlayer2: 0,
  board: Array.from({ length: 9 }).fill(""),
  gameFinishedMessage: false,
  startANewMatch() {
    this.currentPlayer = Math.random() < 0.5 ? "x" : "o";
    this.board = Array.from({ length: 9 }).fill("");
    this.gameFinishedMessage = false;
  },
  markTile(index) {
    if (this.board[index]) {
      throw new Error("Tile already marked");
    }
    this.board[index] = this.currentPlayer;
    this.checkWinnerAgainstCurrentPlayer();

    this.currentPlayer = this.currentPlayer === "x" ? "o" : "x";
  },
  checkWinnerAgainstCurrentPlayer() {
    const currentPlayerWon = checkWinner(this.board, this.currentPlayer);
    if (currentPlayerWon) {
      if (this.currentPlayer === "x") {
        this.victoriesPlayer1++;
      } else {
        this.victoriesPlayer2++;
      }

      this.gameFinishedMessage = `Player ${this.currentPlayer === "x" ? "1" : "2"} won!`;
    }
  },
});

function useStore() {
  return inject(key);
}

export default useStore;
