import SHeading from "./SHeading.vue";

export default {
  title: "Components/Heading/Heading",
  component: SHeading,
};

const Template = (args) => ({
  components: { SHeading },
  setup() {
    return { args };
  },
  template: `
    <s-heading class="text-5xl" :level="1" v-bind="args">Heading</s-heading>
  `,
});

export const Default = Template.bind({});
Default.args = {};
