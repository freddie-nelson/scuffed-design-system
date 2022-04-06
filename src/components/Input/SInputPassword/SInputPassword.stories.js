import { ref } from "vue";
import SInputPassword from "./SInputPassword.vue";

export default {
  title: "Components/Input/Password",
  component: SInputPassword,
};

const Template = (args) => ({
  components: { SInputPassword },
  setup() {
    return { value: ref(""), args };
  },
  template: `
    <s-input-password class="w-max" v-model="value" v-bind="args" />

    <p class="mt-3">{{ value }}</p>
  `,
});

export const Default = Template.bind({});
Default.args = { placeholder: "Type something secure..." };
