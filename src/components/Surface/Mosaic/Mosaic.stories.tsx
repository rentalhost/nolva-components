import { range } from "@rentalhost/rheactor-core";

import type { Meta, StoryObj } from "@storybook/react";

import { Mosaic } from "@/components/Surface/Mosaic/Mosaic";

export default {
  component: Mosaic,
} satisfies Meta<typeof Mosaic>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Example: StoryObj<typeof Mosaic> = {
  args: {
    duration: 2500,
    shuffle: true,
    className: "sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4",
    children: range(1, 21).map((value) => (
      <div
        className="flex aspect-video items-center justify-center rounded border shadow-lg outline"
        key={value}
      >
        {value}
      </div>
    )),
  },
};
