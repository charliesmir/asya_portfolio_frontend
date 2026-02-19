import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header";

const meta = {
  title: "Molecules/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Айя Роан",
    button: [
      { title: "обо мне", onClick: () => alert("обо мне") },
      { title: "серии", onClick: () => alert("серии") },
      { title: "контакты", onClick: () => alert("контакты") },
    ],
  },
};
