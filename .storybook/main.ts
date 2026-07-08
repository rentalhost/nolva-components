import type { StorybookConfig } from "@storybook/nextjs";

export default {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  typescript: {
    reactDocgen: "react-docgen",
  },
  staticDirs: ["../public"],
} satisfies StorybookConfig;
