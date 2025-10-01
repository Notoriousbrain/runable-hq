import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const found = await prisma.component.findUnique({ where: { id } });
  if (!found) return NextResponse.json({ error: "NotFound" }, { status: 404 });
  return NextResponse.json({
    id: found.id,
    rev: found.rev,
    name: found.name,
    sourceCode: found.sourceCode,
    props: JSON.parse(found.propsJson),
    createdAt: found.createdAt,
    updatedAt: found.updatedAt,
  });
}
