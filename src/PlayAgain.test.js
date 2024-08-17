import { mount } from "@vue/test-utils";
import PlayAgain from "./PlayAgain.vue";
import { factory } from "./test-utils";
import { store } from "./useStore";

beforeEach(() => {
  store.startANewMatch();
});

test("<PlayAgain> should display the text correctly", () => {
  const wrapper = mount(PlayAgain);

  expect(wrapper.text()).toContain("Play Again");
});

test("<PlayAgain> once click should start a new match", async () => {
  const wrapper = factory(PlayAgain, {
    store: {
      board: ["x", "o", "x", "o", "x", "", "x", "", "x", ""],
      currentPlayer: "",
    },
  });

  await wrapper.trigger("click");

  expect(store.board).toStrictEqual(["", "", "", "", "", "", "", "", ""]);
});
