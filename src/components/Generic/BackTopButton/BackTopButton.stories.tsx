import { BackTopButton } from "@/components/Generic/BackTopButton/BackTopButton";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: BackTopButton,
} satisfies Meta<typeof BackTopButton>;

export const Example: StoryObj<typeof BackTopButton> = {
  render(args) {
    return (
      <>
        <div className="h-[200vh]" />

        <BackTopButton {...args} />
      </>
    );
  },
};
