import { FaMagnifyingGlass } from "react-icons/fa6";

import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Button } from "@/components/Primitive/Button/Button";
import { Theme } from "@/components/Theme/Theme/Theme";
import { ThemeSpread } from "@/services/components/ThemeSpread";

export default {
  component: Button,
} satisfies Meta<typeof Button>;

export const SolidExample: StoryObj<typeof Button> = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <ThemeSpread>
        {(variant) => (
          <Button {...args}>
            <strong>Example: </strong>

            <span>{variant}</span>
          </Button>
        )}
      </ThemeSpread>
    </div>
  ),
};

export const SolidDisabledExample: StoryObj<typeof Button> = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <ThemeSpread>
        {(variant) => (
          <Button {...args}>
            <strong>Example: </strong>

            <span>{variant}</span>
          </Button>
        )}
      </ThemeSpread>
    </div>
  ),
  args: {
    disabled: true,
  },
};

export const OutlineExample: StoryObj<typeof Button> = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <ThemeSpread>
        {(variant) => (
          <Button {...args}>
            <strong>Example: </strong>

            <span>{variant}</span>
          </Button>
        )}
      </ThemeSpread>
    </div>
  ),
  args: {
    fill: "outline",
  },
};

export const OutlineDisabledExample: StoryObj<typeof Button> = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <ThemeSpread>
        {(variant) => (
          <Button {...args}>
            <strong>Example: </strong>

            <span>{variant}</span>
          </Button>
        )}
      </ThemeSpread>
    </div>
  ),
  args: {
    fill: "outline",
    disabled: true,
  },
};

export const TransparentExample: StoryObj<typeof Button> = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <ThemeSpread>
        {(variant) => (
          <Button {...args}>
            <strong>Example: </strong>

            <span>{variant}</span>
          </Button>
        )}
      </ThemeSpread>
    </div>
  ),
  args: {
    fill: "transparent",
  },
};

export const TransparentDisabledExample: StoryObj<typeof Button> = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <ThemeSpread>
        {(variant) => (
          <Button {...args}>
            <strong>Example: </strong>

            <span>{variant}</span>
          </Button>
        )}
      </ThemeSpread>
    </div>
  ),
  args: {
    fill: "transparent",
    disabled: true,
  },
};

export const LinkExample: StoryObj<typeof Button> = {
  args: {
    asChild: true,
    children: <a href="#">Link</a>,
    fill: "outline",
  },
};

export const LinkDisabledExample: StoryObj<typeof Button> = {
  args: {
    asChild: true,
    children: <a href="#">Link</a>,
    fill: "outline",
    disabled: true,
  },
};

export const IconExample: StoryObj<typeof Button> = {
  args: {
    children: <FaMagnifyingGlass />,
  },
};

export const IconTextExample: StoryObj<typeof Button> = {
  args: {
    children: (
      <>
        <FaMagnifyingGlass />

        <span>Example</span>
      </>
    ),
  },
};

export const IconTextReverseExample: StoryObj<typeof Button> = {
  args: {
    children: (
      <>
        <span>Example</span>

        <FaMagnifyingGlass />
      </>
    ),
  },
};

export const AsChildFallbackExample: StoryObj<typeof Button> = {
  args: {
    asChild: true,
    children: "Example",
  },
};

function BrandBlueButton(args: ComponentProps<typeof Button>) {
  return (
    <Theme variant="brand-blue">
      <Button
        {...args}
        className="bg-theme-700 border-theme-800 theme-outline:bg-theme-100"
      />
    </Theme>
  );
}

function BrandGreenButton(args: ComponentProps<typeof Button>) {
  return (
    <Theme variant="brand-green">
      <Button
        {...args}
        className="bg-theme-400 border-theme-600 text-theme-950"
      />
    </Theme>
  );
}

function BrandYellowButton(args: ComponentProps<typeof Button>) {
  return (
    <Theme variant="brand-yellow">
      <Button
        {...args}
        className="bg-theme-300 border-theme-500 text-theme-950"
      />
    </Theme>
  );
}

export const BrandExample: StoryObj<typeof Button> = {
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args}>Neutral</Button>

      <BrandBlueButton {...args}>Brand Blue</BrandBlueButton>

      <BrandBlueButton {...args} fill="outline">
        Brand Blue
      </BrandBlueButton>

      <BrandGreenButton {...args}>Brand Green</BrandGreenButton>

      <BrandYellowButton {...args}>Brand Yellow</BrandYellowButton>
    </div>
  ),
};
