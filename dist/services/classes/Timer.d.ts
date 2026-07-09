export declare class Timer {
    private readonly callback;
    private readonly delay;
    private interval;
    constructor(callback: () => void, delay: number, shouldImmediate?: boolean);
    start(shouldImmediate?: boolean): void;
    stop(): void;
}
