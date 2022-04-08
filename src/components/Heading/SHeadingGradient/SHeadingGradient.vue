<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SHeadingGradient",
  components: {},
  props: {
    level: {
      type: Number,
      required: true,
      validator(level: number) {
        return level > 0 && level <= 6;
      },
    },
  },
});
</script>

<template>
  <component
    :is="`h${level}`"
    class="block w-max text-transparent bg-clip-text bg-gradient-to-r font-bold from-primary-500 to-secondary-400 pb-[0.2ch]"
  >
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped></style>
