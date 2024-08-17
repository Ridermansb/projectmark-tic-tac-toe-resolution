import { mount } from "@vue/test-utils";
import Message from "./Message.vue";

test("<Message> should display the text correctly", () => {
  const wrapper = mount(Message, {
    props: {
      text: "testing",
    },
  });

  expect(wrapper.text()).toContain("testing");
});
