<script setup lang="ts">
import AppStuffList from "@/components/AppStuffList.vue";
import { useStuffList } from "~stores/stuffList";

const stuffList = useStuffList();

const { userStuff, storeStuff } = stuffList;

</script>

<template>
  <main>
    <AppStuffList :list="userStuff"/>
  </main>
</template>
