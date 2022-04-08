import SSpinnerDots from "./SSpinnerDots.vue";

export default {
  title: "Components/Spinner/Dots",
  component: SSpinnerDots,
};

const Template = (args) => ({
  components: { SSpinnerDots },
  setup() {
    return { args };
  },
  template: `
    <s-spinner-dots />
  `,
});

export const Default = Template.bind({});
Default.args = {};
