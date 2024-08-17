import { mount } from "@vue/test-utils";
import PlayAgain from "./PlayAgain.vue";

test("<PlayAgain> should display the text correctly", () => {
  const wrapper = mount(PlayAgain);

  expect(wrapper.text()).toContain("Play Again");
});
