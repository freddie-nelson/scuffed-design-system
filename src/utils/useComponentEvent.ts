import { onMounted, onUnmounted, Ref } from "vue";

export default function (
  element: Ref<HTMLElement>,
  event: keyof HTMLElementEventMap,
  callback: (e: Event) => void,
  opts: any = {}
) {
  onMounted(() => {
    element.value.addEventListener(event, callback, opts);
  });

  onUnmounted(() => {
    element.value.removeEventListener(event, callback, opts);
  });
}
