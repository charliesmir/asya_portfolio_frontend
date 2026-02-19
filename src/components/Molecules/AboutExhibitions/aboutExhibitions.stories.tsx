import type { Meta, StoryObj } from "@storybook/react";
import { AboutExhibitions } from "./aboutExhibitions";

const meta = {
  title: "Molecules/AboutExhibitions",
  component: AboutExhibitions,
} satisfies Meta<typeof AboutExhibitions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    exhibitions: [
      {
        date: "Январь 2026",
        description:
          "персональная выставка «Улисс», куратор Александр Синявский",
        location: "Siniavskii gallery, Санкт-Петербург",
      },
      {
        date: "Январь 2026",
        description:
          "персональная выставка «Улисс», куратор Александр Синявский",
        location: "Siniavskii gallery, Санкт-Петербург",
      },
      {
        date: "Январь 2026",
        description:
          "персональная выставка «Улисс», куратор Александр Синявский",
        location: "Siniavskii gallery, Санкт-Петербург",
      },
      {
        date: "Январь 2026",
        description:
          "персональная выставка «Улисс», куратор Александр Синявский",
        location: "Siniavskii gallery, Санкт-Петербург",
      },
      {
        date: "Январь 2026",
        description:
          "персональная выставка «Улисс», куратор Александр Синявский",
        location: "Siniavskii gallery, Санкт-Петербург",
      },
      {
        date: "Сентябрь 2024",
        description: "Ярмарка современного искусства Third Place Art Fair",
        location: "Санкт-Петербург",
      },
    ],
  },
};
