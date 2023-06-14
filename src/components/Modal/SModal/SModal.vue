<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import useComponentEvent from "../../../utils/useComponentEvent";

import { Icon } from "@iconify/vue";
import closeIcon from "@iconify-icons/feather/x";

export default defineComponent({
  name: "SModal",
  inheritAttrs: false,
  components: { Icon },
  props: {
    noTeleport: {
      type: Boolean,
      default: false,
    },
    teleport: {
      type: String,
      default: "body",
    },
    open: {
      type: Boolean,
      default: false,
    },
    closeable: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const open = computed(() => props.open);
    let overflow = "";

    watch(open, (open) => {
      if (open) {
        if (document.activeElement)
          (document.activeElement as HTMLElement).blur();

        overflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = overflow;
      }
    });

    useComponentEvent(ref(document.body), "keyup", (e) => {
      if ((e as KeyboardEvent).key === "Escape") {
        emit("close");
      }
    });

    return {
      icons: {
        close: closeIcon,
      },
    };
  },
});
</script>

<template>
  <teleport :disable="noTeleport" :to="teleport">
    <transition name="fade">
      <div
        v-if="open"
        class="fixed top-0 left-0 w-full h-full bg-neutral-900 bg-opacity-20 flex justify-center items-center z-40"
        aria-modal="true"
        role="dialog"
      >
        <div class="p-14 bg-neutral-50 rounded-lg relative" v-bind="$attrs">
          <button
            v-if="closeable"
            class="absolute right-4 top-4 w-6 h-6 text-neutral-900 hover:text-primary-400 focus:text-primary-500 transition-colors duration-300 outline-none"
            type="button"
            @click="$emit('close')"
          >
            <Icon class="w-full h-full" :icon="icons.close" />
          </button>

          <!-- content -->
          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
