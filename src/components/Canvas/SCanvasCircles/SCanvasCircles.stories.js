import SCanvasCircles from "./SCanvasCircles.vue";

export default {
  title: "Components/Canvas/Circles",
  component: SCanvasCircles,
};

const Template = (args) => ({
  components: { SCanvasCircles },
  setup() {
    return { args };
  },
  template: `
    <s-canvas-circles v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {};
