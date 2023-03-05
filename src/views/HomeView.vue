<script setup lang="ts">
import AppSelectedList from "@/components/AppSelectedList.vue";
import AppStuffList from "@/components/AppStuffList.vue";
import { useStuffList } from "~stores/stuffList";
import { useUserSelected } from "~stores/userSelected";
import { useStoreSelected } from "~stores/storeSelected";

const stuffList = useStuffList();
const userSelected = useUserSelected();
const storeSelected = useStoreSelected();

const { userStuff, storeStuff } = stuffList;

</script>

<template>
  <main :class="$style.root">
    <div :class="$style.top">
      <AppSelectedList :list="userSelected.list" />
      <AppSelectedList :list="storeSelected.list" />
    </div>
    <div :class="$style.bottom">
      <AppStuffList 
        :list="userStuff" 
        :class="$style.listBox"
        @select="userSelected.add"
        @unselect="userSelected.remove"
      />
      <AppStuffList
        :list="storeStuff"
        :class="$style.listBox"
        @select="storeSelected.add"
        @unselect="storeSelected.remove"
      />
    </div>
  </main>
</template>

<style lang="scss" module>
.root {
  height: 100%;
}

.top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.bottom {
  // height: 100%;
  display: flex;
}

.listBox {
  & + & {
    margin-left: 30px;
  }
}
</style>
