import { reactive } from "vue";
import { mount } from "@vue/test-utils";
import { store, key } from "./useStore";

export function factory(Component, { store: extraStoreOptions, ...options } = { store: {} }) {
  return mount(Component, {
    global: {
      provide: {
        [key]: reactive({ ...store, ...extraStoreOptions }),
      },
    },
    ...options,
  });
}
