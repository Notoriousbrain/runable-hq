import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "prisma/src/generated/prisma";
import { TEXTS } from "@/lib/seed-data";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => ({}))) as Partial<{
    truncate: boolean;
  }>;
  const truncate = Boolean(body?.truncate);

  const ids = TEXTS.map((t) => t.id);

  const upsertOps = TEXTS.map((t) =>
    prisma.titleComponent.upsert({
      where: { id: t.id },
      update: {
        text: t.text,
        color: t.color,
        size: t.size,
        weight: t.weight,
      },
      create: {
        id: t.id,
        text: t.text,
        color: t.color,
        size: t.size,
        weight: t.weight,
      },
    })
  );

  await prisma.$transaction(upsertOps);

  let truncated = false;
  if (truncate) {
    await prisma.titleComponent.deleteMany({ where: { id: { notIn: ids } } });
    truncated = true;
  }

  return NextResponse.json({
    ok: true,
    count: TEXTS.length,
    truncated,
  });
}
