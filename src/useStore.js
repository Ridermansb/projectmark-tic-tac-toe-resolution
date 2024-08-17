import { reactive, inject } from "vue";

export const key = Symbol();

export const store = reactive({
  currentPlayer: "o",
  victoriesPlayer1: 0,
  victoriesPlayer2: 0,
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  startANewMatch() {
    this.currentPlayer = Math.random() < 0.5 ? "x" : "o";
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  },
});

function useStore() {
  return inject(key);
}

export default useStore;
