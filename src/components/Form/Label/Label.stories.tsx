import { Form } from "@/components/Form/Form/Form";
import { Label } from "@/components/Form/Label/Label";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: Label,
} satisfies Meta<typeof Label>;

export const Example: StoryObj<typeof Label> = {
  args: {
    title: "Example",
    children: <input type="text" className="w-full outline" />,
  },
};

export const RequiredExample: StoryObj<typeof Label> = {
  render(props) {
    return (
      <Form>
        <Label {...props} size={12} />

        <Label {...props} />

        <Label {...props} />
      </Form>
    );
  },
  args: {
    title: "Example",
    required: true,
    size: 6,
    children: <input type="text" required className="w-full outline" />,
  },
};

export const UntitledExample: StoryObj<typeof Label> = {
  args: {
    children: <input type="text" required className="w-full outline" />,
  },
};
