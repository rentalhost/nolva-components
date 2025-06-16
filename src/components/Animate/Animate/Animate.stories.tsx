import { Animate } from "@/components/Animate/Animate/Animate";
import { range } from "@/services/ArrayService";

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

function PseudoComponent() {
  return <div>Example</div>;
}

export const Example: StoryObj<typeof Animate> = {
  render: exampleRender,
  args: {
    always: true,
    effect: "slideUp",
    children: (
      <div className="w-max rounded bg-blue-600 p-8 text-white">Example</div>
    ),
  },
};

export const SubComponentExample: StoryObj<typeof Animate> = {
  args: {
    effect: "slideDown",
    children: <PseudoComponent />,
  },
};

export const Issue1RelativeIssue: StoryObj<typeof Animate> = {
  render(props) {
    return (
      <div className="grid gap-y-16">
        {range(0, 20).map((key) => (
          <div className="relative" key={key}>
            <Animate {...props} />
          </div>
        ))}
      </div>
    );
  },
  args: {
    effect: "slideRight",
    children: <PseudoComponent />,
  },
};
