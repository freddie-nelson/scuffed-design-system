<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";

import { Icon } from "@iconify/vue";
import tickIcon from "@iconify-icons/feather/check";

export default defineComponent({
  name: "SInputCheckbox",
  inheritAttrs: false,
  components: { Icon },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { attrs }) {
    const checked = ref(false);
    const modelValue = computed(() => props.modelValue);

    watch(modelValue, () => {
      checked.value = props.modelValue;
    });

    const inputAttrs = computed(() => {
      const a = { ...attrs, class: "" };
      return a;
    });

    const buttonAttrs = computed(() => {
      const a = { class: attrs.class };
      return a;
    });

    return {
      checked,

      inputAttrs,
      buttonAttrs,

      icons: {
        tick: tickIcon,
      },
    };
  },
});
</script>

<template>
  <div>
    <input
      v-bind="inputAttrs"
      class="hidden"
      type="checkbox"
      v-model="checked"
      @input="$emit('update:modelValue', checked)"
    />

    <button
      v-bind="buttonAttrs"
      :class="checked ? 'bg-primary-400' : 'bg-neutral-300'"
      class="w-9 h-9 p-1.5 rounded-md text-neutral-50 focus:outline-2 focus:outline-neutral-600 transition-colors duration-300"
      @click="
        checked = !checked;
        $emit('update:modelValue', checked);
      "
    >
      <Icon
        class="w-full h-full transition-opacity duration-300"
        :class="{ 'opacity-full': checked, 'opacity-0': !checked }"
        :icon="icons.tick"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
