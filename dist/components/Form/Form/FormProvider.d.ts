import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
interface ContextProps {
    focused?: boolean;
    setFocused?: Dispatch<SetStateAction<boolean>>;
}
export declare const FormContext: import("react").Context<ContextProps>;
export declare function FormProvider({ children }: PropsWithChildren): import("react/jsx-runtime").JSX.Element;
export {};
