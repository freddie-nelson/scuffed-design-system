import { ref } from "vue";
import SInputSelect from "./SInputSelect.vue";

export default {
  title: "Components/Input/Select",
  component: SInputSelect,
};

const Template = (args) => ({
  components: { SInputSelect },
  setup() {
    return {
      value: ref(""),
      options: ref([
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5",
      ]),
      args,
    };
  },
  template: `
    <s-input-select class="w-max" v-model="value" :options="options" v-bind="args" />

    <p class="mt-3">{{ value }}</p>
  `,
});

export const Default = Template.bind({});
Default.args = { placeholder: "Select Option" };
