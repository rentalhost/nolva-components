import { Section } from "@/components/Surface/Section/Section";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Section,
} satisfies Meta<typeof Section>;

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
    noMargin: true,
  },
};
