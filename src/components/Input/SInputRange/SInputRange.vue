<script lang="ts">
import { defineComponent } from "vue";
import { Config } from "tailwindcss";
import { useExtractTailwindColors } from "@/utils/useExtractTailwindColors";

import Vue3Slider from "vue3-slider";

export default defineComponent({
  name: "SInputRange",
  components: { Vue3Slider },
  props: {
    tailwindConfig: {
      type: Object as () => Config,
      required: true,
    },
  },
  setup(props) {
    const colors = useExtractTailwindColors(props.tailwindConfig);

    return {
      colors,
    };
  },
});
</script>

<template>
  <Vue3Slider
    class="s-input-range"
    :color="colors.primary[500]"
    :trackColor="colors.neutral[300]"
    :tooltipColor="colors.neutral[700]"
    :tooltipTextColor="colors.neutral[50]"
  />
</template>

<style lang="scss" scoped></style>
