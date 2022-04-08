import { ref } from "vue";

import SModal from "./SModal.vue";
import SButton from "../../Button/SButton/SButton.vue";

export default {
  title: "Components/Modal/Modal",
  component: SModal,
};

const Template = (args) => ({
  components: { SModal, SButton },
  setup() {
    return { open: ref(false), args };
  },
  template: `
    <s-modal :open="open" @close="open = false" v-bind="args">
      <h1 class="text-2xl font-medium">Hello, this is a modal!</h1>
    </s-modal>

    <s-button class="py-4 absolute bottom-2 left-0 right-0 mx-auto w-max" @click="open = true">Open Modal</s-button>
  `,
});

export const Default = Template.bind({});
Default.args = {};
