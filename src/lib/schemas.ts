import { z } from "zod";

export const createComponentSchema = z.object({
  name: z.string().min(1).default("Untitled Component").optional(),
  sourceCode: z.string().min(1, { message: "sourceCode required" }),
  props: z.record(z.string(), z.any()).default({}).optional(),
});

export const updateComponentSchema = z.object({
  sourceCode: z.string().min(1).optional(),
  props: z.record(z.string(), z.any()).optional(),
  rev: z.number().int().positive(),
});
