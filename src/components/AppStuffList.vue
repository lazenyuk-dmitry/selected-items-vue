<script setup lang="ts">
import { toRefs, computed } from 'vue';
import type { Stuff } from "~stores/stuffList";
import AppItem from "~components/AppItem.vue";

const props = defineProps<{
  list: Stuff[];
  maxSelected?: number;
}>();

const emit = defineEmits<{
  (e: 'select', item: Stuff): void,
  (e: 'unselect', item: Stuff): void,
}>();

const { list, maxSelected } = toRefs(props);

let selectedCounter = 0;

const isDisabled = computed(() => {
  return maxSelected?.value ? selectedCounter >= maxSelected.value : false;
});

function onSelect(item: Stuff) {
  if (maxSelected?.value) {
    selectedCounter++;
  }

  emit("select", item);
}

function onUnselect(item: Stuff) {
  if (maxSelected?.value) {
    selectedCounter--;
  }

  emit("unselect", item);
}
</script>

<template>
  <div :class="$style.root">
    <AppItem 
      v-for="(item) in list"
      :key="item.id"
      :data="item"
      :clickable="true"
      :disabled="isDisabled"
      @select="onSelect"
      @unselect="onUnselect"
    />
  </div>
</template>

<style lang="scss" module>
.root {
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  border: $app-border;
  transition: 0.6s;
}
</style>