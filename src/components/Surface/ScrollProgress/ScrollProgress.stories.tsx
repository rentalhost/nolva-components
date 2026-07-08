import type { Meta, StoryObj } from "@storybook/react";

import { ScrollProgress } from "#/components/Surface/ScrollProgress/ScrollProgress";

export default {
  component: ScrollProgress,
} satisfies Meta<typeof ScrollProgress>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ExampleInside: StoryObj<typeof ScrollProgress> = {
  render(parameters) {
    return (
      <>
        <div className="h-[75vh]" />

        <ScrollProgress {...parameters} />

        <div className="h-[75vh]" />
      </>
    );
  },
  args: {
    children: <div className="h-[200vh] bg-red-100">Example</div>,
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ExampleMiddle: StoryObj<typeof ScrollProgress> = {
  render(parameters) {
    return (
      <>
        <div className="h-screen" />

        <ScrollProgress {...parameters} />

        <div className="h-screen" />
      </>
    );
  },
  args: {
    children: <div className="h-[200vh] bg-red-100">Example</div>,
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ExampleOutside: StoryObj<typeof ScrollProgress> = {
  render(parameters) {
    return (
      <>
        <div className="h-[125vh]" />

        <ScrollProgress {...parameters} />

        <div className="h-[125vh]" />
      </>
    );
  },
  args: {
    children: <div className="h-[200vh] bg-red-100">Example</div>,
  },
};
