import SButtonOutline from "./SButtonOutline.vue";

export default {
  title: "Components/Button/Outline",
  component: SButtonOutline,
};

const Template = (args) => ({
  components: { SButtonOutline },
  setup() {
    return { args };
  },
  template:
    '<s-button-outline class="py-4" v-bind="args">Button</s-button-outline>',
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
