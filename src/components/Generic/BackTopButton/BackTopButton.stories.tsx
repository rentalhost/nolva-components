import type { Meta, StoryObj } from "@storybook/react";

import { BackTopButton } from "@/components/Generic/BackTopButton/BackTopButton";

export default {
  component: BackTopButton,
} satisfies Meta<typeof BackTopButton>;

// eslint-disable-next-line @typescript-eslint/naming-convention
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
