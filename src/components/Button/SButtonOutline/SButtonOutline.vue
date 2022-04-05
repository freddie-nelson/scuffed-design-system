<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SButtonOutline",
  components: {},
  props: {
    purpose: {
      type: String,
      default: "primary",
      required: true,
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
    class="inline-flex justify-center items-center px-7 text-lg font-semibold rounded-lg border-4 bg-transparent focus:outline-none transition-colors ease duration-200"
    :class="
      {
        primary:
          'text-primary-600 hover:text-neutral-50 focus:text-neutral-50 hover:bg-secondary-600 focus:bg-secondary-700 border-primary-600 hover:border-secondary-600 focus:border-secondary-700',
        secondary:
          'text-secondary-500 hover:text-neutral-50 focus:text-neutral-50 hover:bg-primary-600 focus:bg-primary-700 border-secondary-600 hover:border-primary-600 focus:border-primary-700',
        success:
          'text-success-500 hover:text-neutral-50 focus:text-neutral-50 hover:bg-success-600 focus:bg-success-700 border-success-500 hover:border-success-600 focus:border-success-700',
        danger:
          'text-danger-500 hover:text-neutral-50 focus:text-neutral-50 hover:bg-danger-600 focus:bg-danger-700 border-danger-500 hover:border-danger-600 focus:border-danger-700',
        warning:
          'text-warning-500 hover:text-neutral-50 focus:text-neutral-50 hover:bg-warning-600 focus:bg-warning-700 border-warning-500 hover:border-warning-600 focus:border-warning-700',
      }[purpose]
    "
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
