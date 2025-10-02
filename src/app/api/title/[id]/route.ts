import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const title = await prisma.titleComponent.findUnique({
    where: { id: params.id },
  });
  if (!title) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(title);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  try {
    const updated = await prisma.titleComponent.update({
      where: { id: params.id },
      data: {
        text: body.text,
        color: body.color,
        size: body.size,
        weight: body.weight,
      },
    });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.titleComponent.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
