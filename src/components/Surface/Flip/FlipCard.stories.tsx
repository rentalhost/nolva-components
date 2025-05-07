import type { Meta, StoryObj } from "@storybook/react";

import { FlipCard } from "@/components/Surface/Flip/FlipCard";

export default {
  component: FlipCard,
} satisfies Meta<typeof FlipCard>;

export const FlipToRightExample: StoryObj<typeof FlipCard> = {
  render: (args) => (
    <div className="h-32 w-32 bg-slate-200">
      <FlipCard {...args} />
    </div>
  ),
  args: {
    contentFront: <div className="rounded bg-black p-4 text-white">Front</div>,
    contentBack: <div className="rounded bg-white p-8">Back</div>,
  },
};

export const FlipToLeftExample: StoryObj<typeof FlipCard> = {
  render: (args) => (
    <div className="h-32 w-32 bg-slate-200">
      <FlipCard {...args} />
    </div>
  ),
  args: {
    flipTo: "left",
    contentFront: (
      <div className="size-full flex items-center justify-center rounded bg-black text-white">
        Front
      </div>
    ),
    contentBack: (
      <div className="size-full flex items-center justify-center rounded bg-white">
        Back
      </div>
    ),
  },
};

export const AxisVerticalExample: StoryObj<typeof FlipCard> = {
  render: (args) => (
    <div className="h-32 w-32 bg-slate-200">
      <FlipCard {...args} />
    </div>
  ),
  args: {
    axis: "vertical",
    touchIconClassName: "bg-blue-500",
    contentFront: (
      <div className="size-full flex items-center justify-center rounded bg-black text-white">
        Front
      </div>
    ),
    contentBack: (
      <div className="size-full flex items-center justify-center rounded bg-white">
        Back
      </div>
    ),
  },
};
