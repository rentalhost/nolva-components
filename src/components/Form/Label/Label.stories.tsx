import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "@/components/Form/Form/Form";
import { Label } from "@/components/Form/Label/Label";

export default {
  component: Label,
} satisfies Meta<typeof Label>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Example: StoryObj<typeof Label> = {
  args: {
    title: "Example",
    children: <input type="text" className="w-full outline" />,
  },
};

// eslint-disable-next-line @typescript-eslint/naming-convention
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

// eslint-disable-next-line @typescript-eslint/naming-convention
export const UntitledExample: StoryObj<typeof Label> = {
  args: {
    children: <input type="text" required className="w-full outline" />,
  },
};
