import { Textarea } from "@/components/Form/Textarea/Textarea";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export const Example: StoryObj<typeof Textarea> = {
  args: {
    placeholder: "Example",
  },
};
