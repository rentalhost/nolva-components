import { Container } from "@/components/Primitive/Container/Container";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Container,
} satisfies Meta<typeof Container>;

export const Example: StoryObj<typeof Container> = {
  args: {
    children: "Example",
  },
};
