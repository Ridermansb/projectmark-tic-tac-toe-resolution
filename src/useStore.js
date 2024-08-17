import { reactive, inject } from "vue";

export const key = Symbol();

export const store = reactive({
  currentPlayer: "o",
  victoriesPlayer1: 0,
  victoriesPlayer2: 0,
  board: Array.from({ length: 9 }).fill(""),
  startANewMatch() {
    this.currentPlayer = Math.random() < 0.5 ? "x" : "o";
    this.board = Array.from({ length: 9 }).fill("");
  },
  markTile(index) {
    if (this.board[index]) {
      throw new Error("Tile already marked");
    }

    this.board[index] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === "x" ? "o" : "x";
  },
});

function useStore() {
  return inject(key);
}

export default useStore;
