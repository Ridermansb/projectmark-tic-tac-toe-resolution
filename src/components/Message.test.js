import Message from "./Message.vue";
import { factory } from "@/test-utils";

test("<Message> should display the text correctly", () => {
  const wrapper = factory(Message, {
    store: {},
  });

  expect(wrapper.isVisible()).toBe(false);
});
