<script lang="ts">
import { computed, defineComponent } from "vue";

import { Icon } from "@iconify/vue";
import arrowIcon from "@iconify-icons/feather/chevron-down";

export default defineComponent({
  name: "SInputSelect",
  inheritAttrs: false,
  components: { Icon },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup(props, { attrs }) {
    const rootAttrs = computed(() => {
      const a = { class: attrs.class };
      return a;
    });

    const selectAttrs = computed(() => {
      const a = { ...attrs, class: "" };
      return a;
    });

    return {
      rootAttrs,
      selectAttrs,

      icons: {
        arrow: arrowIcon,
      },
    };
  },
});
</script>

<template>
  <div class="relative flex items-center" v-bind="rootAttrs">
    <select
      v-bind="selectAttrs"
      class="w-full relative p-3 pr-11 border-solid border-2 rounded-lg bg-neutral-50 text-neutral-700 border-neutral-300 focus:outline-none focus:border-primary-400 transition-colors duration-300 appearance-none cursor-pointer"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option v-if="placeholder" value="" selected>{{ placeholder }}</option>

      <option v-for="(option, i) in options" :key="i" :value="option">
        {{ option }}
      </option>
    </select>

    <Icon
      class="absolute right-3 w-6 h-6 rounded-lg text-neutral-400 pointer-events-none"
      :icon="icons.arrow"
    />
  </div>
</template>

<style lang="scss" scoped></style>
