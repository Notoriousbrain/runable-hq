import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const component = await prisma.component.findUnique({
      where: { id: params.id },
    });
    if (!component) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(component);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch component" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { name, sourceCode, props } = await req.json();
    const component = await prisma.component.update({
      where: { id: params.id },
      data: { name, sourceCode, props },
    });
    return NextResponse.json(component);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to update component" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.component.delete({ where: { id: params.id } });
    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to delete component" },
      { status: 500 }
    );
  }
}
