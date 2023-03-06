<script lang="ts" setup>
import type { Stuff } from "~stores/stuffList";
import { toRefs, ref } from 'vue';

interface Props {
  data: Stuff;
  disabled?: boolean;
  clickable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  clickable: false,
});

const emit = defineEmits<{
  (e: 'select', data: Stuff): void,
  (e: 'unselect', data: Stuff): void,
}>();

const selected = ref(false);
const { data, clickable, disabled } = toRefs(props);

function onClick() {
  if (!clickable.value || disabled.value) {
    return;
  }

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
  <div 
    :class="[
      $style.root, 
      {
        [$style.clickable]: clickable,
        [$style.selected]: selected,
        [$style.disabled]: disabled,
      }
    ]"
    type="button"
    @click="onClick"
  >
    {{ data.name }}
</div>
</template>

<style lang="scss" module>
.root {
  display: inline-block;
  font-weight: bold;
  font-size: 16px;
  padding: 20px;
  border: $app-border;
  transition: $app-item-transition;

  &.clickable {
    cursor: pointer;
    user-select: none;

    &:hover {
      background: $app-item-hover-bg;
      transition: $app-item-transition;
    }

    &.disabled {
      background: $app-item-disabled-bg;
      opacity: 0.5;
      transition: $app-item-transition;
      cursor: not-allowed;
    }

    &.selected {
      border-color: $app-accent-color;
      transition: $app-item-transition;
    }
  }
}  
</style>
