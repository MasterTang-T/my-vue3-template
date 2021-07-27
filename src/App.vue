<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { calcRem, resizeWindow } from "utils/calcRem";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const designWidth = ref(750);
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
