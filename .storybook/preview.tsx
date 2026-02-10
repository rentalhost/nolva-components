import "@storybook/preview.css";

import type { Preview } from "@storybook/react";

export default {
  tags: ["autodocs"],
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: { width: "320px", height: "640px" },
        },
        tablet: {
          name: "Tablet",
          styles: { width: "768px", height: "1024px" },
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1400px", height: "1024px" },
        },
      },
    },
    controls: {
      expanded: true,
      disableSaveFromUI: true,
    },
    backgrounds: {
      grid: {
        cellSize: 4,
        cellAmount: 4,
        opacity: 0.1,
      },
    },
  },
  argTypesEnhancers: [
    (context) => {
      for (const argType of Object.values(context.argTypes)) {
        argType.mapping ??= {};

        if (argType.type !== undefined) {
          if (
            argType.type.name === "enum" &&
            argType.type.value.includes("ReactPortal")
          ) {
            argType.control = { disable: true };
            argType.table!.type!.summary = "ReactNode";
          } else if (
            argType.type.name === "enum" &&
            argType.type.value.includes("string")
          ) {
            argType.control = { type: "text" };
          } else if (
            argType.type.name === "enum" &&
            argType.type.value.includes("false") &&
            argType.type.value.includes("true")
          ) {
            argType.mapping["true"] = true;
            argType.mapping["false"] = false;
          }
        }
      }

      return context.argTypes;
    },
  ],
} satisfies Preview;
