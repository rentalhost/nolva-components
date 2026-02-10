import type { Meta, StoryObj } from "@storybook/react";

import { ScrollProgress } from "@/components/Surface/ScrollProgress/ScrollProgress";

export default {
  component: ScrollProgress,
} satisfies Meta<typeof ScrollProgress>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Example: StoryObj<typeof ScrollProgress> = {
  render(args) {
    return (
      <>
        <div className="h-[125vh]" />

        <ScrollProgress {...args} />

        <div className="h-[125vh]" />
      </>
    );
  },
  args: {
    children: <div className="h-[200vh] bg-red-100">Example</div>,
  },
};
