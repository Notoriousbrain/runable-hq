export type TitleToken = {
  text: string;
  color: string;
  size: number;
  weight: number;
};

export type ShowcaseProps = {
  titles: Record<string, TitleToken>;
};

export const initialShowcaseProps: ShowcaseProps = {
  titles: {
    showcase: {
      text: "Explore what people are building with Runable",
      color: "#ffffffb3",
      size: 16,
      weight: 400,
    },
    landing: {
      text: "What can I get done for you?",
      color: "#ffffff",
      size: 40,
      weight: 600,
    },
  },
};
