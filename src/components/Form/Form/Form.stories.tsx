import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "@/components/Form/Form/Form";
import { Input } from "@/components/Form/Input/Input";
import { Label } from "@/components/Form/Label/Label";

export default {
  component: Form,
} satisfies Meta<typeof Form>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Example: StoryObj<typeof Form> = {
  args: {
    children: "Example",
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const FocusableExample: StoryObj<typeof Form> = {
  args: {
    className: "group",
    children: (
      <Label
        title="Example"
        primaryPlaceholder="Before Focus Example"
        titleClassName="not-group-data-focused:hidden"
      >
        <Input placeholder="Focused Example" />
      </Label>
    ),
  },
};
