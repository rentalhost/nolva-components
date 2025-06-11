import { Form } from "@/components/Form/Form/Form";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Form,
} satisfies Meta<typeof Form>;

export const Example: StoryObj<typeof Form> = {
  args: {
    children: "Example",
  },
};
