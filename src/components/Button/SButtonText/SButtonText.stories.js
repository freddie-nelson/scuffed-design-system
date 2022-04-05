import SButtonText from "./SButtonText.vue";

export default {
  title: "Components/ButtonText",
  component: SButtonText,
};

const Template = (args) => ({
  components: { SButtonText },
  setup() {
    return { args };
  },
  template: '<s-button-text v-bind="args">Button</s-button-text>',
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
