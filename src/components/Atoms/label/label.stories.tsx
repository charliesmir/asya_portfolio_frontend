import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

const meta = {
  title: "Atoms/Label",
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "контакты",
    onClick: () => alert("Button Clicked"),
  },
};
