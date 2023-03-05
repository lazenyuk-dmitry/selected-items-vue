<script setup lang="ts">
import { toRefs } from 'vue';
import type { Stuff } from "~stores/stuffList";
import AppItem from "~components/AppItem.vue";

const props = defineProps<{
  list: Stuff[];
}>();

const emit = defineEmits<{
  (e: 'select', item: Stuff): void,
  (e: 'unselect', item: Stuff): void,
}>();

const { list } = toRefs(props);

function onSelect(item: Stuff) {
  emit("select", item);
}

function onUnselect(item: Stuff) {
  emit("unselect", item);
}
</script>

<template>
  <div :class="$style.root">
    <AppItem 
      v-for="(item) in list"
      :key="item.id"
      :data="item"
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