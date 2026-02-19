import type { Meta, StoryObj } from "@storybook/react";
import { ListItemTwo } from "./listItemTwo";

const meta = {
  title: "Atoms/ListItemTwo",
  component: ListItemTwo,
} satisfies Meta<typeof ListItemTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    date: "2019-2025",
    description: "Академия художеств имени Ильи Репина, факультет графики.",
  },
};
