import Image from "next/image";

import { Header } from "@/components/Header/Header/Header";
import { HeaderContainer } from "@/components/Header/HeaderContainer/HeaderContainer";
import { HeaderNav } from "@/components/Header/HeaderNav/HeaderNav";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Header,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Header>;

function HeaderContainerFixture() {
  return (
    <HeaderContainer>
      <Image
        src="/assets/storybook.svg"
        alt="Storybook"
        unoptimized
        width={100}
        height={0}
        className="group-stuck:w-20 transition-all"
      />

      <HeaderNav
        // eslint-disable-next-line react/no-unstable-nested-components
        openedModalContent={(closeHandler) => (
          <div
            data-overlay
            className="bg-theme-950/75 starting:opacity-0 fixed inset-0 z-10 flex items-center justify-center text-white backdrop-blur-md transition"
          >
            <div
              onClick={closeHandler}
              className="cursor-pointer hover:underline"
            >
              Close
            </div>
          </div>
        )}
        closedIconClassName="text-red-700"
      >
        <li className="font-bold">Home</li>

        <li>About us</li>

        <li>Articles</li>

        <li>News</li>

        <li>Features</li>

        <li>Comparison</li>

        <li>Downloads</li>

        <li>Contact</li>
      </HeaderNav>
    </HeaderContainer>
  );
}

export const Example: StoryObj<typeof Header> = {
  render: (args) => (
    <>
      <Header {...args} />

      <div className="h-screen bg-blue-100">Example</div>
    </>
  ),
  args: {
    sticky: true,
    className:
      "border-b border-theme-300 shadow-xs/5 min-h-12 stuck:min-h-10 transition-all group stuck:text-sm",
    children: <HeaderContainerFixture />,
  },
};
