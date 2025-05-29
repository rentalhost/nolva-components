import { InputSearch } from "@/components/Generic/InputSearch/InputSearch";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: InputSearch,
} satisfies Meta<typeof InputSearch>;

export const Example: StoryObj<typeof InputSearch> = {
  args: {
    inputPlaceholder: "Type to search...",
  },
};
