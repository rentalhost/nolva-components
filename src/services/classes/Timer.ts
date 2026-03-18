export class Timer {
  private interval: ReturnType<typeof setInterval> | null = null;

  public constructor(
    private readonly callback: () => void,
    private readonly delay: number,
    immediate = true,
  ) {
    this.start(immediate);
  }

  public start(immediate = false) {
    if (immediate) {
      queueMicrotask(this.callback);
    }

    this.stop();
    this.interval = setInterval(this.callback, this.delay);
  }

  public stop() {
    if (this.interval !== null) {
      clearInterval(this.interval);
    }
  }
}
