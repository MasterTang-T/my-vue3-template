<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { calcRem, resizeWindow } from "utils/calcRem";
import isMobile from 'utils/isMobile';
export default defineComponent({
  name: "App",
  components: {},
  setup() {
    let designWidth = ref(1920);
    if(isMobile()){
      designWidth.value = 750;
    }
    calcRem(designWidth.value);
    resizeWindow(designWidth.value);
  },
});
</script>

<style>
html {
  font-size: 12px;
}
</style>
