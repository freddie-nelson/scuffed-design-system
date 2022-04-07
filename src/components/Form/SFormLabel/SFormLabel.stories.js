import SFormLabel from "./SFormLabel.vue";

export default {
  title: "Components/Form/Label",
  component: SFormLabel,
};

const Template = (args) => ({
  components: { SFormLabel },
  setup() {
    return { args };
  },
  template: `
    <s-form-label v-bind="args">Label</s-form-label>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Required = Template.bind({});
Required.args = { required: true };
