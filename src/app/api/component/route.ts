// app/api/component/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createComponentSchema } from "@/lib/schemas";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parse = createComponentSchema.safeParse(body);
  if (!parse.success) {
    return NextResponse.json({ error: "ValidationError" }, { status: 400 });
  }
  const { sourceCode, name = "Untitled Component", props = {} } = parse.data;

  const created = await prisma.component.create({
    data: { name, sourceCode, propsJson: JSON.stringify(props) },
  });

  return NextResponse.json(
    {
      id: created.id,
      rev: created.rev,
      name: created.name,
      sourceCode: created.sourceCode,
      props: JSON.parse(created.propsJson),
      createdAt: created.createdAt,
      updatedAt: created.updatedAt,
    },
    { status: 201 }
  );
}
