import { ref } from "vue";
import { mount } from "@vue/test-utils";
import Score from "./Score.vue";
import { key } from "./useStore";

function factory({ store, ...options } = { store: { victoriesPlayer1: 0, victoriesPlayer2: 0 } }) {
  return mount(Score, {
    global: {
      provide: {
        [key]: ref(store),
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
