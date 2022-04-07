import SToastBar from "./SToastBar.vue";

export default {
  title: "Components/Toast/Bar",
  component: SToastBar,
};

const Template = (args) => ({
  components: { SToastBar },
  setup() {
    return { args };
  },
  template: `
    <s-toast-bar v-bind="args">Hello, this is a toast!</s-toast-bar>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Timer = Template.bind({});
Timer.args = { duration: 5000 };

export const Closeable = Template.bind({});
Closeable.args = { closeable: true };
