import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./projectCard";

const meta = {
  title: "Atoms/ProjectCard",
  component: ProjectCard,
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    image: "/ArtWork1.jpg",
    description:
      "«Божественная Материя», бумага, шелкография, 60/45 см, 2023 год",
  },
};
