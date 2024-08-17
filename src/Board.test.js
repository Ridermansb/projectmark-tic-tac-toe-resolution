import Board from "./Board.vue";
import Tile from "./Tile.vue";
import { factory } from "./test-utils";
import { expect } from "vitest";
import { store } from "./useStore";

beforeEach(() => {
  store.startANewMatch();
});

test("<Board> should display the text correctly", () => {
  const wrapper = factory(Board);
  expect(wrapper.getComponent(Tile).props()).toEqual({ index: 0, marker: "" });
});

test("<Board> disable the Tile once user click on it", async () => {
  const wrapper = factory(Board, {
    store: {
      currentPlayer: "x",
    },
  });

  expect(wrapper.findAll(".tile").at(0).attributes("disabled")).toBeUndefined();

  const firstTile = await wrapper.findAllComponents(Tile).at(0);
  await firstTile.trigger("click");
  expect(wrapper.findAll(".tile").at(0).attributes("disabled")).toBe("");
});

test("<Board> already marked tile should be disabled", () => {
  const wrapper = factory(Board, {
    store: {
      currentPlayer: "x",
      board: ["x", "", "", "", "", "", "", "", ""],
    },
  });

  expect(wrapper.findAll(".tile").at(0).attributes("disabled")).toBe("");
});

test("<Board> Tile should be marked with current player", async () => {
  const wrapper = factory(Board, {
    store: {
      currentPlayer: "o",
    },
  });

  const firstTile = await wrapper.findAllComponents(Tile).at(0);
  await firstTile.trigger("click");
  expect(wrapper.findAll(".tile").at(0).text()).toBe("o");
});
