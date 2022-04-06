import { ref } from "vue";
import SInputText from "./SInputText.vue";

export default {
  title: "Components/Input/Text",
  component: SInputText,
};

const Template = (args) => ({
  components: { SInputText },
  setup() {
    return { value: ref(""), args };
  },
  template: `
    <s-input-text v-model="value" v-bind="args" />

    <p class="mt-3">{{ value }}</p>
  `,
});

export const Default = Template.bind({});
Default.args = { placeholder: "Type something..." };
