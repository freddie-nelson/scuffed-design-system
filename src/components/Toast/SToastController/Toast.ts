export default class Toast {
  text: string;
  closeable: boolean;
  duration: number;

  constructor(text: string, closeable = false, duration = 0) {
    this.text = text;
    this.closeable = closeable;
    this.duration = duration;
  }
}
