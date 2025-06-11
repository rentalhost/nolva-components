import { Label } from "@/components/Form/Label/Label";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Label,
} satisfies Meta<typeof Label>;

export const Example: StoryObj<typeof Label> = {
  args: {
    title: "Example",
    children: <input type="text" className="w-full outline" />,
  },
};

export const RequiredExample: StoryObj<typeof Label> = {
  args: {
    title: "Example",
    required: true,
    children: <input type="text" required className="w-full outline" />,
  },
};
