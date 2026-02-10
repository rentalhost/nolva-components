import type { Meta, StoryObj } from "@storybook/react";

import { PrintContainer } from "@/components/Print/PrintContainer/PrintContainer";
import { PrintPage } from "@/components/Print/PrintPage/PrintPage";

export default {
  component: PrintContainer,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof PrintContainer>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const SimpleContainer: StoryObj<typeof PrintContainer> = {
  args: {
    children: "Example",
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const PageContainer: StoryObj<typeof PrintContainer> = {
  args: {
    children: <PrintPage>Example</PrintPage>,
  },
};
