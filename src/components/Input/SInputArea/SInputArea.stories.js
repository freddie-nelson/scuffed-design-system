import { ref } from "vue";
import SInputArea from "./SInputArea.vue";

export default {
  title: "Components/Input/Area",
  component: SInputArea,
};

const Template = (args) => ({
  components: { SInputArea },
  setup() {
    return { value: ref(""), args };
  },
  template: `
    <s-input-area v-model="value" v-bind="args" />

    <p class="mt-3 whitespace-pre">{{ value }}</p>
  `,
});

export const Default = Template.bind({});
Default.args = { placeholder: "Type something big..." };
