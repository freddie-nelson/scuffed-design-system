import SHeadingGradient from "./SHeadingGradient.vue";

export default {
  title: "Components/Heading/Gradient",
  component: SHeadingGradient,
};

const Template = (args) => ({
  components: { SHeadingGradient },
  setup() {
    return { args };
  },
  template: `
    <s-heading-gradient class="text-5xl" :level="1">Gradient Heading</s-heading-gradient>
  `,
});

export const Default = Template.bind({});
Default.args = {};
