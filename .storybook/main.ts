import type { StorybookConfig } from "@storybook/nextjs";

export default {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  docs: {},
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: true,
      shouldRemoveUndefinedFromOptional: true,
    },
  },
  staticDirs: ["../public"],
} satisfies StorybookConfig;
