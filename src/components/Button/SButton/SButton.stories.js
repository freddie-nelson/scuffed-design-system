import SButton from "./SButton.vue";

export default {
  title: "Components/Button",
  component: SButton,
};

const Template = (args) => ({
  components: { SButton },
  setup() {
    return { args };
  },
  template: '<s-button class="py-4" v-bind="args">Button</s-button>',
});

export const Primary = Template.bind({});
Primary.args = { purpose: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { purpose: "secondary" };

export const Success = Template.bind({});
Success.args = { purpose: "success" };

export const Danger = Template.bind({});
Danger.args = { purpose: "danger" };

export const Warning = Template.bind({});
Warning.args = { purpose: "warning" };
