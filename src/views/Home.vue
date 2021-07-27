<template>
  <div class="container">
    <div class="container-header">home</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {},
});
</script>
<style lang="less" scoped>
@container_width: 100vw;
@container_height: 100vh;
.container {
  width: @container_width;
  height: @container_height;
  overflow: hidden;
  &-header {
    margin-top: 1rem;
    color: red;
  }
}
</style>