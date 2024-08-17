import { reactive } from "vue";
import { mount } from "@vue/test-utils";
import Score from "./Score.vue";
import { store, key } from "./useStore";

function factory({ store: extraStoreOptions, ...options } = { store: {} }) {
  return mount(Score, {
    global: {
      provide: {
        [key]: reactive({ ...store, ...extraStoreOptions }),
      },
    },
    ...options,
  });
}

test("<Score> should always have two elements", () => {
  const wrapper = factory();
  expect(wrapper.findAll(".victories")).toHaveLength(2);
});

test("<Score> should match scores within store", () => {
  const wrapper = factory({
    store: {
      victoriesPlayer1: 98,
      victoriesPlayer2: 1,
    },
  });
  expect(wrapper.findAll(".victories")[0].text()).toContain("98");
  expect(wrapper.findAll(".victories")[1].text()).toContain("1");
});

test("<Score> should mark current player", async () => {
  const wrapper = factory({
    store: {
      victoriesPlayer1: 2,
      victoriesPlayer2: 3,
      currentPlayer: "x",
    },
  });
  expect(wrapper.find(".current-player__x").text()).toContain("->");
});
