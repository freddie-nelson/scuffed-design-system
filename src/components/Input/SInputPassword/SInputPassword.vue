<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import { Icon } from "@iconify/vue";
import showIcon from "@iconify-icons/feather/eye";
import hideIcon from "@iconify-icons/feather/eye-off";

import SInputText from "../SInputText/SInputText.vue";

export default defineComponent({
  name: "SInputPassword",
  inheritAttrs: false,
  components: { Icon, SInputText },
  setup(props, { attrs }) {
    const type = ref("password");

    const rootAttrs = computed(() => {
      const a = { class: attrs.class };
      return a;
    });

    const inputAttrs = computed(() => {
      const a = { ...attrs, class: "" };
      return a;
    });

    return {
      type,

      rootAttrs,
      inputAttrs,

      icons: {
        show: showIcon,
        hide: hideIcon,
      },
    };
  },
});
</script>

<template>
  <div class="relative flex items-center" v-bind="rootAttrs">
    <s-input-text class="w-full" v-bind="inputAttrs" :type="type" />

    <button
      class="absolute right-0.5 p-3 w-11 h-11 rounded-lg outline-none bg-neutral-50 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 transition-colors duration-300"
      @click="type === 'password' ? (type = 'text') : (type = 'password')"
    >
      <Icon :icon="type === 'password' ? icons.hide : icons.show" />
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
