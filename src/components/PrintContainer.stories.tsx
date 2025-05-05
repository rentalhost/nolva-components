import type { Meta, StoryObj } from "@storybook/react";

import { PrintContainer } from "@/components/PrintContainer";
import { PrintPage } from "@/components/PrintPage";

export default {
  component: PrintContainer,
  title: "Components/Print/PrintContainer",
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
