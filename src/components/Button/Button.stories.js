import Button from "./Button.vue";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args"/>',
});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};
