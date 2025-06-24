import { ScrollProgress } from "@/components/Surface/ScrollProgress/ScrollProgress";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: ScrollProgress,
} satisfies Meta<typeof ScrollProgress>;

export const Example: StoryObj<typeof ScrollProgress> = {
  render(args) {
    return (
      <>
        <div className="h-[200vh]" />

        <ScrollProgress {...args} />
      </>
    );
  },
};
