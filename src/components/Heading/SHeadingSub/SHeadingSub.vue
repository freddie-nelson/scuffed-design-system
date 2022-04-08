<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SHeadingSub",
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
    class="block w-max text-neutral-700 font-semibold"
  >
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped></style>
