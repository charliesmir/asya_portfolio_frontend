import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Atoms/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "STATEMENT",
    isActive: false,
    onClick: () => alert("Button Clicked"),
  },
};

export const Active: Story = {
  args: {
    title: "ВЫСТАВКИ",
    isActive: true,
    onClick: () => alert("Button Clicked"),
  },
};
