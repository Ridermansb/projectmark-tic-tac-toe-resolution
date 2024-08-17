import { ref, createApp } from "vue";

import Game from "./Game.vue";
import { key } from "./useStore";

const app = createApp(Game);

app.provide(
  key,
  ref({
    currentPlayer: "o",
    victoriesPlayer1: 0,
    victoriesPlayer2: 0,
    board: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
  }),
);

app.mount("#app");
