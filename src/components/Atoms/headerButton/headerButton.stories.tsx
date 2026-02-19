import type { Meta, StoryObj } from "@storybook/react";
import { HeaderButton } from "./headerButton";

const meta = {
  title: "Atoms/HeaderButton",
  component: HeaderButton,
} satisfies Meta<typeof HeaderButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "обо мне",
    onClick: () => alert("Button Clicked"),
  },
};
