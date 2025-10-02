import { z } from "zod";

export const titleTokenSchema = z.object({
  text: z.string(),
  color: z.string(),
  size: z.number(),
  weight: z.number().int().min(100).max(900),
});

export const showcasePropsSchema = z.object({
  titles: z.record(z.string(), titleTokenSchema),
});

export const createTitleSchema = titleTokenSchema.extend({});

export const updateTitleSchema = titleTokenSchema.partial();
