export declare class Timer {
    private readonly callback;
    private readonly delay;
    private interval;
    constructor(callback: () => void, delay: number, immediate?: boolean);
    start(immediate?: boolean): void;
    stop(): void;
}
