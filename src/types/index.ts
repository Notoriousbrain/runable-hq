export type TextToken = {
  title: string;
  color: string;
  fontSize: number;
  weight: 400 | 500 | 600 | 700;
};

export type ShowcaseProps = {
  tokens: Record<string, TextToken>;
};

export const initialShowcaseProps: ShowcaseProps = {
  tokens: {
    showcase: {
      title: "Explore what people are building with Runable",
      color: "#ffffffb3",
      fontSize: 16,
      weight: 400,
    },
    landing: {
      title: "What can I get done for you?",
      color: "#ffffff",
      fontSize: 40,
      weight: 600,
    },
  },
};
