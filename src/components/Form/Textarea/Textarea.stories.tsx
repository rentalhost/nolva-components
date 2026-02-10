import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "@/components/Form/Textarea/Textarea";

export default {
  component: Textarea,
} satisfies Meta<typeof Textarea>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Example: StoryObj<typeof Textarea> = {
  args: {
    placeholder: "Example",
  },
};
