// app/api/components/route.ts
import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { Prisma } from "prisma/src/generated/prisma";

type Json = boolean | number | string | Json[] | { [key: string]: Json };

const JsonSchema: z.ZodType<Json> = z.lazy(() =>
  z.union([
    z.boolean(),
    z.number(),
    z.string(),
    z.array(JsonSchema),
    z.record(z.string(), JsonSchema),
  ])
);

const CreateSchema = z.object({
  id: z.string().optional(),
  name: z.string().default("Untitled Component"),
  sourceCode: z
    .string()
    .default("export default function Showcase(){return null}"),
  props: JsonSchema.default({}),
  schemaVer: z.number().default(1),
});

export async function GET(): Promise<Response> {
  const rows = await prisma.component.findMany({
    orderBy: { updatedAt: "desc" },
    take: 50,
  });
  return Response.json(rows);
}

export async function POST(req: NextRequest): Promise<Response> {
  const json = await req.json().catch(() => ({}));
  const body = CreateSchema.parse(json);

  const propsValue = body.props as unknown as Prisma.InputJsonValue;

  const created = await prisma.component.create({
    data: {
      id: body.id,
      name: body.name,
      sourceCode: body.sourceCode,
      props: propsValue,
      schemaVer: body.schemaVer,
    },
  });

  return new Response(JSON.stringify(created), { status: 201 });
}
