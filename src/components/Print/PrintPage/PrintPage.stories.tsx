import { renderToStaticMarkup } from "react-dom/server";

import { PrintContainer } from "@/components/Print/PrintContainer/PrintContainer";
import { PrintPage } from "@/components/Print/PrintPage/PrintPage";
import { HTMLTransformer } from "@/services/classes/HTMLTransformer";

import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps, ReactNode } from "react";

export default {
  component: PrintPage,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <PrintContainer>
        <Story />
      </PrintContainer>
    ),
  ],
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
  },
} satisfies Meta<typeof PrintPage>;

export const EmptyPage: StoryObj<typeof PrintPage> = {};

const defaultTransformer = HTMLTransformer.createDefault();

defaultTransformer.allowTag("em", ["data-allowed"]);
defaultTransformer.allowTag("p", ["data-allowed"]);

defaultTransformer.setTextReplacer((text) => {
  if (text === "TextNode\n") {
    return (
      <>
        <span>{text.trimEnd()}</span>

        {"\n"}
      </>
    );
  }

  return text;
});

defaultTransformer.setTagReplacer(
  "dl",
  ({ "data-skip": _, children, ...props }) => (
    <div className="text-green-600" {...(props as object)}>
      <span data-ignore tabIndex={-1}>
        {children}
      </span>
    </div>
  ),
);

defaultTransformer.setTagReplacer(
  "mark",
  ({ children }) => children as Awaited<ReactNode>,
);

export const SinglePage: StoryObj<typeof PrintPage> = {
  args: {
    children: (
      <>
        <h1 className="text-3xl font-semibold">Hello world!</h1>

        <p>Lorem ipsum dolor sit.</p>

        <code className="my-4 grid gap-y-4 whitespace-pre-line text-sm">
          {(() => {
            const transformed = defaultTransformer.transform(
              "TextNode\n" +
                '<p class="text-blue-600" data-skip data-allowed>p</p>\n' +
                '<div style="color: blue;">div <strong data-skip>strong</strong></div>\n' +
                '<mark>mark <strong style="color: red;" data-skip>strong</strong></mark>\n' +
                "<dl data-skip data-allowed><em data-skip data-allowed>replace</em></dl>\n" +
                "<dd>remove</dd>" +
                "<script>remove</script>" +
                "<br />\n" +
                "<!-- !comment -->",
            );

            return (
              <>
                <div>{renderToStaticMarkup(transformed)}</div>

                {transformed}
              </>
            );
          })()}
        </code>
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

export const ShortenPage: StoryObj<typeof PrintPage> = {
  render: (args) => (
    <>
      <PrintPage {...args} />

      <PrintPage {...args} />
    </>
  ),
  args: {
    shorten: true,
    children: <p>Example.</p>,
  },
};

export const OverflowModeWarningPage: StoryObj<typeof PrintPage> = {
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

export const OverflowModeAllowedPage: StoryObj<typeof PrintPage> = {
  args: {
    overflowMode: "allowed",
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
    margin: "2.5rem 1rem",
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

        <p>OK</p>

        <p>OK</p>

        <p>OK</p>

        <p>OK</p>

        <p>OK</p>

        <p>OK</p>
      </div>
    ),
  },
};
