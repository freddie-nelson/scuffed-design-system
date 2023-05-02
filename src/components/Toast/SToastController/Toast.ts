export default class Toast {
  id = Math.random().toString().slice(2);
  text: string;
  closeable: boolean;
  duration: number;

  action?: { text: string; callback: () => void };

  constructor(
    text: string,
    closeable = false,
    duration = 0,
    action?: { text: string; callback: () => void }
  ) {
    this.text = text;
    this.closeable = closeable;
    this.duration = duration;
    this.action = action;
  }
}
