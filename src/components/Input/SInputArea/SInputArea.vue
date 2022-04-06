<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SInputArea",
  components: {},
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <textarea
    class="p-3 border-solid border-2 rounded-lg bg-neutral-50 text-neutral-700 border-neutral-300 focus:outline-none focus:border-primary-400 transition-colors duration-300"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <slot></slot>
  </textarea>
</template>

<style lang="scss" scoped></style>
