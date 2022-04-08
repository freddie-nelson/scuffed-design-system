import SCanvasDraw from "./SCanvasDraw.vue";

export default {
  title: "Components/Canvas/Draw",
  component: SCanvasDraw,
};

const Template = (args) => ({
  components: { SCanvasDraw },
  setup() {
    return { args };
  },
  template: `
    <s-canvas-draw v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {};
