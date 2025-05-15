import { Animate } from "@/components/Animate/Animate/Animate";

import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

export default {
  component: Animate,
} satisfies Meta<typeof Animate>;

function exampleRender(args: ComponentProps<typeof Animate>) {
  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <Animate {...args} />

      <Animate {...args} />

      <Animate {...args} />

      <Animate {...args} />

      <Animate {...args} />

      <Animate {...args} />

      <Animate {...args} />

      <Animate {...args} />

      <Animate {...args} />

      <Animate {...args} />

      <Animate {...args} />

      <Animate {...args} />

      <Animate {...args} />

      <Animate {...args} />
    </div>
  );
}

export const Example: StoryObj<typeof Animate> = {
  render: exampleRender,
  args: {
    always: true,
    effect: "slideDown",
    children: (
      <div className="w-max rounded bg-blue-600 p-8 text-white">Example</div>
    ),
  },
};
