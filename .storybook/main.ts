import reactDocgenTypescript from "@joshwooding/vite-plugin-react-docgen-typescript";

import type { StorybookConfig } from "@storybook/react-vite";

export default {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
  ],
  docs: { autodocs: true },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (config) => {
    config.plugins?.push(
      reactDocgenTypescript({
        EXPERIMENTAL_useProjectService: true,
        shouldExtractLiteralValuesFromEnum: true,
        shouldExtractValuesFromUnion: true,
      }),
    );

    return config;
  },
} satisfies StorybookConfig;
