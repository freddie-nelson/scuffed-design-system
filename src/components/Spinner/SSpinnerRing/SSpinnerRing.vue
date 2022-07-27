<script lang="ts">
import { Config } from "tailwindcss";
import { defineComponent, ref } from "vue";

import SInputRange from "../../Input/SInputRange/SInputRange.vue";

export default defineComponent({
  name: "SSpinnerRing",
  components: { SInputRange },
  props: {
    tailwindConfig: {
      type: Object as () => Config,
      required: true,
    },
  },
  setup() {
    return {
      value: ref(33),
    };
  },
});
</script>

<template>
  <div class="flex justify-center items-center w-full h-full bg-neutral-50">
    <div class="w-24 h-24 relative [animation-duration:10s] animate-spin">
      <s-input-range
        v-model="value"
        tabindex="-1"
        :tailwindConfig="tailwindConfig"
        orientation="circular"
        :height="14"
        trackColor="transparent"
        class="[position:absolute_!important] pointer-events-none animate-spin [animation-timing-function:cubic-bezier(0.68,0.19,0.29,1)]"
      />

      <s-input-range
        v-model="value"
        tabindex="-1"
        :max="value"
        :tailwindConfig="tailwindConfig"
        orientation="circular"
        :height="14"
        trackColor="transparent"
        class="[position:absolute_!important] pointer-events-none opacity-30"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
