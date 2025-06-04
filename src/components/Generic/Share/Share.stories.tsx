import { Share } from "@/components/Generic/Share/Share";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Share,
} satisfies Meta<typeof Share>;

export const Example: StoryObj<typeof Share> = {};

export const ModifiedExample: StoryObj<typeof Share> = {
  args: {
    text: "Example:",
    title: "Example",
    url: "https://google.com",
    networks: ["x", "facebook", "linkedin"],
    className: "bg-blue-100 text-blue-800 h-10",
    networkClassName: "bg-blue-600 data-[network=linkedin]:bg-red-600",
  },
};
