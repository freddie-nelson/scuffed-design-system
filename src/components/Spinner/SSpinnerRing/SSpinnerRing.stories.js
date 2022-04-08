import SSpinnerRing from "./SSpinnerRing.vue";

import tailwindConfig from "../../../../tailwind.config";

export default {
  title: "Components/Spinner/Ring",
  component: SSpinnerRing,
};

const Template = (args) => ({
  components: { SSpinnerRing },
  setup() {
    return { tailwindConfig, args };
  },
  template: `
    <s-spinner-ring :tailwindConfig="tailwindConfig" v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {};
