<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SButtonText",
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
    class="inline-flex font-semibold text-base transition-colors duration-200 ease focus:outline-none"
    :class="
      {
        primary:
          'text-primary-600 hover:text-secondary-600 focus:text-secondary-700',
        secondary:
          'text-secondary-600 hover:text-primary-600 focus:text-primary-700',
        success:
          'text-success-500 hover:text-success-600 focus:text-success-700',
        danger: 'text-danger-500 hover:text-danger-600 focus:text-danger-700',
        warning:
          'text-warning-500 hover:text-warning-600 focus:text-warning-700',
      }[purpose]
    "
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
