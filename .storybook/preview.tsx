import "@storybook/preview.css";

import type { Preview } from "@storybook/react";

export default {
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      grid: {
        cellSize: 4,
        cellAmount: 4,
        opacity: 0.1,
      },
    },
  },
  argTypes: {
    children: {
      control: { disable: true },
    },
  },
} satisfies Preview;
