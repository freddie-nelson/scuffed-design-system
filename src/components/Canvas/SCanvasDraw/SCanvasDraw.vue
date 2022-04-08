<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, reactive } from "vue";
import { useMouse, Mouse } from "../../../utils/useMouse";

export default defineComponent({
  name: "SCanvasDraw",
  components: {},
  props: {
    brushColor: {
      type: String,
      default: "black",
    },
    brushSize: {
      type: Number,
      default: 20,
    },
  },
  emits: ["paint"],
  setup(props, { emit }) {
    const canvas = ref(document.createElement("canvas"));
    let ctx: CanvasRenderingContext2D | null = null;

    const drawPath = (e?: MouseEvent) => {
      if (!ctx) return;

      ctx.beginPath();
      ctx.moveTo(mouse.lastX, mouse.lastY);
      ctx.strokeStyle = props.brushColor;
      ctx.lineWidth = props.brushSize;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();

      emit("paint", {
        startX: mouse.lastX,
        startY: mouse.lastY,
        endX: mouse.x,
        endY: mouse.y,
      });
    };

    const mouse = reactive<Mouse>({
      pressed: false,
      x: 0,
      y: 0,
      lastX: 0,
      lastY: 0,
      onMouseDown: drawPath,
      onMouseMove: (e?: MouseEvent) => {
        if (mouse.pressed) drawPath();
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

      const temp = useMouse(canvas.value, mouse);
      stopMouse = temp.stopMouse;
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
