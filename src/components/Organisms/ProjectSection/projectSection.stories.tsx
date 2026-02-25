import type { Meta, StoryObj } from "@storybook/react";
import { ProjectSection } from "./projectSection";

const meta = {
  title: "Organisms/ProjectSection",
  component: ProjectSection,
} satisfies Meta<typeof ProjectSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "СЕРИИ И КОЛЛЕКЦИИ",
    projects: [
      {
        title: "«БОЖЕСТВЕННАЯ МАТЕРИЯ»",
        image: "/testImage.png",
        onClick: () => alert("NavCard Clicked"),
      },
      {
        title: "«БОЖЕСТВЕННАЯ МАТЕРИЯ»",
        image: "/testImage.png",
        onClick: () => alert("NavCard Clicked"),
      },
      {
        title: "«БОЖЕСТВЕННАЯ МАТЕРИЯ»",
        image: "/testImage.png",
        onClick: () => alert("NavCard Clicked"),
      },
      {
        title: "«БОЖЕСТВЕННАЯ МАТЕРИЯ»",
        image: "/testImage.png",
        onClick: () => alert("NavCard Clicked"),
      },
      {
        title: "«БОЖЕСТВЕННАЯ МАТЕРИЯ»",
        image: "/testImage.png",
        onClick: () => alert("NavCard Clicked"),
      },
    ],
  },
};
