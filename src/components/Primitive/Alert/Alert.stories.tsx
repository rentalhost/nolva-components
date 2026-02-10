import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "@/components/Primitive/Alert/Alert";

export default {
  component: Alert,
} satisfies Meta<typeof Alert>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Example: StoryObj<typeof Alert> = {
  args: {
    title: "Error",
    variant: "error",
    children: (
      <>
        <li>Example</li>

        <li>
          Example Example Example Example Example Example Example Example
          Example Example Example Example Example Example Example Example
          Example Example Example Example Example Example Example Example
          Example Example Example Example Example Example Example Example
          Example Example Example Example Example Example Example Example
          Example Example Example Example Example Example Example Example
          Example Example Example Example Example Example Example Example
        </li>

        <li>Example</li>
      </>
    ),
  },
};
