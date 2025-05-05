import reactDocgenTypescript from "@joshwooding/vite-plugin-react-docgen-typescript";

import type { StorybookConfig } from "@storybook/react-vite";

export default {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  docs: { autodocs: true },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
    },
  },
  viteFinal: (config) => {
    config.plugins?.push(
      reactDocgenTypescript({
        EXPERIMENTAL_useProjectService: true,
      }),
    );

    return config;
  },
} satisfies StorybookConfig;
