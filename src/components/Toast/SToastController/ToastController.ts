import { ref } from "vue";

import Toast from "./Toast";

export default abstract class ToastController {
  static readonly toasts = ref<Toast[]>([]);

  static addToast(toast: Toast): void {
    this.toasts.value.push(toast);
  }

  static removeToast(toast: Toast): void;

  static removeToast(index: number): void;

  static removeToast(toast: Toast | number): void {
    if (typeof toast === "number") {
      if (toast >= 0 && toast < this.toasts.value.length)
        this.toasts.value.splice(toast, 1);
    } else {
      const i = this.toasts.value.findIndex((t) => t === toast);
      if (i !== -1) this.toasts.value.splice(i, 1);
    }
  }
}
