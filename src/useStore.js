import { inject } from "vue";

export const key = Symbol();

function useStore() {
  return inject(key);
}

export default useStore;
