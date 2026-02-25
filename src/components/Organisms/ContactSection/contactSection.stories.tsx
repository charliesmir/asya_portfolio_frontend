import type { Meta, StoryObj } from "@storybook/react";
import { ContactSection } from "./contactSection";

const meta = {
  title: "Organisms/ContactSection",
  component: ContactSection,
} satisfies Meta<typeof ContactSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "КОНТАКТЫ",
    email: "aromanchenko113@gmail.com",
    emailLink: "mailto:aromanchenko113@gmail.com",
    instagram: "instagram:@ana.romie",
    instagramLink: "https://www.instagram.com/ana.romie/",
    telegram: "telegram: @anaromie",
    telegramLink: "https://t.me/anaromie",
    image: "/ContactImage.png",
  },
};
