import type { Meta, StoryObj } from "@storybook/react";

import { BackButton } from "@/components/Generic/BackButton/BackButton";

export default {
  component: BackButton,
} satisfies Meta<typeof BackButton>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Example: StoryObj<typeof BackButton> = {
  args: {
    fallbackRoute: "https://google.com",
  },
};
