import type { Meta, StoryObj } from "@storybook/react";
import { AboutEducation } from "./aboutEducation";

const meta = {
  title: "Molecules/AboutEducation",
  component: AboutEducation,
} satisfies Meta<typeof AboutEducation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    educations: [
      {
        date: "2019-2025г",
        description: "Академия художеств имени Ильи Репина, факультет графики.",
      },
      {
        date: "2017-2019г",
        description: "Лицей имени Б.В.Иогансона при РАХ,архитектурный класс",
      },
      {
        date: "2016-2019г",
        description:
          "ГБУ ДО Центр «Интеллект», направления «Филология» и «Мировая художественная культура»",
      },
    ],
  },
};
