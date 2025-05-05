import { twMerge } from "tailwind-merge";

import type { Meta, StoryObj } from "@storybook/react";

import { Theme, variants } from "@/components/Theme";

export default {
  component: Theme,
  title: "Components/Theme/Theme",
  argTypes: {
    variant: {},
    children: {},
  },
} satisfies Meta<typeof Theme>;

export const Example: StoryObj<typeof Theme> = {
  args: {
    variant: "green",
    children: (
      <div className="flex flex-wrap gap-4">
        <div className="text-theme-800 bg-theme-200 border-theme-600/25 shadow-theme-800/10 hover:bg-theme-300 active:bg-theme-400 inline-block cursor-pointer select-none rounded border p-1 px-3 shadow transition">
          example
        </div>

        {Object.entries(variants).map(([variantKey, variantClassname]) => (
          <div
            key={variantKey}
            className={twMerge(
              "text-theme-800 bg-theme-200 border-theme-600/25 shadow shadow-theme-800/10 inline-block rounded border p-1 px-3 cursor-pointer hover:bg-theme-300 active:bg-theme-400 transition select-none",
              variantClassname,
            )}
          >
            {variantKey}
          </div>
        ))}
      </div>
    ),
  },
};
