import { mount } from "@vue/test-utils";
import Board from "./Board.vue";
import Tile from "./Tile.vue";

test("<Board> should display the text correctly", () => {
  const wrapper = mount(Board);

  expect(wrapper.getComponent(Tile).props()).toEqual({ index: 0, marker: "x" });
});
