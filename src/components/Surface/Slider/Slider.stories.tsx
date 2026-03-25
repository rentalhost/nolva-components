import { range } from "@rentalhost/rheactor-core";
import { faLeftLong } from "@rheactor/rheactor-font-awesome/classic-regular";

import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "@/components/Primitive/Container/Container";
import { FlipCard } from "@/components/Surface/FlipCard/FlipCard";
import { Slider } from "@/components/Surface/Slider/Slider";

export default {
  component: Slider,
} satisfies Meta<typeof Slider>;

function CardExample({ number, total }: { number: number; total: number }) {
  return (
    <div className="flex aspect-video items-center justify-center rounded border bg-white">
      {`${number} / ${total}`}
    </div>
  );
}

function generateCards(count: number) {
  return range(1, count).map((number, _, array) => (
    <CardExample key={number} number={number} total={array.length} />
  ));
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Example: StoryObj<typeof Slider> = {
  args: { children: generateCards(5) },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const EmptyExample: StoryObj<typeof Slider> = {};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const DurationExample: StoryObj<typeof Slider> = {
  args: {
    className: "grid-cols-3 gap-x-8",
    children: generateCards(5),
    duration: 1000,
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const DurationWrapBounceExample: StoryObj<typeof Slider> = {
  args: {
    className: "grid-cols-3 gap-x-8",
    children: generateCards(5),
    duration: 1000,
    wrapMode: "bounce",
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const DurationWrapBounceStepBackExample: StoryObj<typeof Slider> = {
  args: {
    className: "grid-cols-3 gap-x-8",
    children: generateCards(7),
    duration: 2500,
    steps: -1,
    wrapMode: "bounce",
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const DurationWrapBouncePageExample: StoryObj<typeof Slider> = {
  args: {
    className: "grid-cols-3 gap-x-8",
    children: generateCards(7),
    duration: 2500,
    steps: "page",
    wrapMode: "bounce",
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const DurationWrapStopExample: StoryObj<typeof Slider> = {
  args: {
    className: "grid-cols-3 gap-x-8",
    children: generateCards(5),
    duration: 1000,
    wrapMode: "stop",
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const BreakpointsExample: StoryObj<typeof Slider> = {
  args: {
    duration: 2500,
    infinity: true,
    className:
      "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 sm:gap-x-5 md:gap-x-4 lg:gap-x-3 xl:gap-x-2 2xl:gap-x-1",
    children: generateCards(15),
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const FreeFlowExample: StoryObj<typeof Slider> = {
  args: {
    duration: 2500,
    infinity: true,
    freeFlow: true,
    className:
      "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 sm:gap-x-5 md:gap-x-4 lg:gap-x-3 xl:gap-x-2 2xl:gap-x-1",
    children: generateCards(15),
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const FreeFlowStopOnInteractionExample: StoryObj<typeof Slider> = {
  args: {
    duration: 2500,
    infinity: true,
    freeFlow: true,
    stopOnInteraction: true,
    className:
      "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 sm:gap-x-5 md:gap-x-4 lg:gap-x-3 xl:gap-x-2 2xl:gap-x-1",
    children: generateCards(15),
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const JustifyUndefinedExample: StoryObj<typeof Slider> = {
  args: {
    className: "grid-cols-4 md:grid-cols-5 gap-x-16",
    children: generateCards(2),
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const JustifySpaceBetweenExample: StoryObj<typeof Slider> = {
  args: {
    className: "grid-cols-4 md:grid-cols-5 gap-x-16",
    children: generateCards(2),
    justify: "space-between",
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const JustifyExpandExample: StoryObj<typeof Slider> = {
  args: {
    className: "grid-cols-4 md:grid-cols-5 gap-x-16",
    children: generateCards(2),
    justify: "expand",
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const CenteredExample: StoryObj<typeof Slider> = {
  args: {
    className: "grid-cols-3 md:grid-cols-5 gap-x-16",
    children: generateCards(4),
    centered: true,
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const PlayOffscreenOffExample: StoryObj<typeof Slider> = {
  render: (args) => (
    <div className="my-320">
      <Slider {...args} />
    </div>
  ),
  args: {
    duration: 1000,
    className: "grid-cols-3 md:grid-cols-5 gap-x-16",
    children: generateCards(15),
    freeFlow: true,
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const PlayOffscreenOnExample: StoryObj<typeof Slider> = {
  render: (args) => (
    <div className="my-320">
      <Slider {...args} />
    </div>
  ),
  args: {
    duration: 1000,
    className: "grid-cols-3 md:grid-cols-5 gap-x-16",
    children: generateCards(15),
    freeFlow: true,
    playOffscreen: true,
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const FlipCardsExample: StoryObj<typeof Slider> = {
  args: {
    infinity: true,
    className: "grid-cols-2 sm:grid-cols-5",
    children: range(1, 10).map((number) => (
      <FlipCard
        key={number}
        contentFront={<div className="rounded bg-black p-16 text-white">Front {number}</div>}
        contentBack={<div className="rounded bg-white p-8">Back</div>}
      />
    )),
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ArrowsIconExample: StoryObj<typeof Slider> = {
  args: {
    className: "grid-cols-5 gap-x-8",
    children: generateCards(15),
    arrowsIcon: faLeftLong,
    arrowsClassName: "bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ArrowsPlacementDisabledExample: StoryObj<typeof Slider> = {
  args: {
    className: "grid-cols-5 gap-x-8",
    children: generateCards(15),
    arrowsPlacement: "disabled",
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ArrowsPlacementOverlayExample: StoryObj<typeof Slider> = {
  args: {
    className: "grid-cols-5 gap-x-8",
    children: generateCards(15),
    arrowsPlacement: "overlay",
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ArrowsPlacementExample: StoryObj<typeof Slider> = {
  render: (args) => (
    <Container>
      <Slider {...args} />
    </Container>
  ),
  args: {
    className: "grid-cols-5 gap-x-8",
    children: generateCards(15),
    arrowsPlacement: "external",
    arrowsPlacementFallback: "internal",
    arrowsSteps: "page",
  },
};

// // eslint-disable-next-line @typescript-eslint/naming-convention
// export const PaginationExample: StoryObj<typeof Slider> = {
//   args: {
//     children: cards,
//     items: 5,
//     pagination: "overlay",
//     paginationCompressed: false,
//   },
// };

// // eslint-disable-next-line @typescript-eslint/naming-convention
// export const PaginationLimitExample: StoryObj<typeof Slider> = {
//   args: {
//     children: cards,
//     items: 5,
//     paginationLimit: 3,
//   },
// };
