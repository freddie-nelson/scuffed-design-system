<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, reactive } from "vue";
import { useMouse, Mouse } from "../../../utils/useMouse";

export default defineComponent({
  name: "SCanvasCircles",
  components: {},
  props: {
    fadeOut: {
      type: Boolean,
      default: false,
    },
    fadeOutInterval: {
      type: Number,
      default: 1000 / 30,
    },
    useBody: {
      type: Boolean,
      default: false,
    },
    brushColor: {
      type: String,
      default: "black",
    },
    brushSize: {
      type: Number,
      default: 20,
    },
    bgFill: {
      type: String,
      default: "rgba(255,255,255,0.17)",
    },
  },
  emits: ["paint"],
  setup(props, { emit }) {
    const canvas = ref(document.createElement("canvas"));
    let ctx: CanvasRenderingContext2D | null = null;

    const drawCircle = (e?: MouseEvent) => {
      if (!ctx) return;

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, props.brushSize, 0, 2 * Math.PI, false);
      ctx.fillStyle = props.brushColor;
      ctx.fill();

      emit("paint", { x: mouse.x, y: mouse.y });
    };

    const mouse = reactive<Mouse>({
      pressed: false,
      x: -100,
      y: -100,
      lastX: 0,
      lastY: 0,
      onMouseDown: () => drawCircle(),
      onMouseMove: (e?: MouseEvent) => {
        if (mouse.pressed) drawCircle(e);
      },
    });

    let stopMouse = () => {
      return;
    };

    const setupCanvas = () => {
      canvas.value.width = canvas.value.clientWidth;
      canvas.value.height = canvas.value.clientHeight;

      ctx = canvas.value.getContext("2d");
      if (!ctx) return;

      const element = props.useBody ? document.body : canvas.value;

      const temp = useMouse(element, mouse);
      stopMouse = temp.stopMouse;
    };

    const fadeOut = () => {
      if (!ctx) return;

      ctx.fillStyle = props.bgFill;
      ctx.fillRect(0, 0, canvas.value?.width, canvas.value?.height);

      if (canvas.value && props.fadeOut)
        setTimeout(fadeOut, props.fadeOutInterval);
    };

    const resizeObserver = new ResizeObserver(() => {
      const data = canvas.value.toDataURL();
      canvas.value.width = canvas.value.clientWidth;
      canvas.value.height = canvas.value.clientHeight;

      const image = new Image(canvas.value.width, canvas.value.height);
      image.src = data;
      image.onload = () => ctx?.drawImage(image, 0, 0);
    });

    onMounted(() => {
      setupCanvas();

      if (props.fadeOut) {
        fadeOut();
      }

      resizeObserver.observe(canvas.value);
    });

    onUnmounted(() => {
      resizeObserver.disconnect();

      stopMouse();
    });

    return { canvas };
  },
});
</script>

<template>
  <canvas ref="canvas" class="w-full h-full"></canvas>
</template>

<style lang="scss" scoped></style>
