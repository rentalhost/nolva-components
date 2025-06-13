import { FaMagnifyingGlass } from "react-icons/fa6";

import { twMerge } from "@/services/TailwindMergeService";

import type { FormHTMLAttributes, ReactNode } from "react";

interface Props {
  /**
   * The class name that will be appended to the container element.
   */
  className?: string;

  /**
   * The URL that the form data will be submitted to.
   */
  formAction?: FormHTMLAttributes<HTMLFormElement>["action"];

  /**
   * The method in which the form data will be submitted.
   *
   * Defaults to `get`.
   */
  formMethod?: FormHTMLAttributes<HTMLFormElement>["method"];

  /**
   * The class name that will be appended to the search icon.
   */
  iconClassName?: string;

  /**
   * The name of the search input.
   */
  inputName?: string;

  /**
   * The default value of the search input.
   */
  inputDefaultValue?: string;

  /**
   * The class name that will be appended to the search input.
   */
  inputClassName?: string;

  /**
   * The placeholder text of the search input.
   */
  inputPlaceholder?: string;

  /**
   * The class name that will be appended to the search button.
   */
  buttonClassName?: string;

  /**
   * The text of the search button.
   */
  buttonText?: ReactNode;
}

export function InputSearch({
  className,
  formAction,
  formMethod = "get",
  iconClassName,
  inputName = "search",
  inputDefaultValue,
  inputClassName,
  inputPlaceholder,
  buttonClassName,
  buttonText = "Search",
}: Props) {
  return (
    <form
      action={formAction}
      method={formMethod}
      suppressHydrationWarning
      data-component="InputSearch"
      className={twMerge(
        "border-theme-100 has-focus:border-theme-300 group relative flex rounded border transition bg-white",
        className,
      )}
    >
      <div
        className={twMerge(
          "text-theme-600 group-has-focus:text-theme-800 pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center px-3 transition",
          iconClassName,
        )}
      >
        <FaMagnifyingGlass />
      </div>

      <input
        type="search"
        name={inputName}
        defaultValue={inputDefaultValue}
        suppressHydrationWarning
        className={twMerge(
          "w-full pl-9 focus:outline-none py-1.5",
          inputClassName,
        )}
        placeholder={inputPlaceholder}
      />

      <button
        type="submit"
        className={twMerge(
          "text-theme-800 hover:text-theme-900 active:text-theme-950 cursor-pointer px-3 font-medium",
          buttonClassName,
        )}
      >
        {buttonText}
      </button>
    </form>
  );
}
