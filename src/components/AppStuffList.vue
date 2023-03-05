<script setup lang="ts">
import type { Stuff } from "~stores/stuffList";
import { toRefs } from 'vue';

const props = defineProps<{
  list: Stuff[];
}>()

const { list } = toRefs(props);
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.item" v-for="(item) in list" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>

<style lang="scss" module>
.root {
  display: flex;
  flex-wrap: wrap;
}
.root, .item {
  border: $app-border;
}

.item {
  padding: 30px;
  margin: 30px;
}
</style>