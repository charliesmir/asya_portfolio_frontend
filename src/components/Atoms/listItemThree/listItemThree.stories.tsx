import type { Meta, StoryObj } from "@storybook/react";
import { ListItemThree } from "./listItemThree";

const meta = {
  title: "Atoms/ListItemThree",
  component: ListItemThree,
} satisfies Meta<typeof ListItemThree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    date: "Январь 2026",
    description: "персональная выставка «Улисс», куратор Александр Синявский",
    location: "Siniavskii gallery, Санкт-Петербург",
  },
};
