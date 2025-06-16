import { FaChevronDown } from "react-icons/fa6";

import { inputClassName } from "@/components/Form/fixtures";
import { twMerge } from "@/services/TailwindMergeService";

import type { ComponentProps } from "react";

interface Props extends ComponentProps<"select"> {
  /**
   * The placeholder of the select.
   */
  placeholder?: string;

  /**
   * The options of the select.
   */
  options: SelectOption[];

  /**
   * The className of the option.
   */
  className?: string;

  /**
   * The className of the arrow.
   */
  arrowClassName?: string;
}

interface SelectOption {
  /**
   * The title of the option.
   */
  title?: string;

  /**
   * The value of the option.
   *
   * Defaults to same as `title`.
   */
  value?: string;

  /**
   * The className of the option.
   */
  className?: string;
}

export function Select({
  placeholder,
  options,
  className,
  arrowClassName,
  ...props
}: Props) {
  return (
    <div className="relative">
      <select
        defaultValue=""
        className={twMerge(inputClassName, "appearance-none pr-11", className)}
        {...props}
      >
        {placeholder !== undefined && (
          <>
            <option disabled value="" className="text-theme-400">
              {placeholder}
            </option>

            <option disabled value="-" />
          </>
        )}

        {options.map((option, optionIndex) => (
          <option
            // eslint-disable-next-line react/no-array-index-key
            key={`${optionIndex}.${option.value ?? option.title ?? "-"}`}
            value={option.value ?? option.title ?? "-"}
            disabled={option.title === undefined}
            className={option.className}
          >
            {option.title}
          </option>
        ))}
      </select>

      <div
        className={twMerge(
          "text-theme-500 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2",
          arrowClassName,
        )}
      >
        <FaChevronDown className="size-3" />
      </div>
    </div>
  );
}
