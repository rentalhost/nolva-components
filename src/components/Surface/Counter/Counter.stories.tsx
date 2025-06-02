import { Counter } from "@/components/Surface/Counter/Counter";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Counter,
} satisfies Meta<typeof Counter>;

export const Example: StoryObj<typeof Counter> = {
  args: {
    from: 100,
    to: 333.39,
    decimals: 1,
    easing: "ease-out",
    className: "after:content-['_millions']",
  },
};
