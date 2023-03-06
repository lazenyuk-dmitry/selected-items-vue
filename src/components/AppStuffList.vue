<script setup lang="ts">
import { ref, toRefs } from 'vue';
import type { Stuff } from "~stores/stuffList";
import AppItem from "~components/AppItem.vue";

interface CustomStuff extends Stuff {
  disabled: boolean;
}

const props = defineProps<{
  list: Stuff[];
  maxSelected?: number;
}>();

const emit = defineEmits<{
  (e: 'select', item: Stuff): void,
  (e: 'unselect', item: Stuff): void,
}>();

const { list, maxSelected } = toRefs(props);

let selectedIds = ref([] as number[]);

const customStuffList = ref(list.value.map(item => { 
  const newItem = item as CustomStuff;

  return { ...newItem , disabled: false };
}));

function checkLimit(): void {
  customStuffList.value.forEach(item => {
    if (!selectedIds.value.includes(item.id)) {
      item.disabled = !!maxSelected?.value && selectedIds.value.length >= maxSelected.value;
    }
  });
}

function onSelect(item: Stuff): void {
  const { id } = item;

  if (maxSelected?.value) {
    selectedIds.value.push(id);
    
    checkLimit();
  }

  emit("select", item);
}

function onUnselect(item: Stuff): void {
  const { id } = item;

  if (maxSelected?.value) {
    selectedIds.value.splice(selectedIds.value.indexOf(id), 1);

    checkLimit();
  }

  emit("unselect", item);
}
</script>

<template>
  <div :class="$style.root">
    <AppItem 
      v-for="(item) in customStuffList"
      :key="item.id"
      :data="item"
      :clickable="true"
      :disabled="item.disabled"
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