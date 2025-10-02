import { z } from "zod";

export const textTokenSchema = z.object({
  title: z.string(),
  color: z.string(),
  fontSize: z.number(),
  weight: z.union([
    z.literal(400),
    z.literal(500),
    z.literal(600),
    z.literal(700),
  ]),
});

export const showcasePropsSchema = z.object({
  tokens: z.record(z.string(), textTokenSchema),
});

export const createComponentSchema = z.object({
  name: z.string().min(1).default("Untitled Component").optional(),
  sourceCode: z.string().min(1, { message: "sourceCode required" }),
  props: showcasePropsSchema.optional(),
  schemaVer: z.number().int().default(1).optional(),
});

export const updateComponentSchema = z.object({
  name: z.string().min(1).optional(),
  sourceCode: z.string().min(1).optional(),
  props: showcasePropsSchema.optional(),
  schemaVer: z.number().int().optional(),
});
