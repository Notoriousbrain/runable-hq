import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { publish } from "@/lib/realtime";
import { Prisma } from "prisma/src/generated/prisma";

type Json = null | boolean | number | string | Json[] | { [key: string]: Json };

const JsonSchema: z.ZodType<Json> = z.lazy(() =>
  z.union([
    z.null(),
    z.boolean(),
    z.number(),
    z.string(),
    z.array(JsonSchema),
    z.record(z.string(), JsonSchema),
  ])
);

function toPrismaJson(v: Json): Prisma.InputJsonValue | typeof Prisma.JsonNull {
  return v === null ? Prisma.JsonNull : (v as unknown as Prisma.InputJsonValue);
}

const UpdateSchema = z.object({
  rev: z.number(),
  sourceCode: z.string().optional(),
  props: JsonSchema.optional(),
  schemaVer: z.number().optional(),
});

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
): Promise<Response> {
  const { id } = params;

  const row = await prisma.component.findUnique({ where: { id } });
  if (!row) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }

  return Response.json(row);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<Response> {
  const { id } = params;
  const json = await req.json().catch(() => ({}));
  const body = UpdateSchema.parse(json);

  const server = await prisma.component.findUnique({ where: { id } });
  if (!server) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
    });
  }

  if (body.rev !== server.rev) {
    return new Response(
      JSON.stringify({
        error: "Revision conflict",
        code: 409,
        data: {
          serverRev: server.rev,
          server: {
            sourceCode: server.sourceCode,
            props: server.props,
          },
        },
      }),
      { status: 409 }
    );
  }

  const data: Prisma.ComponentUpdateInput = {
    rev: { increment: 1 },
    ...(typeof body.sourceCode === "string"
      ? { sourceCode: body.sourceCode }
      : {}),
    ...(typeof body.schemaVer === "number"
      ? { schemaVer: body.schemaVer }
      : {}),
    ...(body.props !== undefined ? { props: toPrismaJson(body.props) } : {}),
  };

  const updated = await prisma.component.update({
    where: { id },
    data,
  });

  publish(`component:${id}`, { type: "patch", id, rev: updated.rev }).catch(
    () => {}
  );

  return Response.json({ id: updated.id, rev: updated.rev });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
): Promise<Response> {
  const { id } = params;
  await prisma.component.delete({ where: { id } }).catch(() => {});
  publish(`component:${id}`, { type: "deleted", id }).catch(() => {});
  return new Response(null, { status: 204 });
}
