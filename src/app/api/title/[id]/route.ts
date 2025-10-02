import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, Prisma } from "prisma/src/generated/prisma";

const prisma = new PrismaClient();

type TitleRow = NonNullable<
  Awaited<ReturnType<typeof prisma.titleComponent.findUnique>>
>;

function toClient(row: TitleRow) {
  return {
    id: row.id,
    text: row.text,
    color: row.color,
    size: row.size,
    weight: row.weight,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const found = await prisma.titleComponent.findUnique({ where: { id } });
  if (!found) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(toClient(found));
}

type UpdateBody = Partial<Pick<TitleRow, "text" | "color" | "size" | "weight">>;

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const body = (await req.json()) as unknown;

  const data: {
    text?: string;
    color?: string;
    size?: number;
    weight?: number;
  } = {};
  if (
    typeof (body as UpdateBody).text === "string" &&
    (body as UpdateBody).text !== undefined &&
    ((body as UpdateBody).text?.length ?? -1) >= 0
  ) {
    data.text = (body as UpdateBody).text;
  }
  if (typeof (body as UpdateBody).color === "string") {
    data.color = (body as UpdateBody).color;
  }
  if (typeof (body as UpdateBody).size === "number") {
    data.size = (body as UpdateBody).size;
  }
  if (typeof (body as UpdateBody).weight === "number") {
    data.weight = (body as UpdateBody).weight;
  }

  try {
    const updated = await prisma.titleComponent.update({
      where: { id },
      data,
    });
    return NextResponse.json(toClient(updated));
  } catch (err: unknown) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2025"
    ) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    await prisma.titleComponent.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2025"
    ) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
