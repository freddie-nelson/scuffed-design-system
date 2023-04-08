<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SInputText",
  components: {},
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
});
</script>

<template>
  <input
    class="p-3 border-solid border-2 rounded-lg bg-neutral-50 text-neutral-700 border-neutral-300 focus:outline-none focus:border-primary-400 transition-colors duration-300"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style lang="scss" scoped></style>
