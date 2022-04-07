import SFormMessage from "./SFormMessage.vue";

export default {
  title: "Components/Form/Message",
  component: SFormMessage,
};

const Template = (args) => ({
  components: { SFormMessage },
  setup() {
    return { args };
  },
  template: `
    <s-form-message v-bind="args">This is a message to the user.</s-form-message>
  `,
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
