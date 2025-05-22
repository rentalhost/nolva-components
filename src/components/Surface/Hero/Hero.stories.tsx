import { Container } from "@/components/Primitive/Container/Container";
import { Hero } from "@/components/Surface/Hero/Hero";
import { Media } from "@/components/Surface/Media/Media";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Hero,
} satisfies Meta<typeof Hero>;

export const Example: StoryObj<typeof Hero> = {
  args: {
    backgroundContent: (
      <Media
        className="size-full absolute object-cover"
        src="/assets/video-example-1.webm"
        background
      />
    ),
    children: (
      <Container
        className="min-h-64 flex items-center justify-center bg-black/25 p-16 text-center text-2xl font-bold text-white backdrop-blur-md"
        fluid
      >
        Example
      </Container>
    ),
  },
};
