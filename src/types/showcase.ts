export type ShowcaseProps = {
  headingWeight: 400 | 500 | 600 | 700;
  headingText: string;
  headingColor: string;
  headingFontSize: number;
  headingBold: boolean;
};

export const initialShowcaseProps: ShowcaseProps = {
  headingText: "Explore what people are building with Runable",
  headingColor: "#ffffffb3",
  headingFontSize: 16,
  headingBold: false,
};
