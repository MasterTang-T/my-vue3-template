<template>About</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  setup() {
    axios
      .get("/api/mock")
      .then((response) => {
        console.log(response, "response");
      })
      .catch((err) => console.log(err));
  },
});
</script>
<style scoped>
</style>