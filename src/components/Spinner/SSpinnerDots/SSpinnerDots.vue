<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SSpinnerDots",
  components: {},
});
</script>

<template>
  <div
    class="dots flex gap-6 justify-center items-center w-full h-full bg-neutral-50"
  >
    <div
      v-for="i in 3"
      :key="i"
      class="dot w-8 h-8 bg-gradient-to-t from-primary-500 to-secondary-400 rounded-full"
      :style="{ 'animation-delay': `${(i - 1) * 250}ms` }"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes bounce {
  0% {
    transform: translateY(-28%);
  }

  50% {
    transform: none;
  }

  100% {
    transform: translateY(-28%);
  }
}

.dot {
  animation: bounce 1s infinite ease-in-out;
  animation-fill-mode: backwards;
}
</style>
