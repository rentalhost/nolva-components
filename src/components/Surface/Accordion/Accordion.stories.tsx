import { Animate } from "@/components/Animate/Animate/Animate";
import { Accordion } from "@/components/Surface/Accordion/Accordion";
import { Theme } from "@/components/Theme/Theme/Theme";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

const PseudoChildren = (
  <div className="grid gap-y-4 overflow-hidden">
    <Animate effect="slideLeft">
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo.
      </p>
    </Animate>

    <Animate effect="slideRight">
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo.
      </p>
    </Animate>
  </div>
);

export const SimpleExample: StoryObj<typeof Accordion> = {
  args: {
    title: "Example",
    children: PseudoChildren,
  },
};

export const MultipleExample: StoryObj<typeof Accordion> = {
  render: (args) => (
    <div className="grid gap-y-4">
      <Theme variant="fuchsia">
        <Accordion {...args} />
      </Theme>

      <Accordion
        opened
        {...args}
        className="group bg-blue-50"
        headerClassName="group-data-opened:text-red-600 bg-blue-50 text-blue-600 active:bg-blue-200"
        title={<em>Example</em>}
        titleClassName="group-data-opened:tracking-[0.25rem] transition-all"
        titleKind="h1"
        iconClassName="text-green-600"
        bodyClassName="border-blue-200 text-blue-600"
      />

      <Accordion {...args} />
    </div>
  ),
  args: {
    title: "Example",
    children: PseudoChildren,
  },
};
