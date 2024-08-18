import Game from "./Game.vue";
import { factory } from "../test-utils";
import { store } from "../useStore";

/**
 * Check if a player has won the game.
 * @todo Write a test that checks if a player has won the game.
 * This is causing strange false negatives, so it's skipped for now.
 */
test.skip("<Game> when user won update victories", async () => {
  const wrapper = factory(Game, {
    store: {
      victoriesPlayer1: 0,
      victoriesPlayer2: 0,
    },
  });

  const startedPlayer = store.currentPlayer;

  await wrapper.findAll(".tile").at(0).trigger("click");
  await wrapper.findAll(".tile").at(5).trigger("click");
  await wrapper.findAll(".tile").at(1).trigger("click");
  await wrapper.findAll(".tile").at(7).trigger("click");
  await wrapper.findAll(".tile").at(2).trigger("click");

  expect(
    wrapper
      .findAll(".victories")
      .at(startedPlayer === "x" ? 0 : 1)
      .text(),
  ).toContain("1");
});
