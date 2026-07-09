import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
interface ContextProperties {
    focused?: boolean;
    setFocused?: Dispatch<SetStateAction<boolean>>;
}
export declare const FormContext: import("react").Context<ContextProperties>;
export declare function FormProvider({ children }: PropsWithChildren): import("react").JSX.Element;
export {};
