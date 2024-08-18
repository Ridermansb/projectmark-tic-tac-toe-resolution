import Score from "./Score.vue";
import { factory } from "../test-utils";

test("<Score> should always have two elements", () => {
  const wrapper = factory(Score);
  expect(wrapper.findAll(".victories")).toHaveLength(2);
});

test("<Score> should match scores within store", () => {
  const wrapper = factory(Score, {
    store: {
      victoriesPlayer1: 98,
      victoriesPlayer2: 1,
    },
  });
  expect(wrapper.findAll(".victories")[0].text()).toContain("98");
  expect(wrapper.findAll(".victories")[1].text()).toContain("1");
});

test("<Score> should mark current player", async () => {
  const wrapper = factory(Score, {
    store: {
      victoriesPlayer1: 2,
      victoriesPlayer2: 3,
      currentPlayer: "x",
    },
  });
  expect(wrapper.find(".current-player__x").text()).toContain("->");
});
