import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/components/Form/Input/Input";

export default {
  component: Input,
} satisfies Meta<typeof Input>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Example: StoryObj<typeof Input> = {
  args: {
    placeholder: "Example",
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const HiddenExample: StoryObj<typeof Input> = {
  args: {
    type: "hidden",
  },
};
