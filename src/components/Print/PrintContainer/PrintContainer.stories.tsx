import { PrintContainer } from "@/components/Print/PrintContainer/PrintContainer";
import { PrintPage } from "@/components/Print/PrintPage/PrintPage";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: PrintContainer,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof PrintContainer>;

export const SimpleContainer: StoryObj<typeof PrintContainer> = {
  args: {
    children: "Example",
  },
};

export const PageContainer: StoryObj<typeof PrintContainer> = {
  args: {
    children: <PrintPage>Example</PrintPage>,
  },
};
