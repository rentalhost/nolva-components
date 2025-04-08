import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { PrintContainer } from "@/components/PrintContainer";
import { PrintPage } from "@/components/PrintPage";

export default {
  component: PrintPage,
  subcomponents: { PrintContainer },
  title: "Components/Print/PrintPage",
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <PrintContainer>
        <Story />
      </PrintContainer>
    ),
  ],
  args: {
    size: "A4",
    orientation: "portrait",
    margin: "1cm",
    header: undefined,
    footer: undefined,
    overflowWarning: true,
  },
  argTypes: {
    size: {
      control: {
        type: "radio",
        labels: {
          CustomSize: 'Custom Size: { width: "5cm", height: "8cm" }',
          CustomSize2: 'Custom Size: { width: "5cm", height: "auto" }',
        },
      },
      options: ["A4", "Letter", "Legal", "CustomSize", "CustomSize2"],
      mapping: {
        CustomSize: { width: "5cm", height: "8cm" },
        CustomSize2: { width: "5cm", height: "auto" },
      },
    },
    orientation: {
      control: { type: "radio" },
      options: ["portrait", "landscape"],
    },
    margin: { control: { type: "text" } },
    header: { control: { disable: true } },
    footer: { control: { disable: true } },
    overflowWarning: {},
    children: {},
  },
} satisfies Meta<typeof PrintPage>;

export const EmptyPage: StoryObj<typeof PrintPage> = {};

export const SinglePage: StoryObj<typeof PrintPage> = {
  args: {
    children: (
      <>
        <h1>Hello world!</h1>

        <p>Lorem ipsum dolor sit.</p>
      </>
    ),
  },
};

export const MultiplePages: StoryObj<typeof PrintPage> = {
  render: (args) => (
    <>
      <PrintPage {...args}>
        <strong>Orientation:</strong> portrait.
      </PrintPage>

      <PrintPage {...args} orientation="landscape">
        <strong>Orientation:</strong> landscape.
      </PrintPage>
    </>
  ),
  args: {
    size: "CustomSize" as ComponentProps<typeof PrintPage>["size"],
  },
};

export const AutomaticHeightPage: StoryObj<typeof PrintPage> = {
  args: {
    size: "CustomSize2" as ComponentProps<typeof PrintPage>["size"],
    children: (
      <div className="text-center">
        <p>Thermal print.</p>

        <p>Thermal print.</p>

        <p>Thermal print.</p>

        <p>Thermal print.</p>

        <p>Thermal print.</p>

        <p>Thermal print.</p>

        <p>Thermal print.</p>

        <p>Thermal print.</p>

        <p>Thermal print.</p>

        <p>Thermal print.</p>

        <p>Thermal print.</p>

        <p>Thermal print.</p>
      </div>
    ),
  },
};

export const TooLargePage: StoryObj<typeof PrintPage> = {
  args: {
    size: "CustomSize" as ComponentProps<typeof PrintPage>["size"],
    header: (
      <div className="flex h-8 items-center justify-start bg-blue-200/50 px-4">
        Header
      </div>
    ),
    footer: (
      <div className="flex h-8 items-center justify-end bg-green-200/50 px-4">
        Footer
      </div>
    ),
    margin: "2.5rem 1rem 0",
    children: (
      <div className="leading-7.25">
        <p>OK</p>

        <p>OK</p>

        <p>OK</p>

        <p>OK</p>

        <p>OK</p>

        <p>OK</p>

        <p>OK</p>

        <p>OK</p>

        <p>Under the</p>

        <p className="text-balance my-2 text-xs">
          The <strong>overflowing content</strong> will be forcibly printed on
          the next page. The blinking animation is part of the component when it
          detects overflow.
        </p>
      </div>
    ),
  },
};
