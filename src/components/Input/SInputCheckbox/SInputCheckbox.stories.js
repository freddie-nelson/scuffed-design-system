import { ref } from "vue";
import SInputCheckbox from "./SInputCheckbox.vue";

export default {
  title: "Components/Input/Checkbox",
  component: SInputCheckbox,
};

const Template = (args) => ({
  components: { SInputCheckbox },
  setup() {
    return { value: ref(false), args };
  },
  template: `
    <s-input-checkbox v-model="value" v-bind="args" />

    <p class="mt-3">{{ value }}</p>
  `,
});

export const Default = Template.bind({});
Default.args = {};
