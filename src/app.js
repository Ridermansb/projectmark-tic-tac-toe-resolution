import { createApp } from "vue";

import Game from "./components/Game.vue";
import { key, store } from "./useStore";

const app = createApp(Game);

app.provide(key, store);

app.mount("#app");
