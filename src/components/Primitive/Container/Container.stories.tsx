import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "@/components/Primitive/Container/Container";

export default {
  component: Container,
} satisfies Meta<typeof Container>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Example: StoryObj<typeof Container> = {
  args: {
    children: "Example",
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const NoPaddingExample: StoryObj<typeof Container> = {
  args: {
    children: "Example",
    paddingX: 0,
  },
};
