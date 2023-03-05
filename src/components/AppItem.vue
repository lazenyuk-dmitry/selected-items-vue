<script lang="ts" setup>
import type { Stuff } from "~stores/stuffList";
import { toRefs, ref } from 'vue';

const props = defineProps<{
  data: Stuff;
  disabled?: boolean;
}>()

const emit = defineEmits<{
  (e: 'select', data: Stuff): void,
  (e: 'unselect', data: Stuff): void,
}>();

const selected = ref(false);
const { data } = toRefs(props);

function onClick() {
  if (!selected.value) {
    selected.value = true;
    emit("select", data.value);
  } else {
    selected.value = false;
    emit("unselect", data.value);
  }
};
</script>

<template>
  <button 
    :class="[$style.root, {[$style.selected]: selected}]"
    :disabled="disabled"
    type="button"
    @click="onClick"
  >
    {{ data.name }}
</button>
</template>

<style lang="scss" module>
.root {
  display: inline-block;
  font-weight: bold;
  font-size: 16px;
  padding: 20px;
  margin: 20px;
  border: $app-border;
  cursor: pointer;
  user-select: none;
  transition: $app-item-transition;

  &:hover {
    background: $app-item-hover-bg;
    transition: $app-item-transition;
  }

  &:disabled {
    background: $app-item-disabled-bg;
    opacity: 0.8;
    transition: $app-item-transition;
  }

  &.selected {
    border-color: $app-accent-color;
    transition: $app-item-transition;
  }
}  
</style>
