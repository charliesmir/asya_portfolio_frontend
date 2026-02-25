import type { Meta, StoryObj } from "@storybook/react";
import { ProjectPage } from "./projectPage";

const meta = {
  title: "Pages/ProjectPage",
  component: ProjectPage,
} satisfies Meta<typeof ProjectPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Божественная Материя",
    description:
      "Серия изображает «черновики сотворения мира Богом», и представляет собой размышление о связи слова и формы.",
    gallery: {
      card: {
        image: "/ArtWork1.jpg",
        description:
          "«Божественная Материя», бумага, шелкография, 60/45 см, 2023 год",
      },
      arrow: "/Arrow.svg",
      handlePrev: () => alert("Previous"),
      handleNext: () => alert("Next"),
    },
  },
};
