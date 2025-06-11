import { Input } from "@/components/Form/Input/Input";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Input,
} satisfies Meta<typeof Input>;

export const Example: StoryObj<typeof Input> = {
  args: {
    placeholder: "Example",
  },
};

export const HiddenExample: StoryObj<typeof Input> = {
  args: {
    type: "hidden",
  },
};
