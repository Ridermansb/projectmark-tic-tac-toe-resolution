import { mount } from "@vue/test-utils";
import Tile from "./tile";

test("<Tile> should display the marker correctly", () => {
  const wrapper = mount(Tile, {
    props: {
      marker: "987",
    },
  });

  expect(wrapper.text()).toContain("987");
});
