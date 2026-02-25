import type { Meta, StoryObj } from "@storybook/react";
import { NavSection } from "./navSection";

const meta = {
  title: "Molecules/NavSection",
  component: NavSection,
} satisfies Meta<typeof NavSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    labels: [
      { title: "обо мне", onClick: () => alert("обо мне") },
      { title: "серии", onClick: () => alert("серии") },
      { title: "контакты", onClick: () => alert("контакты") },
    ],
  },
};
