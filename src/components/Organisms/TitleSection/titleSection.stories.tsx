import type { Meta, StoryObj } from "@storybook/react";
import { TitleSection } from "./titleSection";

const meta = {
  title: "Organisms/TitleSection",
  component: TitleSection,
} satisfies Meta<typeof TitleSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    image: "/Profile.jpg",
    name: "Айя Роан",
    description:
      "Какой-то короткий текст про тебя и твои работы. Как бы приветстваие",
  },
};
