import type { ReactElement } from "react";
export type Resolve<T> = (value: T) => void;
export type Resolver<T> = (resolve: Resolve<T>) => ReactElement;
export declare function promisePortal<T>(resolver: Resolver<T>): Promise<T>;
export declare function promiseElement(node: ReactElement): Promise<HTMLElement>;
