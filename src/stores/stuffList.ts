import { defineStore } from 'pinia';

import UserStuff from "~constants/userStuff";
import StoreStuff from "~constants/storeStuff";

export interface Stuff {
  id: number,
  name: string,
}

export const useStuffList = defineStore('useStuffList', () => {
  let userStuff: Stuff[] = [];
  let storeStuff: Stuff[] = [];

  function fetch() {
    userStuff = UserStuff;
    storeStuff = StoreStuff;
  }

  fetch();

  return { userStuff, storeStuff };
})
