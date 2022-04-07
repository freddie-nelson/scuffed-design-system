<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SFormMessage",
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
  <p
    class="inline-flex justify-center items-center py-3 px-7 font-medium rounded-lg border-2 bg-opacity-5"
    :class="
      {
        primary: 'text-primary-600  border-primary-600 bg-primary-600',
        secondary: 'text-secondary-500  border-secondary-500 bg-secondary-500',
        success: 'text-success-500 border-success-500 bg-success-500',
        danger: 'text-danger-500  border-danger-500 bg-danger-500',
        warning: 'text-warning-500  border-warning-500 bg-warning-500',
      }[purpose]
    "
  >
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped></style>
