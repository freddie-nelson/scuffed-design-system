import SToastController from "./SToastController.vue";
import SButton from "../../Button/SButton/SButton.vue";

import Toast from "./Toast";
import ToastController from "./ToastController";

export default {
  title: "Components/Toast/Controller",
  component: SToastController,
};

const Template = (args) => ({
  components: {
    SToastController,
    SButton,
  },
  setup() {
    const addToast = () => {
      const duration = Math.floor(Math.random() * 5000);
      const toast = new Toast(
        "Hello, this is a toast! - " + Math.random().toString().split(".")[1],
        true,
        duration > 2000 ? duration : 0
      );

      ToastController.addToast(toast);
    };

    return {
      addToast,
      args,
    };
  },
  template: `
    <s-toast-controller v-bind="args" />

    <div class="w-full h-full flex justify-center items-center">
      <s-button class="py-4 mt-auto mb-2" @click="addToast">Add Toast</s-button>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
