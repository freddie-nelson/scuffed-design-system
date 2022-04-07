<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SFormLabel",
  components: {},
  props: {
    required: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<template>
  <label class="font-semibold text-sm text-neutral-400">
    <slot></slot>

    <span v-if="required" class="text-secondary-500 ml-[0.05rem] text-base">
      *
    </span>
  </label>
</template>

<style lang="scss" scoped></style>
