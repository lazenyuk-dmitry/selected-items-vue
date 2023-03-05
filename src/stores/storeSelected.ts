import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Stuff } from "~stores/stuffList";

export const useStoreSelected = defineStore('useStoreSelected', () => {
  const list = ref([] as Stuff[]);

  function add(item: Stuff) {
    list.value.push(item);
  }

  function remove(item: Stuff) {
    const index = list.value.indexOf(item);

    if (index !== -1) {
      list.value.splice(index, 1);
    }
  }

  return { list, add, remove };
});
