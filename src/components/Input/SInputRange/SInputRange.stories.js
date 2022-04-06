import { ref } from "vue";
import SInputRange from "./SInputRange.vue";
import tailwindConfig from "../../../../tailwind.config";

export default {
  title: "Components/Input/Range",
  component: SInputRange,
};

const Template = (args) => ({
  components: { SInputRange },
  setup() {
    return { value: ref(50), args };
  },
  template: `
    <s-input-range v-model="value" v-bind="args" />

    <p class="mt-3">{{ value }}</p>
  `,
});

export const Default = Template.bind({});
Default.args = { tailwindConfig };
