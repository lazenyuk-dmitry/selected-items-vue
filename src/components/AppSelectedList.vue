<script lang="ts" setup>
import type { Stuff } from "~stores/stuffList";
import { toRefs } from 'vue';
import AppItem from "~components/AppItem.vue";

const props = defineProps<{
  list: Stuff[];
}>();

const { list } = toRefs(props);
</script>

<template>
  <div :class="$style.root">

    <div v-if="list.length" :class="$style.listContent">
      <div>
        <AppItem 
          v-for="(item) in list"
          :key="item.id"
          :data="item"
          :class="$style.item"
        />
      </div>

      <p :class="$style.selectedBottomText">selected: N/M</p> 
    </div>

    <div v-else :class="$style.hint">
      Selected
      Item
    </div>
  </div>
</template>

<style lang="scss" module>
.root {
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  border: $app-border;
  min-height: 200px;
  min-width: 200px;
}

.hint {
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.selectedBottomText {
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
}

.listContent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item {
  margin: 20px;
}
</style>
