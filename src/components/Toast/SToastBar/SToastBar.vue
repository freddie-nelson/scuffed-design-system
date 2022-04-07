<script lang="ts">
import { defineComponent, ref } from "vue";

import { Icon } from "@iconify/vue";
import closeIcon from "@iconify-icons/feather/x";

export default defineComponent({
  name: "SToastBar",
  components: { Icon },
  props: {
    closeable: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 0,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const showTimer = ref(!!props.duration);
    const timer = ref(props.duration);

    if (showTimer.value) {
      let lastTime = performance.now();
      const cb = (time: number) => {
        const dt = time - lastTime;
        lastTime = time;
        timer.value = Math.min(props.duration, Math.max(0, timer.value - dt));

        if (timer.value === 0) {
          emit("close");
          return;
        }

        requestAnimationFrame(cb);
      };

      cb(lastTime);
    }

    return {
      showTimer,
      timer,

      icons: {
        close: closeIcon,
      },
    };
  },
});
</script>

<template>
  <div
    class="flex items-center justify-center py-3 px-14 md:px-20 bg-neutral-900 rounded-lg text-neutral-50 font-medium relative overflow-hidden"
  >
    <p class="whitespace-nowrap text-ellipsis overflow-hidden text-center">
      <slot></slot>
    </p>

    <button
      v-if="closeable"
      class="absolute right-4 w-6 h-6 hover:text-primary-400 focus:text-primary-500 transition-colors duration-300 outline-none"
      @click="$emit('close')"
    >
      <Icon class="w-full h-full" :icon="icons.close" />
    </button>

    <!-- timer -->
    <div
      v-if="showTimer"
      class="absolute bottom-0 left-0 h-1 w-full bg-primary-400 transform origin-left"
      :style="{ '--tw-scale-x': timer / duration }"
    ></div>
  </div>
</template>

<style lang="scss" scoped></style>
