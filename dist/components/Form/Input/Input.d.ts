import type { ComponentProps } from "react";
type InputCheckbox = "checkbox";
type InputColor = "color";
type InputDate = "date" | "datetime-local" | "month" | "time" | "week";
type InputFile = "file";
type InputHidden = "hidden";
type InputNumber = "number";
type InputRadio = "radio";
type InputRange = "range";
type InputText = "email" | "password" | "search" | "tel" | "text" | "url";
interface InputTextProps extends ComponentProps<"input"> {
    /**
     * Input type.
     */
    type?: InputCheckbox | InputColor | InputDate | InputFile | InputHidden | InputNumber | InputRadio | InputRange | InputText;
}
type Props = InputTextProps;
export declare function Input({ type, placeholder, className, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
