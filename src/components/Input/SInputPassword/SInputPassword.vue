<script lang="ts">
import { defineComponent, ref } from "vue";

import { Icon } from "@iconify/vue";
import showIcon from "@iconify-icons/feather/eye";
import hideIcon from "@iconify-icons/feather/eye-off";

import SInputText from "../SInputText/SInputText.vue";

export default defineComponent({
  name: "SInputPassword",
  inheritAttrs: false,
  components: { Icon, SInputText },
  // props: {
  //   modelValue: {
  //     type: String,
  //     required: true,
  //   },
  // },
  setup() {
    const type = ref("password");

    return {
      type,

      icons: {
        show: showIcon,
        hide: hideIcon,
      },
    };
  },
});
</script>

<template>
  <div class="relative flex items-center w-max">
    <s-input-text v-bind="$attrs" :type="type" />

    <Icon
      class="absolute right-0.5 p-3 w-11 h-11 rounded-lg cursor-pointer bg-neutral-50 text-neutral-500 hover:text-neutral-700 transition-colors duration-300"
      :icon="type === 'password' ? icons.hide : icons.show"
      @click="type === 'password' ? (type = 'text') : (type = 'password')"
    />
  </div>
</template>

<style lang="scss" scoped></style>
