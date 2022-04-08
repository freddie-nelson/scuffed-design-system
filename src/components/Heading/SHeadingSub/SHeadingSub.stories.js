import SHeadingSub from "./SHeadingSub.vue";

export default {
  title: "Components/Heading/Sub",
  component: SHeadingSub,
};

const Template = (args) => ({
  components: { SHeadingSub },
  setup() {
    return { args };
  },
  template: `
    <s-heading-sub class="text-4xl" :level="1">Sub Heading</s-heading-sub>
  `,
});

export const Default = Template.bind({});
Default.args = {};
