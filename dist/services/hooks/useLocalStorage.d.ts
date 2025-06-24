import type { Dispatch, SetStateAction } from "react";
export declare function useLocalStorage<T>(key: string, defaultValue?: undefined): readonly [T | undefined, Dispatch<SetStateAction<T>>];
