import type { Meta, StoryObj } from "@storybook/react";

import { InputSearch } from "@/components/Generic/InputSearch/InputSearch";

export default {
  component: InputSearch,
} satisfies Meta<typeof InputSearch>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Example: StoryObj<typeof InputSearch> = {
  args: {
    inputPlaceholder: "Type to search...",
  },
};
