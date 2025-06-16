import { Select } from "@/components/Form/Select/Select";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Select,
} satisfies Meta<typeof Select>;

export const Example: StoryObj<typeof Select> = {
  args: {
    placeholder: "Example Placeholder",
    options: [
      { title: "Option 1" },
      { title: "Option 2" },
      { title: "Option 3" },
      {},
      {
        title:
          "Very Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Option",
        className: "bg-green-200",
      },
    ],
  },
};
