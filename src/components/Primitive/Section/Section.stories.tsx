import type { Meta, StoryObj } from "@storybook/react";

import { Section } from "@/components/Primitive/Section/Section";

export default {
  component: Section,
} satisfies Meta<typeof Section>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Example: StoryObj<typeof Section> = {
  render: (args) => (
    <>
      <Section {...args} />

      <Section {...args} />

      <Section {...args} />
    </>
  ),
  args: {
    children: "Example",
    className: "outline",
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const NoMarginExample: StoryObj<typeof Section> = {
  render: (args) => (
    <>
      <Section {...args} />

      <Section {...args} />

      <Section {...args} />
    </>
  ),
  args: {
    children: "Example",
    className: "outline",
    marginY: 0,
  },
};
