<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SButton",
  components: {},
  props: {
    purpose: {
      type: String,
      default: "primary",
      validator(value: string) {
        return (
          value === "primary" ||
          value === "secondary" ||
          value === "success" ||
          value === "danger" ||
          value === "warning"
        );
      },
    },
  },
});
</script>

<template>
  <button
    class="inline-flex justify-center items-center px-7 text-lg font-semibold rounded-lg focus:outline-none transition-colors ease duration-200"
    :class="
      {
        primary:
          'text-neutral-50 bg-primary-600 hover:bg-secondary-600 focus:bg-secondary-700',
        secondary:
          'text-neutral-50 bg-secondary-600 hover:bg-primary-600 focus:bg-primary-700',
        success:
          'text-neutral-50 bg-success-500 hover:bg-success-600 focus:bg-success-700',
        danger:
          'text-neutral-50 bg-danger-500 hover:bg-danger-600 focus:bg-danger-700',
        warning:
          'text-neutral-50 bg-warning-500 hover:bg-warning-600 focus:bg-warning-700',
      }[purpose]
    "
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
