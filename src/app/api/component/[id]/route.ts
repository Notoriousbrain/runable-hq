// src/app/api/component/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = { id: string };

// You can type ctx.params as a Promise<Params> and await it
export async function PUT(req: NextRequest, ctx: { params: Promise<Params> }) {
  // ✅ await params before using it
  const { id } = await ctx.params;

  const body = await req.json() as {
    rev: number;
    sourceCode?: string;
    props?: unknown;
  };

  // fetch current row
  const existing = await prisma.component.findUnique({
    where: { id },
    select: { rev: true, sourceCode: true, propsJson: true },
  });

  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // optimistic concurrency control
  if (body.rev !== existing.rev) {
    return NextResponse.json(
      {
        code: 409,
        message: "Conflict",
        serverRev: existing.rev,
        server: {
          sourceCode: existing.sourceCode,
          props: existing.propsJson ? JSON.parse(existing.propsJson) : null,
        },
      },
      { status: 409 }
    );
  }

  const updated = await prisma.component.update({
    where: { id },
    data: {
      rev: { increment: 1 }, // or rev: existing.rev + 1 if you're not using Prisma's field ops
      sourceCode: body.sourceCode ?? existing.sourceCode,
      propsJson: body.props ? JSON.stringify(body.props) : existing.propsJson,
    },
    select: { rev: true },
  });

  return NextResponse.json({ rev: updated.rev }, { status: 200 });
}
