import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCardCarousel } from "./projectCardCarousel";

const meta = {
  title: "Molecules/ProjectCardCarousel",
  component: ProjectCardCarousel,
} satisfies Meta<typeof ProjectCardCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    card: {
      image: "/ArtWork1.jpg",
      description:
        "«Божественная Материя», бумага, шелкография, 60/45 см, 2023 год",
    },
    arrow: "/Arrow.svg",
    handlePrev: () => alert("Previous"),
    handleNext: () => alert("Next"),
  },
};
