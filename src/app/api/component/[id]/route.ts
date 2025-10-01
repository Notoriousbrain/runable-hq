import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { updateComponentSchema } from "@/lib/schemas";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json().catch(() => null);
  const parse = updateComponentSchema.safeParse(body);
  if (!parse.success) {
    return NextResponse.json(
      { error: "ValidationError", details: parse.error.flatten() },
      { status: 400 }
    );
  }
  const { sourceCode, props, rev } = parse.data;

  const existing = await prisma.component.findUnique({
    where: { id: params.id },
  });
  if (!existing)
    return NextResponse.json({ error: "NotFound" }, { status: 404 });

  if (existing.rev !== rev) {
    return NextResponse.json(
      {
        error: "RevisionConflict",
        serverRev: existing.rev,
        server: {
          sourceCode: existing.sourceCode,
          props: JSON.parse(existing.propsJson),
        },
      },
      { status: 409 }
    );
  }

  const updated = await prisma.component.update({
    where: { id: params.id },
    data: {
      sourceCode: sourceCode ?? existing.sourceCode,
      propsJson: props ? JSON.stringify(props) : existing.propsJson,
      rev: { increment: 1 },
    },
  });

  return NextResponse.json({
    id: updated.id,
    rev: updated.rev,
    name: updated.name,
    sourceCode: updated.sourceCode,
    props: JSON.parse(updated.propsJson),
    createdAt: updated.createdAt,
    updatedAt: updated.updatedAt,
  });
}
