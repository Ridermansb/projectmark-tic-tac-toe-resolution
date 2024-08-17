import { mount } from "@vue/test-utils";
import Score from "./Score.vue";

test("<Score> should always have two elements", () => {
  const wrapper = mount(Score);
  expect(wrapper.findAll(".victories")).toHaveLength(2);
});

test("<Score> should match scores", () => {
  const wrapper = mount(Score, {
    props: {
      player1: 98,
      player2: 1,
    },
  });
  expect(wrapper.findAll(".victories")[0].text()).toContain("98");
  expect(wrapper.findAll(".victories")[1].text()).toContain("1");
});
