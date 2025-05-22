import { Media } from "@/components/Surface/Media/Media";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Media,
} satisfies Meta<typeof Media>;

export const ImageExample: StoryObj<typeof Media> = {
  args: {
    src: "/assets/storybook.webp",
    width: 256,
    height: 51,
    alt: "Storybook",
  },
};

export const SvgExample: StoryObj<typeof Media> = {
  args: {
    src: "/assets/storybook.svg",
    alt: "Storybook",
  },
};

export const VideoLocalProtectExample: StoryObj<typeof Media> = {
  args: {
    src: "/assets/video-example-1.webm",
    posterSrc: "/assets/video-example-1.webp",
    className: "rounded max-w-64 outline shadow-md",
    protect: true,
  },
};

export const VideoLocalBackgroundExample: StoryObj<typeof Media> = {
  args: {
    src: "/assets/video-example-1.webm",
    className: "rounded max-w-64 outline shadow-md",
    background: true,
  },
};

export const BrokenExample: StoryObj<typeof Media> = {
  args: {
    src: "example.unsupported" as never,
  },
};
