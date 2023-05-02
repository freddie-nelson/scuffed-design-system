<script lang="ts">
import { computed, defineComponent } from "vue";

import Toast from "./Toast";
import ToastController from "./ToastController";

import SToastBar from "../SToastBar/SToastBar.vue";

export default defineComponent({
  name: "SToastController",
  components: { SToastBar },
  setup() {
    return {
      toasts: computed(() => [...ToastController.toasts.value].reverse()),
      removeToast: (toast: Toast) => ToastController.removeToast(toast),
    };
  },
});
</script>

<template>
  <div id="toasts" class="absolute top-0 w-full p-2">
    <transition-group name="fade" tag="div" class="w-full relative">
      <s-toast-bar
        v-for="toast in toasts"
        :key="toast.id"
        :closeable="toast.closeable"
        :duration="toast.duration"
        :action="toast.action"
        @close="removeToast(toast)"
        class="w-full mb-2 origin-top"
      >
        {{ toast.text }}
      </s-toast-bar>
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
