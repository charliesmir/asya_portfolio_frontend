import type { Meta, StoryObj } from "@storybook/react";
import { NavCard } from "./navCard";

const meta = {
  title: "Atoms/NavCard",
  component: NavCard,
} satisfies Meta<typeof NavCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "«БОЖЕСТВЕННАЯ МАТЕРИЯ»",
    image: "/testImage.png",
    onClick: () => alert("NavCard Clicked"),
  },
};
